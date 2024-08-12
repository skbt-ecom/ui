import type { Meta } from '@storybook/react'
import { InputControlMask } from '$/shared/ui'

const meta = {
  title: 'CONTROLLED FORM UI/InputControlMask',
  component: InputControlMask,
  parameters: {
    layout: 'centered'
  },
  // decorators: [
  //   (Story) => (
  //     <StorybookFormProvider validationSchema={mockSchema} defaultValues={mockDefaultValues}>
  //       <Story />
  //     </StorybookFormProvider>
  //   )
  // ],
  tags: ['autodocs']
} satisfies Meta<typeof InputControlMask>

export default meta

export const Base = () => {
  return <>here</>
}
