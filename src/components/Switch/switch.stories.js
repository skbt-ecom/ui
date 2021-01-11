import React from "react"

import { action } from "@storybook/addon-actions"
import { makeStyles } from "@material-ui/core/styles"

import Switch from "./Switch"

const useStyles = makeStyles(() => ({
  root: {
    marginRight: 0,
  },

  label: {
    fontSize: 16,
  },
}))

const story = {
  title: "Switch",
}
export default story

export function Default() {
  const classes = useStyles()

  return (
    <Switch
      onChange={action("onChange")}
      label={"Label"}
      classes={{ root: classes.root, label: classes.label }}
    />
  )
}
