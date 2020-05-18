"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.getDadata = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context3; (0, _forEach["default"])(_context3 = ownKeys(Object(source))).call(_context3, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

/**
 *
 * @param {string} type Dadata's type (fio|address)
 * @param {object} data
 * @param {object} options Dadata's options
 * @returns {Promise} Promise object with Dadata's response (as json if resolve)
 */
var getDadata = function getDadata(type, data) {
  var _context;

  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var DADATA_URL = 'https://api-app.sovcombank.ru/v1/cache/dadata';

  var query = _objectSpread({
    query: data
  }, options);

  return fetch((0, _concat["default"])(_context = "".concat(DADATA_URL, "/")).call(_context, type), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: (0, _stringify["default"])(query)
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.error('Dadata error', err);
  });
};

exports.getDadata = getDadata;