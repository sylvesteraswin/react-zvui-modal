import isWindow from 'dom-helpers/query/isWindow';
import ownerDocument from 'dom-helpers/ownerDocument';

const isBody = (node) => {
    return node && node.tagName.toLowerCase() === 'body';
};

const bodyIsOverflowing = () => {
    let doc = ownerDocument(node);
    let win = isWindow(doc);
    let fullWidth = win.innerWidth;

    return doc.body.clientWidth < fullWidth;
};

const isOverflowing = (container) => {
    let win = isWindow(container);

    return win || isBody(container)
        ? bodyIsOverflowing(container)
        : container.scrollHeight > container.clientHeight;
};

export { isOverflowing as default };
