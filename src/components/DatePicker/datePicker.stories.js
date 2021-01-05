import React from "react"

import PickersProvider from "../PickersProvider"
import DatePicker from "./DatePicker"

const story = {
  title: "DatePicker",
}
export default story

export function Default() {
  return (
    <PickersProvider>
      <DatePicker />
    </PickersProvider>
  )
}

export function withMaxMinDate() {
  const date = new Date()

  return (
    <PickersProvider>
      <DatePicker minDate={date} maxDate={new Date(date.getFullYear(), 9, 1)} />
    </PickersProvider>
  )
}
