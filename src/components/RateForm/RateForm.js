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
    label: <MoodBad />,
  },
  {
    value: 2,
    label: <MoodVeryBad />,
  },
  {
    value: 3,
    label: <MoodNeutral />,
  },
  {
    value: 4,
    label: <MoodSatisfied />,
  },
  {
    value: 5,
    label: <MoodVerySatisfied />,
  },
]

export default function RateForm({ title }) {
  const classes = useStyles()

  const handleSubmit = (values) => {
    console.log(values)
    // e.preventDefault()

    //   sendRequest("http://urt-web-app1:4037/", { text: data.text, rating: Number(data.rating) })
  }

  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
      <FormLanding onSubmit={handleSubmit}>
        <div className={classes.container}>
          <div className={classes.containerElement}>
            <RadioGroupBtn
              defaultValue={items[3].value}
              items={items}
              name="rating"
              radioBtnClasses={{ label: classes.label, input: classes.input, box: classes.box }}
            />
          </div>
          <p className={classes.fieldDescr}>Напишите ваши замечания и предложения</p>
          <TextField
            name="text"
            placeholder="Введите текст"
            fullWidth
            multiline
            rows={6}
            rowsMax={6}
            className={classes.textField}
          />
          <div className={classes.containerElement}>
            <SubmitButton className={classes.button}>Отправить</SubmitButton>
          </div>
        </div>
      </FormLanding>
    </div>
  )
}
