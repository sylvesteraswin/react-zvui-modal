import React, {cloneElement, Component, PropTypes} from 'react';
import componentOrElement from 'react-prop-types/lib/componentOrElement';
import elementType from 'react-prop-types/lib/elementType';
import warning from 'warning';
import cn from 'classnames';

import Teleport from 'react-teleport-me';
import { DelayRenderFactory } from 'react-teleport-me/lib/Teleport';
import AttachHandler from 'react-attach-handler'; //eslint-disable-line no-unused-vars
import ModalManager from './ModalManager';

import {
    ownerDocumentFn,
    canUseDom,
    contains,
    getContainer,
    activeElement,
    NOOP,
} from './helpers';

const modalManager = new ModalManager();

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

class Modal extends Component {
    static propTypes = {
        ...Teleport.propTypes,
        /**
         * A Node, Component instance, or function that returns either. The `container` will have the Portal children
         * appended to it.
         */
        container: React.PropTypes.oneOfType([
            componentOrElement,
            PropTypes.func,
        ]),
        // Set the visibility of the Modal
        active: PropTypes.bool,
        // A callback fired when the Modal is opening
        onShow: PropTypes.func,
        // A callback fired when either the backdrop is clicked or the escape key is pressed
        // But setting the prop `active` to false can be used to close the Modal
        onHide: PropTypes.func,
        // A callback fired when the window is resized
        onResize: PropTypes.func,
        // Include a backdrop component
        backdrop: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(['static']),
        ]),
        // Include a loader component
        loader: PropTypes.bool,
        // Flag to disable loading and active dialog
        loadComplete: PropTypes.bool,
        // Function that returns a backdrop component
        renderBackdrop: PropTypes.func,
        // Function that returns a loader component
        renderLoader: PropTypes.func,
        // A callback fired when Esc key is pressed
        onEscapeKeyUp: PropTypes.func,
        // A callback fired when backdrop, is exists, is clicked
        onBackdropClick: PropTypes.func,
        // A style object for the backdrop component
        backdropStyle: PropTypes.object,
        // A css class or classes for the backdrop component
        backdropClassName: PropTypes.string,
        // A style object for the loader component
        loaderStyle: PropTypes.object,
        // A css class or classes for the loader component
        loaderClassName: PropTypes.string,
        // A css class or classes for the loader icon component
        loaderIconClassName: PropTypes.string,
        // A css class or set of classes applied to the modal container when the modal is open, and removed when it is closed
        containerClassName: PropTypes.string,
        // Close the modal when escape key is pressed
        keyboard: PropTypes.bool,
        // When `true` the focus is automatically shited to the open modal
        autoFocus: PropTypes.bool,
        // When `true` the Modal will prevent focus from leaving the Modal when open.
        enforceFocus: PropTypes.bool,
        // A callback fired before the Modal transition in
        onEnter: PropTypes.func,
        // A callback fired when begins the transition in
        onEntering: PropTypes.func,
        // A callback fired after the Modal finishes transition in
        onEntered: PropTypes.func,
        // A callback fired right before the Modal transition out
        onExit: PropTypes.func,
        // A callback fired as the Modal beings to transition out
        onExiting: PropTypes.func,
        // A callback fired after the Modal finishes transition out
        onExited: PropTypes.func,
        // A modal manager instance used to track and manage the state of open Modals
        manager: PropTypes.object.isRequired,
        // A <Transition /> component to use for the dialog and backdrop
        transition: elementType,
        // The `timeout` of the dialog transition if specified.
        dialogTransitionTimeout: PropTypes.number,
        // The `timeout` of the backdrop transition if specified.
        backdropTransitionTimeout: PropTypes.number,
        // The `timeout` of the loader transition if specified.
        loaderTransitionTimeout: PropTypes.number,
        // Callback fired before the Modal transitions in
        onEnter: PropTypes.func,
        // Callback fired as the Modal begins to transition in
        onEntering: PropTypes.func,
        // Callback fired after the Modal finishes transitioning in
        onEntered: PropTypes.func,
        // Callback fired right before the Modal transitions out
        onExit: PropTypes.func,
        // Callback fired as the Modal begins to transition out
        onExiting: PropTypes.func,
        // Callback fired after the Modal finishes transitioning out
        onExited: PropTypes.func,
    };

    static defaultProps = {
        active: false,
        backdrop: true,
        loader: false,
        keyboard: true,
        autoFocus: true,
        enforceFocus: true,
        onHide: NOOP,
        manager: modalManager,
        renderBackdrop: (props) => <div {...props} />,
        renderLoader: (props) => (
            <div {...props}>
                <div
                    className={props.loaderIconClassName} />
            </div>
        ),
    };

    state = {
        exited: !this.props.active,
        loaded: !this.props.loader,
    };

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.active) {
            this.setState({
                exited: false,
            }, () => {
                if (nextProps.loadComplete && this.props.loader) {
                    this.setState({
                        loaded: true,
                    });
                }
            });
        } else if (!nextProps.transition){
            // Otherwise let handleHidden take care of marking exited.
            this.setState({
                exited: true,
            });
        }
    };

    componentWillUpdate = (nextProps) => {
        if (!this.props.active && nextProps.active) {
            this.checkForFocus();
        }
    };

    componentDidMount = () => {
        this._isMounted = true;
        if (this.props.active) {
            this.onShow();
        }
    };

    componentDidUpdate = (prevProps) => {
        const {
            transition,
        } = this.props;

        if (prevProps.active && !this.props.active && !transition) {
            // Otherwise handleHidden will call this.
            this.onHide();
        } else if (!prevProps.active && this.props.active) {
            this.onShow();
        }
    };

    componentWillUnmount = () => {
        const {
            active,
            transition,
        } = this.props;

        this._isMounted = false;

        if (active || (transition && !this.state.exited)) {
            this.onHide();
        }
    };

    isMounted = () => {
        return this._isMounted;
    };

    omitProps = (props, propTypes) => {
        const keys = Object.keys(props);
        const newProps = {};
        keys.map(prop => {
            if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
                newProps[prop] = props[prop];
            }
        });
        return newProps;
    };

    renderLoader = () => {
        const {
            loaderStyle,
            loaderClassName,
            loaderIconClassName,
            renderLoader,
            transition: Transition,
            loaderTransitionTimeout,
        } = this.props;

        const loaderRef = ref => this.loader = ref;

        let loader = (
            <div
                ref={loaderRef}
                style={loaderStyle}
                className={cn(loaderClassName, {
                    in: this.props.active,
                })}
            >
                <div
                    className={`${loaderIconClassName}`} />
            </div>
        );

        if (Transition) {
            loader = (
                <Transition
                    in={this.props.active}
                    timeout={loaderTransitionTimeout}
                >
                    {
                        renderLoader({
                            ref: loaderRef,
                            style: loaderStyle,
                            className: cn(loaderClassName, {
                                in: this.props.active,
                            }),
                            loaderIconClassName,
                        })
                    }
                </Transition>
            );
        }

        return loader;
    };

    renderBackdrop = () => {
        const {
            backdropStyle,
            backdropClassName,
            renderBackdrop,
            transition: Transition,
            backdropTransitionTimeout,
        } = this.props;

        const backdropRef = ref => this.backdrop = ref;

        let backdrop = (
            <div
                ref={backdropRef}
                style={backdropStyle}
                className={cn(backdropClassName, {
                    in: this.props.active,
                })}
                onClick={this.handleBackdropClick} />
        );

        if (Transition) {
            backdrop = (
                <Transition
                    in={this.props.active}
                    timeout={backdropTransitionTimeout}
                >
                    {
                        renderBackdrop({
                            ref: backdropRef,
                            style: backdropStyle,
                            className: cn(backdropClassName, {
                                in: this.props.active,
                            }),
                            onClick: this.handleBackdropClick,
                        })
                    }
                </Transition>
            );
        }

        return backdrop;
    };

    onShow = () => {
        const doc = ownerDocumentFn(this);
        const container = getContainer(this.props.container, doc.body);

        this.props.manager.add(this, container, this.props.containerClassName);

        // this.focus();

        if (this.props.onShow) {
            this.props.onShow();
        }
    };

    onHide = () => {
        this.props.manager.remove(this);
        this.restoreLastFocus();
    };

    setMountNode = (ref) => {
        this.mountNode = ref ? ref.getMountNode() : ref;
    };

    handleHidden = (...args) => {
        this.setState({
            exited: true,
            loaded: !this.props.active,
        });
        this.onHide();

        if (this.props.onExited) {
            this.props.onExited(...args);
        }
    };

    handleBackdropClick = (e) => {
        if (e.target !== e.currentTarget) {
            return;
        }

        if (this.props.onBackdropClick) {
            this.props.onBackdropClick();
        }

        if (this.props.backdrop) {
            this.props.onHide();
        }
    };

    handlesDocumentKeyUp = (e) => {
        if (this.props.keyboard && e.keyCode === 27 && this.isTopModal()) {
            if (this.props.onEscapeKeyUp) {
                this.props.onEscapeKeyUp();
            }
            this.props.onHide();
        }
    };

    handleResize = () => {
        if (this.props.onResize) {
            this.props.onResize();
        }
    };

    checkForFocus = () => {
        if (canUseDom) {
            this.lastFocus = activeElement();
        }
    };

    focus = () => {
        const {
            autoFocus,
        } = this.props;

        const modalContent = this.getDialogElement();
        const current = activeElement(ownerDocumentFn(this));
        const focusInModal = current && modalContent && contains(modalContent, current);

        if (modalContent && autoFocus && !focusInModal) {
            this.lastFocus = current;

            if (typeof modalContent.hasAttribute === 'function' && !modalContent.hasAttribute('tabIndex')) {
                modalContent.setAttribute('tabIndex', -1);
                warning(false, 'The modal content node does not accept focus. For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
            }

            // modalContent.focus();
        }
    };

    restoreLastFocus = () => {
        // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
        if (this.lastFocus && this.lastFocus.focus) {
            // this.lastFocus.focus();
            this.lastFocus = null;
        }
    };

    enforceFocus = () => {
        const {
            enforceFocus,
        } = this.props;

        if (!enforceFocus || !this.isMounted() || !this.isTopModal()) {
            return;
        }

        const active = activeElement(ownerDocumentFn(this));
        const modal = this.getDialogElement();

        if (modal && modal !== active && !contains(modal, active)) {
            // modal.focus();
        }
    };

    getDialogElement = () => {
        const node = this.refs.modal;
        return node && node.lastChild;
    };

    isTopModal = () => {
        return this.props.manager.isTopModal(this);
    };

    render = () => {
        const {
            active,
            container,
            children,
            transition: Transition,
            backdrop,
            loader,
            dialogTransitionTimeout,
            className,
            style,
            onExit,
            onExiting,
            onEnter,
            onEntering,
            onEntered,
        } = this.props;

        const {
            loaded,
        } = this.state;

        let dialog = React.Children.only(children);
        const filterProps = this.omitProps(this.props, Modal.propTypes);

        const mountModal = active || (Transition && !this.state.exited);
        if (!mountModal) {
            return null;
        }

        const { role, tabIndex } = dialog.props;

        if ((role === undefined) || (tabIndex === undefined)) {
            dialog = cloneElement(dialog, {
                role: role ? 'document' : role,
                tabIndex: tabIndex ? '-1' : tabIndex,
            });
        }

        if (Transition) {
            dialog = (
                <Transition
                    transitionAppear
                    unmountOnExit
                    in={active}
                    timeout={dialogTransitionTimeout}
                    onExit={onExit}
                    onExiting={onExiting}
                    onExited={this.handleHidden}
                    onEnter={onEnter}
                    onEntering={onEntering}
                    onEntered={onEntered}
                >
                    { dialog }
                </Transition>
            );
        }

        return (
            <Teleport
                ref={this.setMountNode}
                container={container}
            >
                <div
                    ref={'modal'}
                    role={role || 'dialog'}
                    {...filterProps}
                    style={style}
                    className={className}
                >
                    {
                        active &&
                        <AttachHandler
                            target={'window'}
                            events={{
                                resize: this.handleResize,
                                keyup: this.handlesDocumentKeyUp,
                                focus: {
                                    handler: this.enforceFocus,
                                    opts: {
                                        capture: true,
                                    },
                                },
                            }}
                            />
                    }
                    { backdrop && this.renderBackdrop() }
                    { loader && !loaded && this.renderLoader() }
                    { loaded && dialog }
                </div>
            </Teleport>
        );
    };
}

Modal.Manager = ModalManager;
export default DelayRenderFactory({ delay: 100 })(Modal);

export { modalManager as ModalManagerProp };
