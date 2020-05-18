"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.emailValidator = void 0;

var _trim = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim"));

/**
 *
 * @param {string} date
 */
var emailValidator = function emailValidator(emailStr) {
  var re = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,12}$/;
  return re.test((0, _trim["default"])(emailStr).call(emailStr)) ? null : 'Введите корректный email';
};

exports.emailValidator = emailValidator;