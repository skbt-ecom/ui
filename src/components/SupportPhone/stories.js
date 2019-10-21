import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { action } from '@storybook/addon-actions';

import SupportPhone from './SupportPhone';

import theme from '../../style/theme';

storiesOf('SupportPhone', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => <SupportPhone />)
  .add('withButton', () => (
    <SupportPhone withButton onButtonClick={action('onButtonClick')} />
  ));
