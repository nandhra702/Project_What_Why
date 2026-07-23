# Project Structure Guide

Quick reference for where to make changes to each part of the site.

---

## Pages

| Page | Route file | Data / config |
|---|---|---|
| Landing (`/`) | `src/routes/+page.svelte` | `src/routes/+page.js` — title & description |
| About (`/about`) | `src/routes/about/+page.svelte` | Bio, experience, skills, links, resume all live inline in the component |
| Projects list (`/projects`) | `src/routes/projects/+page.svelte` | `src/routes/projects/+page.js` — sorting logic |
| Project detail (`/projects/[slug]`) | `src/routes/projects/[slug]/+page.svelte` | Each project's own markdown file (see below) |
| Blog list (`/blog`) | `src/routes/blog/+page.svelte` | `src/routes/blog/+page.js` |
| Blog post (`/blog/[slug]`) | `src/routes/blog/[slug=excludeRss]/+page.svelte` | Each post's own markdown file (see below) |
| Contact (`/contact`) | `src/routes/contact/+page.svelte` | Form uses web3forms — access key is inline in the component |
| RSS feed (`/blog/rss.xml`) | `src/routes/blog/rss.xml/+server.js` | Site URL and feed title are defined here |

---

## Content Files

### Projects
Each project lives in its own folder under `src/content/projects/<slug>/`.

| File | Purpose |
|---|---|
| `+<slug>.md` | Frontmatter (name, description, github, blog, thumbnail, images, date) + body copy shown on the project detail page |
| `*.png / *.jpg` | Images referenced in frontmatter `images: []` array (carousel) and in the markdown body via `<Image image="filename.png" />` |

**Frontmatter fields:**
```yaml
published: true        # false = hidden in production
name: string           # display name
description: string    # subtitle shown on list + detail pages
thumbnail: filename    # first image shown in carousel (filename only, no path)
images: []             # all carousel images in order (filenames only)
github: url            # full github repo URL
blog: /blog/slug       # internal link to the matching blog post
date: YYYY-MM-DD       # used for sorting
website: url           # optional live site link
```

### Blog posts
Each post lives in `src/content/blog/<slug>/`.

| File | Purpose |
|---|---|
| `+<slug>.md` | Frontmatter (name, icon, description, date) + full article body |
| `*.png / *.jpg` | Images used in the post — reference with `<Image image="filename.png" alt="..." />` (NOT bare `<img>` tags — those won't resolve through Vite) |

**Frontmatter fields:**
```yaml
published: true
name: "Display Title"
icon: 'code'           # 'code' | 'paper' | 'globe' — sets the icon on blog list
description: string    # shown as subtitle on list + post pages
date: YYYY-MM-DD
```

---

## Global / Shared

| What | Where |
|---|---|
| Site title (tab name) | `src/routes/+layout.js` and `src/routes/+page.js` |
| Nav links | `src/routes/+layout.svelte` — `pages` array |
| Page `<head>`, OG tags | `src/lib/components/PageHead.svelte` |
| Global CSS | `src/app.css` |
| Fonts | `src/lib/assets/fonts/` |
| Static files (resume PDF, favicon) | `static/` — served at root (`/resume.pdf`, `/favicon.svg`) |
| Icon map (blog icons) | `src/lib/js/icons.js` |
| Post loading utility | `src/lib/js/posts.js` |

---

## Adding a New Project

1. Create `src/content/projects/<slug>/+<slug>.md` with frontmatter filled in.
2. Drop images into the same folder.
3. Add a matching blog post at `src/content/blog/<slug>/+<slug>.md` if you want one.
4. That's it — both pages auto-discover content via `import.meta.glob`.

## Adding a New Blog Post

1. Create `src/content/blog/<slug>/+<slug>.md`.
2. Drop images into the same folder.
3. Use `<Image image="filename.png" alt="..." />` for images inside the post (import the component at the top of the `.md` file using a `<script>` block).
