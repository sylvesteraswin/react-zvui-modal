Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _properties = require('dom-helpers/transition/properties');

var _properties2 = _interopRequireDefault(_properties);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Fork of https://github.com/react-bootstrap/react-overlays/blob/master/src/Transition.js


var transitionEndEvent = _properties2.default.end;
var UNMOUNTED = exports.UNMOUNTED = 0;
var EXITED = exports.EXITED = 1;
var ENTERING = exports.ENTERING = 2;
var ENTERED = exports.ENTERED = 3;
var EXITING = exports.EXITING = 4;

/**
 * The Transition component lets you define and run css transitions with a simple declarative api.
 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
 * but is specifically optimized for transitioning a single child "in" or "out".
 *
 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
 * The extensive set of lifecyle callbacks means you have control over
 * the transitioning now at each step of the way.
 */

var Transition = function (_Component) {
    _inherits(Transition, _Component);

    function Transition() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Transition);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Transition.__proto__ || Object.getPrototypeOf(Transition)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            status: function () {
                var initialStatus = void 0;
                if (_this.props.in) {
                    initialStatus = _this.props.transitionAppear ? EXITED : ENTERED;
                } else {
                    initialStatus = _this.props.unmountOnExit ? UNMOUNTED : EXITED;
                }

                return initialStatus;
            }()
        }, _this.componentDidMount = function () {
            if (_this.props.transitionAppear && _this.props.in) {
                _this.performEnter(_this.props);
            }
        }, _this.componentWillReceiveProps = function (nextProps) {
            if (nextProps.in && _this.props.unmountOnExit) {
                if (_this.state.status === UNMOUNTED) {
                    // Start enter transition in componentDidUpdate.
                    _this.setState({ status: EXITED });
                } else {
                    _this._needUpdate = true;
                }
            }
        }, _this.componentDidUpdate = function () {
            var status = _this.state.status;


            if (_this.props.in) {
                if (status === EXITING) {
                    _this.performEnter(_this.props);
                } else if (status === EXITED) {
                    _this.performEnter(_this.props);
                }
            } else {
                // Otherwise we're already entering or entered.
                if (status === ENTERING || status === ENTERED) {
                    _this.performExit(_this.props);
                }
                // Otherwise we're already exited or exiting.
            }
        }, _this.componentWillUnmount = function () {
            _this.cancelNextCallback();
        }, _this.performEnter = function (props) {
            _this.cancelNextCallback();
            var node = (0, _reactDom.findDOMNode)(_this);
            var onEnter = props.onEnter;
            var _this$props = _this.props,
                onEntering = _this$props.onEntering,
                onEntered = _this$props.onEntered;

            // Not this.props, because we might be about to receive new props.

            onEnter(node);

            setTimeout(function () {
                _this.setSafeState({
                    status: ENTERING
                }, function () {
                    onEntering(node);
                    _this.onTransitionEnd(node, function () {
                        _this.setSafeState({
                            status: ENTERED
                        }, function () {
                            onEntered(node);
                        });
                    });
                });
            }, 0);
        }, _this.performExit = function (props) {
            _this.cancelNextCallback();
            var node = (0, _reactDom.findDOMNode)(_this);
            var onExit = props.onExit;
            var _this$props2 = _this.props,
                onExiting = _this$props2.onExiting,
                onExited = _this$props2.onExited;

            // Not this.props, because we might be about to receive new props.

            onExit(node);

            _this.setSafeState({
                status: EXITING
            }, function () {
                onExiting(node);
                _this.onTransitionEnd(node, function () {
                    _this.setSafeState({
                        status: EXITED
                    }, function () {
                        onExited(node);
                    });
                });
            });
        }, _this.cancelNextCallback = function () {
            if (_this.nextCallback) {
                _this.nextCallback.cancel();
                _this.nextCallback = null;
            }
        }, _this.setSafeState = function (nextState, callback) {
            // This shouldn't be necessary, but there are weird race conditions with
            // setState callbacks and unmounting in testing, so always make sure that
            // we can cancel any pending setState callbacks after we unmount.
            _this.setState(nextState, _this.setNextCallback(callback));
        }, _this.setNextCallback = function (callback) {
            var active = true;

            _this.nextCallback = function (event) {
                if (active) {
                    active = false;
                    _this.nextCallback = null;
                    callback(event);
                }
            };

            _this.nextCallback.cancel = function () {
                active = false;
            };
            return _this.nextCallback;
        }, _this.onTransitionEnd = function (node, handler) {
            _this.setNextCallback(handler);

            if (node) {
                node.addEventListener(transitionEndEvent, _this.nextCallback, false);
                setTimeout(_this.nextCallback, _this.props.timeout);
            } else {
                setTimeout(_this.nextCallback, 0);
            }
        }, _this.render = function () {
            var status = _this.state.status;


            if (status === UNMOUNTED) {
                return null;
            }

            var _this$props3 = _this.props,
                children = _this$props3.children,
                className = _this$props3.className,
                childProps = _objectWithoutProperties(_this$props3, ['children', 'className']);

            Object.keys(Transition.propTypes).forEach(function (key) {
                return delete childProps[key];
            });

            var transitionClassName = void 0;
            if (status === EXITED) {
                transitionClassName = _this.props.exitedClassName;
            } else if (status === ENTERING) {
                transitionClassName = _this.props.enteringClassName;
            } else if (status === ENTERED) {
                transitionClassName = _this.props.enteredClassName;
            } else if (status === EXITING) {
                transitionClassName = _this.props.exitingClassName;
            }

            var child = _react2.default.Children.only(children);
            return (0, _react.cloneElement)(child, _extends({}, childProps, {
                className: (0, _classnames2.default)(child.props.className, className, transitionClassName)
            }));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Transition;
}(_react.Component);

Transition.propTypes = {
    /**
    * Show the component; triggers the enter or exit animation
    */in: _react.PropTypes.bool,

    /**
    * Unmount the component (remove it from the DOM) when it is not shown
    */
    unmountOnExit: _react.PropTypes.bool,

    /**
    * Run the enter animation when the component mounts, if it is initially
    * shown
    */
    transitionAppear: _react.PropTypes.bool,

    /**
    * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
    * transition indefinately if the browser transitionEnd events are
    * canceled or interrupted.
    *
    * By default this is set to a high number (5 seconds) as a failsafe. You should consider
    * setting this to the duration of your animation (or a bit above it).
    */
    timeout: _react.PropTypes.number,

    /**
    * CSS class or classes applied when the component is exited
    */
    exitedClassName: _react.PropTypes.string,
    /**
    * CSS class or classes applied while the component is exiting
    */
    exitingClassName: _react.PropTypes.string,
    /**
    * CSS class or classes applied when the component is entered
    */
    enteredClassName: _react.PropTypes.string,
    /**
    * CSS class or classes applied while the component is entering
    */
    enteringClassName: _react.PropTypes.string,

    /**
    * Callback fired before the "entering" classes are applied
    */
    onEnter: _react.PropTypes.func,
    /**
    * Callback fired after the "entering" classes are applied
    */
    onEntering: _react.PropTypes.func,
    /**
    * Callback fired after the "enter" classes are applied
    */
    onEntered: _react.PropTypes.func,
    /**
    * Callback fired before the "exiting" classes are applied
    */
    onExit: _react.PropTypes.func,
    /**
    * Callback fired after the "exiting" classes are applied
    */
    onExiting: _react.PropTypes.func,
    /**
    * Callback fired after the "exited" classes are applied
    */
    onExited: _react.PropTypes.func
};
Transition.defaultProps = {
    in: false,
    unmountOnExit: false,
    transitionAppear: false,
    timeout: 5000,
    onEnter: _helpers.NOOP,
    onEntering: _helpers.NOOP,
    onEntered: _helpers.NOOP,
    onExit: _helpers.NOOP,
    onExiting: _helpers.NOOP,
    onExited: _helpers.NOOP
};
exports.default = Transition;