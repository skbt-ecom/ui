import React from 'react';
import MaterialPhoneField from '../../PhoneField';
import { Field } from '../FormContext/Field';
import { phoneValidator } from '../validators/phoneValidator';

const PhoneField = React.memo(props => <MaterialPhoneField {...props} />);

const WrappedField = props => (
  <Field
    name={'phone'}
    label={'Телефон'}
    validate={phoneValidator}
    placeholder={'+7 (000) 000-00-00'}
    unmask={true}
    defaultValue={''}
    fullWidth
    {...props}
    component={PhoneField}
  />
);

export default WrappedField;
