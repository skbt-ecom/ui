import React, { useState } from 'react';
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

const SelectWrapper = props => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
    props.onChange(e);
  };

  return (
    <Select
      onChange={handleChange}
      items={socialStatuses}
      name={'select'}
      value={value}
    />
  );
};
storiesOf('Select', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => <SelectWrapper onChange={action('onChange')} />);
