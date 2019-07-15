import React from 'react';
import ReactCodeInput from 'react-code-input';
import useStyles from './styles';

const VerifyCode = React.memo(props => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <ReactCodeInput
        fields={4}
        type="number"
        {...props}
        className={classes.codeInput}
      />
      {props.error && <p className={classes.errorMsg}>{props.helperText}</p>}
    </div>
  );
});

export default VerifyCode;
