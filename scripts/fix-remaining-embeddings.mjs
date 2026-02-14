/**
 * Fix remaining fragments without embeddings (truncates oversized texts)
 */
const SUPABASE_URL = 'https://cpoizklhmxlnjtyrypta.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwb2l6a2xobXhsbmp0eXJ5cHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MTUwMTAsImV4cCI6MjA4NjQ5MTAxMH0.06dlvpuY-B_MQ1S6xYwCtDM7MPMwxM7hnebyj5fVk4o'
const OPENAI_KEY = process.env.OPENAI_API_KEY

const MAX_CHARS = 20000 // ~5000 tokens, safe for 8192 limit (Spanish text uses more tokens)

async function main() {
  // Get all fragments without embeddings
  const res = await fetch(`${SUPABASE_URL}/rest/v1/fragmentos_documento?select=id,contenido&embedding=is.null&order=id.asc&limit=200`, {
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
  })
  const fragmentos = await res.json()
  console.log(`Fragmentos pendientes: ${fragmentos.length}`)

  // Process one by one (small amount, no need for batching)
  for (let i = 0; i < fragmentos.length; i += 20) {
    const lote = fragmentos.slice(i, i + 20)
    const textos = lote.map(f => f.contenido.length > MAX_CHARS ? f.contenido.slice(0, MAX_CHARS) : f.contenido)

    try {
      const embRes = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'text-embedding-3-small', input: textos }),
      })

      if (!embRes.ok) {
        const err = await embRes.text()
        console.error(`OpenAI error: ${err.slice(0, 200)}`)
        continue
      }

      const data = await embRes.json()
      const embeddings = data.data.map(d => d.embedding)

      for (let j = 0; j < lote.length; j++) {
        await fetch(`${SUPABASE_URL}/rest/v1/fragmentos_documento?id=eq.${lote[j].id}`, {
          method: 'PATCH',
          headers: {
            'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json', 'Prefer': 'return=minimal'
          },
          body: JSON.stringify({ embedding: JSON.stringify(embeddings[j]) }),
        })
      }
      console.log(`${i + lote.length}/${fragmentos.length} completados`)
    } catch (err) {
      console.error(`Error: ${err.message}`)
    }
  }

  console.log('Hecho!')
}

main().catch(console.error)
