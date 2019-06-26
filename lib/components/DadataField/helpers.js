"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestionValue = getSuggestionValue;
exports.getDadataValue = getDadataValue;

function getSuggestionValue(suggestion) {
  return suggestion.value;
}

function getDadataValue(type, isSuggestionSelected, currentSuggestion, valueInState) {
  if (type === 'fio') {
    return isSuggestionSelected ? currentSuggestion : valueInState.trim();
  } else {
    // type === 'address'
    return isSuggestionSelected ? currentSuggestion : {
      data: {}
    };
  }
}