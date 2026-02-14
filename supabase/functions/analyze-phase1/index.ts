import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'
import { crearClienteServicio } from '../_shared/supabase-client.ts'
import { llamarClaude, extraerJSON } from '../_shared/anthropic-client.ts'
import { registrarPasoPipeline, actualizarProgresoAnalisis } from '../_shared/pipeline-logger.ts'

const PROMPT_SISTEMA = `Eres un auditor experto en el Esquema Nacional de Seguridad (ENS) de España, regulado por el Real Decreto 311/2022. Tu tarea es clasificar el documento de licitacion publica proporcionado.

CONTEXTO NORMATIVO:
- El ENS es obligatorio para todo el sector publico español y sus proveedores de servicios TIC.
- Los pliegos de contratacion publica que incluyen servicios tecnologicos SIEMPRE estan sujetos al ENS.
- Las categorias se determinan segun el Anexo I del RD 311/2022.
- Las dimensiones de seguridad son: Confidencialidad (C), Integridad (I), Disponibilidad (D), Trazabilidad (T) y Autenticidad (A).
- Niveles por dimension: BAJO, MEDIO, ALTO.
- BASICA: todos los niveles son BAJO.
- MEDIA: al menos un nivel es MEDIO (ninguno ALTO).
- ALTA: al menos un nivel es ALTO.

IMPORTANTE: Si el documento es un pliego de licitacion publica que involucra servicios TIC, gestion de datos, o infraestructura tecnologica para el sector publico, el ENS ES APLICABLE. Solo marca como no aplicable si el documento claramente no tiene ninguna relacion con el sector publico o con servicios de informacion.

INSTRUCCIONES:
1. Analiza el texto del pliego proporcionado.
2. Determina la categoria ENS evaluando el impacto en cada dimension.
3. Identifica el perfil sectorial y los sistemas tecnologicos mencionados.

RESPONDE EXCLUSIVAMENTE en formato JSON valido:
{
  "es_aplicable": boolean,
  "justificacion_aplicabilidad": "string (1-2 parrafos)",
  "categoria_ens": "BASICA" | "MEDIA" | "ALTA",
  "dimensiones": {
    "confidencialidad": {"nivel": "BAJO|MEDIO|ALTO", "justificacion": "string breve"},
    "integridad": {"nivel": "BAJO|MEDIO|ALTO", "justificacion": "string breve"},
    "disponibilidad": {"nivel": "BAJO|MEDIO|ALTO", "justificacion": "string breve"},
    "trazabilidad": {"nivel": "BAJO|MEDIO|ALTO", "justificacion": "string breve"},
    "autenticidad": {"nivel": "BAJO|MEDIO|ALTO", "justificacion": "string breve"}
  },
  "justificacion_categoria": "string (1 parrafo)",
  "factores_determinantes": ["string array, max 5 factores"],
  "perfil_sectorial": "universidad" | "salud" | "diputacion" | "ayuntamiento" | "ministerio" | "comunidad_autonoma" | "empresa_publica" | "proveedor_tic" | "otro",
  "proveedores_nube": ["solo los mencionados en el pliego"],
  "tipos_sistema": ["solo los mencionados en el pliego"]
}

NO incluyas "controles_aplicables". Solo la clasificacion general.`

Deno.serve(async (req: Request) => {
  const cors = manejarCors(req)
  if (cors) return cors

  try {
    const { analisisId } = await req.json()
    const supabase = crearClienteServicio()
    const tiempoInicio = Date.now()

    await registrarPasoPipeline(analisisId, 'analyze-phase1', 'iniciado')

    // Obtener detalles del analisis
    const { data: analisis } = await supabase
      .from('analisis')
      .select('documento_objetivo_id, documento_tecnico_id, documentos_referencia_ids')
      .eq('id', analisisId)
      .single()

    if (!analisis) throw new Error('Analisis no encontrado')

    // Recopilar IDs de todos los documentos del pliego
    const idsDocumentos = [analisis.documento_objetivo_id]
    if (analisis.documento_tecnico_id) {
      idsDocumentos.push(analisis.documento_tecnico_id)
    }

    // LECTURA DIRECTA: Obtener fragmentos directamente ordenados por indice (no RAG)
    // Esto garantiza que leemos el contenido real del documento
    const fragmentosTodos: { contenido: string; jerarquia_encabezados: string[]; documento_id: string }[] = []

    for (const docId of idsDocumentos) {
      const { data: fragmentos } = await supabase
        .from('fragmentos_documento')
        .select('contenido, jerarquia_encabezados, documento_id')
        .eq('documento_id', docId)
        .order('indice_fragmento', { ascending: true })
        .limit(20) // Primeros 20 fragmentos de cada documento

      if (fragmentos) {
        fragmentosTodos.push(...(fragmentos as typeof fragmentosTodos))
      }
    }

    if (fragmentosTodos.length === 0) {
      throw new Error('No se encontraron fragmentos del pliego')
    }

    // Construir contexto con los fragmentos directos
    const textoContexto = fragmentosTodos
      .map((f, i) => {
        const jerarquia = f.jerarquia_encabezados?.length > 0
          ? `[${f.jerarquia_encabezados.join(' > ')}]\n`
          : ''
        return `--- Fragmento ${i + 1} ---\n${jerarquia}${f.contenido}`
      })
      .join('\n\n')

    console.log(`Fase 1: Enviando ${fragmentosTodos.length} fragmentos, ~${textoContexto.length} chars`)

    // Llamar a Claude
    const { texto, tokensEntrada, tokensSalida } = await llamarClaude(
      PROMPT_SISTEMA,
      [{ role: 'user', content: `PLIEGO DE LICITACION A CLASIFICAR:\n\n${textoContexto}` }],
      4096
    )

    const resultado = extraerJSON<{
      es_aplicable: boolean
      justificacion_aplicabilidad: string
      categoria_ens: string
      dimensiones: Record<string, { nivel: string; justificacion: string }>
      justificacion_categoria: string
      factores_determinantes: string[]
      perfil_sectorial: string
      proveedores_nube: string[]
      tipos_sistema: string[]
    }>(texto)

    // Guardar resultados
    await supabase.from('analisis').update({
      categoria_ens: resultado.es_aplicable ? resultado.categoria_ens : null,
      justificacion_categoria: resultado.justificacion_categoria,
      dimensiones_afectadas: resultado.dimensiones,
      perfil_sectorial: resultado.perfil_sectorial ?? null,
      proveedores_nube: resultado.proveedores_nube ?? [],
      total_tokens_entrada: tokensEntrada,
      total_tokens_salida: tokensSalida,
    }).eq('id', analisisId)

    const duracion = Date.now() - tiempoInicio

    await registrarPasoPipeline(analisisId, 'analyze-phase1', 'completado', {
      resumenSalida: {
        aplicable: resultado.es_aplicable,
        categoria: resultado.categoria_ens,
        perfilSectorial: resultado.perfil_sectorial,
        proveedoresNube: resultado.proveedores_nube,
        tiposSistema: resultado.tipos_sistema,
        fragmentosAnalizados: fragmentosTodos.length,
      },
      duracionMs: duracion,
      tokensUsados: { input_tokens: tokensEntrada, output_tokens: tokensSalida },
    })

    await actualizarProgresoAnalisis(
      analisisId,
      'FASE1_APLICABILIDAD',
      40,
      `Fase 1 completada: Categoria ${resultado.categoria_ens}, Perfil: ${resultado.perfil_sectorial}`
    )

    return new Response(JSON.stringify(resultado), {
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : 'Error desconocido'
    console.error('Error Fase 1:', mensaje)
    return new Response(JSON.stringify({ error: mensaje }), {
      status: 500,
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  }
})
