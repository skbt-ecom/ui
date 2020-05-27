"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "FAQBlock", {
  enumerable: true,
  get: function get() {
    return _Block["default"];
  }
});

_Object$defineProperty(exports, "FAQQuestion", {
  enumerable: true,
  get: function get() {
    return _Question["default"];
  }
});

_Object$defineProperty(exports, "FAQAnswer", {
  enumerable: true,
  get: function get() {
    return _Answer["default"];
  }
});

var _Block = _interopRequireDefault(require("./Block"));

var _Question = _interopRequireDefault(require("./Question"));

var _Answer = _interopRequireDefault(require("./Answer"));