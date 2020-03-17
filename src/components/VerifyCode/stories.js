import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import VerifyCode from './VerifyCode';

import theme from '../../style/themeHalva';

storiesOf('VerifyCode', module)
  .addDecorator(muiTheme([theme]))
  .add('Timer', () => (
    <VerifyCode
      onChange={action('onChange')}
      error={true}
      helperText={
        <Typography variant="caption">
          Отправить код повторно через <strong>25 сек</strong>
        </Typography>
      }
    />
  ))
  .add('Link', () => (
    <VerifyCode
      onChange={action('onChange')}
      error={true}
      helperText={
        <Link
          onClick={() => undefined}
          component={'button'}
          underline={'always'}
          color={'textPrimary'}
        >
          Отправить код повторно
        </Link>
      }
    />
  ))
  .add('Error', () => (
    <VerifyCode
      onChange={action('onChange')}
      error={true}
      classes={{ errorTextRoot: '11111' }}
    />
  ));
