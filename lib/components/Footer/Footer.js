"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("../Container"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Box = _interopRequireDefault(require("../Box"));

var _icon_vk = _interopRequireDefault(require("./icon_vk.svg"));

var _icon_fb = _interopRequireDefault(require("./icon_fb.svg"));

var _icon_ok = _interopRequireDefault(require("./icon_ok.svg"));

var _icon_tw = _interopRequireDefault(require("./icon_tw.svg"));

var _icon_appstore = _interopRequireDefault(require("./icon_appstore.svg"));

var _icon_gplay = _interopRequireDefault(require("./icon_gplay.svg"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Footer(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isHide = _useState2[0],
      setIsHide = _useState2[1];

  var classes = (0, _styles["default"])(props);

  function showRestLigal() {
    setIsHide(false);
  }

  return _react["default"].createElement("footer", {
    className: classes.footer
  }, _react["default"].createElement(_Container["default"], null, _react["default"].createElement("div", {
    className: classes.inner
  }, _react["default"].createElement(_Box["default"], {
    flexGrow: 1
  }, _react["default"].createElement("div", {
    className: classes.phone
  }, "8 800 100-10-20"), _react["default"].createElement("div", {
    className: classes.phoneHint
  }, "\u0414\u043B\u044F \u0437\u0432\u043E\u043D\u043A\u043E\u0432 \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E")), _react["default"].createElement(_Box["default"], {
    order: 1,
    className: classes.copyright
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    alignItems: "center",
    className: classes.social
  }, _react["default"].createElement("div", {
    className: classes.icon
  }, _react["default"].createElement("a", {
    href: "https://vk.com/sovcombank",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react["default"].createElement("img", {
    src: _icon_vk["default"],
    alt: "vk"
  }))), _react["default"].createElement("div", {
    className: classes.icon
  }, _react["default"].createElement("a", {
    href: "http://www.facebook.com/sovcombank",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react["default"].createElement("img", {
    src: _icon_fb["default"],
    alt: "fb"
  }))), _react["default"].createElement("div", {
    className: classes.icon
  }, _react["default"].createElement("a", {
    href: "https://ok.ru/paosovcombank",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react["default"].createElement("img", {
    src: _icon_ok["default"],
    alt: "ok"
  }))), _react["default"].createElement("div", {
    className: classes.icon
  }, _react["default"].createElement("a", {
    href: "https://twitter.com/sovcombank",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react["default"].createElement("img", {
    src: _icon_tw["default"],
    alt: "tw"
  })))), _react["default"].createElement("p", null, "\xA9 2004-", new Date().getFullYear(), ", \u041F\u0410\u041E \xAB\u0421\u043E\u0432\u043A\u043E\u043C\u0431\u0430\u043D\u043A\xBB", _react["default"].createElement("br", null), "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"), _react["default"].createElement("p", null, "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0411\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u2116963 \u043E\u0442 5 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2014 \u0433.")), _react["default"].createElement(_Box["default"], {
    display: "flex",
    alignItems: "flex-end",
    className: classes.store
  }, _react["default"].createElement("div", null, _react["default"].createElement("a", {
    className: classes.appstore,
    href: "https://apps.apple.com/ru/app/halva/id1208055056",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react["default"].createElement("img", {
    src: _icon_appstore["default"],
    alt: "App Store"
  })), _react["default"].createElement("a", {
    href: "https://play.google.com/store/apps/details?id=ru.sovcomcard.halva.v1",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react["default"].createElement("img", {
    src: _icon_gplay["default"],
    alt: "Google Play"
  }))))), _react["default"].createElement("div", {
    className: classes.ligal
  }, _react["default"].createElement("div", null, props.shortText), isHide && _react["default"].createElement("span", {
    className: classes.showMore,
    onClick: showRestLigal
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F"), !isHide && _react["default"].createElement("div", null, props.restText))));
}

Footer.defaultProps = {
  shortText: '',
  restText: ''
};

var _default = _react["default"].memo(Footer);

exports["default"] = _default;