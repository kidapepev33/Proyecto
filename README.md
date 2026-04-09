# FertiNYC Replica (Next.js)

Replica visual multi-pagina del sitio `https://www.fertinyc.com/en/home/` con rutas equivalentes y clases propias.

## Stack
- Next.js
- React

## Estructura principal
- `pages/en/home.js`: home en ingles.
- `pages/en/about-us-2.js`
- `pages/en/products-2.js`
- `pages/blog-grid.js`
- `pages/en-gallery.js`
- `pages/en/contact.js`
- `pages/index.js`: entrada raiz apuntando al home.
- `components/site/*`: header, footer, hero interno y home componentizada.
- `data/siteContent.js`: navegacion, assets y bloques de contenido.
- `styles/_extend.css`: punto unico para enlazar CSS.
- `styles/css/*`: estilos por bloques (`base`, `layout`, `components`, `responsive`).
- `PLAN_PROYECTO.md`: plan y estado del proyecto.

## Ejecutar en local
1. Instala Node.js 20+.
2. Instala dependencias:
   - `npm install`
3. Corre el proyecto:
   - `npm run dev`
4. Abre `http://localhost:3000`.

## Estado actual
- Home reconstruida en modo replica visual.
