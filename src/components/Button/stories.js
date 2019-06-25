import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Button from './Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../style/theme';

storiesOf('Button', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <>
      <Typography component="div">
        <Button
          color="primary"
          onClick={action('clicked btn1')}
          fontWeight={700}
        >
          Button
        </Button>
      </Typography>
      <br />
      <br />
      <Button color="secondary" onClick={action('clicked btn2')}>
        Button
      </Button>
    </>
  ));
