import React from 'react';
import MaterialMaskedField from '../../MaskedField';
import { Field } from '../FormContext/Field';
import { requiredValidator } from '../validators/requiredValidator';

const MaskedField = React.memo(props => {
  return <MaterialMaskedField {...props} />;
});

const WrappedField = props => <Field {...props} />;

WrappedField.defaultProps = {
  component: MaskedField,
  validate: requiredValidator,
  fullWidth: true,
};

export default WrappedField;
