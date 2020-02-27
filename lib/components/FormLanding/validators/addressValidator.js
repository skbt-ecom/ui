"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addressWithFlatValidator = exports.addressValidator = void 0;

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

  var flat = dadataValue.data.flat,
      isNoFlat = dadataValue.isNoFlat;

  if (!flat && !isNoFlat) {
    return {
      flat: 'Укажите квартиру'
    };
  }

  return null;
};

exports.addressWithFlatValidator = addressWithFlatValidator;