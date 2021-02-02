import React from "react"
import Typography from "@material-ui/core/Typography"

import { action } from "@storybook/addon-actions"

import VerifyCode from "./VerifyCode"

const story = {
  title: "VerifyCode",
}
export default story

export function Timer() {
  return (
    <VerifyCode
      onChange={action("onChange")}
      error
      helperText={
        <Typography variant="caption">
          Отправить код повторно через <strong>25 сек</strong>
        </Typography>
      }
    />
  )
}

export function link() {
  return (
    <VerifyCode
      onChange={action("onChange")}
      error
      helperText={
        <button onClick={() => undefined} type="button">
          Отправить код повторно
        </button>
      }
    />
  )
}

export function Error() {
  return <VerifyCode onChange={action("onChange")} error classes={{ errorTextRoot: "11111" }} />
}
