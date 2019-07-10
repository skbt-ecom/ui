import React from 'react';
import ReactCodeInput from 'react-code-input';
import useStyles from './styles';

const VerifyCode = React.memo(props => {
  const classes = useStyles(props);

  return (
    <ReactCodeInput
      fields={4}
      type="number"
      {...props}
      className={classes.container}
    />
  );
});

export default VerifyCode;
