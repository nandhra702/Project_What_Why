---
applyTo: '**'
---

# project overview

this is my personal website. it includes information about me, my projects, my blog posts, my photography, and contact methods.

## stack

- framework: sveltekit (svelte 5) with `@sveltejs/adapter-static`. fully prerendered.
  - sveltekit/svelte 5 documentation (compressed) is located at `reference/svelte-llms-medium.txt`.
- languages: svelte + javascript + markdown via mdsvex.
- styling: vanilla css. global `src/app.css` + component `<style>`.
- content pipeline: mdsvex + shiki highlighting (`svelte.config.js`), `@sveltejs/enhanced-img` for responsive images.
- build: vite
- deployment: cloudflare pages (through wrangler).

## project structure

- `src/routes/` sveltekit route tree. each folder represents a route.
  - layouts use `+layout.svelte`, `+layout.js`.
  - pages use `+page.svelte`, `+page.js`.
  - each page/layout load returns a `meta` object for SEO use (`src/lib/components/PageHead.svelte` component).
- `src/content/` mdsvex content files (blog posts, projects) and images for the `/pics` page
- `src/lib/` shared libraries (e.g. components, utilities).
  - `src/lib/components/` shared svelte 5 components.
  - `src/lib/js/` utilities (e.g. post loaders / icons / images / formatting).
  - `src/lib/assets/` static assets (e.g. fonts, lottie animations, shiki css).
