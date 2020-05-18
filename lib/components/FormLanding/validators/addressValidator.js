"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.addressWithFlatValidator = exports.addressValidator = void 0;

var _flat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/flat"));

var _requiredValidator = require("./requiredValidator");

/**
 *
 * @param {object} dadataValue DadataField's value
 */
var addressValidator = function addressValidator(dadataValue) {
  if ((0, _requiredValidator.requiredValidator)(dadataValue)) {
    return 'Выберите значение из списка';
  }

  var _dadataValue$data = dadataValue.data,
      city = _dadataValue$data.city,
      settlement = _dadataValue$data.settlement,
      house = _dadataValue$data.house;

  if (!(city || settlement)) {
    return 'Укажите город или населенный пункт';
  }

  if (!house) {
    return 'Укажите дом';
  }

  return null;
};
/**
 *
 * @param {object} dadataValue DadataField's value
 */


exports.addressValidator = addressValidator;

var addressWithFlatValidator = function addressWithFlatValidator(dadataValue) {
  var addressValidatorResult = addressValidator(dadataValue);

  if (addressValidatorResult) {
    return {
      addressDadata: addressValidatorResult
    };
  }

  var flat = (0, _flat["default"])(dadataValue.data),
      isNoFlat = dadataValue.isNoFlat;

  if (!flat && !isNoFlat) {
    return {
      flat: 'Укажите квартиру'
    };
  }

  return null;
};

exports.addressWithFlatValidator = addressWithFlatValidator;