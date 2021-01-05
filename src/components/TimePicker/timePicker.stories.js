import React from "react"

import PickersProvider from "../PickersProvider"
import TimePicker from "./TimePicker"

const story = {
  title: "TimePicker",
}
export default story

export function Default() {
  return (
    <PickersProvider>
      <TimePicker />
    </PickersProvider>
  )
}
