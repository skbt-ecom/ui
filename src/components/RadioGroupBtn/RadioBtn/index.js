import React from "react"

import useStyles from "./styles"

const RadioBtn = React.memo((props) => {
  const classes = useStyles(props)
  const { item, name, selectedValue } = props

  return (
    <label className={classes.label}>
      <input
        type="radio"
        name={name}
        className={classes.input}
        onChange={props.onChange}
        value={item.value}
        checked={item.value === selectedValue}
      />
      <div className={classes.box}>
        <span>{item.label}</span>
      </div>
    </label>
  )
})

export default RadioBtn
