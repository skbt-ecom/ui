import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { RadioControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/RadioControl',
  component: RadioControl,
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
} satisfies Meta<typeof RadioControl>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'sex',
    radioItemsGroup: [
      { label: 'Мужской', value: 'male' },
      { label: 'Женский', value: 'female' }
    ]
  }
}

export const WithGroupName: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'sex',
    groupName: 'Выбери пол:',
    radioItemsGroup: [
      { label: 'Мужской', value: 'male' },
      { label: 'Женский', value: 'female' }
    ]
  }
}

export const WithHelperText: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'sex',
    helperText: 'Укажите свой пол, как в паспорте ',
    radioItemsGroup: [
      { label: 'Мужской', value: 'male' },
      { label: 'Женский', value: 'female' }
    ]
  }
}

export const WithHorizontalOrientation: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'sex',
    groupName: 'Выберите пол',
    helperText: 'Укажите свой пол, как в паспорте ',
    orientation: 'horizontal',
    radioItemsGroup: [
      { label: 'Мужской', value: 'male' },
      { label: 'Женский', value: 'female' }
    ]
  }
}
