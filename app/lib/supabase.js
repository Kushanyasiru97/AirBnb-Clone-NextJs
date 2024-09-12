import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    process.env.SUPERBASE_URL,
    process.env.SUPERBASE_ANON_KEY
);
