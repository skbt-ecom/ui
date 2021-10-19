import React from "react"
import RateForm from "./RateForm"

const halvaTitle = "Оцените удобство оформления карты Халва!"

const story = {
  title: "RateForm",
  args: {
    formColor: "primary",
    title: "Оцените удобство оформления заявки на кредит",
  },
}
export default story

export function Main(args) {
  return <RateForm {...args} />
}

export function Halva() {
  return <RateForm formColor="secondary" title={halvaTitle} />
}
