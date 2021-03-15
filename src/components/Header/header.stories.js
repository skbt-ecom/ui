import React from "react"

import { action } from "@storybook/addon-actions"

import HeaderMain from "./Main"
import HeaderHalva from "./Halva"

const story = {
  title: "Header",
  args: {
    classes: { logo: "asdasd", header: "asd" },
    onLogoClick: action("onChange"),
  },
  // https://storybook.js.org/docs/react/essentials/controls#annotation
  argTypes: {
    sticky: { type: "boolean" },
  },
}
export default story

function Wrapper({ children }) {
  return (
    <>
      {children}
      <div style={{ height: 1000 }} />
    </>
  )
}

function TemplateMain(args) {
  return (
    <Wrapper>
      <HeaderMain {...args} />
    </Wrapper>
  )
}

function TemplateHalva(args) {
  return (
    <Wrapper>
      <HeaderHalva {...args} />
    </Wrapper>
  )
}

export const Main = TemplateMain.bind({})
Main.args = {
  withButton: true,
  right: null,
}

export const Halva = TemplateHalva.bind({})
Halva.args = {
  right: null,
}
