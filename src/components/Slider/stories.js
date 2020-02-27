import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Slider from './Slider';
import SliderLogarithmic from './SliderLogarithmic';

import theme from '../../style/theme';
import { inputProps, sliderProps } from './story.config';

const SliderWrapper = props => {
  const [step, setStep] = React.useState(1000);

  const getStepValue = sliderVal => {
    if (sliderVal < 300000) {
      return 1000;
    }
    if (sliderVal < 1000000) {
      return 5000;
    }
    return 100000;
  };

  const handleOnChangeCommitted = value => {
    props.onChangeCommitted(value);
  };
  const handleOnChange = value => {
    setStep(getStepValue(value));
  };

  const dynamicStepSliderProps = {
    step: step,
  };

  return (
    <>
      <Slider
        onChange={handleOnChange}
        onChangeCommitted={handleOnChangeCommitted}
        inputProps={inputProps}
        sliderProps={dynamicStepSliderProps}
        min={150000} // if no initialValue using min value as initial
        max={30000000}
      />
    </>
  );
};

storiesOf('Slider', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <Slider
      onChange={action('onChange')}
      label={'Сумма кредита'}
      inputProps={inputProps}
      sliderProps={sliderProps}
      // initialValue={300}
      min={100} // if no initialValue using min value as initial
      max={2000}
      // value={500}
    />
  ))
  .add('Committed', () => (
    <Slider
      onChangeCommitted={action('onChangeCommitted')}
      label={'Сумма кредита'}
      inputProps={inputProps}
      sliderProps={sliderProps}
      min={150000}
      max={30000000}
    />
  ))
  .add('Dynamic step', () => (
    <SliderWrapper onChangeCommitted={action('onChangeCommitted')} />
  ))
  .add('Logarithmic', () => (
    <SliderLogarithmic
      // onChange={action('onChange')}
      onChangeCommitted={action('onChangeCommitted')}
      inputProps={inputProps}
      sliderProps={sliderProps}
      min={150000}
      max={30000000}
      value={2000000}
      // withSpaceForHelperTxt
    />
  ))
  .add('withSpaceForHelperTxt', () => (
    <SliderLogarithmic
      // onChange={action('onChange')}
      onChangeCommitted={action('onChangeCommitted')}
      inputProps={inputProps}
      sliderProps={sliderProps}
      min={150000}
      max={30000000}
      value={2000000}
      withSpaceForHelperTxt
    />
  ));
