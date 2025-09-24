import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const customFetch = async (
  input: string | Request | URL,
  init?: RequestInit
): Promise<Response> => {
  const urlParts = new URL(String(input));
  let url = urlParts.pathname + urlParts.search;
  if (!/((bce|console).*.baidu.*\.com)$|(\.)?miaoda\.(cn|ai)$/.test(document.location.hostname)) {
    url = url.replace(/(\/miaoda([-_\w]+)?)(\/backend)/, '$1/runtime$3');
  }
  return fetch(url, init);
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storageKey: (import.meta.env.VITE_APP_ID || "sb") + "-auth-token"
  },

  global: {
    fetch: import.meta.env.VITE_SUPABASE_PROXY !== "false" ? customFetch : undefined
  }
});