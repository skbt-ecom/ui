import React from "react"
import Link from "@material-ui/core/Link"
import Checkbox from "../../../Checkbox/Checkbox"
import { Field } from "../../FormContext/Field"

import useAcceptmentStyles from "./styles"
import useStyles from "../styles"

const Acceptment = React.memo((props) => {
  const classes = useAcceptmentStyles(props)

  const onChange = (e) => {
    props.onChange(e.target.checked)
  }

  return (
    <Checkbox
      color="primary"
      label={
        <>
          Выражаю{" "}
          <Link
            className={classes.link}
            href="https://app.sovcombank.ru/policy/"
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
          >
            согласие
          </Link>{" "}
          на&nbsp;обработку персональных данных и подтверждаю, что ознакомлен с&nbsp;
          <Link
            className={classes.link}
            href="https://app.sovcombank.ru/politika-konfidencialnosti/"
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
          >
            Политикой
          </Link>{" "}
          обработки персональных данных
        </>
      }
      {...props}
      classes={{
        labelClasses: {
          label: classes.labelLabel,
          root: classes.labelRoot,
        },
        helperTextClasses: { root: classes.helperTextRoot },
        checkboxClasses: { root: classes.checkboxRoot },
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
  validate: (value) => (value ? null : "Необходимо согласие с условиями"),
}

export default WrappedField
