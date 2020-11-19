import React from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { muiTheme } from "storybook-addon-material-ui"

// Import our component from this folder
import Paper from "./Paper"

import theme from "../../style/theme"

storiesOf("Paper", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => <Paper>This is a sheet of paper.</Paper>)
