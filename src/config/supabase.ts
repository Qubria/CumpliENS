import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Copy .env.local.example to .env.local and fill in your values.'
  )
}

// Note: For full type safety, generate types with `supabase gen types typescript`
// and pass them as a generic parameter: createClient<Database>(...)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
