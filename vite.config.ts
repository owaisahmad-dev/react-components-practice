import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  base: "react-components-practice",
  build: {
    outDir: "build",
  },
  plugins: [],
});
