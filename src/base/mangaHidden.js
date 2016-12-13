const BLACKLIST = ['template', 'script', 'style'];

const isHidable = ({ nodeType, tagName }) => {
    return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === 1;
};

let siblings = (container, mount, cb) => {
    mount = [].concat(mount);

    [].forEach.call(container.children, node => {
        if (mount.indexOf(node) === -1 && isHidable(node)) {
            cb(node);
        }
    });
};

const ariaHidden = (show, node) => {
    if (!node) {
        return;
    }

    if (show) {
        node.setAttribute('aria-hidden', 'true');
    } else {
        node.removeAttribute('aria-hidden');
    }
};

const hideSiblings = (container, mountNode) => {
    siblings(container, mountNode, node => ariaHidden(true, node));
};

const showSiblings = (container, mountNode) => {
    siblings(container, mountNode, node => ariaHidden(false, node));
};

export { ariaHidden, hideSiblings, showSiblings };
