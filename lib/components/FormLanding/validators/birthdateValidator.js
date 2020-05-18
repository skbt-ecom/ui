"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.birthdateValidator = void 0;

var _dateValidator = require("./dateValidator");

var _date = require("../utils/date");

/**
 *
 * @param {*} dateStr
 * @param {*} validAgeMin
 * @param {*} validAgeMax default as 200, is a random great age
 */
var getIsAgeValid = function getIsAgeValid(dateStr, _ref) {
  var _ref$validAgeMin = _ref.validAgeMin,
      validAgeMin = _ref$validAgeMin === void 0 ? 0 : _ref$validAgeMin,
      _ref$validAgeMax = _ref.validAgeMax,
      validAgeMax = _ref$validAgeMax === void 0 ? 200 : _ref$validAgeMax;
  var parsedDate = (0, _date.maskDateToDate)(dateStr);
  var age = (0, _date.getAge)(parsedDate);
  return age >= validAgeMin && age <= validAgeMax;
};
/**
 *
 * @param {string} date
 */


var birthdateValidator = function birthdateValidator(date, validAgeObjValues) {
  var dateValidatorError = (0, _dateValidator.dateValidator)(date);

  if (dateValidatorError) {
    return dateValidatorError;
  }

  return getIsAgeValid(date, validAgeObjValues) ? null : 'Возраст не соответствует';
};

exports.birthdateValidator = birthdateValidator;