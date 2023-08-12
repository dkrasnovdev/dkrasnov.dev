/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        "page-top": "var(--page-top)",
        "page-gutter": "var(--page-gutter)",
        "banner-height": "var(--banner-height)",
        "header-height": "var(--header-height)",
        "footer-height": "var(--footer-height)",
      },
      maxWidth: {
        content: "var(--content-width)",
      },
      minHeight: {
        content: "var(--content-height)",
      },
      borderColor: {
        DEFAULT: "#262626"
      },
      ringColor: {
        DEFAULT: "#fafafa"
      }
    },
  },
  plugins: [],
};
