import React from "react"
import Phone from "../Phone"

const PhoneWithHint = ({ phone, phoneHint, classes }) => (
  <>
    <Phone number={phone} classes={{ phoneNum: classes.phoneNum }} />
    {phoneHint && <p className={classes.phoneHint}>{phoneHint}</p>}
  </>
)

export default PhoneWithHint
