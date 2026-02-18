// Configuracion de fragmentacion
export const CHUNK_TARGET_TOKENS = 450
export const CHUNK_MAX_TOKENS = 500
export const CHUNK_OVERLAP_PERCENT = 0.1
export const CHARS_PER_TOKEN = 4 // Aproximado para texto en espanol

// Configuracion de embeddings
export const MODELO_EMBEDDING = 'text-embedding-3-small'
export const DIMENSIONES_EMBEDDING = 1536
export const TAMANO_LOTE_EMBEDDING = 100

// Configuracion RAG
export const UMBRAL_COINCIDENCIA_RAG = 0.7
export const CANTIDAD_COINCIDENCIAS_RAG = 15
export const TOP_K_REORDENADOS_RAG = 10
export const CONSULTAS_POR_CONTROL_RAG = 3

// Configuracion de analisis
export const TAMANO_LOTE_FASE2 = 5 // Controles por llamada LLM
export const REINTENTOS_MAXIMOS = 3

// Etiquetas de pasos del pipeline (Espanol)
export const PASOS_PIPELINE: Record<string, { etiqueta: string; rango: [number, number] }> = {
  PENDIENTE: { etiqueta: 'En cola...', rango: [0, 0] },
  INGESTA_NORMAS: { etiqueta: 'Preparando base de normas ENS...', rango: [0, 10] },
  EXTRAYENDO_TEXTO: { etiqueta: 'Extrayendo texto del PDF...', rango: [0, 10] },
  FRAGMENTANDO: { etiqueta: 'Analizando estructura del documento...', rango: [10, 15] },
  GENERANDO_EMBEDDINGS: { etiqueta: 'Generando embeddings...', rango: [15, 30] },
  FASE1_APLICABILIDAD: { etiqueta: 'Fase 1: Clasificando pliego (sector, nube, categoria)...', rango: [30, 42] },
  FASE2_VERIFICACION_REQUISITOS: { etiqueta: 'Fase 2: Verificando requisitos de 121 normas...', rango: [42, 80] },
  FASE3_ANALISIS_PROFUNDO: { etiqueta: 'Fase 3: Re-evaluando hallazgos dudosos...', rango: [80, 90] },
  FASE4_GENERACION_INFORME: { etiqueta: 'Fase 4: Generando informe final...', rango: [90, 95] },
  GENERANDO_RECURSO: { etiqueta: 'Generando Recurso REMC...', rango: [95, 98] },
  // Legacy (compatibilidad con analisis anteriores)
  FASE2_ANALISIS_BRECHAS: { etiqueta: 'Fase 2: Analizando cumplimiento...', rango: [50, 85] },
  FASE3_GENERACION_INFORME: { etiqueta: 'Fase 3: Generando informe...', rango: [85, 95] },
  COMPLETADO: { etiqueta: 'Completado', rango: [100, 100] },
  FALLIDO: { etiqueta: 'Error en el proceso', rango: [0, 0] },
}

// Secciones del Recurso REMC (9 secciones v5 forense)
export const SECCIONES_REMC = [
  { id: 1, etiqueta: 'Antecedentes de hecho', tiempoEstimadoSeg: 100 },
  { id: 2, etiqueta: 'Fundamentos de Derecho I-II', tiempoEstimadoSeg: 130 },
  { id: 3, etiqueta: 'Fundamentos de Derecho III-IV', tiempoEstimadoSeg: 130 },
  { id: 4, etiqueta: 'Fundamentos de Derecho V-VI', tiempoEstimadoSeg: 130 },
  { id: 5, etiqueta: 'Fundamentos de Derecho VII-VIII', tiempoEstimadoSeg: 130 },
  { id: 6, etiqueta: 'Fundamentos de Derecho IX-X', tiempoEstimadoSeg: 130 },
  { id: 7, etiqueta: 'Causas de nulidad', tiempoEstimadoSeg: 100 },
  { id: 8, etiqueta: 'Medidas cautelares y suplico', tiempoEstimadoSeg: 75 },
  { id: 9, etiqueta: 'Legitimacion y otrosies', tiempoEstimadoSeg: 115 },
] as const

// Dimensiones de seguridad ENS
export const DIMENSIONES_ENS = [
  { id: 'confidencialidad', etiqueta: 'Confidencialidad', abreviatura: 'C' },
  { id: 'integridad', etiqueta: 'Integridad', abreviatura: 'I' },
  { id: 'disponibilidad', etiqueta: 'Disponibilidad', abreviatura: 'D' },
  { id: 'trazabilidad', etiqueta: 'Trazabilidad', abreviatura: 'T' },
  { id: 'autenticidad', etiqueta: 'Autenticidad', abreviatura: 'A' },
] as const

// Categorias ENS
export const CATEGORIAS_ENS = {
  BASICA: { etiqueta: 'Basica', color: '#22c55e', descripcion: 'Todos los niveles BAJO' },
  MEDIA: { etiqueta: 'Media', color: '#eab308', descripcion: 'Al menos un nivel MEDIO' },
  ALTA: { etiqueta: 'Alta', color: '#ef4444', descripcion: 'Al menos un nivel ALTO' },
} as const
