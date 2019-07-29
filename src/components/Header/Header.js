import React from 'react';

import Container from '../Container';

import logo from './logo.svg';
import halvaLogo from './halva.svg';

import useStyles from './styles';

const Header = React.memo(props => {
  const classes = useStyles(props);
  const { logoHref, phone, phoneHint, withHalvaLogo } = props;

  return (
    <Container className={classes.container}>
      <a href={logoHref} className={withHalvaLogo ? classes.withHalva : ''}>
        <img className={classes.logo} src={logo} alt="logo" />
      </a>
      {withHalvaLogo ? (
        <div>
          <img className={classes.halvaLogo} src={halvaLogo} alt="halva" />
        </div>
      ) : (
        <div className={classes.phoneContainer}>
          <a rel="nofollow" href={`tel:${phone}`} className={classes.phoneNum}>
            {phone}
          </a>
          <p className={classes.phoneHint}>{phoneHint}</p>
        </div>
      )}
    </Container>
  );
});

Header.defaultProps = {
  logoHref: '/',
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
  withHalvaLogo: false,
};

export default Header;
