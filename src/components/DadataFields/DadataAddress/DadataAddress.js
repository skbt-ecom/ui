import React, { useCallback } from "react"
import DadataAutocomplete from "../DadataAutocomplete"

import { specifySuggestion } from "./helpers"

const DadataAddress = ({ onBlur, url, ...props }) => {
  const handleBlur = useCallback(
    (e, values) => {
      const { dadataValue } = values

      if (dadataValue && !dadataValue?.data?.postal_code) {
        // spike, because sometimes dadata not returns postal code
        // we must do specific query for only one suggestion
        specifySuggestion(dadataValue, url).then((specifiedSuggestion) => {
          if (specifiedSuggestion) {
            onBlur(e, {
              ...values,
              dadataValue: specifiedSuggestion,
              isDadataValueActual: true,
            })
          } else {
            onBlur(e, values)
          }
        })
      } else {
        onBlur(e, values)
      }
    },
    [onBlur, url]
  )

  return <DadataAutocomplete url={url} {...props} type="address" onBlur={handleBlur} />
}

export default DadataAddress
