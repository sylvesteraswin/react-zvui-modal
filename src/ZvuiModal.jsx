import React, { PropTypes, Component } from 'react';  //eslint-disable-line no-unused-vars
import { findDOMNode } from 'react-dom';
import componentOrElement from 'react-prop-types/lib/componentOrElement';
import css from 'dom-helpers/style';
import cn from 'classnames';

import AttachHandler from 'react-attach-handler'; //eslint-disable-line no-unused-vars

import BaseModal from './base/Modal';
import isOverflowing from './base/isOverflowing'; //eslint-disable-line no-unused-vars

import { ownerDocument, canUseDom, scrollbarSize } from './base/helpers'; //eslint-disable-line no-unused-vars

import ZvuiModalHeader from './components/ZvuiModalHeader';
import ZvuiModalTitle from './components/ZvuiModalTitle';
import ZvuiModalBody from './components/ZvuiModalBody';
import ZvuiModalFade from './components/ZvuiModalFade';

const baseIndex = {};
const PREFIX = 'zvui-modal';
const TRANSITION_DURATION = 300;
const BACKDROP_TRANSITION_DURATION = 150;

let getZIndex;

const findTheBlackSheeps = (obj, keys) => Object.keys(obj).reduce((o, key) => {
    if (keys.indexOf(key) === -1) {
        o[key] = obj[key];
    }
    return o;
}, {});

const GET_PREFIX = () => {
    return PREFIX;
};

class ZvuiModal extends Component {
    getDefaultPrefix = GET_PREFIX;

    static propTypes = {
        show: PropTypes.bool,
        // sizes
        small: PropTypes.bool,
        sm: PropTypes.bool,
        large: PropTypes.bool,
        lg: PropTypes.bool,
        full: PropTypes.bool,
        backdrop: PropTypes.oneOf([
            'static',
            true,
            false,
        ]),
        loader: PropTypes.bool,
        loadComplete: PropTypes.bool,
        keyboard: PropTypes.bool,
        animate: PropTypes.bool,
        transition: PropTypes.any,
        container: PropTypes.oneOfType([
            componentOrElement,
            PropTypes.func,
        ]),
        onShow: PropTypes.func,
        onHide: PropTypes.func,
        onEnter: PropTypes.func,
        onEntering: PropTypes.func,
        onEntered: PropTypes.func,
        onExit: PropTypes.func,
        onExiting: PropTypes.func,
        onExited: PropTypes.func,
        modalPrefix: PropTypes.func,
        dialogClassName: PropTypes.string,
    };

    static defaultProps = {
        backdrop: true,
        loader: false,
        loadComplete: false,
        keyboard: true,
        animate: true,
        transition: true,
        container: canUseDom ? document.body : null,
        manager: BaseModal.defaultProps.manager,
    };

    static childContextTypes = {
        onModalHide: PropTypes.func,
        getDefaultPrefix: PropTypes.func,
    };

    getChildContext = () => {
        return this._context || (this._context = {
            onModalHide: this.props.onHide,
            getDefaultPrefix: this.getDefaultPrefix,
        });
    };

    state = {
        classes: '',
        dialogStyle: {},
        sizeHandler: false,
    }

    componentDidMount = () => {
        getZIndex = getZIndex || (() => {
            const {
                modalPrefix,
            } = this.props;
            const prefix = modalPrefix || this.getDefaultPrefix();

            const modal = document.createElement('div');
            const backdrop = document.createElement('div');
            const loader = document.createElement('div');

            modal.className = `${prefix} hide`;
            backdrop.className = `${prefix}-backdrop hide`;
            loader.className = `${prefix}-loader hide`;

            document.body.appendChild(modal);
            document.body.appendChild(backdrop);
            document.body.appendChild(loader);

            baseIndex.modal = +css(modal, 'z-index');
            baseIndex.backdrop = +css(backdrop, 'z-index');
            baseIndex.loader = +css(loader, 'z-index');
            const zIndexFactor = baseIndex.modal - baseIndex.backdrop;

            document.body.removeChild(modal);
            document.body.removeChild(backdrop);
            document.body.removeChild(loader);

            return (type) => baseIndex[type] + (zIndexFactor * (this.props.manager.modals.length - 1));
        })();
    };

    handleBackdropClick = (e) => {
        if (e.target !== e.currentTarget) { return; }
        this.props.onHide();
    };

    handleEntering = (...args) => {
        this._show(...args);

        if (this.props.onEntering) {
            this.props.onEntering();
        }
    };

    _show = () => {
        if (this.props.show) {
            this.setState(this._getStyles);
        }
    };

    _getStyles = () => {
        if (!canUseDom) {
            return {};
        }

        const {
            container,
        } = this.props;

        const node = findDOMNode(this.dialog);
        const doc = ownerDocument(node);
        const scrollHt = node.scrollHeight;
        const bodyIsOverflowing = isOverflowing(container);
        const modalIsOverflowing = scrollHt > doc.documentElement.clientHeight;

        const nodeInner = findDOMNode(this.dialogInner);
        const {
            height: innerHeight,
            width: innerWidth,
        } = nodeInner.getBoundingClientRect() || {};

        const {
            height,
            width,
        } = node.getBoundingClientRect() || {};

        const modalOverflowHeight = (height - 10 < innerHeight);
        const modalOverflowWidth = (width - 10 < innerWidth);
        let marginStyles = {
            left: 0,
        };

        if (!modalOverflowHeight) {
            marginStyles = {
                ...marginStyles,
                top: '50%',
                marginTop: 0 - innerHeight / 2,
            };
        } else {
            marginStyles = {
                ...marginStyles,
            };
        }

        if (!modalOverflowWidth) {
            marginStyles = {
                ...marginStyles,
                left: '50%',
                marginLeft: 0 - innerWidth / 2,
            };
        } else {
            marginStyles = {
                ...marginStyles,
            };
        }

        return {
            dialog: {
                zIndex: getZIndex('modal'),
                paddingRight: bodyIsOverflowing && !modalIsOverflowing ? scrollbarSize() : 0,
                paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? scrollbarSize() : 0,
            },
            backdrop: {
                zIndex: getZIndex('backdrop'),
            },
            dialogStyle: {
                ...marginStyles,
            },
        };
    };

    render = () => {
        const {
            className,
            children,
            keyboard,
            modalPrefix,
            dialogClassName,
            container,
            onEnter,
            onEntered,
            onExit,
            onExited,
            ...props
        } = this.props;

        const {
            dialog,
            classes,
            backdrop,
            dialogStyle,
        } = this.state;

        delete props.manager;
        const elementProps = findTheBlackSheeps(props, Object.keys(ZvuiModal.propTypes));

        const prefix = modalPrefix || this.getDefaultPrefix();
        let transition;

        if (props.transition === true) {
            transition = ZvuiModalFade;
        }

        const modal = (
            <div
                {...elementProps}
                ref={r => this.dialog = r}
                style={dialog}
                className={cn(className, prefix, {
                    in: props.show && !transition,
                })}
                onClick={this.props.backdrop ? e => this.handleBackdropClick(e) : null}
            >
                <div
                    key={`${prefix}`}
                    ref={r => this.dialogInner = r}
                    style={dialogStyle}
                    className={cn(
                        `${prefix}-dialog`,
                        dialogClassName,
                        classes, {
                            [`${prefix}-sm`]: props.small,
                            [`${prefix}-md`]: props.medium,
                            [`${prefix}-lg`]: props.large,
                        }
                    )}
                >
                    <div
                        className={`${prefix}-content`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );


        return (
            <BaseModal
                keyboard={keyboard}
                ref={ref => {
                    this.modal = ref && ref.modal;
                    this.backdrop = ref && ref.backdrop;
                }}
                container={container}
                backdrop={props.backdrop}
                loader={props.loader}
                loadComplete={props.loadComplete}
                show={props.show}
                onHide={props.onHide}
                onShow={props.onShow}
                onEnter={onEnter}
                onEntering={this.handleEntering}
                onEntered={onEntered}
                onExit={onExit}
                onExsiting={this.handleExiting}
                onExited={onExited}
                backdropStyle={backdrop}
                transition={transition}
                onResize={this._show}
                backdropClassName={cn(`${PREFIX}-backdrop`, {
                    in: props.show,
                })}
                loaderClassName={cn(`${PREFIX}-loader`, {
                    in: props.show,
                })}
                loaderIconClassName= {cn(`${PREFIX}-loader-icon`, {
                    in: props.show,
                })}
                containerClassName={`${PREFIX}-open`}
                dialogTransitionTimeout={TRANSITION_DURATION}
                backdropTransitionTimeout={BACKDROP_TRANSITION_DURATION}
            >
                {modal}
            </BaseModal>
        );
    };
}

ZvuiModal.Header = ZvuiModalHeader;
ZvuiModal.Title = ZvuiModalTitle;
ZvuiModal.Body = ZvuiModalBody;


export default ZvuiModal;
