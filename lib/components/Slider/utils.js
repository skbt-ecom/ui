"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = exports.toSlider = exports.fromSlider = void 0;

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

  return parseInt(out, 10);
});
exports.round = round;