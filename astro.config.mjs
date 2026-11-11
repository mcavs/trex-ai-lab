// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * GitHub Pages deployment config.
 *
 * The site is served from the `trex-lab-website` repo, i.e.
 *   https://mcavs.github.io/trex-lab-website/
 */
const SITE = "https://mcavs.github.io";
const BASE = "/trex-lab-website";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
