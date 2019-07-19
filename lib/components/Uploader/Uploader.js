"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Uploader(props) {
  var apiUrl = props.apiUrl,
      hint = props.hint;
  var fileInput = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoad = _useState6[0],
      setIsLoad = _useState6[1];

  var classes = (0, _styles["default"])();

  function handleFocus() {
    fileInput.current.click();
  }

  function proccessFile(e) {
    var file = e.target.files[0];
    var xhr = new XMLHttpRequest();
    var fileData = new FormData();
    fileData.append('document', file);
    setIsLoad(true);

    xhr.onload = function () {
      if (this.status == 200) {
        console.log('Uploaded');
      } else {
        console.log('Error');
        setIsError(true);
      }

      console.log(this.responseText);
      setIsLoad(false); // var reader = new FileReader();
      // reader.readAsDataURL(image);
      // reader.onload = function () { out.src = this.result; };
      // reader.onerror = function (error) { console.log('Reader error: ', error); };
    };

    xhr.onerror = function () {
      console.log(this.status, this.statusText);
      setIsError(true);
      setIsLoad(false);
    };

    xhr.upload.onprogress = function (e) {
      var state = parseInt(e.loaded / e.total * 100, 10);
      setProgress(state);
    };

    xhr.upload.onload = function () {
      console.log('Данные полностью загружены на сервер!');
    };

    xhr.upload.onerror = function () {
      setIsError(true);
      setIsLoad(false);
    };

    xhr.open('POST', apiUrl, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(fileData);
  }

  function Content() {
    if (isLoad) {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_CircularProgress["default"], {
        color: "primary",
        size: "44px"
      }), _react["default"].createElement(_LinearProgress["default"], {
        classes: {
          root: classes.linearProgress
        },
        variant: "determinate",
        color: "primary",
        value: progress
      }));
    }

    return _react["default"].createElement("svg", {
      width: "34",
      height: "24",
      className: classes.icon
    }, _react["default"].createElement("path", {
      d: "M21.996 13.004h-2v6.6a.4.4 0 0 1-.4.4h-5.2a.4.4 0 0 1-.4-.4v-6.6h-2a.4.4 0 0 1-.29-.68l5-5a.4.4 0 0 1 .56 0l5 5a.4.4 0 0 1-.27.68zm5-3a10.49 10.49 0 0 0-20.45-2.76 8.5 8.5 0 0 0 1.95 16.76h18.5a7 7 0 0 0 0-14z"
    }));
  }

  return _react["default"].createElement("div", {
    className: isError ? classes.fail : ''
  }, _react["default"].createElement(_ButtonBase["default"], {
    onClick: handleFocus,
    className: (0, _classnames["default"])(classes.uploader, isLoad ? classes.active : '')
  }, _react["default"].createElement(Content, null)), _react["default"].createElement("input", {
    type: "file",
    accept: "image/*",
    ref: fileInput,
    className: classes.input,
    onChange: proccessFile
  }), _react["default"].createElement(_Typography["default"], {
    className: classes.hint
  }, hint));
}

Uploader.defaultProps = {
  hint: '',
  apiUrl: ''
};

var _default = _react["default"].memo(Uploader);

exports["default"] = _default;