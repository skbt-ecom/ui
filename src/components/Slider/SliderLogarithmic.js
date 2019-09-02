/**
 * BASED ON https://noteskeeper.ru/607/
 */

import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import TextField from '../TextField';
import NumberFormat from 'react-number-format'; //https://github.com/s-yadav/react-number-format
import { fromSlider, toSlider, round } from './utils';

import useStyles from './styles';

const SliderComponent = React.memo(props => {
  const classes = useStyles(props);
  const [value, setValue] = useState(
    props.initialValue || props.value || props.min
  );

  const handleSliderChange = (event, newValue) => {
    const viewValue = round(fromSlider(newValue));
    if (value === viewValue) {
      return;
    }
    setValue(viewValue);
    props.onChange(viewValue);
  };

  const handleSliderChangeCommitted = (event, newValue) => {
    const viewValue = round(fromSlider(newValue));
    if (props.onChangeCommitted) {
      setValue(viewValue);
      props.onChangeCommitted(viewValue);
    }
  };

  const handleInputChange = ({ floatValue = 0 }) => {
    if (floatValue !== value) {
      setValue(floatValue);
      if (props.onChangeCommitted) {
        return props.onChangeCommitted(floatValue);
      }
      props.onChange(floatValue);
    }
  };

  const handleInputBlur = e => {
    const { min, max } = props;
    let newValue = 0;

    if (value <= min) {
      newValue = min;
    } else if (value >= max) {
      newValue = max;
    }

    if (newValue) {
      setValue(newValue);
      if (props.onChangeCommitted) {
        return props.onChangeCommitted(newValue);
      }
      props.onChange(newValue);
    }
  };
  const { sliderProps, inputProps, label, min, max } = props;

  return (
    <div className={classes.container}>
      <NumberFormat
        {...inputProps}
        label={label}
        className={classes.input}
        customInput={TextField}
        thousandSeparator={' '}
        value={value}
        onValueChange={handleInputChange}
        fullWidth
        allowNegative={false}
        decimalScale={0}
        onBlur={handleInputBlur}
      />
      <Slider
        {...sliderProps}
        defaultValue={value}
        value={toSlider(value)}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChangeCommitted}
        min={toSlider(min)}
        max={toSlider(max)}
        step={0.01}
      />
    </div>
  );
});

SliderComponent.defaultProps = {
  onChange: () => null,
};

export default SliderComponent;
