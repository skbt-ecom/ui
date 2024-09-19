import { type Meta, type StoryObj } from '@storybook/react'
import { type ITabRenderContent, TabsSwitcher } from '$/shared/ui'

const meta = {
  title: 'Base/TabsSwitcher',
  component: TabsSwitcher,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TabsSwitcher>

export default meta

type Story = StoryObj<typeof meta>

const TABS_MOCKS: ITabRenderContent = {
  triggers: [
    { id: '1', label: 'Условия' },
    { id: '2', label: 'Вклады' },
    { id: '3', label: 'Депозиты' }
  ],
  contents: [
    { id: '1', body: <>Условия контент</>, accordion: { title: 'Обернут в аккордеон' } },
    { id: '2', body: <>Вклады контент</> },
    { id: '3', body: <>Депозиты контент</> }
  ]
}

export const Base: Story = {
  args: {
    renderContent: TABS_MOCKS
  }
}
