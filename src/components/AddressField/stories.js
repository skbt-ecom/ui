import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import AddressField from './AddressField';

import theme from '../../style/theme';

storiesOf('AddressField', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <AddressField onChange={action('onChange')} error={true} helperText={''} />
  ));
