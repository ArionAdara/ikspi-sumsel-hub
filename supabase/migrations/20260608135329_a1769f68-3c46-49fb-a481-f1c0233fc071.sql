-- Prevent privilege escalation: only admins can insert/update/delete into user_roles
-- The existing "Admins can manage roles" policy is PERMISSIVE, so without a deny path, non-admins could potentially insert.
-- Add a RESTRICTIVE policy that requires admin role for any write.

CREATE POLICY "Restrict user_roles writes to admins"
ON public.user_roles
AS RESTRICTIVE
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));