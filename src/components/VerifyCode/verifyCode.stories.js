import React from "react"
import Typography from "@material-ui/core/Typography"

import { action } from "@storybook/addon-actions"

import VerifyCode from "./VerifyCode"

const story = {
  title: "VerifyCode",
  args: {
    autoFocus: false,
    error: false,
    onChange: action("onChange"),
  },
  argTypes: {
    value: { type: "string" },
    classes: { type: "object" },
    helperText: {
      table: {
        disable: true,
      },
    },
  },
}
export default story

const Template = (args) => <VerifyCode {...args} />

export const Timer = Template.bind({})

Timer.args = {
  helperText: (
    <Typography variant="caption">
      Отправить код повторно через <strong>25 сек</strong>
    </Typography>
  ),
}
