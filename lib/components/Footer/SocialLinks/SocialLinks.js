"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = SocialLinks;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _react = _interopRequireDefault(require("react"));

var _IconVK = _interopRequireDefault(require("./IconVK"));

var _IconFacebook = _interopRequireDefault(require("./IconFacebook"));

var _IconOK = _interopRequireDefault(require("./IconOK"));

var _IconTwitter = _interopRequireDefault(require("./IconTwitter"));

var _styles = _interopRequireDefault(require("./styles"));

var items = [{
  href: 'https://vk.com/sovcombank',
  Icon: _IconVK["default"]
}, {
  href: 'https://facebook.com/sovcombank',
  Icon: _IconFacebook["default"]
}, {
  href: 'https://ok.ru/paosovcombank',
  Icon: _IconOK["default"]
}, {
  href: 'https://twitter.com/sovcombank',
  Icon: _IconTwitter["default"]
}];

function SocialLinks() {
  var classes = (0, _styles["default"])();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.social
  }, (0, _map["default"])(items).call(items, function (_ref, i) {
    var href = _ref.href,
        Icon = _ref.Icon;
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: i,
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: classes.link
    }, /*#__PURE__*/_react["default"].createElement(Icon, null));
  }));
}