Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isWindow = exports.scrollbarSize = exports.activeElement = exports.getContainer = exports.contains = exports.canUseDom = exports.ownerDocumentFn = exports.ownerDocument = undefined;

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isWindow = function isWindow(node) {
    return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
};

// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Inspired by https://github.com/react-bootstrap/dom-helpers/blob/master/src/ownerDocument.js
var ownerDocument = function ownerDocument(node) {
    return node && node.ownerDocument || document;
};

var ownerDocumentFn = function ownerDocumentFn(componentOrElement) {
    return ownerDocument(_reactDom2.default.findDOMNode(componentOrElement));
};

var activeElement = function activeElement() {
    var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ownerDocument();

    try {
        return doc.activeElement;
    } catch (e) {
        // This is only in IE
    }
};

var fallback = function fallback(context, node) {
    if (node) {
        do {
            if (node === context) {
                return true;
            }
        } while (node = node.parentNode);
    }
    return false;
};

var contains = function () {
    return canUseDom ? function (context, node) {
        if (context.contains) {
            return context.contains(node);
        } else if (context.compareDocumentPositions) {
            return context === node || !!(context.compareDocumentPositions(node) & 16);
        } else {
            return fallback(context, node);
        }
    } : fallback;
}();

var getContainer = function getContainer(container, defaultContainer) {
    container = typeof container === 'function' ? container() : container;
    return _reactDom2.default.findDOMNode(container) || defaultContainer;
};

var scrollbarSize = function scrollbarSize(recalc) {
    var size = void 0;
    if (!size || recalc) {
        if (canUseDom) {
            var scrollDiv = document.createElement('div');

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

exports.ownerDocument = ownerDocument;
exports.ownerDocumentFn = ownerDocumentFn;
exports.canUseDom = canUseDom;
exports.contains = contains;
exports.getContainer = getContainer;
exports.activeElement = activeElement;
exports.scrollbarSize = scrollbarSize;
exports.isWindow = isWindow;