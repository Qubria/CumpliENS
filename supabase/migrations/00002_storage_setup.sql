-- =============================================================================
-- 00002_storage_setup.sql
-- Bucket de almacenamiento y politicas para subida de documentos
-- =============================================================================

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
