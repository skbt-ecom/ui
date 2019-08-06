import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import FormLanding from './FormLanding';

import theme from '../../style/theme';

const formConfig = {
  title: <span className="title-class">Заполните заявку</span>,
  fields: ['fio', 'fio'],
};

storiesOf('FormLanding', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <FormLanding onChange={action('onChange')} config={formConfig} />
  ));
