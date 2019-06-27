import React, { useState } from 'react';
import Slider from '@material-ui/lab/Slider';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MaskedField from '../MaskedField';
import { IMaskInput } from 'react-imask';

const inputComponent = React.memo(
  props => {
    console.table(props);
    const onChange = e => {
      e.persist();
      const {
        target: { value },
      } = e;
      console.log('value', value);
      props.onChange(e);
    };

    return (
      <IMaskInput
        {...props}
        onChange={onChange}
        mask={Number}
        value={
          console.log('props.value', props.value) || props.value
            ? String(props.value)
            : ''
        }
        thousandsSeparator={' '}
        // onAccept={(value, mask) =>
        //   console.log('onAccept') || props.onChange(value)
        // }
      />
    );
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
  }
);

const SliderComponent = React.memo(props => {
  const [value, setValue] = useState(100);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = value => {
    console.log('handle value', value, typeof value);
    setValue(value === '' ? '' : Number(event.target.value));
  };
  // const handleInputChange = event => {
  //   setValue(event.target.value === '' ? '' : Number(event.target.value));
  // };

  return (
    <div style={{ width: '400px' }}>
      <Slider
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="slider"
        max={2000}
      />
      <br />
      <br />
      {/* <MaskedField
        label={'Сумма кредита'}
        mask={Number}
        value={value}
        margin="dense"
        onChange={handleInputChange}
        inputProps={{
          'aria-labelledby': 'input-slider',
        }}
      /> */}
      <TextField
        value={value}
        variant="outlined"
        margin="dense"
        // onChange={handleInputChange}
        // inputProps={{
        //   'aria-labelledby': 'input-slider',
        // }}
        InputProps={{
          inputComponent,
          inputProps: {
            onChange: handleInputChange,
          },
        }}
      />
      {/* <Input
        value={value}
        variant="outlined"
        margin="dense"
        onChange={handleInputChange}
        inputProps={{
          'aria-labelledby': 'input-slider',
        }}
      /> */}
    </div>
  );
});
export default SliderComponent;
