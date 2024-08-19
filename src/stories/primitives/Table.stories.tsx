import type { Meta, StoryObj } from '@storybook/react'
import { Table } from '$/shared/ui/table/Table'
import { defaultTableValue } from '$/shared/ui/table/utils/defaultValue'

const meta = {
  title: 'DataBlocks/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    ...defaultTableValue
  }
}
