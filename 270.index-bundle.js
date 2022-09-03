"use strict";(self.webpackChunkcollectsounds=self.webpackChunkcollectsounds||[]).push([[270],{9033:(e,n,t)=>{t.d(n,{Z:()=>i});var r,a,c,l=t(7294),o=t(8804).ZP.svg(r||(a=["\n  stroke: ",";\n  fill: ",";\n  width: ",";\n  height: ",";\n"],c||(c=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(c)}}))),(function(e){return e.active?function(e){return e.theme.colors.main}:function(e){return e.theme.colors.font}}),(function(e){return e.active?function(e){return e.theme.colors.main}:function(e){return e.theme.colors.font}}),(function(e){var n=e.theme;return"".concat(n.iconSize,"rem")}),(function(e){var n=e.theme;return"".concat(n.iconSize,"rem")}));const i=function(e){return l.createElement(o,{active:e.active},l.createElement("use",{href:"".concat(window.location.origin,"/icons.svg#").concat(e.name)}))}},9784:(e,n,t)=>{t.d(n,{Z:()=>i});var r,a,c,l=t(7294),o=t(8804).ZP.p(r||(a=["\n  font-size: ",";\n  opacity: ",";\n  white-space: pre-line;\n"],c||(c=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(c)}}))),(function(e){return e.secondary?function(e){var n=e.theme;return"".concat(n.font.secondary.size,"rem")}:function(e){var n=e.theme;return"".concat(n.font.primary.size,"rem")}}),(function(e){return e.secondary?function(e){return e.theme.font.secondary.opacity}:function(e){return e.theme.font.primary.opacity}}));const i=function(e){return l.createElement(o,{secondary:e.secondary},e.text)}},9897:(e,n,t)=>{t.d(n,{Z:()=>m});var r,a,c,l=t(7294),o=t(8804),i=t(9033),u=t(9784),s=o.ZP.button(r||(a=["\n  display: flex;\n  gap: ",";\n  align-items: center;\n  border: none;\n  color: ",";\n"],c||(c=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(c)}}))),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")}),(function(e){return e.active?function(e){return e.theme.colors.main}:function(e){return e.theme.colors.font}}));const m=function(e){return l.createElement(s,{onClick:function(){return e.callback()},active:e.active},e.pic&&l.createElement(i.Z,{name:e.pic,active:e.active}),e.text&&l.createElement(u.Z,{text:e.text,secondary:e.secondary}))}},7270:(e,n,t)=>{t.r(n),t.d(n,{Content:()=>H,Nav:()=>J,default:()=>L});var r,a=t(7294),c=t(8804),l=t(6974),o=t(9897);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u,s,m=c.ZP.div(r||(u=["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  font-weight: bold;\n  gap: ",";\n  padding: ",";\n  background: ",";\n\n  @media "," {\n    flex-direction: row;\n    justify-content: space-around;\n  }\n"],s||(s=u.slice(0)),r=Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(s)}}))),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")}),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")}),(function(e){return e.theme.colors.bgSecondary}),(function(e){return e.theme.media.small}));const f=function(){var e,n,t=(e=(0,a.useState)("search"),n=2,function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,c=[],l=!0,o=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(c.push(r.value),!n||c.length!==n);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==t.return||t.return()}finally{if(o)throw a}}return c}}(e,n)||function(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=t[0],c=t[1],u=(0,l.s0)();return(0,a.useEffect)((function(){c(window.location.pathname.split("/")[1])}),[window.location.pathname]),a.createElement(m,null,a.createElement(o.Z,{callback:function(){return u("/search")},active:""===r||"search"===r,pic:"search"}),a.createElement(o.Z,{callback:function(){return u("/saved")},active:"saved"===r,pic:"favorite"}),a.createElement(o.Z,{callback:function(){return u("/queue")},active:"queue"===r,pic:"queue"}),a.createElement(o.Z,{callback:function(){return u("/settings")},active:"settings"===r,pic:"settings"}))};var d=t(655),v=t(6896),h=t(680);function p(e){var n=(0,v.Z)(),t=n.formatMessage,r=n.textComponent,c=void 0===r?a.Fragment:r,l=e.id,o=e.description,i=e.defaultMessage,u=e.values,s=e.children,m=e.tagName,f=void 0===m?c:m,d=t({id:l,description:o,defaultMessage:i},u,{ignoreTag:e.ignoreTag});return"function"==typeof s?s(Array.isArray(d)?d:[d]):f?a.createElement(f,null,a.Children.toArray(d)):a.createElement(a.Fragment,null,d)}p.displayName="FormattedMessage";var g=a.memo(p,(function(e,n){var t=e.values,r=(0,d._T)(e,["values"]),a=n.values,c=(0,d._T)(n,["values"]);return(0,h.wU)(a,t)&&(0,h.wU)(r,c)}));g.displayName="MemoizedFormattedMessage";const b=g;var E,y,Z,w=t(6706),z=t(1692),j=t(9784);function k(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O=c.ZP.div(E||(E=k(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: ",";\n  z-index: 100;\n"])),(function(e){return e.theme.error.backgroundColor})),x=c.ZP.div(y||(y=k(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: ",";\n  margin: ",";\n  padding: ",";\n  background: ",";\n  text-align: center;\n  color: ",";\n  border-radius: ",";\n  max-width: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")}),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")}),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")}),(function(e){return e.theme.colors.bgSecondary}),(function(e){return e.theme.colors.main}),(function(e){var n=e.theme;return"".concat(n.decorative.borderRadius,"px")}),(function(e){var n=e.theme;return"".concat(n.error.width,"rem")})),P=c.ZP.div(Z||(Z=k(["\n  padding-right: ",";\n  color: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")}),(function(e){return e.theme.colors.font}));const A=(0,w.$j)((function(e){return{message:e.errorMessage.message}}))((function(e){var n=(0,w.I0)();return e.message?a.createElement(O,{onClick:function(){return n((0,z.P)(""))}},a.createElement(x,null,a.createElement(j.Z,{text:e.message}),a.createElement(P,null,a.createElement(b,{id:"OK"})))):null}));var S=t(8221),C=t(4857),W=(0,a.lazy)((function(){return Promise.all([t.e(335),t.e(383),t.e(87),t.e(445)]).then(t.bind(t,3445))}));const M=function(){return a.createElement(S.Z,{file:"search",skeleton:a.createElement(C.Z,null)},a.createElement(W,null))};var q=(0,a.lazy)((function(){return Promise.all([t.e(335),t.e(773)]).then(t.bind(t,4773))}));const U=function(){var e=(0,l.UO)();return a.createElement(S.Z,{file:"video",skeleton:a.createElement(C.Z,null)},a.createElement(q,{id:e.id||null}))};var T=(0,a.lazy)((function(){return Promise.all([t.e(335),t.e(383),t.e(930)]).then(t.bind(t,1930))}));const F=function(){var e=(0,l.UO)();return a.createElement(S.Z,{file:"playlist",skeleton:a.createElement(C.Z,null)},a.createElement(T,{id:e.id||null}))};var I=(0,a.lazy)((function(){return Promise.all([t.e(335),t.e(383),t.e(85)]).then(t.bind(t,1085))}));const N=function(){var e=(0,l.UO)();return a.createElement(S.Z,{file:"channel",skeleton:a.createElement(C.Z,null)},a.createElement(I,{id:e.id||null}))};var _=(0,a.lazy)((function(){return Promise.all([t.e(383),t.e(87),t.e(880)]).then(t.bind(t,737))}));const $=function(){return a.createElement(S.Z,{file:"saved",skeleton:a.createElement(C.Z,null)},a.createElement(_,null))};var K=(0,a.lazy)((function(){return Promise.all([t.e(613),t.e(742)]).then(t.bind(t,2742))}));const R=function(){return a.createElement(S.Z,{file:"queue",skeleton:a.createElement(C.Z,null)},a.createElement(K,null))};var B,D;function G(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var H=c.ZP.div(B||(B=G(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  @media "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.media.small})),J=c.ZP.div(D||(D=G(["\n  padding: "," 0;\n  background: ",";\n  z-index: ",";\n  border-right: 1px solid ",";\n\n  @media "," {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-right: none;\n  }\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.smallest,"rem")}),(function(e){return e.theme.colors.bgSecondary}),(function(e){return e.theme.order.footer}),(function(e){return e.theme.colors.bg}),(function(e){return e.theme.media.small}));const L=function(){return a.createElement(H,null,a.createElement(J,null,a.createElement(f,null)),a.createElement(l.Z5,null,a.createElement(l.AW,{path:"/",element:a.createElement(M,null)}),a.createElement(l.AW,{path:"search/video/:id",element:a.createElement(U,null)}),a.createElement(l.AW,{path:"search/playlist/:id",element:a.createElement(F,null)}),a.createElement(l.AW,{path:"search/channel/:id",element:a.createElement(N,null)}),a.createElement(l.AW,{path:"search",element:a.createElement(M,null)}),a.createElement(l.AW,{path:"saved/video/:id",element:a.createElement(U,null)}),a.createElement(l.AW,{path:"saved/playlist/:id",element:a.createElement(F,null)}),a.createElement(l.AW,{path:"saved/channel/:id",element:a.createElement(N,null)}),a.createElement(l.AW,{path:"saved",element:a.createElement($,null)}),a.createElement(l.AW,{path:"queue",element:a.createElement(R,null)})),a.createElement(A,null))}},6896:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(4806),c=t(680);function l(){var e=r.useContext(a._y);return(0,c.lq)(e),e}}}]);