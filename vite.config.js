import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large dependencies into separate chunks
          react: ['react', 'react-dom'],
          vendor: ['axios', 'react-router-dom', 'react-icons'],
        }
      }
    }
  },
  server: {
    port: 3000
  }
})
