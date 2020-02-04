import React from 'react';
import Phone from '../Phone';

const PhoneWithHint = ({ phone, phoneHint, classes, propsClasses }) => (
  <>
    <Phone number={phone} classes={{ phoneNum: propsClasses.phoneNum }} />
    {phoneHint && (
      <p className={`${classes.phoneHint} ${propsClasses.phoneHint}`}>
        {phoneHint}
      </p>
    )}
  </>
);

export default PhoneWithHint;
