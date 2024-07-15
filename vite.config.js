import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": "https://backend.ifbc.co",
  //   },
  // },
  build: {
    outDir: "./build",
    emptyOutDir: true, // also necessary
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});

const labels = document.querySelectorAll(".form-label--checkbox");
labels.forEach((label) => {
  if (label.textContent.includes("Disposable Lids")) {
    label.textContent.replace("Lids", "");
  }
});
