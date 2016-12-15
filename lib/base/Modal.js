Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentOrElement = require('react-prop-types/lib/componentOrElement');

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _reactTeleportMe = require('react-teleport-me');

var _reactTeleportMe2 = _interopRequireDefault(_reactTeleportMe);

var _reactAttachHandler = require('react-attach-handler');

var _reactAttachHandler2 = _interopRequireDefault(_reactAttachHandler);

var _ModalManager = require('./ModalManager');

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //eslint-disable-line no-unused-vars


var modalManager = new _ModalManager2.default();

/**
 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Modal;
}(_react.Component);

Modal.propTypes = _extends({}, _reactTeleportMe2.default.propTypes, (_extends2 = {
    /**
     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
     * appended to it.
     */
    container: _react2.default.PropTypes.oneOfType([_componentOrElement2.default, _react.PropTypes.func]),
    // Set the visibility of the Modal
    show: _react.PropTypes.bool,
    // A callback fired when the Modal is opening
    onShow: _react.PropTypes.func,
    // A callback fired when either the backdrop is clicked or the escape key is pressed
    // But setting the prop `show` to false can be used to close the Modal
    onHide: _react.PropTypes.func,
    // Include a backdrop component
    backdrop: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['static'])]),
    // Function that returns a backdrop component
    renderBackdrop: _react.PropTypes.func,
    // A callback fired when Esc key is pressed
    onEscapeKeyUp: _react.PropTypes.func,
    // A callback fired when backdrop, is exists, is clicked
    onBackdropClick: _react.PropTypes.func,
    // A style object for the backdrop component
    backdropStyle: _react.PropTypes.object,
    // A css class or classes for the backdrop component
    backdropClassName: _react.PropTypes.string,
    // A css class or set of classes applied to the modal container when the modal is open, and removed when it is closed
    containerClassName: _react.PropTypes.string,
    // Close the modal when escape key is pressed
    keyboard: _react.PropTypes.bool,
    // When `true` the focus is automatically shited to the open modal
    autoFocus: _react.PropTypes.bool,
    // When `true` the Modal will prevent focus from leaving the Modal when open.
    enforceFocus: _react.PropTypes.bool,
    // A callback fired before the Modal transition in
    onEnter: _react.PropTypes.func,
    // A callback fired when begins the transition in
    onEntering: _react.PropTypes.func,
    // A callback fired after the Modal finishes transition in
    onEntered: _react.PropTypes.func,
    // A callback fired right before the Modal transition out
    onExit: _react.PropTypes.func,
    // A callback fired as the Modal beings to transition out
    onExiting: _react.PropTypes.func,
    // A callback fired after the Modal finishes transition out
    onExited: _react.PropTypes.func,
    // A modal manager instance used to track and manage the state of open Modals
    manager: _react.PropTypes.object.isRequired,
    // A <Transition /> component to use for the dialog and backdrop
    transition: _elementType2.default,
    // The `timeout` of the dialog transition if specified.
    dialogTransitionTimeout: _react.PropTypes.number,
    // The `timeout` of the backdrop transition if specified.
    backdropTransitionTimeout: _react.PropTypes.number
}, _defineProperty(_extends2, 'onEnter', _react2.default.PropTypes.func), _defineProperty(_extends2, 'onEntering', _react2.default.PropTypes.func), _defineProperty(_extends2, 'onEntered', _react2.default.PropTypes.func), _defineProperty(_extends2, 'onExit', _react2.default.PropTypes.func), _defineProperty(_extends2, 'onExiting', _react2.default.PropTypes.func), _defineProperty(_extends2, 'onExited', _react2.default.PropTypes.func), _extends2));
Modal.defaultProps = {
    show: false,
    backdrop: true,
    keyboard: true,
    autoFocus: true,
    enforceFocus: true,
    onHide: _helpers.NOOP,
    manager: modalManager,
    renderBackdrop: function renderBackdrop(props) {
        return _react2.default.createElement('div', props);
    }
};

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.state = {
        exited: !this.props.show
    };

    this.componentWillReceiveProps = function (nextProps) {
        if (nextProps.show) {
            _this2.setState({
                exited: false
            });
        } else if (!nextProps.transition) {
            // Otherwise let handleHidden take care of marking exited.
            _this2.setState({
                exited: true
            });
        }
    };

    this.componentWillUpdate = function (nextProps) {
        if (!_this2.props.show && nextProps.show) {
            _this2.checkForFocus();
        }
    };

    this.componentDidMount = function () {
        _this2._isMounted = true;
        if (_this2.props.show) {
            _this2.onShow();
        }
    };

    this.componentDidUpdate = function (prevProps) {
        var transition = _this2.props.transition;


        if (prevProps.show && !_this2.props.show && !transition) {
            // Otherwise handleHidden will call this.
            _this2.onHide();
        } else if (!prevProps.show && _this2.props.show) {
            _this2.onShow();
        }
    };

    this.componentWillUnmount = function () {
        var _props = _this2.props,
            show = _props.show,
            transition = _props.transition;


        _this2._isMounted = false;

        if (show || transition && !_this2.state.exited) {
            _this2.onHide();
        }
    };

    this.isMounted = function () {
        return _this2._isMounted;
    };

    this.omitProps = function (props, propTypes) {
        var keys = Object.keys(props);
        var newProps = {};
        keys.map(function (prop) {
            if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
                newProps[prop] = props[prop];
            }
        });
        return newProps;
    };

    this.renderBackdrop = function () {
        var _props2 = _this2.props,
            backdropStyle = _props2.backdropStyle,
            backdropClassName = _props2.backdropClassName,
            renderBackdrop = _props2.renderBackdrop,
            Transition = _props2.transition,
            backdropTransitionTimeout = _props2.backdropTransitionTimeout;


        var backdropRef = function backdropRef(ref) {
            return _this2.backdrop = ref;
        };

        var backdrop = _react2.default.createElement('div', {
            ref: backdropRef,
            style: backdropStyle,
            className: backdropClassName,
            onClick: _this2.handleBackdropClick });

        if (Transition) {
            backdrop = _react2.default.createElement(
                Transition,
                {
                    'in': _this2.props.show,
                    timeout: backdropTransitionTimeout
                },
                renderBackdrop({
                    ref: backdropRef,
                    style: backdropStyle,
                    className: backdropClassName,
                    onClick: _this2.handleBackdropClick
                })
            );
        }

        return backdrop;
    };

    this.onShow = function () {
        var doc = (0, _helpers.ownerDocumentFn)(_this2);
        var container = (0, _helpers.getContainer)(_this2.props.container, doc.body);

        _this2.props.manager.add(_this2, container, _this2.props.containerClassName);

        _this2.focus();

        if (_this2.props.onShow) {
            _this2.props.onShow();
        }
    };

    this.onHide = function () {
        _this2.props.manager.remove(_this2);
        _this2.restoreLastFocus();
    };

    this.setMountNode = function (ref) {
        _this2.mountNode = ref ? ref.getMountNode() : ref;
    };

    this.handleHidden = function () {
        _this2.setState({
            exited: true
        });
        _this2.onHide();

        if (_this2.props.onExited) {
            var _props3;

            (_props3 = _this2.props).onExited.apply(_props3, arguments);
        }
    };

    this.handleBackdropClick = function (e) {
        if (e.target !== e.currentTarget) {
            return;
        }

        if (_this2.props.onBackdropClick) {
            _this2.props.onBackdropClick();
        }

        if (_this2.props.backdrop === true) {
            _this2.props.onHide();
        }
    };

    this.handleDocumentKeyUp = function (e) {
        if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
            if (_this2.props.onEscapeKeyUp) {
                _this2.props.onEscapeKeyUp();
            }
            _this2.props.onHide();
        }
    };

    this.checkForFocus = function () {
        if (_helpers.canUseDom) {
            _this2.lastFocus = (0, _helpers.activeElement)();
        }
    };

    this.focus = function () {
        var autoFocus = _this2.props.autoFocus;


        var modalContent = _this2.getDialogElement();
        var current = (0, _helpers.activeElement)((0, _helpers.ownerDocumentFn)(_this2));
        var focusInModal = current && (0, _helpers.contains)(modalContent, current);

        if (modalContent && autoFocus && !focusInModal) {
            _this2.lastFocus = current;

            if (typeof modalContent.hasAttribute === 'function' && !modalContent.hasAttribute('tabIndex')) {
                modalContent.setAttribute('tabIndex', -1);
                (0, _warning2.default)(false, 'The modal content node does not accept focus. For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
            }

            modalContent.focus();
        }
    };

    this.restoreLastFocus = function () {
        // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
        if (_this2.lastFocus && _this2.lastFocus.focus) {
            _this2.lastFocus.focus();
            _this2.lastFocus = null;
        }
    };

    this.enforceFocus = function () {
        var enforceFocus = _this2.props.enforceFocus;


        if (!enforceFocus || !_this2.isMounted() || !_this2.isTopModal()) {
            return;
        }

        var active = (0, _helpers.activeElement)((0, _helpers.ownerDocumentFn)(_this2));
        var modal = _this2.getDialogElement();

        if (modal && modal !== active && !(0, _helpers.contains)(modal, active)) {
            modal.focus();
        }
    };

    this.getDialogElement = function () {
        var node = _this2.refs.modal;
        return node && node.lastChild;
    };

    this.isTopModal = function () {
        return _this2.props.manager.isTopModal(_this2);
    };

    this.render = function () {
        var _props4 = _this2.props,
            show = _props4.show,
            container = _props4.container,
            children = _props4.children,
            Transition = _props4.transition,
            backdrop = _props4.backdrop,
            dialogTransitionTimeout = _props4.dialogTransitionTimeout,
            className = _props4.className,
            style = _props4.style,
            onExit = _props4.onExit,
            onExiting = _props4.onExiting,
            onEnter = _props4.onEnter,
            onEntering = _props4.onEntering,
            onEntered = _props4.onEntered;


        var dialog = _react2.default.Children.only(children);
        var filterProps = _this2.omitProps(_this2.props, Modal.propTypes);

        var mountModal = show || Transition && !_this2.state.exited;
        if (!mountModal) {
            return null;
        }

        var _dialog$props = dialog.props,
            role = _dialog$props.role,
            tabIndex = _dialog$props.tabIndex;


        if (role === undefined || tabIndex === undefined) {
            dialog = (0, _react.cloneElement)(dialog, {
                role: role === undefined ? 'document' : role,
                tabIndex: tabIndex === null ? '-1' : tabIndex
            });
        }

        if (Transition) {
            dialog = _react2.default.createElement(
                Transition,
                {
                    transitionAppear: true,
                    unmountOnExit: true,
                    'in': show,
                    timeout: dialogTransitionTimeout,
                    onExit: onExit,
                    onExiting: onExiting,
                    onExited: _this2.handleHidden,
                    onEnter: onEnter,
                    onEntering: onEntering,
                    onEntered: onEntered
                },
                dialog
            );
        }

        return _react2.default.createElement(
            _reactTeleportMe2.default,
            {
                ref: _this2.setMountNode,
                container: container
            },
            _react2.default.createElement(
                'div',
                _extends({
                    ref: 'modal',
                    role: role || 'dialog'
                }, filterProps, {
                    style: style,
                    className: className
                }),
                show && _react2.default.createElement(_reactAttachHandler2.default, {
                    target: 'document',
                    events: {
                        keyup: _this2.handleDocumentKeyUp,
                        focus: {
                            handler: _this2.enforceFocus,
                            opts: {
                                capture: true
                            }
                        }
                    }
                }),
                backdrop && _this2.renderBackdrop(),
                dialog
            )
        );
    };
};

Modal.Manager = _ModalManager2.default;
exports.default = Modal;