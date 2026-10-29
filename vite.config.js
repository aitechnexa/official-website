import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react'
          if (id.includes('node_modules/gsap')) return 'gsap'
        },
      },
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
  },
})
