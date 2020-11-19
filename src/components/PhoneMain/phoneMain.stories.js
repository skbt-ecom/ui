import React from "react"

import { storiesOf } from "@storybook/react"

import { muiTheme } from "storybook-addon-material-ui"

import PhoneMain from "./PhoneMain"

import theme from "../../style/theme"

storiesOf("PhoneMain", module)
  .addDecorator(muiTheme([theme]))
  .add("Default", () => <PhoneMain />)
  .add("Custom phone", () => <PhoneMain phone="8 800 100-77-72" />)
  .add("Custom hint", () => <PhoneMain phoneHint="Custom hint" />)
  .add("Custom phones", () => <PhoneMain phones={["8 800 100-77-72", "8 800 100-10-20"]} />)
