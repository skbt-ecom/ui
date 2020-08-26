import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import withSpaceForHelperTxt from '../HOCs/withSpaceForHelperTxt';

const AutocompleteField = ({
  label,
  error,
  helperText,
  fullWidth,
  ...props
}) => {
  return (
    <Autocomplete
      forcePopupIcon={false}
      getOptionLabel={option => option.label}
      noOptionsText={'Нет вариантов'}
      renderInput={params => (
        console.log(params),
        (
          <TextField
            variant={props.variant || 'outlined'} // TODO: удалить по окончании https://sovcombank.myjetbrains.com/youtrack/issue/HALVA-986
            {...params}
            // variant="outlined" // TODO: раскомментировать по окончании https://sovcombank.myjetbrains.com/youtrack/issue/HALVA-986
            label={label}
            error={error}
            helperText={helperText}
            fullWidth
          />
        )
      )}
      {...props}
    />
  );
};

export default React.memo(withSpaceForHelperTxt(AutocompleteField));
