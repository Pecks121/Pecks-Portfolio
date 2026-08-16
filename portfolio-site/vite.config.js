import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so it works under any GitHub Pages URL
export default defineConfig({
  plugins: [react()],
  base: './',
})
