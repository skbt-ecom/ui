"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ButtonWText = function ButtonWText(_ref) {
  var StartIcon = _ref.startIcon,
      props = _objectWithoutProperties(_ref, ["startIcon"]);

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