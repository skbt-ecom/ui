import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import PageStatus from './PageStatus';

import theme from '../../style/theme';

storiesOf('PageStatus', module)
  .addDecorator(muiTheme([theme]))
  .add('Success', () => <PageStatus isSuccess />)
  .add('Error', () => <PageStatus />);
