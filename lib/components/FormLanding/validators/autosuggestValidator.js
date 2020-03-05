"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autosuggestValidator = void 0;

/**
 *
 * @param {obj} dadataValue
 */
var autosuggestValidator = function autosuggestValidator(_ref) {
  var value = _ref.value;
  return value ? null : 'Выберите значение из списка';
};

exports.autosuggestValidator = autosuggestValidator;