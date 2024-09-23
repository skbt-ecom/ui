import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '$/shared/ui'

const meta = {
  title: 'Base/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    children: 'Text container'
  }
}

export const MinWidth: Story = {
  args: {
    children: '2',
    className: 'bg-color-primary-default'
  }
}
