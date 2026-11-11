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
 * Build a base-aware, language-prefixed URL.
 *   localizedUrl("tr", "team")  ->  "/trex-lab-website/tr/team"
 *   localizedUrl("en", "")      ->  "/trex-lab-website/en"
 */
export function localizedUrl(lang: Lang, path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.replace(/^\//, "").replace(/\/$/, "");
  return clean ? `${base}/${lang}/${clean}` : `${base}/${lang}`;
}

/** Same path in the other language (for the language toggle & hreflang). */
export function alternateLangUrl(url: URL, target: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const rest = stripBase(url.pathname)
    .replace(/^\/(en|tr)/, "")
    .replace(/^\//, "")
    .replace(/\/$/, "");
  return rest ? `${base}/${target}/${rest}` : `${base}/${target}`;
}

export const locales: Lang[] = ["en", "tr"];
