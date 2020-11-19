import React from "react"

import { action } from "@storybook/addon-actions"

import { muiTheme } from "storybook-addon-material-ui"

import Button from "./Button"
import ButtonESIA from "./ButtonESIA"

import theme from "../../style/theme"
import themeHalva from "../../style/themeHalva"

export default {
  title: "Button",
  decorators: [muiTheme([theme])],
}

export function Default() {
  return (
    <>
      <Button onClick={action("clicked btn")} classes={{ label: "my-label", root: "my-root" }}>
        Button
      </Button>
      <br />
      <br />
      <Button
        color="secondary"
        onClick={action("clicked btn")}
        classes={{ label: "my-label", root: "my-root" }}
      >
        Button
      </Button>
      <br />
      <br />
      <Button
        variant="outlined"
        onClick={action("clicked btn")}
        classes={{ label: "my-label", root: "my-root" }}
      >
        Button
      </Button>
      <br />
      <br />
      <Button disabled color="secondary" onClick={action("clicked btn")}>
        Button
      </Button>
    </>
  )
}

/**
 * Footer in Halva theme
 */
export function Halva() {
  return <Button onClick={action("clicked btn")}>Button</Button>
}

Halva.story = {
  decorators: [muiTheme([themeHalva])],
}

export function ESIA() {
  return (
    <ButtonESIA
      onClick={action("ESIA clicked")}
      // withouthDescr // to remove description text
    >
      Вход через цифровой профиль
    </ButtonESIA>
  )
}
