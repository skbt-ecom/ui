import React, { useState, useCallback } from 'react';
import Slider from '@material-ui/lab/Slider';
import TextField from '../TextField';
import NumberFormat from 'react-number-format'; //https://github.com/s-yadav/react-number-format

import useStyles from './styles';

const SliderComponent = React.memo(props => {
  const classes = useStyles();
  const [value, setValue] = useState(
    props.initialValue || props.value || props.min
  );

  const limit = ({ floatValue }) => {
    const { min, max } = props;
    return floatValue >= min && floatValue <= max;
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const handleSliderChangeCommitted = (event, newValue) => {
    setValue(newValue);
    props.onChangeCommit(newValue);
  };

  const handleInputChange = ({ floatValue }) => {
    if (floatValue !== value) {
      setValue(floatValue);
      if (props.onChangeCommit) {
        return props.onChangeCommit(floatValue);
      }
      props.onChange(newValue);
    }
  };

  const { sliderProps, inputProps, min, max } = props;

  return (
    <div className={classes.container}>
      <NumberFormat
        {...inputProps}
        className={classes.input}
        customInput={TextField}
        thousandSeparator={' '}
        value={value}
        onValueChange={handleInputChange}
        fullWidth
        allowNegative={false}
        decimalScale={0}
        isAllowed={limit}
      />
      <Slider
        {...sliderProps}
        className={classes.slider}
        value={value}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChangeCommitted}
        aria-labelledby="slider"
        min={min}
        max={max}
      />
    </div>
  );
});
export default SliderComponent;
