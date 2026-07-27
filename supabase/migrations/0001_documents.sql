-- Table des documents déposés via la page /upload
create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text not null,
  subject text not null,
  description text,
  file_path text not null,
  file_name text not null,
  file_size bigint not null,
  mime_type text not null,
  uploaded_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.documents enable row level security;

-- Tout utilisateur connecté peut consulter la liste des documents
create policy "Documents visibles par les utilisateurs connectés"
  on public.documents for select
  to authenticated
  using (true);

-- Un utilisateur connecté peut déposer un document en son nom
create policy "Un utilisateur peut déposer ses propres documents"
  on public.documents for insert
  to authenticated
  with check (auth.uid() = uploaded_by);

-- Un utilisateur peut supprimer ses propres documents
create policy "Un utilisateur peut supprimer ses propres documents"
  on public.documents for delete
  to authenticated
  using (auth.uid() = uploaded_by);

-- Bucket de stockage pour les fichiers (pdf/doc/docx)
insert into storage.buckets (id, name, public)
values ('documents', 'documents', false)
on conflict (id) do nothing;

create policy "Fichiers visibles par les utilisateurs connectés"
  on storage.objects for select
  to authenticated
  using (bucket_id = 'documents');

create policy "Upload de fichiers par les utilisateurs connectés"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'documents' and owner = auth.uid());

create policy "Suppression de ses propres fichiers"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'documents' and owner = auth.uid());
