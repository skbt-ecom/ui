import React from "react"
import useStyles from "./styles"

export default function ButtonWText({ StartIcon, onClick, disabled }) {
  const classes = useStyles()

  return (
    <div className={classes.bwtContainer}>
      <div className={classes.bwtLeft}>
        <span className={classes.iconESIA}>{StartIcon}</span>
        <p className={classes.bwtText}>
          <strong>Используете Госуслуги? Получите решение быстрее.</strong>
        </p>
      </div>
      <button onClick={onClick} className={classes.bwtButton} disabled={disabled} type="button">
        Войти
      </button>
    </div>
  )
}
