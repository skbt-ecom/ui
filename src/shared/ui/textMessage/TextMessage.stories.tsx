import type { Meta, StoryObj } from '@storybook/react'
import { TextMessage } from './TextMessage'

const meta = {
  title: 'TYPOGRAPHY/TextMessage',
  component: TextMessage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TextMessage>

export default meta

type Story = StoryObj<typeof meta>

export const WithSimpleText: Story = {
  args: {
    text: 'Helper text',
    as: 'p'
  }
}

export const WithErrorText: Story = {
  args: {
    text: 'Error message',
    intent: 'error',
    as: 'p'
  }
}

export const WithOtherHTMLElement: Story = {
  args: {
    text: 'Error message',
    intent: 'error',
    as: 'span'
  }
}
