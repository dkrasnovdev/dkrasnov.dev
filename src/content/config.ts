import { defineCollection, z } from "astro:content";

const post = z.object({
  title: z.string(),
  description: z.string(),
});

export const collections = {
  posts: defineCollection({ schema: post }),
};
