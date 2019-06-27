import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import TextField from '@material-ui/core/TextField';

const TextMaskCustom = React.memo(
  props => {
    const onChange = e => {
      e.persist();
      const {
        target: { value },
      } = e;
      props.onChange(value);
    };

    return <IMaskInput {...props} onChange={onChange} />;
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
  }
);

const MaskedField = React.memo(props => {
  const { value: propsValueRaw } = props;
  const propsValue = (propsValueRaw && propsValueRaw.toString()) || '';

  const [value, setValue] = useState(propsValue);
  const [mirroredValue, setMirroredValue] = useState(propsValue);

  if (propsValue !== mirroredValue) {
    setValue(propsValue);
    setMirroredValue(propsValue);
  }

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
