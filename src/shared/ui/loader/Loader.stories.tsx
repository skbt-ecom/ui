import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

const meta = {
  title: 'Base/Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    size: 'sm',
    intent: 'primary',
    position: 'static'
  }
}
