Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentOrElement = require('react-prop-types/lib/componentOrElement');

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Modal = require('./base/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _isOverflowing = require('./base/isOverflowing');

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _helpers = require('./base/helpers');

var _ZvuiModalHeader = require('./components/ZvuiModalHeader');

var _ZvuiModalHeader2 = _interopRequireDefault(_ZvuiModalHeader);

var _ZvuiModalTitle = require('./components/ZvuiModalTitle');

var _ZvuiModalTitle2 = _interopRequireDefault(_ZvuiModalTitle);

var _ZvuiModalBody = require('./components/ZvuiModalBody');

var _ZvuiModalBody2 = _interopRequireDefault(_ZvuiModalBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //eslint-disable-line no-unused-vars
//eslint-disable-line no-unused-vars

//eslint-disable-line no-unused-vars

var baseIndex = {};
var PREFIX = 'zvui-modal';

var getZIndex = void 0;

var findTheBlackSheeps = function findTheBlackSheeps(obj, keys) {
    return Object.keys(obj).reduce(function (o, key) {
        if (keys.indexOf(key) === -1) {
            o[key] = obj[key];
        }
        return o;
    }, {});
};

var GET_PREFIX = function GET_PREFIX() {
    return PREFIX;
};

var ZvuiModal = function (_Component) {
    _inherits(ZvuiModal, _Component);

    function ZvuiModal() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ZvuiModal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZvuiModal.__proto__ || Object.getPrototypeOf(ZvuiModal)).call.apply(_ref, [this].concat(args))), _this), _this.getDefaultPrefix = GET_PREFIX, _this.getChildContext = function () {
            return _this._context || (_this._context = {
                onModalHide: _this.props.onHide,
                getDefaultPrefix: _this.getDefaultPrefix
            });
        }, _this.state = {
            classes: ''
        }, _this.componentDidMount = function () {
            getZIndex = getZIndex || function () {
                var modal = document.createElement('div');
                var backdrop = document.createElement('div');

                modal.className = 'zvui-modal hide';
                backdrop.className = 'zvui-backdrop hide';

                document.body.appendChild(modal);
                document.body.appendChild(backdrop);

                baseIndex.modal = +(0, _style2.default)(modal, 'z-index');
                baseIndex.backdrop = +(0, _style2.default)(backdrop, 'z-index');
                var zIndexFactor = baseIndex.modal - baseIndex.backdrop;

                document.body.removeChild(modal);
                document.body.removeChild(backdrop);

                return function (type) {
                    return baseIndex[type] + zIndexFactor * (_this.props.manager.modals.length - 1);
                };
            }();
        }, _this.handleBackdropClick = function (e) {
            if (e.target !== e.currentTarget) {
                return;
            }
            // if (this.props.backdrop === 'static') {
            //     return this.attention();
            // }
            _this.props.onHide();
        }, _this.render = function () {
            var _cn;

            var _this$props = _this.props,
                className = _this$props.className,
                children = _this$props.children,
                keyboard = _this$props.keyboard,
                modalPrefix = _this$props.modalPrefix,
                dialogClassName = _this$props.dialogClassName,
                container = _this$props.container,
                props = _objectWithoutProperties(_this$props, ['className', 'children', 'keyboard', 'modalPrefix', 'dialogClassName', 'container']);

            var _this$state = _this.state,
                dialog = _this$state.dialog,
                classes = _this$state.classes,
                backdrop = _this$state.backdrop;


            delete props.manager;
            var elementProps = findTheBlackSheeps(props, Object.keys(ZvuiModal.propTypes));

            var prefix = modalPrefix || _this.getDefaultPrefix();

            var modal = _react2.default.createElement(
                'div',
                _extends({}, elementProps, {
                    ref: function ref(r) {
                        return _this.dialog = r;
                    },
                    style: dialog,
                    className: (0, _classnames2.default)(className, prefix, {
                        in: props.show
                    }),
                    onClick: _this.props.backdrop ? function (e) {
                        return _this.handleBackdropClick(e);
                    } : null
                }),
                _react2.default.createElement(
                    'div',
                    {
                        key: 'zvui-modal',
                        ref: 'zvui-modal-inner',
                        className: (0, _classnames2.default)(prefix + '-dialog', dialogClassName, classes, (_cn = {}, _defineProperty(_cn, prefix + '-sm', props.small), _defineProperty(_cn, prefix + '-lg', props.large), _cn))
                    },
                    _react2.default.createElement(
                        'div',
                        {
                            className: prefix + '-content'
                        },
                        children
                    )
                )
            );

            return _react2.default.createElement(
                _Modal2.default,
                {
                    keyboard: keyboard,
                    ref: function ref(_ref2) {
                        _this.modal = _ref2 && _ref2.modal;
                        _this.backdrop = _ref2 && _ref2.backdrop;
                    },
                    container: container,
                    backdrop: props.backdrop,
                    show: props.show,
                    onHide: props.onHide,
                    onShow: props.onShow,
                    backdropStyle: backdrop,
                    backdropClassName: PREFIX + '-backdrop',
                    containerClassName: PREFIX + '-open'
                },
                modal
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ZvuiModal;
}(_react.Component);

ZvuiModal.propTypes = {
    show: _react.PropTypes.bool,
    // sizes
    small: _react.PropTypes.bool,
    sm: _react.PropTypes.bool,
    large: _react.PropTypes.bool,
    lg: _react.PropTypes.bool,
    backdrop: _react.PropTypes.oneOf(['static', true, false]),
    keyboard: _react.PropTypes.bool,
    animate: _react.PropTypes.bool,
    container: _react.PropTypes.oneOfType([_componentOrElement2.default, _react.PropTypes.func]),
    onShow: _react.PropTypes.func,
    onHide: _react.PropTypes.func,
    modalPrefix: _react.PropTypes.func,
    dialogClassName: _react.PropTypes.string,
    attentionClass: _react.PropTypes.string
};
ZvuiModal.defaultProps = {
    backdrop: true,
    keyboard: true,
    animate: true,
    container: _helpers.canUseDom ? document.body : null,
    manager: _Modal2.default.defaultProps.manager
};
ZvuiModal.childContextTypes = {
    onModalHide: _react.PropTypes.func,
    getDefaultPrefix: _react.PropTypes.func
};


ZvuiModal.Header = _ZvuiModalHeader2.default;
ZvuiModal.Title = _ZvuiModalTitle2.default;
ZvuiModal.Body = _ZvuiModalBody2.default;

exports.default = ZvuiModal;