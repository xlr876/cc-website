// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://xlr876.github.io",
  base: "/cc-website",
  vite: {
    plugins: [tailwindcss()],
  },
});
