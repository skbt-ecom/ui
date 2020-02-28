import React from 'react';
import MaterialAddressField from '../../AddressField';
import { Field } from '../FormContext/Field';
import { addressWithFlatValidator } from '../validators/addressValidator';

const AddressField = React.memo(props => <MaterialAddressField {...props} />);

const WrappedField = props => {
  return <Field {...props} />;
};

WrappedField.defaultProps = {
  component: AddressField,
  validate: addressWithFlatValidator,
  validateOnBlur: false,
  defaultValue: null,
  helperText: { addressDadata: 'Район, город, улица, дом' },
};

export default WrappedField;
