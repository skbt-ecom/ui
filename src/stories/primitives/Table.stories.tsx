import type { Meta, StoryObj } from '@storybook/react'
import {
  tableValue,
  tableValueThreeCols,
  tableValueThreeColsWithoutTitles,
  tableValueWithoutTitles
} from '@/storybookHelpers/table/utils/defaultValue'
import { Table } from '$/shared/ui/'

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
    ...tableValue
  }
}

export const ThreeColumns: Story = {
  args: {
    ...tableValueThreeCols
  }
}

export const BaseWithoutTitles: Story = {
  args: {
    ...tableValueWithoutTitles
  }
}

export const ThreeColumnsWithoutTitles: Story = {
  args: {
    ...tableValueThreeColsWithoutTitles
  }
}
