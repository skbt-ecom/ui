import React from 'react';

import Button from '../Button';

import useStyles from './styles';

const SupportPhone = React.memo(function({
  phone,
  phoneHint,
  onButtonClick,
  withButton,
}) {
  const classes = useStyles();

  return (
    <>
      {withButton && (
        <Button
          onClick={onButtonClick}
          classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}
          color={'primary'}
        >
          Оформить
        </Button>
      )}
      <div className={classes.phoneContainer}>
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
};

export default SupportPhone;
