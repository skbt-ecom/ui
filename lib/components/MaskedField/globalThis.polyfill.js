"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

!function (t) {
  function e() {
    this.globalThis = this, delete t.prototype._T_;
  }

  'object' != (typeof globalThis === "undefined" ? "undefined" : (0, _typeof2["default"])(globalThis)) && (this ? e() : (t.defineProperty(t.prototype, '_T_', {
    configurable: !0,
    get: e
  }), _T_));
}(Object);