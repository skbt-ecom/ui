import React from "react"
import PropTypes from "prop-types"

import { FormContext } from "./Form"
import { getErrorProp, getHelperTextFromError } from "./helpers"

export class Field extends React.PureComponent {
  static contextType = FormContext

  static propTypes = {
    validate: PropTypes.func,
    name: PropTypes.string.isRequired,
    validateOnBlur: PropTypes.bool,
  }

  static defaultProps = {
    validate: () => undefined,
    validateOnBlur: true,
    isRequired: true,
  }

  _prevValue = undefined // needs to prevent calling onValidateItem if value does not changed (ex. onBlur)

  initialValue = this.props.value || this.props.defaultValue
  componentDidMount() {
    const field = this.context.fields[this.props.name] || {}
    this.context.registerField({
      fieldKey: this.props.name,
      value: field.value || this.initialValue,
      validate: this.props.validate,
      helperText: this.props.helperText,
      isRequired: this.props.isRequired,
    })
  }

  onChange = value => {
    if (this.props.validateOnBlur) {
      // reset error state from field
      return this.context.onChange({
        fieldKey: this.props.name,
        value,
        error: false,
        helperText: this.props.helperText,
      })
    }
    return this.onValidateItem({
      fieldKey: this.props.name,
      value,
      isRequired: this.props.isRequired,
    })
  }

  onValidateItem = props => {
    const { value, isRequired } = props
    // return when value has not been changed
    // if (value === this._prevValue) {
    //   return;
    // }
    this._prevValue = value
    const error = isRequired ? this.props.validate(value) : false
    const helperText = getHelperTextFromError(error, this.props.helperText)

    this.context.onChange({
      fieldKey: this.props.name,
      value,
      error,
      helperText,
    })
  }

  onBlur = () => {
    this.onValidateItem({
      fieldKey: this.props.name,
      value: this.context.fields[this.props.name].value,
      isRequired: this.context.fields[this.props.name].isRequired,
    })
  }

  render() {
    const {
      validate,
      value,
      component: Component,
      defaultValue,
      validateOnBlur,
      isRequired,
      ...props
    } = this.props

    if (!this.context.fields) {
      throw new Error("The Field must be inside Form")
    }
    const field = this.context.fields[props.name] || {
      value: this.initialValue,
    }

    return (
      <Component
        {...props}
        value={field.value}
        error={getErrorProp(field.error)}
        helperText={field.helperText}
        onChange={this.onChange}
        onBlur={validateOnBlur ? this.onBlur : this.props.onBlur}
      />
    )
  }
}
