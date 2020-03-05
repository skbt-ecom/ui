import React from 'react';
import MaterialAutosuggest from '../../Autosuggest';
import { Field } from '../FormContext/Field';
import { autosuggestValidator } from '../validators';

import useStyles from './styles';

const AutosuggestField = React.memo(props => {
  return <MaterialAutosuggest {...props} />;
});

const WrappedField = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} />
    </div>
  );
};

WrappedField.dislayName = 'AutosuggestField';
WrappedField.defaultProps = {
  component: AutosuggestField,
  validate: autosuggestValidator,
  defaultValue: '',
  suggestions: [],
  validateOnBlur: false,
  fullWidth: true,
};

export default WrappedField;
