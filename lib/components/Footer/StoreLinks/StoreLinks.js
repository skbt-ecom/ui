"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = StoreLinks;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _IconAppstore = _interopRequireDefault(require("./IconAppstore"));

var _IconGPlay = _interopRequireDefault(require("./IconGPlay"));

var _styles = _interopRequireDefault(require("./styles"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var defaultItems = [{
  href: 'https://apps.apple.com/ru/app/halva/id1208055056',
  text: 'App Store',
  Icon: _IconAppstore["default"]
}, {
  href: 'https://play.google.com/store/apps/details?id=ru.sovcomcard.halva.v1',
  text: 'Google Play',
  Icon: _IconGPlay["default"]
}];

function StoreLinks(props) {
  var classes = (0, _styles["default"])();
  var links = props.links;
  var items = [_objectSpread({}, defaultItems[0]), _objectSpread({}, defaultItems[1])];

  if (links) {
    if (links.appStore) {
      items[0].href = links.appStore;
    }

    if (links.googlePlay) {
      items[1].href = links.googlePlay;
    }
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.store
  }, (0, _map["default"])(items).call(items, function (_ref, i) {
    var href = _ref.href,
        text = _ref.text,
        Icon = _ref.Icon;
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: i,
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: classes.link
    }, /*#__PURE__*/_react["default"].createElement(Icon, null), /*#__PURE__*/_react["default"].createElement("span", null, text));
  }));
}