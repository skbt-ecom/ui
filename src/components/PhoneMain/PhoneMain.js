import React from 'react';
import Phone from './Phone';
import PhoneWithHint from './PhoneWithHint';

import useStyles from './styles';

const PhoneMain = props => {
  const classes = useStyles();
  const { phone, phoneHint, phones, classes: propsClasses = {} } = props;
  const phonesArr = phones ? phones : [phone];
  const isSinglePhone = phonesArr.length === 1;

  const phoneWithHintProps = {
    phone: phonesArr[0],
    phoneHint,
    classes,
    propsClasses,
  };

  return (
    <div className={`${classes.phoneContainer} ${propsClasses.phoneContainer}`}>
      {isSinglePhone ? (
        <PhoneWithHint {...phoneWithHintProps} />
      ) : (
        phonesArr.map((phone, i) => (
          <Phone
            key={i}
            number={phone}
            classes={{
              phoneNum: `${classes.phoneMultiple} ${propsClasses.phoneNum}`,
            }}
          />
        ))
      )}
    </div>
  );
};

PhoneMain.defaultProps = {
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
};

export default React.memo(PhoneMain);
