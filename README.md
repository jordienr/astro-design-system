# Astro Design System Theme

Astro Design System is the easiest way to start your our design system. Since Astro is compatible with many frameworks, you can import your components and document them right in the markdown files.

## Getting started

### Adding new sections

To add a new section, create an astro or markdown file in the `src/pages/[lang]/` directory. To show the section on the left side navigation, add it to the navigation config file at `src/config.ts`.

### Customizing Core section (colors, typography, shadows...)

If you want to customize the default colors, typography or shadows you can find the configuration file at `src/config/design.config.ts`.

Feel free to add new pages to the Core section

### Customizing the page layout

You can find the css for the pages in `src/styles/content.scss`.

### Adding your components

Astro is great for design systems because it allows you to import components from different frameworks like react, vue or svelte.

To get started check how the `MainButton` component is used in the `src/pages/en/buttons.md` file.

You can import your component library or create your own and document it easily.

### Have fun!

Astro Design System template was made by **[@jordienr](https://twitter.com/jordienr)** for personal and commercial use.
