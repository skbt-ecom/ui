import { RootProvider } from '../src/app/providers'
import '../lib/shared/style.css'

import type { Preview } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import React from 'react'

const preview: Preview = {
  decorators: [
    (storyFn, context) => withConsole()(storyFn)(context),
    (Story) => (
      <RootProvider>
        <Story />
      </RootProvider>
    )
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
