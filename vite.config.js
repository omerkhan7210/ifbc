import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": "http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com",
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
