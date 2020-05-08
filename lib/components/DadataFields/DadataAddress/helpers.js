"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifySuggestion = void 0;

var _getDadata = require("../getDadata");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var specifySuggestion = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dadataValue) {
    var getDadataResult, specifiedSuggestion;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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