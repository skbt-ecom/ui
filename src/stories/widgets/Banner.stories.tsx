import type { Meta, StoryObj } from '@storybook/react'
import { Banner, PageHeader } from '$/widgets'
import { mockBannerBase, mockBannerOnlyPrimaryButton, mockWithAdvantages } from '$/widgets/banner/model/helpers'

const meta = {
  title: 'WIDGETS/Banner',
  component: Banner,
  tags: ['autodocs']
} satisfies Meta<typeof Banner>

export default meta

type Story = StoryObj<typeof meta>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Base: Story = {
  render: () => (
    <>
      <PageHeader variant='withButton' />
      <Banner {...mockBannerBase} />
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const OnlyPrimaryButton: Story = {
  render: () => (
    <>
      <PageHeader variant='withButton' />
      <Banner {...mockBannerOnlyPrimaryButton} />
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const WithAdvantages: Story = {
  render: () => (
    <>
      <PageHeader variant='withButton' />
      <Banner {...mockWithAdvantages} />
    </>
  )
}
