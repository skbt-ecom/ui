"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.discreteSliderProps = exports.sliderProps = exports.inputProps = void 0;
var inputProps = {
  suffix: ' ₽'
};
exports.inputProps = inputProps;
var sliderProps = {
  suffix: ' ₽'
};
exports.sliderProps = sliderProps;
var discreteSliderProps = {
  suffix: ' ₽',
  step: null,
  marks: [{
    value: 100,
    label: '0°C'
  }, {
    value: 500,
    label: '50°C'
  }, {
    value: 1000,
    label: '100°C'
  }]
};
exports.discreteSliderProps = discreteSliderProps;