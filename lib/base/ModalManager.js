Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _class = require('dom-helpers/class');

var _class2 = _interopRequireDefault(_class);

var _hyphenateStyle = require('dom-helpers/util/hyphenateStyle');

var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

var _removeStyle = require('dom-helpers/style/removeStyle');

var _removeStyle2 = _interopRequireDefault(_removeStyle);

var _isOverflowing = require('./isOverflowing');

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _helpers = require('./helpers');

var _manageHidden = require('./manageHidden');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var findIndexOf = function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
  });
  return idx;
};

var findContainer = function findContainer(data, modal) {
  return findIndexOf(data, function (d) {
    return d.modals.indexOf(modal) !== -1;
  });
};

var setContainerStyle = function setContainerStyle(state, container) {
  var style = {
    overflow: 'hidden'
  };

  // we are only interested in the actual `style` here
  // becasue we will override it
  state.style = {
    overflow: container.style.overflow,
    paddingRight: container.style.paddingRight
  };

  if (state.overflowing) {
    // use computed style, here to get the real padding
    // to add our scrollbar width
    style.paddingRight = parseInt((0, _style2.default)(container, 'paddingRight') || 0, 10) + (0, _helpers.scrollbarSize)() + 'px';
  }

  if (_helpers.canUseDom) {
    var _document$documentEle = document.documentElement.getBoundingClientRect(),
        top = _document$documentEle.top;

    style.position = 'fixed';
    style.top = top + 'px';
    style.width = '100%';
    state.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight,
      position: null,
      top: Math.abs(top) + 'px',
      width: null
    };
  }
  (0, _style2.default)(container, style);
};

var removeContainerStyle = function removeContainerStyle(_ref, container) {
  var style = _ref.style;

  Object.keys(style).forEach(function (key) {
    (0, _removeStyle2.default)(container, (0, _hyphenateStyle2.default)(key));
  });
};

// State management for container and modals in those containers

var ModalManager = function () {
  function ModalManager() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$hideSiblingNode = _ref2.hideSiblingNodes,
        hideSiblingNodes = _ref2$hideSiblingNode === undefined ? true : _ref2$hideSiblingNode,
        _ref2$handleContainer = _ref2.handleContainerOverflow,
        handleContainerOverflow = _ref2$handleContainer === undefined ? true : _ref2$handleContainer;

    _classCallCheck(this, ModalManager);

    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
  }

  _createClass(ModalManager, [{
    key: 'add',
    value: function add(modal, container, className) {
      var modalIdx = this.modals.indexOf(modal);
      var containerIdx = this.containers.indexOf(container);

      if (modalIdx !== -1) {
        return modalIdx;
      }

      modalIdx = this.modals.length;
      this.modals.push(modal);

      if (this.hideSiblingNodes) {
        (0, _manageHidden.hideSiblings)(container, modal.mountNode);
      }

      if (containerIdx !== -1) {
        this.data[containerIdx].modals.push(modal);
        return modalIdx;
      }

      var data = {
        modals: [modal],
        //right now only the first modal of a container will have its classes applied
        classes: className ? className.split(/\s+/) : [],
        overflowing: (0, _isOverflowing2.default)(container)
      };

      if (this.handleContainerOverflow) {
        setContainerStyle(data, container);
      }

      data.classes.forEach(_class2.default.addClass.bind(null, container));

      this.containers.push(container);
      this.data.push(data);

      return modalIdx;
    }
  }, {
    key: 'remove',
    value: function remove(modal) {
      var modalIdx = this.modals.indexOf(modal);

      if (modalIdx === -1) {
        return;
      }

      var containerIdx = findContainer(this.data, modal);
      var data = this.data[containerIdx];
      var container = this.containers[containerIdx];

      data.modals.splice(data.modals.indexOf(modal), 1);

      this.modals.splice(modalIdx, 1);

      // if that was the last modal in a container,
      // clean up the container
      if (data.modals.length === 0) {
        data.classes.forEach(_class2.default.removeClass.bind(null, container));

        if (this.handleContainerOverflow) {
          var scrollTo = container.style.top;
          removeContainerStyle(data, container);
          if (_helpers.canUseDom) {
            window.scrollTo(0, Math.abs(parseInt(scrollTo)));
          }
        }

        if (this.hideSiblingNodes) {
          (0, _manageHidden.showSiblings)(container, modal.mountNode);
        }

        this.containers.splice(containerIdx, 1);
        this.data.splice(containerIdx, 1);
      } else if (this.hideSiblingNodes) {
        (0, _manageHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
      }
    }
  }, {
    key: 'isTopModal',
    value: function isTopModal(modal) {
      return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();

exports.default = ModalManager;