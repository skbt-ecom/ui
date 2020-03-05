"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requiredValidator = void 0;

/**
 *
 * @param {number|string|boolean|} value
 */
var requiredValidator = function requiredValidator(value) {
  return value || value === 0 ? null : 'Заполните поле';
};

exports.requiredValidator = requiredValidator;