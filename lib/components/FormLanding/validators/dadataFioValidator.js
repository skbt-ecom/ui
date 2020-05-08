"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fioDadataValidator = void 0;

var _requiredValidator = require("./requiredValidator");

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
 * @param {object | string} dadataFio DadataFio value
 */


var fioDadataValidator = function fioDadataValidator(dadataFio) {
  var dadataValue = dadataFio.dadataValue,
      inputValue = dadataFio.inputValue,
      isDadataValueActual = dadataFio.isDadataValueActual;

  if ((0, _requiredValidator.requiredValidator)(inputValue)) {
    return FIO_ERROR_TXT;
  }

  return isDadataValueActual ? validateFioDadataValue(dadataValue) : validateFioStrValue(inputValue);
};

exports.fioDadataValidator = fioDadataValidator;