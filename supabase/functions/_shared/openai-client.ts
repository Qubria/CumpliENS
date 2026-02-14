const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')!
const MODELO_EMBEDDING = 'text-embedding-3-small'

export async function generarEmbeddings(textos: string[]): Promise<number[][]> {
  const respuesta = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODELO_EMBEDDING,
      input: textos,
    }),
  })

  if (!respuesta.ok) {
    const error = await respuesta.text()
    throw new Error(`OpenAI Embeddings API error: ${respuesta.status} - ${error}`)
  }

  const datos = await respuesta.json()
  return datos.data
    .sort((a: { index: number }, b: { index: number }) => a.index - b.index)
    .map((item: { embedding: number[] }) => item.embedding)
}

export async function generarEmbeddingUnico(texto: string): Promise<number[]> {
  const resultados = await generarEmbeddings([texto])
  return resultados[0]!
}
