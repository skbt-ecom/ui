import React from "react"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
import { muiTheme } from "storybook-addon-material-ui"
import { action } from "@storybook/addon-actions"

// Import our component from this folder
import Header from "./Header"

import theme from "../../style/theme"

storiesOf("Header", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => <Header withButton onButtonClick={action("onButtonClick")} />)
  .add("withHalvaLogo", () => <Header type={"withHalvaLogo"} />)
  .add("withButtonProps", () => (
    <Header
      buttonProps={{ color: "secondary", label: "Присоединиться" }}
      onButtonClick={action("onButtonClick")}
    />
  ))
