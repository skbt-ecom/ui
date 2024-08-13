import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { InputControlMask } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/InputControlMask',
  component: InputControlMask,
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
} satisfies Meta<typeof InputControlMask>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'phone',
    label: 'Номер телефона',
    size: 'md',
    format: '# (###) ###-##-##'
  }
}
