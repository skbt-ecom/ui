"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getAge = exports.maskDateToDate = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

/**
 *
 * @param {str} dateStr ex: 27.02.2020
 */
var maskDateToDate = function maskDateToDate(dateStr) {
  var _dateStr$split = dateStr.split('.'),
      _dateStr$split2 = (0, _slicedToArray2["default"])(_dateStr$split, 3),
      day = _dateStr$split2[0],
      month = _dateStr$split2[1],
      year = _dateStr$split2[2];

  return new Date(year, month - 1, day);
};
/**
 * from: https://stackoverflow.com/a/24267902/7136549
 * @param {date} bornDate
 */


exports.maskDateToDate = maskDateToDate;

var getAge = function getAge(bornDate) {
  var now = new Date();
  var birthday = new Date(now.getFullYear(), bornDate.getMonth(), bornDate.getDate());

  if (now >= birthday) {
    return now.getFullYear() - bornDate.getFullYear();
  }

  return now.getFullYear() - bornDate.getFullYear() - 1;
};

exports.getAge = getAge;