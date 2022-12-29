import React, { useEffect, useState, useRef } from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import CircularProgress from "@material-ui/core/CircularProgress"
import { getDadata } from "../getDadata"
import withSpaceForHelperTxt from "../../HOCs/withSpaceForHelperTxt"

const DadataAutocomplete = ({
  type,
  incomingValue,
  dadataOptions,
  renderOption,
  onBlur,
  value,
  url,
  isGetData = true,
  ...props
}) => {
  const [options, setOptions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [dadataValue, setDadataValue] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const isIncameValue = useRef(false)

  useEffect(() => {
    if (!value) {
      setDadataValue(null)
      setInputValue("")
      setOptions([])
    }
  }, [value])

  useEffect(() => {
    let active = true

    const makeIncameValueActions = (suggestions) => {
      const dataToOnBlur = {
        dadataValue: null,
        inputValue,
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

    function fetchData() {
      setIsLoading(true)

      getDadata(type, inputValue, dadataOptions, url).then((response) => {
        let suggestions = []
        if (response?.suggestions) {
          suggestions = response.suggestions
        }

        if (response?.matches) {
          suggestions = response.matches.map((i) => ({ value: i.model_mark }))
        }

        if (active) {
          setOptions(suggestions)
          if (isIncameValue.current) {
            makeIncameValueActions(suggestions)
          }
        }

        setIsLoading(false)
      })
    }

    if (inputValue && isGetData) {
      fetchData()
    } else {
      setOptions([])
      setDadataValue(null)
    }

    return () => {
      active = false
    }
  }, [inputValue, isGetData, type, dadataOptions, onBlur, url])

  useEffect(() => {
    if (incomingValue) {
      isIncameValue.current = true
      setInputValue(incomingValue)
    }
  }, [incomingValue])

  useEffect(() => {
    if (inputValue && dadataValue && dadataValue.value) {
      if (inputValue !== dadataValue.value) {
        setDadataValue({ value: inputValue, data: null, isDadataValueActual: true })
      }
    }
  }, [inputValue, dadataValue])

  const handleBlur = (e) => {
    const isDadataValueActual = Boolean(dadataValue && dadataValue.value === inputValue)
    onBlur(e, { dadataValue, inputValue, isDadataValueActual })
  }

  return (
    <Autocomplete
      getOptionLabel={(option) => option.value || ""}
      filterOptions={(x) => (Array.isArray(x) ? x : [])}
      freeSolo
      autoComplete
      disableClearable
      options={Array.isArray(options) ? options : []}
      includeInputInList
      loading={isLoading}
      value={dadataValue}
      onChange={(_, newValue) => setDadataValue(newValue)}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      onBlur={handleBlur}
      clearText="Очистить"
      closeText="Закрыть"
      loadingText="Загрузка..."
      noOptionsText="Нет вариантов"
      openText="Открыть"
      renderOption={renderOption}
      renderInput={(params) => (
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
