import React from "react"

import { action } from "@storybook/addon-actions"

import HeaderMain from "./Main"
import HeaderHalva from "./Halva"

const story = {
  title: "Header",
  args: {
    PhoneProps: {
      phone: "8 800 100-10-20",
      phoneHint: "Для звонков по России (бесплатно)",
      phones: ["8 800 100-10-20"],
    },
    ButtonProps: {
      onClick: action("onClick"),
    },
    buttonText: "текст",
    classes: { logo: "asdasd", header: "asd" },
    onLogoClick: action("onChange"),
  },
  // https://storybook.js.org/docs/react/essentials/controls#annotation
  argTypes: {
    sticky: { type: "boolean" },
    noShadow: { type: "boolean" },
    withButton: { type: "boolean" },
    withPhone: { type: "boolean" },
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
export const Blue = TemplateMain.bind({})

function TemplateHalva(args) {
  return (
    <Wrapper>
      <HeaderHalva {...args} />
    </Wrapper>
  )
}
export const Red = TemplateHalva.bind({})
