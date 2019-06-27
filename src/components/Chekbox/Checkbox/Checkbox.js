import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxComponent = React.memo(props => {
  const { label, error, helperText, ...restProps } = props;

  const handleChange = event => {
    props.onChange(event);
  };

  return (
    <FormControl required error={error} component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...restProps} onChange={handleChange} />}
          label={label}
        />
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

export default CheckboxComponent;
