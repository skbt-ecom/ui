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
    текст
  </UIButton>
)

export const Button = ButtonTemplate.bind({})
Button.args = {
  classes: { label: "my-label", root: "my-root" },
  color: "primary",
  variant: "contained",
  size: "large",
}
Button.argTypes = {
  size: {
    control: {
      type: "inline-radio",
      options: ["large", "medium", "small"],
    },
  },
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
  return <ButtonESIA {...args} />
}

export const ESIA = ESIATemplate.bind({})
ESIA.args = {}
ESIA.argTypes = {
  withouthDescr: { type: "boolean" },
}
