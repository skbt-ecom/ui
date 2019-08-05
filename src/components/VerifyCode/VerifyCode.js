import React from 'react';
import useStyles from './styles';

const VerifyCode = React.memo(props => {
  const classes = useStyles(props);

  const handleKeyDown = e => {
    const iKeyCode = e.which ? e.which : e.keyCode;
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) {
      e.preventDefault();
    }
  };

  return (
    <div className={classes.verifyCodeWrapper}>
      <div className={classes.verifyCodeContainer}>
        <input
          className={classes.verifyCodeInput}
          onKeyDown={handleKeyDown}
          maxLength="4"
          pattern="\d*"
          onChange={props.onChange}
          value={props.value}
          autoFocus
        />
      </div>
      {props.error && <p className={classes.helperText}>{props.helperText}</p>}
    </div>
  );
});

export default VerifyCode;
