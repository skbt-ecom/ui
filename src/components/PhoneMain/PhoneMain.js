import React from 'react';

import useStyles from './styles';

const PhoneMain = props => {
  const classes = useStyles();
  const { phone, phoneHint, classes: propsClasses = {} } = props;

  return (
    <div className={`${classes.phoneContainer} ${propsClasses.phoneContainer}`}>
      <a
        rel="nofollow"
        href={`tel:${phone}`}
        className={`${classes.phoneNum} ${propsClasses.phoneNum}`}
      >
        {phone}
      </a>
      <p className={`${classes.phoneHint} ${propsClasses.phoneHint}`}>
        {phoneHint}
      </p>
    </div>
  );
};

PhoneMain.defaultProps = {
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
};

export default React.memo(PhoneMain);
