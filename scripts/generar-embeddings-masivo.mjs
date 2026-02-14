/**
 * Script para generar embeddings masivamente por documento.
 * Ejecutar: node scripts/generar-embeddings-masivo.mjs
 */

const SUPABASE_URL = 'https://cpoizklhmxlnjtyrypta.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwb2l6a2xobXhsbmp0eXJ5cHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MTUwMTAsImV4cCI6MjA4NjQ5MTAxMH0.06dlvpuY-B_MQ1S6xYwCtDM7MPMwxM7hnebyj5fVk4o'
const OPENAI_KEY = process.env.OPENAI_API_KEY

const MODELO_EMBEDDING = 'text-embedding-3-small'
const TAMANO_LOTE_OPENAI = 100

async function supabaseFetch(path, options = {}) {
  const url = `${SUPABASE_URL}/rest/v1/${path}`
  const res = await fetch(url, {
    ...options,
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Supabase ${res.status}: ${text.slice(0, 200)}`)
  }
  return res.json()
}

async function supabasePatch(path, body) {
  const url = `${SUPABASE_URL}/rest/v1/${path}`
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Supabase PATCH ${res.status}: ${text.slice(0, 200)}`)
  }
}

async function generarEmbeddings(textos) {
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODELO_EMBEDDING,
      input: textos,
    }),
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(`OpenAI ${res.status}: ${error.slice(0, 200)}`)
  }

  const data = await res.json()
  return data.data.map(d => d.embedding)
}

async function main() {
  console.log('=== Generador de Embeddings Masivo (por documento) ===\n')

  // 1. Obtener todos los documentos NORMA_ENS
  const docs = await supabaseFetch(
    'documentos?select=id,nombre&tipo_documento=eq.NORMA_ENS&order=nombre.asc'
  )
  console.log(`Documentos NORMA_ENS: ${docs.length}\n`)

  let totalProcesados = 0
  let totalTokens = 0
  let docsConPendientes = 0
  const inicio = Date.now()

  for (let d = 0; d < docs.length; d++) {
    const doc = docs[d]

    // 2. Obtener fragmentos SIN embedding para este documento
    // Paginar para evitar timeout (max 1000 por query)
    let offset = 0
    let fragmentosPendientes = []

    while (true) {
      const fragmentos = await supabaseFetch(
        `fragmentos_documento?select=id,contenido&documento_id=eq.${doc.id}&embedding=is.null&order=indice_fragmento.asc&limit=1000&offset=${offset}`
      )
      if (fragmentos.length === 0) break
      fragmentosPendientes.push(...fragmentos)
      if (fragmentos.length < 1000) break
      offset += 1000
    }

    if (fragmentosPendientes.length === 0) continue

    docsConPendientes++
    console.log(`[${d + 1}/${docs.length}] ${doc.nombre}: ${fragmentosPendientes.length} fragmentos pendientes`)

    // 3. Generar embeddings en lotes de 100
    for (let i = 0; i < fragmentosPendientes.length; i += TAMANO_LOTE_OPENAI) {
      const lote = fragmentosPendientes.slice(i, i + TAMANO_LOTE_OPENAI)
      const textos = lote.map(f => f.contenido)

      let reintentos = 0
      while (reintentos < 3) {
        try {
          const embeddings = await generarEmbeddings(textos)

          // Actualizar cada fragmento (en paralelo, 10 a la vez)
          for (let j = 0; j < lote.length; j += 10) {
            const subPromesas = lote.slice(j, j + 10).map((f, k) =>
              supabasePatch(
                `fragmentos_documento?id=eq.${f.id}`,
                { embedding: JSON.stringify(embeddings[j + k]) }
              )
            )
            await Promise.all(subPromesas)
          }

          totalProcesados += lote.length
          totalTokens += textos.reduce((acc, t) => acc + Math.ceil(t.length / 4), 0)

          const elapsed = ((Date.now() - inicio) / 1000).toFixed(0)
          process.stdout.write(`  ${i + lote.length}/${fragmentosPendientes.length} | Total: ${totalProcesados} | ${elapsed}s\r`)
          break
        } catch (err) {
          reintentos++
          console.error(`  Error (intento ${reintentos}): ${err.message}`)
          if (reintentos < 3) {
            await new Promise(r => setTimeout(r, 3000 * reintentos))
          }
        }
      }
    }
    console.log('')
  }

  const duracion = ((Date.now() - inicio) / 1000).toFixed(0)
  const costo = (totalTokens * 0.00000002).toFixed(4)
  console.log(`\n=== Completado ===`)
  console.log(`Documentos con pendientes: ${docsConPendientes}`)
  console.log(`Fragmentos procesados: ${totalProcesados}`)
  console.log(`Tokens totales: ${totalTokens}`)
  console.log(`Costo estimado: ~$${costo}`)
  console.log(`Duracion: ${duracion}s`)
}

main().catch(console.error)
