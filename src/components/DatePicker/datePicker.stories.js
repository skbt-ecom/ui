import React from "react"

import { storiesOf } from "@storybook/react"
import { muiTheme } from "storybook-addon-material-ui"

import PickersProvider from "../PickersProvider"
import DatePicker from "./DatePicker"

import theme from "../../style/theme"

storiesOf("DatePicker", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => (
    <PickersProvider>
      <DatePicker />
    </PickersProvider>
  ))
  .add("set value", () => (
    <PickersProvider>
      <DatePicker value={new Date(2000, 1, 1)} />
    </PickersProvider>
  ))
  .add("max/min Date", () => (
    <PickersProvider>
      <DatePicker minDate={new Date()} maxDate={new Date(2019, 9, 1)} />
    </PickersProvider>
  ))
