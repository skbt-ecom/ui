"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Container = _interopRequireDefault(require("../Container"));

var _Box = _interopRequireDefault(require("../Box"));

var _icon_done = _interopRequireDefault(require("./icon_done.svg"));

var _icon_error = _interopRequireDefault(require("./icon_error.svg"));

var _styles = _interopRequireDefault(require("./styles"));

var successMsg = {
  head: 'Спасибо!',
  title: 'Ваша заявка отправлена',
  description: 'В ближайшее время с Вами свяжутся специалисты нашего Банка.'
};
var errorMsg = {
  head: 'Произошла ошибка',
  title: 'Возможно:',
  description: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "errorMsg"
  }, /*#__PURE__*/_react["default"].createElement("li", null, "\u0412\u044B \u0443\u0436\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0443*"), /*#__PURE__*/_react["default"].createElement("li", null, "\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043D\u044F\u0442"), /*#__PURE__*/_react["default"].createElement("li", null, "\u0412\u0435\u0434\u0443\u0442\u0441\u044F \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u044B")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "errorHint"
  }, "* \u0432 \u0441\u0443\u0442\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043E\u0434\u043D\u0443 \u0437\u0430\u044F\u0432\u043A\u0443"))
};

function getText(isSuccess, key, paramFromProps) {
  if (paramFromProps) {
    return paramFromProps;
  }

  var defVariant = isSuccess ? successMsg[key] : errorMsg[key];
  return defVariant;
}

function PageStatus(props) {
  var classes = (0, _styles["default"])();
  var success = props.success,
      head = props.head,
      title = props.title,
      successDesc = props.successDesc,
      description = props.description,
      content = props.content;
  var headValue = getText(success, 'head', head);
  var titleValue = getText(success, 'title', title);
  var descriptionValue = successDesc;

  if (!descriptionValue) {
    descriptionValue = getText(success, 'description', description);
  }

  if (process.env.NODE_ENV !== 'production') {
    if (successDesc) {
      console.error('⚠️ Deprecation props "successDesc" ⚠️\n ⚠️ Use the "desc" parameter instead ⚠️');
    }
  }

  return /*#__PURE__*/_react["default"].createElement(_Container["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h1",
    className: classes.head
  }, headValue), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "icon",
    src: success ? _icon_done["default"] : _icon_error["default"],
    className: classes.icon
  }))), content, !content && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h3",
    className: classes.title
  }, titleValue), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h4",
    className: classes.description
  }, descriptionValue))));
}

PageStatus.defaultProps = {
  success: false
};

var _default = _react["default"].memo(PageStatus);

exports["default"] = _default;