-- =============================================================================
-- 00003_norma_requirements.sql
-- Tablas para el sistema de ingesta de normas y verificacion de requisitos
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. Nuevo ENUM: estado de ingesta de normas
-- ---------------------------------------------------------------------------
create type public.estado_ingesta as enum (
  'PENDIENTE',
  'LIMPIANDO',
  'CLASIFICANDO',
  'EXTRAYENDO',
  'COMPLETADA',
  'FALLIDA'
);

-- ---------------------------------------------------------------------------
-- 2. Nuevos valores en estado_analisis
-- ---------------------------------------------------------------------------
alter type public.estado_analisis add value if not exists 'FASE2_VERIFICACION_REQUISITOS';
alter type public.estado_analisis add value if not exists 'FASE3_ANALISIS_PROFUNDO';
alter type public.estado_analisis add value if not exists 'FASE4_GENERACION_INFORME';

-- ---------------------------------------------------------------------------
-- 3. Nuevas columnas en analisis
-- ---------------------------------------------------------------------------
alter table public.analisis add column if not exists perfil_sectorial text;
alter table public.analisis add column if not exists proveedores_nube text[];
alter table public.analisis add column if not exists total_requisitos_verificados int default 0;
alter table public.analisis add column if not exists total_normas_referenciadas int default 0;

-- ---------------------------------------------------------------------------
-- 4. Tabla: norma_metadata
-- ---------------------------------------------------------------------------
create table public.norma_metadata (
  id                   uuid           primary key default gen_random_uuid(),
  nombre_archivo       text           not null unique,
  ccn_stic_id          text           not null,
  titulo               text           not null,
  fecha_version        text,
  idioma               text           not null default 'es',
  categoria            text           not null,
  proveedor_nube       text,
  controles_aplicables text[],
  niveles_aplicables   text[],
  es_duplicado_de      text,
  estado_ingesta       estado_ingesta not null default 'PENDIENTE',
  texto_limpio         text,
  total_requisitos     int            default 0,
  tokens_estimados     int,
  tokens_limpios       int,
  intentos             int            default 0,
  error_mensaje        text,
  procesado_en         timestamptz,
  creado_en            timestamptz    not null default now()
);

-- ---------------------------------------------------------------------------
-- 5. Tabla: norma_requisitos
-- ---------------------------------------------------------------------------
create table public.norma_requisitos (
  id                     uuid           primary key default gen_random_uuid(),
  norma_metadata_id      uuid           not null references public.norma_metadata(id) on delete cascade,
  requisito_id           text           not null unique,
  seccion_fuente         text,
  texto_requisito        text           not null,
  resumen_requisito      text           not null,
  control_ids_ens        text[]         not null,
  niveles_ens            text[]         not null,
  criterios_verificacion text,
  palabras_clave         text[],
  es_obligatorio         boolean        not null default true,
  duplicado_de           text,
  embedding              extensions.vector(1536),
  creado_en              timestamptz    not null default now()
);

-- ---------------------------------------------------------------------------
-- 6. Tabla: verificacion_requisitos
-- ---------------------------------------------------------------------------
create table public.verificacion_requisitos (
  id                    uuid               primary key default gen_random_uuid(),
  analisis_id           uuid               not null references public.analisis(id) on delete cascade,
  requisito_id          text               not null,
  norma_fuente          text               not null,
  control_id            text               not null,
  nivel_cumplimiento    nivel_cumplimiento not null,
  evidencia_texto       text,
  explicacion           text               not null,
  confianza             numeric(3,2)       not null,
  ids_fragmentos_fuente uuid[],
  creado_en             timestamptz        not null default now()
);

-- ---------------------------------------------------------------------------
-- 7. Tabla: informe_cobertura
-- ---------------------------------------------------------------------------
create table public.informe_cobertura (
  id                      uuid        primary key default gen_random_uuid(),
  total_normas            int         not null,
  normas_completadas      int         not null,
  normas_fallidas         int         not null,
  total_requisitos        int         not null,
  controles_cubiertos     int         not null,
  controles_sin_cobertura text[],
  normas_sin_requisitos   text[],
  estadisticas            jsonb       not null default '{}',
  creado_en               timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 8. Indices
-- ---------------------------------------------------------------------------

-- HNSW para busqueda vectorial de requisitos
create index idx_norma_requisitos_embedding
  on public.norma_requisitos
  using hnsw (embedding extensions.vector_cosine_ops)
  with (m = 16, ef_construction = 64);

-- GIN para busqueda por control, nivel y palabras clave
create index idx_norma_requisitos_controles on public.norma_requisitos using gin (control_ids_ens);
create index idx_norma_requisitos_niveles   on public.norma_requisitos using gin (niveles_ens);
create index idx_norma_requisitos_palabras  on public.norma_requisitos using gin (palabras_clave);

-- B-tree para verificacion por analisis
create index idx_verificacion_analisis on public.verificacion_requisitos (analisis_id);
create index idx_verificacion_control  on public.verificacion_requisitos (control_id);
create index idx_verificacion_norma    on public.verificacion_requisitos (norma_fuente);

-- Estado de ingesta
create index idx_norma_metadata_estado on public.norma_metadata (estado_ingesta);

-- ---------------------------------------------------------------------------
-- 9. RLS para nuevas tablas
-- ---------------------------------------------------------------------------

-- norma_metadata: solo lectura para todos los autenticados (datos publicos de referencia)
alter table public.norma_metadata enable row level security;

create policy "Usuarios autenticados pueden ver metadata de normas"
  on public.norma_metadata for select
  to authenticated
  using (true);

create policy "Rol de servicio puede gestionar metadata de normas"
  on public.norma_metadata for all
  to service_role
  using (true)
  with check (true);

-- norma_requisitos: solo lectura para autenticados
alter table public.norma_requisitos enable row level security;

create policy "Usuarios autenticados pueden ver requisitos de normas"
  on public.norma_requisitos for select
  to authenticated
  using (true);

create policy "Rol de servicio puede gestionar requisitos de normas"
  on public.norma_requisitos for all
  to service_role
  using (true)
  with check (true);

-- verificacion_requisitos: visibilidad por organizacion
alter table public.verificacion_requisitos enable row level security;

create policy "Usuarios pueden ver verificaciones de analisis de su org"
  on public.verificacion_requisitos for select
  to authenticated
  using (
    analisis_id in (
      select a.id from public.analisis a
      where a.organizacion_id = public.obtener_org_id_usuario()
    )
  );

create policy "Rol de servicio puede gestionar verificaciones"
  on public.verificacion_requisitos for all
  to service_role
  using (true)
  with check (true);

-- informe_cobertura: solo lectura para autenticados
alter table public.informe_cobertura enable row level security;

create policy "Usuarios autenticados pueden ver informes de cobertura"
  on public.informe_cobertura for select
  to authenticated
  using (true);

create policy "Rol de servicio puede gestionar informes de cobertura"
  on public.informe_cobertura for all
  to service_role
  using (true)
  with check (true);

-- ---------------------------------------------------------------------------
-- 10. Funciones SQL
-- ---------------------------------------------------------------------------

-- buscar_requisitos_por_control: obtiene requisitos para controles y niveles dados
create or replace function public.buscar_requisitos_por_control(
  p_control_ids text[],
  p_niveles     text[]
)
returns setof public.norma_requisitos
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  return query
    select nr.*
    from public.norma_requisitos nr
    where nr.control_ids_ens && p_control_ids
      and nr.niveles_ens && p_niveles
      and nr.duplicado_de is null
    order by nr.requisito_id;
end;
$$;

-- buscar_requisitos_similares: deduplicacion por similitud vectorial
create or replace function public.buscar_requisitos_similares(
  p_embedding extensions.vector(1536),
  p_umbral    float default 0.92,
  p_limite    int   default 5
)
returns table (
  requisito_id text,
  similitud    float
)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  return query
    select
      nr.requisito_id,
      (1 - (nr.embedding <=> p_embedding))::float as similitud
    from public.norma_requisitos nr
    where nr.embedding is not null
      and nr.duplicado_de is null
      and 1 - (nr.embedding <=> p_embedding) > p_umbral
    order by nr.embedding <=> p_embedding
    limit p_limite;
end;
$$;

-- obtener_estadisticas_cobertura: resumen de cobertura por control
create or replace function public.obtener_estadisticas_cobertura()
returns table (
  control_id       text,
  total_requisitos bigint,
  normas_fuente    text[]
)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  return query
    select
      unnest(nr.control_ids_ens) as control_id,
      count(distinct nr.requisito_id) as total_requisitos,
      array_agg(distinct nm.nombre_archivo) as normas_fuente
    from public.norma_requisitos nr
    join public.norma_metadata nm on nm.id = nr.norma_metadata_id
    where nr.duplicado_de is null
    group by unnest(nr.control_ids_ens)
    order by control_id;
end;
$$;
