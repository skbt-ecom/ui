import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

import theme from '../../style/theme';

storiesOf('Chekbox', module)
  .addDecorator(muiTheme([theme]))
  .add('Checkbox', () => (
    <Checkbox onChange={action('onChange')} label={'Label'} name={'lol'} />
  ));
// .add('CheckboxGroup', () => <CheckboxGroup onChange={action('onChange')} />);
