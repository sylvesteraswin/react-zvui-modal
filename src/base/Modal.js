import React, {cloneElement, Component, PropTypes} from 'react';
import componentOrElement from 'react-prop-types/lib/componentOrElement';
import warning from 'warning';

import Teleport from 'react-teleport-me';
import AttachHandler from 'react-attach-handler'; //eslint-disable-line no-unused-vars
import ModalManager from './ModalManager';

import {ownerDocumentFn, canUseDom, contains, getContainer, activeElement} from './helpers';

const modalManager = new ModalManager();

const NOOP = () => {};

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
        show: PropTypes.bool,
        // A callback fired when the Modal is opening
        onShow: PropTypes.func,
        // A callback fired when either the backdrop is clicked or the escape key is pressed
        // But setting the prop `show` to false can be used to close the Modal
        onHide: PropTypes.func,
        // Include a backdrop component
        backdrop: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(['static']),
        ]),
        // Function that returns a backdrop component
        renderBackdrop: PropTypes.func,
        // A callback fired when Esc key is pressed
        onEscapeKeyUp: PropTypes.func,
        // A callback fired when backdrop, is exists, is clicked
        onBackdropClick: PropTypes.func,
        // A style object for the backdrop component
        backdropStyle: PropTypes.object,
        // A css class or classes for the backdrop component
        backdropClassName: PropTypes.string,
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
    };

    static defaultProps = {
        show: false,
        backdrop: true,
        keyboard: true,
        autoFocus: true,
        enforceFocus: true,
        onHide: NOOP,
        manager: modalManager,
        renderBackdrop: (props) => <div {...props} />,
    };

    state = {
        exited: !this.props.show,
    };

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.show) {
            this.setState({
                exited: false,
            });
        } else {
            // Otherwise let handleHidden take care of marking exited.
            this.setState({
                exited: true,
            });
        }
    };

    componentWillUpdate = (nextProps) => {
        if (!this.props.show && nextProps.show) {
            this.checkForFocus();
        }
    };

    componentDidMount = () => {
        this._isMounted = true;
        if (this.props.show) {
            this.onShow();
        }
    };

    componentDidUpdate = (prevProps) => {
        let {
        } = this.props;

        if (prevProps.show && !this.props.show) {
            // Otherwise handleHidden will call this.
            this.onHide();
        } else if (!prevProps.show && this.props.show) {
            this.onShow();
        }
    };

    componentWillUnmount = () => {
        const {
            show,
        } = this.props;

        this._isMounted = false;

        if (show || !this.state.exited) {
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

    renderBackdrop = () => {
        const {
            backdropStyle,
            backdropClassName,
            // renderBackdrop,
        } = this.props;

        const backdrop = (
            <div
                ref={ref => this.backdrop = ref}
                style={backdropStyle}
                className={backdropClassName}
                onClick={this.handleBackdropClick} />
        );

        return backdrop;
    };

    onShow = () => {
        const doc = ownerDocumentFn(this);
        const container = getContainer(this.props.container, doc.body);

        this.props.manager.add(this, container, this.props.containerClassName);

        this.focus();

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

        if (this.props.backdrop === true) {
            this.props.onHide();
        }
    };

    handleDocumentKeyUp = (e) => {
        if (this.props.keyboard && e.keyCode === 27 && this.isTopModal()) {
            if (this.props.onEscapeKeyUp) {
                this.props.onEscapeKeyUp();
            }
            this.props.onHide();
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
        const focusInModal = current && contains(modalContent, current);

        if (modalContent && autoFocus && !focusInModal) {
            this.lastFocus = current;

            if (!modalContent.hasAttribute('tabIndex')) {
                modalContent.setAttribute('tabIndex', -1);
                warning(false, 'The modal content node does not accept focus. For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
            }

            modalContent.focus();
        }
    };

    restoreLastFocus = () => {
        // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
        if (this.lastFocus && this.lastFocus.focus) {
            this.lastFocus.focus();
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
            modal.focus();
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
            show,
            container,
            children,
            backdrop,
            className,
            style,
        } = this.props;

        let dialog = React.Children.only(children);
        const filterProps = this.omitProps(this.props, Modal.propTypes);

        const mountModal = show || !this.state.exited;
        if (!mountModal) {
            return null;
        }

        const { role, tabIndex } = dialog.props;

        if ((role === undefined) || (tabIndex === undefined)) {
            dialog = cloneElement(dialog, {
                role: role === undefined ? 'document' : role,
                tabIndex: tabIndex === null ? '-1' : tabIndex,
            });
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
                    <AttachHandler
                        target={'document'}
                        events={{
                            keyup: this.handleDocumentKeyUp,
                            focus: {
                                handler: this.enforceFocus,
                                opts: {
                                    capture: true,
                                },
                            },
                        }}
                        />
                    { backdrop && this.renderBackdrop() }
                    { dialog }
                </div>
            </Teleport>
        );
    };
}

Modal.Manager = ModalManager;
export default Modal;
