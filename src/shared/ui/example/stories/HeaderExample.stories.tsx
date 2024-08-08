import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { HeaderExample } from './HeaderExample'

const meta = {
  title: 'Example/HeaderExample',
  component: HeaderExample,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn()
  }
} satisfies Meta<typeof HeaderExample>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}

export const LoggedOut: Story = {}
