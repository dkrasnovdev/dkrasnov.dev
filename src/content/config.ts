import { defineCollection, z } from "astro:content";

const idea = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
});

const recipe = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
});

export const collections = {
  ideas: defineCollection({ schema: idea }),
  recipes: defineCollection({ schema: recipe }),
};
