// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://darlingcv.dev";

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Darling Dev | Software Developer",
    description:
      "Official portfolio of Darling Fajardo (Darling Dev). Building high-performance software and unique digital experiences.",
    image: "/images/og/home.jpg",
    canonical: "https://darlingcv.dev",
    robots: "index,follow",
    alternates: [{ href: "https://darlingcv.dev", hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Person",
  name: "Darling Fajardo",
  description: meta.home.description,
  email: "hello@darlingcv.dev",
};

export { meta, schema, baseURL };