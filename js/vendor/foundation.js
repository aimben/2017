/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(2);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)

var Plugin = function () {
  function Plugin(element, options) {
    _classCallCheck(this, Plugin);

    this._setup(element, options);
    var pluginName = getPluginName(this);
    this.uuid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a" /* GetYoDigits */])(6, pluginName);

    if (!this.$element.attr('data-' + pluginName)) {
      this.$element.attr('data-' + pluginName, this.uuid);
    }
    if (!this.$element.data('zfPlugin')) {
      this.$element.data('zfPlugin', this);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */
    this.$element.trigger('init.zf.' + pluginName);
  }

  _createClass(Plugin, [{
    key: 'destroy',
    value: function destroy() {
      this._destroy();
      var pluginName = getPluginName(this);
      this.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */
      .trigger('destroyed.zf.' + pluginName);
      for (var prop in this) {
        this[prop] = null; //clean up script to prep for garbage collection.
      }
    }
  }]);

  return Plugin;
}();

// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580


function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getPluginName(obj) {
  if (typeof obj.constructor.name !== 'undefined') {
    return hyphenate(obj.constructor.name);
  } else {
    return hyphenate(obj.className);
  }
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetYoDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transitionend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);




// Core Foundation Utilities, utilized in a number of places.

/**
 * Returns a boolean for RTL support
 */
function rtl() {
  return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html').attr('dir') === 'rtl';
}

/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */
function GetYoDigits(length, namespace) {
  length = length || 6;
  return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? '-' + namespace : '');
}

function transitionend($elem) {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  };
  var elem = document.createElement('div'),
      end;

  for (var t in transitions) {
    if (typeof elem.style[t] !== 'undefined') {
      end = transitions[t];
    }
  }
  if (end) {
    return end;
  } else {
    end = setTimeout(function () {
      $elem.triggerHandler('transitionend', [$elem]);
    }, 1);
    return 'transitionend';
  }
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);




// Default set of media queries
var defaultQueries = {
  'default': 'only screen',
  landscape: 'only screen and (orientation: landscape)',
  portrait: 'only screen and (orientation: portrait)',
  retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
};

// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
var matchMedia = window.matchMedia || function () {
  'use strict';

  // For browsers that support matchMedium api such as IE 9 and webkit

  var styleMedia = window.styleMedia || window.media;

  // For those that don't support matchMedium
  if (!styleMedia) {
    var style = document.createElement('style'),
        script = document.getElementsByTagName('script')[0],
        info = null;

    style.type = 'text/css';
    style.id = 'matchmediajs-test';

    script && script.parentNode && script.parentNode.insertBefore(style, script);

    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;

    styleMedia = {
      matchMedium: function (media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }

        // Test if media query is true or false
        return info.width === '1px';
      }
    };
  }

  return function (media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };
}();

var MediaQuery = {
  queries: [],

  current: '',

  /**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
  _init: function () {
    var self = this;
    var $meta = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('meta.foundation-mq');
    if (!$meta.length) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<meta class="foundation-mq">').appendTo(document.head);
    }

    var extractedStyles = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.foundation-mq').css('font-family');
    var namedQueries;

    namedQueries = parseStyleToObject(extractedStyles);

    for (var key in namedQueries) {
      if (namedQueries.hasOwnProperty(key)) {
        self.queries.push({
          name: key,
          value: 'only screen and (min-width: ' + namedQueries[key] + ')'
        });
      }
    }

    this.current = this._getCurrentSize();

    this._watcher();
  },


  /**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
  atLeast: function (size) {
    var query = this.get(size);

    if (query) {
      return matchMedia(query).matches;
    }

    return false;
  },


  /**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
  is: function (size) {
    size = size.trim().split(' ');
    if (size.length > 1 && size[1] === 'only') {
      if (size[0] === this._getCurrentSize()) return true;
    } else {
      return this.atLeast(size[0]);
    }
    return false;
  },


  /**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
  get: function (size) {
    for (var i in this.queries) {
      if (this.queries.hasOwnProperty(i)) {
        var query = this.queries[i];
        if (size === query.name) return query.value;
      }
    }

    return null;
  },


  /**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
  _getCurrentSize: function () {
    var matched;

    for (var i = 0; i < this.queries.length; i++) {
      var query = this.queries[i];

      if (matchMedia(query.value).matches) {
        matched = query;
      }
    }

    if (typeof matched === 'object') {
      return matched.name;
    } else {
      return matched;
    }
  },


  /**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
  _watcher: function () {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {
      var newSize = _this._getCurrentSize(),
          currentSize = _this.current;

      if (newSize !== currentSize) {
        // Change the current media query
        _this.current = newSize;

        // Broadcast the media query change on the window
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
      }
    });
  }
};

// Thank you: https://github.com/sindresorhus/query-string
function parseStyleToObject(str) {
  var styleObject = {};

  if (typeof str !== 'string') {
    return styleObject;
  }

  str = str.trim().slice(1, -1); // browsers re-quote string style values

  if (!str) {
    return styleObject;
  }

  styleObject = str.split('&').reduce(function (ret, param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = parts[0];
    var val = parts[1];
    key = decodeURIComponent(key);

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : decodeURIComponent(val);

    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
    return ret;
  }, {});

  return styleObject;
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Motion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(2);





/**
 * Motion module.
 * @module foundation.motion
 */

var initClasses = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];

var Motion = {
  animateIn: function (element, animation, cb) {
    animate(true, element, animation, cb);
  },

  animateOut: function (element, animation, cb) {
    animate(false, element, animation, cb);
  }
};

function Move(duration, elem, fn) {
  var anim,
      prog,
      start = null;
  // console.log('called');

  if (duration === 0) {
    fn.apply(elem);
    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    return;
  }

  function move(ts) {
    if (!start) start = ts;
    // console.log(start, ts);
    prog = ts - start;
    fn.apply(elem);

    if (prog < duration) {
      anim = window.requestAnimationFrame(move, elem);
    } else {
      window.cancelAnimationFrame(anim);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    }
  }
  anim = window.requestAnimationFrame(move);
}

/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */
function animate(isIn, element, animation, cb) {
  element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).eq(0);

  if (!element.length) return;

  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1];

  // Set up the animation
  reset();

  element.addClass(animation).css('transition', 'none');

  requestAnimationFrame(function () {
    element.addClass(initClass);
    if (isIn) element.show();
  });

  // Start the animation
  requestAnimationFrame(function () {
    element[0].offsetWidth;
    element.css('transition', '').addClass(activeClass);
  });

  // Clean up the animation when it finishes
  element.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["b" /* transitionend */])(element), finish);

  // Hides the element (for out animations), resets the element, and runs a callback
  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  }

  // Resets transitions and removes motion-specific classes
  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
  }
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Triggers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = __webpack_require__(4);





var MutationObserver = function () {
  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + 'MutationObserver' in window) {
      return window[prefixes[i] + 'MutationObserver'];
    }
  }
  return false;
}();

var triggers = function (el, type) {
  el.data(type).split(' ').forEach(function (id) {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + id)[type === 'close' ? 'trigger' : 'triggerHandler'](type + '.zf.trigger', [el]);
  });
};

var Triggers = {
  Listeners: {
    Basic: {},
    Global: {}
  },
  Initializers: {}
};

Triggers.Listeners.Basic = {
  openListener: function () {
    triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'open');
  },
  closeListener: function () {
    var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('close');
    if (id) {
      triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'close');
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('close.zf.trigger');
    }
  },
  toggleListener: function () {
    var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('toggle');
    if (id) {
      triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'toggle');
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('toggle.zf.trigger');
    }
  },
  closeableListener: function (e) {
    e.stopPropagation();
    var animation = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('closable');

    if (animation !== '') {
      __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__["a" /* Motion */].animateOut(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), animation, function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('closed.zf');
      });
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).fadeOut().trigger('closed.zf');
    }
  },
  toggleFocusListener: function () {
    var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('toggle-focus');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + id).triggerHandler('toggle.zf.trigger', [__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)]);
  }
};

// Elements with [data-open] will reveal a plugin that supports it when clicked.
Triggers.Initializers.addOpenListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
};

// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
Triggers.Initializers.addCloseListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
};

// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
Triggers.Initializers.addToggleListener = function ($elem) {
  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
};

// Elements with [data-closable] will respond to close.zf.trigger events.
Triggers.Initializers.addCloseableListener = function ($elem) {
  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
};

// Elements with [data-toggle-focus] will respond to coming in and out of focus
Triggers.Initializers.addToggleFocusListener = function ($elem) {
  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
};

// More Global/complex listeners and triggers
Triggers.Listeners.Global = {
  resizeListener: function ($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).triggerHandler('resizeme.zf.trigger');
      });
    }
    //trigger all listening elements and signal a resize event
    $nodes.attr('data-events', "resize");
  },
  scrollListener: function ($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).triggerHandler('scrollme.zf.trigger');
      });
    }
    //trigger all listening elements and signal a scroll event
    $nodes.attr('data-events', "scroll");
  },
  closeMeListener: function (e, pluginId) {
    var plugin = e.namespace.split('.')[0];
    var plugins = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + plugin + ']').not('[data-yeti-box="' + pluginId + '"]');

    plugins.each(function () {
      var _this = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
      _this.triggerHandler('close.zf.trigger', [_this]);
    });
  }
};

// Global, parses whole document.
Triggers.Initializers.addClosemeListener = function (pluginName) {
  var yetiBoxes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-yeti-box]'),
      plugNames = ['dropdown', 'tooltip', 'reveal'];

  if (pluginName) {
    if (typeof pluginName === 'string') {
      plugNames.push(pluginName);
    } else if (typeof pluginName === 'object' && typeof pluginName[0] === 'string') {
      plugNames.concat(pluginName);
    } else {
      console.error('Plugin names must be strings');
    }
  }
  if (yetiBoxes.length) {
    var listeners = plugNames.map(function (name) {
      return 'closeme.zf.' + name;
    }).join(' ');

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
  }
};

function debounceGlobalListener(debounce, trigger, listener) {
  var timer = void 0,
      args = Array.prototype.slice.call(arguments, 3);
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(trigger).on(trigger, function (e) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      listener.apply(null, args);
    }, debounce || 10); //default time to emit scroll event
  });
}

Triggers.Initializers.addResizeListener = function (debounce) {
  var $nodes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-resize]');
  if ($nodes.length) {
    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
  }
};

Triggers.Initializers.addScrollListener = function (debounce) {
  var $nodes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-scroll]');
  if ($nodes.length) {
    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
  }
};

Triggers.Initializers.addMutationEventsListener = function ($elem) {
  if (!MutationObserver) {
    return false;
  }
  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]');

  //element callback
  var listeningElementsMutation = function (mutationRecordsList) {
    var $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(mutationRecordsList[0].target);

    //trigger the event handler for the element depending on type
    switch (mutationRecordsList[0].type) {
      case "attributes":
        if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
        }
        if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('resizeme.zf.trigger', [$target]);
        }
        if (mutationRecordsList[0].attributeName === "style") {
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        }
        break;

      case "childList":
        $target.closest("[data-mutate]").attr("data-events", "mutate");
        $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
        break;

      default:
        return false;
      //nothing
    }
  };

  if ($nodes.length) {
    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
    for (var i = 0; i <= $nodes.length - 1; i++) {
      var elementObserver = new MutationObserver(listeningElementsMutation);
      elementObserver.observe($nodes[i], { attributes: true, childList: true, characterData: false, subtree: true, attributeFilter: ["data-events", "style"] });
    }
  }
};

Triggers.Initializers.addSimpleListeners = function () {
  var $document = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);

  Triggers.Initializers.addOpenListener($document);
  Triggers.Initializers.addCloseListener($document);
  Triggers.Initializers.addToggleListener($document);
  Triggers.Initializers.addCloseableListener($document);
  Triggers.Initializers.addToggleFocusListener($document);
};

Triggers.Initializers.addGlobalListeners = function () {
  var $document = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);
  Triggers.Initializers.addMutationEventsListener($document);
  Triggers.Initializers.addResizeListener();
  Triggers.Initializers.addScrollListener();
  Triggers.Initializers.addClosemeListener();
};

Triggers.init = function ($, Foundation) {
  if (typeof $.triggersInitialized === 'undefined') {
    var $document = $(document);

    if (document.readyState === "complete") {
      Triggers.Initializers.addSimpleListeners();
      Triggers.Initializers.addGlobalListeners();
    } else {
      $(window).on('load', function () {
        Triggers.Initializers.addSimpleListeners();
        Triggers.Initializers.addGlobalListeners();
      });
    }

    $.triggersInitialized = true;
  }

  if (Foundation) {
    Foundation.Triggers = Triggers;
    // Legacy included to be backwards compatible for now.
    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
  }
};



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(2);
/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/






var keyCodes = {
  9: 'TAB',
  13: 'ENTER',
  27: 'ESCAPE',
  32: 'SPACE',
  35: 'END',
  36: 'HOME',
  37: 'ARROW_LEFT',
  38: 'ARROW_UP',
  39: 'ARROW_RIGHT',
  40: 'ARROW_DOWN'
};

var commands = {};

// Functions pulled out to be referenceable from internals
function findFocusable($element) {
  if (!$element) {
    return false;
  }
  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
    if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is(':visible') || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('tabindex') < 0) {
      return false;
    } //only have visible elements and those that have a tabindex greater or equal 0
    return true;
  });
}

function parseKey(event) {
  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();

  // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
  key = key.replace(/\W+/, '');

  if (event.shiftKey) key = 'SHIFT_' + key;
  if (event.ctrlKey) key = 'CTRL_' + key;
  if (event.altKey) key = 'ALT_' + key;

  // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
  key = key.replace(/_$/, '');

  return key;
}

var Keyboard = {
  keys: getKeyCodes(keyCodes),

  /**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
  parseKey: parseKey,

  /**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
  handleKey: function (event, component, functions) {
    var commandList = commands[component],
        keyCode = this.parseKey(event),
        cmds,
        command,
        fn;

    if (!commandList) return console.warn('Component not defined!');

    if (typeof commandList.ltr === 'undefined') {
      // this component does not differentiate between ltr and rtl
      cmds = commandList; // use plain list
    } else {
      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["c" /* rtl */])()) cmds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, commandList.ltr, commandList.rtl);else cmds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, commandList.rtl, commandList.ltr);
    }
    command = cmds[keyCode];

    fn = functions[command];
    if (fn && typeof fn === 'function') {
      // execute function  if exists
      var returnValue = fn.apply();
      if (functions.handled || typeof functions.handled === 'function') {
        // execute function when event was handled
        functions.handled(returnValue);
      }
    } else {
      if (functions.unhandled || typeof functions.unhandled === 'function') {
        // execute function when event was not handled
        functions.unhandled();
      }
    }
  },


  /**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */

  findFocusable: findFocusable,

  /**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */

  register: function (componentName, cmds) {
    commands[componentName] = cmds;
  },


  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
  //
  /**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
  trapFocus: function ($element) {
    var $focusable = findFocusable($element),
        $firstFocusable = $focusable.eq(0),
        $lastFocusable = $focusable.eq(-1);

    $element.on('keydown.zf.trapfocus', function (event) {
      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
        event.preventDefault();
        $firstFocusable.focus();
      } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
        event.preventDefault();
        $lastFocusable.focus();
      }
    });
  },

  /**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
  releaseFocus: function ($element) {
    $element.off('keydown.zf.trapfocus');
  }
};

/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */
function getKeyCodes(kcs) {
  var k = {};
  for (var kc in kcs) {
    k[kcs[kc]] = kcs[kc];
  }return k;
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onImagesLoaded; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);




/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */
function onImagesLoaded(images, callback) {
  var self = this,
      unloaded = images.length;

  if (unloaded === 0) {
    callback();
  }

  images.each(function () {
    // Check if image is loaded
    if (this.complete && this.naturalWidth !== undefined) {
      singleImageLoaded();
    } else {
      // If the above check failed, simulate loading on detached element.
      var image = new Image();
      // Still count image as loaded if it finalizes with an error.
      var events = "load.zf.images error.zf.images";
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(image).one(events, function me(event) {
        // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).off(events, me);
        singleImageLoaded();
      });
      image.src = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('src');
    }
  });

  function singleImageLoaded() {
    unloaded--;
    if (unloaded === 0) {
      callback();
    }
  }
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Touch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************



var Touch = {};

var startPosX,
    startPosY,
    startTime,
    elapsedTime,
    isMoving = false;

function onTouchEnd() {
  //  alert(this);
  this.removeEventListener('touchmove', onTouchMove);
  this.removeEventListener('touchend', onTouchEnd);
  isMoving = false;
}

function onTouchMove(e) {
  if (__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.preventDefault) {
    e.preventDefault();
  }
  if (isMoving) {
    var x = e.touches[0].pageX;
    var y = e.touches[0].pageY;
    var dx = startPosX - x;
    var dy = startPosY - y;
    var dir;
    elapsedTime = new Date().getTime() - startTime;
    if (Math.abs(dx) >= __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.moveThreshold && elapsedTime <= __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.timeThreshold) {
      dir = dx > 0 ? 'left' : 'right';
    }
    // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
    //   dir = dy > 0 ? 'down' : 'up';
    // }
    if (dir) {
      e.preventDefault();
      onTouchEnd.call(this);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('swipe', dir).trigger('swipe' + dir);
    }
  }
}

function onTouchStart(e) {
  if (e.touches.length == 1) {
    startPosX = e.touches[0].pageX;
    startPosY = e.touches[0].pageY;
    isMoving = true;
    startTime = new Date().getTime();
    this.addEventListener('touchmove', onTouchMove, false);
    this.addEventListener('touchend', onTouchEnd, false);
  }
}

function init() {
  this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
}

function teardown() {
  this.removeEventListener('touchstart', onTouchStart);
}

var SpotSwipe = function () {
  function SpotSwipe($) {
    _classCallCheck(this, SpotSwipe);

    this.version = '1.0.0';
    this.enabled = 'ontouchstart' in document.documentElement;
    this.preventDefault = false;
    this.moveThreshold = 75;
    this.timeThreshold = 200;
    this.$ = $;
    this._init();
  }

  _createClass(SpotSwipe, [{
    key: '_init',
    value: function _init() {
      var $ = this.$;
      $.event.special.swipe = { setup: init };

      $.each(['left', 'up', 'down', 'right'], function () {
        $.event.special['swipe' + this] = { setup: function () {
            $(this).on('swipe', $.noop);
          } };
      });
    }
  }]);

  return SpotSwipe;
}();

/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/

Touch.setupSpotSwipe = function ($) {
  $.spotSwipe = new SpotSwipe($);
};

/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/
Touch.setupTouchHandler = function ($) {
  $.fn.addTouch = function () {
    this.each(function (i, el) {
      $(el).bind('touchstart touchmove touchend touchcancel', function () {
        //we pass the original event object because the jQuery event
        //object is normalized to w3c specs and does not provide the TouchList
        handleTouch(event);
      });
    });

    var handleTouch = function (event) {
      var touches = event.changedTouches,
          first = touches[0],
          eventTypes = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup'
      },
          type = eventTypes[event.type],
          simulatedEvent;

      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
        simulatedEvent = new window.MouseEvent(type, {
          'bubbles': true,
          'cancelable': true,
          'screenX': first.screenX,
          'screenY': first.screenY,
          'clientX': first.clientX,
          'clientY': first.clientY
        });
      } else {
        simulatedEvent = document.createEvent('MouseEvent');
        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0 /*left*/, null);
      }
      first.target.dispatchEvent(simulatedEvent);
    };
  };
};

Touch.init = function ($) {
  if (typeof $.spotSwipe === 'undefined') {
    Touch.setupSpotSwipe($);
    Touch.setupTouchHandler($);
  }
};



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Abide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_plugin__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * Abide module.
 * @module foundation.abide
 */

var Abide = function (_Plugin) {
  _inherits(Abide, _Plugin);

  function Abide() {
    _classCallCheck(this, Abide);

    return _possibleConstructorReturn(this, (Abide.__proto__ || Object.getPrototypeOf(Abide)).apply(this, arguments));
  }

  _createClass(Abide, [{
    key: '_setup',

    /**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.$element = element;
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(true, {}, Abide.defaults, this.$element.data(), options);

      this.className = 'Abide'; // ie9 back compat
      this._init();
    }

    /**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      this.$inputs = this.$element.find('input, textarea, select');

      this._events();
    }

    /**
     * Initializes events for Abide.
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      var _this3 = this;

      this.$element.off('.abide').on('reset.zf.abide', function () {
        _this3.resetForm();
      }).on('submit.zf.abide', function () {
        return _this3.validateForm();
      });

      if (this.options.validateOn === 'fieldChange') {
        this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
          _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target));
        });
      }

      if (this.options.liveValidate) {
        this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
          _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target));
        });
      }

      if (this.options.validateOnBlur) {
        this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
          _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target));
        });
      }
    }

    /**
     * Calls necessary functions to update Abide upon DOM change
     * @private
     */

  }, {
    key: '_reflow',
    value: function _reflow() {
      this._init();
    }

    /**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */

  }, {
    key: 'requiredCheck',
    value: function requiredCheck($el) {
      if (!$el.attr('required')) return true;

      var isGood = true;

      switch ($el[0].type) {
        case 'checkbox':
          isGood = $el[0].checked;
          break;

        case 'select':
        case 'select-one':
        case 'select-multiple':
          var opt = $el.find('option:selected');
          if (!opt.length || !opt.val()) isGood = false;
          break;

        default:
          if (!$el.val() || !$el.val().length) isGood = false;
      }

      return isGood;
    }

    /**
     * Get:
     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
     *   1. The element's direct sibling('s).
     *   2. The element's parent's children.
     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @returns {Object} jQuery object with the selector.
     */

  }, {
    key: 'findFormError',
    value: function findFormError($el) {
      var id = $el[0].id;
      var $error = $el.siblings(this.options.formErrorSelector);

      if (!$error.length) {
        $error = $el.parent().find(this.options.formErrorSelector);
      }

      $error = $error.add(this.$element.find('[data-form-error-for="' + id + '"]'));

      return $error;
    }

    /**
     * Get the first element in this order:
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */

  }, {
    key: 'findLabel',
    value: function findLabel($el) {
      var id = $el[0].id;
      var $label = this.$element.find('label[for="' + id + '"]');

      if (!$label.length) {
        return $el.closest('label');
      }

      return $label;
    }

    /**
     * Get the set of labels associated with a set of radio els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */

  }, {
    key: 'findRadioLabels',
    value: function findRadioLabels($els) {
      var _this4 = this;

      var labels = $els.map(function (i, el) {
        var id = el.id;
        var $label = _this4.$element.find('label[for="' + id + '"]');

        if (!$label.length) {
          $label = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).closest('label');
        }
        return $label[0];
      });

      return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(labels);
    }

    /**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     */

  }, {
    key: 'addErrorClasses',
    value: function addErrorClasses($el) {
      var $label = this.findLabel($el);
      var $formError = this.findFormError($el);

      if ($label.length) {
        $label.addClass(this.options.labelErrorClass);
      }

      if ($formError.length) {
        $formError.addClass(this.options.formErrorClass);
      }

      $el.addClass(this.options.inputErrorClass).attr('data-invalid', '');
    }

    /**
     * Remove CSS error classes etc from an entire radio button group
     * @param {String} groupName - A string that specifies the name of a radio button group
     *
     */

  }, {
    key: 'removeRadioErrorClasses',
    value: function removeRadioErrorClasses(groupName) {
      var $els = this.$element.find(':radio[name="' + groupName + '"]');
      var $labels = this.findRadioLabels($els);
      var $formErrors = this.findFormError($els);

      if ($labels.length) {
        $labels.removeClass(this.options.labelErrorClass);
      }

      if ($formErrors.length) {
        $formErrors.removeClass(this.options.formErrorClass);
      }

      $els.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');
    }

    /**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */

  }, {
    key: 'removeErrorClasses',
    value: function removeErrorClasses($el) {
      // radios need to clear all of the els
      if ($el[0].type == 'radio') {
        return this.removeRadioErrorClasses($el.attr('name'));
      }

      var $label = this.findLabel($el);
      var $formError = this.findFormError($el);

      if ($label.length) {
        $label.removeClass(this.options.labelErrorClass);
      }

      if ($formError.length) {
        $formError.removeClass(this.options.formErrorClass);
      }

      $el.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');
    }

    /**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */

  }, {
    key: 'validateInput',
    value: function validateInput($el) {
      var _this5 = this;

      var clearRequire = this.requiredCheck($el),
          validated = false,
          customValidator = true,
          validator = $el.attr('data-validator'),
          equalTo = true;

      // don't validate ignored inputs or hidden inputs or disabled inputs
      if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
        return true;
      }

      switch ($el[0].type) {
        case 'radio':
          validated = this.validateRadio($el.attr('name'));
          break;

        case 'checkbox':
          validated = clearRequire;
          break;

        case 'select':
        case 'select-one':
        case 'select-multiple':
          validated = clearRequire;
          break;

        default:
          validated = this.validateText($el);
      }

      if (validator) {
        customValidator = this.matchValidation($el, validator, $el.attr('required'));
      }

      if ($el.attr('data-equalto')) {
        equalTo = this.options.validators.equalTo($el);
      }

      var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
      var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

      if (goodToGo) {
        // Re-validate inputs that depend on this one with equalto
        var dependentElements = this.$element.find('[data-equalto="' + $el.attr('id') + '"]');
        if (dependentElements.length) {
          (function () {
            var _this = _this5;
            dependentElements.each(function () {
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val()) {
                _this.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
              }
            });
          })();
        }
      }

      this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);

      /**
       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
       * Trigger includes the DOM element of the input.
       * @event Abide#valid
       * @event Abide#invalid
       */
      $el.trigger(message, [$el]);

      return goodToGo;
    }

    /**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */

  }, {
    key: 'validateForm',
    value: function validateForm() {
      var acc = [];
      var _this = this;

      this.$inputs.each(function () {
        acc.push(_this.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)));
      });

      var noError = acc.indexOf(false) === -1;

      this.$element.find('[data-abide-error]').css('display', noError ? 'none' : 'block');

      /**
       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
       * Trigger includes the element of the form.
       * @event Abide#formvalid
       * @event Abide#forminvalid
       */
      this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);

      return noError;
    }

    /**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */

  }, {
    key: 'validateText',
    value: function validateText($el, pattern) {
      // A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
      pattern = pattern || $el.attr('pattern') || $el.attr('type');
      var inputText = $el.val();
      var valid = false;

      if (inputText.length) {
        // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
        if (this.options.patterns.hasOwnProperty(pattern)) {
          valid = this.options.patterns[pattern].test(inputText);
        }
        // If the pattern name isn't also the type attribute of the field, then test it as a regexp
        else if (pattern !== $el.attr('type')) {
            valid = new RegExp(pattern).test(inputText);
          } else {
            valid = true;
          }
      }
      // An empty field is valid if it's not required
      else if (!$el.prop('required')) {
          valid = true;
        }

      return valid;
    }

    /**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */

  }, {
    key: 'validateRadio',
    value: function validateRadio(groupName) {
      // If at least one radio in the group has the `required` attribute, the group is considered required
      // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
      var $group = this.$element.find(':radio[name="' + groupName + '"]');
      var valid = false,
          required = false;

      // For the group to be required, at least one radio needs to be required
      $group.each(function (i, e) {
        if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e).attr('required')) {
          required = true;
        }
      });
      if (!required) valid = true;

      if (!valid) {
        // For the group to be valid, at least one radio needs to be checked
        $group.each(function (i, e) {
          if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e).prop('checked')) {
            valid = true;
          }
        });
      };

      return valid;
    }

    /**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */

  }, {
    key: 'matchValidation',
    value: function matchValidation($el, validators, required) {
      var _this6 = this;

      required = required ? true : false;

      var clear = validators.split(' ').map(function (v) {
        return _this6.options.validators[v]($el, required, $el.parent());
      });
      return clear.indexOf(false) === -1;
    }

    /**
     * Resets form inputs and styles
     * @fires Abide#formreset
     */

  }, {
    key: 'resetForm',
    value: function resetForm() {
      var $form = this.$element,
          opts = this.options;

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.' + opts.labelErrorClass, $form).not('small').removeClass(opts.labelErrorClass);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.' + opts.inputErrorClass, $form).not('small').removeClass(opts.inputErrorClass);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(opts.formErrorSelector + '.' + opts.formErrorClass).removeClass(opts.formErrorClass);
      $form.find('[data-abide-error]').css('display', 'none');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').removeAttr('data-invalid');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).removeAttr('data-invalid');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).removeAttr('data-invalid');
      /**
       * Fires when the form has been reset.
       * @event Abide#formreset
       */
      $form.trigger('formreset.zf.abide', [$form]);
    }

    /**
     * Destroys an instance of Abide.
     * Removes error styles and classes from elements, without resetting their values.
     */

  }, {
    key: '_destroy',
    value: function _destroy() {
      var _this = this;
      this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');

      this.$inputs.off('.abide').each(function () {
        _this.removeErrorClasses(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
      });
    }
  }]);

  return Abide;
}(__WEBPACK_IMPORTED_MODULE_1__foundation_plugin__["a" /* Plugin */]);

/**
 * Default settings for plugin
 */


Abide.defaults = {
  /**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */
  validateOn: 'fieldChange',

  /**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */
  labelErrorClass: 'is-invalid-label',

  /**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */
  inputErrorClass: 'is-invalid-input',

  /**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */
  formErrorSelector: '.form-error',

  /**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */
  formErrorClass: 'is-visible',

  /**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
  liveValidate: false,

  /**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
  validateOnBlur: false,

  patterns: {
    alpha: /^[a-zA-Z]+$/,
    alpha_numeric: /^[a-zA-Z0-9]+$/,
    integer: /^[-+]?\d+$/,
    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,

    // amex, visa, diners
    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    cvv: /^([0-9]){3,4}$/,

    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,

    url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
    // abc.de
    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,

    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
    // YYYY-MM-DD
    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
    // HH:MM:SS
    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
    // MM/DD/YYYY
    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
    // DD/MM/YYYY
    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,

    // #FFF or #FFFFFF
    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,

    // Domain || URL
    website: {
      test: function (text) {
        return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);
      }
    }
  },

  /**
   * Optional validation functions to be used. `equalTo` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * required : Boolean value of the required attribute be present or not.
   * parent : The direct parent of the input.
   * @option
   */
  validators: {
    equalTo: function (el, required, parent) {
      return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + el.attr('data-equalto')).val() === el.val();
    }
  }
};



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Accordion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */

var Accordion = function (_Plugin) {
  _inherits(Accordion, _Plugin);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
  }

  _createClass(Accordion, [{
    key: '_setup',

    /**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Accordion.defaults, this.$element.data(), options);

      this.className = 'Accordion'; // ie9 back compat
      this._init();

      __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].register('Accordion', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ARROW_DOWN': 'next',
        'ARROW_UP': 'previous'
      });
    }

    /**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      var _this3 = this;

      this.$element.attr('role', 'tablist');
      this.$tabs = this.$element.children('[data-accordion-item]');

      this.$tabs.each(function (idx, el) {
        var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el),
            $content = $el.children('[data-tab-content]'),
            id = $content[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["a" /* GetYoDigits */])(6, 'accordion'),
            linkId = el.id || id + '-label';

        $el.find('a:first').attr({
          'aria-controls': id,
          'role': 'tab',
          'id': linkId,
          'aria-expanded': false,
          'aria-selected': false
        });

        $content.attr({ 'role': 'tabpanel', 'aria-labelledby': linkId, 'aria-hidden': true, 'id': id });
      });
      var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
      this.firstTimeInit = true;
      if ($initActive.length) {
        this.down($initActive, this.firstTimeInit);
        this.firstTimeInit = false;
      }

      this._checkDeepLink = function () {
        var anchor = window.location.hash;
        //need a hash and a relevant anchor in this tabset
        if (anchor.length) {
          var $link = _this3.$element.find('[href$="' + anchor + '"]'),
              $anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor);

          if ($link.length && $anchor) {
            if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
              _this3.down($anchor, _this3.firstTimeInit);
              _this3.firstTimeInit = false;
            };

            //roll up a little to show the titles
            if (_this3.options.deepLinkSmudge) {
              var _this = _this3;
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).load(function () {
                var offset = _this.$element.offset();
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({ scrollTop: offset.top }, _this.options.deepLinkSmudgeDelay);
              });
            }

            /**
              * Fires when the zplugin has deeplinked at pageload
              * @event Accordion#deeplink
              */
            _this3.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
          }
        }
      };

      //use browser to open a tab, if it exists in this tabset
      if (this.options.deepLink) {
        this._checkDeepLink();
      }

      this._events();
    }

    /**
     * Adds event handlers for items within the accordion.
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      var _this = this;

      this.$tabs.each(function () {
        var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
        var $tabContent = $elem.children('[data-tab-content]');
        if ($tabContent.length) {
          $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
            e.preventDefault();
            _this.toggle($tabContent);
          }).on('keydown.zf.accordion', function (e) {
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].handleKey(e, 'Accordion', {
              toggle: function () {
                _this.toggle($tabContent);
              },
              next: function () {
                var $a = $elem.next().find('a').focus();
                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              previous: function () {
                var $a = $elem.prev().find('a').focus();
                if (!_this.options.multiExpand) {
                  $a.trigger('click.zf.accordion');
                }
              },
              handled: function () {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          });
        }
      });
      if (this.options.deepLink) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('popstate', this._checkDeepLink);
      }
    }

    /**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */

  }, {
    key: 'toggle',
    value: function toggle($target) {
      if ($target.closest('[data-accordion]').is('[disabled]')) {
        console.info('Cannot toggle an accordion that is disabled.');
        return;
      }
      if ($target.parent().hasClass('is-active')) {
        this.up($target);
      } else {
        this.down($target);
      }
      //either replace or update browser history
      if (this.options.deepLink) {
        var anchor = $target.prev('a').attr('href');

        if (this.options.updateHistory) {
          history.pushState({}, '', anchor);
        } else {
          history.replaceState({}, '', anchor);
        }
      }
    }

    /**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @param {Boolean} firstTime - flag to determine if reflow should happen.
     * @fires Accordion#down
     * @function
     */

  }, {
    key: 'down',
    value: function down($target, firstTime) {
      var _this4 = this;

      /**
       * checking firstTime allows for initial render of the accordion
       * to render preset is-active panes.
       */
      if ($target.closest('[data-accordion]').is('[disabled]') && !firstTime) {
        console.info('Cannot call down on an accordion that is disabled.');
        return;
      }
      $target.attr('aria-hidden', false).parent('[data-tab-content]').addBack().parent().addClass('is-active');

      if (!this.options.multiExpand && !firstTime) {
        var $currentActive = this.$element.children('.is-active').children('[data-tab-content]');
        if ($currentActive.length) {
          this.up($currentActive.not($target));
        }
      }

      $target.slideDown(this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */
        _this4.$element.trigger('down.zf.accordion', [$target]);
      });

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + $target.attr('aria-labelledby')).attr({
        'aria-expanded': true,
        'aria-selected': true
      });
    }

    /**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */

  }, {
    key: 'up',
    value: function up($target) {
      if ($target.closest('[data-accordion]').is('[disabled]')) {
        console.info('Cannot call up on an accordion that is disabled.');
        return;
      }

      var $aunts = $target.parent().siblings(),
          _this = this;

      if (!this.options.allowAllClosed && !$aunts.hasClass('is-active') || !$target.parent().hasClass('is-active')) {
        return;
      }

      $target.slideUp(_this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
        _this.$element.trigger('up.zf.accordion', [$target]);
      });

      $target.attr('aria-hidden', true).parent().removeClass('is-active');

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + $target.attr('aria-labelledby')).attr({
        'aria-expanded': false,
        'aria-selected': false
      });
    }

    /**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */

  }, {
    key: '_destroy',
    value: function _destroy() {
      this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
      this.$element.find('a').off('.zf.accordion');
      if (this.options.deepLink) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('popstate', this._checkDeepLink);
      }
    }
  }]);

  return Accordion;
}(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a" /* Plugin */]);

Accordion.defaults = {
  /**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,
  /**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
  multiExpand: false,
  /**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
  allowAllClosed: false,
  /**
   * Allows the window to scroll to content of pane specified by hash anchor
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * Adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * Animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * Update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false
};



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Foundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(3);






var FOUNDATION_VERSION = '6.4.2';

// Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify
var Foundation = {
  version: FOUNDATION_VERSION,

  /**
   * Stores initialized plugins.
   */
  _plugins: {},

  /**
   * Stores generated unique ids for plugin instances
   */
  _uuids: [],

  /**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
  plugin: function (plugin, name) {
    // Object key to use when adding to global Foundation object
    // Examples: Foundation.Reveal, Foundation.OffCanvas
    var className = name || functionName(plugin);
    // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
    // Examples: data-reveal, data-off-canvas
    var attrName = hyphenate(className);

    // Add to the Foundation object and the plugins list (for reflowing)
    this._plugins[attrName] = this[className] = plugin;
  },
  /**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
  registerPlugin: function (plugin, name) {
    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
    plugin.uuid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a" /* GetYoDigits */])(6, pluginName);

    if (!plugin.$element.attr('data-' + pluginName)) {
      plugin.$element.attr('data-' + pluginName, plugin.uuid);
    }
    if (!plugin.$element.data('zfPlugin')) {
      plugin.$element.data('zfPlugin', plugin);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */
    plugin.$element.trigger('init.zf.' + pluginName);

    this._uuids.push(plugin.uuid);

    return;
  },
  /**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
  unregisterPlugin: function (plugin) {
    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
    plugin.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
    /**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */
    .trigger('destroyed.zf.' + pluginName);
    for (var prop in plugin) {
      plugin[prop] = null; //clean up script to prep for garbage collection.
    }
    return;
  },

  /**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
  reInit: function (plugins) {
    var isJQ = plugins instanceof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a;
    try {
      if (isJQ) {
        plugins.each(function () {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('zfPlugin')._init();
        });
      } else {
        var type = typeof plugins,
            _this = this,
            fns = {
          'object': function (plgs) {
            plgs.forEach(function (p) {
              p = hyphenate(p);
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + p + ']').foundation('_init');
            });
          },
          'string': function () {
            plugins = hyphenate(plugins);
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + plugins + ']').foundation('_init');
          },
          'undefined': function () {
            this['object'](Object.keys(_this._plugins));
          }
        };
        fns[type](plugins);
      }
    } catch (err) {
      console.error(err);
    } finally {
      return plugins;
    }
  },

  /**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
  reflow: function (elem, plugins) {

    // If plugins is undefined, just grab everything
    if (typeof plugins === 'undefined') {
      plugins = Object.keys(this._plugins);
    }
    // If plugins is a string, convert it to an array with one item
    else if (typeof plugins === 'string') {
        plugins = [plugins];
      }

    var _this = this;

    // Iterate through each plugin
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(plugins, function (i, name) {
      // Get the current plugin
      var plugin = _this._plugins[name];

      // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
      var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');

      // For each plugin found, initialize it
      $elem.each(function () {
        var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            opts = {};
        // Don't double-dip on plugins
        if ($el.data('zfPlugin')) {
          console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
          return;
        }

        if ($el.attr('data-options')) {
          var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
            var opt = e.split(':').map(function (el) {
              return el.trim();
            });
            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
          });
        }
        try {
          $el.data('zfPlugin', new plugin(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), opts));
        } catch (er) {
          console.error(er);
        } finally {
          return;
        }
      });
    });
  },
  getFnName: functionName,

  addToJquery: function ($) {
    // TODO: consider not making this a jQuery function
    // TODO: need way to reflow vs. re-initialize
    /**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
    var foundation = function (method) {
      var type = typeof method,
          $noJS = $('.no-js');

      if ($noJS.length) {
        $noJS.removeClass('no-js');
      }

      if (type === 'undefined') {
        //needs to initialize the Foundation object, or an individual plugin.
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a" /* MediaQuery */]._init();
        Foundation.reflow(this);
      } else if (type === 'string') {
        //an individual method to invoke on a plugin or group of plugins
        var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary
        var plugClass = this.data('zfPlugin'); //determine the class of plugin

        if (plugClass !== undefined && plugClass[method] !== undefined) {
          //make sure both the class and method exist
          if (this.length === 1) {
            //if there's only one, call it directly.
            plugClass[method].apply(plugClass, args);
          } else {
            this.each(function (i, el) {
              //otherwise loop through the jQuery collection and invoke the method on each
              plugClass[method].apply($(el).data('zfPlugin'), args);
            });
          }
        } else {
          //error for no class or no method
          throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
        }
      } else {
        //error for invalid argument type
        throw new TypeError('We\'re sorry, ' + type + ' is not a valid parameter. You must use a string representing the method you wish to invoke.');
      }
      return this;
    };
    $.fn.foundation = foundation;
    return $;
  }
};

Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
  throttle: function (func, delay) {
    var timer = null;

    return function () {
      var context = this,
          args = arguments;

      if (timer === null) {
        timer = setTimeout(function () {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
};

window.Foundation = Foundation;

// Polyfill for requestAnimationFrame
(function () {
  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
    return new Date().getTime();
  };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */
  if (!window.performance || !window.performance.now) {
    window.performance = {
      start: Date.now(),
      now: function () {
        return Date.now() - this.start;
      }
    };
  }
})();
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
// Polyfill to get the name of a function in IE9
function functionName(fn) {
  if (Function.prototype.name === undefined) {
    var funcNameRegex = /function\s([^(]{1,})\(/;
    var results = funcNameRegex.exec(fn.toString());
    return results && results.length > 1 ? results[1].trim() : "";
  } else if (fn.prototype === undefined) {
    return fn.constructor.name;
  } else {
    return fn.prototype.constructor.name;
  }
}
function parseValue(str) {
  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
  return str;
}
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Equalizer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */

var Equalizer = function (_Plugin) {
  _inherits(Equalizer, _Plugin);

  function Equalizer() {
    _classCallCheck(this, Equalizer);

    return _possibleConstructorReturn(this, (Equalizer.__proto__ || Object.getPrototypeOf(Equalizer)).apply(this, arguments));
  }

  _createClass(Equalizer, [{
    key: '_setup',

    /**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Equalizer.defaults, this.$element.data(), options);
      this.className = 'Equalizer'; // ie9 back compat

      this._init();
    }

    /**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      var eqId = this.$element.attr('data-equalizer') || '';
      var $watched = this.$element.find('[data-equalizer-watch="' + eqId + '"]');

      __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a" /* MediaQuery */]._init();

      this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
      this.$element.attr('data-resize', eqId || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a" /* GetYoDigits */])(6, 'eq'));
      this.$element.attr('data-mutate', eqId || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a" /* GetYoDigits */])(6, 'eq'));

      this.hasNested = this.$element.find('[data-equalizer]').length > 0;
      this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
      this.isOn = false;
      this._bindHandler = {
        onResizeMeBound: this._onResizeMe.bind(this),
        onPostEqualizedBound: this._onPostEqualized.bind(this)
      };

      var imgs = this.$element.find('img');
      var tooSmall;
      if (this.options.equalizeOn) {
        tooSmall = this._checkMQ();
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
      } else {
        this._events();
      }
      if (tooSmall !== undefined && tooSmall === false || tooSmall === undefined) {
        if (imgs.length) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__["a" /* onImagesLoaded */])(imgs, this._reflow.bind(this));
        } else {
          this._reflow();
        }
      }
    }

    /**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */

  }, {
    key: '_pauseEvents',
    value: function _pauseEvents() {
      this.isOn = false;
      this.$element.off({
        '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
        'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
        'mutateme.zf.trigger': this._bindHandler.onResizeMeBound
      });
    }

    /**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */

  }, {
    key: '_onResizeMe',
    value: function _onResizeMe(e) {
      this._reflow();
    }

    /**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */

  }, {
    key: '_onPostEqualized',
    value: function _onPostEqualized(e) {
      if (e.target !== this.$element[0]) {
        this._reflow();
      }
    }

    /**
     * Initializes events for Equalizer.
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      var _this = this;
      this._pauseEvents();
      if (this.hasNested) {
        this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
      } else {
        this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
        this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
      }
      this.isOn = true;
    }

    /**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */

  }, {
    key: '_checkMQ',
    value: function _checkMQ() {
      var tooSmall = !__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a" /* MediaQuery */].is(this.options.equalizeOn);
      if (tooSmall) {
        if (this.isOn) {
          this._pauseEvents();
          this.$watched.css('height', 'auto');
        }
      } else {
        if (!this.isOn) {
          this._events();
        }
      }
      return tooSmall;
    }

    /**
     * A noop version for the plugin
     * @private
     */

  }, {
    key: '_killswitch',
    value: function _killswitch() {
      return;
    }

    /**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */

  }, {
    key: '_reflow',
    value: function _reflow() {
      if (!this.options.equalizeOnStack) {
        if (this._isStacked()) {
          this.$watched.css('height', 'auto');
          return false;
        }
      }
      if (this.options.equalizeByRow) {
        this.getHeightsByRow(this.applyHeightByRow.bind(this));
      } else {
        this.getHeights(this.applyHeight.bind(this));
      }
    }

    /**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */

  }, {
    key: '_isStacked',
    value: function _isStacked() {
      if (!this.$watched[0] || !this.$watched[1]) {
        return true;
      }
      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
    }

    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */

  }, {
    key: 'getHeights',
    value: function getHeights(cb) {
      var heights = [];
      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto';
        heights.push(this.$watched[i].offsetHeight);
      }
      cb(heights);
    }

    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */

  }, {
    key: 'getHeightsByRow',
    value: function getHeightsByRow(cb) {
      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,
          groups = [],
          group = 0;
      //group by Row
      groups[group] = [];
      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto';
        //maybe could use this.$watched[i].offsetTop
        var elOffsetTop = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$watched[i]).offset().top;
        if (elOffsetTop != lastElTopOffset) {
          group++;
          groups[group] = [];
          lastElTopOffset = elOffsetTop;
        }
        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
      }

      for (var j = 0, ln = groups.length; j < ln; j++) {
        var heights = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(groups[j]).map(function () {
          return this[1];
        }).get();
        var max = Math.max.apply(null, heights);
        groups[j].push(max);
      }
      cb(groups);
    }

    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */

  }, {
    key: 'applyHeight',
    value: function applyHeight(heights) {
      var max = Math.max.apply(null, heights);
      /**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */
      this.$element.trigger('preequalized.zf.equalizer');

      this.$watched.css('height', max);

      /**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */
      this.$element.trigger('postequalized.zf.equalizer');
    }

    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */

  }, {
    key: 'applyHeightByRow',
    value: function applyHeightByRow(groups) {
      /**
       * Fires before the heights are applied
       */
      this.$element.trigger('preequalized.zf.equalizer');
      for (var i = 0, len = groups.length; i < len; i++) {
        var groupsILength = groups[i].length,
            max = groups[i][groupsILength - 1];
        if (groupsILength <= 2) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(groups[i][0][0]).css({ 'height': 'auto' });
          continue;
        }
        /**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedrow
          */
        this.$element.trigger('preequalizedrow.zf.equalizer');
        for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(groups[i][j][0]).css({ 'height': max });
        }
        /**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedrow
          */
        this.$element.trigger('postequalizedrow.zf.equalizer');
      }
      /**
       * Fires when the heights have been applied
       */
      this.$element.trigger('postequalized.zf.equalizer');
    }

    /**
     * Destroys an instance of Equalizer.
     * @function
     */

  }, {
    key: '_destroy',
    value: function _destroy() {
      this._pauseEvents();
      this.$watched.css('height', 'auto');
    }
  }]);

  return Equalizer;
}(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__["a" /* Plugin */]);

/**
 * Default settings for plugin
 */


Equalizer.defaults = {
  /**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeOnStack: false,
  /**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
  equalizeByRow: false,
  /**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
  equalizeOn: ''
};



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interchange; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(2);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */

var Interchange = function (_Plugin) {
  _inherits(Interchange, _Plugin);

  function Interchange() {
    _classCallCheck(this, Interchange);

    return _possibleConstructorReturn(this, (Interchange.__proto__ || Object.getPrototypeOf(Interchange)).apply(this, arguments));
  }

  _createClass(Interchange, [{
    key: '_setup',

    /**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Interchange.defaults, options);
      this.rules = [];
      this.currentPath = '';
      this.className = 'Interchange'; // ie9 back compat

      this._init();
      this._events();
    }

    /**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a" /* MediaQuery */]._init();

      var id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a" /* GetYoDigits */])(6, 'interchange');
      this.$element.attr({
        'data-resize': id,
        'id': id
      });

      this._addBreakpoints();
      this._generateRules();
      this._reflow();
    }

    /**
     * Initializes events for Interchange.
     * @function
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      var _this3 = this;

      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
        return _this3._reflow();
      });
    }

    /**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */

  }, {
    key: '_reflow',
    value: function _reflow() {
      var match;

      // Iterate through each rule, but only save the last match
      for (var i in this.rules) {
        if (this.rules.hasOwnProperty(i)) {
          var rule = this.rules[i];
          if (window.matchMedia(rule.query).matches) {
            match = rule;
          }
        }
      }

      if (match) {
        this.replace(match.path);
      }
    }

    /**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */

  }, {
    key: '_addBreakpoints',
    value: function _addBreakpoints() {
      for (var i in __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a" /* MediaQuery */].queries) {
        if (__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a" /* MediaQuery */].queries.hasOwnProperty(i)) {
          var query = __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a" /* MediaQuery */].queries[i];
          Interchange.SPECIAL_QUERIES[query.name] = query.value;
        }
      }
    }

    /**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @param {Object} element - jQuery object that is an Interchange instance
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */

  }, {
    key: '_generateRules',
    value: function _generateRules(element) {
      var rulesList = [];
      var rules;

      if (this.options.rules) {
        rules = this.options.rules;
      } else {
        rules = this.$element.data('interchange');
      }

      rules = typeof rules === 'string' ? rules.match(/\[.*?\]/g) : rules;

      for (var i in rules) {
        if (rules.hasOwnProperty(i)) {
          var rule = rules[i].slice(1, -1).split(', ');
          var path = rule.slice(0, -1).join('');
          var query = rule[rule.length - 1];

          if (Interchange.SPECIAL_QUERIES[query]) {
            query = Interchange.SPECIAL_QUERIES[query];
          }

          rulesList.push({
            path: path,
            query: query
          });
        }
      }

      this.rules = rulesList;
    }

    /**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */

  }, {
    key: 'replace',
    value: function replace(path) {
      if (this.currentPath === path) return;

      var _this = this,
          trigger = 'replaced.zf.interchange';

      // Replacing images
      if (this.$element[0].nodeName === 'IMG') {
        this.$element.attr('src', path).on('load', function () {
          _this.currentPath = path;
        }).trigger(trigger);
      }
      // Replacing background images
      else if (path.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)) {
          path = path.replace(/\(/g, '%28').replace(/\)/g, '%29');
          this.$element.css({ 'background-image': 'url(' + path + ')' }).trigger(trigger);
        }
        // Replacing HTML
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.get(path, function (response) {
              _this.$element.html(response).trigger(trigger);
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(response).foundation();
              _this.currentPath = path;
            });
          }

      /**
       * Fires when content in an Interchange element is done being loaded.
       * @event Interchange#replaced
       */
      // this.$element.trigger('replaced.zf.interchange');
    }

    /**
     * Destroys an instance of interchange.
     * @function
     */

  }, {
    key: '_destroy',
    value: function _destroy() {
      this.$element.off('resizeme.zf.trigger');
    }
  }]);

  return Interchange;
}(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__["a" /* Plugin */]);

/**
 * Default settings for plugin
 */


Interchange.defaults = {
  /**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
  rules: null
};

Interchange.SPECIAL_QUERIES = {
  'landscape': 'screen and (orientation: landscape)',
  'portrait': 'screen and (orientation: portrait)',
  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
};



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orbit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_util_timer__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation_util_imageLoader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundation_util_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__foundation_plugin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__foundation_util_touch__ = __webpack_require__(8);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timer
 * @requires foundation.util.imageLoader
 * @requires foundation.util.touch
 */

var Orbit = function (_Plugin) {
  _inherits(Orbit, _Plugin);

  function Orbit() {
    _classCallCheck(this, Orbit);

    return _possibleConstructorReturn(this, (Orbit.__proto__ || Object.getPrototypeOf(Orbit)).apply(this, arguments));
  }

  _createClass(Orbit, [{
    key: '_setup',

    /**
    * Creates a new instance of an orbit carousel.
    * @class
    * @name Orbit
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Orbit.defaults, this.$element.data(), options);
      this.className = 'Orbit'; // ie9 back compat

      __WEBPACK_IMPORTED_MODULE_7__foundation_util_touch__["a" /* Touch */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a); // Touch init is idempotent, we just need to make sure it's initialied.

      this._init();

      __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].register('Orbit', {
        'ltr': {
          'ARROW_RIGHT': 'next',
          'ARROW_LEFT': 'previous'
        },
        'rtl': {
          'ARROW_LEFT': 'next',
          'ARROW_RIGHT': 'previous'
        }
      });
    }

    /**
    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
    * @function
    * @private
    */

  }, {
    key: '_init',
    value: function _init() {
      // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
      this._reset();

      this.$wrapper = this.$element.find('.' + this.options.containerClass);
      this.$slides = this.$element.find('.' + this.options.slideClass);

      var $images = this.$element.find('img'),
          initActive = this.$slides.filter('.is-active'),
          id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__foundation_util_core__["a" /* GetYoDigits */])(6, 'orbit');

      this.$element.attr({
        'data-resize': id,
        'id': id
      });

      if (!initActive.length) {
        this.$slides.eq(0).addClass('is-active');
      }

      if (!this.options.useMUI) {
        this.$slides.addClass('no-motionui');
      }

      if ($images.length) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__foundation_util_imageLoader__["a" /* onImagesLoaded */])($images, this._prepareForOrbit.bind(this));
      } else {
        this._prepareForOrbit(); //hehe
      }

      if (this.options.bullets) {
        this._loadBullets();
      }

      this._events();

      if (this.options.autoPlay && this.$slides.length > 1) {
        this.geoSync();
      }

      if (this.options.accessible) {
        // allow wrapper to be focusable to enable arrow navigation
        this.$wrapper.attr('tabindex', 0);
      }
    }

    /**
    * Creates a jQuery collection of bullets, if they are being used.
    * @function
    * @private
    */

  }, {
    key: '_loadBullets',
    value: function _loadBullets() {
      this.$bullets = this.$element.find('.' + this.options.boxOfBullets).find('button');
    }

    /**
    * Sets a `timer` object on the orbit, and starts the counter for the next slide.
    * @function
    */

  }, {
    key: 'geoSync',
    value: function geoSync() {
      var _this = this;
      this.timer = new __WEBPACK_IMPORTED_MODULE_3__foundation_util_timer__["a" /* Timer */](this.$element, {
        duration: this.options.timerDelay,
        infinite: false
      }, function () {
        _this.changeSlide(true);
      });
      this.timer.start();
    }

    /**
    * Sets wrapper and slide heights for the orbit.
    * @function
    * @private
    */

  }, {
    key: '_prepareForOrbit',
    value: function _prepareForOrbit() {
      var _this = this;
      this._setWrapperHeight();
    }

    /**
    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
    * @function
    * @private
    * @param {Function} cb - a callback function to fire when complete.
    */

  }, {
    key: '_setWrapperHeight',
    value: function _setWrapperHeight(cb) {
      //rewrite this to `for` loop
      var max = 0,
          temp,
          counter = 0,
          _this = this;

      this.$slides.each(function () {
        temp = this.getBoundingClientRect().height;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('data-slide', counter);

        if (!/mui/g.test(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)[0].className) && _this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {
          //if not the active slide, set css position and display property
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css({ 'position': 'relative', 'display': 'none' });
        }
        max = temp > max ? temp : max;
        counter++;
      });

      if (counter === this.$slides.length) {
        this.$wrapper.css({ 'height': max }); //only change the wrapper height property once.
        if (cb) {
          cb(max);
        } //fire callback with max height dimension.
      }
    }

    /**
    * Sets the max-height of each slide.
    * @function
    * @private
    */

  }, {
    key: '_setSlideHeight',
    value: function _setSlideHeight(height) {
      this.$slides.each(function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css('max-height', height);
      });
    }

    /**
    * Adds event listeners to basically everything within the element.
    * @function
    * @private
    */

  }, {
    key: '_events',
    value: function _events() {
      var _this = this;

      //***************************************
      //**Now using custom event - thanks to:**
      //**      Yohai Ararat of Toronto      **
      //***************************************
      //
      this.$element.off('.resizeme.zf.trigger').on({
        'resizeme.zf.trigger': this._prepareForOrbit.bind(this)
      });
      if (this.$slides.length > 1) {

        if (this.options.swipe) {
          this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function (e) {
            e.preventDefault();
            _this.changeSlide(true);
          }).on('swiperight.zf.orbit', function (e) {
            e.preventDefault();
            _this.changeSlide(false);
          });
        }
        //***************************************

        if (this.options.autoPlay) {
          this.$slides.on('click.zf.orbit', function () {
            _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);
            _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
          });

          if (this.options.pauseOnHover) {
            this.$element.on('mouseenter.zf.orbit', function () {
              _this.timer.pause();
            }).on('mouseleave.zf.orbit', function () {
              if (!_this.$element.data('clickedOn')) {
                _this.timer.start();
              }
            });
          }
        }

        if (this.options.navButtons) {
          var $controls = this.$element.find('.' + this.options.nextClass + ', .' + this.options.prevClass);
          $controls.attr('tabindex', 0)
          //also need to handle enter/return and spacebar key presses
          .on('click.zf.orbit touchend.zf.orbit', function (e) {
            e.preventDefault();
            _this.changeSlide(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).hasClass(_this.options.nextClass));
          });
        }

        if (this.options.bullets) {
          this.$bullets.on('click.zf.orbit touchend.zf.orbit', function () {
            if (/is-active/g.test(this.className)) {
              return false;
            } //if this is active, kick out of function.
            var idx = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('slide'),
                ltr = idx > _this.$slides.filter('.is-active').data('slide'),
                $slide = _this.$slides.eq(idx);

            _this.changeSlide(ltr, $slide, idx);
          });
        }

        if (this.options.accessible) {
          this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function (e) {
            // handle keyboard event with keyboard util
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].handleKey(e, 'Orbit', {
              next: function () {
                _this.changeSlide(true);
              },
              previous: function () {
                _this.changeSlide(false);
              },
              handled: function () {
                // if bullet is focused, make sure focus moves
                if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).is(_this.$bullets)) {
                  _this.$bullets.filter('.is-active').focus();
                }
              }
            });
          });
        }
      }
    }

    /**
     * Resets Orbit so it can be reinitialized
     */

  }, {
    key: '_reset',
    value: function _reset() {
      // Don't do anything if there are no slides (first run)
      if (typeof this.$slides == 'undefined') {
        return;
      }

      if (this.$slides.length > 1) {
        // Remove old events
        this.$element.off('.zf.orbit').find('*').off('.zf.orbit');

        // Restart timer if autoPlay is enabled
        if (this.options.autoPlay) {
          this.timer.restart();
        }

        // Reset all sliddes
        this.$slides.each(function (el) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();
        });

        // Show the first slide
        this.$slides.first().addClass('is-active').show();

        // Triggers when the slide has finished animating
        this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]);

        // Select first bullet if bullets are present
        if (this.options.bullets) {
          this._updateBullets(0);
        }
      }
    }

    /**
    * Changes the current slide to a new one.
    * @function
    * @param {Boolean} isLTR - flag if the slide should move left to right.
    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
    * @fires Orbit#slidechange
    */

  }, {
    key: 'changeSlide',
    value: function changeSlide(isLTR, chosenSlide, idx) {
      if (!this.$slides) {
        return;
      } // Don't freak out if we're in the middle of cleanup
      var $curSlide = this.$slides.filter('.is-active').eq(0);

      if (/mui/g.test($curSlide[0].className)) {
        return false;
      } //if the slide is currently animating, kick out of the function

      var $firstSlide = this.$slides.first(),
          $lastSlide = this.$slides.last(),
          dirIn = isLTR ? 'Right' : 'Left',
          dirOut = isLTR ? 'Left' : 'Right',
          _this = this,
          $newSlide;

      if (!chosenSlide) {
        //most of the time, this will be auto played or clicked from the navButtons.
        $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
        this.options.infiniteWrap ? $curSlide.next('.' + this.options.slideClass).length ? $curSlide.next('.' + this.options.slideClass) : $firstSlide : $curSlide.next('.' + this.options.slideClass) : //pick next slide if moving left to right
        this.options.infiniteWrap ? $curSlide.prev('.' + this.options.slideClass).length ? $curSlide.prev('.' + this.options.slideClass) : $lastSlide : $curSlide.prev('.' + this.options.slideClass); //pick prev slide if moving right to left
      } else {
        $newSlide = chosenSlide;
      }

      if ($newSlide.length) {
        /**
        * Triggers before the next slide starts animating in and only if a next slide has been found.
        * @event Orbit#beforeslidechange
        */
        this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);

        if (this.options.bullets) {
          idx = idx || this.$slides.index($newSlide); //grab index to update bullets
          this._updateBullets(idx);
        }

        if (this.options.useMUI && !this.$element.is(':hidden')) {
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["a" /* Motion */].animateIn($newSlide.addClass('is-active').css({ 'position': 'absolute', 'top': 0 }), this.options['animInFrom' + dirIn], function () {
            $newSlide.css({ 'position': 'relative', 'display': 'block' }).attr('aria-live', 'polite');
          });

          __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["a" /* Motion */].animateOut($curSlide.removeClass('is-active'), this.options['animOutTo' + dirOut], function () {
            $curSlide.removeAttr('aria-live');
            if (_this.options.autoPlay && !_this.timer.isPaused) {
              _this.timer.restart();
            }
            //do stuff?
          });
        } else {
          $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
          $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();
          if (this.options.autoPlay && !this.timer.isPaused) {
            this.timer.restart();
          }
        }
        /**
        * Triggers when the slide has finished animating in.
        * @event Orbit#slidechange
        */
        this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
      }
    }

    /**
    * Updates the active state of the bullets, if displayed.
    * @function
    * @private
    * @param {Number} idx - the index of the current slide.
    */

  }, {
    key: '_updateBullets',
    value: function _updateBullets(idx) {
      var $oldBullet = this.$element.find('.' + this.options.boxOfBullets).find('.is-active').removeClass('is-active').blur(),
          span = $oldBullet.find('span:last').detach(),
          $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
    }

    /**
    * Destroys the carousel and hides the element.
    * @function
    */

  }, {
    key: '_destroy',
    value: function _destroy() {
      this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
    }
  }]);

  return Orbit;
}(__WEBPACK_IMPORTED_MODULE_6__foundation_plugin__["a" /* Plugin */]);

Orbit.defaults = {
  /**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */
  bullets: true,
  /**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */
  navButtons: true,
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */
  animInFromRight: 'slide-in-right',
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */
  animOutToRight: 'slide-out-right',
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */
  animInFromLeft: 'slide-in-left',
  /**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */
  animOutToLeft: 'slide-out-left',
  /**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */
  autoPlay: true,
  /**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */
  timerDelay: 5000,
  /**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */
  infiniteWrap: true,
  /**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */
  swipe: true,
  /**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */
  pauseOnHover: true,
  /**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */
  accessible: true,
  /**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */
  containerClass: 'orbit-container',
  /**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */
  slideClass: 'orbit-slide',
  /**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */
  boxOfBullets: 'orbit-bullets',
  /**
  * Class applied to the `next` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */
  nextClass: 'orbit-next',
  /**
  * Class applied to the `previous` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */
  prevClass: 'orbit-previous',
  /**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatability.
  * @option
   * @type {boolean}
  * @default true
  */
  useMUI: true
};



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsiveToggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion
 */

var ResponsiveToggle = function (_Plugin) {
  _inherits(ResponsiveToggle, _Plugin);

  function ResponsiveToggle() {
    _classCallCheck(this, ResponsiveToggle);

    return _possibleConstructorReturn(this, (ResponsiveToggle.__proto__ || Object.getPrototypeOf(ResponsiveToggle)).apply(this, arguments));
  }

  _createClass(ResponsiveToggle, [{
    key: '_setup',

    /**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);
      this.className = 'ResponsiveToggle'; // ie9 back compat

      this._init();
      this._events();
    }

    /**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a" /* MediaQuery */]._init();
      var targetID = this.$element.data('responsive-toggle');
      if (!targetID) {
        console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
      }

      this.$targetMenu = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + targetID);
      this.$toggler = this.$element.find('[data-toggle]').filter(function () {
        var target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('toggle');
        return target === targetID || target === "";
      });
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, this.options, this.$targetMenu.data());

      // If they were set, parse the animation classes
      if (this.options.animate) {
        var input = this.options.animate.split(' ');

        this.animationIn = input[0];
        this.animationOut = input[1] || null;
      }

      this._update();
    }

    /**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      var _this = this;

      this._updateMqHandler = this._update.bind(this);

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('changed.zf.mediaquery', this._updateMqHandler);

      this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
    }

    /**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */

  }, {
    key: '_update',
    value: function _update() {
      // Mobile
      if (!__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a" /* MediaQuery */].atLeast(this.options.hideFor)) {
        this.$element.show();
        this.$targetMenu.hide();
      }

      // Desktop
      else {
          this.$element.hide();
          this.$targetMenu.show();
        }
    }

    /**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */

  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      var _this3 = this;

      if (!__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a" /* MediaQuery */].atLeast(this.options.hideFor)) {
        /**
         * Fires when the element attached to the tab bar toggles.
         * @event ResponsiveToggle#toggled
         */
        if (this.options.animate) {
          if (this.$targetMenu.is(':hidden')) {
            __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["a" /* Motion */].animateIn(this.$targetMenu, this.animationIn, function () {
              _this3.$element.trigger('toggled.zf.responsiveToggle');
              _this3.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');
            });
          } else {
            __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["a" /* Motion */].animateOut(this.$targetMenu, this.animationOut, function () {
              _this3.$element.trigger('toggled.zf.responsiveToggle');
            });
          }
        } else {
          this.$targetMenu.toggle(0);
          this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');
          this.$element.trigger('toggled.zf.responsiveToggle');
        }
      }
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      this.$element.off('.zf.responsiveToggle');
      this.$toggler.off('.zf.responsiveToggle');

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('changed.zf.mediaquery', this._updateMqHandler);
    }
  }]);

  return ResponsiveToggle;
}(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a" /* Plugin */]);

ResponsiveToggle.defaults = {
  /**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
  hideFor: 'medium',

  /**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reveal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundation_util_triggers__ = __webpack_require__(5);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */

var Reveal = function (_Plugin) {
  _inherits(Reveal, _Plugin);

  function Reveal() {
    _classCallCheck(this, Reveal);

    return _possibleConstructorReturn(this, (Reveal.__proto__ || Object.getPrototypeOf(Reveal)).apply(this, arguments));
  }

  _createClass(Reveal, [{
    key: '_setup',

    /**
     * Creates a new instance of Reveal.
     * @class
     * @name Reveal
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Reveal.defaults, this.$element.data(), options);
      this.className = 'Reveal'; // ie9 back compat
      this._init();

      // Triggers init is idempotent, just need to make sure it is initialized
      __WEBPACK_IMPORTED_MODULE_5__foundation_util_triggers__["a" /* Triggers */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

      __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].register('Reveal', {
        'ESCAPE': 'close'
      });
    }

    /**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a" /* MediaQuery */]._init();
      this.id = this.$element.attr('id');
      this.isActive = false;
      this.cached = { mq: __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a" /* MediaQuery */].current };
      this.isMobile = mobileSniff();

      this.$anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + this.id + '"]').length ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + this.id + '"]') : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle="' + this.id + '"]');
      this.$anchor.attr({
        'aria-controls': this.id,
        'aria-haspopup': true,
        'tabindex': 0
      });

      if (this.options.fullScreen || this.$element.hasClass('full')) {
        this.options.fullScreen = true;
        this.options.overlay = false;
      }
      if (this.options.overlay && !this.$overlay) {
        this.$overlay = this._makeOverlay(this.id);
      }

      this.$element.attr({
        'role': 'dialog',
        'aria-hidden': true,
        'data-yeti-box': this.id,
        'data-resize': this.id
      });

      if (this.$overlay) {
        this.$element.detach().appendTo(this.$overlay);
      } else {
        this.$element.detach().appendTo(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.options.appendTo));
        this.$element.addClass('without-overlay');
      }
      this._events();
      if (this.options.deepLink && window.location.hash === '#' + this.id) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).one('load.zf.reveal', this.open.bind(this));
      }
    }

    /**
     * Creates an overlay div to display behind the modal.
     * @private
     */

  }, {
    key: '_makeOverlay',
    value: function _makeOverlay() {
      var additionalOverlayClasses = '';

      if (this.options.additionalOverlayClasses) {
        additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
      }

      return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
    }

    /**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */

  }, {
    key: '_updatePosition',
    value: function _updatePosition() {
      var width = this.$element.outerWidth();
      var outerWidth = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).width();
      var height = this.$element.outerHeight();
      var outerHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).height();
      var left, top;
      if (this.options.hOffset === 'auto') {
        left = parseInt((outerWidth - width) / 2, 10);
      } else {
        left = parseInt(this.options.hOffset, 10);
      }
      if (this.options.vOffset === 'auto') {
        if (height > outerHeight) {
          top = parseInt(Math.min(100, outerHeight / 10), 10);
        } else {
          top = parseInt((outerHeight - height) / 4, 10);
        }
      } else {
        top = parseInt(this.options.vOffset, 10);
      }
      this.$element.css({ top: top + 'px' });
      // only worry about left if we don't have an overlay or we havea  horizontal offset,
      // otherwise we're perfectly in the middle
      if (!this.$overlay || this.options.hOffset !== 'auto') {
        this.$element.css({ left: left + 'px' });
        this.$element.css({ margin: '0px' });
      }
    }

    /**
     * Adds event handlers for the modal.
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      var _this3 = this;

      var _this = this;

      this.$element.on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': function (event, $element) {
          if (event.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).parents('[data-closable]')[0] === $element) {
            // only close reveal when it's explicitly called
            return _this3.close.apply(_this3);
          }
        },
        'toggle.zf.trigger': this.toggle.bind(this),
        'resizeme.zf.trigger': function () {
          _this._updatePosition();
        }
      });

      if (this.options.closeOnClick && this.options.overlay) {
        this.$overlay.off('.zf.reveal').on('click.zf.reveal', function (e) {
          if (e.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(_this.$element[0], e.target) || !__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(document, e.target)) {
            return;
          }
          _this.close();
        });
      }
      if (this.options.deepLink) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('popstate.zf.reveal:' + this.id, this._handleState.bind(this));
      }
    }

    /**
     * Handles modal methods on back/forward button clicks or any other event that triggers popstate.
     * @private
     */

  }, {
    key: '_handleState',
    value: function _handleState(e) {
      if (window.location.hash === '#' + this.id && !this.isActive) {
        this.open();
      } else {
        this.close();
      }
    }

    /**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */

  }, {
    key: 'open',
    value: function open() {
      var _this4 = this;

      // either update or replace browser history
      if (this.options.deepLink) {
        var hash = '#' + this.id;

        if (window.history.pushState) {
          if (this.options.updateHistory) {
            window.history.pushState({}, '', hash);
          } else {
            window.history.replaceState({}, '', hash);
          }
        } else {
          window.location.hash = hash;
        }
      }

      this.isActive = true;

      // Make elements invisible, but remove display: none so we can get size and positioning
      this.$element.css({ 'visibility': 'hidden' }).show().scrollTop(0);
      if (this.options.overlay) {
        this.$overlay.css({ 'visibility': 'hidden' }).show();
      }

      this._updatePosition();

      this.$element.hide().css({ 'visibility': '' });

      if (this.$overlay) {
        this.$overlay.css({ 'visibility': '' }).hide();
        if (this.$element.hasClass('fast')) {
          this.$overlay.addClass('fast');
        } else if (this.$element.hasClass('slow')) {
          this.$overlay.addClass('slow');
        }
      }

      if (!this.options.multipleOpened) {
        /**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeme
         */
        this.$element.trigger('closeme.zf.reveal', this.id);
      }

      var _this = this;

      function addRevealOpenClasses() {
        if (_this.isMobile) {
          if (!_this.originalScrollPos) {
            _this.originalScrollPos = window.pageYOffset;
          }
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').addClass('is-reveal-open');
        } else {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').addClass('is-reveal-open');
        }
      }
      // Motion UI method of reveal
      if (this.options.animationIn) {
        (function () {
          var afterAnimation = function () {
            _this.$element.attr({
              'aria-hidden': false,
              'tabindex': -1
            }).focus();
            addRevealOpenClasses();
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].trapFocus(_this.$element);
          };

          if (_this4.options.overlay) {
            __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__["a" /* Motion */].animateIn(_this4.$overlay, 'fade-in');
          }
          __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__["a" /* Motion */].animateIn(_this4.$element, _this4.options.animationIn, function () {
            if (_this4.$element) {
              // protect against object having been removed
              _this4.focusableElements = __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].findFocusable(_this4.$element);
              afterAnimation();
            }
          });
        })();
      }
      // jQuery method of reveal
      else {
          if (this.options.overlay) {
            this.$overlay.show(0);
          }
          this.$element.show(this.options.showDelay);
        }

      // handle accessibility
      this.$element.attr({
        'aria-hidden': false,
        'tabindex': -1
      }).focus();
      __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].trapFocus(this.$element);

      addRevealOpenClasses();

      this._extraHandlers();

      /**
       * Fires when the modal has successfully opened.
       * @event Reveal#open
       */
      this.$element.trigger('open.zf.reveal');
    }

    /**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */

  }, {
    key: '_extraHandlers',
    value: function _extraHandlers() {
      var _this = this;
      if (!this.$element) {
        return;
      } // If we're in the middle of cleanup, don't freak out
      this.focusableElements = __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].findFocusable(this.$element);

      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click.zf.reveal', function (e) {
          if (e.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(_this.$element[0], e.target) || !__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(document, e.target)) {
            return;
          }
          _this.close();
        });
      }

      if (this.options.closeOnEsc) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('keydown.zf.reveal', function (e) {
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].handleKey(e, 'Reveal', {
            close: function () {
              if (_this.options.closeOnEsc) {
                _this.close();
              }
            }
          });
        });
      }
    }

    /**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */

  }, {
    key: 'close',
    value: function close() {
      if (!this.isActive || !this.$element.is(':visible')) {
        return false;
      }
      var _this = this;

      // Motion UI method of hiding
      if (this.options.animationOut) {
        if (this.options.overlay) {
          __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__["a" /* Motion */].animateOut(this.$overlay, 'fade-out');
        }

        __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__["a" /* Motion */].animateOut(this.$element, this.options.animationOut, finishUp);
      }
      // jQuery method of hiding
      else {
          this.$element.hide(this.options.hideDelay);

          if (this.options.overlay) {
            this.$overlay.hide(0, finishUp);
          } else {
            finishUp();
          }
        }

      // Conditionals to remove extra event listeners added on open
      if (this.options.closeOnEsc) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('keydown.zf.reveal');
      }

      if (!this.options.overlay && this.options.closeOnClick) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').off('click.zf.reveal');
      }

      this.$element.off('keydown.zf.reveal');

      function finishUp() {
        if (_this.isMobile) {
          if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.reveal:visible').length === 0) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').removeClass('is-reveal-open');
          }
          if (_this.originalScrollPos) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').scrollTop(_this.originalScrollPos);
            _this.originalScrollPos = null;
          }
        } else {
          if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.reveal:visible').length === 0) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').removeClass('is-reveal-open');
          }
        }

        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].releaseFocus(_this.$element);

        _this.$element.attr('aria-hidden', true);

        /**
        * Fires when the modal is done closing.
        * @event Reveal#closed
        */
        _this.$element.trigger('closed.zf.reveal');
      }

      /**
      * Resets the modal content
      * This prevents a running video to keep going in the background
      */
      if (this.options.resetOnClose) {
        this.$element.html(this.$element.html());
      }

      this.isActive = false;
      if (_this.options.deepLink) {
        if (window.history.replaceState) {
          window.history.replaceState('', document.title, window.location.href.replace('#' + this.id, ''));
        } else {
          window.location.hash = '';
        }
      }

      this.$anchor.focus();
    }

    /**
     * Toggles the open/closed state of a modal.
     * @function
     */

  }, {
    key: 'toggle',
    value: function toggle() {
      if (this.isActive) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: '_destroy',


    /**
     * Destroys an instance of a modal.
     * @function
     */
    value: function _destroy() {
      if (this.options.overlay) {
        this.$element.appendTo(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()
        this.$overlay.hide().off().remove();
      }
      this.$element.hide().off();
      this.$anchor.off('.zf');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('.zf.reveal:' + this.id);
    }
  }]);

  return Reveal;
}(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__["a" /* Plugin */]);

Reveal.defaults = {
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationIn: '',
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationOut: '',
  /**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  showDelay: 0,
  /**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  hideDelay: 0,
  /**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,
  /**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnEsc: true,
  /**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
  multipleOpened: false,
  /**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  vOffset: 'auto',
  /**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  hOffset: 'auto',
  /**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
  fullScreen: false,
  /**
   * Percentage of screen height the modal should push up from the bottom of the view.
   * @option
   * @type {number}
   * @default 10
   */
  btmOffsetPct: 10,
  /**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
  overlay: true,
  /**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
  resetOnClose: false,
  /**
   * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,
  /**
   * Update the browser history with the open modal
   * @option
   * @default false
   */
  updateHistory: false,
  /**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */
  appendTo: "body",
  /**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
  additionalOverlayClasses: ''
};

function iPhoneSniff() {
  return (/iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
  );
}

function androidSniff() {
  return (/Android/.test(window.navigator.userAgent)
  );
}

function mobileSniff() {
  return iPhoneSniff() || androidSniff();
}



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundation_util_touch__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__foundation_util_triggers__ = __webpack_require__(5);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */

var Slider = function (_Plugin) {
  _inherits(Slider, _Plugin);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: '_setup',

    /**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Slider.defaults, this.$element.data(), options);
      this.className = 'Slider'; // ie9 back compat

      // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.
      __WEBPACK_IMPORTED_MODULE_5__foundation_util_touch__["a" /* Touch */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
      __WEBPACK_IMPORTED_MODULE_6__foundation_util_triggers__["a" /* Triggers */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

      this._init();

      __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].register('Slider', {
        'ltr': {
          'ARROW_RIGHT': 'increase',
          'ARROW_UP': 'increase',
          'ARROW_DOWN': 'decrease',
          'ARROW_LEFT': 'decrease',
          'SHIFT_ARROW_RIGHT': 'increase_fast',
          'SHIFT_ARROW_UP': 'increase_fast',
          'SHIFT_ARROW_DOWN': 'decrease_fast',
          'SHIFT_ARROW_LEFT': 'decrease_fast',
          'HOME': 'min',
          'END': 'max'
        },
        'rtl': {
          'ARROW_LEFT': 'increase',
          'ARROW_RIGHT': 'decrease',
          'SHIFT_ARROW_LEFT': 'increase_fast',
          'SHIFT_ARROW_RIGHT': 'decrease_fast'
        }
      });
    }

    /**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      this.inputs = this.$element.find('input');
      this.handles = this.$element.find('[data-slider-handle]');

      this.$handle = this.handles.eq(0);
      this.$input = this.inputs.length ? this.inputs.eq(0) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + this.$handle.attr('aria-controls'));
      this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

      var isDbl = false,
          _this = this;
      if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
        this.options.disabled = true;
        this.$element.addClass(this.options.disabledClass);
      }
      if (!this.inputs.length) {
        this.inputs = __WEBPACK_IMPORTED_MODULE_0_jquery___default()().add(this.$input);
        this.options.binding = true;
      }

      this._setInitAttr(0);

      if (this.handles[1]) {
        this.options.doubleSided = true;
        this.$handle2 = this.handles.eq(1);
        this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + this.$handle2.attr('aria-controls'));

        if (!this.inputs[1]) {
          this.inputs = this.inputs.add(this.$input2);
        }
        isDbl = true;

        // this.$handle.triggerHandler('click.zf.slider');
        this._setInitAttr(1);
      }

      // Set handle positions
      this.setHandles();

      this._events();
    }
  }, {
    key: 'setHandles',
    value: function setHandles() {
      var _this3 = this;

      if (this.handles[1]) {
        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, function () {
          _this3._setHandlePos(_this3.$handle2, _this3.inputs.eq(1).val(), true);
        });
      } else {
        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);
      }
    }
  }, {
    key: '_reflow',
    value: function _reflow() {
      this.setHandles();
    }
    /**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */

  }, {
    key: '_pctOfBar',
    value: function _pctOfBar(value) {
      var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);

      switch (this.options.positionValueFunction) {
        case "pow":
          pctOfBar = this._logTransform(pctOfBar);
          break;
        case "log":
          pctOfBar = this._powTransform(pctOfBar);
          break;
      }

      return pctOfBar.toFixed(2);
    }

    /**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */

  }, {
    key: '_value',
    value: function _value(pctOfBar) {
      switch (this.options.positionValueFunction) {
        case "pow":
          pctOfBar = this._powTransform(pctOfBar);
          break;
        case "log":
          pctOfBar = this._logTransform(pctOfBar);
          break;
      }
      var value = (this.options.end - this.options.start) * pctOfBar + this.options.start;

      return value;
    }

    /**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */

  }, {
    key: '_logTransform',
    value: function _logTransform(value) {
      return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
    }

    /**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */

  }, {
    key: '_powTransform',
    value: function _powTransform(value) {
      return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
    }

    /**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */

  }, {
    key: '_setHandlePos',
    value: function _setHandlePos($hndl, location, noInvert, cb) {
      // don't move if the slider has been disabled since its initialization
      if (this.$element.hasClass(this.options.disabledClass)) {
        return;
      }
      //might need to alter that slightly for bars that will have odd number selections.
      location = parseFloat(location); //on input change events, convert string to number...grumble.

      // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
      if (location < this.options.start) {
        location = this.options.start;
      } else if (location > this.options.end) {
        location = this.options.end;
      }

      var isDbl = this.options.doubleSided;

      //this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
      //for click and drag events, it's weird due to the scale(-1, 1) css property
      if (this.options.vertical && !noInvert) {
        location = this.options.end - location;
      }

      if (isDbl) {
        //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
        if (this.handles.index($hndl) === 0) {
          var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
          location = location >= h2Val ? h2Val - this.options.step : location;
        } else {
          var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
          location = location <= h1Val ? h1Val + this.options.step : location;
        }
      }

      var _this = this,
          vert = this.options.vertical,
          hOrW = vert ? 'height' : 'width',
          lOrT = vert ? 'top' : 'left',
          handleDim = $hndl[0].getBoundingClientRect()[hOrW],
          elemDim = this.$element[0].getBoundingClientRect()[hOrW],

      //percentage of bar min/max value based on click or drag point
      pctOfBar = this._pctOfBar(location),

      //number of actual pixels to shift the handle, based on the percentage obtained above
      pxToMove = (elemDim - handleDim) * pctOfBar,

      //percentage of bar to shift the handle
      movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal);
      //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
      location = parseFloat(location.toFixed(this.options.decimal));
      // declare empty object for css adjustments, only used with 2 handled-sliders
      var css = {};

      this._setValues($hndl, location);

      // TODO update to calculate based on values set to respective inputs??
      if (isDbl) {
        var isLeftHndl = this.handles.index($hndl) === 0,

        //empty variable, will be used for min-height/width for fill bar
        dim,

        //percentage w/h of the handle compared to the slider bar
        handlePct = ~~(percent(handleDim, elemDim) * 100);
        //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
        if (isLeftHndl) {
          //left or top percentage value to apply to the fill bar.
          css[lOrT] = movement + '%';
          //calculate the new min-height/width for the fill bar.
          dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct;
          //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
          //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
          if (cb && typeof cb === 'function') {
            cb();
          } //this is only needed for the initialization of 2 handled sliders
        } else {
          //just caching the value of the left/bottom handle's left/top property
          var handlePos = parseFloat(this.$handle[0].style[lOrT]);
          //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
          //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
          dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
        }
        // assign the min-height/width to our css object
        css['min-' + hOrW] = dim + '%';
      }

      this.$element.one('finished.zf.animate', function () {
        /**
         * Fires when the handle is done moving.
         * @event Slider#moved
         */
        _this.$element.trigger('moved.zf.slider', [$hndl]);
      });

      //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
      var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["b" /* Move */])(moveTime, $hndl, function () {
        // adjusting the left/top property of the handle, based on the percentage calculated above
        // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
        // fall back to next best guess.
        if (isNaN(movement)) {
          $hndl.css(lOrT, pctOfBar * 100 + '%');
        } else {
          $hndl.css(lOrT, movement + '%');
        }

        if (!_this.options.doubleSided) {
          //if single-handled, a simple method to expand the fill bar
          _this.$fill.css(hOrW, pctOfBar * 100 + '%');
        } else {
          //otherwise, use the css object we created above
          _this.$fill.css(css);
        }
      });

      /**
       * Fires when the value has not been change for a given time.
       * @event Slider#changed
       */
      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.$element.trigger('changed.zf.slider', [$hndl]);
      }, _this.options.changedDelay);
    }

    /**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */

  }, {
    key: '_setInitAttr',
    value: function _setInitAttr(idx) {
      var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
      var id = this.inputs.eq(idx).attr('id') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a" /* GetYoDigits */])(6, 'slider');
      this.inputs.eq(idx).attr({
        'id': id,
        'max': this.options.end,
        'min': this.options.start,
        'step': this.options.step
      });
      this.inputs.eq(idx).val(initVal);
      this.handles.eq(idx).attr({
        'role': 'slider',
        'aria-controls': id,
        'aria-valuemax': this.options.end,
        'aria-valuemin': this.options.start,
        'aria-valuenow': initVal,
        'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
        'tabindex': 0
      });
    }

    /**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */

  }, {
    key: '_setValues',
    value: function _setValues($handle, val) {
      var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
      this.inputs.eq(idx).val(val);
      $handle.attr('aria-valuenow', val);
    }

    /**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */

  }, {
    key: '_handleEvent',
    value: function _handleEvent(e, $handle, val) {
      var value, hasVal;
      if (!val) {
        //click or drag events
        e.preventDefault();
        var _this = this,
            vertical = this.options.vertical,
            param = vertical ? 'height' : 'width',
            direction = vertical ? 'top' : 'left',
            eventOffset = vertical ? e.pageY : e.pageX,
            halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
            barDim = this.$element[0].getBoundingClientRect()[param],
            windowScroll = vertical ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scrollTop() : __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scrollLeft();

        var elemOffset = this.$element.offset()[direction];

        // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
        // best way to guess this is simulated is if clientY == pageY
        if (e.clientY === e.pageY) {
          eventOffset = eventOffset + windowScroll;
        }
        var eventFromBar = eventOffset - elemOffset;
        var barXY;
        if (eventFromBar < 0) {
          barXY = 0;
        } else if (eventFromBar > barDim) {
          barXY = barDim;
        } else {
          barXY = eventFromBar;
        }
        var offsetPct = percent(barXY, barDim);

        value = this._value(offsetPct);

        // turn everything around for RTL, yay math!
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["c" /* rtl */])() && !this.options.vertical) {
          value = this.options.end - value;
        }

        value = _this._adjustValue(null, value);
        //boolean flag for the setHandlePos fn, specifically for vertical sliders
        hasVal = false;

        if (!$handle) {
          //figure out which handle it is, pass it to the next function.
          var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
              secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
          $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
        }
      } else {
        //change event on input
        value = this._adjustValue(null, val);
        hasVal = true;
      }

      this._setHandlePos($handle, value, hasVal);
    }

    /**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */

  }, {
    key: '_adjustValue',
    value: function _adjustValue($handle, value) {
      var val,
          step = this.options.step,
          div = parseFloat(step / 2),
          left,
          prev_val,
          next_val;
      if (!!$handle) {
        val = parseFloat($handle.attr('aria-valuenow'));
      } else {
        val = value;
      }
      left = val % step;
      prev_val = val - left;
      next_val = prev_val + step;
      if (left === 0) {
        return val;
      }
      val = val >= prev_val + div ? next_val : prev_val;
      return val;
    }

    /**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      this._eventsForHandle(this.$handle);
      if (this.handles[1]) {
        this._eventsForHandle(this.$handle2);
      }
    }

    /**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */

  }, {
    key: '_eventsForHandle',
    value: function _eventsForHandle($handle) {
      var _this = this,
          curHandle,
          timer;

      this.inputs.off('change.zf.slider').on('change.zf.slider', function (e) {
        var idx = _this.inputs.index(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
        _this._handleEvent(e, _this.handles.eq(idx), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val());
      });

      if (this.options.clickSelect) {
        this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {
          if (_this.$element.data('dragging')) {
            return false;
          }

          if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).is('[data-slider-handle]')) {
            if (_this.options.doubleSided) {
              _this._handleEvent(e);
            } else {
              _this._handleEvent(e, _this.$handle);
            }
          }
        });
      }

      if (this.options.draggable) {
        this.handles.addTouch();

        var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body');
        $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {
          $handle.addClass('is-dragging');
          _this.$fill.addClass('is-dragging'); //
          _this.$element.data('dragging', true);

          curHandle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget);

          $body.on('mousemove.zf.slider', function (e) {
            e.preventDefault();
            _this._handleEvent(e, curHandle);
          }).on('mouseup.zf.slider', function (e) {
            _this._handleEvent(e, curHandle);

            $handle.removeClass('is-dragging');
            _this.$fill.removeClass('is-dragging');
            _this.$element.data('dragging', false);

            $body.off('mousemove.zf.slider mouseup.zf.slider');
          });
        })
        // prevent events triggered by touch
        .on('selectstart.zf.slider touchmove.zf.slider', function (e) {
          e.preventDefault();
        });
      }

      $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {
        var _$handle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
            oldValue = parseFloat(_this.inputs.eq(idx).val()),
            newValue;

        // handle keyboard event with keyboard util
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a" /* Keyboard */].handleKey(e, 'Slider', {
          decrease: function () {
            newValue = oldValue - _this.options.step;
          },
          increase: function () {
            newValue = oldValue + _this.options.step;
          },
          decrease_fast: function () {
            newValue = oldValue - _this.options.step * 10;
          },
          increase_fast: function () {
            newValue = oldValue + _this.options.step * 10;
          },
          min: function () {
            newValue = _this.options.start;
          },
          max: function () {
            newValue = _this.options.end;
          },
          handled: function () {
            // only set handle pos when event was handled specially
            e.preventDefault();
            _this._setHandlePos(_$handle, newValue, true);
          }
        });
        /*if (newValue) { // if pressed key has special function, update value
          e.preventDefault();
          _this._setHandlePos(_$handle, newValue);
        }*/
      });
    }

    /**
     * Destroys the slider plugin.
     */

  }, {
    key: '_destroy',
    value: function _destroy() {
      this.handles.off('.zf.slider');
      this.inputs.off('.zf.slider');
      this.$element.off('.zf.slider');

      clearTimeout(this.timeout);
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__["a" /* Plugin */]);

Slider.defaults = {
  /**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
  start: 0,
  /**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
  end: 100,
  /**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
  step: 1,
  /**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
  initialStart: 0,
  /**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
  initialEnd: 100,
  /**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
  binding: false,
  /**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  clickSelect: true,
  /**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
  vertical: false,
  /**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
  draggable: true,
  /**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */
  disabled: false,
  /**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
  doubleSided: false,
  /**
   * Potential future feature.
   */
  // steps: 100,
  /**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
  decimal: 2,
  /**
   * Time delay for dragged elements.
   */
  // dragDelay: 0,
  /**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
  moveTime: 200, //update this if changing the transition time in the sass
  /**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
  disabledClass: 'disabled',
  /**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
  invertVertical: false,
  /**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
  changedDelay: 500,
  /**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
  nonLinearBase: 5,
  /**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
  positionValueFunction: 'linear'
};

function percent(frac, num) {
  return frac / num;
}
function absPosition($handle, dir, clickPos, param) {
  return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
}
function baseLog(base, value) {
  return Math.log(value) / Math.log(base);
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothScroll; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(1);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * SmoothScroll module.
 * @module foundation.smooth-scroll
 */

var SmoothScroll = function (_Plugin) {
    _inherits(SmoothScroll, _Plugin);

    function SmoothScroll() {
        _classCallCheck(this, SmoothScroll);

        return _possibleConstructorReturn(this, (SmoothScroll.__proto__ || Object.getPrototypeOf(SmoothScroll)).apply(this, arguments));
    }

    _createClass(SmoothScroll, [{
        key: '_setup',

        /**
         * Creates a new instance of SmoothScroll.
         * @class
         * @name SmoothScroll
         * @fires SmoothScroll#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        value: function _setup(element, options) {
            this.$element = element;
            this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, SmoothScroll.defaults, this.$element.data(), options);
            this.className = 'SmoothScroll'; // ie9 back compat

            this._init();
        }

        /**
         * Initialize the SmoothScroll plugin
         * @private
         */

    }, {
        key: '_init',
        value: function _init() {
            var id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a" /* GetYoDigits */])(6, 'smooth-scroll');
            var _this = this;
            this.$element.attr({
                'id': id
            });

            this._events();
        }

        /**
         * Initializes events for SmoothScroll.
         * @private
         */

    }, {
        key: '_events',
        value: function _events() {
            var _this = this;

            // click handler function.
            var handleLinkClick = function (e) {
                // exit function if the event source isn't coming from an anchor with href attribute starts with '#'
                if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is('a[href^="#"]')) {
                    return false;
                }

                var arrival = this.getAttribute('href');

                _this._inTransition = true;

                SmoothScroll.scrollToLoc(arrival, _this.options, function () {
                    _this._inTransition = false;
                });

                e.preventDefault();
            };

            this.$element.on('click.zf.smoothScroll', handleLinkClick);
            this.$element.on('click.zf.smoothScroll', 'a[href^="#"]', handleLinkClick);
        }

        /**
         * Function to scroll to a given location on the page.
         * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
         * @param {Object} options - The options to use.
         * @param {Function} callback - The callback function.
         * @static
         * @function
         */

    }], [{
        key: 'scrollToLoc',
        value: function scrollToLoc(loc) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;
            var callback = arguments[2];

            // Do nothing if target does not exist to prevent errors
            if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(loc).length) {
                return false;
            }

            var scrollPos = Math.round(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(loc).offset().top - options.threshold / 2 - options.offset);

            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').stop(true).animate({ scrollTop: scrollPos }, options.animationDuration, options.animationEasing, function () {
                if (callback && typeof callback == "function") {
                    callback();
                }
            });
        }
    }]);

    return SmoothScroll;
}(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__["a" /* Plugin */]);

/**
 * Default settings for plugin.
 */


SmoothScroll.defaults = {
    /**
     * Amount of time, in ms, the animated scrolling should take between locations.
     * @option
     * @type {number}
     * @default 500
     */
    animationDuration: 500,
    /**
     * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
     * @option
     * @type {string}
     * @default 'linear'
     * @see {@link https://api.jquery.com/animate|Jquery animate}
     */
    animationEasing: 'linear',
    /**
     * Number of pixels to use as a marker for location changes.
     * @option
     * @type {number}
     * @default 50
     */
    threshold: 50,
    /**
     * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
     * @option
     * @type {number}
     * @default 0
     */
    offset: 0
};



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sticky; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation_util_triggers__ = __webpack_require__(5);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */

var Sticky = function (_Plugin) {
  _inherits(Sticky, _Plugin);

  function Sticky() {
    _classCallCheck(this, Sticky);

    return _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).apply(this, arguments));
  }

  _createClass(Sticky, [{
    key: '_setup',

    /**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Sticky.defaults, this.$element.data(), options);
      this.className = 'Sticky'; // ie9 back compat

      // Triggers init is idempotent, just need to make sure it is initialized
      __WEBPACK_IMPORTED_MODULE_4__foundation_util_triggers__["a" /* Triggers */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

      this._init();
    }

    /**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a" /* MediaQuery */]._init();

      var $parent = this.$element.parent('[data-sticky-container]'),
          id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a" /* GetYoDigits */])(6, 'sticky'),
          _this = this;

      if ($parent.length) {
        this.$container = $parent;
      } else {
        this.wasWrapped = true;
        this.$element.wrap(this.options.container);
        this.$container = this.$element.parent();
      }
      this.$container.addClass(this.options.containerClass);

      this.$element.addClass(this.options.stickyClass).attr({ 'data-resize': id, 'data-mutate': id });
      if (this.options.anchor !== '') {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + _this.options.anchor).attr({ 'data-mutate': id });
      }

      this.scrollCount = this.options.checkEvery;
      this.isStuck = false;
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).one('load.zf.sticky', function () {
        //We calculate the container height to have correct values for anchor points offset calculation.
        _this.containerHeight = _this.$element.css("display") == "none" ? 0 : _this.$element[0].getBoundingClientRect().height;
        _this.$container.css('height', _this.containerHeight);
        _this.elemHeight = _this.containerHeight;
        if (_this.options.anchor !== '') {
          _this.$anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + _this.options.anchor);
        } else {
          _this._parsePoints();
        }

        _this._setSizes(function () {
          var scroll = window.pageYOffset;
          _this._calc(false, scroll);
          //Unstick the element will ensure that proper classes are set.
          if (!_this.isStuck) {
            _this._removeSticky(scroll >= _this.topPoint ? false : true);
          }
        });
        _this._events(id.split('-').reverse().join('-'));
      });
    }

    /**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */

  }, {
    key: '_parsePoints',
    value: function _parsePoints() {
      var top = this.options.topAnchor == "" ? 1 : this.options.topAnchor,
          btm = this.options.btmAnchor == "" ? document.documentElement.scrollHeight : this.options.btmAnchor,
          pts = [top, btm],
          breaks = {};
      for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
        var pt;
        if (typeof pts[i] === 'number') {
          pt = pts[i];
        } else {
          var place = pts[i].split(':'),
              anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + place[0]);

          pt = anchor.offset().top;
          if (place[1] && place[1].toLowerCase() === 'bottom') {
            pt += anchor[0].getBoundingClientRect().height;
          }
        }
        breaks[i] = pt;
      }

      this.points = breaks;
      return;
    }

    /**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */

  }, {
    key: '_events',
    value: function _events(id) {
      var _this = this,
          scrollListener = this.scrollListener = 'scroll.zf.' + id;
      if (this.isOn) {
        return;
      }
      if (this.canStick) {
        this.isOn = true;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(scrollListener).on(scrollListener, function (e) {
          if (_this.scrollCount === 0) {
            _this.scrollCount = _this.options.checkEvery;
            _this._setSizes(function () {
              _this._calc(false, window.pageYOffset);
            });
          } else {
            _this.scrollCount--;
            _this._calc(false, window.pageYOffset);
          }
        });
      }

      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function (e, el) {
        _this._eventsHandler(id);
      });

      this.$element.on('mutateme.zf.trigger', function (e, el) {
        _this._eventsHandler(id);
      });

      if (this.$anchor) {
        this.$anchor.on('mutateme.zf.trigger', function (e, el) {
          _this._eventsHandler(id);
        });
      }
    }

    /**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */

  }, {
    key: '_eventsHandler',
    value: function _eventsHandler(id) {
      var _this = this,
          scrollListener = this.scrollListener = 'scroll.zf.' + id;

      _this._setSizes(function () {
        _this._calc(false);
        if (_this.canStick) {
          if (!_this.isOn) {
            _this._events(id);
          }
        } else if (_this.isOn) {
          _this._pauseListeners(scrollListener);
        }
      });
    }

    /**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */

  }, {
    key: '_pauseListeners',
    value: function _pauseListeners(scrollListener) {
      this.isOn = false;
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(scrollListener);

      /**
       * Fires when the plugin is paused due to resize event shrinking the view.
       * @event Sticky#pause
       * @private
       */
      this.$element.trigger('pause.zf.sticky');
    }

    /**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */

  }, {
    key: '_calc',
    value: function _calc(checkSizes, scroll) {
      if (checkSizes) {
        this._setSizes();
      }

      if (!this.canStick) {
        if (this.isStuck) {
          this._removeSticky(true);
        }
        return false;
      }

      if (!scroll) {
        scroll = window.pageYOffset;
      }

      if (scroll >= this.topPoint) {
        if (scroll <= this.bottomPoint) {
          if (!this.isStuck) {
            this._setSticky();
          }
        } else {
          if (this.isStuck) {
            this._removeSticky(false);
          }
        }
      } else {
        if (this.isStuck) {
          this._removeSticky(true);
        }
      }
    }

    /**
     * Causes the $element to become stuck.
     * Adds `position: fixed;`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */

  }, {
    key: '_setSticky',
    value: function _setSticky() {
      var _this = this,
          stickTo = this.options.stickTo,
          mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
          notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
          css = {};

      css[mrgn] = this.options[mrgn] + 'em';
      css[stickTo] = 0;
      css[notStuckTo] = 'auto';
      this.isStuck = true;
      this.$element.removeClass('is-anchored is-at-' + notStuckTo).addClass('is-stuck is-at-' + stickTo).css(css)
      /**
       * Fires when the $element has become `position: fixed;`
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
       * @event Sticky#stuckto
       */
      .trigger('sticky.zf.stuckto:' + stickTo);
      this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
        _this._setSizes();
      });
    }

    /**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */

  }, {
    key: '_removeSticky',
    value: function _removeSticky(isTop) {
      var stickTo = this.options.stickTo,
          stickToTop = stickTo === 'top',
          css = {},
          anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
          mrgn = stickToTop ? 'marginTop' : 'marginBottom',
          notStuckTo = stickToTop ? 'bottom' : 'top',
          topOrBottom = isTop ? 'top' : 'bottom';

      css[mrgn] = 0;

      css['bottom'] = 'auto';
      if (isTop) {
        css['top'] = 0;
      } else {
        css['top'] = anchorPt;
      }

      this.isStuck = false;
      this.$element.removeClass('is-stuck is-at-' + stickTo).addClass('is-anchored is-at-' + topOrBottom).css(css)
      /**
       * Fires when the $element has become anchored.
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
       * @event Sticky#unstuckfrom
       */
      .trigger('sticky.zf.unstuckfrom:' + topOrBottom);
    }

    /**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */

  }, {
    key: '_setSizes',
    value: function _setSizes(cb) {
      this.canStick = __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a" /* MediaQuery */].is(this.options.stickyOn);
      if (!this.canStick) {
        if (cb && typeof cb === 'function') {
          cb();
        }
      }
      var _this = this,
          newElemWidth = this.$container[0].getBoundingClientRect().width,
          comp = window.getComputedStyle(this.$container[0]),
          pdngl = parseInt(comp['padding-left'], 10),
          pdngr = parseInt(comp['padding-right'], 10);

      if (this.$anchor && this.$anchor.length) {
        this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
      } else {
        this._parsePoints();
      }

      this.$element.css({
        'max-width': newElemWidth - pdngl - pdngr + 'px'
      });

      var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
      if (this.$element.css("display") == "none") {
        newContainerHeight = 0;
      }
      this.containerHeight = newContainerHeight;
      this.$container.css({
        height: newContainerHeight
      });
      this.elemHeight = newContainerHeight;

      if (!this.isStuck) {
        if (this.$element.hasClass('is-at-bottom')) {
          var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
          this.$element.css('top', anchorPt);
        }
      }

      this._setBreakPoints(newContainerHeight, function () {
        if (cb && typeof cb === 'function') {
          cb();
        }
      });
    }

    /**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */

  }, {
    key: '_setBreakPoints',
    value: function _setBreakPoints(elemHeight, cb) {
      if (!this.canStick) {
        if (cb && typeof cb === 'function') {
          cb();
        } else {
          return false;
        }
      }
      var mTop = emCalc(this.options.marginTop),
          mBtm = emCalc(this.options.marginBottom),
          topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
          bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,

      // topPoint = this.$anchor.offset().top || this.points[0],
      // bottomPoint = topPoint + this.anchorHeight || this.points[1],
      winHeight = window.innerHeight;

      if (this.options.stickTo === 'top') {
        topPoint -= mTop;
        bottomPoint -= elemHeight + mTop;
      } else if (this.options.stickTo === 'bottom') {
        topPoint -= winHeight - (elemHeight + mBtm);
        bottomPoint -= winHeight - mBtm;
      } else {
        //this would be the stickTo: both option... tricky
      }

      this.topPoint = topPoint;
      this.bottomPoint = bottomPoint;

      if (cb && typeof cb === 'function') {
        cb();
      }
    }

    /**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */

  }, {
    key: '_destroy',
    value: function _destroy() {
      this._removeSticky(true);

      this.$element.removeClass(this.options.stickyClass + ' is-anchored is-at-top').css({
        height: '',
        top: '',
        bottom: '',
        'max-width': ''
      }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');
      if (this.$anchor && this.$anchor.length) {
        this.$anchor.off('change.zf.sticky');
      }
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(this.scrollListener);

      if (this.wasWrapped) {
        this.$element.unwrap();
      } else {
        this.$container.removeClass(this.options.containerClass).css({
          height: ''
        });
      }
    }
  }]);

  return Sticky;
}(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a" /* Plugin */]);

Sticky.defaults = {
  /**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
  container: '<div data-sticky-container></div>',
  /**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */
  stickTo: 'top',
  /**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
  anchor: '',
  /**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
  topAnchor: '',
  /**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
  btmAnchor: '',
  /**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginTop: 1,
  /**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
  marginBottom: 1,
  /**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
  stickyOn: 'medium',
  /**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
  stickyClass: 'sticky',
  /**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
  containerClass: 'sticky-container',
  /**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
  checkEvery: -1
};

/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */
function emCalc(em) {
  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
}



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toggler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation_util_triggers__ = __webpack_require__(5);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */

var Toggler = function (_Plugin) {
  _inherits(Toggler, _Plugin);

  function Toggler() {
    _classCallCheck(this, Toggler);

    return _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).apply(this, arguments));
  }

  _createClass(Toggler, [{
    key: '_setup',

    /**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function _setup(element, options) {
      this.$element = element;
      this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Toggler.defaults, element.data(), options);
      this.className = '';
      this.className = 'Toggler'; // ie9 back compat

      // Triggers init is idempotent, just need to make sure it is initialized
      __WEBPACK_IMPORTED_MODULE_3__foundation_util_triggers__["a" /* Triggers */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

      this._init();
      this._events();
    }

    /**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */

  }, {
    key: '_init',
    value: function _init() {
      var input;
      // Parse animation classes if they were set
      if (this.options.animate) {
        input = this.options.animate.split(' ');

        this.animationIn = input[0];
        this.animationOut = input[1] || null;
      }
      // Otherwise, parse toggle class
      else {
          input = this.$element.data('toggler');
          // Allow for a . at the beginning of the string
          this.className = input[0] === '.' ? input.slice(1) : input;
        }

      // Add ARIA attributes to triggers
      var id = this.$element[0].id;
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-controls', id);
      // If the target is hidden, add aria-hidden
      this.$element.attr('aria-expanded', this.$element.is(':hidden') ? false : true);
    }

    /**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
    }

    /**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */

  }, {
    key: 'toggle',
    value: function toggle() {
      this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();
    }
  }, {
    key: '_toggleClass',
    value: function _toggleClass() {
      this.$element.toggleClass(this.className);

      var isOn = this.$element.hasClass(this.className);
      if (isOn) {
        /**
         * Fires if the target element has the class after a toggle.
         * @event Toggler#on
         */
        this.$element.trigger('on.zf.toggler');
      } else {
        /**
         * Fires if the target element does not have the class after a toggle.
         * @event Toggler#off
         */
        this.$element.trigger('off.zf.toggler');
      }

      this._updateARIA(isOn);
      this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');
    }
  }, {
    key: '_toggleAnimate',
    value: function _toggleAnimate() {
      var _this = this;

      if (this.$element.is(':hidden')) {
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__["a" /* Motion */].animateIn(this.$element, this.animationIn, function () {
          _this._updateARIA(true);
          this.trigger('on.zf.toggler');
          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__["a" /* Motion */].animateOut(this.$element, this.animationOut, function () {
          _this._updateARIA(false);
          this.trigger('off.zf.toggler');
          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
        });
      }
    }
  }, {
    key: '_updateARIA',
    value: function _updateARIA(isOn) {
      this.$element.attr('aria-expanded', isOn ? true : false);
    }

    /**
     * Destroys the instance of Toggler on the element.
     * @function
     */

  }, {
    key: '_destroy',
    value: function _destroy() {
      this.$element.off('.zf.toggler');
    }
  }]);

  return Toggler;
}(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__["a" /* Plugin */]);

Toggler.defaults = {
  /**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
  animate: false
};



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);




function Timer(elem, options, cb) {
  var _this = this,
      duration = options.duration,
      //options is an object for easily adding features later.
  nameSpace = Object.keys(elem.data())[0] || 'timer',
      remain = -1,
      start,
      timer;

  this.isPaused = false;

  this.restart = function () {
    remain = -1;
    clearTimeout(timer);
    this.start();
  };

  this.start = function () {
    this.isPaused = false;
    // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
    clearTimeout(timer);
    remain = remain <= 0 ? duration : remain;
    elem.data('paused', false);
    start = Date.now();
    timer = setTimeout(function () {
      if (options.infinite) {
        _this.restart(); //rerun the timer.
      }
      if (cb && typeof cb === 'function') {
        cb();
      }
    }, remain);
    elem.trigger('timerstart.zf.' + nameSpace);
  };

  this.pause = function () {
    this.isPaused = true;
    //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
    clearTimeout(timer);
    elem.data('paused', true);
    var end = Date.now();
    remain = remain - (end - start);
    elem.trigger('timerpaused.zf.' + nameSpace);
  };
}



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_mediaQuery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_triggers__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_slider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_accordion__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_reveal__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_orbit__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_sticky__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_interchange__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_responsiveToggle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_toggler__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_abide__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_equalizer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_smoothScroll__ = __webpack_require__(18);


__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].addToJquery(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].MediaQuery = __WEBPACK_IMPORTED_MODULE_2__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_mediaQuery__["a" /* MediaQuery */];

__WEBPACK_IMPORTED_MODULE_3__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_triggers__["a" /* Triggers */].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a, __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */]);

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_4__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_slider__["a" /* Slider */], 'Slider');

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_5__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_accordion__["a" /* Accordion */], 'Accordion');

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_6__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_reveal__["a" /* Reveal */], 'Reveal');

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_7__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_orbit__["a" /* Orbit */], 'Orbit');

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_8__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_sticky__["a" /* Sticky */], 'Sticky');

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_9__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_interchange__["a" /* Interchange */], 'Interchange');

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_10__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_responsiveToggle__["a" /* ResponsiveToggle */], 'ResponsiveToggle');

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_11__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_toggler__["a" /* Toggler */], 'Toggler');

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_12__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_abide__["a" /* Abide */], 'Abide');

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_13__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_equalizer__["a" /* Equalizer */], 'Equalizer');

__WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a" /* Foundation */].plugin(__WEBPACK_IMPORTED_MODULE_14__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_smoothScroll__["a" /* SmoothScroll */], 'SmoothScroll');

/***/ })
/******/ ]);