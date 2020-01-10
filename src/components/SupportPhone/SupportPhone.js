import React from 'react';
import Button from '../Button';

import useStyles from './styles';

const SupportPhone = props => {
  const classes = useStyles();
  const {
    phone,
    phoneHint,
    withButton,
    onButtonClick,
    buttonProps,
    classes: propsClasses = {},
  } = props;

  return (
    <>
      {withButton && (
        <Button
          onClick={onButtonClick}
          classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}
          color={buttonProps.color}
        >
          {buttonProps.label}
        </Button>
      )}
      <div
        className={`${classes.phoneContainer} ${propsClasses.phoneContainer}`}
      >
        <a
          rel="nofollow"
          href={`tel:${phone}`}
          className={`${classes.phoneNum} ${propsClasses.phoneNum}`}
        >
          {phone}
        </a>
        <p className={classes.phoneHint}>{phoneHint}</p>
      </div>
    </>
  );
};

SupportPhone.defaultProps = {
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
  withButton: false,
  buttonProps: {
    color: 'primary',
    label: 'Оформить',
  },
};

export default React.memo(SupportPhone);
