import React, { useState } from "react"

import { action } from "@storybook/addon-actions"

import MultipleSelect from "./MultipleSelect"

const products = ["Халва", "ДК (денежный кредит)", "Зарплатная карта", "Ипотека"]

const MultipleSelectWrapper = (props) => {
  const [value, setValue] = useState([])

  const handleChange = (e) => {
    setValue(e.target.value)
    props.onChange(e)
  }

  return (
    <MultipleSelect
      onChange={handleChange}
      items={products}
      name="multipleSelect"
      value={value}
      label="Понравившийся продукт"
    />
  )
}

const story = {
  title: "MultipleSelect",
}
export default story

export function Default() {
  return <MultipleSelectWrapper onChange={action("onChange")} />
}
