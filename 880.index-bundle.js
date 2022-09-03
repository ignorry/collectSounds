"use strict";(self.webpackChunkcollectsounds=self.webpackChunkcollectsounds||[]).push([[880],{8971:(e,t,n)=>{n.d(t,{Z:()=>f});var r,a,o,i=n(7294),c=n(8804),u=n(9033),l=n(9784),s=c.ZP.button(r||(a=["\n  display: flex;\n  gap: ",";\n  align-items: center;\n  border: none;\n  color: ",";\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")}),(function(e){return e.theme.colors.font}));const f=function(e){return i.createElement(s,{onClick:function(){return e.callback()}},e.pic&&i.createElement(u.Z,{name:e.pic,active:e.active}),e.text&&i.createElement(l.Z,{text:e.text,secondary:e.secondary}))}},4129:(e,t,n)=>{n.d(t,{Z:()=>u});var r,a,o,i=n(7294),c=n(8804).ZP.input(r||(a=["\n  line-height: ",";\n  font-size: ",";\n  color: ",";\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  padding: ",";\n\n  &:focus {\n    border: 1px solid ",";\n  }\n\n  &::placeholder { /* WebKit, Blink, Edge */\n    font-size: ",";\n    opacity: ",";\n  }\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){var t=e.theme;return"".concat(t.iconSize,"rem")}),(function(e){var t=e.theme;return"".concat(t.font.secondary.size,"rem")}),(function(e){return e.theme.colors.font}),(function(e){return e.theme.colors.darkBg}),(function(e){return e.theme.colors.darkBg}),(function(e){var t=e.theme;return"".concat(t.decorative.borderRadius,"px")}),(function(e){var t=e.theme;return"".concat(t.gaps.smallest,"rem ").concat(t.gaps.small,"rem")}),(function(e){return e.theme.colors.main}),(function(e){var t=e.theme;return"".concat(t.font.secondary.size,"rem")}),(function(e){return e.theme.font.secondary.opacity}));const u=function(e){return i.createElement(c,{onChange:function(t){return e.callback(t.target.value)},value:e.value,placeholder:e.placeholder})}},3800:(e,t,n)=>{n.d(t,{Z:()=>u});var r,a,o,i=n(7294),c=n(8804).ZP.input(r||(a=["\n  overflow: hidden;\n  -webkit-appearance: none;\n  background-color: ",";\n\n  &::-webkit-slider-thumb {\n    width: ",";\n    -webkit-appearance: none;\n    height: ",";\n    cursor: pointer;\n    background: ",";\n    box-shadow: -5000px 0 0 5000px ",";\n  }\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){return e.theme.colors.darkBg}),(function(e){var t=e.theme;return"".concat(t.rangeSize,"rem")}),(function(e){var t=e.theme;return"".concat(t.rangeSize,"rem")}),(function(e){return e.theme.colors.main}),(function(e){return e.theme.colors.main}));const u=function(e){return i.createElement(c,{type:"range",onChange:function(t){return e.callback(t.target.value)},value:e.value,max:e.max||100})}},4461:(e,t,n)=>{n.d(t,{Z:()=>s});var r,a,o,i=n(7294),c=n(8804),u=n(9784),l=c.ZP.button(r||(a=["\n  border: none;\n  color: ",";\n  background: ",";\n  padding: ",";\n  border-radius: ",";\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){return e.active?function(e){return e.theme,"black"}:function(e){return e.theme.colors.font}}),(function(e){return e.active?function(e){return e.theme.colors.main}:"rgba(0,0,0,0)"}),(function(e){var t=e.theme;return"".concat(t.decorative.padding,"px")}),(function(e){var t=e.theme;return"".concat(t.decorative.borderRadius,"px")}));const s=function(e){return i.createElement(l,{onClick:function(){return e.callback()},active:e.active},i.createElement(u.Z,{text:e.text,secondary:!0}))}},4502:(e,t,n)=>{n.d(t,{ZP:()=>d});var r,a,o=n(7294),i=n(8804),c=n(9897);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=i.ZP.div(r||(r=l(["\n  display: flex;\n  justify-content: space-around;\n  font-weight: bold;\n  gap: ",";\n  padding: ",";\n  background: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")}),(function(e){return e.theme.colors.bgSecondary})),f=i.ZP.div(a||(a=l(["\n  padding: ",";\n  display: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}),(function(e){return e.active?"block":"none"}));const d=function(e){var t,n,r=(t=(0,o.useState)(e.active||0),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],i=r[1],l=e.tabs.map((function(t,n){return o.createElement(c.Z,{callback:function(){i(n),e.onChange&&e.onChange(n)},active:n===a,text:t.label})})),d=e.tabs.map((function(e,t){return o.createElement(f,{active:t===a},e.content)}));return o.createElement("div",null,o.createElement(s,null,l),d)}},737:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var r,a,o,i=n(7294),c=n(8804),u=n(6141),l=function(e){var t=e,n=t.publishedAt;if(t.videos&&(n=new Date(t.videos[0].item.publishedAt)>new Date(n||0)?t.videos[0].item.publishedAt:n),t.playlists){var r=t.playlists.map((function(e){return(null==e?void 0:e.item.videos)&&e.item.videos[0].item.publishedAt})).sort((function(e,t){return new Date(e)<new Date(t)?1:new Date(e)>new Date(t)?-1:0}))[0];n=new Date(r||0)>new Date(n||0)?r:n}return n||""},s=function(e){return function(t){return function(e,t){return"addition"===t?e.sort((function(e,t){return e.lastModified<t.lastModified?1:e.lastModified>t.lastModified?-1:0})):"date"===t?e.sort((function(e,t){return new Date(l(e))<new Date(l(t))?1:new Date(l(e))>new Date(l(t))?-1:0})):"title"===t?e.sort((function(e,t){return e.title>t.title?1:e.title<t.title?-1:0})):e}(function(e,t){return e.filter((function(e){return!t||e.title.toLowerCase().includes(t.toLowerCase())}))||[]}(function(e,t){return"short"===t?e.filter((function(e){return"video"===e.type&&e.duration&&e.duration<36e6}))||[]:"medium"===t?e.filter((function(e){return"video"===e.type&&e.duration&&e.duration>36e6&&e.duration<108e6}))||[]:"long"===t?e.filter((function(e){return"video"===e.type&&e.duration&&e.duration>108e6}))||[]:e}((r=t((n=e.type,function(e){var t=e("channel"===n?function(e,t){return t().saved.data.map((function(e){return e.item})).filter((function(e){return"channel"===e.type}))}:"playlist"===n?function(e){var t=e((0,u.g)());if(t)return t.filter((function(e){return"playlist"===e.type}))}:"video"===n?function(e,t){var n=e((0,u.g)());if(n)return n.filter((function(e){return"video"===e.type}))}:function(e,t){return t().saved.data.map((function(e){return e.item}))});return t||[]})),a=e.tag,r.filter((function(e){return!a||e.tags&&e.tags.includes(a)}))||[]),e.duration),e.q),e.order);var n,r,a}},f=n(6974),d=n(6896),m=n(7563),v=n(4129),p=n(3774),b=n(5288),g=n(6706),h=n(9753),y=n(4461),w=c.ZP.div(r||(a=["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ",";\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")}));const O=function(e){var t=(0,g.I0)()((0,h.Y)());return i.createElement(w,null,t&&t.map((function(t){return i.createElement(y.Z,{text:t,callback:function(){return e.callback(t)},active:t===e.active})})))};var j,E;function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Z=c.ZP.div(j||(j=P(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: ",";\n  margin: auto;\n  background: ",";\n  max-width: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}),(function(e){return e.theme.colors.bgSecondary}),(function(e){var t=e.theme;return"".concat(t.contentWidth,"rem")})),M=c.ZP.div(E||(E=P(["\n  display: flex;\n  gap: ",";\n\n  input {\n    width: 100%;\n  }\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}));const x=function(e){var t,n,r,a,o,c=(0,d.Z)(),u=S((0,i.useState)((null===(t=e.queries)||void 0===t?void 0:t.q)||null),2),l=u[0],s=u[1],f=S((0,i.useState)((null===(n=e.queries)||void 0===n?void 0:n.order)||"addition"),2),m=f[0],g=f[1],h=S((0,i.useState)((null===(r=e.queries)||void 0===r?void 0:r.type)||"all"),2),y=h[0],w=h[1],j=S((0,i.useState)((null===(a=e.queries)||void 0===a?void 0:a.videoDuration)||"any"),2),E=j[0],k=j[1],P=S((0,i.useState)((null===(o=e.queries)||void 0===o?void 0:o.tag)||null),2),x=P[0],A=P[1];return(0,i.useEffect)((function(){var t={order:m};l&&(t.q=l),y&&"all"!==y&&(t.type=y),e.isVideo&&(t.type="video"),E&&"any"!==E&&(t.duration=E),x&&(t.tag=x),e.callback(t)}),[l,m,y,E,x]),i.createElement(Z,null,i.createElement(M,null,i.createElement(v.Z,{value:l,callback:s,placeholder:c.formatMessage({id:"input"})})),i.createElement(p.ZP,{label:c.formatMessage({id:"filters"}),icon:"filters",dontHandleOutside:!0},i.createElement(b.ZP,{callback:function(e){return g(e.toLowerCase())},activeVal:c.formatMessage({id:m}),values:[c.formatMessage({id:"date"}),c.formatMessage({id:"addition"}),c.formatMessage({id:"title"})]}),e.isVideo?null:i.createElement(b.ZP,{callback:function(e){return w(e.toLowerCase())},activeVal:c.formatMessage({id:y}),values:[c.formatMessage({id:"all"}),c.formatMessage({id:"video"}),c.formatMessage({id:"playlist"}),c.formatMessage({id:"channel"})]}),i.createElement(b.ZP,{callback:function(e){return k(e.toLowerCase())},activeVal:c.formatMessage({id:E}),values:[c.formatMessage({id:"any"}),c.formatMessage({id:"long"}),c.formatMessage({id:"medium"}),c.formatMessage({id:"short"})]}),i.createElement(O,{callback:function(e){return A(e===x?null:e)},active:x})))};var A,z,C,D=n(5383),I=n(4857),q=n(4502);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var R=c.ZP.div(A||(A=$(["\n  background: ",";\n  padding-bottom: ",";\n  margin-bottom: ",";\n"])),(function(e){return e.theme.colors.bgSecondary}),(function(e){var t=e.theme;return"".concat(1.1*t.font.primary.size+2*t.gaps.small,"rem")}),(function(e){var t=e.theme;return"-".concat(1.1*t.font.primary.size+2*t.gaps.small,"rem")})),W=c.ZP.div(z||(z=$(["\n  max-width: ",";\n  width: 100%;\n  margin: auto;\n"])),(function(e){var t=e.theme;return"".concat(t.contentWidth,"rem")})),Y=c.ZP.div(C||(C=$(["\n  padding: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}));const H=function(){var e=(0,g.I0)(),t=(0,f.s0)(),n=(0,d.Z)(),r=m.parse(location.search),a=T((0,i.useState)("true"===r.isVideos),2),o=a[0],c=a[1],u=T((0,i.useState)(Object.fromEntries(Object.entries(r).filter((function(e){return"isVideos"!==e[0]&&"index"!==e[0]})))),2),l=u[0],v=u[1],p=T((0,i.useState)(null),2),b=p[0],h=p[1];(0,i.useEffect)((function(){var t=e(s(o?L(L({},l),{},{type:"video"}):l));h(t)}),[l,o]);var y=b?i.createElement(D.Z,{items:b.map((function(e){return{content:e,callback:function(){return t("/saved/".concat(e.type,"/").concat(e.id))}}})),emptyMessage:n.formatMessage({id:"emptyRes"})}):i.createElement(Y,null,i.createElement(I.Z,null)),w=[{label:n.formatMessage({id:"all"}),content:y},{label:n.formatMessage({id:"videos"}),content:y}];return i.createElement("div",null,i.createElement(R,null,i.createElement(x,{queries:l,callback:function(e){v(e),/^https:\/\/www.youtube.com\/watch\?v=/.test(e.q)&&t("/saved/video/".concat(e.q.split("=")[1].split("&")[0])),/^https:\/\/www.youtube.com\/playlist\?list=/.test(e.q)&&t("/saved/playlist/".concat(e.q.split("=")[1].split("&")[0]));var n=m.stringify(L(L({},e),{},{isVideos:o}));window.history.pushState("","","".concat(window.location.origin).concat(window.location.pathname,"?").concat(n)),h(null)},isVideo:o})),i.createElement(W,null,i.createElement(q.ZP,{tabs:w,onChange:function(e){c(!!e);var t=m.stringify(L(L({},l),{},{isVideos:!!e}));window.history.pushState("","","".concat(window.location.origin).concat(window.location.pathname,"?").concat(t))},active:o?1:0})))}},1751:(e,t,n)=>{n.d(t,{O:()=>r});var r=function(e){return"".concat(e/36e5>1?"".concat(Math.floor(e/36e5),":"):"").concat(e/6e4>1?"".concat(e/6e4<10?"0":"").concat(Math.floor(e%36e5/6e4),":"):"","".concat(e%6e4/1e3<10?"0":"").concat(Math.floor(e%6e4/1e3)))}},6141:(e,t,n)=>{n.d(t,{g:()=>r});var r=function(){return function(e,t){var n=t().saved.data.map((function(e){return e.item}));return n.forEach((function(e){e.videos&&e.videos.length>0&&e.videos.forEach((function(e){return n.push(e.item)})),e.playlists&&e.playlists.length>0&&e.playlists.forEach((function(e){n.push(e.item),e.item.videos&&e.item.videos.length>0&&e.item.videos.forEach((function(e){return n.push(e.item)}))}))})),n}}},9753:(e,t,n)=>{n.d(t,{Y:()=>o});var r=n(6141);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=function(){return function(e){var t=e((0,r.g)());if(!t&&!t.length)return[];var n=[];return t.forEach((function(e){return e.tags&&n.push.apply(n,function(e){if(Array.isArray(e))return a(e)}(t=e.tags)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var t})),n.length?Array.from(new Set(n)):[]}}}}]);