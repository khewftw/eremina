import { z } from "zod";

export const contentTypeSchema = z.enum(["directions", "experience", "team", "press"]);

export const personSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  portrait: z.string().min(1),
  telegram: z.string().optional(),
  email: z.string().optional(),
});

export const contentFrontmatterSchema = z
  .object({
    title: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9-]+$/, "slug must be kebab-case"),
    type: contentTypeSchema,
    excerpt: z.string().min(1),
    publishedAt: z.string().min(1),
    updatedAt: z.string().optional(),
    heroImage: z.string().min(1),
    heroAlt: z.string().min(1),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    related: z.array(z.string()).optional(),
    person: personSchema.optional(),
  })
  .refine((data) => data.type === "team" || !data.person, {
    message: "`person` is only valid on type: team",
    path: ["person"],
  });

export type ContentFrontmatter = z.infer<typeof contentFrontmatterSchema>;
