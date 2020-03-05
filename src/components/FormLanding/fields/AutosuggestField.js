import React from 'react';
import MaterialAutosuggest from '../../Autosuggest';
import { Field } from '../FormContext/Field';
import { autosuggestValidator } from '../validators';

const AutosuggestField = React.memo(props => {
  return <MaterialAutosuggest {...props} />;
});

const WrappedField = props => <Field {...props} />;
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
