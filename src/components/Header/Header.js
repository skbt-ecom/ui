import React from 'react';

import Container from '../Container';
import SupportPhone from '../SupportPhone';

import logo from './logo.svg';
import halvaLogo from './halva.svg';

import useStyles from './styles';

const Logo = ({ classes }) => {
  return (
    <div>
      <img className={classes.halvaLogo} src={halvaLogo} alt="halva" />
    </div>
  );
};

const Header = props => {
  const classes = useStyles(props);
  const { logoHref, type } = props;

  return (
    <Container className={classes.container}>
      <a
        href={logoHref}
        className={type === 'withHalvaLogo' ? classes.withHalva : ''}
      >
        <img className={classes.logo} src={logo} alt="logo" />
      </a>
      {(() => {
        switch (type) {
          case 'withHalvaLogo':
            return <Logo classes={classes} />;
          default:
            return <SupportPhone {...props} />;
        }
      })()}
    </Container>
  );
};

Header.defaultProps = {
  logoHref: '/',
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
  withHalvaLogo: false,
  type: 'default',
  withButton: false,
};

export default React.memo(Header);
