# Astro Portfolio — Development Instructions

## Commands
- `pnpm dev` — Start dev server at localhost:4321
- `pnpm build` — Build production to ./dist/
- `pnpm preview` — Preview production build

## Code Style
- Tailwind CSS v4 with `@tailwindcss/vite` plugin — use `@theme` for custom colors
- All content lives in `src/data/` as typed TS modules (no runtime fetching)
- Components in `src/components/`, pages in `src/pages/`
- Scripts in `src/scripts/` — bundled via Astro `<script>` tags (ES modules)
- Use shorthand syntax for theme colors: `bg-bg/85`, `text-text-secondary`, `border-border`
- SVG icons in `src/components/ui/icons/`

## Key Conventions
- Theme toggles via `data-theme` attribute on `<html>` — inline script in BaseLayout
- Scroll animations use `[data-reveal]` attribute + IntersectionObserver (init.ts)
- Mobile drawer uses `mobile-drawer-open` class to toggle visibility/transform
- Filter/blog filters use `classList.add/remove` with Tailwind v4 class names
