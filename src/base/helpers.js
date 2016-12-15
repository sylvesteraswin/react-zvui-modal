import ReactDOM from 'react-dom';

const isWindow = (node) => {
    return node === node.window
        ? node
        : node.nodeType === 9
            ? node.defaultView || node.parentWindow
            : false;
};

// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
const canUseDom = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

// Inspired by https://github.com/react-bootstrap/dom-helpers/blob/master/src/ownerDocument.js
const ownerDocument = (node) => {
    return (node && node.ownerDocument) || document;
};

const ownerDocumentFn = (componentOrElement) => {
    return ownerDocument(ReactDOM.findDOMNode(componentOrElement));
};

const activeElement = (doc = ownerDocument()) => {
    try {
        return doc.activeElement;
    } catch(e) {
        // This is only in IE
    }
};

const fallback = (context, node) => {
    if (node) {
        do {
            if (node === context) {
                return true;
            }
        } while((node = node.parentNode));
    }
    return false;
};

const contains = (() => {
    return canUseDom
        ? (context, node) => {
            if (context.contains) {
                return context.contains(node);
            } else if (context.compareDocumentPositions) {
                return context === node || !!(context.compareDocumentPositions(node) & 16);
            } else {
                return fallback(context, node);
            }
        } : fallback;
})();

const getContainer = (container, defaultContainer) => {
    container = typeof container === 'function' ? container() : container;
    return ReactDOM.findDOMNode(container) || defaultContainer;
};

const scrollbarSize = (recalc) => {
    let size;
    if (!size || recalc) {
        if (canUseDom) {
            const scrollDiv = document.createElement('div');

            scrollDiv.style.position = 'absolute';
            scrollDiv.style.top = '-9999px';
            scrollDiv.style.width = '50px';
            scrollDiv.style.height = '50px';
            scrollDiv.style.overflow = 'scroll';

            document.body.appendChild(scrollDiv);
            size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
        }
    }
    return size;
};

const NOOP = () => {};

export {
    ownerDocument,
    ownerDocumentFn,
    canUseDom,
    contains,
    getContainer,
    activeElement,
    scrollbarSize,
    isWindow,
    NOOP,
};
