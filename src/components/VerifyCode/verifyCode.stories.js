import React from "react"
import Typography from "@material-ui/core/Typography"

import { action } from "@storybook/addon-actions"

import VerifyCode from "./VerifyCode"

const story = {
  title: "VerifyCode",
  args: {
    onChange: action("onChange"),
  },
  // https://storybook.js.org/docs/react/essentials/controls#annotation
  argTypes: {
    autoFocus: { type: "boolean" },
    error: { type: "boolean" },
    value: { type: "string" },
    classes: { type: "object" },
    errorMsg: { type: "string" },
    disabled: { type: "boolean" },
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
