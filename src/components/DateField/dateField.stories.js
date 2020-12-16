import React from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { muiTheme } from "storybook-addon-material-ui"

// Import our component from this folder
import DateField from "./DateField"

import theme from "../../style/theme"

storiesOf("DateField", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => (
    <DateField
      onChange={action("onChange")}
      label={"DateField"}
      max={new Date()}
      defaultValue={"10.10.2010"}
    />
  ))
