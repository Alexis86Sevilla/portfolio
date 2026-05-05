import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()),
    link: z.string().url().optional(),
    type: z.enum(["personal", "empresa"]).optional().default("personal"),
    company: z.string().optional(),
    codeLink: z.string().optional(),
  }),
});

export const collections = { projects };
