import React, { useCallback } from 'react';
import MateriaDadataAddressFlat from '../../../DadataFields/DadataAddressFlat';
import { Field } from '../../FormContext/Field';
import { addressFlatDadataValidator } from '../../validators';

import useStyles from '../styles';
import { useAddressDadataStyles, useFlatInfoStyles } from './styles';

const DadataAddressFlat = React.memo(({ onChange, ...props }) => {
  const addressDadataClasses = useAddressDadataStyles(props);
  const flatInfoClasses = useFlatInfoStyles(props);
  const handleBlur = useCallback(
    (e, values) => {
      onChange(values);
    },
    [onChange]
  );

  return (
    <MateriaDadataAddressFlat
      classes={{
        addressDadataClasses: { classes: addressDadataClasses },
        flatInfoClasses: { classes: flatInfoClasses },
      }}
      {...props}
      onBlur={handleBlur}
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
  component: DadataAddressFlat,
  validate: addressFlatDadataValidator,
  validateOnBlur: false,
  defaultValue: {},
  helperText: { addressDadata: 'Район, город, улица, дом' },
};
WrappedField.displayName = 'DadataAddressFlat';

export default WrappedField;
