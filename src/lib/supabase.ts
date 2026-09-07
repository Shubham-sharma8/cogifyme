import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://merkxjpkurljfkdwnypx.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lcmt4anBrdXJsamZrZHdueXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0NTI0ODIsImV4cCI6MjEwNDAyODQ4Mn0.aLoBF5SAZz3qnRDg0EUSj11N9TgtoLRQ-fSrWBVAeJc";

const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lcmt4anBrdXJsamZrZHdueXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0NTI0ODIsImV4cCI6MjEwNDAyODQ4Mn0.aLoBF5SAZz3qnRDg0EUSj11N9TgtoLRQ-fSrWBVAeJc";

/**
 * Public client for client-side queries and realtime subscriptions
 */
export const getSupabaseClient = (): SupabaseClient | null => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
};

/**
 * Admin privileged client for server-side operations
 */
export const getSupabaseAdmin = (): SupabaseClient | null => {
  const key = supabaseServiceRoleKey || supabaseAnonKey;
  if (!supabaseUrl || !key) {
    return null;
  }
  return createClient(supabaseUrl, key);
};
