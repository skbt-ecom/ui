import React from "react"
import Checkbox from "../../../Checkbox/Checkbox"
import { Field } from "../../FormContext/Field"
import Link from "../../../Link"

import useAcceptmentStyles from "./styles"
import useStyles from "../styles"

const Acceptment = React.memo(props => {
  const classes = useAcceptmentStyles(props)

  const onChange = e => {
    props.onChange(e.target.checked)
  }

  return (
    <Checkbox
      color="primary"
      label={
        <>
          Даю согласие на&nbsp;обработку своих персональных данных в&nbsp;соответствии&nbsp;с&nbsp;
          <Link
            href="https://app.sovcombank.ru/policy/"
            target="_blank"
            rel="noopener noreferrer"
            underline={"always"}
          >
            Правилами
          </Link>
        </>
      }
      {...props}
      classes={{
        labelClasses: {
          label: classes.labelLabel,
          root: classes.labelRoot,
        },
        helperTextClasses: { root: classes.helperTextRoot },
      }}
      onChange={onChange}
      checked={props.value}
    />
  )
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapperAcceptment}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.displayName = "Acceptment"
WrappedField.defaultProps = {
  component: Acceptment,
  defaultValue: true,
  validateOnBlur: false,
  validate: value => (value ? null : "Необходимо согласие с условиями"),
}

export default WrappedField
