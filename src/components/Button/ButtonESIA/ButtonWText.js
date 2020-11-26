import React from 'react';
import useStyles from './styles';

const ButtonWText = ({ startIcon: StartIcon, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.bwtContainer}>
      <div className={classes.bwtLeft}>
        <span className={classes.iconESIA}>{StartIcon}</span>
        <p className={classes.bwtText}>
          <strong>Используете Госуслуги? Получите решение быстрее.</strong>
        </p>
      </div>
      <button onClick={props.onClick} className={classes.bwtButton} type="button">
        Войти
      </button>
    </div>
  );
};

export default ButtonWText;
