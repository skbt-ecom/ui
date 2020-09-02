import React, { useState } from 'react';

import Container from '../Container';
import PhoneMain from '../PhoneMain';
import SocialLinks from './SocialLinks';
import StoreLinks from './StoreLinks';

import useStyles from './styles';

const Footer = (props, ref) => {
  const [isHide, setIsHide] = useState(true);
  const classes = useStyles(props);
  const {
    left,
    right,
    shortText,
    restText,
    phone,
    phones,
    phoneHint,
    socialLinks,
    storeLinks,
  } = props;
  function showRestLigal() {
    setIsHide(false);
  }

  return (
    <footer className={classes.footer} ref={ref}>
      <Container fixed={false}>
        <div className={classes.inner}>
          {left ? (
            left
          ) : (
            <PhoneMain
              phone={phone}
              phones={phones}
              phoneHint={phoneHint}
              classes={{
                phoneContainer: classes.phoneContainer,
                phoneNum: classes.phoneNum,
                phoneMultiple: classes.phoneMultiple,
                phoneHint: classes.phoneHint,
              }}
            />
          )}

          {right ? (
            right
          ) : (
            <div className={classes.copyright}>
              <SocialLinks items={socialLinks} />
              <p>
                © 2004-{new Date().getFullYear()}, ПАО «Совкомбанк»
                <br />
                Все права защищены
              </p>
              <p>Генеральная лицензия Банка России №963 от 5 декабря 2014 г.</p>
              <StoreLinks links={storeLinks} />
            </div>
          )}
        </div>
        {shortText && (
          <div className={classes.ligal}>
            <div>{shortText}</div>
            {restText && isHide && (
              <span className={classes.showMore} onClick={showRestLigal}>
                Подробные условия
              </span>
            )}
            {!isHide && <div>{restText}</div>}
          </div>
        )}
      </Container>
    </footer>
  );
};

const ForwardedFooter = React.forwardRef(Footer);

ForwardedFooter.defaultProps = {
  shortText: '',
  restText: '',
};

export default React.memo(ForwardedFooter);
