(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ZvuiModal"] = factory(require("react"), require("react-dom"));
	else
		root["ZvuiModal"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(36)();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOOP = exports.isWindow = exports.scrollbarSize = exports.activeElement = exports.getContainer = exports.contains = exports.canUseDom = exports.ownerDocumentFn = exports.ownerDocument = undefined;

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
  //eslint-disable-next-line react/no-find-dom-node
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
  //eslint-disable-next-line react/no-find-dom-node
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

var NOOP = function NOOP() {};

exports.ownerDocument = ownerDocument;
exports.ownerDocumentFn = ownerDocumentFn;
exports.canUseDom = canUseDom;
exports.contains = contains;
exports.getContainer = getContainer;
exports.activeElement = activeElement;
exports.scrollbarSize = scrollbarSize;
exports.isWindow = isWindow;
exports.NOOP = NOOP;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _helpers = __webpack_require__(3);

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = style;

var _camelizeStyle = __webpack_require__(10);

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

var _hyphenateStyle = __webpack_require__(11);

var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

var _getComputedStyle2 = __webpack_require__(29);

var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

var _removeStyle = __webpack_require__(8);

var _removeStyle2 = _interopRequireDefault(_removeStyle);

var _properties = __webpack_require__(9);

var _isTransform = __webpack_require__(30);

var _isTransform2 = _interopRequireDefault(_isTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];
    if (!value && value !== 0) {
      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
    } else if ((0, _isTransform2.default)(key)) {
      transforms += key + '(' + value + ') ';
    } else {
      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
    }
  });

  if (transforms) {
    css += _properties.transform + ': ' + transforms + ';';
  }

  node.style.cssText += ';' + css;
}
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStyle;
function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(33);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelizeStyleName;

var _camelize = __webpack_require__(31);

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^-ms-/; /**
                          * Copyright 2014-2015, Facebook, Inc.
                          * All rights reserved.
                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
                          */
function camelizeStyleName(string) {
  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
}
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateStyleName;

var _hyphenate = __webpack_require__(32);

var _hyphenate2 = _interopRequireDefault(_hyphenate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^ms-/; /**
                         * Copyright 2013-2014, Facebook, Inc.
                         * All rights reserved.
                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
                         */

function hyphenateStyleName(string) {
  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
}
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["AttachHandler"] = factory(require("react"));
	else
		root["AttachHandler"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsShallowCompare = __webpack_require__(3);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _helpers = __webpack_require__(6);

	var helpers = _interopRequireWildcard(_helpers);

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj.default = obj;return newObj;
	    }
	}

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} //eslint-disable-line no-unused-vars


	var defaultEventOptions = {
	    capture: false,
	    passive: false,
	    debounce: false,
	    throttle: false,
	    debounceDelay: 250,
	    throttleDelay: 250
	};

	var addEventListener = helpers.addEventListener,
	    removeEventListener = helpers.removeEventListener,
	    passiveOptions = helpers.passiveOptions;

	var mergeOptionsWithDefault = function mergeOptionsWithDefault(obj) {
	    return Object.assign({}, defaultEventOptions, obj);
	};

	var getEventsArgs = function getEventsArgs(eventName, cb, opts) {
	    var args = [eventName, cb];
	    args.push(passiveOptions ? opts : opts.capture);
	    return args;
	};

	// Inspired from http://davidwalsh.name/javascript-debounce-function
	var debounceFn = function debounceFn(cb, delay) {
	    var timeout = void 0;

	    return function () {
	        var context = this;
	        var args = arguments;

	        clearTimeout(timeout);
	        timeout = setTimeout(function () {
	            cb.apply(context, args);
	        }, delay);
	    };
	};
	// Inspired from underscore throttle https://github.com/jashkenas/underscore/blob/master/underscore.js
	var throttleFn = function throttleFn(cb, delay) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var context = void 0;
	    var args = void 0;
	    var result = void 0;

	    var timeout = null;
	    var previous = 0;

	    var _options$leading = options.leading,
	        leading = _options$leading === undefined ? true : _options$leading,
	        _options$trailing = options.trailing,
	        trailing = _options$trailing === undefined ? false : _options$trailing;

	    var later = function later() {
	        previous = !leading ? 0 : Date.now();
	        timeout = null;
	        result = cb.apply(context, args);
	        if (!timeout) {
	            context = args = null;
	        }
	    };

	    return function () {
	        context = this;
	        args = arguments;

	        var now = Date.now();
	        if (!previous && !leading) {
	            previous = now;
	        }

	        var remaining = wait - (now - previous);

	        if (remaining <= 0 || remaining > wait) {
	            if (timeout) {
	                clearTimeout(timeout);
	                timeout = null;
	            }

	            previous = now;
	            result = cb.apply(context, args);

	            if (!timeout) {
	                context = args = null;
	            }
	        } else if (!timeout && trailing) {
	            timeout = setTimeout(later, remaining);
	        }
	        return result;
	    };
	};

	var switchOn = function switchOn(target, eventName, cb) {
	    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	    // Only supports modern browsers Sorry IE10- users
	    if (addEventListener) {
	        var _opts$debounce = opts.debounce,
	            debounce = _opts$debounce === undefined ? false : _opts$debounce,
	            _opts$throttle = opts.throttle,
	            throttle = _opts$throttle === undefined ? false : _opts$throttle,
	            debounceDelay = opts.debounceDelay,
	            throttleDelay = opts.throttleDelay;

	        var handler = cb;
	        if (debounce) {
	            handler = debounceFn(cb, debounceDelay);
	        } else if (throttle) {
	            handler = throttleFn(cb, throttleDelay);
	        }

	        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply
	        target.addEventListener.apply(target, getEventsArgs(eventName, handler, opts));
	    }
	};

	var switchOff = function switchOff(target, eventName, cb) {
	    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	    // Only supports modern browsers Sorry IE10- users
	    if (removeEventListener) {
	        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply
	        target.removeEventListener.apply(target, getEventsArgs(eventName, cb, opts));
	    }
	};

	var AttachHandler = function (_Component) {
	    _inherits(AttachHandler, _Component);

	    function AttachHandler() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, AttachHandler);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AttachHandler.__proto__ || Object.getPrototypeOf(AttachHandler)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.componentDidMount = function () {
	            _this.addEventListener();
	        }, _this.shouldComponentUpdate = function (nextProps) {
	            return (0, _reactAddonsShallowCompare2.default)({
	                props: _this.props,
	                state: _this.state
	            }, nextProps, _this.state);
	        }, _this.componentWillUpdate = function () {
	            _this.addEventListener();
	        }, _this.componentDidUpdate = function () {
	            _this.addEventListener();
	        }, _this.componentWillUnmount = function () {
	            _this.removeEventListener();
	        }, _this.addEventListener = function () {
	            _this.setListeners(switchOn);
	        }, _this.removeEventListener = function () {
	            _this.setListeners(switchOff);
	        }, _this.setListeners = function (switchOnOff) {
	            var _this$props = _this.props,
	                target = _this$props.target,
	                events = _this$props.events;

	            if (target) {
	                (function () {
	                    var element = void 0;

	                    if (typeof target === 'string') {
	                        element = window[target];
	                    }

	                    Object.keys(events).forEach(function (event) {
	                        var value = events[event];
	                        var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	                        var isObject = valueType === 'object';
	                        var isFunction = valueType === 'function';

	                        // This check is to make sure we have the right typeof value
	                        if (!isObject && !isFunction) {
	                            return;
	                        }
	                        var eventHandler = void 0,
	                            options = void 0;

	                        if (isObject) {
	                            var _value$handler = value.handler,
	                                handler = _value$handler === undefined ? null : _value$handler,
	                                _value$opts = value.opts,
	                                opts = _value$opts === undefined ? {} : _value$opts;

	                            if (handler) {
	                                eventHandler = handler;
	                            }
	                            if (opts) {
	                                options = mergeOptionsWithDefault(opts);
	                            }
	                        } else {
	                            eventHandler = value;
	                        }

	                        if (eventHandler) {
	                            switchOnOff(element, event, eventHandler, options);
	                        }
	                    });
	                })();
	            }
	        }, _this.render = function () {
	            return _this.props.children || null;
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return AttachHandler;
	}(_react.Component);

	AttachHandler.propTypes = {
	    // The Component will take one child
	    children: _react.PropTypes.element,
	    // DOM target to listen to
	    target: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]).isRequired,
	    events: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]).isRequired
	};
	exports.default = AttachHandler;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var shallowEqual = __webpack_require__(5);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 6 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
	var canUseDom = exports.canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var addEventListener = exports.addEventListener = canUseDom && 'addEventListener' in window;
	var removeEventListener = exports.removeEventListener = canUseDom && 'removeEventListener' in window;

	var defineProperty = function defineProperty(o, p, attr) {
	    return Object.defineProperty(o, p, attr);
	};

	// Passive events
	// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
	var passiveOptions = exports.passiveOptions = function () {
	    var cache = null;
	    return function () {
	        if (cache !== null) {
	            return cache;
	        }
	        var passiveOptionsSupport = false;
	        try {
	            window.addEventListener('test', null, defineProperty({}, 'passive', {
	                get: function get() {
	                    passiveOptionsSupport = true;
	                }
	            }));
	        } catch (e) {} //eslint-disable-line no-empty

	        cache = passiveOptionsSupport;
	        return passiveOptionsSupport;
	    }();
	}();

/***/ }
/******/ ])
});
;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(14);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }

  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(4);

var _componentOrElement = __webpack_require__(13);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAttachHandler = __webpack_require__(12);

var _reactAttachHandler2 = _interopRequireDefault(_reactAttachHandler);

var _Modal = __webpack_require__(17);

var _Modal2 = _interopRequireDefault(_Modal);

var _isOverflowing = __webpack_require__(5);

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _helpers = __webpack_require__(3);

var _ZvuiModalHeader = __webpack_require__(24);

var _ZvuiModalHeader2 = _interopRequireDefault(_ZvuiModalHeader);

var _ZvuiModalTitle = __webpack_require__(25);

var _ZvuiModalTitle2 = _interopRequireDefault(_ZvuiModalTitle);

var _ZvuiModalBody = __webpack_require__(21);

var _ZvuiModalBody2 = _interopRequireDefault(_ZvuiModalBody);

var _ZvuiModalFade = __webpack_require__(23);

var _ZvuiModalFade2 = _interopRequireDefault(_ZvuiModalFade);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} //eslint-disable-line no-unused-vars
//eslint-disable-line no-unused-vars

// eslint-disable-line no-unused-vars
//eslint-disable-line no-unused-vars

//eslint-disable-line no-unused-vars

var baseIndex = {};
var PREFIX = 'zvui-modal';
var TRANSITION_DURATION = 500;
var BACKDROP_TRANSITION_DURATION = 150;

var getZIndex = void 0;

var findTheBlackSheeps = function findTheBlackSheeps(obj, keys) {
  return Object.keys(obj).reduce(function (o, key) {
    if (keys.indexOf(key) === -1) {
      o[key] = obj[key];
    }
    return o;
  }, {});
};

var GET_PREFIX = function GET_PREFIX() {
  return PREFIX;
};

var ZvuiModal = function (_Component) {
  _inherits(ZvuiModal, _Component);

  function ZvuiModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ZvuiModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZvuiModal.__proto__ || Object.getPrototypeOf(ZvuiModal)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ZvuiModal;
}(_react.Component);

ZvuiModal.propTypes = {
  active: _propTypes2.default.bool,
  // sizes
  small: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  lg: _propTypes2.default.bool,
  full: _propTypes2.default.bool,
  backdrop: _propTypes2.default.oneOf(['static', true, false]),
  loader: _propTypes2.default.bool,
  loadComplete: _propTypes2.default.bool,
  keyboard: _propTypes2.default.bool,
  animate: _propTypes2.default.bool,
  transition: _propTypes2.default.any,
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  onShow: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  onEnter: _propTypes2.default.func,
  onEntering: _propTypes2.default.func,
  onEntered: _propTypes2.default.func,
  onExit: _propTypes2.default.func,
  onExiting: _propTypes2.default.func,
  onExited: _propTypes2.default.func,
  modalPrefix: _propTypes2.default.func,
  dialogClassName: _propTypes2.default.string
};
ZvuiModal.defaultProps = {
  active: false,
  full: false,
  backdrop: true,
  loader: false,
  loadComplete: false,
  keyboard: true,
  animate: true,
  transition: true,
  container: _helpers.canUseDom ? document.body : null,
  manager: _Modal.ModalManagerProp
};
ZvuiModal.childContextTypes = {
  onModalHide: _propTypes2.default.func,
  getDefaultPrefix: _propTypes2.default.func
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getDefaultPrefix = GET_PREFIX;

  this.getChildContext = function () {
    return _this2._context || (_this2._context = {
      onModalHide: _this2.props.onHide,
      getDefaultPrefix: _this2.getDefaultPrefix
    });
  };

  this.state = {
    classes: '',
    dialogStyle: {},
    sizeHandler: false
  };

  this.componentDidMount = function () {
    getZIndex = getZIndex || function () {
      var modalPrefix = _this2.props.modalPrefix;

      var prefix = modalPrefix || _this2.getDefaultPrefix();

      var modal = document.createElement('div');
      var backdrop = document.createElement('div');
      var loader = document.createElement('div');

      modal.className = prefix + ' hide';
      backdrop.className = prefix + '-backdrop hide';
      loader.className = prefix + '-loader hide';

      document.body.appendChild(modal);
      document.body.appendChild(backdrop);
      document.body.appendChild(loader);

      baseIndex.modal = +(0, _style2.default)(modal, 'z-index');
      baseIndex.backdrop = +(0, _style2.default)(backdrop, 'z-index');
      baseIndex.loader = +(0, _style2.default)(loader, 'z-index');
      var zIndexFactor = baseIndex.modal - baseIndex.backdrop;

      document.body.removeChild(modal);
      document.body.removeChild(backdrop);
      document.body.removeChild(loader);

      return function (type) {
        return baseIndex[type] + zIndexFactor * (_this2.props.manager.modals.length - 1);
      };
    }();
  };

  this.handleBackdropClick = function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    _this2.props.onHide();
  };

  this.handleEntering = function () {
    _this2._show.apply(_this2, arguments);

    if (_this2.props.onEntering) {
      _this2.props.onEntering();
    }
  };

  this.handleExiting = function () {
    _this2._removeAttentionClasses();

    if (_this2.props.onEntering) {
      _this2.props.onEntering();
    }
  };

  this._show = function () {
    if (_this2.props.active) {
      _this2.setState(_this2._getStyles);
    }
  };

  this._removeAttentionClasses = function () {
    _this2.setState({
      classes: ''
    });
  };

  this._getViewport = function () {
    var viewportWidth = void 0;
    var viewportHeight = void 0;

    if (typeof window.innerWidth !== 'undefined') {
      viewportHeight = window.innerHeight;
      viewportWidth = window.innerWidth;
    } else {
      viewportWidth = document.documentElement.clientWidth;
      viewportHeight = document.documentElement.clientHeight;
    }

    return {
      width: viewportWidth,
      height: viewportHeight
    };
  };

  this._getStyles = function () {
    if (!_helpers.canUseDom) {
      return {};
    }

    var _props = _this2.props,
        container = _props.container,
        full = _props.full;

    var node = (0, _reactDom.findDOMNode)(_this2.dialog);
    if (!node) {
      return {};
    }

    var doc = (0, _helpers.ownerDocument)(node);
    var scrollHt = node.scrollHeight;
    var bodyIsOverflowing = (0, _isOverflowing2.default)(container);
    var modalIsOverflowing = scrollHt > doc.documentElement.clientHeight;

    var nodeInner = (0, _reactDom.findDOMNode)(_this2.dialogInner);

    var _ref2 = nodeInner.getBoundingClientRect() || {},
        innerHeight = _ref2.height,
        innerWidth = _ref2.width;

    var _ref3 = node.getBoundingClientRect() || {},
        height = _ref3.height,
        width = _ref3.width;

    var modalOverflowHeight = height - 10 < innerHeight;
    var modalOverflowWidth = width - 10 < innerWidth;
    var marginStyles = {
      left: 0
    };

    if (!modalOverflowHeight && !full) {
      marginStyles = _extends({}, marginStyles, {
        top: '50%',
        marginTop: 0 - innerHeight / 2
      });
    }

    if (!modalOverflowWidth && !full) {
      marginStyles = _extends({}, marginStyles, {
        left: '50%',
        marginLeft: 0 - innerWidth / 2
      });
    }

    if (modalOverflowWidth || modalOverflowHeight) {
      marginStyles = _extends({}, marginStyles);
    }

    if (full) {
      var _ref4 = _this2._getViewport() || {},
          viewportWidth = _ref4.width,
          viewportHeight = _ref4.height;

      marginStyles = _extends({}, marginStyles, {
        minWidth: viewportWidth,
        minHeight: viewportHeight
      });
    }

    return {
      dialog: {
        zIndex: getZIndex('modal'),
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? (0, _helpers.scrollbarSize)() : 0,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? (0, _helpers.scrollbarSize)() : 0
      },
      backdrop: {
        zIndex: getZIndex('backdrop')
      },
      dialogStyle: _extends({}, marginStyles)
    };
  };

  this.render = function () {
    var _cn;

    var _props2 = _this2.props,
        className = _props2.className,
        children = _props2.children,
        keyboard = _props2.keyboard,
        modalPrefix = _props2.modalPrefix,
        dialogClassName = _props2.dialogClassName,
        container = _props2.container,
        onEnter = _props2.onEnter,
        onEntered = _props2.onEntered,
        onExit = _props2.onExit,
        onExited = _props2.onExited,
        props = _objectWithoutProperties(_props2, ['className', 'children', 'keyboard', 'modalPrefix', 'dialogClassName', 'container', 'onEnter', 'onEntered', 'onExit', 'onExited']);

    var _state = _this2.state,
        dialog = _state.dialog,
        classes = _state.classes,
        backdrop = _state.backdrop,
        dialogStyle = _state.dialogStyle;

    delete props.manager;
    var elementProps = findTheBlackSheeps(props, Object.keys(ZvuiModal.propTypes));

    var prefix = modalPrefix || _this2.getDefaultPrefix();
    var transition = void 0;

    if (props.transition === true) {
      transition = _ZvuiModalFade2.default;
    }

    var modal = _react2.default.createElement('div', _extends({}, elementProps, {
      ref: function ref(r) {
        return _this2.dialog = r;
      },
      style: dialog,
      className: (0, _classnames2.default)(className, prefix, {
        in: props.active && !transition
      }),
      onClick: _this2.props.backdrop ? function (e) {
        return _this2.handleBackdropClick(e);
      } : null
    }), _react2.default.createElement('div', {
      key: '' + prefix,
      ref: function ref(r) {
        return _this2.dialogInner = r;
      },
      style: dialogStyle,
      className: (0, _classnames2.default)(prefix + '-dialog', dialogClassName, classes, (_cn = {}, _defineProperty(_cn, prefix + '-sm', props.small), _defineProperty(_cn, prefix + '-md', props.medium), _defineProperty(_cn, prefix + '-lg', props.large), _cn))
    }, _react2.default.createElement('div', {
      style: props.full ? {
        minHeight: dialogStyle.minHeight
      } : {},
      className: prefix + '-content'
    }, children)));

    return _react2.default.createElement(_Modal2.default, {
      keyboard: keyboard,
      ref: function ref(_ref5) {
        _this2.modal = _ref5 && _ref5.modal;
        _this2.backdrop = _ref5 && _ref5.backdrop;
      },
      container: container,
      backdrop: props.backdrop,
      loader: props.loader,
      loadComplete: props.loadComplete,
      active: props.active,
      onHide: props.onHide,
      onShow: props.onShow,
      onEnter: onEnter,
      onEntering: _this2.handleEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: _this2.handleExiting,
      onExited: onExited,
      backdropStyle: backdrop,
      transition: transition,
      onResize: _this2._show,
      backdropClassName: PREFIX + '-backdrop',
      loaderClassName: PREFIX + '-loader',
      loaderIconClassName: PREFIX + '-loader-icon',
      containerClassName: PREFIX + '-open',
      dialogTransitionTimeout: TRANSITION_DURATION,
      backdropTransitionTimeout: BACKDROP_TRANSITION_DURATION
    }, modal);
  };
};

ZvuiModal.Header = _ZvuiModalHeader2.default;
ZvuiModal.Title = _ZvuiModalTitle2.default;
ZvuiModal.Body = _ZvuiModalBody2.default;

exports.default = ZvuiModal;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15).default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalManagerProp = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(13);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _elementType = __webpack_require__(38);

var _elementType2 = _interopRequireDefault(_elementType);

var _warning = __webpack_require__(42);

var _warning2 = _interopRequireDefault(_warning);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTeleportMe = __webpack_require__(39);

var _reactTeleportMe2 = _interopRequireDefault(_reactTeleportMe);

var _Teleport = __webpack_require__(41);

var _reactAttachHandler = __webpack_require__(12);

var _reactAttachHandler2 = _interopRequireDefault(_reactAttachHandler);

var _ModalManager = __webpack_require__(18);

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _helpers = __webpack_require__(3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} //eslint-disable-line no-unused-vars


var modalManager = new _ModalManager2.default();

/**
 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Modal;
}(_react.Component);

Modal.propTypes = _extends({}, _reactTeleportMe2.default.propTypes, {
  /**
       * A Node, Component instance, or function that returns either. The `container` will have the Portal children
       * appended to it.
       */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  // Set the visibility of the Modal
  active: _propTypes2.default.bool,
  // A callback fired when the Modal is opening
  onShow: _propTypes2.default.func,
  // A callback fired when either the backdrop is clicked or the escape key is pressed
  // But setting the prop `active` to false can be used to close the Modal
  onHide: _propTypes2.default.func,
  // A callback fired when the window is resized
  onResize: _propTypes2.default.func,
  // Include a backdrop component
  backdrop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),
  // Include a loader component
  loader: _propTypes2.default.bool,
  // Flag to disable loading and active dialog
  loadComplete: _propTypes2.default.bool,
  // Function that returns a backdrop component
  renderBackdrop: _propTypes2.default.func,
  // Function that returns a loader component
  renderLoader: _propTypes2.default.func,
  // A callback fired when Esc key is pressed
  onEscapeKeyUp: _propTypes2.default.func,
  // A callback fired when backdrop, is exists, is clicked
  onBackdropClick: _propTypes2.default.func,
  // A style object for the backdrop component
  backdropStyle: _propTypes2.default.object,
  // A css class or classes for the backdrop component
  backdropClassName: _propTypes2.default.string,
  // A style object for the loader component
  loaderStyle: _propTypes2.default.object,
  // A css class or classes for the loader component
  loaderClassName: _propTypes2.default.string,
  // A css class or classes for the loader icon component
  loaderIconClassName: _propTypes2.default.string,
  // A css class or set of classes applied to the modal container when the modal is open, and removed when it is closed
  containerClassName: _propTypes2.default.string,
  // Close the modal when escape key is pressed
  keyboard: _propTypes2.default.bool,
  // When `true` the focus is automatically shited to the open modal
  autoFocus: _propTypes2.default.bool,
  // When `true` the Modal will prevent focus from leaving the Modal when open.
  enforceFocus: _propTypes2.default.bool,
  // A callback fired before the Modal transition in
  onEnter: _propTypes2.default.func,
  // A callback fired when begins the transition in
  onEntering: _propTypes2.default.func,
  // A callback fired after the Modal finishes transition in
  onEntered: _propTypes2.default.func,
  // A callback fired right before the Modal transition out
  onExit: _propTypes2.default.func,
  // A callback fired as the Modal beings to transition out
  onExiting: _propTypes2.default.func,
  // A callback fired after the Modal finishes transition out
  onExited: _propTypes2.default.func,
  // A modal manager instance used to track and manage the state of open Modals
  manager: _propTypes2.default.object.isRequired,
  // A <Transition /> component to use for the dialog and backdrop
  transition: _elementType2.default,
  // The `timeout` of the dialog transition if specified.
  dialogTransitionTimeout: _propTypes2.default.number,
  // The `timeout` of the backdrop transition if specified.
  backdropTransitionTimeout: _propTypes2.default.number,
  // The `timeout` of the loader transition if specified.
  loaderTransitionTimeout: _propTypes2.default.number
});
Modal.defaultProps = {
  active: false,
  backdrop: true,
  loader: false,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  onHide: _helpers.NOOP,
  manager: modalManager,
  renderBackdrop: function renderBackdrop(props) {
    return _react2.default.createElement('div', props);
  },
  renderLoader: function renderLoader(props) {
    return _react2.default.createElement('div', props, _react2.default.createElement('div', { className: props.loaderIconClassName }));
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    exited: !this.props.active,
    loaded: !this.props.loader
  };

  this.componentWillReceiveProps = function (nextProps) {
    if (nextProps.active) {
      _this2.setState({
        exited: false
      }, function () {
        if (nextProps.loadComplete && _this2.props.loader) {
          _this2.setState({
            loaded: true
          });
        }
      });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      _this2.setState({
        exited: true
      });
    }
  };

  this.componentWillUpdate = function (nextProps) {
    if (!_this2.props.active && nextProps.active) {
      _this2.checkForFocus();
    }
  };

  this.componentDidMount = function () {
    if (_this2.props.active) {
      _this2.onShow();
    }
  };

  this.componentDidUpdate = function (prevProps) {
    var transition = _this2.props.transition;

    if (prevProps.active && !_this2.props.active && !transition) {
      // Otherwise handleHidden will call this.
      _this2.onHide();
    } else if (!prevProps.active && _this2.props.active) {
      _this2.onShow();
    }
  };

  this.componentWillUnmount = function () {
    var _props = _this2.props,
        active = _props.active,
        transition = _props.transition;

    if (active || transition && !_this2.state.exited) {
      _this2.onHide();
    }
  };

  this.omitProps = function (props, propTypes) {
    var keys = Object.keys(props);
    var newProps = {};
    keys.map(function (prop) {
      if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
        newProps[prop] = props[prop];
      }
    });
    return newProps;
  };

  this.renderLoader = function () {
    var _props2 = _this2.props,
        loaderStyle = _props2.loaderStyle,
        loaderClassName = _props2.loaderClassName,
        loaderIconClassName = _props2.loaderIconClassName,
        renderLoader = _props2.renderLoader,
        Transition = _props2.transition,
        loaderTransitionTimeout = _props2.loaderTransitionTimeout;

    var loaderRef = function loaderRef(ref) {
      return _this2.loader = ref;
    };

    var loader = _react2.default.createElement('div', {
      ref: loaderRef,
      style: loaderStyle,
      className: (0, _classnames2.default)(loaderClassName, {
        in: _this2.props.active
      })
    }, _react2.default.createElement('div', { className: '' + loaderIconClassName }));

    if (Transition) {
      loader = _react2.default.createElement(Transition, { 'in': _this2.props.active, timeout: loaderTransitionTimeout }, renderLoader({
        ref: loaderRef,
        style: loaderStyle,
        className: (0, _classnames2.default)(loaderClassName, {
          in: _this2.props.active
        }),
        loaderIconClassName: loaderIconClassName
      }));
    }

    return loader;
  };

  this.renderBackdrop = function () {
    var _props3 = _this2.props,
        backdropStyle = _props3.backdropStyle,
        backdropClassName = _props3.backdropClassName,
        renderBackdrop = _props3.renderBackdrop,
        Transition = _props3.transition,
        backdropTransitionTimeout = _props3.backdropTransitionTimeout;

    var backdropRef = function backdropRef(ref) {
      return _this2.backdrop = ref;
    };

    var backdrop = _react2.default.createElement('div', {
      ref: backdropRef,
      style: backdropStyle,
      className: (0, _classnames2.default)(backdropClassName, {
        in: _this2.props.active
      }),
      onClick: _this2.handleBackdropClick
    });

    if (Transition) {
      backdrop = _react2.default.createElement(Transition, { 'in': _this2.props.active, timeout: backdropTransitionTimeout }, renderBackdrop({
        ref: backdropRef,
        style: backdropStyle,
        className: (0, _classnames2.default)(backdropClassName, {
          in: _this2.props.active
        }),
        onClick: _this2.handleBackdropClick
      }));
    }

    return backdrop;
  };

  this.onShow = function () {
    var doc = (0, _helpers.ownerDocumentFn)(_this2);
    var container = (0, _helpers.getContainer)(_this2.props.container, doc.body);

    _this2.props.manager.add(_this2, container, _this2.props.containerClassName);

    // this.focus();

    if (_this2.props.onShow) {
      _this2.props.onShow();
    }
  };

  this.onHide = function () {
    _this2.props.manager.remove(_this2);
    _this2.restoreLastFocus();
  };

  this.setMountNode = function (ref) {
    _this2.mountNode = ref ? ref.getMountNode() : ref;
  };

  this.handleHidden = function () {
    _this2.setState({
      exited: true,
      loaded: !_this2.props.active
    });
    _this2.onHide();

    if (_this2.props.onExited) {
      var _props4;

      (_props4 = _this2.props).onExited.apply(_props4, arguments);
    }
  };

  this.handleBackdropClick = function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (_this2.props.onBackdropClick) {
      _this2.props.onBackdropClick();
    }

    if (_this2.props.backdrop) {
      _this2.props.onHide();
    }
  };

  this.handlesDocumentKeyUp = function (e) {
    if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyUp) {
        _this2.props.onEscapeKeyUp();
      }
      _this2.props.onHide();
    }
  };

  this.handleResize = function () {
    if (_this2.props.onResize) {
      _this2.props.onResize();
    }
  };

  this.checkForFocus = function () {
    if (_helpers.canUseDom) {
      _this2.lastFocus = (0, _helpers.activeElement)();
    }
  };

  this.focus = function () {
    var autoFocus = _this2.props.autoFocus;

    var modalContent = _this2.getDialogElement();
    var current = (0, _helpers.activeElement)((0, _helpers.ownerDocumentFn)(_this2));
    var focusInModal = current && modalContent && (0, _helpers.contains)(modalContent, current);

    if (modalContent && autoFocus && !focusInModal) {
      _this2.lastFocus = current;

      if (typeof modalContent.hasAttribute === 'function' && !modalContent.hasAttribute('tabIndex')) {
        modalContent.setAttribute('tabIndex', -1);
        (0, _warning2.default)(false, 'The modal content node does not accept focus. For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
      }

      // modalContent.focus();
    }
  };

  this.restoreLastFocus = function () {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (_this2.lastFocus && _this2.lastFocus.focus) {
      // this.lastFocus.focus();
      _this2.lastFocus = null;
    }
  };

  this.enforceFocus = function () {
    var enforceFocus = _this2.props.enforceFocus;

    if (!enforceFocus || !_this2.isTopModal()) {
      return;
    }

    var active = (0, _helpers.activeElement)((0, _helpers.ownerDocumentFn)(_this2));
    var modal = _this2.getDialogElement();

    if (modal && modal !== active && !(0, _helpers.contains)(modal, active)) {
      // modal.focus();
    }
  };

  this.getDialogElement = function () {
    var node = _this2.modal;
    return node && node.lastChild;
  };

  this.isTopModal = function () {
    return _this2.props.manager.isTopModal(_this2);
  };

  this.render = function () {
    var _props5 = _this2.props,
        active = _props5.active,
        container = _props5.container,
        children = _props5.children,
        Transition = _props5.transition,
        backdrop = _props5.backdrop,
        loader = _props5.loader,
        dialogTransitionTimeout = _props5.dialogTransitionTimeout,
        className = _props5.className,
        style = _props5.style,
        onExit = _props5.onExit,
        onExiting = _props5.onExiting,
        onEnter = _props5.onEnter,
        onEntering = _props5.onEntering,
        onEntered = _props5.onEntered;
    var loaded = _this2.state.loaded;

    var dialog = _react2.default.Children.only(children);
    var filterProps = _this2.omitProps(_this2.props, Modal.propTypes);

    var mountModal = active || Transition && !_this2.state.exited;
    if (!mountModal) {
      return null;
    }

    var _dialog$props = dialog.props,
        role = _dialog$props.role,
        tabIndex = _dialog$props.tabIndex;

    if (role === undefined || tabIndex === undefined) {
      dialog = (0, _react.cloneElement)(dialog, {
        role: role ? 'document' : role,
        tabIndex: tabIndex ? '-1' : tabIndex
      });
    }

    if (Transition) {
      dialog = _react2.default.createElement(Transition, {
        transitionAppear: true,
        unmountOnExit: true,
        'in': active,
        timeout: dialogTransitionTimeout,
        onExit: onExit,
        onExiting: onExiting,
        onExited: _this2.handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
      }, dialog);
    }

    return _react2.default.createElement(_reactTeleportMe2.default, { ref: _this2.setMountNode, container: container }, _react2.default.createElement('div', _extends({
      ref: function ref(_ref2) {
        return _this2.modal = _ref2;
      },
      role: role || 'dialog'
    }, filterProps, {
      style: style,
      className: className
    }), active && _react2.default.createElement(_reactAttachHandler2.default, {
      target: 'window',
      events: {
        resize: _this2.handleResize,
        keyup: _this2.handlesDocumentKeyUp,
        focus: {
          handler: _this2.enforceFocus,
          opts: {
            capture: true
          }
        }
      }
    }), backdrop && _this2.renderBackdrop(), loader && !loaded && _this2.renderLoader(), loaded && dialog));
  };
};

Modal.Manager = _ModalManager2.default;
exports.default = (0, _Teleport.DelayRenderFactory)({ delay: 100 })(Modal);
exports.ModalManagerProp = modalManager;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

var _class = __webpack_require__(27);

var _class2 = _interopRequireDefault(_class);

var _hyphenateStyle = __webpack_require__(11);

var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

var _removeStyle = __webpack_require__(8);

var _removeStyle2 = _interopRequireDefault(_removeStyle);

var _isOverflowing = __webpack_require__(5);

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _helpers = __webpack_require__(3);

var _manageHidden = __webpack_require__(20);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(4);

var _properties = __webpack_require__(9);

var _properties2 = _interopRequireDefault(_properties);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Fork of https://github.com/react-bootstrap/react-overlays/blob/master/src/Transition.js


var transitionEndEvent = _properties2.default.end;
var UNMOUNTED = exports.UNMOUNTED = 0;
var EXITED = exports.EXITED = 1;
var ENTERING = exports.ENTERING = 2;
var ENTERED = exports.ENTERED = 3;
var EXITING = exports.EXITING = 4;

/**
 * The Transition component lets you define and run css transitions with a simple declarative api.
 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
 * but is specifically optimized for transitioning a single child "in" or "out".
 *
 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
 * The extensive set of lifecyle callbacks means you have control over
 * the transitioning now at each step of the way.
 */

var Transition = function (_Component) {
  _inherits(Transition, _Component);

  function Transition() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Transition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Transition.__proto__ || Object.getPrototypeOf(Transition)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      status: function () {
        var initialStatus = void 0;
        if (_this.props.in) {
          initialStatus = _this.props.transitionAppear ? EXITED : ENTERED;
        } else {
          initialStatus = _this.props.unmountOnExit ? UNMOUNTED : EXITED;
        }

        return initialStatus;
      }()
    }, _this.componentDidMount = function () {
      if (_this.props.transitionAppear && _this.props.in) {
        _this.performEnter(_this.props);
      }
    }, _this.componentWillReceiveProps = function (nextProps) {
      if (nextProps.in && _this.props.unmountOnExit) {
        if (_this.state.status === UNMOUNTED) {
          // Start enter transition in componentDidUpdate.
          _this.setState({ status: EXITED });
        } else {
          _this._needUpdate = true;
        }
      }
    }, _this.componentDidUpdate = function () {
      var status = _this.state.status;

      if (_this.props.in) {
        if (status === EXITING) {
          _this.performEnter(_this.props);
        } else if (status === EXITED) {
          _this.performEnter(_this.props);
        }
      } else {
        // Otherwise we're already entering or entered.
        if (status === ENTERING || status === ENTERED) {
          _this.performExit(_this.props);
        }
        // Otherwise we're already exited or exiting.
      }
    }, _this.componentWillUnmount = function () {
      _this.cancelNextCallback();
    }, _this.performEnter = function (props) {
      _this.cancelNextCallback();
      var node = (0, _reactDom.findDOMNode)(_this);
      var onEnter = props.onEnter;
      var _this$props = _this.props,
          onEntering = _this$props.onEntering,
          onEntered = _this$props.onEntered;

      // Not this.props, because we might be about to receive new props.

      onEnter(node);

      setTimeout(function () {
        _this.setSafeState({
          status: ENTERING
        }, function () {
          onEntering(node);
          _this.onTransitionEnd(node, function () {
            _this.setSafeState({
              status: ENTERED
            }, function () {
              onEntered(node);
            });
          });
        });
      }, 0);
    }, _this.performExit = function (props) {
      _this.cancelNextCallback();
      var node = (0, _reactDom.findDOMNode)(_this);
      var onExit = props.onExit;
      var _this$props2 = _this.props,
          onExiting = _this$props2.onExiting,
          onExited = _this$props2.onExited;

      // Not this.props, because we might be about to receive new props.

      onExit(node);

      _this.setSafeState({
        status: EXITING
      }, function () {
        onExiting(node);
        _this.onTransitionEnd(node, function () {
          _this.setSafeState({
            status: EXITED
          }, function () {
            onExited(node);
          });
        });
      });
    }, _this.cancelNextCallback = function () {
      if (_this.nextCallback) {
        _this.nextCallback.cancel();
        _this.nextCallback = null;
      }
    }, _this.setSafeState = function (nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      _this.setState(nextState, _this.setNextCallback(callback));
    }, _this.setNextCallback = function (callback) {
      var active = true;

      _this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this.nextCallback = null;
          callback(event);
        }
      };

      _this.nextCallback.cancel = function () {
        active = false;
      };
      return _this.nextCallback;
    }, _this.onTransitionEnd = function (node, handler) {
      _this.setNextCallback(handler);

      if (node) {
        node.addEventListener(transitionEndEvent, _this.nextCallback, false);
        setTimeout(_this.nextCallback, _this.props.timeout);
      } else {
        setTimeout(_this.nextCallback, 0);
      }
    }, _this.render = function () {
      var status = _this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props3 = _this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          childProps = _objectWithoutProperties(_this$props3, ['children', 'className']);

      Object.keys(Transition.propTypes).forEach(function (key) {
        return delete childProps[key];
      });

      var transitionClassName = void 0;
      if (status === EXITED) {
        transitionClassName = _this.props.exitedClassName;
      } else if (status === ENTERING) {
        transitionClassName = _this.props.enteringClassName;
      } else if (status === ENTERED) {
        transitionClassName = _this.props.enteredClassName;
      } else if (status === EXITING) {
        transitionClassName = _this.props.exitingClassName;
      }

      var child = _react2.default.Children.only(children);
      return (0, _react.cloneElement)(child, _extends({}, childProps, {
        className: (0, _classnames2.default)(child.props.className, className, transitionClassName)
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Transition;
}(_react.Component);

Transition.propTypes = {
  /**
      * Show the component; triggers the enter or exit animation
      */in: _propTypes2.default.bool,

  /**
      * Unmount the component (remove it from the DOM) when it is not shown
      */
  unmountOnExit: _propTypes2.default.bool,

  /**
      * Run the enter animation when the component mounts, if it is initially
      * shown
      */
  transitionAppear: _propTypes2.default.bool,

  /**
      * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
      * transition indefinately if the browser transitionEnd events are
      * canceled or interrupted.
      *
      * By default this is set to a high number (5 seconds) as a failsafe. You should consider
      * setting this to the duration of your animation (or a bit above it).
      */
  timeout: _propTypes2.default.number,

  /**
      * CSS class or classes applied when the component is exited
      */
  exitedClassName: _propTypes2.default.string,
  /**
      * CSS class or classes applied while the component is exiting
      */
  exitingClassName: _propTypes2.default.string,
  /**
      * CSS class or classes applied when the component is entered
      */
  enteredClassName: _propTypes2.default.string,
  /**
      * CSS class or classes applied while the component is entering
      */
  enteringClassName: _propTypes2.default.string,

  /**
      * Callback fired before the "entering" classes are applied
      */
  onEnter: _propTypes2.default.func,
  /**
      * Callback fired after the "entering" classes are applied
      */
  onEntering: _propTypes2.default.func,
  /**
      * Callback fired after the "enter" classes are applied
      */
  onEntered: _propTypes2.default.func,
  /**
      * Callback fired before the "exiting" classes are applied
      */
  onExit: _propTypes2.default.func,
  /**
      * Callback fired after the "exiting" classes are applied
      */
  onExiting: _propTypes2.default.func,
  /**
      * Callback fired after the "exited" classes are applied
      */
  onExited: _propTypes2.default.func
};
Transition.defaultProps = {
  in: false,
  unmountOnExit: false,
  transitionAppear: false,
  timeout: 5000,
  onEnter: _helpers.NOOP,
  onEntering: _helpers.NOOP,
  onEntered: _helpers.NOOP,
  onExit: _helpers.NOOP,
  onExiting: _helpers.NOOP,
  onExited: _helpers.NOOP
};
exports.default = Transition;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;

  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === 1;
};

var siblings = function siblings(container, mount, cb) {
  mount = [].concat(mount);

  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

var ariaHidden = function ariaHidden(show, node) {
  if (!node) {
    return;
  }

  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
};

var hideSiblings = function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
};

var showSiblings = function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
};

exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // eslint-disable-line no-unused-vars


var ZvuiModalBody = function (_Component) {
  _inherits(ZvuiModalBody, _Component);

  function ZvuiModalBody() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ZvuiModalBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZvuiModalBody.__proto__ || Object.getPrototypeOf(ZvuiModalBody)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          modalPrefix = _this$props.modalPrefix,
          className = _this$props.className,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ['modalPrefix', 'className', 'children']);

      var prefix = modalPrefix || _this.context.getDefaultPrefix();

      return _react2.default.createElement('div', _extends({}, props, { className: (0, _classnames2.default)(className, prefix + '-body') }), children);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ZvuiModalBody;
}(_react.Component);

ZvuiModalBody.propTypes = {
  modalPrefix: _propTypes2.default.string
};
ZvuiModalBody.contextTypes = {
  getDefaultPrefix: _propTypes2.default.func
};

ZvuiModalBody.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.any
};

exports.default = ZvuiModalBody;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // eslint-disable-line no-unused-vars


var chain = function chain(a, b) {
  return function () {
    a && a.apply(undefined, arguments);
    b && b.apply(undefined, arguments);
  };
};

var ZvuiModalDismiss = function (_Component) {
  _inherits(ZvuiModalDismiss, _Component);

  function ZvuiModalDismiss() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ZvuiModalDismiss);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZvuiModalDismiss.__proto__ || Object.getPrototypeOf(ZvuiModalDismiss)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          Tag = _this$props.component,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ['component', 'children']);

      return _react2.default.createElement(Tag, _extends({}, props, { onClick: chain(props.onClick, _this.context.onModalHide) }), children);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ZvuiModalDismiss;
}(_react.Component);

ZvuiModalDismiss.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};
ZvuiModalDismiss.defaultProps = {
  component: 'button'
};
ZvuiModalDismiss.contextTypes = {
  onModalHide: _propTypes2.default.func
};

ZvuiModalDismiss.propTypes = {
  children: _propTypes2.default.any
};

exports.default = ZvuiModalDismiss;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
}; //eslint-disable-line no-unused-vars


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Transition = __webpack_require__(19);

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//eslint-disable-line no-unused-vars

var ZvuiModalFade = function ZvuiModalFade(props) {
  return _react2.default.createElement(_Transition2.default, _extends({}, props, {
    className: 'fade',
    enteredClassName: 'in',
    enteringClassName: 'in'
  }));
};

exports.default = ZvuiModalFade;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _ZvuiModalDismiss = __webpack_require__(22);

var _ZvuiModalDismiss2 = _interopRequireDefault(_ZvuiModalDismiss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // eslint-disable-line no-unused-vars


// eslint-disable-line no-unused-vars

var ZvuiModalHeader = function (_Component) {
  _inherits(ZvuiModalHeader, _Component);

  function ZvuiModalHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ZvuiModalHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZvuiModalHeader.__proto__ || Object.getPrototypeOf(ZvuiModalHeader)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          modalPrefix = _this$props.modalPrefix,
          closeButton = _this$props.closeButton,
          children = _this$props.children,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ['modalPrefix', 'closeButton', 'children', 'className']);

      var outside = _this.context.outside;

      var prefix = modalPrefix || _this.context.getDefaultPrefix();

      return _react2.default.createElement('div', _extends({}, props, { className: (0, _classnames2.default)(className, prefix + '-header') }), closeButton && _react2.default.createElement(_ZvuiModalDismiss2.default, {
        className: (0, _classnames2.default)(prefix + '-close', {
          outside: !children || props.outside && outside
        })
      }, _react2.default.createElement('span', null, '\xD7')), children);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ZvuiModalHeader;
}(_react.Component);

ZvuiModalHeader.propType = {
  closeButton: _propTypes2.default.bool,
  modalPrefix: _propTypes2.default.string
};
ZvuiModalHeader.defaultProps = {
  closeButton: false
};
ZvuiModalHeader.contextTypes = {
  onModalHide: _propTypes2.default.func,
  getDefaultPrefix: _propTypes2.default.func,
  outside: _propTypes2.default.bool
};

ZvuiModalHeader.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.any,
  modalPrefix: _propTypes2.default.string,
  closeButton: _propTypes2.default.bool
};

exports.default = ZvuiModalHeader;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // eslint-disable-line no-unused-vars


var ZvuiModalTitle = function (_Component) {
  _inherits(ZvuiModalTitle, _Component);

  function ZvuiModalTitle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ZvuiModalTitle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZvuiModalTitle.__proto__ || Object.getPrototypeOf(ZvuiModalTitle)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          modalPrefix = _this$props.modalPrefix,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ['modalPrefix', 'className']);

      var prefix = modalPrefix || _this.context.getDefaultPrefix();

      return _react2.default.createElement('h1', _extends({}, props, { className: (0, _classnames2.default)(className, prefix + '-title') }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ZvuiModalTitle;
}(_react.Component);

ZvuiModalTitle.propTypes = {
  modalPrefix: _propTypes2.default.string
};
ZvuiModalTitle.contextTypes = {
  getDefaultPrefix: _propTypes2.default.func
};

ZvuiModalTitle.propTypes = {
  className: _propTypes2.default.string
};

exports.default = ZvuiModalTitle;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(6);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = exports.removeClass = exports.addClass = undefined;

var _addClass = __webpack_require__(26);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(28);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _hasClass = __webpack_require__(6);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.addClass = _addClass2.default;
exports.removeClass = _removeClass2.default;
exports.hasClass = _hasClass2.default;
exports.default = { addClass: _addClass2.default, removeClass: _removeClass2.default, hasClass: _hasClass2.default };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getComputedStyle;

var _camelizeStyle = __webpack_require__(10);

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _camelizeStyle2.default)(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}
module.exports = exports["default"];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
module.exports = exports["default"];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenate;

var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(34);
var invariant = __webpack_require__(35);
var ReactPropTypesSecret = __webpack_require__(37);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(14);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  if (propType !== 'function' && propType !== 'string') {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(4));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Teleport"] = factory(require("react"), require("react-dom"));
	else
		root["Teleport"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DelayRenderFactory = undefined;

	var _class, _temp2; //eslint-disable-line no-unused-vars


	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _DelayRenderFactory2 = __webpack_require__(5);

	var _DelayRenderFactory3 = _interopRequireDefault(_DelayRenderFactory2);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var getContainer = function getContainer(container) {
	    var _container = typeof container === 'function' ? container() : container;
	    return _reactDom2.default.findDOMNode(_container) || document.body;
	};

	var BASE_CLASS = 'zvui';

	var Teleport = (_temp2 = _class = function (_Component) {
	    _inherits(Teleport, _Component);

	    function Teleport() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Teleport);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Teleport.__proto__ || Object.getPrototypeOf(Teleport)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
	            _this._renderOverlay();
	        }, _this.componentWillReceiveProps = function (nextProps) {
	            if (_this._overlayTarget && nextProps.container !== _this.props.container) {
	                _this._teleportContainerNode.removeChild(_this._overlayTarget);
	                _this._teleportContainerNode = getContainer(nextProps.container);
	                _this._teleportContainerNode.appendChild(_this._overlayTarget);
	            }
	        }, _this.componentDidUpdate = function () {
	            _this._renderOverlay();
	        }, _this.componentWillUnmount = function () {
	            _this._unrenderOverlay();
	            _this._unmountOverlayTarget();
	        }, _this._renderOverlay = function () {
	            var overlay = !_this.props.children ? null : _react2.default.Children.only(_this.props.children);

	            if (overlay !== null) {
	                _this._mountOverlayTarget();
	                _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, overlay, _this._overlayTarget);
	            } else {
	                _this._unrenderOverlay();
	                _this._unmountOverlayTarget();
	            }
	        }, _this._mountOverlayTarget = function () {
	            if (!_this._overlayTarget) {
	                _this._overlayTarget = document.createElement('div');
	                _this._overlayTarget.className = (0, _classnames2.default)(BASE_CLASS, _this.props.className);
	                _this._teleportContainerNode = getContainer(_this.props.container);
	                _this._teleportContainerNode.appendChild(_this._overlayTarget);
	            }
	        }, _this._unrenderOverlay = function () {
	            if (_this._overlayTarget) {
	                _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);
	                _this._overlayInstance = null;
	            }
	        }, _this._unmountOverlayTarget = function () {
	            if (_this._overlayTarget) {
	                _this._teleportContainerNode.removeChild(_this._overlayTarget);
	                _this._overlayTarget = null;
	            }
	            _this._teleportContainerNode = null;
	        }, _this.getMountNode = function () {
	            return _this._overlayTarget;
	        }, _this.getOverlayDOMNode = function () {
	            if (!_this.isMounted()) {
	                throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	            }

	            if (_this._overlayInstance) {
	                if (_this._overlayTarget.getWrappedDOMNode) {
	                    return _this._overlayInstance.getWrappedDOMNode();
	                } else {
	                    return _reactDom2.default.findDOMNode(_this._overlayInstance);
	                }
	            }
	            return null;
	        }, _this.render = function () {
	            return null;
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return Teleport;
	}(_react.Component), _class.propTypes = {
	    children: _react.PropTypes.any,
	    container: _react.PropTypes.any,
	    lockBody: _react.PropTypes.bool,
	    className: _react.PropTypes.string
	}, _class.defaultProps = {
	    lockBody: true,
	    className: ''
	}, _temp2);
	exports.default = Teleport;
	exports.DelayRenderFactory = _DelayRenderFactory3.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	// eslint-disable-line no-unused-vars

	var DelayRenderFactory = function DelayRenderFactory() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { delay: 500 };
	    return function (DelayComponent) {
	        var _class, _temp2;

	        // eslint-disable-line no-unused-vars
	        return _temp2 = _class = function (_Component) {
	            _inherits(DelayComponentRenderer, _Component);

	            function DelayComponentRenderer() {
	                var _ref;

	                var _temp, _this, _ret;

	                _classCallCheck(this, DelayComponentRenderer);

	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }

	                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DelayComponentRenderer.__proto__ || Object.getPrototypeOf(DelayComponentRenderer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	                    active: _this.props.active,
	                    rendered: _this.props.active
	                }, _this.componentWillReceiveProps = function (nextProps) {
	                    if (nextProps.active && !_this.props.active) {
	                        _this.renderAndActivate();
	                    }
	                    if (!nextProps.active && _this.props.active) {
	                        _this.deactivateAndUnrender();
	                    }
	                }, _this.renderAndActivate = function () {
	                    if (_this.unrenderTimeout) {
	                        clearTimeout(_this.unrenderTimeout);
	                    }
	                    _this.setState({
	                        rendered: true,
	                        active: false
	                    }, function () {
	                        setTimeout(function () {
	                            return _this.setState({
	                                active: true
	                            });
	                        }, _this.props.delay);
	                    });
	                }, _this.deactivateAndUnrender = function () {
	                    _this.setState({
	                        rendered: true,
	                        active: false
	                    }, function () {
	                        _this.unrenderTimeout = setTimeout(function () {
	                            _this.setState({
	                                rendered: false
	                            });
	                            _this.unrenderTimeout = null;
	                        }, _this.props.delay);
	                    });
	                }, _this.render = function () {
	                    var _this$props = _this.props,
	                        delay = _this$props.delay,
	                        others = _objectWithoutProperties(_this$props, ['delay']);

	                    var _this$state = _this.state,
	                        active = _this$state.active,
	                        rendered = _this$state.rendered;

	                    return rendered ? _react2.default.createElement(DelayComponent, _extends({}, others, { active: active })) : null;
	                }, _temp), _possibleConstructorReturn(_this, _ret);
	            }

	            return DelayComponentRenderer;
	        }(_react.Component), _class.propTypes = {
	            active: _react.PropTypes.bool.isRequired,
	            children: _react.PropTypes.any,
	            delay: _react.PropTypes.number
	        }, _class.defaultProps = {
	            delay: options.delay
	        }, _temp2;
	    };
	};

	exports.default = DelayRenderFactory;

/***/ }
/******/ ])
});
;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-line no-unused-vars

var DelayRenderFactory = function DelayRenderFactory() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { delay: 500 };
    return function (DelayComponent) {
        var _class, _temp2;

        // eslint-disable-line no-unused-vars
        return _temp2 = _class = function (_Component) {
            _inherits(DelayComponentRenderer, _Component);

            function DelayComponentRenderer() {
                var _ref;

                var _temp, _this, _ret;

                _classCallCheck(this, DelayComponentRenderer);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DelayComponentRenderer.__proto__ || Object.getPrototypeOf(DelayComponentRenderer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                    active: _this.props.active,
                    rendered: _this.props.active
                }, _this.componentWillReceiveProps = function (nextProps) {
                    if (nextProps.active && !_this.props.active) {
                        _this.renderAndActivate();
                    }
                    if (!nextProps.active && _this.props.active) {
                        _this.deactivateAndUnrender();
                    }
                }, _this.renderAndActivate = function () {
                    if (_this.unrenderTimeout) {
                        clearTimeout(_this.unrenderTimeout);
                    }
                    _this.setState({
                        rendered: true,
                        active: false
                    }, function () {
                        setTimeout(function () {
                            return _this.setState({
                                active: true
                            });
                        }, _this.props.delay);
                    });
                }, _this.deactivateAndUnrender = function () {
                    _this.setState({
                        rendered: true,
                        active: false
                    }, function () {
                        _this.unrenderTimeout = setTimeout(function () {
                            _this.setState({
                                rendered: false
                            });
                            _this.unrenderTimeout = null;
                        }, _this.props.delay);
                    });
                }, _this.render = function () {
                    var _this$props = _this.props,
                        delay = _this$props.delay,
                        others = _objectWithoutProperties(_this$props, ['delay']);

                    var _this$state = _this.state,
                        active = _this$state.active,
                        rendered = _this$state.rendered;

                    return rendered ? _react2.default.createElement(DelayComponent, _extends({}, others, { active: active })) : null;
                }, _temp), _possibleConstructorReturn(_this, _ret);
            }

            return DelayComponentRenderer;
        }(_react.Component), _class.propTypes = {
            active: _react.PropTypes.bool.isRequired,
            children: _react.PropTypes.any,
            delay: _react.PropTypes.number
        }, _class.defaultProps = {
            delay: options.delay
        }, _temp2;
    };
};

exports.default = DelayRenderFactory;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DelayRenderFactory = undefined;

var _class, _temp2; //eslint-disable-line no-unused-vars


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _DelayRenderFactory2 = __webpack_require__(40);

var _DelayRenderFactory3 = _interopRequireDefault(_DelayRenderFactory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getContainer = function getContainer(container) {
    var _container = typeof container === 'function' ? container() : container;
    return _reactDom2.default.findDOMNode(_container) || document.body;
};

var BASE_CLASS = 'zvui';

var Teleport = (_temp2 = _class = function (_Component) {
    _inherits(Teleport, _Component);

    function Teleport() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Teleport);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Teleport.__proto__ || Object.getPrototypeOf(Teleport)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
            _this._renderOverlay();
        }, _this.componentWillReceiveProps = function (nextProps) {
            if (_this._overlayTarget && nextProps.container !== _this.props.container) {
                _this._teleportContainerNode.removeChild(_this._overlayTarget);
                _this._teleportContainerNode = getContainer(nextProps.container);
                _this._teleportContainerNode.appendChild(_this._overlayTarget);
            }
        }, _this.componentDidUpdate = function () {
            _this._renderOverlay();
        }, _this.componentWillUnmount = function () {
            _this._unrenderOverlay();
            _this._unmountOverlayTarget();
        }, _this._renderOverlay = function () {
            var overlay = !_this.props.children ? null : _react2.default.Children.only(_this.props.children);

            if (overlay !== null) {
                _this._mountOverlayTarget();
                _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, overlay, _this._overlayTarget);
            } else {
                _this._unrenderOverlay();
                _this._unmountOverlayTarget();
            }
        }, _this._mountOverlayTarget = function () {
            if (!_this._overlayTarget) {
                _this._overlayTarget = document.createElement('div');
                _this._overlayTarget.className = (0, _classnames2.default)(BASE_CLASS, _this.props.className);
                _this._teleportContainerNode = getContainer(_this.props.container);
                _this._teleportContainerNode.appendChild(_this._overlayTarget);
            }
        }, _this._unrenderOverlay = function () {
            if (_this._overlayTarget) {
                _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);
                _this._overlayInstance = null;
            }
        }, _this._unmountOverlayTarget = function () {
            if (_this._overlayTarget) {
                _this._teleportContainerNode.removeChild(_this._overlayTarget);
                _this._overlayTarget = null;
            }
            _this._teleportContainerNode = null;
        }, _this.getMountNode = function () {
            return _this._overlayTarget;
        }, _this.getOverlayDOMNode = function () {
            if (!_this.isMounted()) {
                throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
            }

            if (_this._overlayInstance) {
                if (_this._overlayTarget.getWrappedDOMNode) {
                    return _this._overlayInstance.getWrappedDOMNode();
                } else {
                    return _reactDom2.default.findDOMNode(_this._overlayInstance);
                }
            }
            return null;
        }, _this.render = function () {
            return null;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Teleport;
}(_react.Component), _class.propTypes = {
    children: _react.PropTypes.any,
    container: _react.PropTypes.any,
    lockBody: _react.PropTypes.bool,
    className: _react.PropTypes.string
}, _class.defaultProps = {
    lockBody: true,
    className: ''
}, _temp2);
exports.default = Teleport;
exports.DelayRenderFactory = _DelayRenderFactory3.default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ })
/******/ ]);
});