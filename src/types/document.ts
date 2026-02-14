import type { TipoDocumento } from './database'

export interface DocumentoSubible {
  archivo: File
  nombre: string
  tipoDocumento: TipoDocumento
}

export interface ProgresoExtraccionPDF {
  estado: 'inactivo' | 'cargando' | 'extrayendo' | 'detectando-estructura' | 'completo' | 'error'
  paginaActual: number
  totalPaginas: number
  porcentajeCompletado: number
  error?: string
}

export interface ResultadoExtraccion {
  texto: string
  numeroPaginas: number
  bloquesEstructurados: import('./analysis').BloqueEstructurado[]
}
