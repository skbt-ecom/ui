import React, { useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider';
import TextField from './TextField';
import NumberFormat from 'react-number-format'; //https://github.com/s-yadav/react-number-format

import useStyles from './styles';

const SliderComponent = React.memo(props => {
  const classes = useStyles(props);
  const [value, setValue] = useState(
    props.defaultValue || props.value || props.min
  );

  useEffect(() => {
    if (value > max) {
      setValue(max);
      if (props.onChangeCommitted) {
        return props.onChangeCommitted(max);
      }
      props.onChange(max);
      return;
    }

    if (value < min) {
      setValue(min);
      if (props.onChangeCommitted) {
        return props.onChangeCommitted(min);
      }
      props.onChange(min);
    }
  }, [props.max, props.min, value]);

  const handleSliderChange = (_event, newValue) => {
    if (value === newValue) {
      return;
    }
    setValue(newValue);
    props.onChange(newValue);
  };

  const handleSliderChangeCommitted = (_event, newValue) => {
    if (props.onChangeCommitted) {
      setValue(newValue);
      props.onChangeCommitted(newValue);
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
        classes={{
          root: classes.sliderRoot,
          markLabel: classes.sliderMarkLabel,
          mark: classes.sliderMark,
        }}
        value={value}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChangeCommitted}
        min={min}
        max={max}
      />
    </div>
  );
});

SliderComponent.defaultProps = {
  onChange: () => null,
};

export default SliderComponent;
