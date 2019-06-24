import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import TextField from '@material-ui/core/TextField';

const TextMaskCustom = React.memo(props => {
  const onChange = e => {
    e.persist();
    const {
      target: { value },
    } = e;
    props.onChange(value);
  };

  return <IMaskInput {...props} onChange={onChange} />;
});

const MaskedField = React.memo(props => {
  const [value, setValue] = useState('');

  const onChange = value => {
    setValue(value);
    props.onChange(value);
  };

  const { mask, min, max, ...restProps } = props;
  const inputProps = {
    onChange,
    mask,
    value,
    max,
  };
  return (
    <TextField
      {...restProps}
      InputProps={{
        inputComponent: TextMaskCustom,
        inputProps,
      }}
    />
  );
});

MaskedField.defaultProps = {
  variant: 'outlined',
};
export default MaskedField;
