import { supabase } from '@/config/supabase'
import { detectarEstructura } from './structure-detector'
import { fragmentarBloquesEstructurados } from './chunker'
import type { PaginaExtraida, BloqueEstructurado } from '@/types/analysis'
import type { TipoFragmento } from '@/types/database'

const ORG_ID = '11111111-1111-1111-1111-111111111111'
const USER_ID = '22222222-2222-2222-2222-222222222222'

// Importar todos los .md de normas de forma eager (Vite los resuelve en build)
const archivosNormas = import.meta.glob('/src/data/normas/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

export interface ProgresoIngesta {
  fase: 'verificando' | 'fragmentando' | 'embeddings' | 'completado' | 'error'
  actual: number
  total: number
  mensaje: string
}

export async function verificarNormasIngresadas(): Promise<{ ingresadas: boolean; cantidad: number }> {
  const { count, error } = await supabase
    .from('documentos')
    .select('*', { count: 'exact', head: true })
    .eq('tipo_documento', 'NORMA_ENS')

  if (error) {
    console.error('Error verificando normas:', error.message)
    return { ingresadas: false, cantidad: 0 }
  }

  const cantidad = count ?? 0
  if (cantidad < 50) return { ingresadas: false, cantidad }

  // Verificar que tambien tengan embeddings generados (muestra de 3 documentos)
  const { data: normasMuestra } = await supabase
    .from('documentos')
    .select('id')
    .eq('tipo_documento', 'NORMA_ENS')
    .limit(3)

  if (normasMuestra && normasMuestra.length > 0) {
    for (const norma of normasMuestra) {
      const { count: sinEmbedding } = await supabase
        .from('fragmentos_documento')
        .select('*', { count: 'exact', head: true })
        .eq('documento_id', norma.id as string)
        .is('embedding', null)

      if (sinEmbedding && sinEmbedding > 0) {
        return { ingresadas: false, cantidad }
      }
    }
  }

  return { ingresadas: true, cantidad }
}

export async function ingestarNormasDirectas(
  onProgreso?: (progreso: ProgresoIngesta) => void
): Promise<{ exito: boolean; normasIngresadas: number; fragmentosTotales: number }> {
  // Filtrar archivos BOE (codigos legales enormes, no son normas ENS)
  const entradas = Object.entries(archivosNormas).filter(([ruta]) => {
    const nombre = ruta.split('/').pop() ?? ''
    return !nombre.startsWith('BOE')
  })
  const total = entradas.length

  if (total === 0) {
    onProgreso?.({ fase: 'error', actual: 0, total: 0, mensaje: 'No se encontraron archivos .md de normas' })
    return { exito: false, normasIngresadas: 0, fragmentosTotales: 0 }
  }

  onProgreso?.({ fase: 'verificando', actual: 0, total, mensaje: 'Verificando normas existentes...' })

  // Verificar cuales ya estan ingresadas
  const { data: existentes } = await supabase
    .from('documentos')
    .select('id, nombre')
    .eq('tipo_documento', 'NORMA_ENS')

  const mapExistentes = new Map((existentes ?? []).map((d) => [d.nombre, d.id as string]))

  let normasIngresadas = 0
  let fragmentosTotales = 0
  const idsDocumentosNuevos: string[] = []
  const idsDocumentosSinEmbedding: string[] = []

  // Fase 1: Fragmentar e insertar
  for (let i = 0; i < entradas.length; i++) {
    const [ruta, contenido] = entradas[i]!
    const nombreArchivo = ruta.split('/').pop() ?? ruta

    // Si ya existe, solo verificar si necesita embeddings
    if (mapExistentes.has(nombreArchivo)) {
      const docIdExistente = mapExistentes.get(nombreArchivo)!
      // Verificar si tiene fragmentos sin embedding
      const { count: sinEmb } = await supabase
        .from('fragmentos_documento')
        .select('*', { count: 'exact', head: true })
        .eq('documento_id', docIdExistente)
        .is('embedding', null)

      if (sinEmb && sinEmb > 0) {
        idsDocumentosSinEmbedding.push(docIdExistente)
      }

      normasIngresadas++
      onProgreso?.({
        fase: 'fragmentando',
        actual: i + 1,
        total,
        mensaje: `${nombreArchivo} (ya existente${sinEmb && sinEmb > 0 ? ', pendiente embeddings' : ''})`,
      })
      continue
    }

    try {
      // Crear pagina simulada para el detector de estructura
      const paginaSimulada: PaginaExtraida = {
        numeroPagina: 1,
        texto: contenido,
        elementos: [],
      }

      // Detectar estructura y fragmentar
      const bloques: BloqueEstructurado[] = detectarEstructura([paginaSimulada])

      // Si no se detectaron bloques, crear uno generico con todo el texto
      if (bloques.length === 0) {
        bloques.push({
          tipo: 'GENERICO',
          contenido,
          jerarquiaEncabezados: [nombreArchivo],
          paginaInicio: 1,
          paginaFin: 1,
        })
      }

      const fragmentos = fragmentarBloquesEstructurados(bloques)

      // Insertar documento
      const { data: doc, error: errorDoc } = await supabase
        .from('documentos')
        .insert({
          organizacion_id: ORG_ID,
          subido_por: USER_ID,
          nombre: nombreArchivo,
          tipo_documento: 'NORMA_ENS',
          texto_extraido: contenido,
          es_referencia: true,
          numero_paginas: 1,
          tamano_archivo_bytes: new Blob([contenido]).size,
        })
        .select('id')
        .single()

      if (errorDoc || !doc) {
        console.error(`Error insertando norma ${nombreArchivo}:`, errorDoc?.message)
        continue
      }

      const docId = doc.id as string
      idsDocumentosNuevos.push(docId)

      // Insertar fragmentos en lotes de 50
      const tamanoLote = 50
      for (let j = 0; j < fragmentos.length; j += tamanoLote) {
        const lote = fragmentos.slice(j, j + tamanoLote)
        const filas = lote.map((f) => ({
          documento_id: docId,
          indice_fragmento: f.indiceFragmento,
          contenido: f.contenido,
          tipo_fragmento: f.tipoFragmento as TipoFragmento,
          jerarquia_encabezados: f.jerarquiaEncabezados,
          pagina_inicio: f.paginaInicio,
          pagina_fin: f.paginaFin,
          cantidad_tokens: f.cantidadTokens,
        }))

        const { error: errorFragmentos } = await supabase.from('fragmentos_documento').insert(filas as never[])
        if (errorFragmentos) {
          console.error(`Error insertando fragmentos de ${nombreArchivo}:`, errorFragmentos.message)
        }
      }

      fragmentosTotales += fragmentos.length
      normasIngresadas++

      onProgreso?.({
        fase: 'fragmentando',
        actual: i + 1,
        total,
        mensaje: `${nombreArchivo} (${fragmentos.length} fragmentos)`,
      })
    } catch (err) {
      console.error(`Error procesando norma ${nombreArchivo}:`, err)
    }
  }

  // Fase 2: Generar embeddings para documentos nuevos + existentes sin embeddings
  const todosIdsParaEmbeddings = [...idsDocumentosNuevos, ...idsDocumentosSinEmbedding]
  if (todosIdsParaEmbeddings.length > 0) {
    onProgreso?.({
      fase: 'embeddings',
      actual: 0,
      total: todosIdsParaEmbeddings.length,
      mensaje: `Generando embeddings para ${todosIdsParaEmbeddings.length} normas (OpenAI)...`,
    })

    for (let i = 0; i < todosIdsParaEmbeddings.length; i++) {
      const docId = todosIdsParaEmbeddings[i]!
      try {
        const { error } = await supabase.functions.invoke('generate-embeddings', {
          body: { documentoId: docId },
        })

        if (error) {
          console.error(`Error generando embeddings para doc ${docId}:`, error.message)
        }
      } catch (err) {
        console.error(`Error llamando generate-embeddings para doc ${docId}:`, err)
      }

      onProgreso?.({
        fase: 'embeddings',
        actual: i + 1,
        total: todosIdsParaEmbeddings.length,
        mensaje: `Embeddings: ${i + 1}/${todosIdsParaEmbeddings.length} normas`,
      })
    }
  }

  onProgreso?.({
    fase: 'completado',
    actual: total,
    total,
    mensaje: `${normasIngresadas} normas ingresadas, ${fragmentosTotales} fragmentos creados`,
  })

  return { exito: true, normasIngresadas, fragmentosTotales }
}
