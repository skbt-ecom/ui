import React from 'react';
import TextField from '@material-ui/core/TextField';
import withSpaceForHelperTxt from '../HOCs/withSpaceForHelperTxt';

const TextFieldComponent = (props, ref) => {
  return <TextField {...props} ref={ref} variant={'outlined'} />;
};

const ForwardedTextFieldComponent = React.forwardRef(TextFieldComponent);

export default React.memo(withSpaceForHelperTxt(ForwardedTextFieldComponent));
