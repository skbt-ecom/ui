import React from "react"

import { storiesOf } from "@storybook/react"
import { muiTheme } from "storybook-addon-material-ui"

import Box from "./Box"

import theme from "../../style/theme"

storiesOf("Box", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => <Box />)
