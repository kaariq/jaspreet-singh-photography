import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import path from "path";

import { tanstackRouter } from "@tanstack/router-plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { adminApiPlugin } from "./vite-plugins/admin-api";

const config = defineConfig({
  resolve: {
    tsconfigPaths: true,
     alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    viteReact(),
    adminApiPlugin(),
  ],
});

export default config;
