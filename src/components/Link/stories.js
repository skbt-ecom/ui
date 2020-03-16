import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Link from './Link';

import theme from '../../style/themeHalva';

storiesOf('Link', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <>
      <Link onClick={action('onClick')} component="button">
        Button Link
      </Link>
      <br />
      <Link onClick={action('onClick')} component="button" color="textPrimary">
        Button Link
      </Link>
    </>
  ));
