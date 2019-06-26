export function getSuggestionValue(suggestion) {
  return suggestion.value;
}

export function getDadataValue(
  type,
  isSuggestionSelected,
  currentSuggestion,
  valueInState
) {
  if (type === 'fio') {
    return isSuggestionSelected ? currentSuggestion : valueInState.trim();
  } else {
    // type === 'address'
    return isSuggestionSelected ? currentSuggestion : { data: {} };
  }
}
