import React from "react"
import RateForm from "./RateForm"

// const halvaTitle = "Оцените удобство оформления карты Халва!"

const story = {
  title: "RateForm",
  args: {
    title: "Оцените удобство оформления заявки на кредит",
  },
}
export default story

export function Main(args) {
  function handleSubmit(values) {
    console.log(values)
  }

  return <RateForm {...args} onSubmit={handleSubmit} />
}
