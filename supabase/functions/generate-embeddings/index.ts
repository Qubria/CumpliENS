import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'
import { crearClienteServicio } from '../_shared/supabase-client.ts'
import { generarEmbeddings } from '../_shared/openai-client.ts'
import { registrarPasoPipeline, actualizarProgresoAnalisis } from '../_shared/pipeline-logger.ts'

const TAMANO_LOTE = 100

Deno.serve(async (req: Request) => {
  const cors = manejarCors(req)
  if (cors) return cors

  try {
    const { documentoId, analisisId } = await req.json()
    const supabase = crearClienteServicio()
    const tiempoInicio = Date.now()

    await registrarPasoPipeline(analisisId, 'generate-embeddings', 'iniciado', {
      resumenEntrada: { documentoId },
    })

    // Obtener fragmentos que aún no tienen embeddings
    const { data: fragmentos, error } = await supabase
      .from('fragmentos_documento')
      .select('id, contenido')
      .eq('documento_id', documentoId)
      .is('embedding', null)
      .order('indice_fragmento', { ascending: true })

    if (error) throw new Error(`Error al obtener fragmentos: ${error.message}`)
    if (!fragmentos || fragmentos.length === 0) {
      return new Response(JSON.stringify({ mensaje: 'Todos los fragmentos ya tienen embeddings' }), {
        headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
      })
    }

    let totalTokens = 0
    let cantidadProcesados = 0

    // Procesar en lotes
    for (let i = 0; i < fragmentos.length; i += TAMANO_LOTE) {
      const lote = fragmentos.slice(i, i + TAMANO_LOTE)
      const textos = lote.map((f) => f.contenido)

      // Generar embeddings
      const embeddings = await generarEmbeddings(textos)
      totalTokens += textos.reduce((acc, t) => acc + Math.ceil(t.length / 4), 0)

      // Actualizar fragmentos con embeddings
      for (let j = 0; j < lote.length; j++) {
        const fragmento = lote[j]!
        const embedding = embeddings[j]!

        const { error: errorActualizacion } = await supabase
          .from('fragmentos_documento')
          .update({ embedding: JSON.stringify(embedding) })
          .eq('id', fragmento.id)

        if (errorActualizacion) {
          console.error(`Error al actualizar fragmento ${fragmento.id}: ${errorActualizacion.message}`)
        }
      }

      cantidadProcesados += lote.length

      // Actualizar progreso
      if (analisisId) {
        const porcentaje = 20 + Math.round((cantidadProcesados / fragmentos.length) * 15) // 20-35%
        await actualizarProgresoAnalisis(
          analisisId,
          'GENERANDO_EMBEDDINGS',
          porcentaje,
          `Generando embeddings: ${cantidadProcesados}/${fragmentos.length} fragmentos`
        )
      }
    }

    const duracion = Date.now() - tiempoInicio

    await registrarPasoPipeline(analisisId, 'generate-embeddings', 'completado', {
      resumenSalida: { fragmentosProcesados: cantidadProcesados, totalTokens },
      duracionMs: duracion,
    })

    // Actualizar seguimiento de costos
    if (analisisId) {
      await supabase.from('analisis').update({
        total_tokens_embedding: totalTokens,
      }).eq('id', analisisId)
    }

    return new Response(JSON.stringify({
      fragmentosProcesados: cantidadProcesados,
      totalTokens,
      duracionMs: duracion,
    }), {
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : 'Error desconocido'
    console.error('Error de embedding:', mensaje)
    return new Response(JSON.stringify({ error: mensaje }), {
      status: 500,
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  }
})
