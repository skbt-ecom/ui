import React from "react"
import MUIContainer from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  fixed: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: 425,
    },
  },
}))

export default function Container(props) {
  const classes = useStyles(props)

  return <MUIContainer fixed {...props} classes={classes} />
}
