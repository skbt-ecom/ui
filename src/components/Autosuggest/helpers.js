export function getFullSuggestionData(suggestions, value) {
  return suggestions.find(suggestion => suggestion.value === value);
}

export function getSuggestions(suggestions = [], value = '') {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return suggestions.filter(suggestion => {
    const keep =
      count < 5 &&
      suggestion.value.slice(0, inputLength).toLowerCase() === inputValue;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

export function getSuggestionValue(suggestion) {
  return suggestion.value;
}
export function shouldRenderSuggestions() {
  return true;
}
