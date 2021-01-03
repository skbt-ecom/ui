import React from "react"

import cn from "classnames"

import Button from "@material-ui/core/Button"

import Container from "../Container"
import Logo from "./Logo"
import PhoneMain from "../PhoneMain"

import { useHeaderStyles, usePhoneStyles, useButtonStyles } from "./styles"

const Header = (props, ref) => {
  const classes = useHeaderStyles(props)
  const phoneClasses = usePhoneStyles(props.PhoneProps)
  const buttonClasses = useButtonStyles(props.ButtonProps)
  const { left, right, LogoProps, withButton, ButtonProps, PhoneProps } = props

  return (
    <header className={cn(classes.header, { [classes.headerStatic]: props.static })} ref={ref}>
      <Container className={classes.container}>
        {left ? (
          left
        ) : (
          <div className={classes.leftBlock}>
            <Logo {...LogoProps} />
          </div>
        )}

        {right ? (
          right
        ) : (
          <div className={classes.rightBlock}>
            <PhoneMain {...PhoneProps} classes={phoneClasses} />
            {withButton && (
              <Button {...ButtonProps} classes={buttonClasses}>
                Оформить
              </Button>
            )}
          </div>
        )}
      </Container>
    </header>
  )
}

const ForwardedHeader = React.forwardRef(Header)

ForwardedHeader.defaultProps = {
  LogoProps: {},
  ButtonProps: {},
  PhoneProps: {},
  static: false,
}
export default React.memo(ForwardedHeader)
