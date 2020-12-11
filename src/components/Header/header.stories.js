import React from "react"

import { muiTheme } from "storybook-addon-material-ui"

import HeaderHalva from "./Halva"

import theme from "../../style/theme"

export default {
  title: "Header",
  decorators: [muiTheme([theme])],
}

export function Halva() {
  return (
    <div style={{ border: "1px solid #000" }}>
      <HeaderHalva classes={{ logo: "asdasd", other: { header: "asd" } }} />
    </div>
  )
}

export function withRightBlock() {
  return (
    <div style={{ border: "1px solid #000" }}>
      <HeaderHalva classes={{ logo: "asdasd", other: { header: "asd" } }}>right</HeaderHalva>
    </div>
  )
}
