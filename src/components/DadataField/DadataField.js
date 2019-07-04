import React, { useState, useRef } from 'react';
import Autosuggest from 'react-autosuggest';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

import { getDadataValue, getSuggestionValue } from './helpers';
import getDadata from './getDadata';
import debounce from '../../utils/debounce';

import useStyles from './styles';

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

// TODO: switch to useRef()
let _isSuggestionSelected = false;
let _currentSuggestion = {};

export default React.memo(function IntegrationAutosuggest(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    single: props.value || '',
  });
  const [stateSuggestions, setStateSuggestions] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const inputValue = useRef('');
  const setDebouncedSuggestions = useRef(
    debounce(inputValue => {
      const { type, dadataOptions } = props;
      getDadata(type, inputValue, dadataOptions).then(({ suggestions }) => {
        setStateSuggestions(suggestions);
      });
    }, 500)
  );

  const getSuggestions = value => {
    inputValue.current = value.toLowerCase().trim();
    setDebouncedSuggestions.current(inputValue.current);
  };

  const handleSuggestionsFetchRequested = ({ value }) => {
    setStateSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    if (stateSuggestions.length) {
      setStateSuggestions([]);
    }
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

  const {
    label,
    placeholder,
    onChange,
    dadataOptions,
    value,
    ...otherInputProps
  } = props;

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
          inputRef: node => {
            setAnchorEl(node);
          },
          ...otherInputProps,
          onBlur,
        }}
        theme={{
          suggestionsContainer: classes.suggestionsContainer,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={({ containerProps, children }) => (
          <Popper
            anchorEl={anchorEl}
            open={Boolean(children)}
            className={classes.popper}
          >
            <Paper
              square
              {...containerProps}
              style={{ width: anchorEl ? anchorEl.clientWidth : undefined }}
            >
              {children}
            </Paper>
          </Popper>
        )}
      />
    </div>
  );
});
