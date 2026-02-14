/**
 * Tipos para el Recurso Especial en Materia de Contratacion (REMC).
 *
 * El REMC tiene 14 secciones obligatorias (0 - XIII) segun el formato
 * definido en src/data/recurso_form.
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

// ─── Contenido juridico generado por Claude (14 secciones) ──────────────

export interface ContenidoRecurso {
  // III. Legitimacion Activa
  legitimacion: SeccionLegitimacion
  // IV. Acto Recurrible
  actoRecurrible: SeccionActoRecurrible
  // VI. Hechos (5 hechos obligatorios)
  hechos: SeccionHechos
  // VII. Fundamentos de Derecho (10 modulos)
  fundamentos: SeccionFundamentos
  // VIII. Medidas Cautelares
  cautelares: SeccionCautelares
  // IX. Peticion (Suplico)
  peticion: SeccionPeticion
  // XI. Efectos y escenario posterior
  efectos: SeccionEfectos
  // XII. Arquitectura estrategica
  estrategia: SeccionEstrategia
}

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

export interface SeccionCautelares {
  fumusBoniIuris: string
  periculumInMora: string
  ponderacionIntereses: string
}

export interface SeccionPeticion {
  principal: string
  subsidiaria: string
  cautelar: string
}

export interface SeccionEfectos {
  escenariosResolucion: string
  planContencioso: string
}

export interface SeccionEstrategia {
  piramideFuerza: string
  matrizRiesgos: string
  argumentoEconomico: string
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
