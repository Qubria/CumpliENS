-- =============================================================================
-- 00000_consolidated_schema.sql
-- Esquema consolidado completo para CumpliENS - Auditor de Cumplimiento ENS
-- Combina: 00001_initial_schema + 00002_storage_setup + 00003_norma_requirements
--        + 00004_recurso_remc
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. Extensiones
-- ---------------------------------------------------------------------------
create extension if not exists "vector"    with schema extensions;  -- pgvector
create extension if not exists "pg_net"    with schema extensions;
create extension if not exists "pg_cron"   with schema extensions;

-- ---------------------------------------------------------------------------
-- 2. Tipos ENUM personalizados
-- ---------------------------------------------------------------------------
create type public.categoria_ens as enum (
  'BASICA',
  'MEDIA',
  'ALTA'
);

create type public.tipo_documento as enum (
  'PLIEGO_TECNICO',
  'DOCUMENTO_LEGAL',
  'REFERENCIA_ENS',
  'GUIA'
);

create type public.estado_analisis as enum (
  'PENDIENTE',
  'EXTRAYENDO_TEXTO',
  'FRAGMENTANDO',
  'GENERANDO_EMBEDDINGS',
  'FASE1_APLICABILIDAD',
  'FASE2_ANALISIS_BRECHAS',
  'FASE2_VERIFICACION_REQUISITOS',
  'FASE3_ANALISIS_PROFUNDO',
  'FASE3_GENERACION_INFORME',
  'FASE4_GENERACION_INFORME',
  'GENERANDO_RECURSO',
  'COMPLETADO',
  'FALLIDO'
);

create type public.nivel_cumplimiento as enum (
  'CONFORME',
  'PARCIALMENTE_CONFORME',
  'NO_CONFORME',
  'NO_APLICA'
);

create type public.tipo_fragmento as enum (
  'TITULO',
  'ARTICULO',
  'SECCION',
  'PARRAFO',
  'TABLA',
  'ANEXO',
  'DEFINICION',
  'REQUISITO',
  'GENERICO'
);

create type public.estado_ingesta as enum (
  'PENDIENTE',
  'LIMPIANDO',
  'CLASIFICANDO',
  'EXTRAYENDO',
  'COMPLETADA',
  'FALLIDA'
);

-- ---------------------------------------------------------------------------
-- 3. Tablas
-- ---------------------------------------------------------------------------

-- organizaciones ------------------------------------------------------------
create table public.organizaciones (
  id             uuid        primary key default gen_random_uuid(),
  nombre         text        not null,
  creado_en      timestamptz not null    default now(),
  actualizado_en timestamptz not null    default now()
);

-- perfiles ------------------------------------------------------------------
create table public.perfiles (
  id              uuid        primary key references auth.users on delete cascade,
  organizacion_id uuid        references public.organizaciones(id),
  nombre_completo text,
  rol             text        not null default 'analista'
                              check (rol in ('administrador', 'analista', 'lector')),
  creado_en       timestamptz not null default now(),
  actualizado_en  timestamptz not null default now()
);

-- documentos ----------------------------------------------------------------
create table public.documentos (
  id                   uuid           primary key default gen_random_uuid(),
  organizacion_id      uuid           not null references public.organizaciones(id),
  subido_por           uuid           not null references public.perfiles(id),
  nombre               text           not null,
  tipo_documento       tipo_documento not null,
  ruta_almacenamiento  text,
  hash_archivo         text,
  tamano_archivo_bytes bigint,
  numero_paginas       int,
  texto_extraido       text,
  metadatos            jsonb          default '{}',
  version              int            not null default 1,
  es_referencia        boolean        not null default false,
  creado_en            timestamptz    not null default now(),
  actualizado_en       timestamptz    not null default now()
);

-- fragmentos_documento ------------------------------------------------------
create table public.fragmentos_documento (
  id                    uuid                       primary key default gen_random_uuid(),
  documento_id          uuid                       not null references public.documentos(id) on delete cascade,
  indice_fragmento      int                        not null,
  contenido             text                       not null,
  tipo_fragmento        tipo_fragmento             not null default 'GENERICO',
  jerarquia_encabezados text[],
  pagina_inicio         int,
  pagina_fin            int,
  cantidad_tokens       int,
  embedding             extensions.vector(1536),
  creado_en             timestamptz                not null default now(),

  unique (documento_id, indice_fragmento)
);

-- analisis ------------------------------------------------------------------
create table public.analisis (
  id                        uuid             primary key default gen_random_uuid(),
  organizacion_id           uuid             not null references public.organizaciones(id),
  creado_por                uuid             not null references public.perfiles(id),
  documento_objetivo_id     uuid             not null references public.documentos(id),
  documento_tecnico_id      uuid             references public.documentos(id),
  documentos_referencia_ids uuid[]           default '{}',
  estado                    estado_analisis  not null default 'PENDIENTE',
  porcentaje_progreso       int              not null default 0
                                             check (porcentaje_progreso >= 0 and porcentaje_progreso <= 100),
  descripcion_paso_actual   text,
  mensaje_error             text,
  detalles_error            jsonb,

  -- Resultados de aplicabilidad
  categoria_ens             categoria_ens,
  justificacion_categoria   text,
  dimensiones_afectadas     jsonb,
  controles_aplicables      jsonb,

  -- Conteos resumen de hallazgos
  total_hallazgos           int              default 0,
  cantidad_conforme         int              default 0,
  cantidad_parcial          int              default 0,
  cantidad_no_conforme      int              default 0,
  cantidad_no_aplica        int              default 0,

  -- Trazabilidad normativa
  perfil_sectorial          text,
  proveedores_nube          text[],
  total_requisitos_verificados int           default 0,
  total_normas_referenciadas   int           default 0,

  -- Informe
  ruta_informe              text,
  informe_generado_en       timestamptz,

  -- Tracking de costos
  total_tokens_entrada      int              default 0,
  total_tokens_salida       int              default 0,
  total_tokens_embedding    int              default 0,
  costo_estimado_usd        numeric(10,4)    default 0,

  -- Timestamps
  iniciado_en               timestamptz,
  completado_en             timestamptz,
  creado_en                 timestamptz      not null default now(),
  actualizado_en            timestamptz      not null default now()
);

-- hallazgos_analisis --------------------------------------------------------
create table public.hallazgos_analisis (
  id                    uuid               primary key default gen_random_uuid(),
  analisis_id           uuid               not null references public.analisis(id) on delete cascade,
  control_id            text               not null,
  nombre_control        text               not null,
  categoria_control     text               not null,
  nivel_cumplimiento    nivel_cumplimiento not null,
  resumen_hallazgo      text               not null,
  texto_evidencia       text,
  descripcion_brecha    text,
  recomendacion         text,
  prioridad             text               check (prioridad in ('CRITICA', 'ALTA', 'MEDIA', 'BAJA')),
  ids_fragmentos_fuente uuid[],

  -- Campos de metodologia IRAC
  irac_asunto           text,
  irac_regla            text,
  irac_aplicacion       text,
  irac_conclusion       text,

  creado_en             timestamptz        not null default now()
);

-- registro_pipeline ---------------------------------------------------------
create table public.registro_pipeline (
  id              uuid        primary key default gen_random_uuid(),
  analisis_id     uuid        not null references public.analisis(id) on delete cascade,
  paso            text        not null,
  estado          text        not null check (estado in ('iniciado', 'completado', 'fallido', 'reintentando')),
  resumen_entrada jsonb,
  resumen_salida  jsonb,
  mensaje_error   text,
  duracion_ms     int,
  tokens_usados   jsonb,
  creado_en       timestamptz not null default now()
);

-- cache_embeddings ----------------------------------------------------------
create table public.cache_embeddings (
  id             uuid                    primary key default gen_random_uuid(),
  hash_contenido text                    not null unique,
  embedding      extensions.vector(1536),
  modelo         text                    not null default 'text-embedding-3-small',
  creado_en      timestamptz             not null default now()
);

-- norma_metadata ------------------------------------------------------------
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

-- norma_requisitos ----------------------------------------------------------
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

-- verificacion_requisitos ---------------------------------------------------
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

-- informe_cobertura ---------------------------------------------------------
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

-- datos_recurso ---------------------------------------------------------------
create table public.datos_recurso (
  id                        uuid        primary key default gen_random_uuid(),
  analisis_id               uuid        not null unique references public.analisis(id) on delete cascade,

  -- Tribunal
  tribunal_competente       text        not null,
  tribunal_direccion        text,

  -- Recurrente (empresa)
  recurrente_denominacion   text        not null,
  recurrente_cif            text        not null,
  recurrente_domicilio      text        not null,
  recurrente_registro_mercantil text,
  recurrente_objeto_social  text,
  recurrente_cnae           text,
  recurrente_email          text,
  recurrente_telefono       text,

  -- Representante
  representante_nombre      text        not null,
  representante_titulo      text        not null,
  representante_facultades  text,

  -- Expediente
  expediente_numero         text        not null,
  expediente_denominacion   text        not null,
  expediente_tipo_contractual text      not null,
  expediente_procedimiento  text        not null,
  expediente_valor_estimado numeric(14,2),
  expediente_presupuesto_base numeric(14,2),
  expediente_duracion       text,
  expediente_cpv            text,

  -- Organo de contratacion
  organo_contratacion       text        not null,
  organo_nivel              text,

  -- Publicacion y plazos
  fecha_publicacion_perfil  date,
  fecha_publicacion_doue    date,
  es_contrato_sara          boolean     default false,
  dies_a_quo                date,
  dies_ad_quem              date,

  -- Recurso generado (contenido juridico de Claude)
  contenido_recurso         jsonb,
  -- Recurso HTML renderizado
  recurso_html              text,
  recurso_generado_en       timestamptz,

  creado_en                 timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 4. Indices
-- ---------------------------------------------------------------------------

-- HNSW para busqueda vectorial de fragmentos de documento
create index idx_fragmentos_documento_embedding
  on public.fragmentos_documento
  using hnsw (embedding extensions.vector_cosine_ops)
  with (m = 16, ef_construction = 64);

-- B-tree en fragmentos_documento
create index idx_fragmentos_documento_documento_id   on public.fragmentos_documento(documento_id);
create index idx_fragmentos_documento_tipo_fragmento on public.fragmentos_documento(tipo_fragmento);

-- B-tree en hallazgos_analisis
create index idx_hallazgos_analisis_analisis_id        on public.hallazgos_analisis(analisis_id);
create index idx_hallazgos_analisis_nivel_cumplimiento on public.hallazgos_analisis(nivel_cumplimiento);
create index idx_hallazgos_analisis_control_id         on public.hallazgos_analisis(control_id);

-- B-tree en registro_pipeline
create index idx_registro_pipeline_analisis_id on public.registro_pipeline(analisis_id);

-- HNSW para busqueda vectorial de requisitos de normas
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

-- B-tree en datos_recurso
create index idx_datos_recurso_analisis on public.datos_recurso(analisis_id);

-- ---------------------------------------------------------------------------
-- 5. Seguridad a Nivel de Fila (RLS)
-- ---------------------------------------------------------------------------

-- Funcion auxiliar: resolver organizacion_id del usuario actual
create or replace function public.obtener_org_id_usuario()
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
  select organizacion_id
  from public.perfiles
  where id = auth.uid()
$$;

-- Habilitar RLS en todas las tablas
alter table public.organizaciones          enable row level security;
alter table public.perfiles                enable row level security;
alter table public.documentos              enable row level security;
alter table public.fragmentos_documento    enable row level security;
alter table public.analisis                enable row level security;
alter table public.hallazgos_analisis      enable row level security;
alter table public.registro_pipeline       enable row level security;
alter table public.cache_embeddings        enable row level security;
alter table public.norma_metadata          enable row level security;
alter table public.norma_requisitos        enable row level security;
alter table public.verificacion_requisitos enable row level security;
alter table public.informe_cobertura       enable row level security;
alter table public.datos_recurso           enable row level security;

-- ---- perfiles -------------------------------------------------------------
create policy "Usuarios pueden ver su propio perfil"
  on public.perfiles for select
  to authenticated
  using (id = auth.uid());

create policy "Usuarios pueden actualizar su propio perfil"
  on public.perfiles for update
  to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

create policy "Rol de servicio puede insertar perfiles"
  on public.perfiles for insert
  to service_role
  with check (true);

-- ---- organizaciones -------------------------------------------------------
create policy "Usuarios pueden ver su propia organizacion"
  on public.organizaciones for select
  to authenticated
  using (id = public.obtener_org_id_usuario());

-- ---- documentos -----------------------------------------------------------
create policy "Usuarios pueden ver documentos de su org o de referencia"
  on public.documentos for select
  to authenticated
  using (
    organizacion_id = public.obtener_org_id_usuario()
    or es_referencia = true
  );

create policy "Usuarios pueden insertar documentos en su org"
  on public.documentos for insert
  to authenticated
  with check (organizacion_id = public.obtener_org_id_usuario());

create policy "Usuarios pueden eliminar documentos propios de su org"
  on public.documentos for delete
  to authenticated
  using (
    organizacion_id = public.obtener_org_id_usuario()
    and subido_por = auth.uid()
  );

-- ---- fragmentos_documento -------------------------------------------------
create policy "Usuarios pueden ver fragmentos de documentos accesibles"
  on public.fragmentos_documento for select
  to authenticated
  using (
    documento_id in (
      select d.id from public.documentos d
      where d.organizacion_id = public.obtener_org_id_usuario()
         or d.es_referencia = true
    )
  );

create policy "Usuarios pueden insertar fragmentos de documentos de su org"
  on public.fragmentos_documento for insert
  to authenticated
  with check (
    documento_id in (
      select d.id from public.documentos d
      where d.organizacion_id = public.obtener_org_id_usuario()
    )
  );

-- ---- analisis -------------------------------------------------------------
create policy "Usuarios pueden ver analisis de su org"
  on public.analisis for select
  to authenticated
  using (organizacion_id = public.obtener_org_id_usuario());

create policy "Usuarios pueden crear analisis en su org"
  on public.analisis for insert
  to authenticated
  with check (organizacion_id = public.obtener_org_id_usuario());

create policy "Usuarios pueden actualizar analisis de su org"
  on public.analisis for update
  to authenticated
  using (organizacion_id = public.obtener_org_id_usuario())
  with check (organizacion_id = public.obtener_org_id_usuario());

-- ---- hallazgos_analisis ---------------------------------------------------
create policy "Usuarios pueden ver hallazgos de analisis de su org"
  on public.hallazgos_analisis for select
  to authenticated
  using (
    analisis_id in (
      select a.id from public.analisis a
      where a.organizacion_id = public.obtener_org_id_usuario()
    )
  );

-- ---- registro_pipeline ----------------------------------------------------
create policy "Usuarios pueden ver registros de analisis de su org"
  on public.registro_pipeline for select
  to authenticated
  using (
    analisis_id in (
      select a.id from public.analisis a
      where a.organizacion_id = public.obtener_org_id_usuario()
    )
  );

-- ---- cache_embeddings -----------------------------------------------------
create policy "Usuarios autenticados pueden leer cache de embeddings"
  on public.cache_embeddings for select
  to authenticated
  using (true);

create policy "Usuarios autenticados pueden insertar en cache de embeddings"
  on public.cache_embeddings for insert
  to authenticated
  with check (true);

-- ---- norma_metadata -------------------------------------------------------
create policy "Usuarios autenticados pueden ver metadata de normas"
  on public.norma_metadata for select
  to authenticated
  using (true);

create policy "Rol de servicio puede gestionar metadata de normas"
  on public.norma_metadata for all
  to service_role
  using (true)
  with check (true);

-- ---- norma_requisitos -----------------------------------------------------
create policy "Usuarios autenticados pueden ver requisitos de normas"
  on public.norma_requisitos for select
  to authenticated
  using (true);

create policy "Rol de servicio puede gestionar requisitos de normas"
  on public.norma_requisitos for all
  to service_role
  using (true)
  with check (true);

-- ---- verificacion_requisitos ----------------------------------------------
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

-- ---- informe_cobertura ----------------------------------------------------
create policy "Usuarios autenticados pueden ver informes de cobertura"
  on public.informe_cobertura for select
  to authenticated
  using (true);

create policy "Rol de servicio puede gestionar informes de cobertura"
  on public.informe_cobertura for all
  to service_role
  using (true)
  with check (true);

-- ---- datos_recurso ----------------------------------------------------------
create policy "Usuarios pueden ver datos de recurso de analisis de su org"
  on public.datos_recurso for select
  to authenticated
  using (
    analisis_id in (
      select a.id from public.analisis a
      where a.organizacion_id = public.obtener_org_id_usuario()
    )
  );

create policy "Usuarios pueden insertar datos de recurso para analisis de su org"
  on public.datos_recurso for insert
  to authenticated
  with check (
    analisis_id in (
      select a.id from public.analisis a
      where a.organizacion_id = public.obtener_org_id_usuario()
    )
  );

create policy "Rol de servicio puede gestionar datos de recurso"
  on public.datos_recurso for all
  to service_role
  using (true)
  with check (true);

-- ---------------------------------------------------------------------------
-- 6. Funciones
-- ---------------------------------------------------------------------------

-- buscar_fragmentos: busqueda vectorial por similitud coseno ----------------
create or replace function public.buscar_fragmentos(
  query_embedding       extensions.vector(1536),
  umbral_similitud      float    default 0.75,
  cantidad_resultados   int      default 20,
  filtrar_documento_ids uuid[]   default null
)
returns table (
  id                    uuid,
  documento_id          uuid,
  indice_fragmento      int,
  contenido             text,
  tipo_fragmento        tipo_fragmento,
  jerarquia_encabezados text[],
  pagina_inicio         int,
  pagina_fin            int,
  cantidad_tokens       int,
  similitud             float
)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  return query
    select
      fd.id,
      fd.documento_id,
      fd.indice_fragmento,
      fd.contenido,
      fd.tipo_fragmento,
      fd.jerarquia_encabezados,
      fd.pagina_inicio,
      fd.pagina_fin,
      fd.cantidad_tokens,
      1 - (fd.embedding <=> query_embedding)::float as similitud
    from public.fragmentos_documento fd
    where
      fd.embedding is not null
      and 1 - (fd.embedding <=> query_embedding) > umbral_similitud
      and (
        filtrar_documento_ids is null
        or fd.documento_id = any(filtrar_documento_ids)
      )
    order by fd.embedding <=> query_embedding
    limit cantidad_resultados;
end;
$$;

-- actualizar_progreso_analisis: actualizar estado del analisis ---------------
create or replace function public.actualizar_progreso_analisis(
  p_analisis_id  uuid,
  p_estado       estado_analisis,
  p_progreso     int,
  p_descripcion  text default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public.analisis
  set
    estado                  = p_estado,
    porcentaje_progreso     = p_progreso,
    descripcion_paso_actual = coalesce(p_descripcion, descripcion_paso_actual),
    iniciado_en             = case
                                when p_estado != 'PENDIENTE' and iniciado_en is null then now()
                                else iniciado_en
                              end,
    completado_en           = case
                                when p_estado in ('COMPLETADO', 'FALLIDO') then now()
                                else completado_en
                              end,
    actualizado_en          = now()
  where id = p_analisis_id;
end;
$$;

-- buscar_requisitos_por_control: obtiene requisitos para controles y niveles -
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

-- buscar_requisitos_similares: deduplicacion por similitud vectorial ---------
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

-- obtener_estadisticas_cobertura: resumen de cobertura por control ----------
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

-- ---------------------------------------------------------------------------
-- 7. Trigger: auto-crear perfil al registrar un nuevo usuario
-- ---------------------------------------------------------------------------
create or replace function public.manejar_nuevo_usuario()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.perfiles (id, nombre_completo, rol)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'nombre_completo', ''),
    'analista'
  );
  return new;
end;
$$;

create trigger al_crear_usuario_auth
  after insert on auth.users
  for each row
  execute function public.manejar_nuevo_usuario();

-- ---------------------------------------------------------------------------
-- 8. Publicacion Realtime
-- ---------------------------------------------------------------------------
alter publication supabase_realtime add table public.analisis;

-- ---------------------------------------------------------------------------
-- 9. Storage: bucket de documentos
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('documentos', 'documentos', false);

create policy "Usuarios pueden subir documentos"
on storage.objects for insert
to authenticated
with check (bucket_id = 'documentos');

create policy "Usuarios pueden leer documentos de su org"
on storage.objects for select
to authenticated
using (bucket_id = 'documentos');

create policy "Usuarios pueden eliminar documentos propios"
on storage.objects for delete
to authenticated
using (bucket_id = 'documentos');
