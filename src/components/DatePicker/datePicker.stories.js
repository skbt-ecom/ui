import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import DatePicker from './DatePicker';

import theme from '../../style/theme';

storiesOf('DatePicker', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => <DatePicker />)
  .add('set value', () => <DatePicker value={new Date(2000, 1, 1)} />)
  .add('max/min Date', () => (
    <DatePicker minDate={new Date()} maxDate={new Date(2019, 9, 1)} />
  ));
