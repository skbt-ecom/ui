import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Switch from './Switch';

storiesOf('Switch', module).add('Default', () => (
  <Switch
    onChange={action('onChange')}
    value="checkedA"
    inputProps={{ 'aria-label': 'secondary checkbox' }}
  />
));
