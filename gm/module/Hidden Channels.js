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
},{}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var webpackModules = _interopRequireWildcard(require("@goosemod/webpack"));

var patcher = _interopRequireWildcard(require("@goosemod/patcher"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Webpacks
var channelsWebpack = webpackModules.findByProps("getMutableGuildChannels");
var getAllChannels = channelsWebpack.getMutableGuildChannels;
var getChannel = channelsWebpack.getChannel;
var currentUser = webpackModules.findByProps("getCurrentUser").getCurrentUser();
var checkPermission = webpackModules.findByProps("computePermissions").can;
var ChannelItem = webpackModules.find(function (m) {
  var _m$default;

  return (m === null || m === void 0 ? void 0 : (_m$default = m.default) === null || _m$default === void 0 ? void 0 : _m$default.displayName) === 'ChannelItem';
});

var _webpackModules$findB = webpackModules.findByProps("getGuilds"),
    getGuilds = _webpackModules$findB.getGuilds;

var FluxDispatcher = webpackModules.common.FluxDispatcher;

var _webpackModules$findB2 = webpackModules.findByProps("Permissions", "ChannelTypes"),
    Permissions = _webpackModules$findB2.Permissions,
    ChannelTypes = _webpackModules$findB2.ChannelTypes; // Webpacks to be patched


var getDefaultChannel = webpackModules.findByProps("getDefaultChannel");
var getCategories = webpackModules.findByProps("getCategories", "initialize");

var unreadManager = webpackModules.findByProps("hasUnread").__proto__;

var fetchMessages = webpackModules.findByProps("fetchMessages");
var originalFetch = Object.assign({}, fetchMessages).fetchMessages; // Helper functions

var appendHiddenChannelNotice = function appendHiddenChannelNotice() {
  var messagesWrapper = document.querySelector(".".concat(webpackModules.findByProps("messagesWrapper").messagesWrapper));
  if (!messagesWrapper) return;
  messagesWrapper.firstChild.style.display = "none";
  if (messagesWrapper.firstChild.nextSibling) messagesWrapper.firstChild.nextSibling.style.display = "none";
  messagesWrapper.parentElement.children[1].style.display = "none";
  messagesWrapper.parentElement.parentElement.children[1].style.display = "none";
  var toolbar = document.querySelector(".".concat(webpackModules.findByProps("toolbar", "selected").toolbar));
  toolbar.style.display = "none";
  var newMessage = document.createElement("div");
  var txt = webpackModules.findByProps("h5");
  var flex = webpackModules.findByProps("flex");
  newMessage.className = flex.flexCenter;
  newMessage.style.width = "100%";
  newMessage.innerHTML = "\n        <div class=\"".concat(flex.flex, " ").concat(flex.directionColumn, " ").concat(flex.alignCenter, "\">\n        <h2 class=\"").concat(txt.h2, " ").concat(txt.defaultColor, "\">This is a hidden channel.</h2>\n        <h5 class=\"").concat(txt.h5, " ").concat(txt.defaultColor, "\">You cannot see the contents of this channel. However, you may see its name and topic.</h5>\n        </div>");
  messagesWrapper.appendChild(newMessage);
};

var handleChannelChange = function handleChannelChange(data) {
  if (data.type !== "CHANNEL_SELECT" || !data.channelId) return;
  if (!isChannelVisible(data.channelId)) setTimeout(appendHiddenChannelNotice);
};

var isChannelVisible = function isChannelVisible(channelId) {
  var channel = getChannel(channelId);
  if (!channel || !channelId || [ChannelTypes.DM, ChannelTypes.GROUP_DM].includes(channel === null || channel === void 0 ? void 0 : channel.type)) return true;
  return [ChannelTypes.GUILD_TEXT, ChannelTypes.GUILD_VOICE, ChannelTypes.GUILD_STAGE_VOICE, ChannelTypes.GUILD_ANNOUNCEMENT, ChannelTypes.ANNOUNCEMENT_THREAD, ChannelTypes.PRIVATE_THREAD, ChannelTypes.PUBLIC_THREAD].includes(channel === null || channel === void 0 ? void 0 : channel.type) && checkPermission(Permissions.VIEW_CHANNEL, currentUser, channel);
};

var hiddenChannelCache = Object.values(getGuilds()).reduce(function (cache, currentGuild) {
  cache[currentGuild.id] = {
    channels: getDefaultChannel.getChannels(currentGuild.id).count,
    hiddenChannels: [],
    done: true
  };
  return cache;
}, {});

var cacheHiddenChannels = function cacheHiddenChannels() {
  var fetchedChannels = Object.values(getAllChannels());

  for (var _i = 0, _fetchedChannels = fetchedChannels; _i < _fetchedChannels.length; _i++) {
    var channel = _fetchedChannels[_i];
    if (channel.type !== ChannelTypes.GUILD_CATEGORY && !isChannelVisible(channel.id)) hiddenChannelCache[channel.guild_id].hiddenChannels.push(channel);
  }

  ;
};

var cacheServerHiddenChannels = function cacheServerHiddenChannels(guildId, newHiddenChannels) {
  var _hiddenChannelCache$g, _hiddenChannelCache$g2, _hiddenChannelCache$g3;

  if ((newHiddenChannels === null || newHiddenChannels === void 0 ? void 0 : newHiddenChannels.length) > 0 && ((_hiddenChannelCache$g = hiddenChannelCache[guildId]) === null || _hiddenChannelCache$g === void 0 ? void 0 : _hiddenChannelCache$g.channels) !== undefined) {
    hiddenChannelCache[guildId].hiddenChannels.concat(newHiddenChannels);
    return;
  }

  var channels = getDefaultChannel.getChannels(guildId);
  if (((_hiddenChannelCache$g2 = hiddenChannelCache[guildId]) === null || _hiddenChannelCache$g2 === void 0 ? void 0 : _hiddenChannelCache$g2.channels) > 0 && ((_hiddenChannelCache$g3 = hiddenChannelCache[guildId]) === null || _hiddenChannelCache$g3 === void 0 ? void 0 : _hiddenChannelCache$g3.channels) == channels.count) return;
  hiddenChannelCache[guildId] = {
    channels: channels.count,
    hiddenChannels: [],
    done: false
  };

  var _iterator = _createForOfIteratorHelper(channels.SELECTABLE.concat(channels.VOCAL)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var channel = _step.value;
      if (!isChannelVisible(channel === null || channel === void 0 ? void 0 : channel.id)) hiddenChannelCache[guildId].hiddenChannels.push(channel);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  hiddenChannelCache[guildId].done = true;
};

var handleGuildJoin = function handleGuildJoin(event) {
  cacheServerHiddenChannels(event.guild.id);
};

var handleGuildLeave = function handleGuildLeave(event) {
  delete hiddenChannelCache[event.guild.id];
};

var handleChannelUpdate = function handleChannelUpdate(event) {
  var _event$updates, _event$updates$, _event$updates$$chann, _event$channel, _event$updates2;

  cacheServerHiddenChannels((event === null || event === void 0 ? void 0 : (_event$updates = event.updates) === null || _event$updates === void 0 ? void 0 : (_event$updates$ = _event$updates[0]) === null || _event$updates$ === void 0 ? void 0 : (_event$updates$$chann = _event$updates$.channel) === null || _event$updates$$chann === void 0 ? void 0 : _event$updates$$chann.guild_id) || (event === null || event === void 0 ? void 0 : (_event$channel = event.channel) === null || _event$channel === void 0 ? void 0 : _event$channel.guild_id), event === null || event === void 0 ? void 0 : (_event$updates2 = event.updates) === null || _event$updates2 === void 0 ? void 0 : _event$updates2.filter(function (x) {
    return !isChannelVisible(x.id);
  }));
};

var handleChannelDelete = function handleChannelDelete(event) {
  var guildId = event.channel.guild_id;
  if (!hiddenChannelCache[guildId]) return cacheServerHiddenChannels(guildId);
  hiddenChannelCache[guildId].hiddenChannels.filter(function (channel) {
    return (channel === null || channel === void 0 ? void 0 : channel.id) != event.channel.id;
  });
  hiddenChannelCache[guildId].channels -= 1;
}; // Unpatchers


var Unpatch = {}; // CSS stuff

var cssHeader = document.createElement('style');
cssHeader.id = 'hidden-channels-css';
cssHeader.textContent = "[aria-label$=\"hidden\"] > div path[d^=\"M2\"][d*=\"19\"], [aria-label$=\"hidden\"] > div path[d^=\"M17\"][d*=\"19\"]{ fill: #ed4245 !important; }";
var _default = {
  goosemodHandlers: {
    onImport: function () {
      var _onImport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cacheHiddenChannels();
                document.head.appendChild(cssHeader);

                Unpatch.CSS = function () {
                  cssHeader.remove();
                };

                Unpatch.guildCreate = function () {
                  FluxDispatcher.unsubscribe("GUILD_CREATE", handleGuildJoin);
                };

                FluxDispatcher.subscribe("GUILD_CREATE", handleGuildJoin);

                Unpatch.guildDelete = function () {
                  FluxDispatcher.unsubscribe("GUILD_DELETE", handleGuildLeave);
                };

                FluxDispatcher.subscribe("GUILD_DELETE", handleGuildLeave);

                Unpatch.channelUpdate = function () {
                  FluxDispatcher.unsubscribe("CHANNEL_UPDATES", handleChannelUpdate);
                };

                FluxDispatcher.subscribe("CHANNEL_UPDATES", handleChannelUpdate);

                Unpatch.channelCreate = function () {
                  FluxDispatcher.unsubscribe("CHANNEL_CREATE", handleChannelUpdate);
                };

                FluxDispatcher.subscribe("CHANNEL_CREATE", handleChannelUpdate);

                Unpatch.channelDelete = function () {
                  FluxDispatcher.unsubscribe("CHANNEL_DELETE", handleChannelDelete);
                };

                FluxDispatcher.subscribe("CHANNEL_CREATE", handleChannelDelete);

                Unpatch.channelSelect = function () {
                  FluxDispatcher.unsubscribe("CHANNEL_SELECT", handleChannelChange);
                };

                FluxDispatcher.subscribe("CHANNEL_SELECT", handleChannelChange);
                Unpatch.getCategories = patcher.patch(getCategories, "getCategories", function (originalArgs, previousReturn) {
                  var _hiddenChannelCache$o;

                  // originalArgs[0] is the server id
                  if (!((_hiddenChannelCache$o = hiddenChannelCache[originalArgs[0]]) !== null && _hiddenChannelCache$o !== void 0 && _hiddenChannelCache$o.done)) {
                    setTimeout(function () {
                      getCategories.getCategories(originalArgs[0]);
                    }, 5000);
                    return previousReturn;
                  }

                  var _iterator2 = _createForOfIteratorHelper(hiddenChannelCache[originalArgs[0]].hiddenChannels),
                      _step2;

                  try {
                    var _loop = function _loop() {
                      var channel = _step2.value;
                      if (!channel) return {
                        v: previousReturn
                      };
                      var channelsInCategory = previousReturn[channel.parent_id || "null"];
                      if (channelsInCategory.filter(function (item) {
                        var _item$channel;

                        return (item === null || item === void 0 ? void 0 : (_item$channel = item.channel) === null || _item$channel === void 0 ? void 0 : _item$channel.id) === channel.id;
                      }).length) return {
                        v: previousReturn
                      };
                      channelsInCategory.push({
                        channel: channel,
                        index: 0
                      });
                    };

                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var _ret = _loop();

                      if (_typeof(_ret) === "object") return _ret.v;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  ;
                  return previousReturn;
                });
                Unpatch.ChannelItem = patcher.patch(ChannelItem, "default", function (originalArgs) {
                  // originalArgs[0] are the props
                  if (!isChannelVisible(originalArgs[0].channel.id)) originalArgs[0]["aria-label"] += " hidden";
                  return originalArgs;
                }, true);
                Unpatch.hasUnread = patcher.patch(unreadManager, "hasUnread", function (originalArgs) {
                  // originalArgs[0] is the channel id
                  if (!isChannelVisible(originalArgs[0])) originalArgs[0] = "";
                  return originalArgs;
                }, true);
                Unpatch.hasUnreadPins = patcher.patch(unreadManager, "hasUnreadPins", function (originalArgs) {
                  // originalArgs[0] is the channel id
                  if (!isChannelVisible(originalArgs[0])) return ["unread"];
                  return originalArgs;
                }, true);

                fetchMessages.fetchMessages = function (originalArgs) {
                  if (!isChannelVisible(originalArgs.channelId)) return;
                  return originalFetch(originalArgs);
                };

                Unpatch.fetchMessages = function () {
                  fetchMessages.fetchMessages = originalFetch;
                };

              case 21:
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
    onRemove: function onRemove() {
      Object.values(Unpatch).forEach(function (unpatch) {
        return unpatch();
      });
    }
  }
};
exports.default = _default;
},{"@goosemod/webpack":"../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../moduleWrappers/goosemod/patcher.js"}]},{},["index.js"], null);parcelRequire('index.js').default