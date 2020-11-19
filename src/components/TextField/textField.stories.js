import React from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { muiTheme } from "storybook-addon-material-ui"

// Import our component from this folder
import TextField from "./TextField"

import theme from "../../style/theme"

storiesOf("TextField", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => <TextField onChange={action("onChange")} label="Label" />)
