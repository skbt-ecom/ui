import React from "react"
import TextField from "./TextField"
import { emailValidator } from "../validators"

const EmailField = (props) => <TextField {...props} />

EmailField.displayName = "EmailField"
EmailField.defaultProps = {
  validate: emailValidator,
}

export default EmailField
