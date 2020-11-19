import React from "react"
import useStyles from "./styles"

const Phone = props => {
  const classes = useStyles(props)
  const { number } = props

  return (
    <a rel="nofollow" href={`tel:${number}`} className={classes.phoneNum}>
      {number}
    </a>
  )
}

export default Phone
