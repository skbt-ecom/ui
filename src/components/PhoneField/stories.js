import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import PhoneField from './PhoneField';

import theme from '../../style/theme';

storiesOf('PhoneField', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <PhoneField
      label={'Телефон'}
      onChange={action('onChange')}
      placeholder={'+7(000)000-00-00'}
    />
  ));
