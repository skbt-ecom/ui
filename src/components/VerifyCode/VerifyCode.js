import React from 'react';
import useStyles from './styles';

const VerifyCode = React.memo(props => {
  const classes = useStyles(props);
  console.log('classes', classes);

  return (
    <div className={classes.verifyCodeWrapper}>
      <div className={classes.verifyCodeContainer}>
        <input
          className={classes.verifyCodeInput}
          maxLength="4"
          pattern="\d*"
          onChange={props.onChange}
          value={props.value}
        />
      </div>
      {props.error && <p className={classes.helperText}>{props.helperText}</p>}
    </div>
  );
});

export default VerifyCode;
