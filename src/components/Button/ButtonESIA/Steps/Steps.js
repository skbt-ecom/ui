import React from "react"

import useStyles from "./styles"

export default function ButtonSteps() {
  const classes = useStyles()

  const steps = [
    "Нужно будет ввести данные для входа в Госуслуги",
    "Дать разрешение на доступ к вашим данным",
    "Заявка заполнится автоматически, и от вас не потребуется никаких справок",
    <>
      Вероятность одобрения будет выше <div className={classes.label}>30 %</div>
    </>,
  ]

  return (
    <div className={classes.steps}>
      <strong className={classes.title}>Используете Госуслуги? Получите решение быстрее.</strong>
      <ol className={classes.items}>
        {steps.map((step, i) => (
          <li className={classes.item} key={i}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  )
}
