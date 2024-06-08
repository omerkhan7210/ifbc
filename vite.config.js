import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/GetAllProduct': {
        target: 'http://siddiqiventures-001-site4.ktempurl.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/GetAllProduct/, '/GetAllProduct'),
      },
    },
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
})
