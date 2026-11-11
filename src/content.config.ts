import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

/** Social / external profile links shared by team & papers. */
const links = z
  .object({
    scholar: z.string().url().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    x: z.string().url().optional(),
    website: z.string().url().optional(),
    email: z.string().optional(),
  })
  .optional();

const badgeItem = z.object({
  code: z.string(),
  label: z.string().optional(),
  href: z.string().optional(),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/team" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role_en: z.string(),
      role_tr: z.string(),
      bio_en: z.string(),
      bio_tr: z.string(),
      photo: image(),
      group: z.enum(["member", "collaborator", "alumni"]).default("member"),
      order: z.number().default(100),
      links,
      projects: z.array(badgeItem).optional(),
      papers: z.array(badgeItem).optional(),
      joined: z.coerce.date().optional(),
      left: z.coerce.date().optional(),
    }),
});

const papers = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/papers" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Use a trailing "*" on a name to mark equal contribution.
      authors: z.array(z.string()),
      venue: z.string(),
      year: z.number(),
      blurb_en: z.string(),
      blurb_tr: z.string(),
      thumbnail: image().optional(),
      tags: z.array(z.string()).default([]),
      links: z
        .object({
          arxiv: z.string().url().optional(),
          pdf: z.string().url().optional(),
          doi: z.string().url().optional(),
          code: z.string().url().optional(),
          openreview: z.string().url().optional(),
        })
        .optional(),
      featured: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  // Posts live under blog/en/** and blog/tr/**; `lang` is derived from the folder.
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: reference("team"),
      cover: image().optional(),
      tags: z.array(z.string()).default([]),
      // Card size on the blog index grid.
      cardSize: z.enum(["featured", "standard", "compact"]).default("standard"),
      // Links EN <-> TR versions of the same post (use the same id in both).
      translationId: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { team, papers, blog };
