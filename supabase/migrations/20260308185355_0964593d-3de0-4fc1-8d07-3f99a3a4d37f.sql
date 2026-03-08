-- Re-create has_role function to version-control it
-- Using SECURITY DEFINER is intentional here: RLS on user_roles requires admin role,
-- but we need this function to check roles BEFORE RLS can verify them (bootstrap problem).
-- The function only does a safe parameterized SELECT, no mutation risk.
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;