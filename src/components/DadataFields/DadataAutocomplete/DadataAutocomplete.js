import React, { useEffect, useState, useRef } from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import CircularProgress from "@material-ui/core/CircularProgress"
import { getDadata } from "../getDadata"
import withSpaceForHelperTxt from "../../HOCs/withSpaceForHelperTxt"

const DadataAutocomplete = ({ type, incomingValue, dadataOptions, onBlur, ...props }) => {
  const [options, setOptions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [dadataValue, setDadataValue] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const isIncameValue = useRef(false)

  useEffect(() => {
    let active = true

    const makeIncameValueActions = suggestions => {
      const dataToOnBlur = {
        dadataValue: null,
        inputValue: inputValue,
        isDadataValueActual: false,
      }

      if (suggestions.length) {
        const [suggestion] = suggestions

        setDadataValue(suggestion)
        dataToOnBlur.dadataValue = suggestion
        dataToOnBlur.isDadataValueActual = true
      } else {
        setInputValue(inputValue)
      }

      // reset to "false" to prevent useEffect run
      isIncameValue.current = false

      onBlur(null, dataToOnBlur)
    }

    async function fetchData() {
      setIsLoading(true)

      const response = await getDadata(type, inputValue, dadataOptions)

      let suggestions = []
      if (response.suggestions) {
        suggestions = response.suggestions
      }

      if (response.matches) {
        suggestions = response.matches.map(i => {
          return { value: i.model_mark }
        })
      }

      if (active) {
        setOptions(suggestions)
        if (isIncameValue.current) {
          makeIncameValueActions(suggestions)
        }
      }

      setIsLoading(false)
    }

    if (inputValue) {
      fetchData()
    }

    return () => {
      active = false
    }
  }, [inputValue, type, dadataOptions, onBlur])

  useEffect(() => {
    if (incomingValue) {
      isIncameValue.current = true
      setInputValue(incomingValue)
    }
  }, [incomingValue])

  const handleBlur = e => {
    const isDadataValueActual = Boolean(dadataValue && dadataValue.value === inputValue)
    onBlur(e, { dadataValue, inputValue, isDadataValueActual })
  }

  return (
    <Autocomplete
      getOptionLabel={option => option.value || ""}
      filterOptions={x => x}
      freeSolo
      autoComplete
      disableClearable
      options={options}
      includeInputInList
      loading={isLoading}
      value={dadataValue}
      onChange={(_, newValue) => setDadataValue(newValue)}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      onBlur={handleBlur}
      clearText={"Очистить"}
      closeText={"Закрыть"}
      loadingText={"Загрузка..."}
      noOptionsText={"Нет вариантов"}
      openText={"Открыть"}
      renderInput={params => (
        <TextField
          {...props}
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
}

export default React.memo(withSpaceForHelperTxt(DadataAutocomplete))
