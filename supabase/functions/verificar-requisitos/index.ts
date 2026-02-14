import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'
import { crearClienteServicio } from '../_shared/supabase-client.ts'
import { llamarClaude, extraerJSON } from '../_shared/anthropic-client.ts'
import { generarEmbeddingUnico } from '../_shared/openai-client.ts'
import { conReintento, ErrorHTTP } from '../_shared/reintento.ts'
import { registrarPasoPipeline } from '../_shared/pipeline-logger.ts'

/**
 * verificar-requisitos/index.ts
 *
 * Verifica un LOTE de requisitos pre-extraidos contra los fragmentos de un
 * pliego tecnico. Para cada requisito:
 *   1. Busca evidencia en el pliego via RAG (multi-query)
 *   2. Agrupa requisitos + evidencia
 *   3. Claude evalua cumplimiento con metodologia IRAC
 *   4. Guarda resultados en verificacion_requisitos
 *
 * Entrada: { analisisId, requisitos: RequisitoPendiente[], documentoObjetivoId, categoriaEns }
 * Salida:  { verificados: number, resultados: ResultadoVerificacion[] }
 */

interface RequisitoPendiente {
  requisito_id: string
  norma_metadata_id: string
  nombre_archivo: string
  seccion_fuente: string | null
  texto_requisito: string
  resumen_requisito: string
  control_ids_ens: string[]
  niveles_ens: string[]
  criterios_verificacion: string | null
  palabras_clave: string[] | null
  es_obligatorio: boolean
}

interface ResultadoVerificacion {
  requisito_id: string
  control_id: string
  nivel_cumplimiento: string
  evidencia_texto: string | null
  explicacion: string
  confianza: number
  ids_fragmentos_fuente: string[]
}

interface FragmentoRecuperado {
  id: string
  contenido: string
  jerarquia_encabezados: string[]
  similitud: number
}

function construirPromptSistema(categoriaEns: string): string {
  return `Eres un auditor ENS (Esquema Nacional de Seguridad, RD 311/2022) verificando requisitos especificos de guias CCN-STIC contra un pliego tecnico.

CATEGORIA DEL SISTEMA: ${categoriaEns}

INSTRUCCIONES:
1. Para cada requisito, evalua si el pliego tecnico lo cumple basandote EXCLUSIVAMENTE en la evidencia proporcionada.
2. Si NO hay evidencia del pliego para un requisito, es NO_CONFORME (el pliego no lo aborda).
3. Usa metodologia IRAC para cada evaluacion.
4. Cita textualmente del pliego cuando encuentres evidencia.
5. La confianza refleja la calidad de la evidencia encontrada:
   - 0.9-1.0: Evidencia clara y directa
   - 0.7-0.9: Evidencia indirecta pero suficiente
   - 0.5-0.7: Evidencia ambigua
   - 0.1-0.5: Poca o nula evidencia

RESPONDE EXCLUSIVAMENTE en JSON valido con esta estructura (array):
[
  {
    "requisito_id": "string (ID del requisito evaluado)",
    "control_id": "string (control ENS principal al que aplica)",
    "nivel_cumplimiento": "CONFORME" | "PARCIALMENTE_CONFORME" | "NO_CONFORME" | "NO_APLICA",
    "evidencia_texto": "string (cita textual del pliego) o null",
    "explicacion": "string (razonamiento IRAC completo: asunto, regla, aplicacion, conclusion)",
    "confianza": 0.0-1.0
  }
]`
}

/** Genera 2-3 queries de busqueda variados para un requisito */
function generarConsultasBusqueda(requisito: RequisitoPendiente): string[] {
  const consultas: string[] = []

  // Query 1: Resumen directo
  consultas.push(requisito.resumen_requisito)

  // Query 2: Palabras clave combinadas con control
  if (requisito.palabras_clave && requisito.palabras_clave.length > 0) {
    const claves = requisito.palabras_clave.slice(0, 5).join(' ')
    consultas.push(`${claves} ${requisito.control_ids_ens[0] ?? ''}`)
  }

  // Query 3: Criterios de verificacion si existen
  if (requisito.criterios_verificacion) {
    consultas.push(requisito.criterios_verificacion.slice(0, 200))
  }

  return consultas
}

Deno.serve(async (req: Request) => {
  const cors = manejarCors(req)
  if (cors) return cors

  try {
    const {
      analisisId,
      requisitos,
      documentoObjetivoId,
      categoriaEns,
    }: {
      analisisId: string
      requisitos: RequisitoPendiente[]
      documentoObjetivoId: string
      categoriaEns: string
    } = await req.json()

    if (!analisisId || !requisitos?.length || !documentoObjetivoId || !categoriaEns) {
      return new Response(JSON.stringify({
        error: 'Se requieren analisisId, requisitos[], documentoObjetivoId y categoriaEns',
      }), {
        status: 400,
        headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
      })
    }

    const supabase = crearClienteServicio()
    const tiempoInicio = Date.now()

    // ── 1. Recuperar evidencia del pliego para cada requisito ──
    const evidenciaPorRequisito: Map<string, FragmentoRecuperado[]> = new Map()
    const todosFragmentosUnicos: Map<string, FragmentoRecuperado> = new Map()

    for (const requisito of requisitos) {
      const consultas = generarConsultasBusqueda(requisito)
      const fragmentosRequisito: Map<string, FragmentoRecuperado> = new Map()

      for (const consulta of consultas) {
        const embeddingConsulta = await conReintento(
          () => generarEmbeddingUnico(consulta),
          { maxIntentos: 2, retrasoBaseMs: 500, factorExponencial: 2, codigosReintentables: [429, 500, 502, 503, 529] },
        )

        const { data: coincidencias } = await supabase.rpc('buscar_fragmentos', {
          query_embedding: JSON.stringify(embeddingConsulta),
          umbral_similitud: 0.60,
          cantidad_resultados: 10,
          filtrar_documento_ids: [documentoObjetivoId],
        })

        for (const c of (coincidencias ?? [])) {
          const existente = fragmentosRequisito.get(c.id)
          if (!existente || c.similarity > existente.similitud) {
            const frag: FragmentoRecuperado = {
              id: c.id,
              contenido: c.contenido,
              jerarquia_encabezados: c.jerarquia_encabezados ?? [],
              similitud: c.similarity,
            }
            fragmentosRequisito.set(c.id, frag)
            todosFragmentosUnicos.set(c.id, frag)
          }
        }
      }

      // Top 8 fragmentos por requisito
      const mejores = [...fragmentosRequisito.values()]
        .sort((a, b) => b.similitud - a.similitud)
        .slice(0, 8)

      evidenciaPorRequisito.set(requisito.requisito_id, mejores)
    }

    // ── 2. Construir prompt con todos los requisitos y su evidencia ──
    const promptSistema = construirPromptSistema(categoriaEns)

    const seccionesRequisitos = requisitos.map((req) => {
      const evidencia = evidenciaPorRequisito.get(req.requisito_id) ?? []

      const textoEvidencia = evidencia.length > 0
        ? evidencia.map((f, i) => {
            const jerarquia = f.jerarquia_encabezados.length > 0
              ? `[${f.jerarquia_encabezados.join(' > ')}]\n`
              : ''
            return `  Fragmento ${i + 1} (similitud: ${f.similitud.toFixed(2)}):\n  ${jerarquia}  ${f.contenido}`
          }).join('\n\n')
        : '  [SIN EVIDENCIA ENCONTRADA EN EL PLIEGO]'

      return `━━━ REQUISITO: ${req.requisito_id} ━━━
Norma fuente: ${req.nombre_archivo}
Seccion: ${req.seccion_fuente ?? 'N/A'}
Control ENS: ${req.control_ids_ens.join(', ')}
Niveles: ${req.niveles_ens.join(', ')}
Obligatorio: ${req.es_obligatorio ? 'SI' : 'RECOMENDADO'}

TEXTO DEL REQUISITO:
${req.texto_requisito}

CRITERIOS DE VERIFICACION:
${req.criterios_verificacion ?? 'Verificar presencia en el pliego tecnico'}

EVIDENCIA DEL PLIEGO:
${textoEvidencia}`
    }).join('\n\n')

    // ── 3. Llamar a Claude con reintento ──
    const { texto, tokensEntrada, tokensSalida } = await conReintento(
      async () => {
        const resp = await llamarClaude(
          promptSistema,
          [{
            role: 'user',
            content: `Evalua los siguientes ${requisitos.length} requisitos contra el pliego tecnico:\n\n${seccionesRequisitos}`,
          }],
          Math.min(4096, requisitos.length * 500),
        )
        return resp
      },
      { maxIntentos: 3, retrasoBaseMs: 1000, factorExponencial: 2, codigosReintentables: [429, 500, 502, 503, 529] },
    )

    const resultados = extraerJSON<ResultadoVerificacion[]>(texto)

    // ── 4. Guardar cada verificacion en BD ──
    const verificacionesGuardadas: ResultadoVerificacion[] = []

    for (const resultado of resultados) {
      const requisito = requisitos.find((r) => r.requisito_id === resultado.requisito_id)
      if (!requisito) continue

      const evidenciaFragmentos = evidenciaPorRequisito.get(resultado.requisito_id) ?? []
      const idsFragmentos = evidenciaFragmentos.map((f) => f.id)

      const controlId = resultado.control_id || requisito.control_ids_ens[0] || 'desconocido'

      const { error: errorInsert } = await supabase.from('verificacion_requisitos').insert({
        analisis_id: analisisId,
        requisito_id: resultado.requisito_id,
        norma_fuente: requisito.nombre_archivo,
        control_id: controlId,
        nivel_cumplimiento: resultado.nivel_cumplimiento as 'CONFORME' | 'PARCIALMENTE_CONFORME' | 'NO_CONFORME' | 'NO_APLICA',
        evidencia_texto: resultado.evidencia_texto,
        explicacion: resultado.explicacion,
        confianza: Math.max(0, Math.min(1, resultado.confianza)),
        ids_fragmentos_fuente: idsFragmentos,
      })

      if (errorInsert) {
        console.error(`Error insertando verificacion ${resultado.requisito_id}: ${errorInsert.message}`)
      } else {
        verificacionesGuardadas.push({
          ...resultado,
          ids_fragmentos_fuente: idsFragmentos,
        })
      }
    }

    // ── 5. Log del paso ──
    const duracion = Date.now() - tiempoInicio

    await registrarPasoPipeline(analisisId, 'verificar-requisitos', 'completado', {
      resumenSalida: {
        requisitosRecibidos: requisitos.length,
        verificacionesGuardadas: verificacionesGuardadas.length,
        fragmentosUnicos: todosFragmentosUnicos.size,
      },
      duracionMs: duracion,
      tokensUsados: { input_tokens: tokensEntrada, output_tokens: tokensSalida },
    })

    return new Response(JSON.stringify({
      verificados: verificacionesGuardadas.length,
      resultados: verificacionesGuardadas,
      tokensEntrada,
      tokensSalida,
      duracionMs: duracion,
    }), {
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : 'Error desconocido'
    console.error('Error verificar-requisitos:', mensaje)

    return new Response(JSON.stringify({ error: mensaje }), {
      status: error instanceof ErrorHTTP ? error.codigoEstado : 500,
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  }
})
