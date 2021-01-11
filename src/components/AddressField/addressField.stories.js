import React from "react"

import { action } from "@storybook/addon-actions"

import AddressField from "./AddressField"

const story = {
  title: "AddressField",
}
export default story

export function Default() {
  return (
    <AddressField
      onChange={action("onChange")}
      helperText={{ addressDadata: "Район, город, улица, дом" }}
      classes={{
        addressDadataClasses: { container: "class1" },
        flatInfoClasses: { container: "class2" },
      }}
    />
  )
}

export function Errors() {
  return (
    <AddressField
      onChange={action("onChange")}
      error={{
        addressDadata: "addressDadata error txt",
        flat: "flat error text",
      }}
      helperText={{
        addressDadata: "addressDadata error txt",
        flat: "flat error text",
      }}
    />
  )
}
