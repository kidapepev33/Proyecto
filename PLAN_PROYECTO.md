# Plan de Trabajo del Proyecto

## Estado Actual (2026-04-08)
- Completado:
  - ~~Definir plan base del proyecto~~
  - ~~Crear estructura base de Next.js (manual)~~
  - ~~Recrear la home por secciones con clases propias~~
  - ~~Ordenar CSS con `styles/_extend.css` + parciales en `styles/css/*`~~
  - ~~Limpiar carpetas/archivos legacy (`includes`, `pages/auth`, `pages/index.html`)~~
  - ~~Inicializar repositorio Git, crear commit inicial y dejar rama `main`~~
- Pendiente:
  - Crear proyecto real en Supabase y cargar `supabase/schema.sql`
  - Conectar repositorio local a remoto de GitHub (`origin`) y hacer push
  - Importar proyecto en Vercel y configurar variables de entorno
  - Modernización visual avanzada (siguiente prompt)

## Objetivo General
Crear una versión modernizada de `https://www.fertinyc.com/` con estructura limpia, buenas prácticas y clases propias, siguiendo este flujo:

1. Crear proyecto en Supabase.
2. Crear repo en GitHub con Next.js.
3. Conectar el repo a Vercel.

## Fase 1: Preparación y Base del Proyecto

### 1.1 Supabase
- [ ] Crear proyecto nuevo en `supabase.com`.
- [ ] Copiar credenciales:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Ejecutar `supabase/schema.sql` en SQL Editor.

### 1.2 GitHub
- [x] ~~Inicializar proyecto con estructura Next.js~~
- [x] ~~Ordenar carpetas para escalabilidad (`components`, `styles`, `lib`, `pages`, `data`, `docs`)~~
- [x] ~~Inicializar Git y crear primer commit~~
- [ ] Vincular remoto `origin` del repo de GitHub.
- [ ] Hacer `git push -u origin main`.

### 1.3 Vercel
- [ ] Importar repo en `vercel.com`.
- [ ] Configurar variables de entorno de Supabase.
- [ ] Validar primer deploy exitoso.

## Fase 2: Recreate + Modernización

### 2.1 Auditoría y recreación
- [x] ~~Auditoría estructural del sitio de referencia~~
- [x] ~~Implementación inicial de la home (recreación funcional)~~

### 2.2 Modernización controlada (pendiente)
- [ ] Mejorar tipografía, jerarquía y ritmo visual.
- [ ] Reforzar responsive y detalles UX.
- [ ] Ajustar branding visual final.

## Fase 3: Validación y Entrega
- [ ] Verificación final en desktop/mobile con `npm run dev`.
- [ ] Verificación del formulario contra Supabase real.
- [ ] Deploy final en Vercel.

## Comandos Git listos para continuar
```bash
git remote add origin <URL_DEL_REPO_GITHUB>
git push -u origin main
```
