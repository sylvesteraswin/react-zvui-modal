import css from 'dom-helpers/style';
import classes from 'dom-helpers/class';
import hyphenateStyle from 'dom-helpers/util/hyphenateStyle';
import removeStyle from 'dom-helpers/style/removeStyle';

import isOverflowing from './isOverflowing';
import { scrollbarSize as getScrollbarSize, canUseDom } from './helpers';
import { ariaHidden, hideSiblings, showSiblings } from './manageHidden';

const findIndexOf = (arr, cb) => {
  let idx = -1;
  arr.some((d, i) => {
    if (cb(d, i)) {
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
  const style = {
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
    style.paddingRight =
      parseInt(css(container, 'paddingRight') || 0, 10) +
      getScrollbarSize() +
      'px';
  }

  if (canUseDom) {
    const { top } = document.documentElement.getBoundingClientRect();
    style.position = 'fixed';
    style.top = `${top}px`;
    style.width = '100%';
    state.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight,
      position: null,
      top: `${Math.abs(top)}px`,
      width: null,
    };
  }
  css(container, style);
};

const removeContainerStyle = ({ style }, container) => {
  Object.keys(style).forEach(key => {
    removeStyle(container, hyphenateStyle(key));
  });
};

// State management for container and modals in those containers
class ModalManager {
  constructor(
    { hideSiblingNodes = true, handleContainerOverflow = true } = {},
  ) {
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
  }

  add(modal, container, className) {
    let modalIdx = this.modals.indexOf(modal);
    const containerIdx = this.containers.indexOf(container);

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

    const data = {
      modals: [modal],
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
    const modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    const containerIdx = findContainer(this.data, modal);
    const data = this.data[containerIdx];
    const container = this.containers[containerIdx];

    data.modals.splice(data.modals.indexOf(modal), 1);

    this.modals.splice(modalIdx, 1);

    // if that was the last modal in a container,
    // clean up the container
    if (data.modals.length === 0) {
      data.classes.forEach(classes.removeClass.bind(null, container));

      if (this.handleContainerOverflow) {
        const scrollTo = container.style.top;
        removeContainerStyle(data, container);
        if (canUseDom) {
          window.scrollTo(0, Math.abs(parseInt(scrollTo)));
        }
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
    return (
      !!this.modals.length && this.modals[this.modals.length - 1] === modal
    );
  }
}

export default ModalManager;
