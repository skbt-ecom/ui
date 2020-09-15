"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.addressDadataValidator = exports.addressFlatDadataValidator = void 0;

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
 * @param {object} dadataAddressFlat DadataAddressFlat value
 */


var addressFlatDadataValidator = function addressFlatDadataValidator(dadataAddressFlat) {
  var _dadataAddressFlat$da = dadataAddressFlat.dadataValue,
      dadataValue = _dadataAddressFlat$da === void 0 ? {} : _dadataAddressFlat$da;
  var inputFlat = dadataValue.inputFlat,
      isNoFlat = dadataValue.isNoFlat,
      value = dadataValue.value;

  if ((0, _requiredValidator.requiredValidator)(value)) {
    return {
      addressDadata: 'Выберите значение из списка'
    };
  }

  var addressValidatorResult = addressValidator(dadataValue);

  if (addressValidatorResult) {
    return {
      addressDadata: addressValidatorResult
    };
  }

  if (!inputFlat && !isNoFlat) {
    return {
      flat: 'Укажите квартиру'
    };
  }

  return null;
};
/**
 *
 * @param {object} dadataAddress DadataAddress value
 */


exports.addressFlatDadataValidator = addressFlatDadataValidator;

var addressDadataValidator = function addressDadataValidator(dadataAddress) {
  var dadataValue = dadataAddress.dadataValue;

  if ((0, _requiredValidator.requiredValidator)(dadataValue)) {
    return 'Выберите значение из списка';
  }

  return addressValidator(dadataValue);
};

exports.addressDadataValidator = addressDadataValidator;