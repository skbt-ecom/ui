import React from "react"

import { MuiPickersUtilsProvider } from "@material-ui/pickers"

import LuxonUtils from "@date-io/luxon"

export default function PickersProvider(props) {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils} locale="ru">
      {props.children}
    </MuiPickersUtilsProvider>
  )
}
