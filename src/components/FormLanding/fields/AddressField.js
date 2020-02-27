import React from 'react';
import MaterialAddressField from '../../AddressField';
import { Field } from '../FormContext/Field';
import { addressWithFlatValidator } from '../validators/addressValidator';

const AddressField = React.memo(props => <MaterialAddressField {...props} />);

const WrappedField = props => {
  return (
    <Field
      validate={addressWithFlatValidator}
      validateOnBlur={false}
      defaultValue={null}
      {...props}
      component={AddressField}
    />
  );
};

export default WrappedField;
