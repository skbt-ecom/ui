import React from 'react';
import MaterialSelect from '../../Select';

import { Field } from '../FormContext/Field';

const SelectField = React.memo(props => {
  const onChange = e => {
    props.onChange(e.target.value);
  };

  return <MaterialSelect {...props} onChange={onChange} />;
});

const WrappedField = props => <Field {...props} />;

WrappedField.displayName = 'SelectField';
WrappedField.defaultProps = {
  component: SelectField,
  fullWidth: true,
};

export default WrappedField;
