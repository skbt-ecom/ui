import React from "react"
import ButtonWText from "./ButtonWText"
import Steps from "./Steps"
import Description from "./Description"
import IconGosUslugi from "./Icons/GosUslugi"

import useStyles from "./styles"

export default function ButtonESIA({ withouthDescr = false, onClick, disabled, ...props }) {
  const classes = useStyles(props)
  const StartIcon = <IconGosUslugi disabled={disabled} />

  return (
    <div className={classes.buttonContainer}>
      <ButtonWText
        classes={classes.bwtContainer}
        StartIcon={StartIcon}
        onClick={onClick}
        disabled={disabled}
      />
      <Steps />
      {!withouthDescr && <Description />}
    </div>
  )
}
