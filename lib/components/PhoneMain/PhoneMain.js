"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Phone = _interopRequireDefault(require("./Phone"));

var _PhoneWithHint = _interopRequireDefault(require("./PhoneWithHint"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PhoneMain = function PhoneMain(props) {
  var classes = (0, _styles["default"])();
  var phone = props.phone,
      phoneHint = props.phoneHint,
      phones = props.phones,
      _props$classes = props.classes,
      propsClasses = _props$classes === void 0 ? {} : _props$classes;
  var phonesArr = phones ? phones : [phone];
  var isSinglePhone = phonesArr.length === 1;
  var phoneWithHintProps = {
    phone: phonesArr[0],
    phoneHint: phoneHint,
    classes: classes,
    propsClasses: propsClasses
  };
  return _react["default"].createElement("div", {
    className: "".concat(classes.phoneContainer, " ").concat(propsClasses.phoneContainer)
  }, isSinglePhone ? _react["default"].createElement(_PhoneWithHint["default"], phoneWithHintProps) : phonesArr.map(function (phone, i) {
    return _react["default"].createElement(_Phone["default"], {
      key: i,
      number: phone,
      classes: {
        phoneNum: "".concat(classes.phoneMultiple, " ").concat(propsClasses.phoneNum)
      }
    });
  }));
};

PhoneMain.defaultProps = {
  phone: '8 800 100-10-20',
  phoneHint: 'Для звонков по России бесплатно'
};

var _default = _react["default"].memo(PhoneMain);

exports["default"] = _default;