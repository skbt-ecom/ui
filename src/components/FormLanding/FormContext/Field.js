/* eslint react/destructuring-assignment: 0 */
import React from "react"
import PropTypes from "prop-types"

import { FormContext } from "./Form"
import { getErrorProp, getHelperTextFromError } from "./helpers"
import {
  pushToDataLayerInvalidField,
  pushToDataLayerRequiredValidField,
} from "../../../utils/pushToDataLayerUtils"

export class Field extends React.PureComponent {
  prevValue = undefined // needs to prevent calling onValidateItem if value does not changed (ex. onBlur)

  initialValue = this.props.value || this.props.defaultValue

  isNotEmpty = false

  componentDidMount() {
    const field = this.context.fields[this.props.name] || {}
    const { validate, helperText, isRequired, isTrim } = this.props

    this.context.registerField({
      fieldKey: this.props.name,
      value: field.value || this.initialValue,
      validate,
      helperText,
      isRequired,
      isTrim,
    })
  }

  onChange = (value) => {
    if (typeof value === "string") {
      this.isNotEmpty = true
    }
    if (value?.target?.value !== undefined) {
      this.isNotEmpty = true
    }
    if (value?.target?.value !== undefined) {
      return null
    }
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
      isTrim: this.props.isTrim,
    })
  }

  onValidateItem = (props) => {
    const { value, isRequired, isTrim } = props
    // return when value has not been changed
    // if (value === this.prevValue) {
    //   return;
    // }
    console.log(isTrim)
    this.prevValue = value
    const error = isRequired && this.isNotEmpty ? this.props.validate(value) : false
    const helperText = getHelperTextFromError(error, this.props.helperText)

    if (!error && isRequired) pushToDataLayerRequiredValidField(this.props.name)
    else if (error) pushToDataLayerInvalidField(this.props.name, helperText)
    const newValue = value
    // if (isTrim) newValue = value.trim()
    this.context.onChange({
      fieldKey: this.props.name,
      value: newValue,
      error,
      helperText,
    })
  }

  onBlur = () => {
    this.onValidateItem({
      fieldKey: this.props.name,
      value: this.context.fields[this.props.name].value,
      isRequired: this.context.fields[this.props.name].isRequired,
      isTrim: this.props.isTrim,
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
      isTrim,
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

Field.contextType = FormContext

Field.defaultProps = {
  validate: () => undefined,
  validateOnBlur: true,
  isRequired: true,
  isTrim: false,
}

Field.propTypes = {
  validate: PropTypes.func,
  name: PropTypes.string.isRequired,
  validateOnBlur: PropTypes.bool,
  isRequired: PropTypes.bool,
  isTrim: PropTypes.bool,
}
