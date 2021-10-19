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

import { useStyles, useRadioBtnClasses } from "./styles"

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

export default function RateForm({ title, onSubmit }) {
  const classes = useStyles()
  const radioBtnClasses = useRadioBtnClasses()

  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
      <FormLanding onSubmit={onSubmit}>
        <div className={classes.container}>
          <div className={classes.containerElement}>
            <RadioGroupBtn
              defaultValue={items[3].value}
              items={items}
              name="rating"
              numberType
              radioBtnClasses={radioBtnClasses}
            />
          </div>
          <p className={classes.fieldDescr}>Напишите ваши замечания и предложения</p>
          <TextField
            name="text"
            placeholder="Введите текст"
            multiline
            minRows={6}
            maxRows={6}
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
