import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'
import { crearClienteServicio } from '../_shared/supabase-client.ts'
import { actualizarProgresoAnalisis, registrarPasoPipeline } from '../_shared/pipeline-logger.ts'

/**
 * pipeline-orchestrator/index.ts
 *
 * Orquestador LIGERO: solo maneja setup + Fase 1.
 * La Fase 2 (chunks) y REMC los dirige el cliente (analysis-service.ts)
 * para evitar el timeout de 150s de Edge Functions.
 *
 * Pasos:
 *   1. Verificar fragmentos y embeddings del pliego (PCAP + PPT)
 *   2. Verificar normas ENS ingresadas
 *   3. Fase 1: Clasificacion (aplicabilidad, categoria, sector)
 *   4. Retornar resultado para que el cliente continue
 */

Deno.serve(async (req: Request) => {
  const cors = manejarCors(req)
  if (cors) return cors

  try {
    const { analisisId } = await req.json()
    if (!analisisId) {
      return new Response(JSON.stringify({ error: 'analisisId requerido' }), {
        status: 400,
        headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
      })
    }

    const supabase = crearClienteServicio()
    const urlBase = Deno.env.get('SUPABASE_URL')!
    // Reenviar el Authorization header de la peticion entrante para llamadas internas
    const authHeader = req.headers.get('Authorization') ?? `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!}`

    // Obtener detalles del analisis
    const { data: analisis, error: errorConsulta } = await supabase
      .from('analisis')
      .select('*, documento_objetivo:documentos!documento_objetivo_id(*)')
      .eq('id', analisisId)
      .single()

    if (errorConsulta || !analisis) {
      throw new Error(`Analisis no encontrado: ${errorConsulta?.message}`)
    }

    const documentoTecnicoId = analisis.documento_tecnico_id as string | null

    await registrarPasoPipeline(analisisId, 'pipeline-orchestrator', 'iniciado', {
      resumenEntrada: {
        documentoObjetivoId: analisis.documento_objetivo_id,
        documentoTecnicoId: documentoTecnicoId ?? 'ninguno',
      },
    })

    // ══════════════════════════════════════════════════════════════
    // PASO 1: Verificar fragmentos y generar embeddings del pliego
    // ══════════════════════════════════════════════════════════════
    const { count: cantidadFragmentos } = await supabase
      .from('fragmentos_documento')
      .select('*', { count: 'exact', head: true })
      .eq('documento_id', analisis.documento_objetivo_id)

    if (!cantidadFragmentos || cantidadFragmentos === 0) {
      await actualizarProgresoAnalisis(analisisId, 'FALLIDO', 0, 'El documento no tiene fragmentos. Vuelve a subirlo.')
      return new Response(JSON.stringify({ error: 'El documento no tiene fragmentos' }), {
        status: 400,
        headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
      })
    }

    const { count: cantidadConEmbedding } = await supabase
      .from('fragmentos_documento')
      .select('*', { count: 'exact', head: true })
      .eq('documento_id', analisis.documento_objetivo_id)
      .not('embedding', 'is', null)

    if (!cantidadConEmbedding || cantidadConEmbedding < cantidadFragmentos) {
      await actualizarProgresoAnalisis(analisisId, 'GENERANDO_EMBEDDINGS', 15, 'Generando embeddings del pliego administrativo (PCAP)...')

      const respuestaEmb = await fetch(`${urlBase}/functions/v1/generate-embeddings`, {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documentoId: analisis.documento_objetivo_id,
          analisisId,
        }),
      })

      if (!respuestaEmb.ok) {
        const error = await respuestaEmb.text()
        throw new Error(`Generacion de embeddings PCAP fallo: ${error}`)
      }
    }

    // Generar embeddings del documento tecnico (PPT) si existe
    if (documentoTecnicoId) {
      const { count: cantidadFragTecnico } = await supabase
        .from('fragmentos_documento')
        .select('*', { count: 'exact', head: true })
        .eq('documento_id', documentoTecnicoId)

      if (!cantidadFragTecnico || cantidadFragTecnico === 0) {
        await actualizarProgresoAnalisis(analisisId, 'FALLIDO', 0, 'El pliego tecnico (PPT) no tiene fragmentos. Vuelve a subirlo.')
        return new Response(JSON.stringify({ error: 'El pliego tecnico no tiene fragmentos' }), {
          status: 400,
          headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
        })
      }

      const { count: cantidadEmbTecnico } = await supabase
        .from('fragmentos_documento')
        .select('*', { count: 'exact', head: true })
        .eq('documento_id', documentoTecnicoId)
        .not('embedding', 'is', null)

      if (!cantidadEmbTecnico || cantidadEmbTecnico < cantidadFragTecnico) {
        await actualizarProgresoAnalisis(analisisId, 'GENERANDO_EMBEDDINGS', 22, 'Generando embeddings del pliego tecnico (PPT)...')

        const respuestaEmbTec = await fetch(`${urlBase}/functions/v1/generate-embeddings`, {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            documentoId: documentoTecnicoId,
            analisisId,
          }),
        })

        if (!respuestaEmbTec.ok) {
          const error = await respuestaEmbTec.text()
          throw new Error(`Generacion de embeddings PPT fallo: ${error}`)
        }
      }
    }

    // ══════════════════════════════════════════════════════════════
    // PASO 2: Verificar que existen normas ingresadas
    // ══════════════════════════════════════════════════════════════
    const { count: cantidadNormas } = await supabase
      .from('documentos')
      .select('*', { count: 'exact', head: true })
      .eq('tipo_documento', 'NORMA_ENS')

    if (!cantidadNormas || cantidadNormas < 50) {
      await actualizarProgresoAnalisis(analisisId, 'FALLIDO', 0,
        'No hay normas ENS ingresadas. Las normas se ingresan automaticamente al acceder al wizard.')
      return new Response(JSON.stringify({
        error: 'No hay normas ENS ingresadas.',
      }), {
        status: 400,
        headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
      })
    }

    // ══════════════════════════════════════════════════════════════
    // PASO 3: Fase 1 - Clasificacion
    // ══════════════════════════════════════════════════════════════
    await actualizarProgresoAnalisis(analisisId, 'FASE1_APLICABILIDAD', 30, 'Fase 1: Determinando aplicabilidad y clasificacion...')

    const respuestaFase1 = await fetch(`${urlBase}/functions/v1/analyze-phase1`, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ analisisId }),
    })

    if (!respuestaFase1.ok) {
      const error = await respuestaFase1.text()
      throw new Error(`Fase 1 fallo: ${error}`)
    }

    const resultadoFase1 = await respuestaFase1.json()

    // Si el ENS no es aplicable, completar aqui
    if (!resultadoFase1.es_aplicable) {
      await actualizarProgresoAnalisis(analisisId, 'COMPLETADO', 100, 'El ENS no es aplicable a este documento.')
      await supabase.from('analisis').update({
        estado: 'COMPLETADO',
        completado_en: new Date().toISOString(),
      }).eq('id', analisisId)

      return new Response(JSON.stringify({ estado: 'completado', aplicable: false }), {
        headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
      })
    }

    await registrarPasoPipeline(analisisId, 'pipeline-orchestrator', 'completado', {
      resumenSalida: {
        aplicable: true,
        categoria: resultadoFase1.categoria_ens,
        perfilSectorial: resultadoFase1.perfil_sectorial,
      },
    })

    // Retornar para que el CLIENTE continue con Phase 2 chunks
    return new Response(JSON.stringify({
      estado: 'fase1_completada',
      aplicable: true,
      categoria: resultadoFase1.categoria_ens,
      perfilSectorial: resultadoFase1.perfil_sectorial,
    }), {
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : 'Error desconocido'
    console.error('Error del pipeline:', mensaje)

    try {
      const { analisisId } = await req.clone().json()
      if (analisisId) {
        const supabase = crearClienteServicio()
        await supabase.from('analisis').update({
          estado: 'FALLIDO',
          mensaje_error: mensaje,
          actualizado_en: new Date().toISOString(),
        }).eq('id', analisisId)

        await registrarPasoPipeline(analisisId, 'pipeline-orchestrator', 'fallido', {
          mensajeError: mensaje,
        })
      }
    } catch { /* ignorar */ }

    return new Response(JSON.stringify({ error: mensaje }), {
      status: 500,
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  }
})
