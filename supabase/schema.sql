create table if not exists public.consultation_requests (
  id bigint generated always as identity primary key,
  full_name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.consultation_requests enable row level security;

drop policy if exists "Public can insert consultation requests" on public.consultation_requests;
create policy "Public can insert consultation requests"
on public.consultation_requests
for insert
to anon
with check (true);
