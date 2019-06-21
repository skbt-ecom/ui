import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Switch from './Switch';

import theme from '../../style/theme';

storiesOf('Switch', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <Switch onChange={action('onChange')} color={'primary'} />
  ));
