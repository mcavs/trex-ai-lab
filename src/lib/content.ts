import type { CollectionEntry } from "astro:content";
import { localizedUrl } from "../i18n/utils";
import type { Lang } from "../i18n/ui";

/** Blog posts live under blog/<lang>/<slug>; derive lang from the id. */
export function blogLang(entry: CollectionEntry<"blog">): Lang {
  return entry.id.startsWith("tr/") ? "tr" : "en";
}

/** Slug without the language folder, e.g. "en/hello" -> "hello". */
export function blogSlug(entry: CollectionEntry<"blog">): string {
  return entry.id.replace(/^(en|tr)\//, "");
}

export function blogHref(entry: CollectionEntry<"blog">): string {
  return localizedUrl(blogLang(entry), `blog/${blogSlug(entry)}`);
}

/** Sort blog posts newest first. */
export function byDateDesc(
  a: CollectionEntry<"blog">,
  b: CollectionEntry<"blog">
): number {
  return b.data.pubDate.getTime() - a.data.pubDate.getTime();
}

const isProd = import.meta.env.PROD;

/** Posts for a language, drafts hidden in production. */
export function postsForLang(
  posts: CollectionEntry<"blog">[],
  lang: Lang
): CollectionEntry<"blog">[] {
  return posts
    .filter((p) => blogLang(p) === lang)
    .filter((p) => !isProd || !p.data.draft)
    .sort(byDateDesc);
}
