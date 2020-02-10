import React from 'react';

import Container from '../Container';
import Logo from './Logo';
import SupportPhone from '../SupportPhone';

import logo from './logo.svg';

import useStyles from './styles';

const renderRight = (type, { classes, supportPhoneComponentProps }) => {
  switch (type) {
    case 'withHalvaLogo':
      return <Logo classes={classes} />;
    default:
      return <SupportPhone {...supportPhoneComponentProps} />;
  }
};

const Header = props => {
  const classes = useStyles(props);

  const { logoHref, type } = props;
  const newButtonProps = props.buttonProps
    ? {
        ...props.buttonProps,
        isVisible: true,
      }
    : undefined;

  const supportPhoneComponentProps = {
    phone: props.phone,
    phoneHint: props.phoneHint,
    withButton: props.withButton || newButtonProps, // if props.buttonProps exist we must show button
    onButtonClick: props.onButtonClick,
    buttonProps: newButtonProps,
    classes: { phoneContainer: classes.phoneContainer },
  };

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <a
          href={logoHref}
          className={type === 'withHalvaLogo' ? classes.withHalva : ''}
        >
          <img className={classes.logo} src={logo} alt="logo" />
        </a>
        {renderRight(type, { classes, supportPhoneComponentProps })}
      </Container>
    </header>
  );
};

Header.defaultProps = {
  logoHref: '/',
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
  type: 'default',
  withButton: false,
  buttonProps: undefined,
};

export default React.memo(Header);
