import React from 'react';

import MaterialRadioGroupField from '../../RadioGroupField';

import { Field } from '../FormContext/Field';

function RadioGroupField(props) {
  return <MaterialRadioGroupField {...props} />;
}

export default function WrappedField(props) {
  return <Field {...props} component={RadioGroupField} />;
}
