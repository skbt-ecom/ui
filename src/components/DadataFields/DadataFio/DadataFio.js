import React, { useCallback } from "react"
import DadataAutocomplete from "../DadataAutocomplete"

const FioDadata = ({ onBlur, ...props }) => {
  const handleBlur = useCallback(
    (e, { dadataValue, inputValue, isDadataValueActual }) => {
      if (!dadataValue || !dadataValue.data) {
        const [surname, name, patronymic] = inputValue.split(" ")
        dadataValue = {}
        dadataValue.data = { surname, name, patronymic }
        dadataValue.unrestricted_value = inputValue
        dadataValue.value = inputValue
      }
      onBlur(e, { dadataValue, inputValue, isDadataValueActual })
    },
    [onBlur]
  )

  return (
    <DadataAutocomplete
      {...props}
      type={"fio"}
      onBlur={handleBlur}
      // incameValue={props.incameValue}
      // error={props.error}
      // helperText={props.helperText}
    />
  )
}

export default React.memo(FioDadata)
