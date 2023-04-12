import React from "react"

import cn from "classnames"

import Button from "@material-ui/core/Button"

import Container from "../Container"
import Logo from "./Logo"
import PhoneMain from "../PhoneMain"

import { useButtonStyles, useHeaderStyles, usePhoneStyles } from "./styles"

const Header = (props, ref) => {
  const { left, right, LogoProps, withButton, ButtonProps, PhoneProps, sticky, children } = props
  const classes = useHeaderStyles(props)
  const phoneClasses = usePhoneStyles(PhoneProps)
  const buttonClasses = useButtonStyles(ButtonProps)

  return (
    <header className={cn(classes.header, { [classes.headerStatic]: !sticky })} ref={ref}>
      <Container className={classes.container}>
        {left || (
          <div className={classes.leftBlock}>
            <Logo {...LogoProps} />
          </div>
        )}

        {right || (
          <div className={classes.rightBlock}>
            <PhoneMain {...PhoneProps} classes={phoneClasses} />
            {withButton && <Button {...ButtonProps} classes={buttonClasses} />}
          </div>
        )}
      </Container>
      {children}
    </header>
  )
}

const ForwardedHeader = React.forwardRef(Header)

ForwardedHeader.defaultProps = {
  LogoProps: {},
  ButtonProps: { children: "Оформить" },
  PhoneProps: {},
  sticky: true,
}

export default ForwardedHeader
