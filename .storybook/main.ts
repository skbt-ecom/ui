import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import { resolve } from 'path'
import svg from '@neodx/svg/vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
    '@storybook/addon-console'
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true
    }
  },
  // staticDirs: ['../public'],
  docs: {
    autodocs: 'tag'
  },
  viteFinal: (config) =>
    mergeConfig(config, {
      plugins: [
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
            path: './src/shared/ui/icon/sprite.gen.ts',
            runtime: {
              size: true,
              viewBox: true
            }
          }
        })
      ],
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
          $: resolve(__dirname, '../lib')
        }
      }
    }),
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
export default config
