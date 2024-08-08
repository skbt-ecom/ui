import type { Meta } from '@storybook/react'
import { Icon } from './Icon'

const meta = {
  title: 'Icons/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Icon>

export default meta

export const Common = {
  render: () => (
    <div className='flex gap-4'>
      <Icon name='common/check' className='text-icon-positive-default' />
      <Icon name='common/close' className='text-icon-negative-default' />
    </div>
  )
}

export const SovcombankLogos = {
  render: () => (
    <div className=' gap-16 bg-color-blue-grey-300 p-6 grid grid-cols-2 rounded-md'>
      <Icon name='brandLogos/logoBlack' className='w-[192px] h-[32px]' />
      <Icon name='brandLogos/logoGray' className='w-[192px] h-[32px]' />
      <Icon name='brandLogos/logoWhite' className='w-[192px] h-[32px]' />
      <Icon name='brandLogos/logoBusiness' className='w-[192px] h-[32px]' />
      <Icon name='brandLogos/logoInsurance' className='w-[192px] h-[32px]' />
      <Icon name='brandLogos/logoBusiness' className='w-[192px] h-[32px]' />
    </div>
  )
}
