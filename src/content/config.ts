import { defineCollection, z } from "astro:content";

const post = z.object({
  title: z.string(),
  description: z.string(),
});

const recipe = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
});

export const collections = {
  posts: defineCollection({ schema: post }),
  recipes: defineCollection({ schema: recipe }),
};
