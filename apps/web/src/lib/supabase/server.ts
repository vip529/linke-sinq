import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { APP_ENV } from '../env';

export const createSupabaseServerClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(
    APP_ENV.NEXT_PUBLIC_SUPABASE_URL,
    APP_ENV.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, options);
            }
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};
