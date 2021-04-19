import React from "react"
import cn from "classnames"

import useStyles from "./styles"
import IconEntrance from "./Icons/Entrance"

export default function ButtonWText({ StartIcon, onClick, disabled }) {
  const classes = useStyles()

  // add "Вход" - https://web.dev/button-name/
  return (
    <div className={classes.bwtContainer}>
      <div className={classes.bwtLeft}>
        <span className={classes.iconESIA}>{StartIcon}</span>
        <div className={cn(classes.bwtText, classes.bwtTextShort)}>
          <strong>
            Вход через <br />
            Цифровой профиль
          </strong>
        </div>
        <p className={cn(classes.bwtText, classes.bwtTextLong)}>
          <strong>Используете Госуслуги? Получите решение быстрее.</strong>
        </p>
      </div>
      <button onClick={onClick} className={classes.bwtButtonMob} disabled={disabled} type="button">
        <IconEntrance disabled={disabled} />
        Войти
      </button>
      <button onClick={onClick} className={classes.bwtButton} disabled={disabled} type="button">
        Войти
      </button>
    </div>
  )
}
