-- Create inquiries table for portfolio contact form submissions
create table if not exists public.inquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  project_type text not null,
  budget      text not null,
  timeline    text,
  description text not null,
  created_at  timestamptz not null default now()
);

-- Only the service role key can read/write (no public RLS needed — this is server-side only)
alter table public.inquiries enable row level security;

-- Allow service role full access (bypasses RLS by default, but be explicit)
create policy "service_role_all" on public.inquiries
  for all
  to service_role
  using (true)
  with check (true);

-- Useful index for admin dashboard queries sorted by recency
create index inquiries_created_at_idx on public.inquiries (created_at desc);
