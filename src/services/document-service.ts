import { supabase } from '@/config/supabase'
import type { BaseDatos, TipoDocumento } from '@/types/database'
import type { TipoFragmento } from '@/types/database'
import { extraerTextoDePDF, type CallbackProgreso } from './pdf-extractor'
import { detectarEstructura } from './structure-detector'
import { fragmentarBloquesEstructurados } from './chunker'
import type { ResultadoExtraccion } from '@/types/document'

type FilaDocumento = BaseDatos['public']['Tables']['documentos']['Row']

export async function subirDocumento(
  archivo: File,
  nombre: string,
  tipoDocumento: TipoDocumento,
  organizacionId: string,
  usuarioId: string,
  alProgresoExtraccion?: CallbackProgreso
): Promise<{ documentoId: string; resultadoExtraccion: ResultadoExtraccion }> {
  // Paso 1: Extraer texto del PDF en el cliente
  const { paginas, numeroPaginas } = await extraerTextoDePDF(archivo, alProgresoExtraccion)

  alProgresoExtraccion?.({
    estado: 'detectando-estructura',
    paginaActual: numeroPaginas,
    totalPaginas: numeroPaginas,
    porcentajeCompletado: 95,
  })

  // Paso 2: Detectar estructura del documento
  // Sanitizar texto: eliminar null bytes y caracteres de control que PostgreSQL rechaza
  const sanitizarTexto = (t: string) => t.replace(/\u0000/g, '').replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
  paginas.forEach(p => { p.texto = sanitizarTexto(p.texto) })
  const bloquesEstructurados = detectarEstructura(paginas)
  const textoCompleto = paginas.map((p) => p.texto).join('\n\n--- Salto de Pagina ---\n\n')

  // Paso 3: Subir PDF original a Supabase Storage
  const nombreSanitizado = archivo.name
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quitar acentos
    .replace(/[^a-zA-Z0-9._-]/g, '_') // solo chars ASCII seguros
    .replace(/_+/g, '_') // colapsar guiones bajos multiples
  const rutaAlmacenamiento = `documentos/${organizacionId}/${Date.now()}_${nombreSanitizado}`
  const { error: errorAlmacenamiento } = await supabase.storage
    .from('documentos')
    .upload(rutaAlmacenamiento, archivo, {
      contentType: 'application/pdf',
      upsert: false,
    })

  if (errorAlmacenamiento) {
    throw new Error(`Error al subir PDF: ${errorAlmacenamiento.message}`)
  }

  // Paso 4: Calcular hash del archivo para deduplicacion
  const bufferHash = await crypto.subtle.digest('SHA-256', await archivo.arrayBuffer())
  const hashArchivo = Array.from(new Uint8Array(bufferHash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')

  // Paso 5: Insertar registro del documento
  const { data: doc, error: errorDoc } = await supabase
    .from('documentos')
    .insert({
      organizacion_id: organizacionId,
      subido_por: usuarioId,
      nombre,
      tipo_documento: tipoDocumento,
      ruta_almacenamiento: rutaAlmacenamiento,
      hash_archivo: hashArchivo,
      tamano_archivo_bytes: archivo.size,
      numero_paginas: numeroPaginas,
      texto_extraido: textoCompleto,
    })
    .select('id')
    .single()

  if (errorDoc || !doc) {
    throw new Error(`Error al guardar documento: ${errorDoc?.message ?? 'Error desconocido'}`)
  }

  alProgresoExtraccion?.({
    estado: 'completo',
    paginaActual: numeroPaginas,
    totalPaginas: numeroPaginas,
    porcentajeCompletado: 100,
  })

  return {
    documentoId: doc.id as string,
    resultadoExtraccion: {
      texto: textoCompleto,
      numeroPaginas,
      bloquesEstructurados,
    },
  }
}

export async function procesarFragmentosDocumento(
  documentoId: string,
  bloquesEstructurados: import('@/types/analysis').BloqueEstructurado[]
): Promise<{ cantidadFragmentos: number }> {
  // Fragmentar los bloques estructurados
  const fragmentos = fragmentarBloquesEstructurados(bloquesEstructurados)

  // Insertar fragmentos en lotes de 50
  const tamanoLote = 50
  for (let i = 0; i < fragmentos.length; i += tamanoLote) {
    const lote = fragmentos.slice(i, i + tamanoLote)
    const filas = lote.map((fragmento) => ({
      documento_id: documentoId,
      indice_fragmento: fragmento.indiceFragmento,
      contenido: fragmento.contenido,
      tipo_fragmento: fragmento.tipoFragmento as TipoFragmento,
      jerarquia_encabezados: fragmento.jerarquiaEncabezados,
      pagina_inicio: fragmento.paginaInicio,
      pagina_fin: fragmento.paginaFin,
      cantidad_tokens: fragmento.cantidadTokens,
    }))

    const { error } = await supabase.from('fragmentos_documento').insert(filas as never[])
    if (error) {
      throw new Error(`Error al insertar lote de fragmentos ${i}: ${error.message}`)
    }
  }

  return { cantidadFragmentos: fragmentos.length }
}

export async function listarDocumentos(organizacionId: string): Promise<FilaDocumento[]> {
  const { data, error } = await supabase
    .from('documentos')
    .select('*')
    .eq('organizacion_id', organizacionId)
    .order('creado_en', { ascending: false })

  if (error) throw new Error(error.message)
  return (data ?? []) as unknown as FilaDocumento[]
}

export async function eliminarDocumento(documentoId: string) {
  // Eliminar del almacenamiento primero
  const { data: doc } = await supabase
    .from('documentos')
    .select('ruta_almacenamiento')
    .eq('id', documentoId)
    .single()

  if (doc?.ruta_almacenamiento) {
    await supabase.storage.from('documentos').remove([doc.ruta_almacenamiento as string])
  }

  // Eliminar documento (cascada a fragmentos)
  const { error } = await supabase.from('documentos').delete().eq('id', documentoId)
  if (error) throw new Error(error.message)
}
