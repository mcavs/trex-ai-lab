// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * GitHub Pages deployment config.
 *
 * The site is currently served from the `xmu_lab` repo, i.e.
 *   https://ugurdar.github.io/xmu_lab/
 *
 * If you rename the repo to `discern-lab`, change BASE to "/discern-lab".
 * If you move to a custom domain (e.g. discernlab.ai), set BASE to "/" and
 * add `public/CNAME` with the domain.
 */
const SITE = "https://ugurdar.github.io";
const BASE = "/xmu_lab";

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
