import toast from 'react-hot-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonIcon, Icon } from '$/shared/ui'

const meta = {
  title: 'BASE/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ButtonIcon>

export default meta
type Story = StoryObj<typeof ButtonIcon>

export const Base: Story = {
  args: {
    size: 'md',
    intent: 'primary',
    onClick: () => toast.success('Clicked'),
    children: <Icon name='general/check' />
  }
}

export const AllVariantsButtonsIcon: Story = {
  render: () => (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-5'>
        <ButtonIcon intent='primary' color='text-color-negative' size='lg'>
          <Icon name='general/check' />
        </ButtonIcon>
        <ButtonIcon intent='primary' size='md'>
          <Icon name='general/check' />
        </ButtonIcon>
        <ButtonIcon intent='primary' size='sm'>
          <Icon name='general/check' />
        </ButtonIcon>
        <ButtonIcon intent='primary' size='sm' disabled>
          <Icon name='general/check' />
        </ButtonIcon>
      </div>

      <div className='flex items-center gap-5'>
        <ButtonIcon intent='secondary' size='lg'>
          <Icon name='general/check' />
        </ButtonIcon>
        <ButtonIcon intent='secondary' size='md'>
          <Icon name='general/check' />
        </ButtonIcon>
        <ButtonIcon intent='secondary' size='sm'>
          <Icon name='general/check' />
        </ButtonIcon>
        <ButtonIcon intent='secondary' size='sm' disabled>
          <Icon name='general/check' />
        </ButtonIcon>
      </div>

      <div className='flex items-center gap-5'>
        <ButtonIcon intent='ghost' size='lg'>
          <Icon name='general/check' />
        </ButtonIcon>
        <ButtonIcon intent='ghost' size='md'>
          <Icon name='general/check' />
        </ButtonIcon>
        <ButtonIcon intent='ghost' size='sm'>
          <Icon name='general/check' />
        </ButtonIcon>
        <ButtonIcon intent='ghost' size='sm' disabled>
          <Icon name='general/check' />
        </ButtonIcon>
      </div>
    </div>
  )
}
