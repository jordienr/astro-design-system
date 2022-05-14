export const SITE = {
  title: "Astro Design System",
  description: "Astro theme to build your design system fast.",
  defaultLanguage: "en_US",
  twitter: "@jordienr",
  github: "jordienr",
  linkedin: "linkedinUsername",
};

export const OPEN_GRAPH = {
  image: {
    src: "",
    alt: "",
  },
  twitter: "",
};

export const SIDEBAR = [
  { text: "Core", header: true },
  { text: "Introduction", link: "/core/introduction" },
  { text: "Colors", link: "/core/colors" },
  { text: "Typography", link: "/core/typography" },
  { text: "Shadows", link: "/core/shadows" },

  { text: "Components", header: true },
  { text: "Buttons", link: "/components/buttons" },
  { text: "Input", link: "/components/input" },
  { text: "Status pills", link: "/components/status-pill" },
  { text: "Table", link: "/components/table" },

  { text: "Patterns", header: true },
  { text: "Introduction", link: "/patterns/introduction" },
];
