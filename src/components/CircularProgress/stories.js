import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import CircularProgress from './CircularProgress';

import theme from '../../style/theme';

storiesOf('CircularProgress', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <CircularProgress color="primary" size={300} thickness={3} />
  ));
