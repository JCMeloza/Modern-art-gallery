import { defineConfig } from 'vite'

export default defineConfig({
  base: "/Modern-art-gallery/",
  server: {
    watch: {
      usePolling: true
    }
  }
})