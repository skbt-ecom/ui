import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldComponent = React.memo(props => {
  return <TextField {...props} />;
});

TextFieldComponent.defaultProps = {
  variant: 'outlined',
};

export default TextFieldComponent;
