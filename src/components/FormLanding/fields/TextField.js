import React from 'react';
import MaterialTexteField from '../../TextField';
import { Field } from '../FormContext/Field';

const TextField = React.memo(props => {
  const onChange = e => {
    props.onChange(e.target.value);
  };

  return <MaterialTexteField {...props} onChange={onChange} />;
});

const WrappedField = props => <Field {...props} component={TextField} />;
WrappedField.displayName = 'TextField';

export default WrappedField;
