import { createClient } from '@supabase/supabase-js';
import { APP_ENV } from "../env";

export const supabaseAdmin = createClient(
    APP_ENV.NEXT_PUBLIC_SUPABASE_URL,
    APP_ENV.SUPABASE_SERVICE_ROLE_KEY,
    {
        auth: {
            persistSession: false,
        },
    }
);
