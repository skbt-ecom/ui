"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAge = exports.maskDateToDate = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * @param {str} dateStr ex: 27.02.2020
 */
var maskDateToDate = function maskDateToDate(dateStr) {
  var _dateStr$split = dateStr.split('.'),
      _dateStr$split2 = _slicedToArray(_dateStr$split, 3),
      day = _dateStr$split2[0],
      month = _dateStr$split2[1],
      year = _dateStr$split2[2];

  return new Date(year, month - 1, day);
};
/**
 * from: https://stackoverflow.com/a/24267902/7136549
 * @param {date} bornDate
 */


exports.maskDateToDate = maskDateToDate;

var getAge = function getAge(bornDate) {
  var now = new Date();
  var birthday = new Date(now.getFullYear(), bornDate.getMonth(), bornDate.getDate());

  if (now >= birthday) {
    return now.getFullYear() - bornDate.getFullYear();
  }

  return now.getFullYear() - bornDate.getFullYear() - 1;
};

exports.getAge = getAge;