import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Autosuggest from './Autosuggest';

import theme from '../../style/theme';

import { regions } from './regionEnums';

storiesOf('Autosuggest', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <>
      <h2>Пример с регионами</h2>
      <Autosuggest
        onChange={action('onChange')}
        suggestions={regions}
        label={'Регион'}
        fullWidth
      />
    </>
  ));
