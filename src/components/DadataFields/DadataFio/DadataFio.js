import React, { useCallback } from "react"
import DadataAutocomplete from "../DadataAutocomplete"

const FioDadata = ({ onBlur, ...props }) => {
  const handleBlur = useCallback(
    (e, { dadataValue, inputValue, isDadataValueActual }) => {
      const dadataVal = dadataValue || {}

      if (!dadataValue || !dadataValue.data) {
        const [surname, name, patronymic] = inputValue.split(" ")
        dadataVal.data = { surname, name, patronymic }
        dadataVal.unrestricted_value = inputValue
        dadataVal.value = inputValue
      }

      onBlur(e, { dadataValue: dadataVal, inputValue, isDadataValueActual })
    },
    [onBlur]
  )

  return (
    <DadataAutocomplete
      {...props}
      type="fio"
      onBlur={handleBlur}
      // incameValue={props.incameValue}
      // error={props.error}
      // helperText={props.helperText}
    />
  )
}

export default React.memo(FioDadata)
