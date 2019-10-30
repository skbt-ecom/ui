import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import TextField from '@material-ui/core/TextField';
import withSpaceForHelperTxt from '../HOCs/withSpaceForHelperTxt';

const TextMaskCustom = React.memo(
  props => {
    const onAccept = (value, mask) => {
      props.onAccept(value);
    };

    return <IMaskInput {...props} onAccept={onAccept} />;
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
  }
);

const MaskedField = React.memo(props => {
  const { value: propsValueRaw, InputProps } = props;
  const propsValue = (propsValueRaw && propsValueRaw.toString()) || '';

  const [value, setValue] = useState(propsValue);
  const [mirroredValue, setMirroredValue] = useState(propsValue);

  if (propsValue !== mirroredValue) {
    setValue(propsValue);
    setMirroredValue(propsValue);
  }

  const handleAccept = value => {
    setValue(value);
    props.onChange(value);
  };

  const handleOnBlur = () => {
    props.onBlur(value);
  };

  const {
    mask,
    min,
    max,
    unmask,
    onChange,
    onBlur,
    thousandsSeparator = '',
    dispatch,
    ...restProps
  } = props;
  const inputProps = {
    onAccept: handleAccept,
    mask,
    unmask,
    value,
    max,
    thousandsSeparator,
    dispatch,
    onBlur: handleOnBlur,
  };
  return (
    <TextField
      {...restProps}
      InputProps={{
        inputComponent: TextMaskCustom,
        inputProps,
        classes: InputProps.classes,
      }}
    />
  );
});

MaskedField.defaultProps = {
  variant: 'outlined',
  mask: Date,
  InputProps: {},
  onBlur: () => null,
};
export default withSpaceForHelperTxt(MaskedField);
