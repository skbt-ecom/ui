import React from "react"

import Typography from "@material-ui/core/Typography"
import AccordionDetails from "@material-ui/core/AccordionDetails"

import useStyles from "./styles"

const Answer = (props) => {
  const classes = useStyles(props)
  const { children } = props

  return (
    <AccordionDetails classes={{ root: classes.root }}>
      <Typography component="h5" className={classes.text}>
        {children}
      </Typography>
    </AccordionDetails>
  )
}

export default Answer
