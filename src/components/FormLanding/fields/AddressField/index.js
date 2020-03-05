import React from 'react';
import MaterialAddressField from '../../../AddressField';
import { Field } from '../../FormContext/Field';
import { addressWithFlatValidator } from '../../validators';

import useStyles from '../styles';
import { useAddressDadataStyles, useFlatInfoStyles } from './styles';

const AddressField = React.memo(props => {
  const addressDadataClasses = useAddressDadataStyles(props);
  const flatInfoClasses = useFlatInfoStyles(props);

  return (
    <MaterialAddressField
      classes={{
        addressDadataClasses: { classes: addressDadataClasses },
        flatInfoClasses: { classes: flatInfoClasses },
      }}
      {...props}
    />
  );
});

const WrappedField = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} />
    </div>
  );
};

WrappedField.defaultProps = {
  component: AddressField,
  validate: addressWithFlatValidator,
  validateOnBlur: false,
  defaultValue: null,
  helperText: { addressDadata: 'Район, город, улица, дом' },
};
WrappedField.displayName = 'AddressField';

export default WrappedField;
