import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'

const meta = {
  title: 'INTERACTIVE/Accordion',
  component: Accordion,
  tags: ['autodocs']
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

const mock_accordion_list = [
  {
    label: 'Accordion Title 1',
    content: 'accordion content 1'
  },
  {
    label: 'Accordion Title 2',
    content: 'accordion content 2'
  },
  {
    label: 'Accordion Title 3',
    content: 'accordion content 3'
  }
]

export const Base: Story = {
  args: {
    accordionItems: mock_accordion_list
  }
}

export const WithDefaultOpen: Story = {
  args: {
    defaultValue: ['1'],
    accordionItems: mock_accordion_list
  }
}
