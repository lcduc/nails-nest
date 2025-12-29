import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'figma-asset-plugin',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          return id
        }
      },
      load(id) {
        if (id.startsWith('figma:asset/')) {
          // Return a placeholder 1x1 transparent PNG as base64
          const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
          return `export default "${placeholder}"`
        }
      }
    }
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    copyPublicDir: true
  }
})
