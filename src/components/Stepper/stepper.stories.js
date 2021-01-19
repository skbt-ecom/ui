import React from "react"

import Stepper from "./Stepper"

const stepsVertical = [
  {
    label: "Ваша заявка принята",
    content: "Загрузка",
  },
  {
    label: "Заявка рассматривается",
    content: "Необходимо добавить следующие документы",
  },
  {
    label: "Получено решение",
    content: "Загрузка",
  },
  {
    label: "Передано в доставку",
    content: "Загрузка",
  },
  {
    label: "Выдано",
    content: "Загрузка",
  },
]

const stepsHorizontal = [
  {
    label: "Паспортные данные",
    content: "+10% к одобрению",
  },
  {
    label: "Занятость",
    content: "+15% к одобрению",
  },
  {
    label: "Адрес доставки",
    content: "+20% к одобрению",
  },
]

const story = {
  title: "Stepper",
}
export default story

export function Vertical() {
  return <Stepper steps={stepsVertical} orientation="vertical" />
}

export function Horizontal() {
  return <Stepper steps={stepsHorizontal} activeStep={1} />
}
