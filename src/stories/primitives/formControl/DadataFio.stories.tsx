import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { Autocomplete } from '$/shared/ui/formControlElements/dadata/Autocomplete'

const meta = {
  title: 'CONTROLLED FORM UI/Autocomplete',
  component: Autocomplete,
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
} satisfies Meta<typeof Autocomplete>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'phone',
    label: 'ФИО',
    size: 'lg'
  }
}
