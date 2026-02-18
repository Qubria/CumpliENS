import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'
import { crearClienteServicio } from '../_shared/supabase-client.ts'
import { llamarClaude, extraerJSON } from '../_shared/anthropic-client.ts'
import { generarEmbeddings } from '../_shared/openai-client.ts'
import { conReintento } from '../_shared/reintento.ts'
import { registrarPasoPipeline } from '../_shared/pipeline-logger.ts'

/**
 * analyze-phase2/index.ts (v3 - CHUNKED + PARALLEL)
 *
 * Fase 2: Verificacion de controles ENS mediante RAG doble.
 *
 * Acepta parametros `controlInicio` y `controlFin` para procesar un rango
 * de controles. El orchestrator llama esta funcion multiples veces con
 * rangos distintos para evitar el timeout de 150s de Edge Functions.
 *
 * Optimizaciones:
 * - Embeddings generados en batch (una sola llamada OpenAI)
 * - RAG searches ejecutadas en paralelo (Promise.all)
 * - Hallazgos insertados en batch por lote de Claude
 */

/** Los 73 controles del Anexo II del RD 311/2022 */
const CONTROLES_ENS = [
  'org.1', 'org.2', 'org.3', 'org.4',
  'op.pl.1', 'op.pl.2', 'op.pl.3', 'op.pl.4', 'op.pl.5',
  'op.acc.1', 'op.acc.2', 'op.acc.3', 'op.acc.4', 'op.acc.5', 'op.acc.6',
  'op.exp.1', 'op.exp.2', 'op.exp.3', 'op.exp.4', 'op.exp.5', 'op.exp.6', 'op.exp.7', 'op.exp.8', 'op.exp.9', 'op.exp.10', 'op.exp.11',
  'op.ext.1', 'op.ext.2',
  'op.nub.1', 'op.nub.2',
  'op.cont.1', 'op.cont.2', 'op.cont.3', 'op.cont.4',
  'op.mon.1', 'op.mon.2', 'op.mon.3',
  'mp.if.1', 'mp.if.2', 'mp.if.3', 'mp.if.4', 'mp.if.5', 'mp.if.6', 'mp.if.7',
  'mp.per.1', 'mp.per.2', 'mp.per.3', 'mp.per.4',
  'mp.eq.1', 'mp.eq.2', 'mp.eq.3',
  'mp.com.1', 'mp.com.2', 'mp.com.3', 'mp.com.4',
  'mp.si.1', 'mp.si.2', 'mp.si.3', 'mp.si.4', 'mp.si.5',
  'mp.sw.1', 'mp.sw.2',
  'mp.info.1', 'mp.info.2', 'mp.info.3', 'mp.info.4', 'mp.info.5', 'mp.info.6',
  'mp.s.1', 'mp.s.2', 'mp.s.3', 'mp.s.4',
  'mp.bus.1',
]

/** Mapa de nombres descriptivos para generar mejores consultas RAG */
const NOMBRES_CONTROL: Record<string, string> = {
  'org.1': 'politica de seguridad organizacion',
  'org.2': 'normativa de seguridad regulacion',
  'org.3': 'procedimientos de seguridad operativos',
  'org.4': 'proceso de autorizacion',
  'op.pl.1': 'analisis de riesgos evaluacion amenazas',
  'op.pl.2': 'arquitectura de seguridad diseño',
  'op.pl.3': 'adquisicion de nuevos componentes',
  'op.pl.4': 'dimensionamiento gestion capacidades',
  'op.pl.5': 'componentes certificados productos cualificados',
  'op.acc.1': 'identificacion autenticacion usuarios',
  'op.acc.2': 'requisitos de acceso control privilegios',
  'op.acc.3': 'segregacion de funciones separacion tareas',
  'op.acc.4': 'gestion de derechos de acceso permisos',
  'op.acc.5': 'mecanismo de autenticacion contraseñas certificados',
  'op.acc.6': 'acceso local al equipo terminal',
  'op.exp.1': 'inventario de activos registro recursos',
  'op.exp.2': 'configuracion de seguridad bastionado',
  'op.exp.3': 'gestion de la configuracion cambios',
  'op.exp.4': 'mantenimiento actualizaciones parches',
  'op.exp.5': 'gestion de cambios control versiones',
  'op.exp.6': 'proteccion frente a codigo dañino malware antivirus',
  'op.exp.7': 'gestion de incidentes respuesta',
  'op.exp.8': 'registro de la actividad logs auditoria',
  'op.exp.9': 'registro de la gestion de incidentes',
  'op.exp.10': 'proteccion de los registros logs',
  'op.exp.11': 'proteccion de claves criptograficas',
  'op.ext.1': 'contratacion y acuerdos de nivel de servicio SLA',
  'op.ext.2': 'gestion diaria supervision operacion',
  'op.nub.1': 'contratacion de servicios en la nube cloud',
  'op.nub.2': 'operacion de servicios en la nube cloud',
  'op.cont.1': 'analisis de impacto continuidad negocio',
  'op.cont.2': 'plan de continuidad operativa',
  'op.cont.3': 'pruebas periodicas continuidad',
  'op.cont.4': 'medios alternativos recuperacion',
  'op.mon.1': 'deteccion de intrusiones monitorizacion',
  'op.mon.2': 'sistema de metricas indicadores',
  'op.mon.3': 'vigilancia amenazas alertas',
  'mp.if.1': 'areas separadas control acceso fisico',
  'mp.if.2': 'identificacion de las personas acceso',
  'mp.if.3': 'acondicionamiento de los locales climatizacion',
  'mp.if.4': 'energia electrica alimentacion',
  'mp.if.5': 'proteccion frente a incendios',
  'mp.if.6': 'proteccion frente a inundaciones',
  'mp.if.7': 'registro de entrada y salida de equipamiento',
  'mp.per.1': 'caracterizacion del puesto de trabajo perfil',
  'mp.per.2': 'deberes y obligaciones del personal',
  'mp.per.3': 'concienciacion formacion seguridad',
  'mp.per.4': 'gestion del personal terceros',
  'mp.eq.1': 'puesto de trabajo despejado bloqueo pantalla',
  'mp.eq.2': 'bloqueo del puesto de trabajo sesion',
  'mp.eq.3': 'proteccion de dispositivos portatiles moviles',
  'mp.com.1': 'perimetro seguro red cortafuegos',
  'mp.com.2': 'proteccion de la confidencialidad cifrado comunicaciones',
  'mp.com.3': 'proteccion de la autenticidad integridad comunicaciones',
  'mp.com.4': 'segregacion de redes VLANs',
  'mp.si.1': 'etiquetado de soportes clasificacion informacion',
  'mp.si.2': 'criptografia cifrado soportes',
  'mp.si.3': 'custodia de soportes almacenamiento',
  'mp.si.4': 'transporte de soportes movimiento',
  'mp.si.5': 'borrado y destruccion de soportes',
  'mp.sw.1': 'desarrollo de aplicaciones seguro programacion',
  'mp.sw.2': 'aceptacion y puesta en servicio despliegue',
  'mp.info.1': 'datos de caracter personal RGPD proteccion datos',
  'mp.info.2': 'calificacion de la informacion clasificacion',
  'mp.info.3': 'cifrado de la informacion',
  'mp.info.4': 'firma electronica digital',
  'mp.info.5': 'sellos de tiempo timestamping',
  'mp.info.6': 'limpieza de documentos metadatos',
  'mp.s.1': 'proteccion del correo electronico email',
  'mp.s.2': 'proteccion de servicios y aplicaciones web',
  'mp.s.3': 'proteccion de la navegacion web proxy filtrado',
  'mp.s.4': 'proteccion frente a denegacion de servicio DDoS',
  'mp.bus.1': 'copias de seguridad backup respaldo',
}

Deno.serve(async (req: Request) => {
  const cors = manejarCors(req)
  if (cors) return cors

  try {
    const body = await req.json()
    const analisisId = body.analisisId
    const controlInicio: number = body.controlInicio ?? 0
    const controlFin: number = body.controlFin ?? CONTROLES_ENS.length

    const supabase = crearClienteServicio()
    const tiempoInicio = Date.now()

    // Slice controles para este chunk
    const controlesChunk = CONTROLES_ENS.slice(controlInicio, controlFin)

    if (controlesChunk.length === 0) {
      return new Response(JSON.stringify({ error: 'No hay controles en el rango especificado' }), {
        status: 400,
        headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
      })
    }

    console.log(`Fase 2: Procesando chunk [${controlInicio}-${controlFin}] = ${controlesChunk.length} controles`)

    await registrarPasoPipeline(analisisId, 'analyze-phase2', 'iniciado', {
      resumenEntrada: { controlInicio, controlFin, cantidadControles: controlesChunk.length },
    })

    // ── 1. Obtener analisis con resultados de Fase 1 ──
    const { data: analisis } = await supabase
      .from('analisis')
      .select('*')
      .eq('id', analisisId)
      .single()

    if (!analisis) throw new Error('Analisis no encontrado')
    if (!analisis.categoria_ens) throw new Error('Fase 1 no completada')

    // SIEMPRE evaluar como ALTA independientemente de la clasificacion de Fase 1
    const categoria = 'ALTA'
    const idsPliegosRAG = [analisis.documento_objetivo_id]
    if (analisis.documento_tecnico_id) idsPliegosRAG.push(analisis.documento_tecnico_id as string)

    // ── 2. Obtener IDs de todos los documentos de norma ──
    const { data: docNormas, error: errorNormas } = await supabase
      .from('documentos')
      .select('id')
      .eq('tipo_documento', 'NORMA_ENS')

    if (errorNormas) throw new Error(`Error obteniendo normas: ${errorNormas.message}`)
    if (!docNormas || docNormas.length === 0) {
      throw new Error('No hay normas ingresadas. Inicia la ingesta de normas primero.')
    }

    const idsNormasRAG = docNormas.map((d: { id: string }) => d.id)

    // ── 3. Generar TODOS los embeddings del chunk en una sola llamada ──
    const consultasControl = controlesChunk.map(id => {
      const nombre = NOMBRES_CONTROL[id] ?? id
      return `${id} ${nombre} ENS requisitos seguridad`
    })

    console.log(`Fase 2: Generando ${consultasControl.length} embeddings en batch...`)

    const embeddings = await conReintento(
      () => generarEmbeddings(consultasControl),
      { maxIntentos: 2, retrasoBaseMs: 1000, factorExponencial: 2, codigosReintentables: [429, 500, 502, 503, 529] },
    )

    // ── 4. RAG doble en PARALELO para todos los controles del chunk ──
    console.log(`Fase 2: Ejecutando ${controlesChunk.length * 2} busquedas RAG en paralelo...`)

    const datosControles = await Promise.all(controlesChunk.map(async (controlId, idx) => {
      const embedding = embeddings[idx]

      try {
        const [resultNorma, resultPliego] = await Promise.all([
          supabase.rpc('buscar_fragmentos', {
            query_embedding: JSON.stringify(embedding),
            umbral_similitud: 0.50,
            cantidad_resultados: 5,
            filtrar_documento_ids: idsNormasRAG,
          }),
          supabase.rpc('buscar_fragmentos', {
            query_embedding: JSON.stringify(embedding),
            umbral_similitud: 0.55,
            cantidad_resultados: 6,
            filtrar_documento_ids: idsPliegosRAG,
          }),
        ])

        return {
          controlId,
          fragmentosNorma: (resultNorma.data ?? []).map((f: { contenido: string; jerarquia_encabezados: string[] }) => ({
            contenido: f.contenido,
            jerarquia: f.jerarquia_encabezados ?? [],
          })),
          fragmentosPliego: (resultPliego.data ?? []).map((f: { contenido: string; jerarquia_encabezados: string[] }) => ({
            contenido: f.contenido,
            jerarquia: f.jerarquia_encabezados ?? [],
          })),
        }
      } catch (err) {
        console.error(`Error RAG para control ${controlId}: ${err}`)
        return { controlId, fragmentosNorma: [] as { contenido: string; jerarquia: string[] }[], fragmentosPliego: [] as { contenido: string; jerarquia: string[] }[] }
      }
    }))

    // ── 5. Procesar controles en lotes de 3 con Claude ──
    const TAMANO_LOTE = 3
    let totalTokensEntrada = 0
    let totalTokensSalida = 0
    let cantidadConforme = 0
    let cantidadParcial = 0
    let cantidadNoConforme = 0
    let cantidadNoAplica = 0

    for (let i = 0; i < datosControles.length; i += TAMANO_LOTE) {
      const lote = datosControles.slice(i, i + TAMANO_LOTE)

      // Construir secciones del prompt
      const seccionesControles = lote.map(({ controlId, fragmentosNorma, fragmentosPliego }) => {
        const nombreDesc = NOMBRES_CONTROL[controlId] ?? controlId

        const textoNorma = fragmentosNorma.length > 0
          ? fragmentosNorma.map((f, idx) => {
              const jer = f.jerarquia.length > 0 ? `[${f.jerarquia.join(' > ')}]\n` : ''
              return `  Fragmento ${idx + 1}:\n  ${jer}  ${f.contenido}`
            }).join('\n\n')
          : '  [Sin fragmentos de norma encontrados]'

        const textoPliego = fragmentosPliego.length > 0
          ? fragmentosPliego.map((f, idx) => {
              const jer = f.jerarquia.length > 0 ? `[${f.jerarquia.join(' > ')}]\n` : ''
              return `  Fragmento ${idx + 1}:\n  ${jer}  ${f.contenido}`
            }).join('\n\n')
          : '  [Sin evidencia del pliego encontrada]'

        return `━━━ CONTROL: ${controlId} - ${nombreDesc} ━━━

NORMA (requisitos CCN-STIC):
${textoNorma}

PLIEGO (evidencia):
${textoPliego}`
      }).join('\n\n')

      // Llamar a Claude
      try {
        const promptSistema = `Eres letrado de Derecho Publico evaluando el cumplimiento ENS de un pliego de contratacion publica desde la perspectiva de un recurso especial (arts. 44-60 LCSP).

CATEGORIA DEL SISTEMA: ALTA (siempre se evalua contra los requisitos maximos del RD 311/2022, Anexo II, nivel ALTO).

PERSPECTIVA JURIDICA: Cada control se evalua como potencial vicio impugnable del pliego. Las infracciones del ENS en categoria ALTA constituyen infracciones de norma reglamentaria imperativa (art. 47.1.e LPAC).

INSTRUCCIONES:
1. Para cada control ENS, compara los REQUISITOS de categoria ALTA de las normas CCN-STIC con la EVIDENCIA del pliego.
2. Si el pliego no aborda el control, no menciona las medidas de categoria ALTA, o no hay evidencia: NO_CONFORME (omision normativa impugnable).
3. Si el pliego lo aborda parcialmente, solo cumple requisitos de MEDIA/BASICA pero no ALTA, o tiene ambiguedad: PARCIALMENTE_CONFORME (clausula viciada).
4. Si el pliego cumple claramente los requisitos de categoria ALTA: CONFORME.
5. Si el control no aplica al tipo de contrato: NO_APLICA.
6. Usa razonamiento IRAC juridico para cada evaluacion: Issue (vicio del pliego), Rule (norma imperativa infringida), Application (nexo clausula-norma), Conclusion (consecuencia juridica).
7. Cita textualmente del pliego cuando encuentres evidencia.
8. En descripcion_brecha: identifica que medida ALTA especifica falta (cita el requisito concreto del Anexo II para categoria ALTA).
9. En recomendacion: redacta como clausula que deberia incluir el pliego para cumplir categoria ALTA.
10. VOCABULARIO: Usa "infraccion", "omision normativa", "clausula viciada", "vicio del pliego". NO uses "hallazgo", "brecha", "gap".

RESPONDE EXCLUSIVAMENTE en JSON valido (array):
[
  {
    "control_id": "string",
    "nombre_control": "string (nombre descriptivo)",
    "categoria_control": "Marco Organizativo | Marco Operacional | Medidas de Proteccion",
    "nivel_cumplimiento": "CONFORME | PARCIALMENTE_CONFORME | NO_CONFORME | NO_APLICA",
    "resumen_hallazgo": "string (resumen conciso)",
    "texto_evidencia": "string (cita textual del pliego) o null",
    "descripcion_brecha": "string (que falta o que falla) o null",
    "recomendacion": "string (accion correctiva) o null",
    "prioridad": "CRITICA | ALTA | MEDIA | BAJA",
    "irac_asunto": "string",
    "irac_regla": "string",
    "irac_aplicacion": "string",
    "irac_conclusion": "string"
  }
]`

        const { texto, tokensEntrada, tokensSalida } = await conReintento(
          () => llamarClaude(
            promptSistema,
            [{ role: 'user', content: `Evalua estos ${lote.length} controles ENS:\n\n${seccionesControles}` }],
            Math.min(6000, lote.length * 2000),
          ),
          { maxIntentos: 3, retrasoBaseMs: 1000, factorExponencial: 2, codigosReintentables: [429, 500, 502, 503, 529] },
        )

        totalTokensEntrada += tokensEntrada
        totalTokensSalida += tokensSalida

        const resultados = extraerJSON<{
          control_id: string
          nombre_control: string
          categoria_control: string
          nivel_cumplimiento: string
          resumen_hallazgo: string
          texto_evidencia: string | null
          descripcion_brecha: string | null
          recomendacion: string | null
          prioridad: string
          irac_asunto: string
          irac_regla: string
          irac_aplicacion: string
          irac_conclusion: string
        }[]>(texto)

        // Insertar hallazgos en batch
        const hallazgosInsertar = resultados.map(resultado => {
          const categoriaControl = resultado.control_id.startsWith('org') ? 'Marco Organizativo'
            : resultado.control_id.startsWith('op') ? 'Marco Operacional'
            : resultado.control_id.startsWith('mp') ? 'Medidas de Proteccion'
            : resultado.categoria_control || 'Otros'

          switch (resultado.nivel_cumplimiento) {
            case 'CONFORME': cantidadConforme++; break
            case 'PARCIALMENTE_CONFORME': cantidadParcial++; break
            case 'NO_CONFORME': cantidadNoConforme++; break
            case 'NO_APLICA': cantidadNoAplica++; break
          }

          return {
            analisis_id: analisisId,
            control_id: resultado.control_id,
            nombre_control: resultado.nombre_control || NOMBRES_CONTROL[resultado.control_id] || resultado.control_id,
            categoria_control: categoriaControl,
            nivel_cumplimiento: resultado.nivel_cumplimiento,
            resumen_hallazgo: resultado.resumen_hallazgo,
            texto_evidencia: resultado.texto_evidencia,
            descripcion_brecha: resultado.descripcion_brecha,
            recomendacion: resultado.recomendacion,
            prioridad: resultado.prioridad,
            irac_asunto: resultado.irac_asunto,
            irac_regla: resultado.irac_regla,
            irac_aplicacion: resultado.irac_aplicacion,
            irac_conclusion: resultado.irac_conclusion,
          }
        })

        if (hallazgosInsertar.length > 0) {
          await supabase.from('hallazgos_analisis').insert(hallazgosInsertar)
        }

        console.log(`Fase 2: Lote ${Math.floor(i / TAMANO_LOTE) + 1} completado (${lote.length} controles)`)
      } catch (err) {
        console.error(`Error verificando lote de controles [${lote.map(c => c.controlId).join(',')}]: ${err}`)
      }
    }

    const duracion = Date.now() - tiempoInicio

    console.log(`Fase 2 chunk [${controlInicio}-${controlFin}] completado en ${duracion}ms: C=${cantidadConforme} P=${cantidadParcial} NC=${cantidadNoConforme} NA=${cantidadNoAplica}`)

    await registrarPasoPipeline(analisisId, 'analyze-phase2', 'completado', {
      resumenSalida: {
        controlInicio,
        controlFin,
        cantidadConforme,
        cantidadParcial,
        cantidadNoConforme,
        cantidadNoAplica,
      },
      duracionMs: duracion,
      tokensUsados: { input_tokens: totalTokensEntrada, output_tokens: totalTokensSalida },
    })

    return new Response(JSON.stringify({
      controlInicio,
      controlFin,
      controlesVerificados: controlesChunk.length,
      cantidadConforme,
      cantidadParcial,
      cantidadNoConforme,
      cantidadNoAplica,
      tokensEntrada: totalTokensEntrada,
      tokensSalida: totalTokensSalida,
      duracionMs: duracion,
    }), {
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : 'Error desconocido'
    console.error('Error Fase 2:', mensaje)
    return new Response(JSON.stringify({ error: mensaje }), {
      status: 500,
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  }
})
