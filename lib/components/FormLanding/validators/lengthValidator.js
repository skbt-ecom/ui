"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = lengthValidator;

/**
 *
 * @param {string} str
 * @param {number} length
 */
function lengthValidator(str, length) {
  return str.length === length ? null : 'Заполните поле';
}