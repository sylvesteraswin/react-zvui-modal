import React, { PropTypes, Component } from 'react';  //eslint-disable-line no-unused-vars
import componentOrElement from 'react-prop-types/lib/componentOrElement';
import css from 'dom-helpers/style';
import cn from 'classnames';

import BaseModal from './base/Modal';
import isOverflowing from './base/isOverflowing'; //eslint-disable-line no-unused-vars

import { ownerDocument, canUseDom, scrollbarSize } from './base/helpers'; //eslint-disable-line no-unused-vars

import ZvuiModalHeader from './components/ZvuiModalHeader';
import ZvuiModalTitle from './components/ZvuiModalTitle';
import ZvuiModalBody from './components/ZvuiModalBody';

const baseIndex = {};
const PREFIX = 'zvui-modal';

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
        backdrop: PropTypes.oneOf([
            'static',
            true,
            false,
        ]),
        keyboard: PropTypes.bool,
        animate: PropTypes.bool,
        container: PropTypes.oneOfType([
            componentOrElement,
            PropTypes.func,
        ]),
        onShow: PropTypes.func,
        onHide: PropTypes.func,
        modalPrefix: PropTypes.func,
        dialogClassName: PropTypes.string,
        attentionClass: PropTypes.string,
    };

    static defaultProps = {
        backdrop: true,
        keyboard: true,
        animate: true,
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
    }

    componentDidMount = () => {
        getZIndex = getZIndex || (() => {
            const modal = document.createElement('div');
            const backdrop = document.createElement('div');

            modal.className = 'zvui-modal hide';
            backdrop.className = 'zvui-backdrop hide';

            document.body.appendChild(modal);
            document.body.appendChild(backdrop);

            baseIndex.modal = +css(modal, 'z-index');
            baseIndex.backdrop = +css(backdrop, 'z-index');
            const zIndexFactor = baseIndex.modal - baseIndex.backdrop;

            document.body.removeChild(modal);
            document.body.removeChild(backdrop);

            return (type) => baseIndex[type] + (zIndexFactor * (this.props.manager.modals.length - 1));
        })();
    };

    handleBackdropClick = (e) => {
        if (e.target !== e.currentTarget) { return; }
        // if (this.props.backdrop === 'static') {
        //     return this.attention();
        // }
        this.props.onHide();
    };

    render = () => {
        const {
            className,
            children,
            keyboard,
            modalPrefix,
            dialogClassName,
            container,
            ...props
        } = this.props;

        const {
            dialog,
            classes,
            backdrop,
        } = this.state;

        delete props.manager;
        const elementProps = findTheBlackSheeps(props, Object.keys(ZvuiModal.propTypes));

        const prefix = modalPrefix || this.getDefaultPrefix();

        const modal = (
            <div
                {...elementProps}
                ref={r => this.dialog = r}
                style={dialog}
                className={cn(className, prefix, {
                    in: props.show,
                })}
                onClick={this.props.backdrop ? e => this.handleBackdropClick(e) : null}
            >
                <div
                    key='zvui-modal'
                    ref='zvui-modal-inner'
                    className={cn(
                        `${prefix}-dialog`,
                        dialogClassName,
                        classes, {
                            [`${prefix}-sm`]: props.small,
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
                show={props.show}
                onHide={props.onHide}
                onShow={props.onShow}
                backdropStyle={backdrop}
                backdropClassName={`${PREFIX}-backdrop`}
                containerClassName={`${PREFIX}-open`}
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
