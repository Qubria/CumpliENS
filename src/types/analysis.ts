import type { NivelCumplimiento, CategoriaENS, PrioridadHallazgo } from './database'

// Respuesta de Fase 1 de Claude
export interface ResultadoFase1 {
  es_aplicable: boolean
  justificacion_aplicabilidad: string
  categoria_ens: CategoriaENS
  dimensiones: {
    confidencialidad: EvaluacionDimension
    integridad: EvaluacionDimension
    disponibilidad: EvaluacionDimension
    trazabilidad: EvaluacionDimension
    autenticidad: EvaluacionDimension
  }
  justificacion_categoria: string
  controles_aplicables: ControlAplicable[]
  factores_determinantes: string[]
}

export interface EvaluacionDimension {
  nivel: 'BAJO' | 'MEDIO' | 'ALTO'
  justificacion: string
}

export interface ControlAplicable {
  id: string
  nombre: string
  aplica: boolean
  justificacion: string
}

// Respuesta de Fase 2 de Claude (por control)
export interface HallazgoFase2 {
  control_id: string
  nivel_cumplimiento: NivelCumplimiento
  resumen_hallazgo: string
  irac: {
    asunto: string
    regla: string
    aplicacion: string
    conclusion: string
  }
  texto_evidencia: string | null
  descripcion_brecha: string | null
  recomendacion: string | null
  prioridad: PrioridadHallazgo
  confianza: number
}

// Datos de pagina extraida del PDF
export interface PaginaExtraida {
  numeroPagina: number
  texto: string
  elementos: ElementoTexto[]
}

export interface ElementoTexto {
  texto: string
  x: number
  y: number
  tamanoFuente: number
  nombreFuente: string
}

// Bloque estructurado de la deteccion de estructura
export interface BloqueEstructurado {
  tipo: 'TITULO' | 'ARTICULO' | 'SECCION' | 'PARRAFO' | 'TABLA' | 'ANEXO' | 'DEFINICION' | 'REQUISITO' | 'GENERICO'
  contenido: string
  jerarquiaEncabezados: string[]
  paginaInicio: number
  paginaFin: number
}

// Fragmento listo para embedding
export interface FragmentoDocumento {
  contenido: string
  tipoFragmento: BloqueEstructurado['tipo']
  jerarquiaEncabezados: string[]
  indiceFragmento: number
  paginaInicio: number
  paginaFin: number
  cantidadTokens: number
}

// Estructura de datos del informe
export interface InformeCumplimiento {
  organizacion: string
  nombreDocumento: string
  fechaAnalisis: string
  categoriaENS: CategoriaENS
  dimensiones: ResultadoFase1['dimensiones']
  justificacionCategoria: string
  totalControles: number
  cantidadConforme: number
  cantidadParcial: number
  cantidadNoConforme: number
  cantidadNoAplica: number
  hallazgos: HallazgoFase2[]
  justificacionAplicabilidad: string
  // Nuevos campos de trazabilidad
  totalRequisitosVerificados?: number
  totalNormasReferenciadas?: number
  perfilSectorial?: string | null
  proveedoresNube?: string[]
}
