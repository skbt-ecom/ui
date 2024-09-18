import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { InputSliderControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/InputSliderControl',
  component: InputSliderControl,
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
} satisfies Meta<typeof InputSliderControl>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'term',
    label: 'Сумма кредита',
    size: 'md',
    min: 30_000,
    max: 5_000_000,
    defaultValueSlider: [300_000],
    variant: 'credit'
  }
}

export const WithYears: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'term',
    label: 'Срок кредита',
    size: 'md',
    min: 1,
    max: 12,
    defaultValueSlider: [1],
    variant: 'years'
  }
}
