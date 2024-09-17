import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { Icon, InputSliderControl } from '$/shared/ui'

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
    label: 'Срок кредита',
    size: 'md',
    min: 1,
    max: 10,
    defaultValueSlider: [5],
    suffix: 'years',
    sliderTextRight: 'лет',
    sliderTextLeft: 'год'
  }
}

export const WithIcon: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'city',
    label: 'Город',
    size: 'md',
    icon: <Icon name='common/check' className='text-icon-positive-default' />
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
