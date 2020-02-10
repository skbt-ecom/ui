import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { action } from '@storybook/addon-actions';
import halvaLogo from './halva.svg';

// Import our component from this folder
import Header from './HeaderNew';

import theme from '../../style/theme';

storiesOf('HeaderNew', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <Header
      classes={{ header: 'myHeader' }}
      ButtonProps={{
        color: 'secondary',
        children: 'Присоединиться',
        onClick: action('onButtonClick'),
      }}
    />
  ))
  .add('Multiple phones', () => (
    <Header
      ButtonProps={{
        color: 'secondary',
        children: 'Присоединиться',
        onClick: action('onButtonClick'),
      }}
      PhoneProps={{ phones: ['8 927 463-12-81', '8 952 031-34-20'] }}
    />
  ))
  .add('Custom content', () => (
    <Header right={<img src={halvaLogo} alt="Халва" />} />
  ));
