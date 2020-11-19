import React from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { muiTheme } from "storybook-addon-material-ui"

// Import our component from this folder
import Container from "./Container"

import theme from "../../style/theme"

storiesOf("Container", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => (
    <Container>
      <div style={{ backgroundColor: "#cfe8fc", height: "50vh" }} />
    </Container>
  ))
