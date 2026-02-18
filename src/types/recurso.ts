/**
 * Tipos para el Recurso Especial en Materia de Contratacion (REMC).
 *
 * v5: Formato forense tradicional espanol - prosa continua, formulario abogacia
 * v4: Profundidad juridica maxima - 8 secciones AI, campo analisisJuridico
 * v3: Estructura 12 secciones segun plantilla "base del recurso"
 * v2: Estructura 8 secciones segun Manual de Formalidades v2.0
 * v1 (legacy): Estructura anterior con 10 secciones separadas
 */

// ─── Datos del formulario (proporcionados por el usuario) ─────────────────

export interface DatosRecursoFormulario {
  // Tribunal
  tribunal_competente: string
  tribunal_direccion?: string

  // Recurrente (empresa)
  recurrente_denominacion: string
  recurrente_cif: string
  recurrente_domicilio: string
  recurrente_registro_mercantil?: string
  recurrente_objeto_social?: string
  recurrente_cnae?: string
  recurrente_email?: string
  recurrente_telefono?: string

  // Representante
  representante_nombre: string
  representante_titulo: string
  representante_facultades?: string

  // Expediente
  expediente_numero: string
  expediente_denominacion: string
  expediente_tipo_contractual: string
  expediente_procedimiento: string
  expediente_valor_estimado?: number
  expediente_presupuesto_base?: number
  expediente_duracion?: string
  expediente_cpv?: string

  // Organo de contratacion
  organo_contratacion: string
  organo_nivel?: string

  // Publicacion y plazos
  fecha_publicacion_perfil?: string
  fecha_publicacion_doue?: string
  es_contrato_sara?: boolean
  dies_a_quo?: string
  dies_ad_quem?: string
}

// ─── Clausula impugnada (derivada de hallazgos NO_CONFORME) ─────────────

export interface ClausulaImpugnada {
  id: string
  controlId: string
  requisitoId: string
  normaFuente: string
  nivelCumplimiento: string
  textoClausula: string
  evidenciaPliego: string | null
  explicacionIRAC: string
  prioridad: string
}

// ─── v2: Nuevos tipos para estructura Manual de Formalidades v2.0 ───────

/** Antecedente de hecho (seccion II) */
export interface AntecedenteHecho {
  ordinal: string        // "PRIMERO", "SEGUNDO", etc.
  titulo: string         // Titulo descriptivo del hecho
  texto: string          // Contenido narrativo
  documentoRef: string   // "(Documento n. X)"
}

/** Fundamento de Derecho con cascada argumental (seccion III) */
export interface FundamentoCascada {
  ordinal: string              // "PRIMERO", "SEGUNDO", etc.
  titulo: string               // Titulo del fundamento
  normaVulnerada: string       // Transcripcion literal del precepto
  clausulaViciada: string      // Texto literal del pliego
  nexoJuridico: string         // Silogismo: premisa mayor + menor = conclusion
  doctrinaJurisprudencia: string // TACRC/STS/STJUE con cita completa
  consecuenciaPretendida: string // Nulidad art. 47 LPAC o anulabilidad art. 48
}

/** Causa de nulidad (seccion IV) */
export interface CausaNulidad {
  base: string           // "art. 47.1.e) LPAC", etc.
  titulo: string         // Titulo descriptivo
  fundamentacion: string // Argumentacion juridica
}

/** Seccion IV: Causas de Nulidad */
export interface SeccionCausasNulidad {
  infracciones_reglamentarias: CausaNulidad  // art. 47.1.e) LPAC
  igualdad_trato: CausaNulidad               // art. 47.1.a) LPAC
  contenido_imposible: CausaNulidad          // art. 47.1.c) LPAC
  buena_administracion: CausaNulidad         // art. 41 CDFUE
  rgpd_concurrente: CausaNulidad             // RGPD/LOPDGDD
}

/** Seccion VII: Otrosies */
export interface SeccionOtrosies {
  proposicionPrueba: string
  reclamacionExpediente: string
  notificaciones: string
}

/** Seccion V: Medidas Cautelares (misma estructura) */
export interface SeccionCautelares {
  fumusBoniIuris: string
  periculumInMora: string
  ponderacionIntereses: string
}

/** Seccion VI: Suplico / Petitum */
export interface SeccionPeticion {
  principal: string
  subsidiaria: string
  cautelar: string
}

// ─── v2: Contenido del recurso (formato nuevo) ─────────────────────────

export interface ContenidoRecursoV2 {
  _version: 2
  antecedentes: AntecedenteHecho[]
  fundamentos: FundamentoCascada[]
  causasNulidad: SeccionCausasNulidad
  cautelares: SeccionCautelares
  peticion: SeccionPeticion
  otrosies: SeccionOtrosies
}

// ─── v3: Nuevos tipos para estructura plantilla "base del recurso" ──────

/** Seccion III (v3): Legitimacion Activa - 3 pilares probatorios */
export interface SeccionLegitimacionV3 {
  fundamentoLegal: string       // Art. 48 LCSP + doctrina
  interesReal: string           // Pilar 1: interes real y efectivo
  potencialLicitador: string    // Pilar 2: aptitud objetiva
  perjuicioConcreto: string     // Pilar 3: cadena causal
  conclusionLegitimacion: string // Cierre
}

/** Seccion IV (v3): Acto Recurrible - tipologia, tramite, conexion */
export interface SeccionActoRecurribleV3 {
  tipologia: string             // Encaje art. 44 LCSP
  tramiteCualificado: string    // Efectos juridicos directos
  conexionLesion: string        // Vinculo acto-lesion
  conclusionRecurribilidad: string // Cierre
}

export interface ContenidoRecursoV3 {
  _version: 3
  legitimacion: SeccionLegitimacionV3
  actoRecurrible: SeccionActoRecurribleV3
  antecedentes: AntecedenteHecho[]
  fundamentos: FundamentoCascada[]
  causasNulidad: SeccionCausasNulidad
  cautelares: SeccionCautelares
  peticion: SeccionPeticion
  otrosies: SeccionOtrosies
}

// ─── v4: Profundidad juridica maxima (recurso tecnico espectacular) ─────

/** Fundamento de Derecho v4: cascada argumental PROFUNDA + analisis juridico extendido */
export interface FundamentoCascadaV4 {
  ordinal: string                // "PRIMERO", "SEGUNDO", etc.
  titulo: string                 // Titulo del fundamento (20-30 palabras)
  normaVulnerada: string         // Transcripcion literal COMPLETA + contexto interpretativo (200-300 palabras)
  clausulaViciada: string        // Analisis detallado de la clausula viciada (200-300 palabras)
  nexoJuridico: string           // Silogismo juridico completo desarrollado (300-400 palabras)
  doctrinaJurisprudencia: string // Multiples citas CON razonamiento del tribunal (300-400 palabras)
  consecuenciaPretendida: string // Analisis completo de consecuencias (150-200 palabras)
  analisisJuridico: string       // Analisis juridico extendido: marco constitucional, Directivas UE, test proporcionalidad, doctrina academica (500-800 palabras)
}

/** Causa de nulidad v4 (legacy object format): fundamentacion expandida + jurisprudencia */
export interface CausaNulidadV4 {
  base: string                     // "art. 47.1.e) LPAC", etc.
  titulo: string                   // Titulo descriptivo
  fundamentacion: string           // Argumentacion juridica extensa (200-300 palabras)
  jurisprudenciaAplicable: string  // Citas jurisprudenciales con razonamiento (100-200 palabras)
}

/** Seccion Causas de Nulidad v4 (legacy: 5 claves fijas) */
export interface SeccionCausasNulidadV4 {
  infracciones_reglamentarias: CausaNulidadV4  // art. 47.1.e) LPAC
  igualdad_trato: CausaNulidadV4               // art. 47.1.a) LPAC
  contenido_imposible: CausaNulidadV4          // art. 47.1.c) LPAC
  buena_administracion: CausaNulidadV4         // art. 41 CDFUE
  rgpd_concurrente: CausaNulidadV4             // RGPD/LOPDGDD
}

/** Causa de nulidad dinamica (array format): sin limite, agrupada por base juridica */
export interface CausaNulidadDinamica {
  ordinal: string                     // "PRIMERA", "SEGUNDA", etc.
  base: string                        // "art. 47.1.e) LPAC", etc.
  titulo: string                      // Titulo descriptivo de la causa
  fundamentacion: string              // Prosa juridica fluida (300-600 palabras)
  hallazgosVinculados: string[]       // IDs de control ENS que fundamentan esta causa
  jurisprudenciaAplicable: string     // Citas jurisprudenciales con razonamiento
}

/** Type guard: distingue array dinamico vs objeto legacy de 5 claves */
export function esCausasDinamicas(causas: SeccionCausasNulidadV4 | CausaNulidadDinamica[]): causas is CausaNulidadDinamica[] {
  return Array.isArray(causas)
}

/** Seccion Cautelares v4: expandida con proporcionalidad de la medida */
export interface SeccionCautelaresV4 {
  fumusBoniIuris: string           // Apariencia de buen derecho (200-300 palabras)
  periculumInMora: string          // Peligro en la mora (200-300 palabras)
  ponderacionIntereses: string     // Ponderacion de intereses (200-300 palabras)
  proporcionalidadMedida: string   // Proporcionalidad de la medida cautelar (150-200 palabras)
}

/** Seccion Legitimacion v4: expandida con profundidad maxima */
export interface SeccionLegitimacionV4 {
  fundamentoLegal: string           // Art. 48 LCSP + doctrina extensa (200-300 palabras)
  interesReal: string               // Pilar 1: interes real y efectivo (200-300 palabras)
  potencialLicitador: string        // Pilar 2: aptitud objetiva (200-300 palabras)
  perjuicioConcreto: string         // Pilar 3: cadena causal (200-300 palabras)
  conclusionLegitimacion: string    // Cierre integrador (100-150 palabras)
}

/** Seccion Acto Recurrible v4: expandida */
export interface SeccionActoRecurribleV4 {
  tipologia: string                  // Encaje art. 44 LCSP (200-300 palabras)
  tramiteCualificado: string         // Efectos juridicos directos (200-300 palabras)
  conexionLesion: string             // Vinculo acto-lesion (200-300 palabras)
  conclusionRecurribilidad: string   // Cierre (100-150 palabras)
}

/** Seccion Peticion v4: expandida */
export interface SeccionPeticionV4 {
  principal: string                  // Nulidad pleno derecho + retroaccion (200-300 palabras)
  subsidiaria: string                // Anulabilidad + correccion (200-300 palabras)
  cautelar: string                   // Suspension cautelar inmediata (200-300 palabras)
}

/** Seccion Otrosies v4: expandida */
export interface SeccionOtrosiesV4 {
  proposicionPrueba: string          // Prueba documental + pericial (150-200 palabras)
  reclamacionExpediente: string      // Remision expediente art. 51.3 LCSP (100-150 palabras)
  notificaciones: string             // Designacion notificaciones (100-150 palabras)
}

export interface ContenidoRecursoV4 {
  _version: 4
  legitimacion: SeccionLegitimacionV4
  actoRecurrible: SeccionActoRecurribleV4
  antecedentes: AntecedenteHecho[]         // 8-10 hechos (expandidos)
  fundamentos: FundamentoCascadaV4[]       // 10 fundamentos con profundidad maxima
  causasNulidad: SeccionCausasNulidadV4 | CausaNulidadDinamica[]  // Dinamico (array) o legacy (5 claves)
  cautelares: SeccionCautelaresV4          // Con proporcionalidadMedida
  peticion: SeccionPeticionV4
  otrosies: SeccionOtrosiesV4
}

// ─── v1 Legacy: Tipos originales (para analisis existentes en BD) ───────

export interface SeccionLegitimacion {
  interesReal: string
  potencialLicitador: string
  perjuicioConcreto: string
}

export interface SeccionActoRecurrible {
  tipologia: string
  tramiteCualificado: string
  conexionLesion: string
}

export interface SeccionHechos {
  hecho1_publicacion: string
  hecho2_clausulas: string
  hecho3_contexto: string
  hecho4_efecto: string
  hecho5_perjuicio: string
}

export interface SeccionFundamentos {
  modulo1_principios: string
  modulo2_proporcionalidad: string
  modulo3_solvencia: string
  modulo4_tecnicas: string
  modulo5_criterios: string
  modulo6_lotes: string
  modulo7_ejecucion: string
  modulo8_modificaciones: string
  modulo9_motivacion: string
  modulo10_doctrina: string
}

export interface ContenidoRecursoLegacy {
  legitimacion: SeccionLegitimacion
  actoRecurrible: SeccionActoRecurrible
  hechos: SeccionHechos
  fundamentos: SeccionFundamentos
  cautelares: SeccionCautelares
  peticion: SeccionPeticion
}

// ─── v5: Formato forense tradicional (misma estructura, prosa mejorada) ─────

export interface ContenidoRecursoV5 extends Omit<ContenidoRecursoV4, '_version'> {
  _version: 5
}

// ─── Union: el contenido puede ser v1, v2, v3, v4 o v5 ─────────────────

export type ContenidoRecurso = ContenidoRecursoV5 | ContenidoRecursoV4 | ContenidoRecursoV3 | ContenidoRecursoV2 | ContenidoRecursoLegacy

export function esFormatoV5(contenido: ContenidoRecurso): contenido is ContenidoRecursoV5 {
  return '_version' in contenido && (contenido as ContenidoRecursoV5)._version === 5
}

export function esFormatoV4(contenido: ContenidoRecurso): contenido is ContenidoRecursoV4 {
  return '_version' in contenido && (contenido as ContenidoRecursoV4)._version === 4
}

export function esFormatoV3(contenido: ContenidoRecurso): contenido is ContenidoRecursoV3 {
  return '_version' in contenido && (contenido as ContenidoRecursoV3)._version === 3
}

export function esFormatoV2(contenido: ContenidoRecurso): contenido is ContenidoRecursoV2 {
  return 'antecedentes' in contenido && !esFormatoV3(contenido) && !esFormatoV4(contenido)
}

// ─── Datos completos para generar el REMC HTML ──────────────────────────

export interface DatosRecursoCompleto {
  datosFormulario: DatosRecursoFormulario
  contenidoRecurso: ContenidoRecurso
  clausulasImpugnadas: ClausulaImpugnada[]
  fechaGeneracion: string
  codigoRecurso: string
}

// ─── Opciones de formulario ─────────────────────────────────────────────

export const TIPOS_CONTRACTUALES = [
  { valor: 'servicios', etiqueta: 'Servicios' },
  { valor: 'obras', etiqueta: 'Obras' },
  { valor: 'suministros', etiqueta: 'Suministros' },
  { valor: 'concesion_servicios', etiqueta: 'Concesion de Servicios' },
  { valor: 'concesion_obras', etiqueta: 'Concesion de Obras' },
] as const

export const PROCEDIMIENTOS = [
  { valor: 'abierto', etiqueta: 'Abierto' },
  { valor: 'restringido', etiqueta: 'Restringido' },
  { valor: 'negociado_publicidad', etiqueta: 'Negociado con Publicidad' },
  { valor: 'negociado_sin_publicidad', etiqueta: 'Negociado sin Publicidad' },
  { valor: 'dialogo_competitivo', etiqueta: 'Dialogo Competitivo' },
  { valor: 'asociacion_innovacion', etiqueta: 'Asociacion para la Innovacion' },
] as const

export const TRIBUNALES = [
  { valor: 'TACRC', etiqueta: 'Tribunal Administrativo Central de Recursos Contractuales (TACRC)' },
  { valor: 'OARC_Navarra', etiqueta: 'Tribunal Administrativo de Contratos Publicos de Navarra' },
  { valor: 'OERC_Euskadi', etiqueta: 'Organo Administrativo de Recursos Contractuales de Euskadi' },
  { valor: 'TCCSP_Catalunya', etiqueta: 'Tribunal Catala de Contractes del Sector Public' },
  { valor: 'TARC_Madrid', etiqueta: 'Tribunal Administrativo de Contratacion Publica de Madrid' },
  { valor: 'TARC_Andalucia', etiqueta: 'Tribunal Administrativo de Recursos Contractuales de Andalucia' },
  { valor: 'TARC_Aragon', etiqueta: 'Tribunal Administrativo de Contratos Publicos de Aragon' },
  { valor: 'TARC_Castilla_Leon', etiqueta: 'Tribunal Administrativo de Recursos Contractuales de Castilla y Leon' },
  { valor: 'TARC_Extremadura', etiqueta: 'Tribunal Administrativo de Contratacion Publica de Extremadura' },
  { valor: 'otro', etiqueta: 'Otro Tribunal/Organo' },
] as const

export const NIVELES_ORGANO = [
  { valor: 'estatal', etiqueta: 'Estatal' },
  { valor: 'autonomico', etiqueta: 'Autonomico' },
  { valor: 'local', etiqueta: 'Local' },
] as const
