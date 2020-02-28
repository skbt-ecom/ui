import React from 'react';
import MaterialSelect from '../../Select';

import { Field } from '../FormContext/Field';

const Select = React.memo(props => {
  const onChange = e => {
    props.onChange(e.target.value);
  };

  return <MaterialSelect {...props} onChange={onChange} />;
});

const WrappedField = props => <Field {...props} />;

WrappedField.defaultProps = {
  component: Select,
  fullWidth: true,
};

export default WrappedField;
