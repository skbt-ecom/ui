import type { Config } from 'tailwindcss'
import {
  allowedBackgroundColors,
  allowedBannersBackgroundColors,
  allowedBorderRadius,
  allowedFontSize,
  allowedIconsColors,
  allowedLineHeight,
  allowedStrokeColors,
  allowedTextColors
} from './lib/shared/constants'

const tailwindConfig: Config = {
  content: ['/index.html', './src/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      mobile: { max: '1188px' },
      desktop: '1188px'
    },
    backgroundColor: {
      color: allowedBackgroundColors,
      banner: allowedBannersBackgroundColors,
      icon: allowedIconsColors
    },
    textColor: {
      icon: allowedIconsColors,
      color: allowedTextColors
    },
    fill: allowedIconsColors,
    stroke: allowedIconsColors,
    borderColor: allowedStrokeColors,
    outlineColor: allowedStrokeColors,
    borderRadius: allowedBorderRadius,
    fontFamily: { roboto: ['var(--ff-roboto)', 'sans-serif'] },
    fontSize: allowedFontSize,
    lineHeight: allowedLineHeight,
    boxShadow: {
      sm: '0 8px 20px 0 rgba(0, 0, 0, 0.08)',
      md: '0 12px 20px 0 rgba(0, 33, 87, 0.10)',
      lg: '0 16px 24px 0 rgba(0, 33, 87, 0.16)'
    },
    extend: {
      width: {
        popper: 'var(--radix-popover-content-available-width)',
        trigger: 'var(--radix-popover-trigger-width)',
        autocomplete: 'var(--input-width)'
      },
      transitionDuration: {
        DEFAULT: '0.3s',
        12: '0.12s',
        15: '0.15s'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' }
        },
        'scale-in': {
          from: { opacity: '0', scale: '0' },
          to: { opacity: '1', scale: '1' }
        }
      },
      animation: {
        slideDown: 'slideDown 0.3s cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 0.3s cubic-bezier(0.87, 0, 0.13, 1)',
        'scale-in': 'scale-in 0.3s ease-in-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

export default tailwindConfig
