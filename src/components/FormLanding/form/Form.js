import React from 'react';
import PropTypes from 'prop-types';

import {
  checkUnTouchedFields,
  updateFieldsErrors,
  updateFieldsValues,
  getHelperTextFromError,
} from './helpers';

export const FormContext = React.createContext({});

export class Form extends React.Component {
  static propTypes = {
    submitting: PropTypes.bool,
    onChangeFields: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };
  static defaultProps = {
    submitting: false,
    onChangeFields: undefined,
  };
  static getDerivedStateFromProps(props, state) {
    const nextState = {};

    if (props.submitting !== state.mirroredSubmitting) {
      nextState.submitting = props.submitting;
      nextState.mirroredSubmitting = props.submitting;
    }

    if (props.errors !== state.mirroredErrors) {
      nextState.fields = updateFieldsErrors(props.errors, state.fields);
      nextState.mirroredErrors = props.errors;
    }

    if (props.values !== state.mirroredValues) {
      nextState.fields = updateFieldsValues(
        props.values,
        nextState.fields || state.fields
      );
      nextState.mirroredValues = props.values;
    }

    return nextState;
  }

  initialHelperText = ''; //needs to store original helperText value and set it when setFieldsValue calls

  registerField = ({ fieldKey, value, validate, helperText }) => {
    this.initialHelperText = helperText;
    this.setState(state => ({
      fields: {
        ...state.fields,
        [fieldKey]: {
          value,
          validate,
          touched: false,
          helperText,
        },
      },
    }));
  };

  setFieldsValue = updates => {
    const nextFields = { ...this.state.fields };

    Object.keys(updates).forEach(fieldKey => {
      const error = nextFields[fieldKey].validate(updates[fieldKey]);

      nextFields[fieldKey] = {
        ...nextFields[fieldKey],
        value: updates[fieldKey],
        error,
        helperText: getHelperTextFromError(error, this.initialHelperText),
      };
    });

    this.setState({
      fields: nextFields,
    });
  };

  getFieldsValue = () =>
    Object.keys(this.state.fields).reduce((acc, fieldKey) => {
      acc[fieldKey] = this.state.fields[fieldKey].value;
      return acc;
    }, {});

  onChange = ({ fieldKey, ...updates }) => {
    const prevField = this.state.fields[fieldKey];
    const nextField = { ...prevField, ...updates, touched: true };
    const nextFields = {
      ...this.state.fields,
      [fieldKey]: nextField,
    };

    this.setState(state => {
      const nextInvalidFields = new Set(state.invalidFields);

      if (updates.error) nextInvalidFields.add(fieldKey);
      else nextInvalidFields.delete(fieldKey);

      return {
        fields: nextFields,
        invalidFields: nextInvalidFields,
        valid: !nextInvalidFields.size,
      };
    });

    const { onChangeFields } = this.props;

    if (onChangeFields) {
      if (typeof onChangeFields === 'function') {
        onChangeFields(nextFields, fieldKey);
      } else {
        const onChangeCallback = onChangeFields[fieldKey];
        onChangeCallback && onChangeCallback(nextField);
      }
    }
  };

  onSubmit = () => {
    const { fields, valid } = this.state;

    if (valid) {
      this.toggleSubmitting(true);
      const {
        fieldsToSubmit,
        fieldsWithError,
        validForm,
      } = checkUnTouchedFields(fields);

      if (!validForm) {
        return this.setState({
          valid: validForm,
          fields: {
            ...this.state.fields,
            ...fieldsWithError,
          },
          submitting: false,
        });
      }

      const promise = this.props.onSubmit(fieldsToSubmit);

      return promise && promise.finally(() => this.toggleSubmitting(false));
    }
  };

  toggleSubmitting = submitting => this.setState({ submitting });

  state = {
    fields: {},
    onChange: this.onChange,
    onSubmit: this.onSubmit,
    submitting: this.props.submitting,
    valid: true,
    registerField: this.registerField,
    onChangeFields: this.props.onChangeFields,
    invalidFields: new Set(),
  };

  render() {
    return (
      <FormContext.Provider value={this.state}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}
