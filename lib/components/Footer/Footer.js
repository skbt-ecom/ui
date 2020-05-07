"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("../Container"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Box = _interopRequireDefault(require("../Box"));

var _PhoneMain = _interopRequireDefault(require("../PhoneMain"));

var _icon_vk = _interopRequireDefault(require("./icon_vk.svg"));

var _icon_fb = _interopRequireDefault(require("./icon_fb.svg"));

var _icon_ok = _interopRequireDefault(require("./icon_ok.svg"));

var _icon_tw = _interopRequireDefault(require("./icon_tw.svg"));

var _icon_appstore = _interopRequireDefault(require("./icon_appstore.svg"));

var _icon_gplay = _interopRequireDefault(require("./icon_gplay.svg"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Footer = function Footer(props, ref) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
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
  }), right ? right : /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    order: 1,
    className: classes.copyright
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    alignItems: "center",
    className: classes.social
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.icon
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://vk.com/sovcombank",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _icon_vk["default"],
    alt: "vk"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.icon
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "http://www.facebook.com/sovcombank",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _icon_fb["default"],
    alt: "fb"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.icon
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://ok.ru/paosovcombank",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _icon_ok["default"],
    alt: "ok"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.icon
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://twitter.com/sovcombank",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _icon_tw["default"],
    alt: "tw"
  })))), /*#__PURE__*/_react["default"].createElement("p", null, "\xA9 2004-", new Date().getFullYear(), ", \u041F\u0410\u041E \xAB\u0421\u043E\u0432\u043A\u043E\u043C\u0431\u0430\u043D\u043A\xBB", /*#__PURE__*/_react["default"].createElement("br", null), "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"), /*#__PURE__*/_react["default"].createElement("p", null, "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0411\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u2116963 \u043E\u0442 5 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2014 \u0433."), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    justifyContent: "space-between",
    className: classes.store
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: classes.appstore,
    href: "https://apps.apple.com/ru/app/halva/id1208055056",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _icon_appstore["default"],
    alt: "App Store"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://play.google.com/store/apps/details?id=ru.sovcomcard.halva.v1",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _icon_gplay["default"],
    alt: "Google Play"
  }))))), shortText && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.ligal
  }, /*#__PURE__*/_react["default"].createElement("div", null, shortText), restText && isHide && /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.showMore,
    onClick: showRestLigal
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F"), !isHide && /*#__PURE__*/_react["default"].createElement("div", null, restText))));
};

var ForwardedFooter = _react["default"].forwardRef(Footer);

ForwardedFooter.defaultProps = {
  shortText: '',
  restText: ''
};

var _default = _react["default"].memo(ForwardedFooter);

exports["default"] = _default;