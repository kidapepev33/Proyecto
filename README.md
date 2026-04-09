# FertiNYC Rebuild (Next.js)

Recreacion inicial de la homepage de referencia con estructura Next.js, componentes propios y base de integracion con Supabase.

## Stack
- Next.js
- React
- Supabase

## Estructura principal
- `pages/index.js`: homepage recreada (sin modernizacion avanzada aun).
- `pages/api/contact.js`: endpoint para guardar solicitudes.
- `components/site/*`: header, footer y formulario.
- `styles/_extend.css`: punto unico para enlazar todos los CSS.
- `styles/css/*`: estilos divididos por responsabilidad (`base`, `layout`, `components`, `responsive`).
- `styles/globals.css`: archivo puente para compatibilidad (redirige a `_extend.css`).
- `supabase/schema.sql`: tabla para leads.
- `docs/SETUP_SERVICES.md`: pasos de Supabase/GitHub/Vercel.

## Ejecutar en local
1. Instala Node.js 20+.
2. Instala dependencias:
   - `npm install`
3. Crea `.env.local` en base a `.env.example`.
4. Corre el proyecto:
   - `npm run dev`
5. Abre `http://localhost:3000`.

## Estado actual
- Fase de recreacion funcional: completada.
- Fase de modernizacion visual avanzada: pendiente para el siguiente prompt.
