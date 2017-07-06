Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _helpers = require('./helpers');

var isBody = function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
};

var bodyIsOverflowing = function bodyIsOverflowing(node) {
  var doc = (0, _helpers.ownerDocument)(node);
  var win = (0, _helpers.isWindow)(doc);
  var fullWidth = win.innerWidth;

  return doc.body.clientWidth < fullWidth;
};

var isOverflowing = function isOverflowing(container) {
  var win = (0, _helpers.isWindow)(container);

  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
};

exports.default = isOverflowing;