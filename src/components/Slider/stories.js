import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Slider from './Slider';

import theme from '../../style/theme';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 25,
    label: '25°C',
  },
  {
    value: 50,
    label: '50°C',
  },
  {
    value: 75,
    label: '75°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];
const marks3 = [
  {
    value: 100,
    label: '0°C',
  },
  {
    value: 500,
    label: '50°C',
  },
  {
    value: 1000,
    label: '100°C',
  },
];

const inputProps = {
  suffix: ' ₽',
};

const sliderProps = {
  suffix: ' ₽',
};

const discreteSliderProps = {
  suffix: ' ₽',
  step: null,
  marks: true,
  marks: marks3,
};

storiesOf('Slider', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <Slider
      onChange={action('onChange')}
      inputProps={inputProps}
      sliderProps={sliderProps}
      label={'Сумма кредита'}
      // initialValue={300}
      min={100} // if no initialValue using min value as initial
      max={2000}
      // value={500}
      committed={true}
    />
  ))
  .add('Committed', () => (
    <Slider
      onChangeCommitted={action('onChangeCommitted')}
      inputProps={inputProps}
      sliderProps={sliderProps}
      // initialValue={300}
      min={100} // if no initialValue using min value as initial
      max={2000}
      // value={500}
      committed={true}
    />
  ))
  .add('Discrete', () => (
    <Slider
      discrete
      onChange={action('onChange')}
      inputProps={inputProps}
      sliderProps={discreteSliderProps}
      // initialValue={300}
      min={100} // if no initialValue using min value as initial
      max={1000}
      // value={500}
      committed={true}
    />
  ));
