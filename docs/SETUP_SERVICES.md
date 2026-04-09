# Setup de Servicios (Supabase + GitHub + Vercel)

## 1) Supabase
1. Entra a `https://supabase.com/` y crea un proyecto nuevo.
2. Ve a `Project Settings > API`.
3. Copia:
   - `Project URL` -> `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` -> `SUPABASE_SERVICE_ROLE_KEY`
4. En `SQL Editor`, ejecuta el archivo [schema.sql](/c:/Users/danib/OneDrive/Escritorio/Proyecto/supabase/schema.sql).

## 2) GitHub
1. Crea un repositorio nuevo (vacío).
2. En local, cuando tengas Node instalado:
   - `npm install`
   - `git init`
   - `git add .`
   - `git commit -m "Initial Next.js rebuild for fertility clinic site"`
3. Conecta remoto:
   - `git remote add origin <URL_DEL_REPO>`
   - `git branch -M main`
   - `git push -u origin main`

## 3) Vercel
1. Entra a `https://vercel.com/` y selecciona `Add New Project`.
2. Importa el repositorio de GitHub.
3. En variables de entorno agrega:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Ejecuta Deploy.
5. Verifica:
   - Home carga correctamente.
   - El formulario de contacto responde sin error.
