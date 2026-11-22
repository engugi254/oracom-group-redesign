
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: '/oracom-group-redesign/',
  build: { rollupOptions: { input: { main: resolve(process.cwd(), 'index.html'), services: resolve(process.cwd(), 'services.html') } } },
})
