-- =============================================================================
-- 00004_recurso_remc.sql
-- Soporte para Recurso Especial en Materia de Contratacion (REMC)
-- - Nueva columna documento_tecnico_id en analisis
-- - Nueva tabla datos_recurso para datos del formulario + recurso generado
-- - Nuevo estado GENERANDO_RECURSO en el pipeline
-- =============================================================================

-- Nuevo estado para el pipeline
ALTER TYPE public.estado_analisis ADD VALUE IF NOT EXISTS 'GENERANDO_RECURSO' BEFORE 'COMPLETADO';

-- Columna para segundo documento (PPT / pliego tecnico)
ALTER TABLE public.analisis
  ADD COLUMN IF NOT EXISTS documento_tecnico_id UUID REFERENCES public.documentos(id);

-- Tabla datos_recurso: almacena datos del formulario del recurrente + recurso generado
CREATE TABLE public.datos_recurso (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  analisis_id UUID NOT NULL UNIQUE REFERENCES public.analisis(id) ON DELETE CASCADE,

  -- Tribunal
  tribunal_competente TEXT NOT NULL,
  tribunal_direccion TEXT,

  -- Recurrente (empresa)
  recurrente_denominacion TEXT NOT NULL,
  recurrente_cif TEXT NOT NULL,
  recurrente_domicilio TEXT NOT NULL,
  recurrente_registro_mercantil TEXT,
  recurrente_objeto_social TEXT,
  recurrente_cnae TEXT,
  recurrente_email TEXT,
  recurrente_telefono TEXT,

  -- Representante
  representante_nombre TEXT NOT NULL,
  representante_titulo TEXT NOT NULL,
  representante_facultades TEXT,

  -- Expediente
  expediente_numero TEXT NOT NULL,
  expediente_denominacion TEXT NOT NULL,
  expediente_tipo_contractual TEXT NOT NULL,
  expediente_procedimiento TEXT NOT NULL,
  expediente_valor_estimado NUMERIC(14,2),
  expediente_presupuesto_base NUMERIC(14,2),
  expediente_duracion TEXT,
  expediente_cpv TEXT,

  -- Organo de contratacion
  organo_contratacion TEXT NOT NULL,
  organo_nivel TEXT,

  -- Publicacion y plazos
  fecha_publicacion_perfil DATE,
  fecha_publicacion_doue DATE,
  es_contrato_sara BOOLEAN DEFAULT false,
  dies_a_quo DATE,
  dies_ad_quem DATE,

  -- Recurso generado (contenido juridico de Claude)
  contenido_recurso JSONB,
  -- Recurso HTML renderizado
  recurso_html TEXT,
  recurso_generado_en TIMESTAMPTZ,

  creado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indice
CREATE INDEX idx_datos_recurso_analisis ON public.datos_recurso(analisis_id);

-- RLS
ALTER TABLE public.datos_recurso ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuarios pueden ver datos de recurso de analisis de su org"
  ON public.datos_recurso FOR SELECT
  TO authenticated
  USING (
    analisis_id IN (
      SELECT a.id FROM public.analisis a
      WHERE a.organizacion_id = public.obtener_org_id_usuario()
    )
  );

CREATE POLICY "Usuarios pueden insertar datos de recurso para analisis de su org"
  ON public.datos_recurso FOR INSERT
  TO authenticated
  WITH CHECK (
    analisis_id IN (
      SELECT a.id FROM public.analisis a
      WHERE a.organizacion_id = public.obtener_org_id_usuario()
    )
  );

CREATE POLICY "Rol de servicio puede gestionar datos de recurso"
  ON public.datos_recurso FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
