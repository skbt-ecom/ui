import React from 'react';
import { Field } from '../form/Field';
import MaterialTextField from '../../TextField';

const TextFieldClear = React.memo(props => {
  const onChange = e => {
    props.onChange(e.target.value);
  };

  return <MaterialTextField {...props} onChange={onChange} />;
});

export const TextField = props => (
  <Field {...props} component={TextFieldClear} />
);
