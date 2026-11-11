# trex.ai — Trustworthy & Explainable AI Lab

Bilingual (English / Turkish) website for **trex.ai** (**Trustworthy & Explainable AI Lab**) — research on
explainable & trustworthy AI. Built with [Astro](https://astro.build), deployed
to GitHub Pages, with automatic dark/light mode and PR-based content.

> _Trustworthy & Explainable AI Lab_

## Features

- 🌍 **Bilingual** EN/TR with separate `/en` and `/tr` URLs, auto language
  detection (browser language) on first visit, and a manual toggle that persists.
- 🌗 **Dark / light mode** — flicker-free, remembers the user's choice.
- 🧑‍🔬 **Team / Papers / Blog** sections driven by Markdown content collections.
- 🖼️ **Photos & covers auto-normalized** — members upload any size; images are
  resized/cropped at build time (`astro:assets`).
- 📝 **Blog via pull request** — add a Markdown file, open a PR; it deploys on merge.
  Three card sizes: `featured`, `standard`, `compact`.
- ✅ **CI validation** — malformed content frontmatter fails the PR before merge.
- 🔎 SEO: sitemap, `hreflang` alternates, Open Graph images.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321  → redirects to /en or /tr
npm run build      # output in dist/
npm run check      # type + content validation
```

## Adding content

See **[CONTRIBUTING.md](./CONTRIBUTING.md)** for how to add a blog post, team
member, or paper (with frontmatter templates, EN + TR).

## Project structure

```
src/
  components/     UI components (Header, Footer, cards, toggles, SEO)
  content/        team/ · papers/ · blog/{en,tr}/   ← Markdown content
  content.config.ts   content collection schemas (Zod)
  data/research.ts    research areas (edit freely)
  i18n/           ui.ts (UI strings) · utils.ts (helpers)
  layouts/        BaseLayout.astro
  lib/            content helpers (blog slug/lang)
  pages/
    index.astro         language redirect
    [lang]/             home, team, papers, research, contact
    [lang]/blog/        blog index + post page
    404.astro
  styles/global.css     design tokens (light/dark)
public/           favicon, robots.txt, og-default.png
scripts/          gen-placeholders.mjs (sample images)
```

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to Pages. **Enable it once:** repo → Settings → Pages → Build and
deployment → Source = **GitHub Actions**.

### URL / base path

The site is configured in `astro.config.mjs`:

```js
const SITE = "https://mcavs.github.io";
const BASE = "/trex-lab-website";   // matches the repo name
```

- **Use a custom domain** (e.g. `trex.ai`)? Set `BASE = "/"`, set
  `SITE = "https://trex.ai"`, add `public/CNAME` containing the domain, and
  configure the domain under Settings → Pages.

## License

Code is MIT licensed (see [LICENSE](./LICENSE)). Content (text, images) © trex.ai (Trustworthy & Explainable AI Lab).
