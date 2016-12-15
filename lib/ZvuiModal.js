Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

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

var _ZvuiModalFade = require('./components/ZvuiModalFade');

var _ZvuiModalFade2 = _interopRequireDefault(_ZvuiModalFade);

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
var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZvuiModal.__proto__ || Object.getPrototypeOf(ZvuiModal)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
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
    transition: _react.PropTypes.any,
    container: _react.PropTypes.oneOfType([_componentOrElement2.default, _react.PropTypes.func]),
    onShow: _react.PropTypes.func,
    onHide: _react.PropTypes.func,
    onEnter: _react.PropTypes.func,
    onEntering: _react.PropTypes.func,
    onEntered: _react.PropTypes.func,
    onExit: _react.PropTypes.func,
    onExiting: _react.PropTypes.func,
    onExited: _react.PropTypes.func,
    modalPrefix: _react.PropTypes.func,
    dialogClassName: _react.PropTypes.string
};
ZvuiModal.defaultProps = {
    backdrop: true,
    keyboard: true,
    animate: true,
    transition: true,
    container: _helpers.canUseDom ? document.body : null,
    manager: _Modal2.default.defaultProps.manager
};
ZvuiModal.childContextTypes = {
    onModalHide: _react.PropTypes.func,
    getDefaultPrefix: _react.PropTypes.func
};

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.getDefaultPrefix = GET_PREFIX;

    this.getChildContext = function () {
        return _this2._context || (_this2._context = {
            onModalHide: _this2.props.onHide,
            getDefaultPrefix: _this2.getDefaultPrefix
        });
    };

    this.state = {
        classes: '',
        dialogStyle: {}
    };

    this.componentDidMount = function () {
        getZIndex = getZIndex || function () {
            var modalPrefix = _this2.props.modalPrefix;

            var prefix = modalPrefix || _this2.getDefaultPrefix();

            var modal = document.createElement('div');
            var backdrop = document.createElement('div');

            modal.className = prefix + ' hide';
            backdrop.className = prefix + '-backdrop hide';

            document.body.appendChild(modal);
            document.body.appendChild(backdrop);

            baseIndex.modal = +(0, _style2.default)(modal, 'z-index');
            baseIndex.backdrop = +(0, _style2.default)(backdrop, 'z-index');
            var zIndexFactor = baseIndex.modal - baseIndex.backdrop;

            document.body.removeChild(modal);
            document.body.removeChild(backdrop);

            return function (type) {
                return baseIndex[type] + zIndexFactor * (_this2.props.manager.modals.length - 1);
            };
        }();
    };

    this.handleBackdropClick = function (e) {
        if (e.target !== e.currentTarget) {
            return;
        }
        _this2.props.onHide();
    };

    this.handleEntering = function () {
        _this2._show.apply(_this2, arguments);

        if (_this2.props.onEntering) {
            _this2.props.onEntering();
        }
    };

    this._show = function () {
        if (_this2.props.show) {
            _this2.setState(_this2._getStyles);
        }
    };

    this._getStyles = function () {
        if (!_helpers.canUseDom) {
            return {};
        }

        var container = _this2.props.container;


        var node = (0, _reactDom.findDOMNode)(_this2.dialog);
        var doc = (0, _helpers.ownerDocument)(node);
        var scrollHt = node.scrollHeight;
        var bodyIsOverflowing = (0, _isOverflowing2.default)(container);
        var modalIsOverflowing = scrollHt > doc.documentElement.clientHeight;

        var nodeInner = (0, _reactDom.findDOMNode)(_this2.dialogInner);

        var _ref2 = nodeInner.getBoundingClientRect() || {},
            innerHeight = _ref2.height;

        var _ref3 = node.getBoundingClientRect() || {},
            height = _ref3.height;

        var modalOverflow = height - 10 < innerHeight;
        var marginStyles = {};

        if (!modalOverflow) {
            marginStyles = _extends({}, marginStyles, {
                top: '50%',
                marginTop: 0 - innerHeight / 2
            });
        } else {
            marginStyles = _extends({}, marginStyles);
        }

        return {
            dialog: {
                zIndex: getZIndex('modal'),
                paddingRight: bodyIsOverflowing && !modalIsOverflowing ? (0, _helpers.scrollbarSize)() : 0,
                paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? (0, _helpers.scrollbarSize)() : 0
            },
            backdrop: {
                zIndex: getZIndex('backdrop')
            },
            dialogStyle: _extends({}, marginStyles)
        };
    };

    this.render = function () {
        var _cn;

        var _props = _this2.props,
            className = _props.className,
            children = _props.children,
            keyboard = _props.keyboard,
            modalPrefix = _props.modalPrefix,
            dialogClassName = _props.dialogClassName,
            container = _props.container,
            onEnter = _props.onEnter,
            onEntered = _props.onEntered,
            onExit = _props.onExit,
            onExited = _props.onExited,
            props = _objectWithoutProperties(_props, ['className', 'children', 'keyboard', 'modalPrefix', 'dialogClassName', 'container', 'onEnter', 'onEntered', 'onExit', 'onExited']);

        var _state = _this2.state,
            dialog = _state.dialog,
            classes = _state.classes,
            backdrop = _state.backdrop,
            dialogStyle = _state.dialogStyle;


        delete props.manager;
        var elementProps = findTheBlackSheeps(props, Object.keys(ZvuiModal.propTypes));

        var prefix = modalPrefix || _this2.getDefaultPrefix();
        var transition = void 0;

        if (props.transition === true) {
            transition = _ZvuiModalFade2.default;
        }

        var modal = _react2.default.createElement(
            'div',
            _extends({}, elementProps, {
                ref: function ref(r) {
                    return _this2.dialog = r;
                },
                style: dialog,
                className: (0, _classnames2.default)(className, prefix, {
                    in: props.show && !transition
                }),
                onClick: _this2.props.backdrop ? function (e) {
                    return _this2.handleBackdropClick(e);
                } : null
            }),
            _react2.default.createElement(
                'div',
                {
                    key: '' + prefix,
                    ref: function ref(r) {
                        return _this2.dialogInner = r;
                    },
                    style: dialogStyle,
                    className: (0, _classnames2.default)(prefix + '-dialog', dialogClassName, classes, (_cn = {}, _defineProperty(_cn, prefix + '-sm', props.small), _defineProperty(_cn, prefix + '-md', props.medium), _defineProperty(_cn, prefix + '-lg', props.large), _cn))
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
                ref: function ref(_ref4) {
                    _this2.modal = _ref4 && _ref4.modal;
                    _this2.backdrop = _ref4 && _ref4.backdrop;
                },
                container: container,
                backdrop: props.backdrop,
                show: props.show,
                onHide: props.onHide,
                onShow: props.onShow,
                onEnter: onEnter,
                onEntering: _this2.handleEntering,
                onEntered: onEntered,
                onExit: onExit,
                onExsiting: _this2.handleExiting,
                onExited: onExited,
                backdropStyle: backdrop,
                transition: transition,
                backdropClassName: (0, _classnames2.default)(PREFIX + '-backdrop', {
                    in: props.show
                }),
                containerClassName: PREFIX + '-open',
                dialogTransitionTimeout: TRANSITION_DURATION,
                backdropTransitionTimeout: BACKDROP_TRANSITION_DURATION
            },
            modal
        );
    };
};

ZvuiModal.Header = _ZvuiModalHeader2.default;
ZvuiModal.Title = _ZvuiModalTitle2.default;
ZvuiModal.Body = _ZvuiModalBody2.default;

exports.default = ZvuiModal;