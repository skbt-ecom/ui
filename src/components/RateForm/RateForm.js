import React, { useState } from "react"
import propTypes from "prop-types"
import { Button, TextField } from "@material-ui/core"
import useStyles from "./styles"
import CustomRadioButtons from "./CustomRadioButtons"
import sendRequest from "../../utils/sendRequest"

export default function RateForm({ formColor, title }) {
  const classes = useStyles()
  const [data, setData] = useState({ rating: null, text: "", error: false })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (data.rating !== null) {
      setData({ ...data, error: false })
      sendRequest("http://urt-web-app1:4037/", { text: data.text, rating: Number(data.rating) })
    } else {
      setData({ ...data, error: true })
    }
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <CustomRadioButtons
          valueRate={data.rating}
          handleChange={handleChange}
          formColor={formColor}
        />
        <p className={classes.fieldDescr}>Напишите ваши замечания и предложения</p>
        <TextField
          InputProps={{
            classes: {
              root:
                formColor === "primary"
                  ? classes.cssOutlinedInputBlue
                  : classes.cssOutlinedInputRed,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          name="text"
          placeholder="Введите текст"
          fullWidth
          multiline
          rows={6}
          rowsMax={6}
          value={data.text}
          onChange={handleChange}
          className={classes.textField}
          error={data.error}
          helperText={data.error ? "Пожалуйста, поставьте оценку" : " "}
        />
        <Button color={formColor} className={classes.button} type="submit">
          Отправить
        </Button>
      </form>
    </div>
  )
}

RateForm.propTypes = {
  formColor: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}
