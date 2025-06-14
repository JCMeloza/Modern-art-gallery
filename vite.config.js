import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: "/Modern-art-gallery/",
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        location: resolve(__dirname, 'location.html')
      }
    }
  }
})