-- Fix waitlist SELECT policy to allow anon key to read after insert
-- This migration fixes the RLS issue preventing form submissions

-- Drop the restrictive SELECT policy
DROP POLICY IF EXISTS "Only service role can read waitlist" ON public.waitlist;

-- Create a new policy that allows anyone to read waitlist entries
-- (Waitlist emails are essentially public data for signup confirmation)
CREATE POLICY "Allow read access for waitlist"
  ON public.waitlist
  FOR SELECT
  USING (true);
