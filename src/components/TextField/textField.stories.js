import React from "react"

import { action } from "@storybook/addon-actions"

import TextField from "."

const story = {
  title: "TextField",
}
export default story

export function Default() {
  return <TextField onChange={action("onChange")} label="Label" />
}
