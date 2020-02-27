import React from 'react';
import useStyles from './styles';

const ButtonWText = ({ startIcon: StartIcon, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.bwtContainer}>
      <div className={classes.bwtLeft}>
        {StartIcon}
        <p className={classes.bwtText}>
          <strong>Использовать данные цифрового профиля</strong>
          <br />
          Заполнить с помощью Госуслуг
        </p>
      </div>
      <button
        onClick={props.onClick}
        className={classes.bwtButton}
        type="button"
      >
        Войти
      </button>
    </div>
  );
};

export default ButtonWText;
