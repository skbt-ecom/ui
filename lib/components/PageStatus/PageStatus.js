"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Box = _interopRequireDefault(require("../Box"));

var _icon_done = _interopRequireDefault(require("./icon_done.svg"));

var _icon_error = _interopRequireDefault(require("./icon_error.svg"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var success = {
  head1: 'Спасибо!',
  head2: 'Ваша заявка отправлена',
  desc: 'В ближайшее время с Вами свяжутся специалисты нашего Банка.'
};
var error = {
  head1: 'Произошла ошибка',
  head2: 'Возможно:'
};

function PageStatus(props) {
  var classes = (0, _styles["default"])();
  var isSuccess = props.isSuccess;
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_Box["default"], {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }, _react["default"].createElement(_Typography["default"], {
    variant: "h1",
    className: classes.head1
  }, isSuccess ? success.head1 : error.head1), _react["default"].createElement("div", null, _react["default"].createElement("img", {
    alt: "icon",
    src: isSuccess ? _icon_done["default"] : _icon_error["default"],
    className: classes.icon
  }))), _react["default"].createElement(_Typography["default"], {
    variant: "h3",
    className: classes.head2
  }, isSuccess ? success.head2 : error.head2), _react["default"].createElement(_Typography["default"], {
    variant: "h4",
    className: classes.desk
  }, isSuccess ? success.desc : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("ul", {
    className: classes.errorDesc1
  }, _react["default"].createElement("li", null, "\u0412\u044B \u0443\u0436\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0443*"), _react["default"].createElement("li", null, "\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043D\u044F\u0442"), _react["default"].createElement("li", null, "\u0412\u0435\u0434\u0443\u0442\u0441\u044F \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u044B")), _react["default"].createElement("div", {
    className: classes.errorDesc2
  }, "* \u0432 \u0441\u0443\u0442\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043E\u0434\u043D\u0443 \u0437\u0430\u044F\u0432\u043A\u0443"))));
}

PageStatus.defaultProps = {
  isSuccess: false
};

var _default = _react["default"].memo(PageStatus);

exports["default"] = _default;