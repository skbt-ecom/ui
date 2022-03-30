import React, { useState } from "react"

import Container from "../Container"
import PhoneMain from "../PhoneMain"
import SocialLinks from "./SocialLinks"
import StoreLinks from "./StoreLinks"

import useStyles from "./styles"

export default function Footer(props) {
  const [isHide, setIsHide] = useState(true)
  const classes = useStyles(props)
  const {
    left,
    right,
    shortText = "",
    restText = "",
    phone,
    phones,
    phoneHint,
    socialLinks,
    storeLinks,
    withStore = true,
    withLicense = true,
    withPhone = true,
  } = props

  function showRestLigal() {
    setIsHide(false)
  }

  return (
    <footer className={classes.footer}>
      <Container className={classes.root} fixed={false}>
        <div className={classes.inner}>
          {left || (
            <div>
              {withPhone && (
                <PhoneMain
                  phone={phone}
                  phones={phones}
                  phoneHint={phoneHint}
                  classes={{
                    phoneContainer: classes.phoneContainer,
                    phoneNum: classes.phoneNum,
                    phoneMultiple: classes.phoneMultiple,
                  }}
                />
              )}
            </div>
          )}
          {right || (
            <div className={classes.copyright}>
              <SocialLinks items={socialLinks} />
              <p>
                © 2004-{new Date().getFullYear()}, ПАО «Совкомбанк»
                <br />
                Все права защищены
              </p>
              {withLicense && <p>Генеральная лицензия Банка России №963 от 5 декабря 2014 г.</p>}
              {withStore ? (
                <StoreLinks links={storeLinks} />
              ) : (
                <div style={{ width: "100%", height: 80 }} />
              )}
            </div>
          )}
        </div>
        <div>
          {withPhone && (
            <PhoneMain
              phone={phone}
              phones={phones}
              phoneHint={phoneHint}
              classes={{
                phoneContainer: classes.mobileOnlyPhone,
                phoneNum: classes.phoneNum,
                phoneMultiple: classes.phoneMultiple,
              }}
            />
          )}
          {shortText && (
            <div className={classes.ligal}>
              <div>{shortText}</div>
              {restText && isHide && (
                <button type="button" className={classes.showMore} onClick={showRestLigal}>
                  Подробные условия
                </button>
              )}
              {!isHide && <div>{restText}</div>}
            </div>
          )}
        </div>
      </Container>
    </footer>
  )
}
