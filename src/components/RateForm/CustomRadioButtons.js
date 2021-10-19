import React from "react"

import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core"

import MoodVeryBad from "./icons/MoodVeryBad"
import MoodBad from "./icons/MoodBad"
import MoodNeutral from "./icons/MoodNeutral"
import MoodSatisfied from "./icons/MoodSatisfied"
import MoodVerySatisfied from "./icons/MoodVerySatisfied"

import useStyles from "./styles"

export default function CustomRadioButtons({ valueRate, handleChange, formColor }) {
  const classes = useStyles()
  return (
    <RadioGroup
      className={classes.radioGroup}
      row
      name="rating"
      value={valueRate}
      onChange={handleChange}
    >
      <FormControlLabel
        value="1"
        className={classes.radioButton}
        control={
          <Radio
            color={formColor}
            icon={<MoodVeryBad fill="#9FA0A7" />}
            checkedIcon={<MoodVeryBad fill={formColor === "primary" ? "#3f50b5" : "#f44336"} />}
          />
        }
      />
      <FormControlLabel
        value="2"
        className={classes.radioButton}
        control={
          <Radio
            color={formColor}
            icon={<MoodBad fill="#9FA0A7" />}
            checkedIcon={<MoodBad fill={formColor === "primary" ? "#3f50b5" : "#f44336"} />}
          />
        }
      />
      <FormControlLabel
        value="3"
        className={classes.radioButton}
        control={
          <Radio
            color={formColor}
            icon={<MoodNeutral fill="#9FA0A7" />}
            checkedIcon={<MoodNeutral fill={formColor === "primary" ? "#3f50b5" : "#f44336"} />}
          />
        }
      />
      <FormControlLabel
        value="4"
        className={classes.radioButton}
        control={
          <Radio
            color={formColor}
            icon={<MoodSatisfied fill="#9FA0A7" />}
            checkedIcon={<MoodSatisfied fill={formColor === "primary" ? "#3f50b5" : "#f44336"} />}
          />
        }
      />
      <FormControlLabel
        value="5"
        className={classes.radioButton}
        control={
          <Radio
            color={formColor}
            icon={<MoodVerySatisfied fill="#9FA0A7" />}
            checkedIcon={
              <MoodVerySatisfied fill={formColor === "primary" ? "#3f50b5" : "#f44336"} />
            }
          />
        }
      />
    </RadioGroup>
  )
}
