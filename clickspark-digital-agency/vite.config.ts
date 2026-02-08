import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        services: resolve(__dirname, "src/pages/services.html"),
        blog: resolve(__dirname, "src/pages/blog.html"),
        contact: resolve(__dirname, "src/pages/contact.html"),
        newsletter: resolve(__dirname, "src/pages/newsletter.html"),
      },
    },
  },
});
