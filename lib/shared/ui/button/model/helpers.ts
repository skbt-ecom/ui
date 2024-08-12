import type { TButtonIntents } from '../Button'

export const setButtonLoaderIntent = (intent: TButtonIntents) => {
  if (intent !== 'primary' && intent !== 'secondary') {
    return 'secondary'
  }
  return intent
}
