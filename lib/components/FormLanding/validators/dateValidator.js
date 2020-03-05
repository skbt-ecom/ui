"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateValidator = void 0;

/**
 *
 * @param {string} date
 */
var dateValidator = function dateValidator(dateStr) {
  var re = /^\d{2}.\d{2}.\d{4}$/;
  return re.test(dateStr) ? null : 'Введите корректную дату';
};

exports.dateValidator = dateValidator;