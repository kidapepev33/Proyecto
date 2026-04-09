# Plan de Trabajo del Proyecto

## Estado Actual
- Completado en este prompt:
  - Estructura base de proyecto Next.js creada.
  - Home recreada por secciones con clases propias.
  - Integracion base con Supabase (endpoint + schema SQL).
  - Documentacion de setup para Supabase, GitHub y Vercel.
- Pendiente para siguiente prompt:
  - Modernizacion visual avanzada y refinamiento UI.

## Objetivo General
Crear una versión modernizada de `https://www.fertinyc.com/` con estructura limpia, buenas prácticas y clases propias, dentro de un proyecto nuevo con este flujo:

1. Crear proyecto en Supabase.
2. Crear repositorio en GitHub con Next.js.
3. Conectar el repositorio a Vercel.

Este documento define el paso a paso **antes de ejecutar cambios**.

---

## Fase 1: Preparación y Base del Proyecto

### 1.1 Crear proyecto en Supabase
- Crear un proyecto nuevo en `supabase.com`.
- Guardar credenciales necesarias:
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  - (opcional, uso interno) `SUPABASE_SERVICE_ROLE_KEY`
- Definir una base inicial mínima para no sobrecargar el arranque.

### 1.2 Crear repo en GitHub con Next.js
- Inicializar proyecto con Next.js (estructura moderna).
- Configurar carpetas recomendadas para escalabilidad:
  - `app/` o `pages/` (según estrategia final)
  - `components/`
  - `styles/`
  - `public/`
  - `lib/` (helpers, cliente de Supabase)
- Subir a un repositorio nuevo en GitHub.

### 1.3 Conectar a Vercel
- Importar el repo en `vercel.com`.
- Configurar variables de entorno de Supabase en Vercel.
- Validar primer deploy exitoso (build y runtime).

---

## Fase 2: Recreate + Modernización de la Página

### 2.1 Auditoría visual y estructural de la referencia
- Revisar `https://www.fertinyc.com/` para identificar:
  - Estructura de secciones.
  - Jerarquía visual (hero, beneficios, servicios, CTA, footer, etc.).
  - Comportamientos responsivos.
- No copiar código fuente; recrear con nuestra implementación.

### 2.2 Implementación inicial (recreación fiel)
- Construir una primera versión que respete:
  - Orden de contenido.
  - Mensaje principal.
  - Flujo de lectura.
- Usar clases y componentes propios.
- Mantener HTML semántico y accesible.

### 2.3 Mejora UX/UI (modernización controlada)
- Aplicar mejoras concretas sin perder esencia:
  - Tipografía más clara y consistente.
  - Espaciado y ritmo visual mejorados.
  - Botones/CTAs más visibles.
  - Mejor contraste y legibilidad.
  - Responsive más robusto (mobile-first).
  - Performance básica (imágenes optimizadas, carga limpia).

### 2.4 Calidad técnica
- Estructura de componentes reutilizables.
- CSS ordenado (tokens/variables para color, spacing, radios, sombras).
- Preparar base para crecer sin rehacer estilos.

---

## Fase 3: Validación y Entrega

### 3.1 Checklist funcional
- Render correcto en desktop y mobile.
- Navegación y CTAs visibles/funcionales.
- Sin errores de consola.

### 3.2 Checklist visual
- Coherencia de marca/estilo.
- Mejor legibilidad que el original.
- Jerarquía de información clara.

### 3.3 Deploy y documentación
- Confirmar deploy activo en Vercel.
- Documentar:
  - Variables necesarias.
  - Cómo correr local.
  - Próximos pasos de evolución.

---

## Orden de Ejecución Propuesto (resumen)
1. Definir stack y crear proyecto Next.js.
2. Crear/validar Supabase.
3. Conectar repo a Vercel.
4. Recrear la página por secciones.
5. Modernizar UI/UX.
6. Revisar calidad y publicar.

---

## Criterios de Mejora que voy a priorizar
- Accesibilidad básica (semántica, contraste, foco visible).
- Performance inicial (estructura ligera).
- Diseño moderno pero sobrio (sin romper intención comercial).
- Código mantenible (componentes y estilos escalables).

---

## Nota de Control
Antes de ejecutar cambios grandes, iremos por bloques:
1. Confirmar este plan.
2. Crear base Next.js + repo.
3. Conexión Supabase + Vercel.
4. Rebuild visual de la home.

Así avanzamos con control y visibilidad en cada etapa.
