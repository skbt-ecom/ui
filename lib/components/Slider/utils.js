"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.round = exports.toSlider = exports.fromSlider = void 0;

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var fromSlider = (0, _memoizeOne["default"])(function (value) {
  return Math.round(Math.pow(10, value));
});
exports.fromSlider = fromSlider;
var toSlider = (0, _memoizeOne["default"])(function (value) {
  return Math.log(value) / Math.log(10);
});
exports.toSlider = toSlider;
var round = (0, _memoizeOne["default"])(function (n) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  n = n.toFixed(0);
  var digits = n.length;
  var out = n.substr(0, Math.min(digits, threshold));

  if (digits > threshold) {
    out = out + '000000000000'.substr(0, digits - threshold);
  }

  return (0, _parseInt2["default"])(out, 10);
});
exports.round = round;