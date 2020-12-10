import React, { useEffect } from "react"
import MaterialAutocompleteField from "../../AutocompleteField"
import { Field } from "../FormContext/Field"
import { autocompleteValidator } from "../validators"

import useStyles from "./styles"
import REGIONS from "../../../enums/regions"

const AutocompleteRegionByPhoneField = React.memo(({ apiUrl, ...props }) => {
  const onChange = (_, value) => {
    props.onChange(value)
  }

  useEffect(() => {
    const getRegionByPhone = phone =>
      fetch(`${apiUrl}v1/region-detect?phone=${phone}`)
        .then(response => response.json())
        .then(data => data.region)

    if (props.phone && props.phone.length === 11) {
      getRegionByPhone(props.phone).then(data => {
        if (data) {
          props.onChange(
            REGIONS.filter(obj => Object.keys(obj).some(key => obj[key].includes(data)))[0]
          )
        } else {
          props.onChange(null)
        }
      })
    }
  }, [props.phone])

  return <MaterialAutocompleteField {...props} onChange={onChange} />
})

const WrappedField = ({ classsesComponent, ...props }) => {
  const classes = useStyles(props)
  return (
    <div className={classes.fieldWrapper}>
      <Field {...props} classes={classsesComponent} />
    </div>
  )
}

WrappedField.dislayName = "AutocompleteRegionByPhoneField"
WrappedField.defaultProps = {
  component: AutocompleteRegionByPhoneField,
  validate: autocompleteValidator,
  defaultValue: null,
  options: REGIONS,
  validateOnBlur: false,
  fullWidth: true,
  phone: "",
  apiUrl: "https://api-app.sovcombank.ru/",
}

export default WrappedField
