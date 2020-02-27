import React from 'react';
import MaterialDateField from '../../DateField';
import { Field } from '../FormContext/Field';

import { dateValidator } from '../validators/dateValidator';
import { birthdateValidator } from '../validators/birthdateValidator';

const DateField = React.memo(props => <MaterialDateField {...props} />);

const WrappedDateField = ({ validAge, ...props }) => {
  const validator = validAge
    ? value => birthdateValidator(value, validAge)
    : dateValidator;

  return (
    <Field
      validate={validator}
      defaultValue={''}
      {...props}
      component={DateField}
    />
  );
};

export default WrappedDateField;
