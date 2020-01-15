import React, { useCallback } from 'react';
import Phone from './Phone';

import useStyles from './styles';

const PhoneMain = props => {
  const classes = useStyles();
  const { phone, phoneHint, phones, classes: propsClasses = {} } = props;

  const renderPhoneWithHint = () => {
    return (
      <>
        <Phone number={phone} classes={{ phoneNum: propsClasses.phoneNum }} />
        <p className={`${classes.phoneHint} ${propsClasses.phoneHint}`}>
          {phoneHint}
        </p>
      </>
    );
  };

  return (
    <div className={`${classes.phoneContainer} ${propsClasses.phoneContainer}`}>
      {!phones && phone && renderPhoneWithHint()}
      {phones &&
        phones.map((phone, i) => (
          <Phone
            key={i}
            number={phone}
            classes={{
              phoneNum: `${classes.phoneMultiple} ${propsClasses.phoneNum}`,
            }}
          />
        ))}
    </div>
  );
};

PhoneMain.defaultProps = {
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
};

export default React.memo(PhoneMain);
