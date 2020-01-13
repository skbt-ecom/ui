import React from 'react';

import Container from '../Container';
import Logo from './Logo';
import PhoneMain from '../PhoneMain';
import Button from '../Button';

import useStyles from './styles';

const Header = props => {
  const classes = useStyles(props);
  const { left, right, LogoProps, ButtonProps, PhoneProps } = props;

  return (
    <header className={classes.header}>
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
            <PhoneMain
              {...PhoneProps}
              classes={{
                phoneContainer: classes.phoneContainer,
                ...PhoneProps.classes,
              }}
            />
            <Button
              color="primary"
              children="Оформить"
              {...ButtonProps}
              classes={{
                root: classes.buttonRoot,
                label: classes.buttonLabel,
                ...ButtonProps.classes,
              }}
            />
          </div>
        )}
      </Container>
    </header>
  );
};

Header.defaultProps = {
  LogoProps: {},
  ButtonProps: {},
  PhoneProps: {},
};

export default React.memo(Header);
