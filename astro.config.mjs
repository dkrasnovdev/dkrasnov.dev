import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://dkrasnov.dev",
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      wrap: true
    }
  },
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  },
  integrations: [tailwind(), mdx(), svelte(), react(), prefetch()],
  output: "static",
  adapter: vercel()
});
