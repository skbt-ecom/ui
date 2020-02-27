"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailValidator = void 0;

/**
 *
 * @param {string} date
 */
var emailValidator = function emailValidator(emailStr) {
  var re = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,12}$/;
  return re.test(emailStr.trim()) ? null : 'Введите корректный email';
};

exports.emailValidator = emailValidator;