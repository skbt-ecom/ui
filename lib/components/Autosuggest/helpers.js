"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getSuggestions = getSuggestions;
exports.getSuggestionValue = getSuggestionValue;
exports.shouldRenderSuggestions = shouldRenderSuggestions;

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

function getSuggestions() {
  var suggestions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var inputValue = value.toLowerCase();
  var inputLength = inputValue.length;
  var count = 0;
  return (0, _filter["default"])(suggestions).call(suggestions, function (suggestion) {
    var _context;

    var keep = count < 5 && (0, _slice["default"])(_context = suggestion.value).call(_context, 0, inputLength).toLowerCase() === inputValue;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

function getSuggestionValue(suggestion) {
  return suggestion.value;
}

function shouldRenderSuggestions() {
  return true;
}