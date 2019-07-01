import React from 'react';

import logo from './logo.svg';
import ReactSVG from 'react-svg';

import useStyles from './styles';

const Header = props => {
  const classes = useStyles(props);
  const { logoHref, phone } = props;
  return (
    <div className={classes.container}>
      <a href={logoHref} className={classes.logoContainer}>
        <ReactSVG src={logo} />
      </a>
      <div className={classes.phoneContainer}>
        <a rel="nofollow" href={`tel:${phone}`} className={classes.phoneNum}>
          {phone}
        </a>
        <p className={classes.phoneHint}>Для звонков по России бесплатно</p>
      </div>
      {/* <div class="container h100 d-flex align-items-center justify-content-between">
        <a class="logo" href="/ipoteka/"></a>
        <div class="d-none d-md-block">
          <a class="phone" href="tel:8 800 100-10-20">
            8 800 100-10-20
          </a>
          <p class="phone-hint">
            Для звонков по России (круглосуточно, бесплатно)
          </p>
        </div>
      </div> */}
    </div>
  );
};

Header.defaultProps = {
  phone: '8 800 100-10-20',
};

export default Header;
