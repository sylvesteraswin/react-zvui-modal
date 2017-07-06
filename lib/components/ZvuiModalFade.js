Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //eslint-disable-line no-unused-vars


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Transition = require('../base/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//eslint-disable-line no-unused-vars

var ZvuiModalFade = function ZvuiModalFade(props) {
  return _react2.default.createElement(_Transition2.default, _extends({}, props, {
    className: 'fade',
    enteredClassName: 'in',
    enteringClassName: 'in'
  }));
};

exports.default = ZvuiModalFade;