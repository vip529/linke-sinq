"use client";

import { createBrowserClient } from "@supabase/ssr";
import { APP_ENV } from "../env";

export const createSupabaseBrowserClient = () => {
  return createBrowserClient(
    APP_ENV.NEXT_PUBLIC_SUPABASE_URL,
    APP_ENV.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};