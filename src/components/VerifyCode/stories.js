import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import VerifyCode from './VerifyCode';

import theme from '../../style/theme';

storiesOf('VerifyCode', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => <VerifyCode onChange={action('onChange')} />);
