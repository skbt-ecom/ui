import React from "react"

import { action } from "@storybook/addon-actions"

import DadataAddress from "./DadataAddress"
import DadataAddressFlat from "./DadataAddressFlat"
import DadataFio from "./DadataFio"
import DadataAuto from "./DadataAuto"

const DadataAddressFlatWrapper = () => {
  const [incomingValue, setIncomingValue] = React.useState("")

  setTimeout(() => {
    setIncomingValue("г Саратов, ул им Чернышевского Н.Г., д 80, кв 867")
  }, 1000)

  return <DadataAddressFlat onBlur={action("onBlur")} label="Адрес" incomingValue={incomingValue} />
}

const story = {
  title: "DadataFields",
}
export default story

export function dadataAddress() {
  return <DadataAddress onBlur={action("onBlur")} label="Адрес" dadataOptions={{}} fullWidth />
}

export function dadataFio() {
  return <DadataFio onBlur={action("onBlur")} label="ФИО" fullWidth />
}

export function dadataAddressFlat() {
  return <DadataAddressFlatWrapper />
}

export function dadataAuto() {
  return <DadataAuto onBlur={action("onBlur")} label="Модель" fullWidth />
}
