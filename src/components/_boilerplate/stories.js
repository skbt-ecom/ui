import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Component from './Component';

import theme from '../../style/theme';

storiesOf('_boilerplate', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => <Component onChange={action('onChange')} />);
