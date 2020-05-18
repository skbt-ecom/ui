"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.phoneValidator = void 0;

/**
 *
 * @param {string} phone ex. 71111111111
 */
var phoneValidator = function phoneValidator(phone) {
  if (phone.length !== 11) {
    return 'Введите номер телефона полностью';
  }

  var re = /^(8|7)(3|4|5|6|8|9)/;

  if (!re.test(phone)) {
    return 'Код города/оператора должен начинаться с цифры 3, 4, 5, 6, 8, 9';
  }

  return null;
};

exports.phoneValidator = phoneValidator;