"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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