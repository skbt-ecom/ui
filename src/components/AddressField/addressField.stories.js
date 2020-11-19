import React from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { muiTheme } from "storybook-addon-material-ui"

// Import our component from this folder
import AddressField from "./AddressField"

import theme from "../../style/theme"

storiesOf("AddressField", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => (
    <AddressField
      onChange={action("onChange")}
      helperText={{ addressDadata: "Район, город, улица, дом" }}
      classes={{
        addressDadataClasses: { container: "class1" },
        flatInfoClasses: { container: "class2" },
      }}
    />
  ))
  .add("Errors", () => (
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
  ))
