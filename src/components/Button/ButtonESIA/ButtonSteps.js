import React from "react"
import useStyles from "./styles"

const ButtonSteps = () => {
  const classes = useStyles()
  const steps = [
    "Нужно будет ввести данные для входа в Госуслуги",
    "Дать разрешение на доступ к вашим данным",
    "Заявка заполнится автоматически, и от вас не потребуется никаких справок",
    "Вероятность одобрения будет выше на 30%",
  ]

  return (
    <div className={classes.buttonSteps}>
      <strong className={classes.buttonStepsTitle}>
        Используете Госуслуги? Получите решение быстрее.
      </strong>
      <ol className={classes.stepsList}>
        {steps.map(step => (
          <li className={classes.step}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

export default ButtonSteps
