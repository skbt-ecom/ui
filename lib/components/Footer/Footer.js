"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("../Container"));

var _PhoneMain = _interopRequireDefault(require("../PhoneMain"));

var _SocialLinks = _interopRequireDefault(require("./SocialLinks"));

var _StoreLinks = _interopRequireDefault(require("./StoreLinks"));

var _styles = _interopRequireDefault(require("./styles"));

var Footer = function Footer(props, ref) {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isHide = _useState2[0],
      setIsHide = _useState2[1];

  var classes = (0, _styles["default"])(props);
  var left = props.left,
      right = props.right,
      shortText = props.shortText,
      restText = props.restText,
      phone = props.phone,
      phones = props.phones,
      phoneHint = props.phoneHint;

  function showRestLigal() {
    setIsHide(false);
  }

  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: classes.footer,
    ref: ref
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    fixed: false
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.inner
  }, left ? left : /*#__PURE__*/_react["default"].createElement(_PhoneMain["default"], {
    phone: phone,
    phones: phones,
    phoneHint: phoneHint,
    classes: {
      phoneContainer: classes.phoneContainer,
      phoneNum: classes.phoneNum,
      phoneMultiple: classes.phoneMultiple,
      phoneHint: classes.phoneHint
    }
  }), right ? right : /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.copyright
  }, /*#__PURE__*/_react["default"].createElement(_SocialLinks["default"], null), /*#__PURE__*/_react["default"].createElement("p", null, "\xA9 2004-", new Date().getFullYear(), ", \u041F\u0410\u041E \xAB\u0421\u043E\u0432\u043A\u043E\u043C\u0431\u0430\u043D\u043A\xBB", /*#__PURE__*/_react["default"].createElement("br", null), "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"), /*#__PURE__*/_react["default"].createElement("p", null, "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0411\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u2116963 \u043E\u0442 5 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2014 \u0433."), /*#__PURE__*/_react["default"].createElement(_StoreLinks["default"], null))), shortText && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.ligal
  }, /*#__PURE__*/_react["default"].createElement("div", null, shortText), restText && isHide && /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.showMore,
    onClick: showRestLigal
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F"), !isHide && /*#__PURE__*/_react["default"].createElement("div", null, restText))));
};

var ForwardedFooter = /*#__PURE__*/_react["default"].forwardRef(Footer);

ForwardedFooter.defaultProps = {
  shortText: '',
  restText: ''
};

var _default = /*#__PURE__*/_react["default"].memo(ForwardedFooter);

exports["default"] = _default;