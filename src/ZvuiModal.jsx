import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import css from 'dom-helpers/style';
import cn from 'classnames';

import BaseModal from './base/Modal';
import isOverflowing from './base/isOverflowing';
import componentOrElement from 'react-prop-types/lib/componentOrElement';

import { ownerDocument, canUseDom, scrollbarSize } from './base/helpers';

const baseIndex = {};
const PREFIX = 'zvui';

let getZIndex;

class ZvuiModal extends Component {
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
        transition: PropTypes.any,
        container: PropTypes.oneOfType([
            componentOrElement,
            PropTypes.func,
        ]),
        onHide: PropTypes.func,
        onEnter: PropTypes.func,
        onEntering: PropTypes.func,
        onEntered: PropTypes.func,
        onExit: PropTypes.func,
        onExiting: PropTypes.func,
        onExited: PropTypes.func,
        modalPrefix: PropTypes.func,
        dialogClassName: PropTypes.string,
        attentionClass: PropTypes.string,
    };

    static defaultProps = {
        backdrop: true,
        keyboard: true,
        animate: true,
        transition: false,
        container: canUseDom ? document.body : null,
        manager: BaseModal.defaultProps.manager,
    };

    static childContextTypes = {
        onModalHide: PropTypes.func,
    };

    getChildContext = () => {
        return this._context || (this._context = { onModalHide: this.props.onHide });
    };

    state = {
        classes: '',
    }

    componentDidMount = () => {

    };

    render = () => {
        let {
            className,
            children,
            keyboard,
            backdrop,
            transition,
            modalPrefix,
            dialogClassName,
            container,
            onEnter,
            onEntered,
            onExit,
            onExited,
            ...props,
        } = this.props;

        let {
            dialog,
            classes,
            backdrop,
        } = this.state;

        return (
            <BaseModal
                keyboard={keyboard}
                ref={ref => {
                    this.modal = ref && ref.modal;
                    this.backdrop = ref && ref.backdrop;
                }}
                container={container}
                backdrop={backdrop}
                show={props.show}
                onHide={props.onHide}
                onEnter={onEnter}
                onEntering={this.handleEntering}
                onEntered={onEntered}
                onExit={onExit}
                onExiting={this.handleExiting}
                onExited={onExited}
                backdropStyle={backdrop}
                backdropClassName={`${PREFIX}-backdrop`}
                containerClassName={`${PREFIX}-open`}
            >
                Hello World
            </BaseModal>
        );
    };
}

export default ZvuiModal;
