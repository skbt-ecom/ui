"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = useDebounce;

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = require("react");

//https://habr.com/ru/post/492248/
// Наш хук
function useDebounce(value) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

  // Состояние и сеттер для отложенного значения
  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  (0, _react.useEffect)(function () {
    // Выставить debouncedValue равным value (переданное значение)
    // после заданной задержки
    var handler = (0, _setTimeout2["default"])(function () {
      setDebouncedValue(value);
    }, delay); // Вернуть функцию очистки, которая будет вызываться каждый раз, когда ...
    // ... useEffect вызван снова. useEffect будет вызван снова, только если ...
    // ... value будет изменено (смотри ниже массив зависимостей).
    // Так мы избегаем изменений debouncedValue, если значение value ...
    // ... поменялось в рамках интервала задержки.
    // Таймаут очищается и стартует снова.
    // Что бы сложить это воедино: если пользователь печатает что-то внутри ...
    // ... нашего приложения в поле поиска, мы не хотим, чтобы debouncedValue...
    // ... не менялось до тех пор, пока он не прекратит печатать дольше, чем 500ms.

    return function () {
      clearTimeout(handler);
    };
  }, // Вызывается снова, только если значение изменится
  // мы так же можем добавить переменную "delay" в массива зависимостей ...
  // ... если вы собираетесь менять ее динамически.
  [value, delay]);
  return debouncedValue;
}