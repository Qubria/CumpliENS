-- =============================================================================
-- 00005_modo_local.sql
-- Configuracion para herramienta local sin autenticacion
-- - Desactiva RLS en todas las tablas
-- - Crea organizacion y perfil por defecto
-- =============================================================================

-- Desactivar RLS en todas las tablas (herramienta local, no produccion)
ALTER TABLE public.organizaciones          DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.perfiles                DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.documentos              DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.fragmentos_documento    DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.analisis                DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.hallazgos_analisis      DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.registro_pipeline       DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.cache_embeddings        DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.norma_metadata          DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.norma_requisitos        DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.verificacion_requisitos DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.informe_cobertura       DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.datos_recurso           DISABLE ROW LEVEL SECURITY;

-- Quitar FK de perfiles a auth.users (no hay autenticacion)
ALTER TABLE public.perfiles DROP CONSTRAINT IF EXISTS perfiles_id_fkey;

-- Desactivar trigger de creacion automatica de perfil
DROP TRIGGER IF EXISTS al_crear_usuario_auth ON auth.users;

-- Organizacion por defecto
INSERT INTO public.organizaciones (id, nombre)
VALUES ('11111111-1111-1111-1111-111111111111', 'CumpliENS Local')
ON CONFLICT (id) DO NOTHING;

-- Perfil por defecto (sin referencia a auth.users ya que no hay autenticacion)
INSERT INTO public.perfiles (id, organizacion_id, nombre_completo, rol)
VALUES (
  '22222222-2222-2222-2222-222222222222',
  '11111111-1111-1111-1111-111111111111',
  'Administrador',
  'administrador'
)
ON CONFLICT (id) DO NOTHING;
