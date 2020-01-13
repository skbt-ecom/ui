import React, { useState } from 'react';
import Container from '../Container';
import Grid from '../Grid';
import Box from '../Box';
import PhoneMain from '../PhoneMain';

import icon_vk from './icon_vk.svg';
import icon_fb from './icon_fb.svg';
import icon_ok from './icon_ok.svg';
import icon_tw from './icon_tw.svg';
import icon_appstore from './icon_appstore.svg';
import icon_gplay from './icon_gplay.svg';

import useStyles from './styles';

function Footer(props) {
  const [isHide, setIsHide] = useState(true);
  const classes = useStyles(props);
  const { shortText, restText, phone } = props;

  function showRestLigal() {
    setIsHide(false);
  }

  return (
    <footer className={classes.footer}>
      <Container fixed={false}>
        <div className={classes.inner}>
          <PhoneMain
            phone={phone}
            classes={{
              phoneContainer: classes.phoneContainer,
              phoneNum: classes.phoneNum,
              phoneHint: classes.phoneHint,
            }}
          />
          <Box order={1} className={classes.copyright}>
            <Grid container alignItems="center" className={classes.social}>
              <div className={classes.icon}>
                <a
                  href="https://vk.com/sovcombank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon_vk} alt="vk" />
                </a>
              </div>
              <div className={classes.icon}>
                <a
                  href="http://www.facebook.com/sovcombank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon_fb} alt="fb" />
                </a>
              </div>
              <div className={classes.icon}>
                <a
                  href="https://ok.ru/paosovcombank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon_ok} alt="ok" />
                </a>
              </div>
              <div className={classes.icon}>
                <a
                  href="https://twitter.com/sovcombank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon_tw} alt="tw" />
                </a>
              </div>
            </Grid>
            <p>
              © 2004-{new Date().getFullYear()}, ПАО «Совкомбанк»
              <br />
              Все права защищены
            </p>
            <p>Генеральная лицензия Банка России №963 от 5 декабря 2014 г.</p>
            <Box
              display="flex"
              justifyContent="space-between"
              className={classes.store}
            >
              <a
                className={classes.appstore}
                href="https://apps.apple.com/ru/app/halva/id1208055056"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon_appstore} alt="App Store" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=ru.sovcomcard.halva.v1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon_gplay} alt="Google Play" />
              </a>
            </Box>
          </Box>
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
}

Footer.defaultProps = {
  shortText: '',
  restText: '',
};

export default React.memo(Footer);
