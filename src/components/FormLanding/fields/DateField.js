import React from 'react';
import MaterialDateField from '../../DateField';
import { Field } from '../FormContext/Field';
import { dateValidator, birthdateValidator } from '../validators';

import useStyles from './styles';

const DateField = React.memo(props => <MaterialDateField {...props} />);

const WrappedField = ({ validAge, ...props }) => {
  const classes = useStyles(props);
  const validator = validAge
    ? value => birthdateValidator(value, validAge)
    : dateValidator;

  return (
    <div className={classes.fieldWrapper}>
      <Field validate={validator} {...props} />
    </div>
  );
};

WrappedField.displayName = 'DateField';
WrappedField.defaultProps = {
  component: DateField,
  defaultValue: '',
  validAge: false,
  fullWidth: true,
};

export default WrappedField;
