import React from 'react';
import useStyles from './styles';

const VerifyCode = React.memo(props => {
  const classes = useStyles(props);

  return (
    <div className={classes.verifyCodeWrapper}>
      <div className={classes.verifyCodeContainer}>
        <input
          className={classes.verifyCodeInput}
          pattern="\d*"
          maxlength="4"
          {...props}
        />
      </div>
      {props.error && <p className={classes.errorMsg}>{props.helperText}</p>}
    </div>
  );
});

export default VerifyCode;
