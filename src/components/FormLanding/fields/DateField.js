import React from 'react';
import MaterialDateField from '../../DateField';
import { Field } from '../FormContext/Field';
import { dateValidator, birthdateValidator } from '../validators';

import useStyles from './styles';

const DateField = React.memo(props => <MaterialDateField {...props} />);

const WrappedField = ({
  validAgeMin,
  validAgeMax,
  classsesComponent,
  ...props
}) => {
  const classes = useStyles(props);
  const isAgeValidationRequred = validAgeMin || validAgeMax;
  const validator = isAgeValidationRequred
    ? value => birthdateValidator(value, { validAgeMin, validAgeMax })
    : dateValidator;

  return (
    <div className={classes.fieldWrapper}>
      <Field validate={validator} {...props} classes={classsesComponent} />
    </div>
  );
};

WrappedField.displayName = 'DateField';
WrappedField.defaultProps = {
  component: DateField,
  defaultValue: '',
  fullWidth: true,
};

export default WrappedField;
