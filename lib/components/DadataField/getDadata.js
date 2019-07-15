"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } else { ownKeys(arguments[i]).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(arguments[i], key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * @param {string} type Dadata's type (fio|address)
 * @param {object} data
 * @param {object} options Dadata's options
 * @returns {Promise} Promise object with Dadata's response (as json if resolve)
 */
var getDadata = function getDadata(type, data) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var DADATA_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest';
  var API_KEY = '3696edb148443072e2f9b52b5a7cbc8a77f8745f';

  var query = _objectSpread({
    query: data
  }, options);

  return fetch("".concat(DADATA_URL, "/").concat(type), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: "Token ".concat(API_KEY)
    },
    body: JSON.stringify(query)
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.error('Dadata error', err);
  });
};

var _default = (0, _memoizeOne["default"])(getDadata);

exports["default"] = _default;