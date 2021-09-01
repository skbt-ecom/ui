import React from "react"
import cn from "classnames"

import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Container from "../../Container"
import PhoneMain from "../../PhoneMain"

import { useStyles, usePhoneStyles, useButtonStyles } from "./styles"

export default function HeaderContainer(props) {
  const {
    children,
    right,
    Logo,
    sticky = false,
    onLogoClick,
    withButton,
    PhoneProps,
    ButtonProps,
    buttonText = "оформить",
  } = props
  const classes = useStyles(props)
  const phoneClasses = usePhoneStyles(PhoneProps)
  const buttonClasses = useButtonStyles(ButtonProps)

  return (
    <header className={cn(classes.header, sticky && classes.stickyHeader)}>
      <Container>
        <nav>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={classes.navigation}
          >
            <button
              type="button"
              className={cn(classes.logo, onLogoClick && classes.btn)}
              onClick={onLogoClick}
            >
              <Logo />
            </button>
            {children}
            {right || (
              <Box display="flex" alignItems="center">
                <PhoneMain {...PhoneProps} classes={phoneClasses} />
                {withButton && (
                  <Button {...ButtonProps} classes={buttonClasses}>
                    {buttonText}
                  </Button>
                )}
              </Box>
            )}
          </Box>
        </nav>
      </Container>
    </header>
  )
}
