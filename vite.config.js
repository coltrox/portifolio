import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/meu-portfolio/', // Troque 'meu-portfolio' pelo nome do seu repositório
  plugins: [react()],
  // ADICIONE ESTE BLOCO 'build'
  build: {
    outDir: 'docs',
  },
})