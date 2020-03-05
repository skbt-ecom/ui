import React from 'react';
import MaterialTexteField from '../../TextField';
import { Field } from '../FormContext/Field';

import useStyles from './styles';

const TextField = React.memo(props => {
  const onChange = e => {
    props.onChange(e.target.value);
  };

  return <MaterialTexteField {...props} onChange={onChange} />;
});

const WrappedField = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} />
    </div>
  );
};

WrappedField.displayName = 'TextField';
WrappedField.defaultProps = {
  component: TextField,
  defaultValue: '',
  fullWidth: true,
};

export default WrappedField;
