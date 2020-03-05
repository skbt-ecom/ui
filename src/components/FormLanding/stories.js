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
import AddressField from './fields/AddressField';
import MaskedField from './fields/MaskedField';
import SelectField from './fields/SelectField';
import EmailField from './fields/EmailField';
import AcceptmentField from './fields/AcceptmentField';
import SubmitButton from './fields/SubmitButton';

import theme from '../../style/theme';

const SELECT_ITEMS = [
  { value: 1, label: 'one' },
  { value: 2, label: 'two' },
  { value: 3, label: 'three' },
];

storiesOf('FormLanding', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => (
    <FormLanding
      onChangeFields={action('onChangeFields')}
      onSubmit={action('onSubmit')}
    >
      <PhoneField name={'phone'} value={123} />
      <DateField
        name={'birthdate'}
        label={'Date'}
        // validAge={20} // if required birthdateValidator
      />
      <MaskedField name={'masked'} label={'Masked'} />
      <DadataField
        type={'fio'} // or address
        name={'fio'}
      />
      <AddressField name={'address'} />
      <SelectField name={'select'} items={SELECT_ITEMS} />
      <EmailField name={'email'} label={'email'} />
      <AcceptmentField name={'agree'} />
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  ));
