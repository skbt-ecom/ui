import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { Icon, InputControl } from '$/shared/ui'

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
    name: 'city',
    label: 'Город',
    size: 'md'
  }
}

export const WithIcon: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'city',
    label: 'Город',
    size: 'md',
    icon: <Icon name='general/check' className='text-icon-positive-default' />
  }
}

export const WithBadge: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'city',
    label: 'Город',
    size: 'md',
    badge: '+25%'
  }
}

export const WithHelperText: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'city',
    label: 'Город',
    helperText: 'Введите город проживания',
    size: 'md'
  }
}

export const Disabled: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'city',
    label: 'Город',
    helperText: 'Введите город проживания',
    size: 'md',
    disabled: true
  }
}
