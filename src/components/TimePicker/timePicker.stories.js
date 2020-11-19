import React from "react"

import { muiTheme } from "storybook-addon-material-ui"

import PickersProvider from "../PickersProvider"
import TimePicker from "./TimePicker"

import theme from "../../style/theme"

export default {
  title: "TimePicker",
  decorators: [muiTheme([theme])],
}

export function Default() {
  return (
    <PickersProvider>
      <TimePicker />
    </PickersProvider>
  )
}
