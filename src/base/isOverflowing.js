import { isWindow, ownerDocument } from './helpers';

const isBody = (node) => {
    return node && node.tagName.toLowerCase() === 'body';
};

const bodyIsOverflowing = (node) => {
    const doc = ownerDocument(node);
    const win = isWindow(doc);
    const fullWidth = win.innerWidth;

    return doc.body.clientWidth < fullWidth;
};

const isOverflowing = (container) => {
    const win = isWindow(container);

    return win || isBody(container)
        ? bodyIsOverflowing(container)
        : container.scrollHeight > container.clientHeight;
};

export { isOverflowing as default };
