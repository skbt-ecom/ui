import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: 425,
    },
  },
}))

const ContainerComponent = React.memo(props => {
  const classes = useStyles()

  return <Container classes={{ fixed: classes.root }} fixed {...props} />
})

export default ContainerComponent
