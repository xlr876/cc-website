// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://YOUR-GITHUB-USERNAME.github.io",
  base: "/cc-website",
  vite: {
    plugins: [tailwindcss()],
  },
});
