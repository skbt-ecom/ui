import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Select from './Select';

import theme from '../../style/theme';

const socialStatuses = [
  { value: 'Работодатель', label: 'Работодатель' },
  { value: 'Пенсионер', label: 'Пенсионер' },
  { value: 'Работающий пенсионер', label: 'Работающий пенсионер' },
  { value: 'Работает / Служит', label: 'Работает / Служит' },
  { value: 'ИП', label: 'ИП' },
];

storiesOf('Select', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <Select
      onChange={action('onChange')}
      items={socialStatuses}
      name={'select'}
      value={socialStatuses[3].value}
    />
  ));
