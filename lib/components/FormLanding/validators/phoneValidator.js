"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phoneValidator = void 0;

/**
 *
 * @param {string} phone ex. 71111111111
 */
var phoneValidator = function phoneValidator() {
  var phone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return phone.length === 11 ? null : 'Введите номер телефона';
};

exports.phoneValidator = phoneValidator;