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
      min={0}
      max={2000}
    />
  ));
