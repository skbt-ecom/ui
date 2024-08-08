import type { Meta } from '@storybook/react'
import { PhoneView } from './PhoneView'

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
      <PhoneView />
    </div>
  )
}
