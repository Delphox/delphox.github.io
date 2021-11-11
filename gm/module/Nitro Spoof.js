// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports = goosemodScope.webpackModules;
},{}],"../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports = goosemodScope.patcher;
},{}],"../../moduleWrappers/goosemod/settings.js":[function(require,module,exports) {
module.exports = goosemodScope.settings;
},{}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webpack = require("@goosemod/webpack");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _findByProps = (0, _webpack.findByProps)('getCustomEmojiById'),
    getCustomEmojiById = _findByProps.getCustomEmojiById;

var _findByProps2 = (0, _webpack.findByProps)('getLastSelectedGuildId'),
    getLastSelectedGuildId = _findByProps2.getLastSelectedGuildId;

function extractEmojis(messageString) {
  var emojiStrings = messageString.matchAll(/<a?:(\w+):(\d+)>/ig);
  var emojiIds = [];

  var _iterator = _createForOfIteratorHelper(emojiStrings),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var emoji = _step.value;
      messageString = messageString.replace(emoji[0], '');
      emojiIds.push(emoji[2]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    content: messageString.trim(),
    emojis: emojiIds
  };
} //returns true if the home button is selected


function isInDms() {
  return document.querySelector('[data-list-item-id="guildsnav___home"]').classList.contains("selected-bZ3Lue");
}

function getEmojiLinks(size, args) {
  //find all emojis from the captured message string and return iterable containing them
  var message = extractEmojis(args[1].content);
  message.emojis.forEach(function (emojiId, i) {
    //fetch required info about the emoji
    var emoji = getCustomEmojiById(emojiId); //check if emoji is normally usable or animated

    if (emoji["guildId"] != getLastSelectedGuildId() || emoji["animated"] || isInDms()) {
      //push link to array
      message.emojis[i] = emoji["url"].split("?")[0] + "?size=".concat(size);
    } else {
      //set the original emoji string back into the array,
      //yeah I know very efficient design :)
      message.emojis[i] = '<' + emoji['allNamesString'] + emoji['id'] + '>';
    }
  }); //add links to the end of the original message

  args[1].content = message.content + "\n" + message.emojis.join("\n"); //set invalidEmojis to empty to prevent discord yelling to you about you not having nitro

  args[1].invalidEmojis = []; //send modified message

  return args;
}

var _default = getEmojiLinks;
exports.default = _default;
},{"@goosemod/webpack":"../../moduleWrappers/goosemod/webpack.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webpack = require("@goosemod/webpack");

var patcher = _interopRequireWildcard(require("@goosemod/patcher"));

var _settings2 = require("@goosemod/settings");

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var settings = {
  emojisize: '64'
};
var usabilityCheck = (0, _webpack.findByProps)('canUseEmojisEverywhere', 'canUseAnimatedEmojis');
var messageEvents = (0, _webpack.findByProps)('sendMessage');
var Unpatch = {
  animatedCheck: null,
  emojiCheck: null,
  sendMessage: null
};
var _default = {
  goosemodHandlers: {
    onImport: function () {
      var _onImport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Unpatch.emojiCheck = patcher.patch(usabilityCheck, "canUseEmojisEverywhere", function () {
                  return true;
                });
                Unpatch.animatedCheck = patcher.patch(usabilityCheck, "canUseAnimatedEmojis", function () {
                  return true;
                });
                Unpatch.sendMessage = patcher.patch(messageEvents, "sendMessage", function (args) {
                  if (args[1].content.match(/<a?:(\w+):(\d+)>/i) != null) {
                    (0, _utils.default)(settings.emojisize, args);
                  }
                });
                (0, _settings2.createItem)('Nitro Spoof', ['', {
                  type: 'text-input',
                  text: 'Emoji Size',
                  initialValue: function initialValue() {
                    return settings.emojisize;
                  },
                  oninput: function oninput(value) {
                    settings.emojisize = value;
                  }
                }]);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onImport() {
        return _onImport.apply(this, arguments);
      }

      return onImport;
    }(),
    getSettings: function getSettings() {
      return [settings];
    },
    loadSettings: function loadSettings(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          _settings = _ref2[0];

      settings = _settings;
    },
    onRemove: function () {
      var _onRemove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Object.values(Unpatch).forEach(function (unpatch) {
                  return unpatch();
                });
                (0, _settings2.removeItem)('Nitro Spoof');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function onRemove() {
        return _onRemove.apply(this, arguments);
      }

      return onRemove;
    }()
  }
};
exports.default = _default;
},{"@goosemod/webpack":"../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../moduleWrappers/goosemod/patcher.js","@goosemod/settings":"../../moduleWrappers/goosemod/settings.js","./utils":"utils.js"}]},{},["index.js"], null);parcelRequire('index.js').default