import React from "react"

import cn from "classnames"

import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"

import HeaderContainer from "../HeaderContainer"
import PhoneMain from "../../PhoneMain"

import { useStyles, usePhoneStyles, useButtonStyles } from "./styles"

const defBtnProps = { children: "Оформить" }

export default function Header({
  right,
  sticky,
  classes = {},
  onLogoClick,
  PhoneProps,
  withButton,
  ButtonProps,
}) {
  const { logo, ...rest } = classes
  const ownClasses = useStyles({ classes: { logo } })
  const phoneClasses = usePhoneStyles(PhoneProps)
  const buttonClasses = useButtonStyles(ButtonProps)

  return (
    <HeaderContainer classes={rest} sticky={sticky}>
      <button
        type="button"
        className={cn(ownClasses.logo, onLogoClick ? ownClasses.btn : "")}
        onClick={onLogoClick}
      >
        -
      </button>
      {right || (
        <Box display="flex" alignItems="center">
          <PhoneMain {...PhoneProps} classes={phoneClasses} />
          {withButton && <Button {...defBtnProps} {...ButtonProps} classes={buttonClasses} />}
        </Box>
      )}
    </HeaderContainer>
  )
}
