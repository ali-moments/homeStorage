import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",  // Root of your domain
  build: {
    outDir: "dist",  // Default Vite output folder
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    // Proxy API requests in development
    proxy: {
      '/api': 'http://localhost:8000',
    }
  },
  plugins: [react()],
})
