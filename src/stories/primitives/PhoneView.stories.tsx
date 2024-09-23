import type { Meta, StoryObj } from '@storybook/react'
import { PhoneView } from '$/shared/ui'

const meta = {
  title: 'base/PhoneView',
  component: PhoneView,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof PhoneView>
type Story = StoryObj<typeof PhoneView>

export default meta

export const Base: Story = {
  render: () => (
    <div className='flex gap-4'>
      <PhoneView phone='8 800 000-00-00' text='Бесплатно по России' />
    </div>
  )
}
