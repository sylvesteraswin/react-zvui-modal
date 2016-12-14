Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ZvuiModalDismiss = require('./ZvuiModalDismiss');

var _ZvuiModalDismiss2 = _interopRequireDefault(_ZvuiModalDismiss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


// eslint-disable-line no-unused-vars

var ZvuiModalHeader = function (_Component) {
    _inherits(ZvuiModalHeader, _Component);

    function ZvuiModalHeader() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ZvuiModalHeader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZvuiModalHeader.__proto__ || Object.getPrototypeOf(ZvuiModalHeader)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var _this$props = _this.props,
                modalPrefix = _this$props.modalPrefix,
                closeButton = _this$props.closeButton,
                children = _this$props.children,
                className = _this$props.className,
                props = _objectWithoutProperties(_this$props, ['modalPrefix', 'closeButton', 'children', 'className']);

            var prefix = modalPrefix || _this.context.getDefaultPrefix();

            return _react2.default.createElement(
                'div',
                _extends({}, props, {
                    className: (0, _classnames2.default)(className, prefix + '-header')
                }),
                closeButton && _react2.default.createElement(
                    _ZvuiModalDismiss2.default,
                    {
                        className: prefix + '-close'
                    },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\xD7'
                    )
                ),
                children
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ZvuiModalHeader;
}(_react.Component);

ZvuiModalHeader.propType = {
    closeButton: _react.PropTypes.bool,
    modalPrefix: _react.PropTypes.string
};
ZvuiModalHeader.defaultProps = {
    closeButton: false
};
ZvuiModalHeader.contextTypes = {
    onModalHide: _react.PropTypes.func,
    getDefaultPrefix: _react.PropTypes.func
};
exports.default = ZvuiModalHeader;