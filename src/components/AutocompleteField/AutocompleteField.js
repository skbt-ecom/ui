import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const AutocompleteField = ({
  label,
  error,
  helperText,
  fullWidth,
  ...props
}) => {
  return (
    <FormControl
      style={{ width: fullWidth ? '100%' : '' }}
      error
      variant="outlined"
    >
      <Autocomplete
        forcePopupIcon={false}
        getOptionLabel={option => option.label}
        renderInput={params => (
          <TextField {...params} label={label} variant="outlined" />
        )}
        {...props}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default React.memo(AutocompleteField);
