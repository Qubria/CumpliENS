export type CategoriaENS = 'BASICA' | 'MEDIA' | 'ALTA'

export type TipoDocumento = 'PLIEGO_TECNICO' | 'DOCUMENTO_LEGAL' | 'REFERENCIA_ENS' | 'GUIA' | 'NORMA_ENS'

export type EstadoAnalisis =
  | 'PENDIENTE'
  | 'INGESTA_NORMAS'
  | 'EXTRAYENDO_TEXTO'
  | 'FRAGMENTANDO'
  | 'GENERANDO_EMBEDDINGS'
  | 'FASE1_APLICABILIDAD'
  | 'FASE2_ANALISIS_BRECHAS'
  | 'FASE3_GENERACION_INFORME'
  | 'FASE2_VERIFICACION_REQUISITOS'
  | 'FASE3_ANALISIS_PROFUNDO'
  | 'FASE4_GENERACION_INFORME'
  | 'GENERANDO_RECURSO'
  | 'COMPLETADO'
  | 'FALLIDO'

export type NivelCumplimiento =
  | 'CONFORME'
  | 'PARCIALMENTE_CONFORME'
  | 'NO_CONFORME'
  | 'NO_APLICA'

export type TipoFragmento =
  | 'TITULO'
  | 'ARTICULO'
  | 'SECCION'
  | 'PARRAFO'
  | 'TABLA'
  | 'ANEXO'
  | 'DEFINICION'
  | 'REQUISITO'
  | 'GENERICO'

export type EstadoIngesta =
  | 'PENDIENTE'
  | 'LIMPIANDO'
  | 'CLASIFICANDO'
  | 'EXTRAYENDO'
  | 'COMPLETADA'
  | 'FALLIDA'

export type RolUsuario = 'administrador' | 'analista' | 'lector'

export type PrioridadHallazgo = 'CRITICA' | 'ALTA' | 'MEDIA' | 'BAJA'

export interface BaseDatos {
  public: {
    Tables: {
      organizaciones: {
        Row: {
          id: string
          nombre: string
          creado_en: string
          actualizado_en: string
        }
        Insert: {
          id?: string
          nombre: string
          creado_en?: string
          actualizado_en?: string
        }
        Update: {
          nombre?: string
          actualizado_en?: string
        }
      }
      perfiles: {
        Row: {
          id: string
          organizacion_id: string | null
          nombre_completo: string | null
          rol: RolUsuario
          creado_en: string
          actualizado_en: string
        }
        Insert: {
          id: string
          organizacion_id?: string | null
          nombre_completo?: string | null
          rol?: RolUsuario
          creado_en?: string
          actualizado_en?: string
        }
        Update: {
          organizacion_id?: string | null
          nombre_completo?: string | null
          rol?: RolUsuario
          actualizado_en?: string
        }
      }
      documentos: {
        Row: {
          id: string
          organizacion_id: string
          subido_por: string
          nombre: string
          tipo_documento: TipoDocumento
          ruta_almacenamiento: string | null
          hash_archivo: string | null
          tamano_archivo_bytes: number | null
          numero_paginas: number | null
          texto_extraido: string | null
          metadatos: Record<string, unknown>
          version: number
          es_referencia: boolean
          creado_en: string
          actualizado_en: string
        }
        Insert: {
          id?: string
          organizacion_id: string
          subido_por: string
          nombre: string
          tipo_documento: TipoDocumento
          ruta_almacenamiento?: string | null
          hash_archivo?: string | null
          tamano_archivo_bytes?: number | null
          numero_paginas?: number | null
          texto_extraido?: string | null
          metadatos?: Record<string, unknown>
          version?: number
          es_referencia?: boolean
          creado_en?: string
          actualizado_en?: string
        }
        Update: {
          nombre?: string
          tipo_documento?: TipoDocumento
          ruta_almacenamiento?: string | null
          texto_extraido?: string | null
          metadatos?: Record<string, unknown>
          numero_paginas?: number | null
          actualizado_en?: string
        }
      }
      fragmentos_documento: {
        Row: {
          id: string
          documento_id: string
          indice_fragmento: number
          contenido: string
          tipo_fragmento: TipoFragmento
          jerarquia_encabezados: string[]
          pagina_inicio: number | null
          pagina_fin: number | null
          cantidad_tokens: number | null
          creado_en: string
        }
        Insert: {
          id?: string
          documento_id: string
          indice_fragmento: number
          contenido: string
          tipo_fragmento?: TipoFragmento
          jerarquia_encabezados?: string[]
          pagina_inicio?: number | null
          pagina_fin?: number | null
          cantidad_tokens?: number | null
          creado_en?: string
        }
        Update: {
          contenido?: string
          tipo_fragmento?: TipoFragmento
          jerarquia_encabezados?: string[]
        }
      }
      analisis: {
        Row: {
          id: string
          organizacion_id: string
          creado_por: string
          documento_objetivo_id: string
          documento_tecnico_id: string | null
          documentos_referencia_ids: string[]
          estado: EstadoAnalisis
          porcentaje_progreso: number
          descripcion_paso_actual: string | null
          mensaje_error: string | null
          detalles_error: Record<string, unknown> | null
          categoria_ens: CategoriaENS | null
          justificacion_categoria: string | null
          dimensiones_afectadas: Record<string, unknown> | null
          controles_aplicables: Record<string, unknown>[] | null
          total_hallazgos: number
          cantidad_conforme: number
          cantidad_parcial: number
          cantidad_no_conforme: number
          cantidad_no_aplica: number
          ruta_informe: string | null
          informe_generado_en: string | null
          total_tokens_entrada: number
          total_tokens_salida: number
          total_tokens_embedding: number
          costo_estimado_usd: number
          iniciado_en: string | null
          completado_en: string | null
          perfil_sectorial: string | null
          proveedores_nube: string[] | null
          total_requisitos_verificados: number
          total_normas_referenciadas: number
          creado_en: string
          actualizado_en: string
        }
        Insert: {
          id?: string
          organizacion_id: string
          creado_por: string
          documento_objetivo_id: string
          documento_tecnico_id?: string | null
          documentos_referencia_ids?: string[]
          estado?: EstadoAnalisis
          porcentaje_progreso?: number
          descripcion_paso_actual?: string | null
          creado_en?: string
          actualizado_en?: string
        }
        Update: {
          estado?: EstadoAnalisis
          porcentaje_progreso?: number
          descripcion_paso_actual?: string | null
          documento_tecnico_id?: string | null
          mensaje_error?: string | null
          detalles_error?: Record<string, unknown> | null
          categoria_ens?: CategoriaENS | null
          justificacion_categoria?: string | null
          dimensiones_afectadas?: Record<string, unknown> | null
          controles_aplicables?: Record<string, unknown>[] | null
          total_hallazgos?: number
          cantidad_conforme?: number
          cantidad_parcial?: number
          cantidad_no_conforme?: number
          cantidad_no_aplica?: number
          ruta_informe?: string | null
          informe_generado_en?: string | null
          total_tokens_entrada?: number
          total_tokens_salida?: number
          costo_estimado_usd?: number
          iniciado_en?: string | null
          completado_en?: string | null
          perfil_sectorial?: string | null
          proveedores_nube?: string[] | null
          total_requisitos_verificados?: number
          total_normas_referenciadas?: number
          actualizado_en?: string
        }
      }
      hallazgos_analisis: {
        Row: {
          id: string
          analisis_id: string
          control_id: string
          nombre_control: string
          categoria_control: string
          nivel_cumplimiento: NivelCumplimiento
          resumen_hallazgo: string
          texto_evidencia: string | null
          descripcion_brecha: string | null
          recomendacion: string | null
          prioridad: PrioridadHallazgo | null
          ids_fragmentos_fuente: string[] | null
          irac_asunto: string | null
          irac_regla: string | null
          irac_aplicacion: string | null
          irac_conclusion: string | null
          creado_en: string
        }
        Insert: {
          id?: string
          analisis_id: string
          control_id: string
          nombre_control: string
          categoria_control: string
          nivel_cumplimiento: NivelCumplimiento
          resumen_hallazgo: string
          texto_evidencia?: string | null
          descripcion_brecha?: string | null
          recomendacion?: string | null
          prioridad?: PrioridadHallazgo | null
          ids_fragmentos_fuente?: string[] | null
          irac_asunto?: string | null
          irac_regla?: string | null
          irac_aplicacion?: string | null
          irac_conclusion?: string | null
          creado_en?: string
        }
        Update: never
      }
      registro_pipeline: {
        Row: {
          id: string
          analisis_id: string
          paso: string
          estado: string
          resumen_entrada: Record<string, unknown> | null
          resumen_salida: Record<string, unknown> | null
          mensaje_error: string | null
          duracion_ms: number | null
          tokens_usados: Record<string, unknown> | null
          creado_en: string
        }
        Insert: {
          id?: string
          analisis_id: string
          paso: string
          estado: string
          resumen_entrada?: Record<string, unknown> | null
          resumen_salida?: Record<string, unknown> | null
          mensaje_error?: string | null
          duracion_ms?: number | null
          tokens_usados?: Record<string, unknown> | null
          creado_en?: string
        }
        Update: never
      }
      norma_metadata: {
        Row: {
          id: string
          nombre_archivo: string
          ccn_stic_id: string
          titulo: string
          fecha_version: string | null
          idioma: string | null
          categoria: string
          proveedor_nube: string | null
          controles_aplicables: string[] | null
          niveles_aplicables: string[] | null
          es_duplicado_de: string | null
          estado_ingesta: EstadoIngesta
          texto_limpio: string | null
          total_requisitos: number
          tokens_estimados: number
          tokens_limpios: number
          intentos: number
          error_mensaje: string | null
          procesado_en: string | null
          creado_en: string
        }
        Insert: {
          id?: string
          nombre_archivo: string
          ccn_stic_id: string
          titulo: string
          fecha_version?: string | null
          idioma?: string | null
          categoria: string
          proveedor_nube?: string | null
          controles_aplicables?: string[] | null
          niveles_aplicables?: string[] | null
          es_duplicado_de?: string | null
          estado_ingesta?: EstadoIngesta
          texto_limpio?: string | null
          total_requisitos?: number
          tokens_estimados?: number
          tokens_limpios?: number
          intentos?: number
          error_mensaje?: string | null
          procesado_en?: string | null
          creado_en?: string
        }
        Update: {
          nombre_archivo?: string
          ccn_stic_id?: string
          titulo?: string
          fecha_version?: string | null
          idioma?: string | null
          categoria?: string
          proveedor_nube?: string | null
          controles_aplicables?: string[] | null
          niveles_aplicables?: string[] | null
          es_duplicado_de?: string | null
          estado_ingesta?: EstadoIngesta
          texto_limpio?: string | null
          total_requisitos?: number
          tokens_estimados?: number
          tokens_limpios?: number
          intentos?: number
          error_mensaje?: string | null
          procesado_en?: string | null
        }
      }
      norma_requisitos: {
        Row: {
          id: string
          norma_metadata_id: string
          requisito_id: string
          seccion_fuente: string | null
          texto_requisito: string
          resumen_requisito: string
          control_ids_ens: string[]
          niveles_ens: string[]
          criterios_verificacion: string | null
          palabras_clave: string[] | null
          es_obligatorio: boolean
          duplicado_de: string | null
          creado_en: string
        }
        Insert: {
          id?: string
          norma_metadata_id: string
          requisito_id: string
          texto_requisito: string
          resumen_requisito: string
          control_ids_ens: string[]
          niveles_ens: string[]
          seccion_fuente?: string | null
          criterios_verificacion?: string | null
          palabras_clave?: string[] | null
          es_obligatorio?: boolean
          duplicado_de?: string | null
          creado_en?: string
        }
        Update: never
      }
      verificacion_requisitos: {
        Row: {
          id: string
          analisis_id: string
          requisito_id: string
          norma_fuente: string
          control_id: string
          nivel_cumplimiento: NivelCumplimiento
          evidencia_texto: string | null
          explicacion: string
          confianza: number
          ids_fragmentos_fuente: string[] | null
          creado_en: string
        }
        Insert: {
          id?: string
          analisis_id: string
          requisito_id: string
          norma_fuente: string
          control_id: string
          nivel_cumplimiento: NivelCumplimiento
          evidencia_texto?: string | null
          explicacion: string
          confianza: number
          ids_fragmentos_fuente?: string[] | null
          creado_en?: string
        }
        Update: never
      }
      informe_cobertura: {
        Row: {
          id: string
          total_normas: number
          normas_completadas: number
          normas_fallidas: number
          total_requisitos: number
          controles_cubiertos: string[]
          controles_sin_cobertura: string[]
          normas_sin_requisitos: string[]
          estadisticas: Record<string, unknown>
          creado_en: string
        }
        Insert: {
          id?: string
          total_normas: number
          normas_completadas: number
          normas_fallidas: number
          total_requisitos: number
          controles_cubiertos: string[]
          estadisticas: Record<string, unknown>
          controles_sin_cobertura?: string[]
          normas_sin_requisitos?: string[]
          creado_en?: string
        }
        Update: never
      }
      datos_recurso: {
        Row: {
          id: string
          analisis_id: string
          tribunal_competente: string
          tribunal_direccion: string | null
          recurrente_denominacion: string
          recurrente_cif: string
          recurrente_domicilio: string
          recurrente_registro_mercantil: string | null
          recurrente_objeto_social: string | null
          recurrente_cnae: string | null
          recurrente_email: string | null
          recurrente_telefono: string | null
          representante_nombre: string
          representante_titulo: string
          representante_facultades: string | null
          expediente_numero: string
          expediente_denominacion: string
          expediente_tipo_contractual: string
          expediente_procedimiento: string
          expediente_valor_estimado: number | null
          expediente_presupuesto_base: number | null
          expediente_duracion: string | null
          expediente_cpv: string | null
          organo_contratacion: string
          organo_nivel: string | null
          fecha_publicacion_perfil: string | null
          fecha_publicacion_doue: string | null
          es_contrato_sara: boolean
          dies_a_quo: string | null
          dies_ad_quem: string | null
          contenido_recurso: Record<string, unknown> | null
          recurso_html: string | null
          recurso_generado_en: string | null
          creado_en: string
        }
        Insert: {
          id?: string
          analisis_id: string
          tribunal_competente: string
          tribunal_direccion?: string | null
          recurrente_denominacion: string
          recurrente_cif: string
          recurrente_domicilio: string
          recurrente_registro_mercantil?: string | null
          recurrente_objeto_social?: string | null
          recurrente_cnae?: string | null
          recurrente_email?: string | null
          recurrente_telefono?: string | null
          representante_nombre: string
          representante_titulo: string
          representante_facultades?: string | null
          expediente_numero: string
          expediente_denominacion: string
          expediente_tipo_contractual: string
          expediente_procedimiento: string
          expediente_valor_estimado?: number | null
          expediente_presupuesto_base?: number | null
          expediente_duracion?: string | null
          expediente_cpv?: string | null
          organo_contratacion: string
          organo_nivel?: string | null
          fecha_publicacion_perfil?: string | null
          fecha_publicacion_doue?: string | null
          es_contrato_sara?: boolean
          dies_a_quo?: string | null
          dies_ad_quem?: string | null
          contenido_recurso?: Record<string, unknown> | null
          recurso_html?: string | null
          recurso_generado_en?: string | null
          creado_en?: string
        }
        Update: {
          contenido_recurso?: Record<string, unknown> | null
          recurso_html?: string | null
          recurso_generado_en?: string | null
        }
      }
    }
    Functions: {
      buscar_fragmentos: {
        Args: {
          query_embedding: number[]
          umbral_similitud?: number
          cantidad_resultados?: number
          filtrar_documento_ids?: string[] | null
        }
        Returns: {
          id: string
          documento_id: string
          indice_fragmento: number
          contenido: string
          tipo_fragmento: TipoFragmento
          jerarquia_encabezados: string[]
          similitud: number
        }[]
      }
      obtener_org_id_usuario: {
        Args: Record<string, never>
        Returns: string
      }
      buscar_requisitos_por_control: {
        Args: {
          p_control_ids: string[]
          p_niveles: string[]
        }
        Returns: {
          id: string
          norma_metadata_id: string
          requisito_id: string
          seccion_fuente: string | null
          texto_requisito: string
          resumen_requisito: string
          control_ids_ens: string[]
          niveles_ens: string[]
          criterios_verificacion: string | null
          palabras_clave: string[] | null
          es_obligatorio: boolean
          duplicado_de: string | null
        }[]
      }
      buscar_requisitos_similares: {
        Args: {
          p_embedding: number[]
          p_umbral?: number
          p_limite?: number
        }
        Returns: {
          requisito_id: string
          similitud: number
        }[]
      }
      obtener_estadisticas_cobertura: {
        Args: Record<string, never>
        Returns: {
          control_id: string
          total_requisitos: number
          normas_fuente: string[]
        }[]
      }
    }
  }
}
