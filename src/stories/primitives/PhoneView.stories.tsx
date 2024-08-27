import type { Meta } from '@storybook/react'
import { PhoneView } from '$/shared/ui'

const meta = {
  title: 'base/PhoneView',
  component: PhoneView,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof PhoneView>

export default meta

export const Base = {
  render: () => (
    <div className='flex gap-4'>
      <PhoneView phone='8 800 000-00-00' text='Бесплатно по России' />
    </div>
  )
}
