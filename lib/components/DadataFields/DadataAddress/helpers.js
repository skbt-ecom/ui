"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.specifySuggestion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _getDadata = require("../getDadata");

var specifySuggestion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(dadataValue) {
    var getDadataResult, specifiedSuggestion;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _getDadata.getDadata)('address', dadataValue.unrestricted_value, {
              count: 1,
              restrict_value: true
            });

          case 2:
            getDadataResult = _context.sent;
            specifiedSuggestion = getDadataResult && getDadataResult.suggestions && getDadataResult.suggestions[0];
            return _context.abrupt("return", specifiedSuggestion);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function specifySuggestion(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.specifySuggestion = specifySuggestion;