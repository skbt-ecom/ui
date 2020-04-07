import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

//form
import FormLanding from './FormLanding';
//fields
import SliderLogarithmic from './fields/SliderLogarithmic';
import PhoneField from './fields/PhoneField';
import DateField from './fields/DateField';
import DadataField from './fields/DadataField';
import AddressField from './fields/AddressField';
import MaskedField from './fields/MaskedField';
import SelectField from './fields/SelectField';
import EmailField from './fields/EmailField';
import AcceptmentField from './fields/AcceptmentField';
import AutocompleteField from './fields/AutocompleteField';
import TextField from './fields/TextField';
import SubmitButton from './fields/SubmitButton';
import { regions } from '../AutocompleteField/regionEnums';

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
      <SliderLogarithmic
        name={'sum'}
        label={'Сумма кредита'}
        min={150000}
        max={30000000}
      />
      <PhoneField name={'phone'} value={123} />
      <DateField
        name={'birthdate'}
        label={'Date'}
        // validAgeMin={20} // if required birthdateValidator
        // validAgeMax={30} // if required birthdateValidator
      />
      <MaskedField name={'masked'} label={'Masked'} />
      <DadataField
        type={'fio'} // or address
        name={'fio'}
      />
      <AddressField name={'address'} />
      <SelectField name={'select'} items={SELECT_ITEMS} />
      <EmailField name={'email'} label={'email'} />
      <AutocompleteField name={'autosuggest'} options={regions} />
      <AcceptmentField
        name={'agree'}
        color="secondary"
        // classes={{ fieldWrapperAcceptment: 'styles.fieldWrapperAcceptment' }}
      />
      <TextField
        name={'text'}
        // classes={{ fieldWrapper: 'ololo' }} //if required pass classes to wrapper component
        // classsesComponent={{ root: 'rololo' }} //if required pass classes to wrapped component
      />
      <SubmitButton
      // classes={{ container: 'styles.buttonWrapper' }}
      >
        Отправить
      </SubmitButton>
    </FormLanding>
  ));
