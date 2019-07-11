import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import DadataField from './DadataField';

import theme from '../../style/theme';

storiesOf('DadataField', module)
  .addDecorator(muiTheme([theme]))
  .add('ФИО', () => (
    <DadataField onChange={action('onChange')} type={'fio'} label={'ФИО'} />
  ))
  .add('Адрес', () => (
    <DadataField
      onChange={action('onChange')}
      type={'address'}
      label={'Адрес'}
      dadataOptions={{}}
      fullWidth
    />
  ));
