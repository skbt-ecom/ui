"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Description = function Description(props) {
  var classes = (0, _styles["default"])(props);
  return _react["default"].createElement("div", {
    className: classes.descrBlock
  }, _react["default"].createElement("span", {
    className: classes.secureIcon
  }, _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "32",
    viewBox: "0 0 24 32"
  }, _react["default"].createElement("g", null, _react["default"].createElement("g", null, _react["default"].createElement("g", null), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fill: "#049e23",
    d: "M11.997 1.533A19.95 19.95 0 0 0 22.83 5.849v9.042c0 9.55-9.4 14.883-10.833 15.641-1.434-.758-10.833-6.083-10.833-15.641V5.849a19.95 19.95 0 0 0 10.833-4.316zm.183 29.841c.117-.058 11.483-5.65 11.483-16.483V5.44a.417.417 0 0 0-.416-.417A19.092 19.092 0 0 1 12.263.674a.425.425 0 0 0-.533 0A19.092 19.092 0 0 1 .747 5.024a.417.417 0 0 0-.417.417v9.45c0 10.808 11.367 16.425 11.483 16.525.06.011.123.011.184 0a.492.492 0 0 0 .183-.042z"
  })), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fill: "#049e23",
    d: "M11.998 22.67a7.5 7.5 0 1 1 3.534-14.117.418.418 0 1 1-.4.734 6.667 6.667 0 1 0 3.533 5.883 7.008 7.008 0 0 0-.183-1.567 6.667 6.667 0 0 0-.834-2l-5.175 5.875a.442.442 0 0 1-.316.134.4.4 0 0 1-.309-.142l-2.65-3.042a.408.408 0 0 1 .042-.583.417.417 0 0 1 .592 0l2.333 2.692 5.15-5.834a.4.4 0 0 1 .308-.141h.117a.375.375 0 0 1 .342.175 7.442 7.442 0 0 1 1.416 4.433 7.5 7.5 0 0 1-7.5 7.5z"
  })))))), _react["default"].createElement("p", {
    className: classes.descrText
  }, "\u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B \u0438\u0437\xA0\u0413\u043E\u0441\u0443\u0441\u043B\u0443\u0433. \u042D\u0442\u043E \u043D\u0430\u0434\u0451\u0436\u043D\u043E, \u0431\u044B\u0441\u0442\u0440\u043E \u0438\xA0\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E.", _react["default"].createElement("br", null), "\u041C\u044B\xA0\u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0434\u043E\u0441\u0442\u0443\u043F \u0442\u043E\u043B\u044C\u043A\u043E \u043A\xA0\u0424\u0418\u041E, \u0434\u0430\u0442\u0435 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438\xA0\u0434\u0430\u043D\u043D\u044B\u043C \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u0438\xA0\u0441\u043C\u043E\u0436\u0435\u043C \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043E\u0434\u043E\u0431\u0440\u0438\u0442\u044C \u0432\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443."));
};

var _default = _react["default"].memo(Description);

exports["default"] = _default;