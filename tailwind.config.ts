import type { Config } from 'tailwindcss'
import { tailwindConfigBase } from './lib/configs'

const tailwindConfig: Config = {
  content: ['/index.html', './src/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [tailwindConfigBase]
}

export default tailwindConfig
