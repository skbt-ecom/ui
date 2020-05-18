"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = debounce;

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

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

    timerId = (0, _setTimeout2["default"])(doSmth, delay);
  };
}