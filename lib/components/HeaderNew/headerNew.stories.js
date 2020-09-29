"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _addonActions = require("@storybook/addon-actions");

var _halva = _interopRequireDefault(require("./halva.svg"));

var _HeaderNew = _interopRequireDefault(require("./HeaderNew"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('HeaderNew', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_HeaderNew["default"], {
    classes: {
      header: 'myHeader'
    },
    ButtonProps: {
      color: 'secondary',
      children: 'Присоединиться',
      onClick: (0, _addonActions.action)('onButtonClick')
    },
    PhoneProps: {
      classes: {
        phoneContainer: 'my-phone'
      }
    }
  });
}).add('Multiple phones', function () {
  return /*#__PURE__*/_react["default"].createElement(_HeaderNew["default"], {
    ButtonProps: {
      color: 'secondary',
      children: 'Присоединиться',
      onClick: (0, _addonActions.action)('onButtonClick')
    },
    PhoneProps: {
      phones: ['8 927 463-12-81', '8 952 031-34-20']
    }
  });
}).add('Custom content', function () {
  return /*#__PURE__*/_react["default"].createElement(_HeaderNew["default"], {
    right: /*#__PURE__*/_react["default"].createElement("img", {
      src: _halva["default"],
      alt: "\u0425\u0430\u043B\u0432\u0430"
    })
  });
}).add('Sticky header', function () {
  var lorem = "Voluptate duis minim esse voluptate in minim culpa id magna pariatur \n    sunt enim cillum. Amet magna consequat minim quis consectetur consectetur in labore \n    occaecat adipisicing. Mollit anim amet cillum deserunt voluptate deserunt do id irure \n    excepteur aliqua. Sunt duis sunt ex tempor deserunt cillum incididunt eiusmod do ad \n    veniam amet esse.";
  var loremlist = [];

  for (var i = 0; i < 50; i++) {
    loremlist.push(lorem);
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_HeaderNew["default"], null), (0, _map["default"])(loremlist).call(loremlist, function (lorem, i) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      key: i
    }, lorem);
  }));
});