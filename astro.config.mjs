import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://dkrasnov.dev",
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [tailwind(), mdx(), svelte(), react()],
});
