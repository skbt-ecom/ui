import React from "react"
import Phone from "./Phone"
import PhoneWithHint from "./PhoneWithHint"

import useStyles from "./styles"

export default function PhoneMain(props) {
  const classes = useStyles(props)
  const { phone, phoneHint, phones } = props
  const phonesArr = phones || [phone]
  const isSinglePhone = phonesArr.length === 1
  const phoneWithHintProps = {
    phone: phonesArr[0],
    phoneHint,
    classes: { phoneHint: classes.phoneHint, phoneNum: classes.phoneNum },
  }

  return (
    <div className={classes.phoneContainer}>
      {isSinglePhone ? (
        <PhoneWithHint {...phoneWithHintProps} />
      ) : (
        phonesArr.map((phone1, i) => (
          <Phone
            key={i}
            number={phone1}
            classes={{
              phoneNum: classes.phoneMultiple,
            }}
          />
        ))
      )}
    </div>
  )
}

PhoneMain.defaultProps = {
  phone: "8 800 100-10-20",
  phoneHint: "Для звонков по России бесплатно",
}
