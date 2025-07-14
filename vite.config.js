import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // “@” → src directory
      '@': path.resolve(__dirname, 'src'),
      // you can add more aliases if you like:
      // 'components': path.resolve(__dirname, 'src/components'),
    }
  }
})
