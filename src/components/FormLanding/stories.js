import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

//form
import FormLanding from './FormLanding';
//fields
import PhoneField from './fields/PhoneField';
import DateField from './fields/DateField';
import DadataField from './fields/DadataField';
import SubmitButton from './fields/SubmitButton';

import theme from '../../style/theme';

storiesOf('FormLanding', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <FormLanding
      onChangeFields={action('onChangeFields')}
      onSubmit={action('onSubmit')}
    >
      <PhoneField value={123} />
      <DateField
        name={'birthdate'}
        // validAge={20} // if required birthdateValidator
      />
      <DadataField
        type={'fio'} // or address
      />
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  ));
