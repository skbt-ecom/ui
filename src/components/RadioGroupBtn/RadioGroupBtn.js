import React from "react"

import RadioBtn from "./RadioBtn"

export default function RadioGroupBtn({
  className,
  items = [],
  name,
  radioBtnClasses,
  numberType = false,
  onChange,
  value,
}) {
  const handleChange = (e) => {
    const newValue = numberType ? Number(e.target.value) : e.target.value
    onChange(newValue)
  }

  return (
    <div className={className}>
      {items.map((item, i) => (
        <RadioBtn
          key={i}
          item={item}
          name={name}
          onChange={handleChange}
          selectedValue={value}
          classes={radioBtnClasses}
        />
      ))}
    </div>
  )
}
