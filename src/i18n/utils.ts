import { ui, defaultLang, type Lang, type UIKey } from "./ui";

/** Remove the configured base prefix from a pathname (trailing-slash agnostic). */
function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let p = pathname;
  if (base && p.startsWith(base)) p = p.slice(base.length);
  return p.startsWith("/") ? p : `/${p}`;
}

/** Extract the language from a URL pathname (base-aware). */
export function getLangFromUrl(url: URL): Lang {
  const maybeLang = stripBase(url.pathname).split("/").find(Boolean);
  if (maybeLang === "tr" || maybeLang === "en") return maybeLang;
  return defaultLang;
}

/** Translation helper bound to a language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a base-aware URL.
 *   localizedUrl("en", "")      ->  "/trex-ai-lab"
 *   localizedUrl("en", "team")  ->  "/trex-ai-lab/team"
 *   localizedUrl("tr", "")      ->  "/trex-ai-lab/tr"
 *   localizedUrl("tr", "team")  ->  "/trex-ai-lab/tr/team"
 */
export function localizedUrl(lang: Lang, path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.replace(/^\//, "").replace(/\/$/, "");
  if (lang === "en") {
    return clean ? `${base}/${clean}` : base || "/";
  }
  return clean ? `${base}/tr/${clean}` : `${base}/tr`;
}

/** Same path in the other language (for the language toggle & hreflang). */
export function alternateLangUrl(url: URL, target: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const rest = stripBase(url.pathname)
    .replace(/^\/(en|tr)/, "")
    .replace(/^\//, "")
    .replace(/\/$/, "");
  if (target === "en") {
    return rest ? `${base}/${rest}` : base || "/";
  }
  return rest ? `${base}/tr/${rest}` : `${base}/tr`;
}

export const locales: Lang[] = ["en", "tr"];
