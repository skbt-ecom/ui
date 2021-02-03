import React, { useState } from "react"

import { action } from "@storybook/addon-actions"

import Select from "./Select"

const socialStatuses = [
  { value: "Работодатель", label: "Работодатель" },
  { value: "Пенсионер", label: "Пенсионер" },
  { value: "Работающий пенсионер", label: "Работающий пенсионер" },
  { value: "Работает / Служит", label: "Работает / Служит" },
  { value: "ИП", label: "ИП" },
]

const SelectWrapper = (props) => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
    props.onChange(e)
  }

  return (
    <Select
      onChange={handleChange}
      items={socialStatuses}
      name="select"
      value={value}
      label="Статус"
    />
  )
}

const story = {
  title: "Select",
}
export default story

export function Default() {
  return <SelectWrapper onChange={action("onChange")} />
}
