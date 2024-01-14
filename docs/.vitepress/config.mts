import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress-BoxPistols",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      // { text: "API", link: "/api" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Example", link: "/example" },
          { text: "--- React ---", link: "#" },
          { text: "react-start-env", link: "/react-start-env" },
          { text: "------", link: "#" },
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  // https://vitepress.dev/guide/markdown#image-lazy-loading
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true,
    },
  },
});
