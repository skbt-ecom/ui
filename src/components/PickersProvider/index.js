import React from "react"

import { MuiPickersUtilsProvider } from "@material-ui/pickers"

import DateFnsUtils from "@date-io/date-fns"
import format from "date-fns/format"
import ru from "date-fns/locale/ru"

class RuLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, "LLLL yyyy", { locale: this.locale })
  }

  getDatePickerHeaderText(date) {
    return format(date, "dd MMMM", { locale: this.locale })
  }
}

export default function PickersProvider({ children }) {
  return (
    <MuiPickersUtilsProvider utils={RuLocalizedUtils} locale={ru}>
      {children}
    </MuiPickersUtilsProvider>
  )
}
