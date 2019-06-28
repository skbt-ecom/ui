import React, { useState, useRef } from 'react';
import Autosuggest from 'react-autosuggest';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

import {
  getSuggestions,
  getSuggestionValue,
  shouldRenderSuggestions,
} from './helpers';

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

export default function IntegrationAutosuggest(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    single: '',
  });
  const [stateSuggestions, setSuggestions] = useState([]);
  const isSuggestionSelected = useRef(false); // need to send props.onChange() in onBlur when suggestion not selected
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(props.suggestions, value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = (event, { newValue }) => {
    isSuggestionSelected.current = false;
    setState({
      ...state,
      single: newValue,
    });
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    isSuggestionSelected.current = true;
    props.onChange(suggestion);
  };

  const onBlur = e => {
    if (!isSuggestionSelected.current) {
      props.onChange(null);
    }
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions || [],
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
    shouldRenderSuggestions,
    onSuggestionSelected,
  };

  const { label, placeholder, onChange, ...otherInputProps } = props;
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
          onBlur,
          ...otherInputProps,
        }}
        theme={{
          suggestionsContainer: classes.suggestionsContainer,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={({ containerProps, children }) => (
          <Popper anchorEl={anchorEl} open={Boolean(children)}>
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
}
