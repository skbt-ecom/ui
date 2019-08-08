"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.discreteSliderProps = exports.sliderProps = exports.inputProps = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputProps = {
  suffix: ' ₽'
};
exports.inputProps = inputProps;
var sliderProps = {
  suffix: ' ₽'
};
exports.sliderProps = sliderProps;

var discreteSliderProps = _defineProperty({
  suffix: ' ₽',
  step: null,
  marks: true
}, "marks", [{
  value: 100,
  label: '0°C'
}, {
  value: 500,
  label: '50°C'
}, {
  value: 1000,
  label: '100°C'
}]);

exports.discreteSliderProps = discreteSliderProps;