import React from "react"

import { action } from "@storybook/addon-actions"

import Button from "."
import ButtonESIA from "./ButtonESIA"

const story = {
  title: "Button",
}
export default story

const Template = (args) => (
  <Button {...args} onClick={action("clicked btn")}>
    Button
  </Button>
)

export const Primary = Template.bind({})

Primary.args = {
  classes: { label: "my-label", root: "my-root" },
}

export const Secondary = Template.bind({})

Secondary.args = {
  color: "secondary",
}

export const Outlined = Template.bind({})

Outlined.args = {
  variant: "outlined",
}

export const SecondaryDisabled = Template.bind({})

SecondaryDisabled.args = {
  color: "secondary",
  disabled: true,
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
