"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.birthdateValidator = void 0;

var _dateValidator = require("./dateValidator");

var _date = require("../utils/date");

var isTooYoung = function isTooYoung(dateStr, validAge) {
  var parsedDate = (0, _date.maskDateToDate)(dateStr);
  var age = (0, _date.getAge)(parsedDate);
  return age < validAge;
};
/**
 *
 * @param {string} date
 */


var birthdateValidator = function birthdateValidator(date, validAge) {
  var dateValidatorError = (0, _dateValidator.dateValidator)(date);

  if (dateValidatorError) {
    return dateValidatorError;
  }

  return isTooYoung(date, validAge) ? 'Возраст не соответствует' : null;
};

exports.birthdateValidator = birthdateValidator;