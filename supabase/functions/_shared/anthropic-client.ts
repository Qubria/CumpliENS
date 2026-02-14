import { ErrorHTTP } from './reintento.ts'

const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY')!
const MODELO = 'claude-sonnet-4-5-20250929'

interface MensajeClaude {
  role: 'user' | 'assistant'
  content: string
}

interface RespuestaClaude {
  content: { type: string; text: string }[]
  usage: { input_tokens: number; output_tokens: number }
}

export async function llamarClaude(
  promptSistema: string,
  mensajes: MensajeClaude[],
  maxTokens: number = 4096
): Promise<{ texto: string; tokensEntrada: number; tokensSalida: number }> {
  const respuesta = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODELO,
      max_tokens: maxTokens,
      system: promptSistema,
      messages: mensajes,
    }),
  })

  if (!respuesta.ok) {
    const error = await respuesta.text()
    const retryAfter = respuesta.headers.get('retry-after')
    throw new ErrorHTTP(`Anthropic API error: ${respuesta.status} - ${error}`, respuesta.status, retryAfter)
  }

  const datos: RespuestaClaude = await respuesta.json()
  const texto = datos.content
    .filter((bloque) => bloque.type === 'text')
    .map((bloque) => bloque.text)
    .join('')

  return {
    texto,
    tokensEntrada: datos.usage.input_tokens,
    tokensSalida: datos.usage.output_tokens,
  }
}

export function extraerJSON<T>(texto: string): T {
  // Intentar extraer JSON de la respuesta, manejando bloques de código markdown
  const coincidenciaJson = texto.match(/```(?:json)?\s*([\s\S]*?)```/)
  const cadenaJson = coincidenciaJson ? coincidenciaJson[1]! : texto

  // Encontrar la primera { o [ y la última } o ]
  const inicio = cadenaJson.search(/[{[]/)
  const ultimaLlave = cadenaJson.lastIndexOf('}')
  const ultimoCorchete = cadenaJson.lastIndexOf(']')
  const fin = Math.max(ultimaLlave, ultimoCorchete)

  if (inicio === -1 || fin === -1) {
    throw new Error('No se encontró JSON en la respuesta')
  }

  let jsonLimpio = cadenaJson.slice(inicio, fin + 1)

  // Limpiar problemas comunes de JSON generado por LLM
  // 1. Trailing commas antes de ] o }
  jsonLimpio = jsonLimpio.replace(/,\s*([}\]])/g, '$1')
  // 2. Comillas simples en keys (reemplazar por dobles)
  // 3. Caracteres de control
  jsonLimpio = jsonLimpio.replace(/[\x00-\x1f]/g, (ch) => {
    if (ch === '\n' || ch === '\r' || ch === '\t') return ch
    return ''
  })

  try {
    return JSON.parse(jsonLimpio)
  } catch (e) {
    // Segundo intento: truncar al ultimo } valido del objeto principal
    const indexUltimaLlave = jsonLimpio.lastIndexOf('}')
    if (indexUltimaLlave > 0) {
      try {
        return JSON.parse(jsonLimpio.slice(0, indexUltimaLlave + 1))
      } catch {
        // Tercer intento: cerrar arrays/objetos abiertos
        let intentoFinal = jsonLimpio
        const abiertos = (intentoFinal.match(/{/g) || []).length - (intentoFinal.match(/}/g) || []).length
        const corchetes = (intentoFinal.match(/\[/g) || []).length - (intentoFinal.match(/]/g) || []).length
        for (let i = 0; i < corchetes; i++) intentoFinal += ']'
        for (let i = 0; i < abiertos; i++) intentoFinal += '}'
        intentoFinal = intentoFinal.replace(/,\s*([}\]])/g, '$1')
        return JSON.parse(intentoFinal)
      }
    }
    throw new Error(`JSON invalido: ${(e as Error).message}\nTexto: ${jsonLimpio.slice(0, 500)}...`)
  }
}
