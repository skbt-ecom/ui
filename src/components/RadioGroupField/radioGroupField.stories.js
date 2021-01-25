import React from "react"

import { action } from "@storybook/addon-actions"
import { makeStyles } from "@material-ui/core/styles"

import RadioGroupField from "./RadioGroupField"

const useStyles = makeStyles(() => ({
  formControlLabel: {
    marginRight: 30,
  },
}))

const items = [
  { value: "m", label: "Мужской" },
  { value: "f", label: "Женский" },
]

const story = {
  title: "RadioGroupField",
}
export default story

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
      // color={"secondary"}
    />
  )
}
