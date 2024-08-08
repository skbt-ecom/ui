import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '../icon'
import { ButtonIcon } from './ButtonIcon'

const meta = {
  title: 'BASE/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ButtonIcon>

export default meta
type Story = StoryObj<typeof meta>

export const ButtonIcons: Story = {
  render: () => (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-5'>
        <ButtonIcon intent='primary' color='text-color-negative' size='lg'>
          <Icon name='common/check' />
        </ButtonIcon>
        <ButtonIcon intent='primary' size='md'>
          <Icon name='common/check' />
        </ButtonIcon>
        <ButtonIcon intent='primary' size='sm'>
          <Icon name='common/check' />
        </ButtonIcon>
        <ButtonIcon intent='primary' size='sm' disabled>
          <Icon name='common/check' />
        </ButtonIcon>
      </div>

      <div className='flex items-center gap-5'>
        <ButtonIcon intent='secondary' size='lg'>
          <Icon name='common/check' />
        </ButtonIcon>
        <ButtonIcon intent='secondary' size='md'>
          <Icon name='common/check' />
        </ButtonIcon>
        <ButtonIcon intent='secondary' size='sm'>
          <Icon name='common/check' />
        </ButtonIcon>
        <ButtonIcon intent='secondary' size='sm' disabled>
          <Icon name='common/check' />
        </ButtonIcon>
      </div>

      <div className='flex items-center gap-5'>
        <ButtonIcon intent='ghost' size='lg'>
          <Icon name='common/check' />
        </ButtonIcon>
        <ButtonIcon intent='ghost' size='md'>
          <Icon name='common/check' />
        </ButtonIcon>
        <ButtonIcon intent='ghost' size='sm'>
          <Icon name='common/check' />
        </ButtonIcon>
        <ButtonIcon intent='ghost' size='sm' disabled>
          <Icon name='common/check' />
        </ButtonIcon>
      </div>
    </div>
  )
}
