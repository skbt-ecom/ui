import React, { useCallback } from "react"
import DadataAutocomplete from "../DadataAutocomplete"

import { specifySuggestion } from "./helpers"

const DadataAddress = ({ onBlur, ...props }) => {
  const handleBlur = useCallback(
    (e, values) => {
      const { dadataValue } = values

      if (dadataValue && !dadataValue?.data?.postal_code) {
        // spike, because sometimes dadata not returns postal code
        // we must do specific query for only one suggestion
        specifySuggestion(dadataValue).then((specifiedSuggestion) => {
          if (specifiedSuggestion) {
            onBlur(e, {
              ...values,
              dadataValue: specifiedSuggestion,
              isDadataValueActual: true,
            })
          }
        })
      } else {
        onBlur(e, values)
      }
    },
    [onBlur]
  )

  return <DadataAutocomplete {...props} type={"address"} onBlur={handleBlur} />
}

export default DadataAddress
