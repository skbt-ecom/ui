import React from "react"
import PropTypes from "prop-types"
import RadioBtn from "./RadioBtn"

import useStyles from "./styles"

const RadioGroupBtn = React.memo((props) => {
  const classes = useStyles(props)

  const onChange = (e) => {
    const value = props.numberType ? Number(e.target.value) : e.target.value
    props.onChange(value)
  }

  const { items, name, radioBtnClasses } = props
  return (
    <div className={classes.container}>
      {items.map((item, i) => (
        <RadioBtn
          key={i}
          item={item}
          name={name}
          onChange={onChange}
          selectedValue={props.value}
          className={classes.item}
          classes={radioBtnClasses}
        />
      ))}
    </div>
  )
})

RadioGroupBtn.defaultProps = {
  items: [{ value: "", label: "" }],
  numberType: false,
}

RadioGroupBtn.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.number,
    })
  ),
  numberType: PropTypes.bool,
}
export default RadioGroupBtn
