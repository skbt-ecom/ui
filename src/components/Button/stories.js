import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Button from './Button';

import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../style/theme';

storiesOf('Button', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <>
      <Button
        color={'secondary'}
        onClick={action('clicked btn')}
        classes={{ label: 'my-label', root: 'my-root' }}
      >
        Button
      </Button>
    </>
  ));
