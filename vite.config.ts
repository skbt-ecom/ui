import svg from '@neodx/svg/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import typeChecker from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'
import { dependencies } from './package.json'

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['lib'], insertTypesEntry: true }),
    typeChecker({ typescript: true }),
    svg({
      root: 'static',
      group: true,
      output: './lib/shared/ui/icon/sprites',
      fileName: '{name}.{hash:8}.svg',
      resetColors: {
        exclude: [/^brandLogos/],
        replaceUnknown: 'currentColor'
      },
      metadata: {
        path: './lib/shared/ui/icon/sprite.gen.ts',
        runtime: {
          size: true,
          viewBox: true
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      $: resolve(__dirname, './lib')
    }
  },

  build: {
    copyPublicDir: true,
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      name: 'ui',
      formats: ['es', 'umd'],
      fileName: (format) => `ui.${format}.js`
    },
    rollupOptions: {
      external: Object.keys(dependencies),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'class-variance-authority': 'classVarianceAuthority'
        }
      }
    }
  }
})
