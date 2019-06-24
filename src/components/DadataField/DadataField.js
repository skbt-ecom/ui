import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';

import getDadata from './getDadata';
import debounce from '../../utils/debounce';

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      variant={'outlined'}
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  return (
    <MenuItem component="div" selected={isHighlighted}>
      <div>{suggestion.value}</div>
    </MenuItem>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.value;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing(2),
  },
}));

function getDadataValue(
  type,
  isSuggestionSelected,
  currentSuggestion,
  valueInState
) {
  if (type === 'fio') {
    return isSuggestionSelected ? currentSuggestion : valueInState;
  } else {
    // type === 'address'
    return isSuggestionSelected ? currentSuggestion : { data: {} };
  }
}

let _isSuggestionSelected = false;
let _currentSuggestion = {};

export default function IntegrationAutosuggest(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    single: '',
  });
  const [stateSuggestions, setSuggestions] = useState([]);

  const setDebouncedSuggestions = debounce(inputValue => {
    const { type, dadataOptions } = props;

    getDadata(type, inputValue, dadataOptions).then(({ suggestions }) => {
      setSuggestions(suggestions);
      // this.suggestions = [...suggestions];
    });
  }, 500);

  const getSuggestions = value => {
    const inputValue = value.toLowerCase();
    setDebouncedSuggestions(inputValue);
  };

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = (event, { newValue }) => {
    _isSuggestionSelected = false;
    setState({
      ...state,
      single: newValue,
    });
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    const { type, dadataOptions } = props;
    _isSuggestionSelected = true;

    // spike, because dadata not returns postal code
    // we must do specific query for only one suggestion
    if (type === 'address') {
      getDadata(type, suggestion.unrestricted_value, {
        ...dadataOptions,
        count: 1,
        restrict_value: true,
      }).then(res => {
        _currentSuggestion = res && res.suggestions && res.suggestions[0];
      });
    } else {
      _currentSuggestion = suggestion;
    }
  };

  const onBlur = e => {
    const { type } = props;
    const value = getDadataValue(
      type,
      _isSuggestionSelected,
      _currentSuggestion,
      state.single
    );
    props.onChange(value);
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions || [],
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
    onSuggestionSelected,
  };

  const { label, placeholder } = props;
  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          label,
          placeholder,
          value: state.single,
          onChange: handleChange,
          onBlur,
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    </div>
  );
}
