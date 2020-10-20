import React from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { muiTheme } from "storybook-addon-material-ui"

// Import our component from this folder
import DadataAddress from "./DadataAddress"
import DadataAddressFlat from "./DadataAddressFlat"
import DadataFio from "./DadataFio"
import DadataAuto from "./DadataAuto"

import theme from "../../style/theme"

const DadataAddressFlatWrapper = props => {
  const [incomingValue, setIncomingValue] = React.useState("")

  setTimeout(() => {
    setIncomingValue("г Саратов, ул им Чернышевского Н.Г. д.80 кв. 867")
  }, 1000)

  return (
    <DadataAddressFlat onBlur={action("onBlur")} label={"Адрес"} incomingValue={incomingValue} />
  )
}

storiesOf("DadataFields", module)
  .addDecorator(muiTheme([theme]))
  .add("Адрес", () => (
    <DadataAddress onBlur={action("onBlur")} label={"Адрес"} dadataOptions={{}} fullWidth />
  ))
  .add("ФИО", () => <DadataFio onBlur={action("onBlur")} label={"ФИО"} fullWidth />)
  .add("Адрес с кв", () => <DadataAddressFlatWrapper />)
  .add("Выбор авто", () => <DadataAuto onBlur={action("onBlur")} label={"Модель"} fullWidth />)
