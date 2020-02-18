import React from 'react';

import Container from '../Container';
import Logo from './Logo';
import PhoneMain from '../PhoneMain';
import Button from '../Button';

import { useHeaderStyles, usePhoneStyles, useButtonStyles } from './styles';

const Header = (props, ref) => {
  const classes = useHeaderStyles(props);
  const phoneClasses = usePhoneStyles(props.PhoneProps);
  const buttonClasses = useButtonStyles(props.ButtonProps);
  const { left, right, LogoProps, ButtonProps, PhoneProps } = props;

  return (
    <header className={classes.header} ref={ref}>
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
            <Button
              color="primary"
              children="Оформить"
              {...ButtonProps}
              classes={buttonClasses}
            />
          </div>
        )}
      </Container>
    </header>
  );
};

const ForwardedHeader = React.forwardRef(Header);

ForwardedHeader.defaultProps = {
  LogoProps: {},
  ButtonProps: {},
  PhoneProps: {},
};
export default React.memo(ForwardedHeader);
