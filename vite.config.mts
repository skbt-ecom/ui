import react from '@vitejs/plugin-react'
import { resolve, extname, relative } from 'path'
import { defineConfig } from 'vite'
import svg from '@neodx/svg/vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import glob from 'glob'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ['lib'], insertTypesEntry: true }),
    svg({
      root: 'static',
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
      '@': resolve(__dirname, './src'),
      $: resolve(__dirname, './lib')
    }
  },

  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: '@ecom/ui-master',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: ['lib/**/*.d.ts']
          })
          .map((file) => [
            relative('lib', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url))
          ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].ts'
      }
    }
  }
})
