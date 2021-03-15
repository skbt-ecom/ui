import React from "react"
import cn from "classnames"

import HeaderContainer from "../HeaderContainer"

import useStyles from "./styles"

export default function Halva({ right, classes = {}, onLogoClick }) {
  const { logo, ...rest } = classes
  const btnClasses = useStyles({ classes: { logo } })

  return (
    <HeaderContainer classes={rest}>
      <button
        type="button"
        className={cn(btnClasses.logo, onLogoClick && btnClasses.btn)}
        onClick={onLogoClick}
      >
        -
      </button>
      {right}
    </HeaderContainer>
  )
}
