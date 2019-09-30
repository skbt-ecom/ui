import React from 'react';
import TextFieldMaterial from '@material-ui/core/TextField';

const TextField = (props, ref) => (
  <TextFieldMaterial {...props} ref={ref} variant={'outlined'} />
);

const ForwardedTextFieldComponent = React.forwardRef(TextField);

export default React.memo(ForwardedTextFieldComponent);
