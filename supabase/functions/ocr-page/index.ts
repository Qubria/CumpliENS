import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')!

/**
 * ocr-page: Recibe una imagen en base64 y usa OpenAI Vision para extraer texto.
 * Para PDFs escaneados sin capa de texto.
 */
Deno.serve(async (req: Request) => {
  const cors = manejarCors(req)
  if (cors) return cors

  try {
    const { imagenBase64, numeroPagina } = await req.json()

    if (!imagenBase64) {
      return new Response(JSON.stringify({ error: 'imagenBase64 requerido' }), {
        status: 400,
        headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
      })
    }

    const respuesta = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        max_tokens: 4096,
        messages: [
          {
            role: 'system',
            content: 'Eres un extractor de texto OCR. Extrae TODO el texto visible en la imagen de forma precisa, manteniendo la estructura (titulos, parrafos, listas, tablas). No añadas ni interpretes nada. Solo devuelve el texto extraido tal cual aparece. Si hay tablas, represéntalas con formato legible.',
          },
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `Extrae todo el texto de esta pagina ${numeroPagina ? `(pagina ${numeroPagina})` : ''} de un documento PDF escaneado. Devuelve SOLO el texto, sin comentarios.`,
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/png;base64,${imagenBase64}`,
                  detail: 'high',
                },
              },
            ],
          },
        ],
      }),
    })

    if (!respuesta.ok) {
      const error = await respuesta.text()
      throw new Error(`OpenAI Vision API error: ${respuesta.status} - ${error}`)
    }

    const datos = await respuesta.json()
    const textoExtraido = datos.choices?.[0]?.message?.content ?? ''
    const tokensUsados = datos.usage?.total_tokens ?? 0

    return new Response(JSON.stringify({
      texto: textoExtraido,
      tokensUsados,
    }), {
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : 'Error desconocido'
    console.error('Error OCR:', mensaje)
    return new Response(JSON.stringify({ error: mensaje }), {
      status: 500,
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  }
})
