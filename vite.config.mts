import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import svg from '@neodx/svg/vite'

export default defineConfig({
  plugins: [
    react(),
    svg({
      root: 'assets',
      group: true,
      output: './public/sprites',
      fileName: '{name}.{hash:8}.svg',
      resetColors: {
        exclude: [/^brandLogos/],
        replaceUnknown: 'currentColor'
      },
      metadata: {
        path: './src/sprite.gen.ts',
        runtime: {
          size: true,
          viewBox: true
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
