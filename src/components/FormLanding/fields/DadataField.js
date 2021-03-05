import React from "react"
import MaterialDadataField from "../../DadataField"
import { Field } from "../FormContext/Field"
import { fioValidator } from "../validators/fioValidator"
import { addressValidator } from "../validators/addressValidator"

import useStyles from "./styles"

const fioDefaultProps = {
  label: "Фамилия Имя Отчество",
  validate: fioValidator,
}

const addressDefaultProps = {
  label: "Адрес",
  name: "address",
  validate: addressValidator,
}

const DadataField = React.memo((props) => <MaterialDadataField {...props} />)

if (process.env.NODE_ENV !== "production") {
  console.error(
    '⚠️ Deprecation component "DadataField". Use the "fields/DadataFields/Dadata*.js" instead'
  )
}
/**
 * @deprecated use fields/DadataFields/Dadata*.js instead
 */
const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  const { type } = props
  const propsByType = type === "fio" ? { ...fioDefaultProps } : { ...addressDefaultProps }

  return (
    <div className={classes.fieldWrapper}>
      <Field {...propsByType} {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.displayName = "DadataField"
WrappedField.defaultProps = {
  component: DadataField,
  defaultValue: "",
  validateOnBlur: false,
  fullWidth: true,
}

export default WrappedField
