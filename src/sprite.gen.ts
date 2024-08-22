export interface SpritesMap {
  brandLogos: 'logoBlack' | 'logoBusiness' | 'logoGray' | 'logoInsurance' | 'logoMain' | 'logoWhite'
  common: 'arrowCircle' | 'arrowRight' | 'check' | 'close' | 'warningCircle'
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  brandLogos: {
    filePath: 'brandLogos.aa92281d.svg',
    items: {
      logoBlack: {
        viewBox: '0 0 194 32',
        width: 194,
        height: 32
      },
      logoBusiness: {
        viewBox: '0 0 192 32',
        width: 192,
        height: 32
      },
      logoGray: {
        viewBox: '0 0 194 32',
        width: 194,
        height: 32
      },
      logoInsurance: {
        viewBox: '0 0 193 32',
        width: 193,
        height: 32
      },
      logoMain: {
        viewBox: '0 0 192 32',
        width: 192,
        height: 32
      },
      logoWhite: {
        viewBox: '0 0 194 32',
        width: 194,
        height: 32
      }
    }
  },
  common: {
    filePath: 'common.10afcf11.svg',
    items: {
      arrowCircle: {
        viewBox: '0 0 32 32',
        width: 32,
        height: 32
      },
      arrowRight: {
        viewBox: '0 0 16 17',
        width: 16,
        height: 17
      },
      check: {
        viewBox: '0 0 24 24',
        width: 800,
        height: 800
      },
      close: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      warningCircle: {
        viewBox: '0 0 20 20',
        width: 20,
        height: 20
      }
    }
  }
}
