import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from '$/shared/ui'

const meta = {
  title: 'TYPOGRAPHY/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Heading>
type Story = StoryObj<typeof Heading>

export default meta

export const Headings: Story = {
  render: () => (
    <div className='flex flex-col gap-6'>
      <Heading as='h1'>h1 - заголовок страницы</Heading>
      <Heading as='h2'>h2 - заголовок блока</Heading>
      <Heading as='h3' className='text-color-primary-default'>
        h3 - заголовок крупных карточек (с другим цветом)
      </Heading>
      <Heading as='h4'>h4 - заголовок небольших карточек</Heading>

      <i className='desk-body-regular-m text-color-tetriary'># add h5 and h6 if need</i>
    </div>
  )
}
