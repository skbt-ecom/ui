import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Button from './Button';

storiesOf('Button', module).add('Default', () => (
  <Button color="primary" variant="contained">
    Lol
  </Button>
));
