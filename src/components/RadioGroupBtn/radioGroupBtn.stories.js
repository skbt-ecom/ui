import React from "react"

import { action } from "@storybook/addon-actions"

import RadioGroupBtn from "./RadioGroupBtn"

const items = [
  { value: 100000, label: "100 000 P" },
  { value: 50000, label: "50 000 P" },
  { value: 5340, label: "5340 P" },
  { value: 7409, label: "7409 P" },
  { value: 9492, label: "9492 P" },
]

const story = {
  title: "RadioGroupBtn",
}
export default story

export function Default() {
  return (
    <RadioGroupBtn
      onChange={action("onChange")}
      numberType
      items={items}
      name="prices"
      value={5340}
      classes={{ container: "container-class", item: "item-class" }}
    />
  )
}
