/* eslint react/destructuring-assignment: 0 */
import React from "react"
import PropTypes from "prop-types"

import {
  checkUnTouchedFields,
  updateFieldsErrors,
  updateFieldsValues,
  getHelperTextFromError,
  getRequiredFields,
} from "./helpers"
import {
  pushToDataLayerFormSuccess,
  pushToDataLayerSendForm,
  pushToDataLayerStepSuccess,
} from "../../../utils/pushToDataLayerUtils"

export const FormContext = React.createContext({})

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      onChange: this.onChange, // eslint-disable-line
      onSubmit: this.onSubmit, // eslint-disable-line
      registerField: this.registerField, // eslint-disable-line
      invalidFields: new Set(),
    }
  }

  static getDerivedStateFromProps(props, state) {
    const nextState = {}

    if (props.submitting !== state.mirroredSubmitting) {
      nextState.submitting = props.submitting
      nextState.mirroredSubmitting = props.submitting
    }

    if (props.errors !== state.mirroredErrors) {
      nextState.fields = updateFieldsErrors(props.errors, state.fields)
      nextState.mirroredErrors = props.errors
    }

    if (props.values !== state.mirroredValues) {
      nextState.fields = updateFieldsValues(props.values, nextState.fields || state.fields)
      nextState.mirroredValues = props.values
    }

    return nextState
  }

  registerField = ({ fieldKey, value, validate, helperText, isRequired }) => {
    this.setState((state) => ({
      fields: {
        ...state.fields,
        [fieldKey]: {
          value,
          validate,
          touched: false,
          helperText,
          isRequired,
          initialHelperText: helperText, // needs to store original helperText value and set it when setFieldsValue calls
        },
      },
    }))
  }

  setField = (fieldKey, data) => {
    const newField = { ...this.state.fields[fieldKey], ...data }
    this.setState((state) => ({
      fields: {
        ...state.fields,
        [fieldKey]: newField,
      },
    }))
  }

  setFields = (updates) => {
    this.setState((prevState) => {
      const prevFields = { ...prevState.fields }
      const nextFields = { ...prevFields }

      Object.keys(updates).forEach((fieldKey) => {
        const prevField = prevFields[fieldKey]
        const nextField = updates[fieldKey]

        if ("value" in nextField) {
          nextField.error = prevField.validate(nextField.value)
          nextField.helperText = getHelperTextFromError(
            nextField.error,
            prevField.initialHelperText
          )
        }
        nextFields[fieldKey] = {
          ...prevField,
          ...nextField,
        }
      })
      return { fields: nextFields }
    })
  }

  getFieldsValue = (fieldKey) => {
    const { fields } = this.state

    if (fieldKey) {
      return fields[fieldKey] && fields[fieldKey].value
    }

    const values = {}
    Object.keys(fields).forEach((name) => {
      values[name] = fields[name].value
    })

    return values
  }

  onChange = ({ fieldKey, ...updates }) => {
    const prevField = this.state.fields[fieldKey]
    const nextField = { ...prevField, ...updates, touched: true }
    const nextFields = {
      ...this.state.fields,
      [fieldKey]: nextField,
    }

    this.setState((state) => {
      const nextInvalidFields = new Set(state.invalidFields)

      if (updates.error) nextInvalidFields.add(fieldKey)
      else nextInvalidFields.delete(fieldKey)

      return {
        fields: nextFields,
        invalidFields: nextInvalidFields,
      }
    })

    const { onChangeFields } = this.props

    if (onChangeFields) {
      if (typeof onChangeFields === "function") {
        onChangeFields(nextFields, fieldKey)
      } else {
        const onChangeCallback = onChangeFields[fieldKey]

        if (onChangeCallback) {
          onChangeCallback(nextField)
        }
      }
    }
  }

  onSubmit = () => {
    const { fields } = this.state
    const { requiredFields } = getRequiredFields(fields)
    const { fieldsToSubmit, fieldsWithError, validForm } = checkUnTouchedFields(requiredFields)

    const nextFields = {
      ...this.state.fields,
    }

    Object.keys(this.state.fields).forEach((fieldKey) => {
      const stateField = this.state.fields[fieldKey]
      if (fieldKey in fieldsWithError) {
        nextFields[fieldKey] = { ...fieldsWithError[fieldKey] }
      } else {
        nextFields[fieldKey] = {
          ...stateField,
          error: false,
          helperText: stateField.initialHelperText,
        }
      }
    })

    if (this.props.step) {
      pushToDataLayerSendForm(this.props.step)
    }

    if (!validForm) {
      this.setState({
        fields: nextFields,
      })
      return
    }

    if (this.props.step) pushToDataLayerStepSuccess(this.props.step)
    else pushToDataLayerFormSuccess()

    this.props.onSubmit(fieldsToSubmit)
  }

  render() {
    return <FormContext.Provider value={this.state}>{this.props.children}</FormContext.Provider>
  }
}

Form.propTypes = {
  submitting: PropTypes.bool,
  onChangeFields: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
}

Form.defaultProps = {
  submitting: false,
  onChangeFields: undefined,
}
