"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
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