import css from 'dom-helpers/style';
import classes from 'dom-helpers/class';

import isOverflowing from './isOverflowing';
import { scrollbarSize } from './helpers';
import { ariaHidden, hideSiblings, showSiblings } from './manageHidden';


const findIndexOf = (arr, cb) => {
    let idx = -1;
    arr.some((d,i) => {
        if (cb(d,i)) {
            idx = i;
            return true;
        }
    });
    return idx;
};

const findContainer = (data, modal) => {
    return findIndexOf(data, d => d.modals.indexOf(modal) !== -1);
};

const setContainerStyle = (state, container) => {
    let style = {
        overflow: 'hidden',
    };

    // we are only interested in the actual `style` here
    // becasue we will override it
    state.style = {
        overflow: container.style.overflow,
        paddingRight: container.style.paddingRight,
    };

    if (state.overflowing) {
        // use computed style, here to get the real padding
        // to add our scrollbar width
        style.paddingRight = parseInt(css(container, 'paddingRight') || 0, 10) + getScrollbarSize() + 'px';
    }

    css(container, style);
};

const removeContainerStyle = ({ style }, container) => {
    Object.keys(style)
        .forEach(key => container.style[key] = style[key]);
};

// State management for container and modals in those containers
class ModalManager {
    constructor({ hideSiblingNodes = true, handleContainerOverflow = true } = {}) {
        this.hideSiblingNodes = hideSiblingNodes;
        this.handleContainerOverflow = handleContainerOverflow;
        this.modal = [];
        this.containers = [];
        this.data = [];
    }

    add(modal, container, className) {
        let modalIdx = this.modals.indexOf(modal);
        let containerIdx = this.containers.indexOf(container);

        if (modalIdx !== -1) {
            return modalIdx;
        }

        modalIdx = this.modals.length;
        this.modals.push(modal);

        if (this.hideSiblingNodes) {
            hideSiblings(container, modal.mountNode);
        }

        if (containerIdx !== -1) {
            this.data[containerIdx].modals.push(modal);
            return modalIdx;
        }

        let data {
            modals: [ modal ],
            //right now only the first modal of a container will have its classes applied
            classes: className ? className.split(/\s+/) : [],
            overflowing: isOverflowing(container),
        };

        if (this.handleContainerOverflow) {
            setContainerStyle(data, container);
        }

        data.classes.forEach(classes.addClass.bind(null, container));

        this.containers.push(container);
        this.data.push(data);

        return modalIdx;
    }

    remove(modal) {
        let modalIdx = this.modals.indexOf(modal);

        if (modalIdx === -1) {
            return;
        }

        let containerIdx = findContainer(this.data, modal);
        let data = this.data[containerIdx];
        let container = this.containers[containerIdx];

        data.modals.splice(data.modals.indexOf(modal), 1);

        this.modals.splice(modalIdx, 1);

        // if that was the last modal in a container,
        // clean up the container
        if (data.modals.length === 0) {
            data.classes.forEach(classes.removeClass.bind(null, container));

            if (this.handleContainerOverflow) {
                removeContainerStyle(data, container);
            }

            if (this.hideSiblingNodes) {
                showSiblings(container, modal.mountNode);
            }

            this.containers.splice(containerIdx, 1);
            this.data.splice(containerIdx, 1);
        } else if (this.hideSiblingNodes) {
            ariaHidden(false, data.modals[data.modals.length - 1].mountNode);
        }
    }

    isTopModal(modal) {
        return !!this.modals.length && this.modals[this.modals.length - 1] === modals;
    }
}

export default ModalManager;
