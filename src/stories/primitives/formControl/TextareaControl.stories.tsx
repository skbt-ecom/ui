import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { TextareaControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/TextareaControl',
  component: TextareaControl,
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
} satisfies Meta<typeof TextareaControl>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'description',
    label: 'Описание к блоку',
    size: 'md'
  }
}

export const WithPlaceholder: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'description',
    label: 'Описание к блоку',
    size: 'md',
    placeholder: 'Введите описание'
  }
}

export const Disabled: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'description',
    label: 'Описание к блоку',
    size: 'md',
    placeholder: 'Введите описание',
    disabled: true
  }
}
