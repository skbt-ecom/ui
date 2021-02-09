import React, { useCallback } from "react"
import DadataAutocomplete from "../DadataAutocomplete"
import useStyles from "./styles"

const DadataOrganization = ({ onBlur, ...props }) => {
  const classes = useStyles()
  const handleBlur = useCallback(
    (e, { dadataValue, inputValue, isDadataValueActual }) => {
      onBlur(e, { dadataValue, inputValue, isDadataValueActual })
    },
    [onBlur]
  )

  return (
    <DadataAutocomplete
      {...props}
      type="party"
      onBlur={handleBlur}
      renderOption={(option) => (
        <div className={classes.option}>
          <p>{option.value}</p>
          <span className={classes.inn}>ИНН: {option.data.inn}</span>
        </div>
      )}
    />
  )
}

export default DadataOrganization
