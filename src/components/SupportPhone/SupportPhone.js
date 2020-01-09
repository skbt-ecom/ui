import React from 'react';

import Button from '../Button';

import useStyles from './styles';

const SupportPhone = React.memo(function(props) {
  const classes = useStyles();
  const { phone, phoneHint, withButton, onButtonClick, buttonProps } = props;

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
      <div className={`${classes.phoneContainer} ${props.className}`}>
        <a rel="nofollow" href={`tel:${phone}`} className={classes.phoneNum}>
          {phone}
        </a>
        <p className={classes.phoneHint}>{phoneHint}</p>
      </div>
    </>
  );
});

SupportPhone.defaultProps = {
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно',
  withButton: false,
  buttonProps: {
    color: 'primary',
    label: 'Оформить',
  },
};

export default SupportPhone;
