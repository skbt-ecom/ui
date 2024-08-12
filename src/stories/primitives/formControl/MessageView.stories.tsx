import type { Meta, StoryObj } from '@storybook/react'
import { MessageView } from '$/shared/ui'

const meta = {
  title: 'TYPOGRAPHY/MessageView',
  component: MessageView,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof MessageView>

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
