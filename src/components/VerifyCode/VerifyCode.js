import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import useStyles from './styles';

const acceptedKeys = [
  // Backspace and Tab and Enter
  8,
  9,
  13,
  // Home and End
  35,
  36,
  // left and right arrows
  37,
  39,
  // Ins and Del
  45,
  46,
];

const VerifyCode = React.memo(props => {
  const classes = useStyles(props);
  const { onChange, value, error, helperText } = props;

  const handleKeyDown = e => {
    const key = e.which || e.keyCode;
    if (
      !(
        (!e.shiftKey &&
          !e.altKey &&
          !e.ctrlKey &&
          // numbers
          key >= 48 &&
          key <= 57) ||
        // Numeric keypad
        (key >= 96 && key <= 105) ||
        acceptedKeys.includes(key)
      )
    ) {
      e.preventDefault();
    }
  };

  return (
    <FormControl classes={{ root: classes.formControlRoot }} error={error}>
      <div className={classes.verifyCodeWrapper}>
        <div className={classes.verifyCodeContainer}>
          <input
            className={classes.verifyCodeInput}
            onKeyDown={handleKeyDown}
            maxLength="4"
            pattern="\d*"
            onChange={onChange}
            value={value}
            autoFocus
          />
        </div>
      </div>
      {helperText && (
        <FormHelperText classes={{ root: classes.helperTextRoot }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
});

export default VerifyCode;
