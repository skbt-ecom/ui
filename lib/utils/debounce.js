"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = debounce;

/**
 *
 * @param {function} fn  function which must running with debounce
 * @param {number} [delay=2000] delay, when calling fn
 */
function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  var timerId = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var doSmth = function doSmth() {
      fn.apply(_this, args);
      timerId = null;
    };

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(doSmth, delay);
  };
}