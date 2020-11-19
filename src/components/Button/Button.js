import React from "react"
import Button from "@material-ui/core/Button"

import useStyles from "./styles"

export default function ButtonComponent(props) {
  const classes = useStyles(props)

  return (
    <Button
      {...props}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    />
  )
}
