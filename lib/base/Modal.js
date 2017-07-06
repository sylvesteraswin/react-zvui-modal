Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalManagerProp = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = require('react-prop-types/lib/componentOrElement');

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTeleportMe = require('react-teleport-me');

var _reactTeleportMe2 = _interopRequireDefault(_reactTeleportMe);

var _Teleport = require('react-teleport-me/lib/Teleport');

var _reactAttachHandler = require('react-attach-handler');

var _reactAttachHandler2 = _interopRequireDefault(_reactAttachHandler);

var _ModalManager = require('./ModalManager');

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

Modal.propTypes = _extends({}, _reactTeleportMe2.default.propTypes, {
  /**
       * A Node, Component instance, or function that returns either. The `container` will have the Portal children
       * appended to it.
       */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  // Set the visibility of the Modal
  active: _propTypes2.default.bool,
  // A callback fired when the Modal is opening
  onShow: _propTypes2.default.func,
  // A callback fired when either the backdrop is clicked or the escape key is pressed
  // But setting the prop `active` to false can be used to close the Modal
  onHide: _propTypes2.default.func,
  // A callback fired when the window is resized
  onResize: _propTypes2.default.func,
  // Include a backdrop component
  backdrop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),
  // Include a loader component
  loader: _propTypes2.default.bool,
  // Flag to disable loading and active dialog
  loadComplete: _propTypes2.default.bool,
  // Function that returns a backdrop component
  renderBackdrop: _propTypes2.default.func,
  // Function that returns a loader component
  renderLoader: _propTypes2.default.func,
  // A callback fired when Esc key is pressed
  onEscapeKeyUp: _propTypes2.default.func,
  // A callback fired when backdrop, is exists, is clicked
  onBackdropClick: _propTypes2.default.func,
  // A style object for the backdrop component
  backdropStyle: _propTypes2.default.object,
  // A css class or classes for the backdrop component
  backdropClassName: _propTypes2.default.string,
  // A style object for the loader component
  loaderStyle: _propTypes2.default.object,
  // A css class or classes for the loader component
  loaderClassName: _propTypes2.default.string,
  // A css class or classes for the loader icon component
  loaderIconClassName: _propTypes2.default.string,
  // A css class or set of classes applied to the modal container when the modal is open, and removed when it is closed
  containerClassName: _propTypes2.default.string,
  // Close the modal when escape key is pressed
  keyboard: _propTypes2.default.bool,
  // When `true` the focus is automatically shited to the open modal
  autoFocus: _propTypes2.default.bool,
  // When `true` the Modal will prevent focus from leaving the Modal when open.
  enforceFocus: _propTypes2.default.bool,
  // A callback fired before the Modal transition in
  onEnter: _propTypes2.default.func,
  // A callback fired when begins the transition in
  onEntering: _propTypes2.default.func,
  // A callback fired after the Modal finishes transition in
  onEntered: _propTypes2.default.func,
  // A callback fired right before the Modal transition out
  onExit: _propTypes2.default.func,
  // A callback fired as the Modal beings to transition out
  onExiting: _propTypes2.default.func,
  // A callback fired after the Modal finishes transition out
  onExited: _propTypes2.default.func,
  // A modal manager instance used to track and manage the state of open Modals
  manager: _propTypes2.default.object.isRequired,
  // A <Transition /> component to use for the dialog and backdrop
  transition: _elementType2.default,
  // The `timeout` of the dialog transition if specified.
  dialogTransitionTimeout: _propTypes2.default.number,
  // The `timeout` of the backdrop transition if specified.
  backdropTransitionTimeout: _propTypes2.default.number,
  // The `timeout` of the loader transition if specified.
  loaderTransitionTimeout: _propTypes2.default.number
});
Modal.defaultProps = {
  active: false,
  backdrop: true,
  loader: false,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  onHide: _helpers.NOOP,
  manager: modalManager,
  renderBackdrop: function renderBackdrop(props) {
    return _react2.default.createElement('div', props);
  },
  renderLoader: function renderLoader(props) {
    return _react2.default.createElement(
      'div',
      props,
      _react2.default.createElement('div', { className: props.loaderIconClassName })
    );
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    exited: !this.props.active,
    loaded: !this.props.loader
  };

  this.componentWillReceiveProps = function (nextProps) {
    if (nextProps.active) {
      _this2.setState({
        exited: false
      }, function () {
        if (nextProps.loadComplete && _this2.props.loader) {
          _this2.setState({
            loaded: true
          });
        }
      });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      _this2.setState({
        exited: true
      });
    }
  };

  this.componentWillUpdate = function (nextProps) {
    if (!_this2.props.active && nextProps.active) {
      _this2.checkForFocus();
    }
  };

  this.componentDidMount = function () {
    if (_this2.props.active) {
      _this2.onShow();
    }
  };

  this.componentDidUpdate = function (prevProps) {
    var transition = _this2.props.transition;


    if (prevProps.active && !_this2.props.active && !transition) {
      // Otherwise handleHidden will call this.
      _this2.onHide();
    } else if (!prevProps.active && _this2.props.active) {
      _this2.onShow();
    }
  };

  this.componentWillUnmount = function () {
    var _props = _this2.props,
        active = _props.active,
        transition = _props.transition;


    if (active || transition && !_this2.state.exited) {
      _this2.onHide();
    }
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

  this.renderLoader = function () {
    var _props2 = _this2.props,
        loaderStyle = _props2.loaderStyle,
        loaderClassName = _props2.loaderClassName,
        loaderIconClassName = _props2.loaderIconClassName,
        renderLoader = _props2.renderLoader,
        Transition = _props2.transition,
        loaderTransitionTimeout = _props2.loaderTransitionTimeout;


    var loaderRef = function loaderRef(ref) {
      return _this2.loader = ref;
    };

    var loader = _react2.default.createElement(
      'div',
      {
        ref: loaderRef,
        style: loaderStyle,
        className: (0, _classnames2.default)(loaderClassName, {
          in: _this2.props.active
        })
      },
      _react2.default.createElement('div', { className: '' + loaderIconClassName })
    );

    if (Transition) {
      loader = _react2.default.createElement(
        Transition,
        { 'in': _this2.props.active, timeout: loaderTransitionTimeout },
        renderLoader({
          ref: loaderRef,
          style: loaderStyle,
          className: (0, _classnames2.default)(loaderClassName, {
            in: _this2.props.active
          }),
          loaderIconClassName: loaderIconClassName
        })
      );
    }

    return loader;
  };

  this.renderBackdrop = function () {
    var _props3 = _this2.props,
        backdropStyle = _props3.backdropStyle,
        backdropClassName = _props3.backdropClassName,
        renderBackdrop = _props3.renderBackdrop,
        Transition = _props3.transition,
        backdropTransitionTimeout = _props3.backdropTransitionTimeout;


    var backdropRef = function backdropRef(ref) {
      return _this2.backdrop = ref;
    };

    var backdrop = _react2.default.createElement('div', {
      ref: backdropRef,
      style: backdropStyle,
      className: (0, _classnames2.default)(backdropClassName, {
        in: _this2.props.active
      }),
      onClick: _this2.handleBackdropClick
    });

    if (Transition) {
      backdrop = _react2.default.createElement(
        Transition,
        { 'in': _this2.props.active, timeout: backdropTransitionTimeout },
        renderBackdrop({
          ref: backdropRef,
          style: backdropStyle,
          className: (0, _classnames2.default)(backdropClassName, {
            in: _this2.props.active
          }),
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

    // this.focus();

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
      exited: true,
      loaded: !_this2.props.active
    });
    _this2.onHide();

    if (_this2.props.onExited) {
      var _props4;

      (_props4 = _this2.props).onExited.apply(_props4, arguments);
    }
  };

  this.handleBackdropClick = function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (_this2.props.onBackdropClick) {
      _this2.props.onBackdropClick();
    }

    if (_this2.props.backdrop) {
      _this2.props.onHide();
    }
  };

  this.handlesDocumentKeyUp = function (e) {
    if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyUp) {
        _this2.props.onEscapeKeyUp();
      }
      _this2.props.onHide();
    }
  };

  this.handleResize = function () {
    if (_this2.props.onResize) {
      _this2.props.onResize();
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
    var focusInModal = current && modalContent && (0, _helpers.contains)(modalContent, current);

    if (modalContent && autoFocus && !focusInModal) {
      _this2.lastFocus = current;

      if (typeof modalContent.hasAttribute === 'function' && !modalContent.hasAttribute('tabIndex')) {
        modalContent.setAttribute('tabIndex', -1);
        (0, _warning2.default)(false, 'The modal content node does not accept focus. For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
      }

      // modalContent.focus();
    }
  };

  this.restoreLastFocus = function () {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (_this2.lastFocus && _this2.lastFocus.focus) {
      // this.lastFocus.focus();
      _this2.lastFocus = null;
    }
  };

  this.enforceFocus = function () {
    var enforceFocus = _this2.props.enforceFocus;


    if (!enforceFocus || !_this2.isTopModal()) {
      return;
    }

    var active = (0, _helpers.activeElement)((0, _helpers.ownerDocumentFn)(_this2));
    var modal = _this2.getDialogElement();

    if (modal && modal !== active && !(0, _helpers.contains)(modal, active)) {
      // modal.focus();
    }
  };

  this.getDialogElement = function () {
    var node = _this2.modal;
    return node && node.lastChild;
  };

  this.isTopModal = function () {
    return _this2.props.manager.isTopModal(_this2);
  };

  this.render = function () {
    var _props5 = _this2.props,
        active = _props5.active,
        container = _props5.container,
        children = _props5.children,
        Transition = _props5.transition,
        backdrop = _props5.backdrop,
        loader = _props5.loader,
        dialogTransitionTimeout = _props5.dialogTransitionTimeout,
        className = _props5.className,
        style = _props5.style,
        onExit = _props5.onExit,
        onExiting = _props5.onExiting,
        onEnter = _props5.onEnter,
        onEntering = _props5.onEntering,
        onEntered = _props5.onEntered;
    var loaded = _this2.state.loaded;


    var dialog = _react2.default.Children.only(children);
    var filterProps = _this2.omitProps(_this2.props, Modal.propTypes);

    var mountModal = active || Transition && !_this2.state.exited;
    if (!mountModal) {
      return null;
    }

    var _dialog$props = dialog.props,
        role = _dialog$props.role,
        tabIndex = _dialog$props.tabIndex;


    if (role === undefined || tabIndex === undefined) {
      dialog = (0, _react.cloneElement)(dialog, {
        role: role ? 'document' : role,
        tabIndex: tabIndex ? '-1' : tabIndex
      });
    }

    if (Transition) {
      dialog = _react2.default.createElement(
        Transition,
        {
          transitionAppear: true,
          unmountOnExit: true,
          'in': active,
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
      { ref: _this2.setMountNode, container: container },
      _react2.default.createElement(
        'div',
        _extends({
          ref: function ref(_ref2) {
            return _this2.modal = _ref2;
          },
          role: role || 'dialog'
        }, filterProps, {
          style: style,
          className: className
        }),
        active && _react2.default.createElement(_reactAttachHandler2.default, {
          target: 'window',
          events: {
            resize: _this2.handleResize,
            keyup: _this2.handlesDocumentKeyUp,
            focus: {
              handler: _this2.enforceFocus,
              opts: {
                capture: true
              }
            }
          }
        }),
        backdrop && _this2.renderBackdrop(),
        loader && !loaded && _this2.renderLoader(),
        loaded && dialog
      )
    );
  };
};

Modal.Manager = _ModalManager2.default;
exports.default = (0, _Teleport.DelayRenderFactory)({ delay: 100 })(Modal);
exports.ModalManagerProp = modalManager;