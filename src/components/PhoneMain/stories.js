import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import PhoneMain from './PhoneMain';

import theme from '../../style/theme';

storiesOf('PhoneMain', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => <PhoneMain />);
