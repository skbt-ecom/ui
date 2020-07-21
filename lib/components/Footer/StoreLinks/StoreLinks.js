"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = StoreLinks;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _react = _interopRequireDefault(require("react"));

var _IconAppstore = _interopRequireDefault(require("./IconAppstore"));

var _IconGPlay = _interopRequireDefault(require("./IconGPlay"));

var _styles = _interopRequireDefault(require("./styles"));

var items = [{
  href: 'https://apps.apple.com/ru/app/halva/id1208055056',
  text: 'App Store',
  Icon: _IconAppstore["default"]
}, {
  href: 'https://play.google.com/store/apps/details?id=ru.sovcomcard.halva.v1',
  text: 'Google Play',
  Icon: _IconGPlay["default"]
}];

function StoreLinks() {
  var classes = (0, _styles["default"])();
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