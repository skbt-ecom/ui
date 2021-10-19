import React from "react"

import FormLanding from "../FormLanding"
import SubmitButton from "../FormLanding/fields/SubmitButton"
import TextField from "../FormLanding/fields/TextField"
import RadioGroupBtn from "../FormLanding/fields/RadioGroupBtn"

import MoodBad from "./icons/MoodBad"
import MoodVeryBad from "./icons/MoodVeryBad"
import MoodNeutral from "./icons/MoodNeutral"
import MoodSatisfied from "./icons/MoodSatisfied"
import MoodVerySatisfied from "./icons/MoodVerySatisfied"

// import sendRequest from "../../utils/sendRequest"

import useStyles from "./styles"

const items = [
  {
    value: 1,
    label: <MoodBad fill="#9FA0A7" />,
  },
  {
    value: 2,
    label: <MoodVeryBad fill="#9FA0A7" />,
  },
  {
    value: 3,
    label: <MoodNeutral fill="#9FA0A7" />,
  },
  {
    value: 4,
    label: <MoodSatisfied fill="#9FA0A7" />,
  },
  {
    value: 5,
    label: <MoodVerySatisfied fill="#9FA0A7" />,
  },
]

export default function RateForm({ title }) {
  const classes = useStyles()

  const handleSubmit = (values) => {
    console.log(values)
    // e.preventDefault()

    // if (data.rating !== null) {
    //   setData({ ...data, error: false })
    //   sendRequest("http://urt-web-app1:4037/", { text: data.text, rating: Number(data.rating) })
    // } else {
    //   setData({ ...data, error: true })
    // }
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <FormLanding onSubmit={handleSubmit}>
        <RadioGroupBtn defaultValue={items[3].value} items={items} name="rating" />
        <p className={classes.fieldDescr}>Напишите ваши замечания и предложения</p>
        <TextField
          name="text"
          placeholder="Введите текст"
          fullWidth
          multiline
          rows={6}
          rowsMax={6}
          className={classes.textField}
          // helperText="Пожалуйста, поставьте оценку"
        />
        <SubmitButton className={classes.button}>Отправить</SubmitButton>
      </FormLanding>
    </div>
  )
}
