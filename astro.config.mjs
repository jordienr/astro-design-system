import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";
import vue from '@astrojs/vue';


// https://astro.build/config
export default defineConfig({
  integrations: [// Enable Preact to support Preact JSX components.
    preact(), // Enable React for the Algolia search component.
    vue(),
    tailwind()]
});