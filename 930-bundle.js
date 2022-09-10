"use strict";(self.webpackChunkcollectsounds=self.webpackChunkcollectsounds||[]).push([[930],{3774:(e,t,n)=>{n.d(t,{ZP:()=>m});var r,a,c=n(7294),i=n(8804),l=n(8017),o=n(9897);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=i.ZP.div(r||(r=s(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: ",";\n  text-align: center;\n"])),(function(e){return e.display?function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")}:0}),(function(e){var t=e.theme;return"".concat(t.decorative.padding,"px")})),d=i.ZP.div(a||(a=s(["\n  height: ",";\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding-top: ",";\n"])),(function(e){return e.display?"auto":0}),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")}),(function(e){return e.display?function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")}:0}));const m=function(e){var t,n,r=(t=(0,c.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],i=r[1],s=(0,c.useRef)();return(0,c.useEffect)((function(){e.dontHandleOutside||(0,l.x)(s.current,(function(){return i(!1)}))}),[]),c.createElement(f,{display:a,ref:s},c.createElement(o.Z,{pic:e.icon,text:e.label,callback:function(){return i(!a)},active:a}),c.createElement(d,{display:a},e.children))}},5702:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7294),a=n(8804),c=n(6974),i=n(8971);const l=function(e){var t=(0,c.s0)(),n=(0,r.useCallback)((function(){e.callback&&e.callback(),t(-1)}),[t]);return r.createElement(i.Z,{callback:n,pic:"back"})};var o,u,s;function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=a.ZP.div(o||(o=f(["\n  position: absolute;\n  width: 100%;\n  background: ",";\n  padding: ",";\n  z-index: ",";\n"])),(function(e){return e.theme.colors.bgSecondary}),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem ").concat(t.gaps.small,"rem")}),(function(e){return e.theme.order.header})),m=a.ZP.div(u||(u=f(["\n  max-width: ",";\n  margin: auto;\n"])),(function(e){var t=e.theme;return"".concat(t.contentWidth,"rem")})),p=a.ZP.div(s||(s=f(["\n  height: ",";\n"])),(function(e){return"".concat(e.height,"px")}));const v=function(e){var t=(0,r.useRef)();return r.createElement(r.Fragment,null,r.createElement(d,{ref:t},r.createElement(m,null,r.createElement(l,{callback:e.callback}))),r.createElement(p,{height:t.current?t.current.getBoundingClientRect().height:0}))}},1930:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var r,a,c,i,l,o,u,s=n(7294),f=n(6706),d=n(8804),m=n(6896),p=n(1088),v=n(8268),g=n(1692),b=n(5702),y=n(9784),h=n(8971),E=n(3774),O=n(4857),j=n(5383),w=n(6974),P=n(9542);function Z(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x=d.ZP.div(r||(r=Z(["\n  display: flex;\n  flex-direction: column;\n"]))),S=d.ZP.div(a||(a=Z(["\n  background: ",";\n"])),(function(e){return e.theme.colors.bgSecondary})),k=d.ZP.div(c||(c=Z(["\n  margin: auto;\n  max-width: ",";\n  width: 100%;\n  padding: ",";\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.contentWidth,"rem")}),(function(e){var t=e.theme;return"0 ".concat(t.gaps.big,"rem ").concat(t.gaps.big,"rem")}),(function(e){var t=e.theme;return"".concat(t.gaps.small,"rem")})),A=d.ZP.div(i||(i=Z(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: ",";\n"])),(function(e){var t=e.theme;return"-".concat(t.gaps.small,"rem")})),z=d.ZP.div(l||(l=Z(["\n  text-align: left;\n"]))),I=d.ZP.div(o||(o=Z(["\n  margin: auto;\n  max-width: ",";\n  width: 100%;\n  padding: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.contentWidth,"rem")}),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")})),M=d.ZP.div(u||(u=Z(["\n  padding: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}));const C=function(e){var t=(0,w.s0)(),n=(0,m.Z)(),r=e.playlist.videos?s.createElement(j.Z,{items:e.playlist.videos.map((function(e){return{content:e.item,callback:function(){return t("".concat("/collectSounds/").concat(window.location.pathname.split("/")[2],"/video/").concat(e.id))}}})),emptyMessage:n.formatMessage({id:"emptyList"})}):s.createElement(M,null,s.createElement(O.Z,null));return s.createElement(x,null,s.createElement(S,null,s.createElement(k,null,s.createElement(y.Z,{text:e.playlist.title}),s.createElement(A,null,s.createElement(y.Z,{text:e.playlist.channelTitle}),s.createElement(h.Z,{callback:e.toggleSaved,pic:"playlist",active:e.saved})),s.createElement(P.Z,{item:e.playlist}),e.playlist.description&&e.playlist.description.length>0?s.createElement(E.ZP,{label:n.formatMessage({id:"description"})},s.createElement(z,null,s.createElement(y.Z,{text:e.playlist.description}))):null)),s.createElement(I,null,r))};var D;function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F,L,U=d.ZP.div(D||(F=["\n  padding: ",";\n"],L||(L=F.slice(0)),D=Object.freeze(Object.defineProperties(F,{raw:{value:Object.freeze(L)}}))),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}));const H=(0,f.$j)((function(e){return{saved:e.saved}}))((function(e){var t=(0,f.I0)(),n=(0,m.Z)(),r=$((0,s.useState)(null),2),a=r[0],c=r[1],i=$((0,s.useState)(!1),2),l=i[0],o=i[1];(0,s.useEffect)((function(){if(e.id){var r=(0,p.A5)(e.saved,e.id);r?(o(!0),c(r)):(0,v.hT)(e.id).then((function(e){return e[0]?c(e[0]):null}))}else t((0,g.P)(n.formatMessage({id:"emptyMessage"})))}),[]),(0,s.useEffect)((function(){a&&!a.videos&&(0,v.bo)(a.id).then((function(e){l&&e&&e.forEach((function(e){t((0,p.Bv)({id:a.id,video:e}))})),c(R(R({},a),{},{videos:e.map((function(e){return{id:e.id,item:e}}))}))}))}),[a]);var u=a?s.createElement(C,{playlist:a,toggleSaved:function(){a&&t(l?(0,p.wz)([a.id]):(0,p.jX)([a])),o(!l)},saved:l}):s.createElement(U,null,s.createElement(O.Z,null));return s.createElement(s.Fragment,null,s.createElement(b.Z,null),u)}))},8017:(e,t,n)=>{n.d(t,{x:()=>r});var r=function(e,t){return document.addEventListener("click",(function(n){var r=n.target;r===e||e.contains(r)||t()}))}}}]);