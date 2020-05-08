"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDebounce;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//https://habr.com/ru/post/492248/
// Наш хук
function useDebounce(value) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

  // Состояние и сеттер для отложенного значения
  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  (0, _react.useEffect)(function () {
    // Выставить debouncedValue равным value (переданное значение)
    // после заданной задержки
    var handler = setTimeout(function () {
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