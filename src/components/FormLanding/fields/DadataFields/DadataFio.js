import React, { useCallback } from 'react';
import MaterialDadataFio from '../../../DadataFields/DadataFio';
import { Field } from '../../FormContext/Field';
import { fioDadataValidator } from './../../validators';

import useStyles from '../styles';

const DadataFio = React.memo(({ onChange, ...props }) => {
  const handleBlur = useCallback(
    (e, values) => {
      onChange(values);
    },
    [onChange]
  );

  return <MaterialDadataFio {...props} onBlur={handleBlur} />;
});

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  );
};

WrappedField.dislayName = 'DadataFio';
WrappedField.defaultProps = {
  component: DadataFio,
  validate: fioDadataValidator,
  defaultValue: {},
  validateOnBlur: false,
  fullWidth: true,
};

export default WrappedField;
