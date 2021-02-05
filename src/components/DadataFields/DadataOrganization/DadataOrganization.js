import React, { useCallback } from "react"
import DadataAutocomplete from "../DadataAutocomplete"

const DadataOrganization = ({ onBlur, ...props }) => {
  const handleBlur = useCallback(
    (e, { dadataValue, inputValue, isDadataValueActual }) => {
      onBlur(e, { dadataValue, inputValue, isDadataValueActual })
    },
    [onBlur]
  )

  return <DadataAutocomplete {...props} type="party" onBlur={handleBlur} />
}

export default DadataOrganization