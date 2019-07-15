import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import TextField from '../TextField';
import NumberFormat from 'react-number-format'; //https://github.com/s-yadav/react-number-format

import useStyles from './styles';

const SliderComponent = React.memo(props => {
  const classes = useStyles(props);
  const [value, setValue] = useState(
    props.initialValue || props.value || props.min
  );

  const limit = ({ floatValue }) => {
    const { min, max } = props;
    return floatValue >= min && floatValue <= max;
  };

  const handleSliderChange = (event, newValue) => {
    if (value === newValue) {
      return;
    }
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const handleSliderChangeCommitted = (event, newValue) => {
    setValue(newValue);
    props.onChangeCommitted(newValue);
  };

  const handleInputChange = ({ floatValue }) => {
    if (floatValue !== value) {
      setValue(floatValue);
      if (props.onChangeCommitted) {
        return props.onChangeCommitted(floatValue);
      }
      props.onChange(newValue);
    }
  };
  // TODO: вытащить label из inputProps и сделать его общим для компонента
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
        isAllowed={limit}
        // aria-labelledby="slider"
        InputProps={{
          readOnly: props.discrete,
        }}
      />
      <Slider
        {...sliderProps}
        classes={{
          root: classes.sliderRoot,
          markLabel: classes.sliderMarkLabel,
          mark: classes.sliderMark,
        }}
        value={value}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChangeCommitted}
        // aria-labelledby="slider"
        min={min}
        max={max}
      />
    </div>
  );
});

SliderComponent.defaultProps = {
  onChange: () => null,
  onChangeCommitted: () => null,
};

export default SliderComponent;
