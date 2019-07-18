import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import RadioGroupField from './RadioGroupField';

import theme from '../../style/theme';

const items = [
  { value: 'm', label: 'Мужской' },
  { value: 'f', label: 'Женский' },
];
storiesOf('RadioGroupField', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <RadioGroupField
      onChange={action('onChange')}
      items={items}
      label={'Ваш пол:'}
      classes={{ formLabel: 'class1', formControl: 'class2', group: 'group' }}
    />
  ));
