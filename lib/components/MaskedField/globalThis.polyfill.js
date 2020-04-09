"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  function e() {
    this.globalThis = this, delete t.prototype._T_;
  }

  'object' != (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && (this ? e() : (t.defineProperty(t.prototype, '_T_', {
    configurable: !0,
    get: e
  }), _T_));
}(Object);