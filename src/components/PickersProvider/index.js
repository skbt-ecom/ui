import React from "react"

import { MuiPickersUtilsProvider } from "@material-ui/pickers"

import LuxonUtils from "@date-io/luxon"

export default function PickersProvider({ children }) {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils} locale="ru">
      {children}
    </MuiPickersUtilsProvider>
  )
}
