parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=r(require("@goosemod/webpack")),e=r(require("@goosemod/patcher"));function t(n){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(t=function(n){return n?r:e})(n)}function r(n,e){if(!e&&n&&n.__esModule)return n;if(null===n||"object"!=typeof n&&"function"!=typeof n)return{default:n};var r=t(e);if(r&&r.has(n))return r.get(n);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in n)if("default"!==a&&Object.prototype.hasOwnProperty.call(n,a)){var l=o?Object.getOwnPropertyDescriptor(n,a):null;l&&(l.get||l.set)?Object.defineProperty(i,a,l):i[a]=n[a]}return i.default=n,r&&r.set(n,i),i}function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,e,t,r,i,o,a){try{var l=n[o](a),u=l.value}catch(c){return void t(c)}l.done?e(u):Promise.resolve(u).then(r,i)}function a(n){return function(){var e=this,t=arguments;return new Promise(function(r,i){var a=n.apply(e,t);function l(n){o(a,r,i,l,u,"next",n)}function u(n){o(a,r,i,l,u,"throw",n)}l(void 0)})}}function l(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=u(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){l=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw o}}}}function u(n,e){if(n){if("string"==typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(n,e):void 0}}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var s=n.findByProps("getMutableGuildChannels"),d=s.getMutableGuildChannels,f=s.getChannel,h=n.findByProps("getCurrentUser").getCurrentUser(),p=n.findByProps("computePermissions").can,v=n.find(function(n){var e;return"ChannelItem"===(null==n?void 0:null===(e=n.default)||void 0===e?void 0:e.displayName)}),y=n.findByProps("getGuilds"),C=y.getGuilds,b=n.common.FluxDispatcher,E=n.findByProps("Permissions","ChannelTypes"),m=E.Permissions,g=E.ChannelTypes,_=n.findByProps("getDefaultChannel"),A=n.findByProps("getCategories","initialize"),P=n.findByProps("hasUnread").__proto__,T=n.findByProps("fetchMessages"),L=Object.assign({},T).fetchMessages,N=function(){var e=document.querySelector(".".concat(n.findByProps("messagesWrapper").messagesWrapper));if(e){e.firstChild.style.display="none",e.firstChild.nextSibling&&(e.firstChild.nextSibling.style.display="none"),e.parentElement.children[1].style.display="none",e.parentElement.parentElement.children[1].style.display="none",document.querySelector(".".concat(n.findByProps("toolbar","selected").toolbar)).style.display="none";var t=document.createElement("div"),r=n.findByProps("h5"),i=n.findByProps("flex");t.className=i.flexCenter,t.style.width="100%",t.innerHTML='\n        <div class="'.concat(i.flex," ").concat(i.directionColumn," ").concat(i.alignCenter,'">\n        <h2 class="').concat(r.h2," ").concat(r.defaultColor,'">This is a hidden channel.</h2>\n        <h5 class="').concat(r.h5," ").concat(r.defaultColor,'">You cannot see the contents of this channel. However, you may see its name and topic.</h5>\n        </div>'),e.appendChild(t)}},D=function(n){"CHANNEL_SELECT"===n.type&&n.channelId&&(S(n.channelId)||setTimeout(N))},S=function(n){var e=f(n);return!(e&&n&&![g.DM,g.GROUP_DM].includes(null==e?void 0:e.type))||[g.GUILD_TEXT,g.GUILD_VOICE,g.GUILD_STAGE_VOICE,g.GUILD_ANNOUNCEMENT,g.ANNOUNCEMENT_THREAD,g.PRIVATE_THREAD,g.PUBLIC_THREAD].includes(null==e?void 0:e.type)&&p(m.VIEW_CHANNEL,h,e)},U=Object.values(C()).reduce(function(n,e){return n[e.id]={channels:_.getChannels(e.id).count,hiddenChannels:[],done:!0},n},{}),I=function(){for(var n=0,e=Object.values(d());n<e.length;n++){var t=e[n];t.type===g.GUILD_CATEGORY||S(t.id)||U[t.guild_id].hiddenChannels.push(t)}},O=function(n,e){var t,r,i;if((null==e?void 0:e.length)>0&&void 0!==(null===(t=U[n])||void 0===t?void 0:t.channels))U[n].hiddenChannels.concat(e);else{var o=_.getChannels(n);if(!((null===(r=U[n])||void 0===r?void 0:r.channels)>0&&(null===(i=U[n])||void 0===i?void 0:i.channels)==o.count)){U[n]={channels:o.count,hiddenChannels:[],done:!1};var a,u=l(o.SELECTABLE.concat(o.VOCAL));try{for(u.s();!(a=u.n()).done;){var c=a.value;S(null==c?void 0:c.id)||U[n].hiddenChannels.push(c)}}catch(s){u.e(s)}finally{u.f()}U[n].done=!0}}},M=function(n){O(n.guild.id)},w=function(n){delete U[n.guild.id]},G=function(n){var e,t,r,i,o;O((null==n?void 0:null===(e=n.updates)||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:null===(r=t.channel)||void 0===r?void 0:r.guild_id)||(null==n?void 0:null===(i=n.channel)||void 0===i?void 0:i.guild_id),null==n?void 0:null===(o=n.updates)||void 0===o?void 0:o.filter(function(n){return!S(n.id)}))},H=function(n){var e=n.channel.guild_id;if(!U[e])return O(e);U[e].hiddenChannels.filter(function(e){return(null==e?void 0:e.id)!=n.channel.id}),U[e].channels-=1},j={},B=document.createElement("style");B.id="hidden-channels-css",B.textContent='[aria-label$="hidden"] > div path[d^="M2"][d*="19"], [aria-label$="hidden"] > div path[d^="M17"][d*="19"]{ fill: #ed4245 !important; }';var x={goosemodHandlers:{onImport:function(){var n=a(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:I(),document.head.appendChild(B),j.CSS=function(){B.remove()},j.guildCreate=function(){b.unsubscribe("GUILD_CREATE",M)},b.subscribe("GUILD_CREATE",M),j.guildDelete=function(){b.unsubscribe("GUILD_DELETE",w)},b.subscribe("GUILD_DELETE",w),j.channelUpdate=function(){b.unsubscribe("CHANNEL_UPDATES",G)},b.subscribe("CHANNEL_UPDATES",G),j.channelCreate=function(){b.unsubscribe("CHANNEL_CREATE",G)},b.subscribe("CHANNEL_CREATE",G),j.channelDelete=function(){b.unsubscribe("CHANNEL_DELETE",H)},b.subscribe("CHANNEL_CREATE",H),j.channelSelect=function(){b.unsubscribe("CHANNEL_SELECT",D)},b.subscribe("CHANNEL_SELECT",D),j.getCategories=e.patch(A,"getCategories",function(n,e){var t;if(null===(t=U[n[0]])||void 0===t||!t.done)return setTimeout(function(){A.getCategories(n[0])},5e3),e;var r,o=l(U[n[0]].hiddenChannels);try{var a=function(){var n=r.value;if(!n)return{v:e};var t=e[n.parent_id||"null"];if(t.filter(function(e){var t;return(null==e?void 0:null===(t=e.channel)||void 0===t?void 0:t.id)===n.id}).length)return{v:e};t.push({channel:n,index:0})};for(o.s();!(r=o.n()).done;){var u=a();if("object"===i(u))return u.v}}catch(c){o.e(c)}finally{o.f()}return e}),j.ChannelItem=e.patch(v,"default",function(n){return S(n[0].channel.id)||(n[0]["aria-label"]+=" hidden"),n},!0),j.hasUnread=e.patch(P,"hasUnread",function(n){return S(n[0])||(n[0]=""),n},!0),j.hasUnreadPins=e.patch(P,"hasUnreadPins",function(n){return S(n[0])?n:["unread"]},!0),T.fetchMessages=function(n){if(S(n.channelId))return L(n)},j.fetchMessages=function(){T.fetchMessages=L};case 21:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){Object.values(j).forEach(function(n){return n()})}}};exports.default=x;
},{"@goosemod/webpack":"../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../moduleWrappers/goosemod/patcher.js"}]},{},["index.js"], null);parcelRequire('index.js').default