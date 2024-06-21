import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": "https://siddiqiventures-001-site4.ktempurl.com",
  //   },
  // },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
