---
title: Introduction
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

# Astro Design System Theme

Astro Design System is the easiest way to start your our design system. Since Astro is compatible with many frameworks, you can import your components and document them right in the markdown files.

## Getting started

### Adding new sections

Although it's not required, you can create folders for new sections.

To show the section on the left side navigation, add it to the navigation config file at `src/config.ts`.

Example:

```js
export const SIDEBAR = [
    { text: "Core", header: true },
    { text: "Introduction", link: "/core/introduction" },
    ...,
    { text: "Components", header: true },
    { text: "Buttons", link: "/components/buttons" },
    ...,
    { text: "New section", header: true },
    { text: "New component", link: "/new-section/new-component.md" },
];
```

### Adding new pages

To add new pages just create an .astro or markdown file in `src/pages/[section]/my-page.md`. Remember to add it to the navigation config in `src/config.ts` so it shows up in the left side navigation.

You're free to organize the pages however you want.

### Customizing Core section (colors, typography, shadows...)

If you want to customize the default colors, typography or shadows you can find the configuration file at `src/config/design.config.ts`.

Feel free to add new pages to the Core section

### Customizing the page layout

You can find the css for the pages in `src/styles/content.scss`.

### Adding your components

Astro is great for design systems because it allows you to import components from different frameworks like react, vue or svelte.

To get started check how the `MainButton` component is used in the `src/pages/en/buttons.md` file.

You can import your component library or create your own and document it easily.

### `.component-preview` utility

There's a class called `.component-preview` that you can use to wrap your component in a grid, and it will look like this:

<div class="component-preview">
    <button class="text-white bg-blue-500 px-4 py-2 rounded-md">Your component</button>
</div>

### Have fun!

Astro Design System template was made by **[@jordienr](https://twitter.com/jordienr)** for personal and commercial use.
