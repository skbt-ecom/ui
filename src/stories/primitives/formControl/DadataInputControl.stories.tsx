import type { Meta, StoryObj } from '@storybook/react'
import { mockDefaultValues, mockSchema, StorybookFormProvider } from '@/storybookHelpers'
import { DadataInputControl } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/DadataInputControl',
  component: DadataInputControl,
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
} satisfies Meta<typeof DadataInputControl>

export default meta
type Story = StoryObj<typeof meta>

export const DadataFio: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'fio',
    label: 'ФИО',
    size: 'lg',
    dadataBaseUrl: 'cache',
    badge: '+25%'
  }
}

export const DadataAddress: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'address',
    label: 'Адрес',
    size: 'lg',
    dadataType: 'address',
    dadataBaseUrl: 'cache'
  }
}

export const DadataCountry: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'country',
    label: 'Страна',
    size: 'lg',
    dadataType: 'country',
    dadataBaseUrl: 'constants'
  }
}

export const DadataAuto: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'auto',
    label: 'Авто',
    size: 'lg',
    dadataType: 'auto',
    dadataBaseUrl: 'constants'
  }
}

export const DadataOrganization: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args: {
    name: 'organization',
    label: 'Организация',
    size: 'lg',
    dadataType: 'party',
    dadataBaseUrl: 'cache',
    badge: '+25%'
  }
}
