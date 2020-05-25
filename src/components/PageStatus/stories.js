import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import PageStatus from './PageStatus';

import theme from '../../style/theme';

storiesOf('PageStatus', module)
  .addDecorator(muiTheme([theme]))
  .add('Success: no description', () => <PageStatus success />)
  .add('Success: with description', () => (
    <PageStatus
      success
      successDesc="В течение часа Вам придет SMS c подтверждением регистрации в акции"
    />
  ))
  .add('Success: with content', () => (
    <PageStatus success content={<h3>Some content</h3>} />
  ))
  .add('Error: default', () => <PageStatus />)
  .add('Error: with content', () => (
    <PageStatus content={<h3>Some content</h3>} />
  ));
