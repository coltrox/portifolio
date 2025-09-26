import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // AQUI ESTÁ A CORREÇÃO:
  // Certifique-se de que o nome é '/portfolio/'
  base: '/portfolio/', 
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})