import { type Meta, type StoryObj } from '@storybook/react'
import { Advantages, type IAdvantage } from '$/widgets/Advantages'

const meta = {
  title: 'WIDGETS/Advantages',
  component: Advantages,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Advantages>

export default meta

type Story = StoryObj<typeof meta>

const mockThreeCards: IAdvantage[] = [
  { title: 'До 5 млн ₽', description: 'сумма кредита' },
  { title: 'До 5 лет', description: 'срок кредита' },
  { title: 'От 5 минут', description: 'быстрое одобрение' }
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Base: Story = {
  render: () => <Advantages advantagesList={mockThreeCards} />
}
