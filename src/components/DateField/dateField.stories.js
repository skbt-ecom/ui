import React, { useState } from "react"

import DateField from "./DateField"

const story = {
  title: "DateField",
}
export default story

export function Default() {
  const [value, setValue] = useState("")

  function handleChange(e) {
    setValue(e.target.value)
  }

  return <DateField value={value} onChange={handleChange} label="DateField" max={new Date()} />
}
