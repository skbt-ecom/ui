"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var ButtonWText = function ButtonWText(_ref) {
  var StartIcon = _ref.startIcon,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["startIcon"]);
  var classes = (0, _styles["default"])();
  return _react["default"].createElement("div", {
    className: classes.bwtContainer
  }, _react["default"].createElement("div", {
    className: classes.bwtLeft
  }, StartIcon, _react["default"].createElement("p", {
    className: classes.bwtText
  }, _react["default"].createElement("strong", null, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F"), _react["default"].createElement("br", null), "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0413\u043E\u0441\u0443\u0441\u043B\u0443\u0433")), _react["default"].createElement("button", {
    onClick: props.onClick,
    className: classes.bwtButton,
    type: "button"
  }, "\u0412\u043E\u0439\u0442\u0438"));
};

var _default = ButtonWText;
exports["default"] = _default;