import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import RadioGroupBtn from './RadioGroupBtn';

import theme from '../../style/theme';
const items = [
  { value: 100000, label: '100 000 P' },
  { value: 50000, label: '50 000 P' },
  { value: 5340, label: '5340 P' },
  { value: 7409, label: '7409 P' },
  { value: 9492, label: '9492 P' },
];

storiesOf('RadioGroupBtn', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <RadioGroupBtn
      onChange={action('onChange')}
      numberType
      items={items}
      name={'prices'}
    />
  ));
