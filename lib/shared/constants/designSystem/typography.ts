const allowedFontSize = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  40: '40px'
}

const allowedLineHeight = {
  16: '16px',
  20: '20px',
  22: '22px',
  24: '24px',
  30: '30px',
  32: '32px',
  40: '40px',
  48: '48px'
}

const allowedTextStyles = {
  /* # Headline */
  '.mob-headline-bold-m': {
    '@apply font-bold text-28 leading-32': ''
  },
  '.mob-headline-bold-s': {
    '@apply font-bold text-24 leading-30': ''
  },
  /* # Title */
  '.mob-title-bold-l': {
    '@apply font-bold text-20 leading-24': ''
  },
  '.mob-title-bold-m': {
    ' @apply font-bold text-18 leading-22': ''
  },
  /* # Body */
  '.mob-body-medium-l': {
    '@apply font-medium text-16 leading-22': ''
  },
  '.mob-body-regular-l': {
    '@apply font-normal text-16 leading-22': ''
  },
  '.mob-body-medium-m': {
    '@apply font-medium text-14 leading-20': ''
  },
  '.mob-body-regular-m': {
    '@apply font-normal text-14 leading-20': ''
  },
  '.mob-body-regular-s': {
    '@apply font-normal text-12 leading-20': ''
  },

  /* -------- Desktop Typography -------- */
  /* # Headline */
  '.desk-headline-bold-l': {
    '@apply font-bold text-40 leading-48': ''
  },
  '.desk-headline-bold-m': {
    '@apply font-bold text-32 leading-40': ''
  },

  /* # Title */
  '.desk-title-bold-l': {
    '@apply font-bold text-24 leading-30': ''
  },
  '.desk-title-bold-s': {
    '@apply font-bold text-18 leading-22': ''
  },

  /* # Body */
  '.desk-body-medium-l': {
    '@apply font-medium text-16 leading-22': ''
  },
  '.desk-body-regular-l': {
    '@apply font-normal text-16 leading-22': ''
  },
  '.desk-body-regular-m': {
    '@apply font-normal text-14 leading-20': ''
  },
  '.desk-body-regular-s': {
    '@apply font-normal text-12 leading-16': ''
  }
}

export { allowedLineHeight, allowedFontSize, allowedTextStyles }
