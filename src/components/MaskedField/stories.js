import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import MaskedField from './MaskedField';

import theme from '../../style/theme';

storiesOf('MaskedField', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <MaskedField
      onChange={action('onChange')}
      label={'MaskedField Number'}
      mask={Number}
    />
  ));
