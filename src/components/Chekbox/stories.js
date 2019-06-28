import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

import theme from '../../style/theme';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

storiesOf('Chekbox', module)
  .addDecorator(muiTheme([theme]))
  .add('Checkbox', () => (
    <Checkbox onChange={action('onChange')} label={'Label'} color={'primary'} />
  ))
  .add('CheckboxGroup', () => (
    <CheckboxGroup
      onChange={action('onChange')}
      options={options}
      formLabel={{
        label: 'Label',
      }}
    />
  ));
