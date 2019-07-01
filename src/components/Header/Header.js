import React from 'react';

import logo from './logo.svg';

import useStyles from './styles';

const Header = React.memo(props => {
  const classes = useStyles(props);
  const { logoHref, phone, phoneHint } = props;

  return (
    <div className={classes.container}>
      <a href={logoHref} className={classes.logoContainer}>
        <img src={logo} alt="logo" />
      </a>
      <div className={classes.phoneContainer}>
        <a rel="nofollow" href={`tel:${phone}`} className={classes.phoneNum}>
          {phone}
        </a>
        <p className={classes.phoneHint}>{phoneHint}</p>
      </div>
    </div>
  );
});

Header.defaultProps = {
  logoHref: '/',
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
};

export default Header;
