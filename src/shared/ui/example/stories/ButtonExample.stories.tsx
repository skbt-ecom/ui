import type { Meta, StoryObj } from '@storybook/react'
import { ButtonExample } from './ButtonExample'

const meta = {
  title: 'Example/ButtonExample',
  component: ButtonExample,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof ButtonExample>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button'
  }
}

export const Large: Story = {
  args: {
    children: 'Button'
  }
}

export const Small: Story = {
  args: {
    children: 'Button'
  }
}
