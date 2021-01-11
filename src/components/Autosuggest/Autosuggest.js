import React, { useState, useRef, useEffect } from "react"
import Autosuggest from "react-autosuggest"
import TextField from "@material-ui/core/TextField"
import Paper from "@material-ui/core/Paper"
import MenuItem from "@material-ui/core/MenuItem"

import { getSuggestions, getSuggestionValue, shouldRenderSuggestions } from "./helpers"
import withSpaceForHelperTxt from "../HOCs/withSpaceForHelperTxt"

import useStyles from "./styles"

function renderInputComponent(inputProps) {
  const { classes, ...other } = inputProps
  return (
    <TextField
      InputProps={{
        classes: {
          input: classes.input,
        },
      }}
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
const EMPTY_VALUE = { value: "", label: "" }

const AutoSuggestComponent = React.memo(function IntegrationAutosuggest(props) {
  const { label, placeholder, onChange, ...otherInputProps } = props
  const classes = useStyles(props)
  const [value, setValue] = useState(props.value || { ...EMPTY_VALUE })
  const [stateSuggestions, setSuggestions] = useState([])
  const isSuggestionSelected = useRef(false) // need to send props.onChange() in onBlur when suggestion not selected

  useEffect(() => {
    setValue(props.value || { value: "", label: "" })
  }, [props.value])

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(props.suggestions, value))
  }

  const handleSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const handleChange = (_, { newValue }) => {
    isSuggestionSelected.current = false
    setValue({ label: newValue, value: "" })
  }

  const onSuggestionSelected = (_, { suggestion }) => {
    isSuggestionSelected.current = true
    onChange(suggestion)
  }

  const onBlur = () => {
    if (!isSuggestionSelected.current) {
      onChange({ ...EMPTY_VALUE })
    }
  }

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions || [],
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
    shouldRenderSuggestions,
    onSuggestionSelected,
  }

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          label,
          placeholder,
          ...otherInputProps,
          onChange: handleChange,
          classes,
          value: value.label,
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

export default withSpaceForHelperTxt(AutoSuggestComponent)
