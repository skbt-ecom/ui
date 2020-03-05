import React from 'react';
import MaterialDateField from '../../DateField';
import { Field } from '../FormContext/Field';

import { dateValidator, birthdateValidator } from '../validators';

const DateField = React.memo(props => <MaterialDateField {...props} />);

const WrappedField = ({ validAge, ...props }) => {
  const validator = validAge
    ? value => birthdateValidator(value, validAge)
    : dateValidator;

  return <Field validate={validator} {...props} />;
};

WrappedField.displayName = 'DateField';
WrappedField.defaultProps = {
  component: DateField,
  defaultValue: '',
  validAge: false,
  fullWidth: true,
};

export default WrappedField;
