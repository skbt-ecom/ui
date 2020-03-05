import React from 'react';
import MaterialPhoneField from '../../PhoneField';
import { Field } from '../FormContext/Field';
import { phoneValidator } from '../validators/phoneValidator';

import useStyles from './styles';

const PhoneField = React.memo(props => <MaterialPhoneField {...props} />);

const WrappedField = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} />
    </div>
  );
};

WrappedField.displayName = 'PhoneField';
WrappedField.defaultProps = {
  component: PhoneField,
  label: 'Телефон',
  validate: phoneValidator,
  placeholder: '+7 (000) 000-00-00',
  unmask: true,
  defaultValue: '',
  fullWidth: true,
};

export default WrappedField;
