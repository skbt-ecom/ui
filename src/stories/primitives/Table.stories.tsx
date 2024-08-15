import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '$/shared/ui'

const meta = {
  title: 'DataBlocks/Table',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    size: 'md',
    children: 'Button',
    intent: 'primary',
    textFormat: 'initial',
    isLoading: false,
    onClick: () => toast.success('Clicked')
  }
}
