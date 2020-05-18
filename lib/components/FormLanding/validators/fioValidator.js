"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.fioValidator = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _trim = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim"));

var _requiredValidator = require("./requiredValidator");

var FIO_ERROR_TXT = 'Введите фамилию, имя (и отчество, если есть)';

var validateFioStrValue = function validateFioStrValue(value) {
  var trimmedValue = (0, _trim["default"])(value).call(value);

  if (trimmedValue.split(' ').length < 2) {
    return FIO_ERROR_TXT;
  }

  var re = /^[\u0400-\u04FF -]+$/;

  if (!re.test(trimmedValue)) {
    return 'Поле должно содержать только кириллицу';
  }

  return null;
};

var validateFioDadataValue = function validateFioDadataValue(dadataObj) {
  var name = dadataObj.name,
      surname = dadataObj.surname;

  if (!name || !surname) {
    return FIO_ERROR_TXT;
  }

  return null;
};
/**
 *
 * @param {object | string} value DadataField's value
 */


var fioValidator = function fioValidator(value) {
  // const isDadataFIOHasEmptyFields = ({ name, surname }) => name && surname;
  if ((0, _requiredValidator.requiredValidator)(value)) {
    return FIO_ERROR_TXT;
  }

  if (typeof value === 'string') {
    return validateFioStrValue(value);
  }

  if ((0, _typeof2["default"])(value.data) === 'object') {
    return validateFioDadataValue(value.data);
  }

  return null;
};

exports.fioValidator = fioValidator;