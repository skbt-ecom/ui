import { type Meta, type StoryObj } from '@storybook/react'
import { Skeleton } from '$/shared/ui'

const meta = {
  title: 'Base/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    className: 'w-[280px] h-[400px] rounded-md'
  }
}
