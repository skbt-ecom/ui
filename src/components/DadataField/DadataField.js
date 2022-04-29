import React, { useState, useRef, useEffect } from "react"
import Autorenew from "@material-ui/icons/Autorenew"
import InputAdornment from "@material-ui/core/InputAdornment"
import Autosuggest from "react-autosuggest"
import TextField from "@material-ui/core/TextField"
import Paper from "@material-ui/core/Paper"
import MenuItem from "@material-ui/core/MenuItem"

import { getSuggestionValue } from "./helpers"
import getDadata from "./getDadata"
import withSpaceForHelperTxt from "../HOCs/withSpaceForHelperTxt"

import useStyles from "./styles"

function renderInputComponent(inputProps) {
  const { classes, isLoading, ...other } = inputProps

  return (
    <TextField
      multiline
      InputProps={{
        classes: {
          input: classes.input,
        },
        endAdornment: isLoading && (
          <InputAdornment position="end">
            <Autorenew color="primary" className={classes.loadingIcon} />
          </InputAdornment>
        ),
      }}
      disabled={isLoading}
      {...other}
    />
  )
}

function renderSuggestion(suggestion, { isHighlighted }) {
  return (
    <MenuItem component="div" selected={isHighlighted}>
      <div>{suggestion.value}</div>
    </MenuItem>
  )
}

if (process.env.NODE_ENV !== "production") {
  console.error('⚠️ Deprecation component "DadataField". Use the "DadataFields/Dadata*.js" instead')
}
/**
 * @deprecated use DadataFields/Dadata*.js instead
 */
const DadataComponent = React.memo((props) => {
  const { label, placeholder, onChange, dadataOptions, value, url, ...otherInputProps } = props
  const classes = useStyles(props)
  const [state, setState] = useState({
    single: typeof value === "string" ? value : "",
  })
  const [stateSuggestions, setStateSuggestions] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const isSuggestionSelected = useRef(false)
  const currentSuggestion = useRef(null)

  const inputValue = useRef("")
  const setSuggestions = useRef((inputValue1, dadataOptions1) => {
    getDadata(props.type, inputValue1, dadataOptions1, url).then(({ suggestions }) => {
      setStateSuggestions(suggestions)
    })
  })

  useEffect(() => {
    // only when 'fio' type, because no tested in address type
    if (typeof value === "string") {
      setState({ single: value || "" })
    }
  }, [value])

  const getSuggestions = (value1) => {
    inputValue.current = value1.toLowerCase()
    setSuggestions.current(inputValue.current, dadataOptions)
  }

  const handleSuggestionsFetchRequested = ({ value: v }) => {
    setStateSuggestions((prev) => getSuggestions(v) || prev)
  }

  const handleSuggestionsClearRequested = () => {
    if (stateSuggestions && stateSuggestions.length) {
      setStateSuggestions([])
    }
  }

  const handleChange = (event, { newValue }) => {
    isSuggestionSelected.current = false
    setState({
      ...state,
      single: newValue,
    })
  }

  const onSuggestionSelected = (event, { suggestion }) => {
    const { type } = props
    isSuggestionSelected.current = true
    // spike, because dadata not returns postal code
    // we must do specific query for only one suggestion
    if (type === "address" && !suggestion.data.postal_code) {
      setIsLoading(true)
      getDadata(type, suggestion.unrestricted_value, {
        count: 1,
        restrict_value: true,
        url,
      }).then((res) => {
        currentSuggestion.current = res && res.suggestions && res.suggestions[0]
        onChange(currentSuggestion.current)
        setIsLoading(false)
      })
    } else {
      currentSuggestion.current = suggestion
      onChange(currentSuggestion.current)
    }
  }

  const onBlur = () => {
    const { type } = props
    if (isSuggestionSelected.current) {
      return
    }
    // if value not selected from list
    if (state.single) {
      const value1 = type === "fio" ? state.single.trim() : currentSuggestion.current
      onChange(value1)
      return
    }
    onChange(null)
  }

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions || [],
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
    onSuggestionSelected,
  }

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          label,
          placeholder,
          isLoading,
          ...otherInputProps,
          value: state.single,
          onChange: handleChange,
          classes,
          onBlur,
        }}
        theme={{
          suggestionsContainer: classes.suggestionsContainer,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={(options) => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    </div>
  )
})

export default withSpaceForHelperTxt(DadataComponent)
