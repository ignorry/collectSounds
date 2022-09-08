"use strict";(self.webpackChunkcollectsounds=self.webpackChunkcollectsounds||[]).push([[85],{9542:(e,t,n)=>{n.d(t,{Z:()=>F});var r,a,o,c,i,l,u=n(7294),s=n(6896),f=n(6706),m=n(8804),d=n(9753),p=n(1088),y=n(8971),g=n(4129),b=n(9784),v=n(4461),h=n(9897);function j(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x=m.ZP.div(r||(r=k(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")})),S=m.ZP.div(a||(a=k(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")})),Z=m.ZP.div(o||(o=k(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")})),A=m.ZP.div(c||(c=k(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")})),P=m.ZP.div(i||(i=k(["\n  display: ",";\n  flex-direction: column;\n  gap: ",";\n"])),(function(e){return e.visible?"flex":"none"}),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")})),I=m.ZP.div(l||(l=k(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n  \n  input {\n    width: 100%;\n  }\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")}));const F=function(e){var t=(0,s.Z)(),n=(0,f.I0)(),r=n((0,d.Y)()),a=E((0,u.useState)(e.item.tags||[]),2),o=a[0],c=a[1],i=E((0,u.useState)(!1),2),l=i[0],m=i[1],w=E((0,u.useState)(""),2),O=w[0],k=w[1],F=function(t){var r={id:e.item.id,tags:[].concat(j(o),[t])};c([].concat(j(o),[t])),"video"===e.item.type&&n((0,p.HH)(r)),"playlist"===e.item.type&&n((0,p.CE)(r)),"channel"===e.item.type&&n((0,p.pW)(r))};return u.createElement(x,null,u.createElement(S,null,u.createElement(Z,null,u.createElement(b.Z,{text:"#"}),u.createElement(A,null,o&&o.map((function(t){return u.createElement(v.Z,{text:t,callback:function(){return function(t){var r={id:e.item.id,tags:o.filter((function(e){return e!==t}))};c(o.filter((function(e){return e!==t}))),"video"===e.item.type&&n((0,p.HH)(r)),"playlist"===e.item.type&&n((0,p.CE)(r)),"channel"===e.item.type&&n((0,p.pW)(r))}(t)},active:!0})})))),u.createElement(h.Z,{pic:"add",callback:function(){return m(!l)},active:l})),u.createElement(P,{visible:l},u.createElement(A,null,r&&r.filter((function(e){return o&&!o.includes(e)})).map((function(e){return u.createElement(v.Z,{text:e,callback:function(){return F(e)},active:!1})}))),u.createElement(I,null,u.createElement(g.Z,{value:O,callback:k,placeholder:t.formatMessage({id:"newTag"})}),u.createElement(y.Z,{callback:function(){F(O)},pic:"add"}))))}},5702:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(8804),o=n(6974),c=n(8971);const i=function(e){var t=(0,o.s0)(),n=(0,r.useCallback)((function(){e.callback&&e.callback(),t(-1)}),[t]);return r.createElement(c.Z,{callback:n,pic:"back"})};var l,u,s;function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=a.ZP.div(l||(l=f(["\n  position: absolute;\n  width: 100%;\n  background: ",";\n  padding: ",";\n  z-index: ",";\n"])),(function(e){return e.theme.colors.bgSecondary}),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem ").concat(t.gaps.small,"rem")}),(function(e){return e.theme.order.footer})),d=a.ZP.div(u||(u=f(["\n  max-width: ",";\n  margin: auto;\n"])),(function(e){var t=e.theme;return"".concat(t.contentWidth,"rem")})),p=a.ZP.div(s||(s=f(["\n  height: ",";\n"])),(function(e){return"".concat(e.height,"px")}));const y=function(e){var t=(0,r.useRef)();return r.createElement(r.Fragment,null,r.createElement(m,{ref:t},r.createElement(d,null,r.createElement(i,{callback:e.callback}))),r.createElement(p,{height:t.current?t.current.getBoundingClientRect().height:0}))}},4461:(e,t,n)=>{n.d(t,{Z:()=>s});var r,a,o,c=n(7294),i=n(8804),l=n(9784),u=i.ZP.button(r||(a=["\n  border: none;\n  color: ",";\n  background: ",";\n  padding: ",";\n  border-radius: ",";\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){return e.active?function(e){return e.theme,"black"}:function(e){return e.theme.colors.font}}),(function(e){return e.active?function(e){return e.theme.colors.main}:"rgba(0,0,0,0)"}),(function(e){var t=e.theme;return"".concat(t.decorative.padding,"px")}),(function(e){var t=e.theme;return"".concat(t.decorative.borderRadius,"px")}));const s=function(e){return c.createElement(u,{onClick:function(){return e.callback()},active:e.active},c.createElement(l.Z,{text:e.text,secondary:!0}))}},4502:(e,t,n)=>{n.d(t,{ZP:()=>m});var r,a,o=n(7294),c=n(8804),i=n(9897);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=c.ZP.div(r||(r=u(["\n  display: flex;\n  justify-content: space-around;\n  font-weight: bold;\n  gap: ",";\n  padding: ",";\n  background: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")}),(function(e){return e.theme.colors.bgSecondary})),f=c.ZP.div(a||(a=u(["\n  padding: ",";\n  display: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}),(function(e){return e.active?"block":"none"}));const m=function(e){var t,n,r=(t=(0,o.useState)(e.active||0),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],c=r[1],u=e.tabs.map((function(t,n){return o.createElement(i.Z,{callback:function(){c(n),e.onChange&&e.onChange(n)},active:n===a,text:t.label})})),m=e.tabs.map((function(e,t){return o.createElement(f,{active:t===a},e.content)}));return o.createElement("div",null,o.createElement(s,null,u),m)}},7597:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var r,a,o,c,i,l,u,s,f=n(7294),m=n(6706),d=n(8804),p=n(6896),y=n(1088),g=n(8268),b=n(1692),v=n(5702),h=n(6974),j=n(7563),E=n(9784),w=n(8971),O=n(4857),k=n(5383),x=n(4502),S=n(9542);function Z(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var A="/collectSounds/",P=d.ZP.div(r||(r=Z(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n"]))),I=d.ZP.div(a||(a=Z(["\n  background: ",";\n  padding-bottom: ",";\n  margin-bottom: ",";\n"])),(function(e){return e.theme.colors.bgSecondary}),(function(e){var t=e.theme;return"".concat(1.1*t.font.primary.size+2*t.gaps.small,"rem")}),(function(e){var t=e.theme;return"-".concat(1.1*t.font.primary.size+2*t.gaps.small,"rem")})),F=d.ZP.div(o||(o=Z(["\n  background: ",";\n  padding: ",";\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  max-width: ",";\n  margin: auto;\n"])),(function(e){return e.theme.colors.bgSecondary}),(function(e){var t=e.theme;return"0 ".concat(t.gaps.big,"rem ").concat(t.gaps.big,"rem")}),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}),(function(e){var t=e.theme;return"".concat(t.contentWidth,"rem")})),C=d.ZP.div(c||(c=Z(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")})),$=d.ZP.div(i||(i=Z(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")})),z=d.ZP.img(l||(l=Z(["\n  height: ",";\n  border-radius: 50%;\n  overflow: hidden;\n"])),(function(e){var t=e.theme;return"".concat(t.thumbnail.height,"rem")})),U=d.ZP.div(u||(u=Z(["\n  max-width: ",";\n  width: 100%;\n  margin: auto;\n"])),(function(e){var t=e.theme;return"".concat(t.contentWidth,"rem")})),N=d.ZP.div(s||(s=Z(["\n  padding: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}));const M=function(e){var t,n,r=(0,h.s0)(),a=(0,p.Z)(),o=e.channel.videos?f.createElement(k.Z,{items:e.channel.videos.map((function(e){return{content:e.item,callback:function(){return r("".concat(A).concat(window.location.pathname.split("/")[2],"/video/").concat(e.id))}}})),emptyMessage:a.formatMessage({id:"emptyVideos"})}):f.createElement(N,null,f.createElement(O.Z,null)),c=e.channel.playlists?f.createElement(k.Z,{items:e.channel.playlists.map((function(e){return{content:e.item,callback:function(){return r("".concat(A).concat(window.location.pathname.split("/")[2],"/playlist/").concat(e.id))}}})),emptyMessage:a.formatMessage({id:"emptyPlaylists"})}):f.createElement(N,null,f.createElement(O.Z,null)),i=[e.channel.description&&e.channel.description.length>0&&{label:a.formatMessage({id:"about"}),content:f.createElement(E.Z,{text:e.channel.description})},{label:a.formatMessage({id:"videos"}),content:o},{label:a.formatMessage({id:"playlists"}),content:c}];return f.createElement(P,null,f.createElement(I,null,f.createElement(F,null,f.createElement(C,null,f.createElement($,null,f.createElement(z,{src:(null===(t=e.channel.thumbnails.standard)||void 0===t?void 0:t.url)||(null===(n=e.channel.thumbnails.default)||void 0===n?void 0:n.url)||""}),f.createElement(E.Z,{text:e.channel.title})),f.createElement(w.Z,{callback:e.toggleSaved,pic:"playlist",active:e.saved})),f.createElement(S.Z,{item:e.channel}))),f.createElement(U,null,f.createElement(x.ZP,{tabs:i,onChange:function(e){var t=j.stringify({index:e});window.history.pushState("","","".concat(window.location.origin).concat(window.location.pathname,"?").concat(t))},active:+j.parse(location.search).index||0})))};var R;function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H,L,Y=d.ZP.div(R||(H=["\n  padding: ",";\n"],L||(L=H.slice(0)),R=Object.freeze(Object.defineProperties(H,{raw:{value:Object.freeze(L)}}))),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}));const V=(0,m.$j)((function(e){return{saved:e.saved}}))((function(e){var t=(0,m.I0)(),n=(0,p.Z)(),r=B((0,f.useState)(null),2),a=r[0],o=r[1],c=B((0,f.useState)(!1),2),i=c[0],l=c[1];(0,f.useEffect)((function(){if(e.id){var r=(0,y.mr)(e.saved,e.id);r?(l(!0),o(r)):(0,g.gD)(e.id).then((function(e){return e[0]?o(e[0]):null}))}else t((0,b.P)(n.formatMessage({id:"emptyMessage"})))}),[]),(0,f.useEffect)((function(){a&&!a.videos&&(0,g.DI)(a.id).then((function(e){i&&e&&e.forEach((function(e){t((0,y.Bv)({id:a.id,video:e}))})),o(D(D({},a),{},{videos:e.map((function(e){return{id:e.id,item:e}}))}))})),a&&!a.playlists&&(0,g.Tb)(a.id).then((function(e){i?e&&e.forEach((function(e){t((0,y.uW)({id:a.id,playlist:e}))})):o(D(D({},a),{},{playlists:e.map((function(e){return{id:e.id,item:e}}))}))}))}),[a]);var u=a?f.createElement(M,{channel:a,toggleSaved:function(){a&&t(i?(0,y.wz)([a.id]):(0,y.jX)([a])),l(!i)},saved:i}):f.createElement(Y,null,f.createElement(O.Z,null));return f.createElement(f.Fragment,null,f.createElement(v.Z,null),u)}))},9753:(e,t,n)=>{n.d(t,{Y:()=>o});var r=n(6141);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=function(){return function(e){var t=e((0,r.g)());if(!t&&!t.length)return[];var n=[];return t.forEach((function(e){return e.tags&&n.push.apply(n,function(e){if(Array.isArray(e))return a(e)}(t=e.tags)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var t})),n.length?Array.from(new Set(n)):[]}}},4020:e=>{var t="%[a-f0-9]{2}",n=new RegExp(t,"gi"),r=new RegExp("("+t+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=a(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var a=o(n[0]);a!==n[0]&&(t[n[0]]=a)}n=r.exec(e)}t["%C2"]="�";for(var c=Object.keys(t),i=0;i<c.length;i++){var l=c[i];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},2806:e=>{e.exports=function(e,t){for(var n={},r=Object.keys(e),a=Array.isArray(t),o=0;o<r.length;o++){var c=r[o],i=e[c];(a?-1!==t.indexOf(c):t(c,i,e))&&(n[c]=i)}return n}},7563:(e,t,n)=>{const r=n(610),a=n(4020),o=n(500),c=n(2806),i=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function s(e,t){return t.decode?a(e):e}function f(e){return Array.isArray(e)?e.sort():"object"==typeof e?f(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function m(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function d(e){const t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function y(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"colon-list-separator":return(e,n,r)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const a="string"==typeof n&&n.includes(e.arrayFormatSeparator),o="string"==typeof n&&!a&&s(n,e).includes(e.arrayFormatSeparator);n=o?s(n,e):n;const c=a||o?n.split(e.arrayFormatSeparator).map((t=>s(t,e))):null===n?n:s(n,e);r[t]=c};case"bracket-separator":return(t,n,r)=>{const a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!a)return void(r[t]=n?s(n,e):n);const o=null===n?[]:n.split(e.arrayFormatSeparator).map((t=>s(t,e)));void 0!==r[t]?r[t]=[].concat(r[t],o):r[t]=o};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const a of e.split("&")){if(""===a)continue;let[e,c]=o(t.decode?a.replace(/\+/g," "):a,"=");c=void 0===c?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?c:s(c,t),n(s(e,t),c,r)}for(const e of Object.keys(r)){const n=r[e];if("object"==typeof n&&null!==n)for(const e of Object.keys(n))n[e]=p(n[e],t);else r[e]=p(n,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce(((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=f(n):e[t]=n,e}),Object.create(null))}t.extract=d,t.parse=y,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const a=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[u(t,e),"[",a,"]"].join("")]:[...n,[u(t,e),"[",u(a,e),"]=",u(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[u(t,e),"[]"].join("")]:[...n,[u(t,e),"[]=",u(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[u(t,e),":list="].join("")]:[...n,[u(t,e),":list=",u(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(r,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?r:(a=null===a?"":a,0===r.length?[[u(n,e),t,u(a,e)].join("")]:[[r,u(a,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,u(t,e)]:[...n,[u(t,e),"=",u(r,e)].join("")]}}(t),a={};for(const t of Object.keys(e))n(t)||(a[t]=e[t]);const o=Object.keys(a);return!1!==t.sort&&o.sort(t.sort),o.map((n=>{const a=e[n];return void 0===a?"":null===a?u(n,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?u(n,t)+"[]":a.reduce(r(n),[]).join("&"):u(n,t)+"="+u(a,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,r]=o(e,"#");return Object.assign({url:n.split("?")[0]||"",query:y(d(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:s(r,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0,[i]:!0},n);const r=m(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),c=Object.assign(o,e.query);let l=t.stringify(c,n);l&&(l=`?${l}`);let s=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(s=`#${n[i]?u(e.fragmentIdentifier,n):e.fragmentIdentifier}`),`${r}${l}${s}`},t.pick=(e,n,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[i]:!1},r);const{url:a,query:o,fragmentIdentifier:l}=t.parseUrl(e,r);return t.stringifyUrl({url:a,query:c(o,n),fragmentIdentifier:l},r)},t.exclude=(e,n,r)=>{const a=Array.isArray(n)?e=>!n.includes(e):(e,t)=>!n(e,t);return t.pick(e,a,r)}},500:e=>{e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},610:e=>{e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);