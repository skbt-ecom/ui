import React from 'react';
import useStyles from './styles';

const VerifyCode = React.memo(props => {
  const classes = useStyles(props);

  const handleKeyDown = e => {
    const key = e.which || e.keyCode;
    if (
      (!e.shiftKey &&
        !e.altKey &&
        !e.ctrlKey &&
        // numbers
        key >= 48 &&
        key <= 57) ||
      // Numeric keypad
      (key >= 96 && key <= 105) ||
      // Backspace and Tab and Enter
      key == 8 ||
      key == 9 ||
      key == 13 ||
      // Home and End
      key == 35 ||
      key == 36 ||
      // left and right arrows
      key == 37 ||
      key == 39 ||
      // Del and Ins
      key == 46 ||
      key == 45
    ) {
      // input is VALID
    } else {
      // input is INVALID
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
