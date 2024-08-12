import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/shared/storybookHelpers'
import { InputControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/InputControl',
  component: InputControl,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <StorybookFormProvider validationSchema={mockSchema} defaultValues={mockDefaultValues}>
        <Story />
      </StorybookFormProvider>
    )
  ],
  tags: ['autodocs']
} satisfies Meta<typeof InputControl>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'surname',
    label: 'Фамилия',
    helperText: 'Введите фамилию',
    size: 'sm'
  }
}
