// Fork of https://github.com/react-bootstrap/react-overlays/blob/master/src/Transition.js
import React, {PropTypes, cloneElement, Component} from 'react';
import {findDOMNode} from 'react-dom';
import transitionInfo from 'dom-helpers/transition/properties';
import cn from 'classnames';

import {NOOP} from './helpers';

const {
  end: transitionEndEvent,
} = transitionInfo;

export const UNMOUNTED = 0;
export const EXITED = 1;
export const ENTERING = 2;
export const ENTERED = 3;
export const EXITING = 4;

/**
 * The Transition component lets you define and run css transitions with a simple declarative api.
 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
 * but is specifically optimized for transitioning a single child "in" or "out".
 *
 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
 * The extensive set of lifecyle callbacks means you have control over
 * the transitioning now at each step of the way.
 */

class Transition extends Component {
    static propTypes = {
        /**
        * Show the component; triggers the enter or exit animation
        */ in: PropTypes.bool,

        /**
        * Unmount the component (remove it from the DOM) when it is not shown
        */
        unmountOnExit: PropTypes.bool,

        /**
        * Run the enter animation when the component mounts, if it is initially
        * shown
        */
        transitionAppear: PropTypes.bool,

        /**
        * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
        * transition indefinately if the browser transitionEnd events are
        * canceled or interrupted.
        *
        * By default this is set to a high number (5 seconds) as a failsafe. You should consider
        * setting this to the duration of your animation (or a bit above it).
        */
        timeout: PropTypes.number,

        /**
        * CSS class or classes applied when the component is exited
        */
        exitedClassName: PropTypes.string,
        /**
        * CSS class or classes applied while the component is exiting
        */
        exitingClassName: PropTypes.string,
        /**
        * CSS class or classes applied when the component is entered
        */
        enteredClassName: PropTypes.string,
        /**
        * CSS class or classes applied while the component is entering
        */
        enteringClassName: PropTypes.string,

        /**
        * Callback fired before the "entering" classes are applied
        */
        onEnter: PropTypes.func,
        /**
        * Callback fired after the "entering" classes are applied
        */
        onEntering: PropTypes.func,
        /**
        * Callback fired after the "enter" classes are applied
        */
        onEntered: PropTypes.func,
        /**
        * Callback fired before the "exiting" classes are applied
        */
        onExit: PropTypes.func,
        /**
        * Callback fired after the "exiting" classes are applied
        */
        onExiting: PropTypes.func,
        /**
        * Callback fired after the "exited" classes are applied
        */
        onExited: PropTypes.func,
    };

    static defaultProps = {
        in: false,
        unmountOnExit: false,
        transitionAppear: false,
        timeout: 5000,
        onEnter: NOOP,
        onEntering: NOOP,
        onEntered: NOOP,
        onExit: NOOP,
        onExiting: NOOP,
        onExited: NOOP,
    };

    state = {
        status: (() => {
            let initialStatus;
            if (this.props.in) {
                initialStatus = this.props.transitionAppear
                    ? EXITED
                    : ENTERED;
            } else {
                initialStatus = this.props.unmountOnExit
                    ? UNMOUNTED
                    : EXITED;
            }

            return initialStatus;
        })(),
    };

    componentDidMount = () => {
        if (this.props.transitionAppear && this.props.in) {
            this.performEnter(this.props);
        }
    };

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.in && this.props.unmountOnExit) {
            if (this.state.status === UNMOUNTED) {
                // Start enter transition in componentDidUpdate.
                this.setState({status: EXITED});
            } else {
                this._needUpdate = true;
            }
        }
    };

    componentDidUpdate = () => {
        const {status} = this.state;

        if (this.props.in) {
            if (status === EXITING) {
                this.performEnter(this.props);
            } else if (status === EXITED) {
                this.performEnter(this.props);
            }
        } else {
            // Otherwise we're already entering or entered.
            if (status === ENTERING || status === ENTERED) {
                this.performExit(this.props);
            }
            // Otherwise we're already exited or exiting.
        }
    };

    componentWillUnmount = () => {
        this.cancelNextCallback();
    };

    performEnter = (props) => {
        this.cancelNextCallback();
        const node = findDOMNode(this);
        const {onEnter} = props;
        const {onEntering, onEntered} = this.props;

        // Not this.props, because we might be about to receive new props.
        onEnter(node);

        this.setSafeState({
            status: ENTERING,
        }, () => {
            onEntering(node);
            this.onTransitionEnd(node, () => {
                this.setSafeState({
                    status: ENTERED,
                }, () => {
                    onEntered(node);
                });
            });
        });
    };

    performExit = (props) => {
        this.cancelNextCallback();
        const node = findDOMNode(this);
        const {onExit} = props;
        const {onExiting, onExited} = this.props;

        // Not this.props, because we might be about to receive new props.
        onExit(node);

        this.setSafeState({
            status: EXITING,
        }, () => {
            onExiting(node);
            this.onTransitionEnd(node, () => {
                this.setSafeState({
                    status: EXITED,
                }, () => {
                    onExited(node);
                });
            });
        });
    };

    cancelNextCallback = () => {
        if (this.nextCallback) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };

    setSafeState = (nextState, callback) => {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        this.setState(nextState, this.setNextCallback(callback));
    };

    setNextCallback = (callback) => {
        let active = true;

        this.nextCallback = (event) => {
            if (active) {
                active = false;
                this.nextCallback = null;
                callback(event);
            }
        };

        this.nextCallback.cancel = () => {
            active = false;
        };
        return this.nextCallback;
    };

    onTransitionEnd = (node, handler) => {
        this.setNextCallback(handler);

        if (node) {
            node.addEventListener(transitionEndEvent, this.nextCallback, false);
            setTimeout(this.nextCallback, this.props.timeout);
        } else {
            setTimeout(this.nextCallback, 0);
        }
    };

    render = () => {
        const {status} = this.state;

        if (status === UNMOUNTED) {
            return null;
        }

        const {
            children,
            className,
            ...childProps
        } = this.props;

        Object.keys(Transition.propTypes).forEach(key => delete childProps[key]);

        let transitionClassName;
        if (status === EXITED) {
            transitionClassName = this.props.exitedClassName;
        } else if (status === ENTERING) {
            transitionClassName = this.props.enteringClassName;
        } else if (status === ENTERED) {
            transitionClassName = this.props.enteredClassName;
        } else if (status === EXITING) {
            transitionClassName = this.props.exitingClassName;
        }

        const child = React.Children.only(children);
        return cloneElement(child, {
            ...childProps,
            className: cn(child.props.className, className, transitionClassName,),
        });
    };

}

export default Transition;
