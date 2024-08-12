import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from '$/shared/ui'

const meta = {
  title: 'Base/Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='bg-color-blue-grey-500 rounded-md size-28 flex items-center justify-center'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    size: 'md',
    intent: 'secondary',
    position: 'static'
  }
}
