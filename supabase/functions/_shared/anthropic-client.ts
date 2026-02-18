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
  stop_reason: string
}

export async function llamarClaude(
  promptSistema: string,
  mensajes: MensajeClaude[],
  maxTokens: number = 4096
): Promise<{ texto: string; tokensEntrada: number; tokensSalida: number; motivoParada: string }> {
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
    motivoParada: datos.stop_reason ?? 'unknown',
  }
}

/**
 * Cuenta brackets/braces FUERA de strings JSON (ignora { } [ ] dentro de valores de texto).
 * Tambien detecta si el texto termina con un string abierto (sin cerrar comilla).
 */
function analizarEstructuraJSON(texto: string): { llaves: number; corchetes: number; stringAbierto: boolean } {
  let enString = false
  let escaped = false
  let llaves = 0
  let corchetes = 0
  for (let i = 0; i < texto.length; i++) {
    const ch = texto[i]
    if (escaped) { escaped = false; continue }
    if (ch === '\\' && enString) { escaped = true; continue }
    if (ch === '"') { enString = !enString; continue }
    if (enString) continue
    if (ch === '{') llaves++
    else if (ch === '}') llaves--
    else if (ch === '[') corchetes++
    else if (ch === ']') corchetes--
  }
  return { llaves, corchetes, stringAbierto: enString }
}

/**
 * Cierra un string JSON abierto (truncado a mitad de un valor de texto).
 * Tambien elimina secuencias de escape incompletas al final.
 */
function cerrarStringAbierto(texto: string): string {
  // Quitar trailing backslashes incompletas (\\\ al final)
  texto = texto.replace(/\\+$/, (m) => m.length % 2 === 0 ? m : m.slice(0, -1))
  texto += '"'
  return texto
}

/**
 * Elimina key-value pairs incompletos al final del JSON.
 * Casos: ..."key":  |  ..."key":"val  |  ..."ke  (despues de una coma)
 */
function eliminarParIncompleto(texto: string): string {
  // Caso 1: trailing comma + partial key or value: ,  "something...  o  , "key": "val...
  texto = texto.replace(/,\s*"[^"]*"\s*:\s*"[^"]*"?\s*$/, '')
  // Caso 2: trailing comma + partial key sin valor: , "partialKe
  texto = texto.replace(/,\s*"[^"]*"?\s*:?\s*$/, '')
  // Caso 3: trailing comma sola
  texto = texto.replace(/,\s*$/, '')
  return texto
}

export function extraerJSON<T>(texto: string): T {
  let limpio = texto.trim()

  // Paso 1: Eliminar bloques markdown (cerrados O truncados sin cierre)
  if (limpio.startsWith('```')) {
    limpio = limpio.replace(/^```(?:json)?[\s\n]*/i, '')
    limpio = limpio.replace(/[\s\n]*```[\s]*$/, '')
  }

  // Paso 2: Encontrar la primera { o [ y la última } o ]
  const inicio = limpio.search(/[{[]/)
  const ultimaLlave = limpio.lastIndexOf('}')
  const ultimoCorchete = limpio.lastIndexOf(']')
  const fin = Math.max(ultimaLlave, ultimoCorchete)

  if (inicio === -1) {
    throw new Error('No se encontró JSON en la respuesta')
  }

  // Si no hay cierre (} o ]) o esta antes del inicio, todo el texto esta truncado
  let jsonLimpio = (fin > inicio) ? limpio.slice(inicio, fin + 1) : limpio.slice(inicio)

  // Paso 3: Limpiar problemas comunes de JSON generado por LLM
  jsonLimpio = jsonLimpio.replace(/,\s*([}\]])/g, '$1')
  jsonLimpio = jsonLimpio.replace(/[\x00-\x1f]/g, (ch) => {
    if (ch === '\n' || ch === '\r' || ch === '\t') return ch
    return ''
  })

  // Paso 4: Intentar parsear directamente
  try {
    return JSON.parse(jsonLimpio)
  } catch (e) {
    // Paso 5: Reparacion inteligente
    let reparado = jsonLimpio

    // 5a: Cerrar string abierto si truncado a mitad de un valor
    const analisis = analizarEstructuraJSON(reparado)
    if (analisis.stringAbierto) {
      reparado = cerrarStringAbierto(reparado)
      console.warn('[extraerJSON] String abierto cerrado')
    }

    // 5b: Eliminar key-value pair incompleto al final
    reparado = eliminarParIncompleto(reparado)

    // 5c: Cerrar brackets/braces (conteo fuera de strings)
    const analisis2 = analizarEstructuraJSON(reparado)
    reparado = reparado.replace(/,\s*([}\]])/g, '$1')
    for (let i = 0; i < analisis2.corchetes; i++) reparado += ']'
    for (let i = 0; i < analisis2.llaves; i++) reparado += '}'

    try {
      const resultado = JSON.parse(reparado)
      console.warn('[extraerJSON] Reparado con cierre de strings + brackets')
      return resultado
    } catch { /* continuar a truncacion progresiva */ }

    // Paso 6: Truncar progresivamente hasta encontrar JSON valido
    // Buscar puntos de corte SEGUROS fuera de strings: }, o ],
    const cortesSeguras: number[] = []
    {
      let enStr = false, esc = false
      for (let i = 0; i < jsonLimpio.length; i++) {
        const ch = jsonLimpio[i]
        if (esc) { esc = false; continue }
        if (ch === '\\' && enStr) { esc = true; continue }
        if (ch === '"') { enStr = !enStr; continue }
        if (enStr) continue
        // Punto de corte seguro: } o ] seguido de , (fuera de string)
        if ((ch === '}' || ch === ']') && i + 1 < jsonLimpio.length) {
          // Buscar si hay coma despues (con whitespace opcional)
          let j = i + 1
          while (j < jsonLimpio.length && /\s/.test(jsonLimpio[j]!)) j++
          if (j < jsonLimpio.length && jsonLimpio[j] === ',') {
            cortesSeguras.push(i + 1)
          }
        }
      }
    }

    // Intentar desde el ultimo corte hacia atras
    for (let idx = cortesSeguras.length - 1; idx >= 0; idx--) {
      let intento = jsonLimpio.slice(0, cortesSeguras[idx]!)
      const a = analizarEstructuraJSON(intento)
      if (a.stringAbierto) intento = cerrarStringAbierto(intento)
      intento = eliminarParIncompleto(intento)
      const a2 = analizarEstructuraJSON(intento)
      intento = intento.replace(/,\s*([}\]])/g, '$1')
      for (let i = 0; i < a2.corchetes; i++) intento += ']'
      for (let i = 0; i < a2.llaves; i++) intento += '}'
      try {
        const resultado = JSON.parse(intento)
        console.warn(`[extraerJSON] Reparado truncando al corte ${idx + 1}/${cortesSeguras.length}`)
        return resultado
      } catch { continue }
    }

    throw new Error(`JSON invalido: ${(e as Error).message}\nTexto: ${jsonLimpio.slice(0, 500)}...`)
  }
}
