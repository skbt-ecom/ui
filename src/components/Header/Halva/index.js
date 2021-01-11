import React from "react"
import cn from "classnames"

import HeaderContainer from "../HeaderContainer"

import useStyles from "./styles"

export default function Halva({ children, classes, onClick }) {
  const { other, ...rest } = classes || {}
  const currentClasses = useStyles({ classes: rest })

  return (
    <HeaderContainer classes={other}>
      <div
        role="button"
        className={cn(currentClasses.logo, onClick ? currentClasses.btn : "")}
        onClick={onClick}
      />
      {children}
    </HeaderContainer>
  )
}