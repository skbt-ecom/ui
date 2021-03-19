import React from "react"

import IconShield from "../Icons/Shield"

import useStyles from "./styles"

export default function Description() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <IconShield />
      </div>
      <div className={classes.text}>
        <div className={classes.title}>Это надежно и совершенно безопасно</div>
        <div className={classes.hint}>
          Перед выдачей кредита мы дополнительно позвоним вам и запросим подтверждение
        </div>
      </div>
    </div>
  )
}
