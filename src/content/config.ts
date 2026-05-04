import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = { projects };
