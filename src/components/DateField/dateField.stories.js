import React, { useState } from "react"

import { muiTheme } from "storybook-addon-material-ui"

import DateField from "./DateField"

import theme from "../../style/theme"

export default {
  title: "DateField",
  decorators: [muiTheme([theme])],
}

export function Default() {
  const [value, setValue] = useState("")

  function handleChange(e) {
    setValue(e.target.value)
  }

  return <DateField value={value} onChange={handleChange} label="DateField" max={new Date()} />
}
