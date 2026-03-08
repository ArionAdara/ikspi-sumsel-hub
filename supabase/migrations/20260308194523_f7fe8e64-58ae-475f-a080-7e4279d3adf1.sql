-- PROFILES TABLE: Drop RESTRICTIVE, recreate as PERMISSIVE
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
ON profiles FOR SELECT TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Users can insert their own profile"
ON profiles FOR INSERT TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE TO authenticated
USING (auth.uid() = id);

-- USER_ROLES TABLE: Drop RESTRICTIVE, recreate as PERMISSIVE
DROP POLICY IF EXISTS "Admins can manage roles" ON user_roles;
DROP POLICY IF EXISTS "Admins can view all roles" ON user_roles;

CREATE POLICY "Admins can manage roles"
ON user_roles FOR ALL TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can view all roles"
ON user_roles FOR SELECT TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- SITE_CONTENT TABLE: Drop RESTRICTIVE, recreate as PERMISSIVE
DROP POLICY IF EXISTS "Site content is publicly readable" ON site_content;
DROP POLICY IF EXISTS "Admins can insert content" ON site_content;
DROP POLICY IF EXISTS "Admins can update content" ON site_content;
DROP POLICY IF EXISTS "Admins can delete content" ON site_content;

CREATE POLICY "Site content is publicly readable"
ON site_content FOR SELECT
USING (true);

CREATE POLICY "Admins can insert content"
ON site_content FOR INSERT TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update content"
ON site_content FOR UPDATE TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete content"
ON site_content FOR DELETE TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));