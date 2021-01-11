import React from "react"
import Link from "@material-ui/core/Link"
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
      error={true}
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
      error={true}
      helperText={
        <Link
          onClick={() => undefined}
          component={"button"}
          underline={"always"}
          color={"textPrimary"}
        >
          Отправить код повторно
        </Link>
      }
    />
  )
}

export function Error() {
  return (
    <VerifyCode onChange={action("onChange")} error={true} classes={{ errorTextRoot: "11111" }} />
  )
}
