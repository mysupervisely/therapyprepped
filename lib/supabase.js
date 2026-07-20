import { createClient } from '@supabase/supabase-js';

// Fall back to harmless placeholder values so the app can still build and
// render (falling back to local seed data) before Supabase env vars are
// configured. Real reads/writes will simply fail gracefully until the real
// values are set in .env.local / your deploy environment.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

// Client for browser / public reads (uses anon key, respects RLS)
export const supabasePublic = createClient(supabaseUrl, supabaseAnonKey);

// Client for server-side API routes only (uses service role key,
// bypasses RLS). NEVER import this into client-side components.
export function supabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } }
  );
}
