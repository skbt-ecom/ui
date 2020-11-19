import React from "react"

import { action } from "@storybook/addon-actions"
import { muiTheme } from "storybook-addon-material-ui"
import { makeStyles } from "@material-ui/core/styles"

import RadioGroupField from "./RadioGroupField"

import theme from "../../style/theme"

const useStyles = makeStyles(() => ({
  formControlLabel: {
    marginRight: 30,
  },
}))

const items = [
  { value: "m", label: "Мужской" },
  { value: "f", label: "Женский" },
]

export default {
  title: "RadioGroupField",
  decorators: [muiTheme([theme])],
}

export function Default() {
  const classes = useStyles()

  return (
    <RadioGroupField
      onChange={action("onChange")}
      items={items}
      label={"Ваш пол:"}
      classes={{
        formControlLabel: classes.formControlLabel,
      }}
      // row={false}
      defaultValue={"m"}
      // value={'m'}
    />
  )
}
