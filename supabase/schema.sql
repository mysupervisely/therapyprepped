-- TherapyPrepped Supabase Schema
-- Run this in the Supabase SQL editor (Project > SQL Editor > New query)

-- ============================================================
-- TRACKS (LMHC/NCMHCE live; LMFT, LMSW coming soon / waitlist)
-- ============================================================
create table if not exists tracks (
  id text primary key,              -- e.g. 'ncmhce', 'lmft', 'lmsw'
  name text not null,               -- e.g. 'LMHC / NCMHCE'
  status text not null default 'coming_soon', -- 'live' | 'coming_soon'
  description text
);

insert into tracks (id, name, status, description) values
  ('ncmhce', 'LMHC / NCMHCE', 'live', 'National Clinical Mental Health Counseling Examination prep'),
  ('lmft', 'LMFT', 'coming_soon', 'Marriage & Family Therapy licensure prep'),
  ('lmsw', 'LMSW', 'coming_soon', 'Master Social Worker licensure prep')
on conflict (id) do nothing;

-- ============================================================
-- ACCESS PASSES (time-boxed, email-based, no full auth)
-- ============================================================
create table if not exists access_passes (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  plan text not null,               -- '3-day' | '7-day' | '14-day' | '30-day'
  track_id text references tracks(id) default 'ncmhce',
  stripe_session_id text unique,
  stripe_customer_id text,
  amount_cents integer,
  starts_at timestamptz not null default now(),
  expires_at timestamptz not null,
  consent_accepted boolean not null default false,
  consent_accepted_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_access_passes_email on access_passes (lower(email));
create index if not exists idx_access_passes_expires on access_passes (expires_at);

-- ============================================================
-- MODULES (the 4 NCMHCE domains, expandable to more)
-- ============================================================
create table if not exists modules (
  id text primary key,              -- slug, e.g. 'assessment-diagnosis'
  track_id text references tracks(id) default 'ncmhce',
  title text not null,
  subtitle text,
  sort_order integer not null default 0,
  is_published boolean not null default true
);

insert into modules (id, track_id, title, subtitle, sort_order) values
  ('assessment-diagnosis', 'ncmhce', 'Assessment & Diagnosis', 'Gathering clinical information, MSE, risk assessment, DSM-5-TR criteria, differential diagnosis', 1),
  ('counseling-psychotherapy', 'ncmhce', 'Counseling & Psychotherapy', 'Theoretical approaches and evidence-based interventions', 2),
  ('admin-consultation-supervision', 'ncmhce', 'Administration, Consultation & Supervision', 'Ethics, legal standards, documentation, supervision', 3),
  ('student-client-consultant-needs', 'ncmhce', 'Student/Client/Consultant Needs', 'Cultural factors, diversity, contextual considerations, advocacy', 4)
on conflict (id) do nothing;

-- ============================================================
-- LESSONS (sections within a module, rendered as markdown)
-- ============================================================
create table if not exists lessons (
  id text primary key,              -- slug, e.g. 'assessment-diagnosis-msE'
  module_id text references modules(id) on delete cascade,
  title text not null,
  sort_order integer not null default 0,
  content_md text not null default '',
  is_published boolean not null default true
);

create index if not exists idx_lessons_module on lessons (module_id, sort_order);

-- ============================================================
-- QUESTIONS (case-vignette style, NCMHCE format)
-- ============================================================
create table if not exists questions (
  id uuid primary key default gen_random_uuid(),
  module_id text references modules(id) on delete cascade,
  batch text,                        -- e.g. 'batch-1' for tracking import batches
  stem text not null,                -- the case vignette / question text
  choices jsonb not null,            -- [{ "id": "a", "text": "..." }, ...]
  correct_choice_id text not null,
  rationale text not null,
  difficulty text default 'medium', -- 'easy' | 'medium' | 'hard'
  created_at timestamptz not null default now()
);

create index if not exists idx_questions_module on questions (module_id);

-- ============================================================
-- USER PROGRESS (email-based, matches the access-pass model)
-- ============================================================
create table if not exists lesson_progress (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  lesson_id text references lessons(id) on delete cascade,
  completed_at timestamptz not null default now(),
  unique (email, lesson_id)
);

create table if not exists question_attempts (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  question_id uuid references questions(id) on delete cascade,
  chosen_choice_id text not null,
  is_correct boolean not null,
  attempted_at timestamptz not null default now()
);

create index if not exists idx_lesson_progress_email on lesson_progress (lower(email));
create index if not exists idx_question_attempts_email on question_attempts (lower(email));

-- ============================================================
-- WAITLIST (for LMFT / LMSW "coming soon" tracks)
-- ============================================================
create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  track_id text references tracks(id),
  created_at timestamptz not null default now(),
  unique (email, track_id)
);

-- ============================================================
-- ROW LEVEL SECURITY
-- This app uses email-based lookup (no Supabase Auth), so all
-- reads/writes to user-tied tables go through server-side API
-- routes using the service role key. RLS is enabled and locked
-- down; only the service role (server) can read/write directly.
-- Public tables (modules, lessons, questions, tracks) are readable
-- by the anon key since they're not user-specific.
-- ============================================================
alter table access_passes enable row level security;
alter table lesson_progress enable row level security;
alter table question_attempts enable row level security;
alter table waitlist enable row level security;

alter table tracks enable row level security;
alter table modules enable row level security;
alter table lessons enable row level security;
alter table questions enable row level security;

create policy "Public read tracks" on tracks for select using (true);
create policy "Public read modules" on modules for select using (is_published = true);
create policy "Public read lessons" on lessons for select using (is_published = true);
create policy "Public read questions" on questions for select using (true);
-- No public policies on access_passes / lesson_progress / question_attempts / waitlist
-- Server routes use the service role key, which bypasses RLS.
