import type { Meta, StoryObj } from '@storybook/react'
import { PageHeader } from '$/widgets'

const meta = {
  title: 'WIDGETS/PageHeader',
  component: PageHeader,
  tags: ['autodocs']
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof meta>

export const WithPhone: Story = {
  render: () => <PageHeader variant='withPhone' />
}

export const WithButton: Story = {
  render: () => <PageHeader variant='withButton' />
}

export const WithOtherLogo: Story = {
  render: () => <PageHeader variant='withButton' logoType='business' />
}
