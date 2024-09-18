import { type Meta, type StoryObj } from '@storybook/react'
import { Document } from '$/shared/ui'

const meta = {
  title: 'Files/Document',
  component: Document,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Document>

export default meta

type Story = StoryObj<typeof meta>

export const Outline: Story = {
  args: {
    text: 'Общая информация по кредитам ',
    size: 439,
    sizeType: 'КБ',
    intent: 'outline',
    href: 'https://sovcombank.ru/'
  }
}

export const Filled: Story = {
  args: {
    text: 'Общая информация по кредитам',
    size: 2,
    sizeType: 'МБ',
    intent: 'filled',
    href: 'https://sovcombank.ru/'
  }
}
