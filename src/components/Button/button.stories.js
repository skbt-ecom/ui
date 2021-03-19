import React from "react"

import { action } from "@storybook/addon-actions"

import UIButton from "."
import ButtonESIA from "./ButtonESIA"

const story = {
  title: "Button",
  args: {
    onClick: action("click"),
  },
  argTypes: {
    disabled: { type: "boolean" },
  },
}
export default story

const ButtonTemplate = (args) => (
  <UIButton {...args} onClick={action("clicked btn")}>
    Button
  </UIButton>
)

export const Button = ButtonTemplate.bind({})
Button.args = {
  classes: { label: "my-label", root: "my-root" },
  color: "primary",
  variant: "contained",
}
Button.argTypes = {
  color: {
    control: {
      type: "inline-radio",
      options: ["primary", "secondary"],
    },
  },
  variant: {
    control: {
      type: "inline-radio",
      options: ["text", "contained", "outlined"],
    },
  },
}

function ESIATemplate(args) {
  return <ButtonESIA {...args}>Вход через цифровой профиль</ButtonESIA>
}

export const ESIA = ESIATemplate.bind({})
ESIA.args = {}
ESIA.argTypes = {
  withouthDescr: { type: "boolean" },
}
