import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: 'esbuild', // Fastest for HTML/CSS
    cssMinify: true,
    rollupOptions: {
      // In the future, this could use Rolldown instead of Rollup
      // Rolldown is still in development but will be much faster
      output: {
        manualChunks: undefined,
        inlineDynamicImports: true
      }
    }
  }
})
