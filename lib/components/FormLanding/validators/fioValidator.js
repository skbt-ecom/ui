"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fioValidator = void 0;

var _requiredValidator = require("./requiredValidator");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var FIO_ERROR_TXT = 'Введите фамилию, имя (и отчество, если есть)';

var validateFioStrValue = function validateFioStrValue(value) {
  var trimmedValue = value.trim();

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

  if (_typeof(value.data) === 'object') {
    return validateFioDadataValue(value.data);
  }

  return null;
};

exports.fioValidator = fioValidator;