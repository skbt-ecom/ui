import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { CheckboxControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/CheckboxControl',
  component: CheckboxControl,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookFormProvider validationSchema={mockSchema} defaultValues={mockDefaultValues}>
        <Story />
      </StorybookFormProvider>
    )
  ]
} satisfies Meta<typeof CheckboxControl>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    label:
      'Выражаю согласие на обработку персональных данных и подтверждаю, что ознакомлен с Политикой обработки персональных данных',
    name: 'condition'
  }
}

export const WithHelperText: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    label:
      'Выражаю согласие на обработку персональных данных и подтверждаю, что ознакомлен с Политикой обработки персональных данных',
    name: 'condition',
    helperText: 'Утвердите согласие'
  }
}

export const Disabled: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    label:
      'Выражаю согласие на обработку персональных данных и подтверждаю, что ознакомлен с Политикой обработки персональных данных',
    name: 'condition',
    disabled: true
  }
}
