import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Slider from './Slider';

import theme from '../../style/theme';

const inputProps = {
  suffix: ' ₽',
  label: 'Сумма кредита',
};

const sliderProps = {
  suffix: ' ₽',
};

storiesOf('Slider', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <Slider
      onChange={action('onChange')}
      inputProps={inputProps}
      sliderProps={sliderProps}
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
  ));
