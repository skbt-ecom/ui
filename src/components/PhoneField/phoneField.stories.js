import React, { useState } from "react"

import { action } from "@storybook/addon-actions"

import PhoneField from "./PhoneField"

const PhoneFieldWrapper = (props) => {
  const [value, setValue] = useState("")

  const handleChange = (value) => {
    setValue(value)
    props.onChange(value)
  }

  const handleBlur = (fieldName) => (valueBlur) => {
    console.log(fieldName)
    props.onBlur(valueBlur)
  }

  return (
    <PhoneField {...props} onChange={handleChange} value={value} onBlur={handleBlur("phone")} />
  )
}

const story = {
  title: "PhoneField",
}
export default story

export function Default() {
  return (
    <PhoneFieldWrapper
      label={"Телефон"}
      onChange={action("onChange")}
      onBlur={action("onBlur")}
      defaultValue={"8"}
      // lazy={false}
      // placeholderChar={' '}
    />
  )
}
