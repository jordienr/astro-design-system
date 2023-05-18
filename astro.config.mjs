import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/configuring-astro/#environment-variables
  site: import.meta.env.VITE_SITE || 'http://localhost:3000',
  base: import.meta.env.VITE_BASE || '/',
  resolve: {
    /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions */
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  integrations: [
  // Enable Preact to support Preact JSX components.
  vue(), tailwind(), mdx()]
});