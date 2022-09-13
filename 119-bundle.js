"use strict";(self.webpackChunkcollectsounds=self.webpackChunkcollectsounds||[]).push([[119],{9542:(e,n,t)=>{t.d(n,{Z:()=>C});var r,a,o,c,i,l,u=t(7294),m=t(6896),s=t(6706),f=t(8804),d=t(9753),h=t(1088),v=t(8971),p=t(4129),g=t(9784),b=t(4461),y=t(9897);function E(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||w(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,n){if(e){if("string"==typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Z(e,n):void 0}}function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function S(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var j=f.ZP.div(r||(r=S(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")})),P=f.ZP.div(a||(a=S(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")})),k=f.ZP.div(o||(o=S(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")})),O=f.ZP.div(c||(c=S(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")})),z=f.ZP.div(i||(i=S(["\n  display: ",";\n  flex-direction: column;\n  gap: ",";\n"])),(function(e){return e.visible?"flex":"none"}),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")})),A=f.ZP.div(l||(l=S(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n  \n  input {\n    width: 100%;\n  }\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")}));const C=function(e){var n=(0,m.Z)(),t=(0,s.I0)(),r=t((0,d.Y)()),a=x((0,u.useState)(e.item.tags||[]),2),o=a[0],c=a[1],i=x((0,u.useState)(!1),2),l=i[0],f=i[1],w=x((0,u.useState)(""),2),Z=w[0],S=w[1],C=function(n){var r={id:e.item.id,tags:[].concat(E(o),[n])};c([].concat(E(o),[n])),"video"===e.item.type&&t((0,h.HH)(r)),"playlist"===e.item.type&&t((0,h.CE)(r)),"channel"===e.item.type&&t((0,h.pW)(r))};return u.createElement(j,null,u.createElement(P,null,u.createElement(k,null,u.createElement(g.Z,{text:"#"}),u.createElement(O,null,o&&o.map((function(n){return u.createElement(b.Z,{text:n,callback:function(){return function(n){var r={id:e.item.id,tags:o.filter((function(e){return e!==n}))};c(o.filter((function(e){return e!==n}))),"video"===e.item.type&&t((0,h.HH)(r)),"playlist"===e.item.type&&t((0,h.CE)(r)),"channel"===e.item.type&&t((0,h.pW)(r))}(n)},active:!0})})))),u.createElement(y.Z,{pic:"add",callback:function(){return f(!l)},active:l})),u.createElement(z,{visible:l},u.createElement(O,null,r&&r.filter((function(e){return o&&!o.includes(e)})).map((function(e){return u.createElement(b.Z,{text:e,callback:function(){return C(e)},active:!1})}))),u.createElement(A,null,u.createElement(p.Z,{value:Z,callback:S,placeholder:n.formatMessage({id:"newTag"})}),u.createElement(v.Z,{callback:function(){C(Z)},pic:"add"}))))}},8971:(e,n,t)=>{t.d(n,{Z:()=>s});var r,a,o,c=t(7294),i=t(8804),l=t(9033),u=t(9784),m=i.ZP.button(r||(a=["\n  display: flex;\n  gap: ",";\n  align-items: center;\n  border: none;\n  color: ",";\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")}),(function(e){return e.theme.colors.font}));const s=function(e){return c.createElement(m,{onClick:function(){return e.callback()}},e.pic&&c.createElement(l.Z,{name:e.pic,active:e.active}),e.text&&c.createElement(u.Z,{text:e.text,secondary:e.secondary}))}},9033:(e,n,t)=>{t.d(n,{Z:()=>l});var r,a,o,c=t(7294),i=t(8804).ZP.svg(r||(a=["\n  stroke: ",";\n  fill: ",";\n  width: ",";\n  height: ",";\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){return e.active?function(e){return e.theme.colors.main}:function(e){return e.theme.colors.font}}),(function(e){return e.active?function(e){return e.theme.colors.main}:function(e){return e.theme.colors.font}}),(function(e){var n=e.theme;return"".concat(n.iconSize,"rem")}),(function(e){var n=e.theme;return"".concat(n.iconSize,"rem")}));const l=function(e){return c.createElement(i,{active:e.active},c.createElement("use",{href:"".concat(window.location.origin).concat("/collectSounds/","icons.svg#").concat(e.name)}))}},4129:(e,n,t)=>{t.d(n,{Z:()=>l});var r,a,o,c=t(7294),i=t(8804).ZP.input(r||(a=["\n  line-height: ",";\n  font-size: ",";\n  color: ",";\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  padding: ",";\n\n  &:focus {\n    border: 1px solid ",";\n  }\n\n  &::placeholder { /* WebKit, Blink, Edge */\n    font-size: ",";\n    opacity: ",";\n  }\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){var n=e.theme;return"".concat(n.iconSize,"rem")}),(function(e){var n=e.theme;return"".concat(n.font.secondary.size,"rem")}),(function(e){return e.theme.colors.font}),(function(e){return e.theme.colors.darkBg}),(function(e){return e.theme.colors.darkBg}),(function(e){var n=e.theme;return"".concat(n.decorative.borderRadius,"px")}),(function(e){var n=e.theme;return"".concat(n.gaps.smallest,"rem ").concat(n.gaps.small,"rem")}),(function(e){return e.theme.colors.main}),(function(e){var n=e.theme;return"".concat(n.font.secondary.size,"rem")}),(function(e){return e.theme.font.secondary.opacity}));const l=function(e){return c.createElement(i,{onChange:function(n){return e.callback(n.target.value)},value:e.value,placeholder:e.placeholder})}},9784:(e,n,t)=>{t.d(n,{Z:()=>l});var r,a,o,c=t(7294),i=t(8804).ZP.p(r||(a=["\n  font-size: ",";\n  opacity: ",";\n  white-space: pre-line;\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){return e.secondary?function(e){var n=e.theme;return"".concat(n.font.secondary.size,"rem")}:function(e){var n=e.theme;return"".concat(n.font.primary.size,"rem")}}),(function(e){return e.secondary?function(e){return e.theme.font.secondary.opacity}:function(e){return e.theme.font.primary.opacity}}));const l=function(e){return c.createElement(i,{secondary:e.secondary},e.text)}},3800:(e,n,t)=>{t.d(n,{Z:()=>l});var r,a,o,c=t(7294),i=t(8804).ZP.input(r||(a=["\n  overflow: hidden;\n  -webkit-appearance: none;\n  background-color: ",";\n\n  &::-webkit-slider-thumb {\n    width: ",";\n    -webkit-appearance: none;\n    height: ",";\n    cursor: pointer;\n    background: ",";\n    box-shadow: -5000px 0 0 5000px ",";\n  }\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){return e.theme.colors.darkBg}),(function(e){var n=e.theme;return"".concat(n.rangeSize,"rem")}),(function(e){var n=e.theme;return"".concat(n.rangeSize,"rem")}),(function(e){return e.theme.colors.main}),(function(e){return e.theme.colors.main}));const l=function(e){return c.createElement(i,{type:"range",onChange:function(n){return e.callback(n.target.value)},value:e.value,max:e.max||100})}},4461:(e,n,t)=>{t.d(n,{Z:()=>m});var r,a,o,c=t(7294),i=t(8804),l=t(9784),u=i.ZP.button(r||(a=["\n  border: none;\n  color: ",";\n  background: ",";\n  padding: ",";\n  border-radius: ",";\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){return e.active?function(e){return e.theme,"black"}:function(e){return e.theme.colors.font}}),(function(e){return e.active?function(e){return e.theme.colors.main}:"rgba(0,0,0,0)"}),(function(e){var n=e.theme;return"".concat(n.decorative.padding,"px")}),(function(e){var n=e.theme;return"".concat(n.decorative.borderRadius,"px")}));const m=function(e){return c.createElement(u,{onClick:function(){return e.callback()},active:e.active},c.createElement(l.Z,{text:e.text,secondary:!0}))}},9897:(e,n,t)=>{t.d(n,{Z:()=>s});var r,a,o,c=t(7294),i=t(8804),l=t(9033),u=t(9784),m=i.ZP.button(r||(a=["\n  display: flex;\n  gap: ",";\n  align-items: center;\n  border: none;\n  color: ",";\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}}))),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")}),(function(e){return e.active?function(e){return e.theme.colors.main}:function(e){return e.theme.colors.font}}));const s=function(e){return c.createElement(m,{onClick:function(){return e.callback()},active:e.active},e.pic&&c.createElement(l.Z,{name:e.pic,active:e.active}),e.text&&c.createElement(u.Z,{text:e.text,secondary:e.secondary}))}},119:(e,n,t)=>{t.r(n),t.d(n,{Content:()=>on,Nav:()=>cn,default:()=>ln});var r,a=t(7294),o=t(8804),c=t(6974),i=t(9897);function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u,m,s="/collectSounds/",f=o.ZP.div(r||(u=["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  font-weight: bold;\n  gap: ",";\n  padding: ",";\n  background: ",";\n\n  @media "," {\n    flex-direction: row;\n    justify-content: space-around;\n  }\n"],m||(m=u.slice(0)),r=Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(m)}}))),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")}),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")}),(function(e){return e.theme.colors.bgSecondary}),(function(e){return e.theme.media.small}));const d=function(){var e,n,t=(e=(0,a.useState)("search"),n=2,function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=t[0],o=t[1],u=(0,c.s0)();return(0,a.useEffect)((function(){o(window.location.pathname.split("/")[2])}),[window.location.pathname]),a.createElement(f,null,a.createElement(i.Z,{callback:function(){return u("".concat(s,"search"))},active:""===r||"search"===r,pic:"search"}),a.createElement(i.Z,{callback:function(){return u("".concat(s,"saved"))},active:"saved"===r,pic:"favorite"}),a.createElement(i.Z,{callback:function(){return u("".concat(s,"queue"))},active:"queue"===r,pic:"queue"}),a.createElement(i.Z,{callback:function(){return u("".concat(s,"settings"))},active:"settings"===r,pic:"settings"}))};var h=t(655),v=t(6896),p=t(680);function g(e){var n=(0,v.Z)(),t=n.formatMessage,r=n.textComponent,o=void 0===r?a.Fragment:r,c=e.id,i=e.description,l=e.defaultMessage,u=e.values,m=e.children,s=e.tagName,f=void 0===s?o:s,d=t({id:c,description:i,defaultMessage:l},u,{ignoreTag:e.ignoreTag});return"function"==typeof m?m(Array.isArray(d)?d:[d]):f?a.createElement(f,null,a.Children.toArray(d)):a.createElement(a.Fragment,null,d)}g.displayName="FormattedMessage";var b=a.memo(g,(function(e,n){var t=e.values,r=(0,h._T)(e,["values"]),a=n.values,o=(0,h._T)(n,["values"]);return(0,p.wU)(a,t)&&(0,p.wU)(r,o)}));b.displayName="MemoizedFormattedMessage";const y=b;var E,x,w,Z,S=t(6706),j=t(1692),P=t(9784);function k(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O=o.ZP.div(E||(E=k(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: ",";\n  z-index: 100;\n"])),(function(e){return e.theme.error.backgroundColor})),z=o.ZP.div(x||(x=k(["\n  width: 100%;\n"]))),A=o.ZP.div(w||(w=k(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: ",";\n  margin: ",";\n  padding: ",";\n  background: ",";\n  text-align: center;\n  color: ",";\n  border-radius: ",";\n  max-width: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")}),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")}),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")}),(function(e){return e.theme.colors.bgSecondary}),(function(e){return e.theme.colors.main}),(function(e){var n=e.theme;return"".concat(n.decorative.borderRadius,"px")}),(function(e){var n=e.theme;return"".concat(n.error.width,"rem")})),C=o.ZP.div(Z||(Z=k(["\n  padding-right: ",";\n  color: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem")}),(function(e){return e.theme.colors.font}));const I=(0,S.$j)((function(e){return{message:e.errorMessage.message}}))((function(e){var n=(0,S.I0)();return e.message?a.createElement(O,{onClick:function(){return n((0,j.P)(""))}},a.createElement(A,null,a.createElement(z,null,a.createElement(P.Z,{text:e.message})),a.createElement(C,null,a.createElement(y,{id:"OK"})))):null}));var W,M,T,R,U,B,q,F,H,Y,$,N,L=t(1088),G=t(1751),_=t(3800),D=t(8971),K=t(9542);function J(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Q(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var V=o.ZP.div(W||(W=Q(["\n  height: 100%;\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  color: ",";\n  text-align: left;\n  transition: opacity ","ms ease-in-out;\n"])),(function(e){return e.theme.colors.bgSecondary}),(function(e){var n=e.theme;return"".concat(n.player.gap,"rem")}),(function(e){return e.theme.colors.font}),(function(e){return e.theme.durations.animation})),X=o.ZP.div(M||(M=Q(["\n  margin: auto;\n  max-width: ",";\n  width: 100%;\n  opacity: 0;\n  height: 0;\n\n  @media "," {\n    height: auto;\n    opacity: 1;\n    padding: ",";\n  }\n"])),(function(e){var n=e.theme;return"".concat(n.contentWidth,"rem")}),(function(e){return e.theme.media.small}),(function(e){var n=e.theme;return"".concat(n.gaps.big,"rem ").concat(n.gaps.big,"rem 0")})),ee=o.ZP.div(T||(T=Q(["\n  margin: auto;\n  max-width: ",";\n  width: 100%;\n  padding: ",";\n  \n  @media "," {\n    padding: 0;\n  }\n"])),(function(e){var n=e.theme;return"".concat(n.contentWidth,"rem")}),(function(e){var n=e.theme;return"0 ".concat(n.gaps.big,"rem")}),(function(e){return e.theme.media.small})),ne=o.ZP.div(R||(R=Q(["\n  height: ",";\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n"])),(function(e){return function(n){var t=n.theme;return"".concat(t.thumbnail.height/t.thumbnail.width*e.realWidth,"px")}})),te=o.ZP.img(U||(U=Q(["\n  width: 100%;\n"]))),re=o.ZP.div(B||(B=Q(["\n  width: 100%;\n\n  input {\n    width: 100%;\n  };\n"]))),ae=o.ZP.div(q||(q=Q(["\n  display: flex;\n  justify-content: space-between;\n"]))),oe=o.ZP.div(F||(F=Q(["\n  max-width: ",";\n  width: 100%;\n  margin: auto;\n  flex-grow: 2;\n  padding: ",";\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.contentWidth,"rem")}),(function(e){var n=e.theme;return"0 ".concat(n.player.sideGap,"rem ").concat(n.gaps.big,"rem")}),(function(e){var n=e.theme;return"".concat(n.player.infoGap,"rem")})),ce=o.ZP.div(H||(H=Q(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")})),ie=o.ZP.div(Y||(Y=Q(["\n  flex-grow: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]))),le=o.ZP.div($||($=Q(["\n  flex-grow: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]))),ue=o.ZP.div(N||(N=Q(["\n  display: flex;\n  justify-content: center;\n  gap: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.player.buttonsGap,"rem")}));const me=function(e){var n,t,r,o,c=(0,a.useRef)(),i=(r=(0,a.useState)(0),o=2,function(e){if(Array.isArray(e))return e}(r)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw a}}return o}}(r,o)||function(e,n){if(e){if("string"==typeof e)return J(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?J(e,n):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],u=i[1];return(0,a.useEffect)((function(){u(c.current?c.current.getBoundingClientRect().width:0)}),[c]),a.createElement(V,null,a.createElement(X,null,a.createElement(D.Z,{callback:e.onCollapse,pic:"collapse"})),a.createElement(ee,null,a.createElement(ne,{realWidth:l,ref:c},a.createElement(te,{src:(null===(n=e.video.thumbnails.maxres)||void 0===n?void 0:n.url)||(null===(t=e.video.thumbnails.default)||void 0===t?void 0:t.url)||""}))),a.createElement(oe,null,a.createElement(ce,null,a.createElement(P.Z,{text:e.video.title}),a.createElement(P.Z,{text:e.video.channelTitle,secondary:!0}),a.createElement(K.Z,{item:e.video})),a.createElement(ie,null,a.createElement(re,null,a.createElement(_.Z,{value:e.video.passed||0,max:e.video.duration,callback:e.onRange}),a.createElement(ae,null,a.createElement(P.Z,{text:(0,G.O)(e.video.passed),secondary:!0}),a.createElement(P.Z,{text:(0,G.O)(e.video.duration),secondary:!0}))),a.createElement(le,null,a.createElement(ue,null,a.createElement(D.Z,{callback:function(){},pic:"scroll-back"}),a.createElement(D.Z,{callback:function(){},pic:"previous"}),a.createElement(D.Z,{callback:function(){},pic:"pause"}),a.createElement(D.Z,{callback:function(){},pic:"next"}),a.createElement(D.Z,{callback:function(){},pic:"scroll-further"}))))))};var se,fe,de,he,ve,pe,ge;function be(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var ye=o.ZP.div(se||(se=be(["\n  display: flex;\n  background: ",";\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  gap: ",";\n  padding: ",";\n  transition: opacity ","ms ease-in-out;\n"])),(function(e){return e.theme.colors.bgSecondary}),(function(e){var n=e.theme;return"".concat(n.gaps.smallest,"rem")}),(function(e){var n=e.theme;return"0 ".concat(n.gaps.big,"rem 0 0")}),(function(e){return e.theme.durations.animation})),Ee=o.ZP.button(fe||(fe=be(["\n  color: ",";\n  display: flex;\n  align-items: center;\n  gap: ",";\n  border: none;\n"])),(function(e){return e.theme.colors.font}),(function(e){var n=e.theme;return"".concat(n.gaps.small,"rem")})),xe=o.ZP.div(de||(de=be(["\n  height: ",";\n  width: ",";\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n"])),(function(e){var n=e.theme;return"".concat(n.player.thumbHeight,"rem")}),(function(e){var n=e.theme;return"".concat(n.player.thumbWidth,"rem")})),we=o.ZP.img(he||(he=be(["\n  width: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.player.thumbWidth,"rem")})),Ze=o.ZP.div(ve||(ve=be(["\n  position: absolute;\n  width: 100%;\n  bottom: ",";\n\n  input {\n    width: 100%;\n  };\n"])),(function(e){var n=e.theme;return"-".concat(n.rangeSize,"rem")})),Se=o.ZP.div(pe||(pe=be(["\n  max-height: ",";\n  overflow: hidden;\n"])),(function(e){var n=e.theme;return"".concat(n.font.primary.size,"rem")})),je=o.ZP.div(ge||(ge=be(["\n  transform: ",";\n"])),(function(e){var n=e.theme;return"scale(".concat(n.player.buttonScale,")")}));const Pe=function(e){var n,t;return a.createElement(ye,null,a.createElement(Ee,null,a.createElement(xe,null,a.createElement(we,{src:(null===(n=e.video.thumbnails.maxres)||void 0===n?void 0:n.url)||(null===(t=e.video.thumbnails.default)||void 0===t?void 0:t.url)||""})),a.createElement(Se,null,a.createElement(P.Z,{text:e.video.title}))),a.createElement(je,null,a.createElement(D.Z,{pic:"pause",callback:e.onPause})),a.createElement(Ze,null,a.createElement(_.Z,{value:e.video.passed,max:e.video.duration})))};var ke,Oe,ze;function Ae(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return Ce(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ce(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Ie(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var We=o.ZP.div(ke||(ke=Ie(["\n  position: initial;\n  z-index: ",";\n  border-right: 1px solid ",";\n  margin-left: -1px;\n\n  @media "," {\n    position: absolute;\n    z-index: ",";\n    top: ",";\n    right: 0;\n    bottom: ",";\n    left: 0;\n    border-right: none;\n    margin-left: 0;\n\n    transition: top ","ms ease-in-out;\n  }\n"])),(function(e){return e.theme.order.footer}),(function(e){return e.theme.colors.bg}),(function(e){return e.theme.media.small}),(function(e){return e.theme.order.player}),(function(e){return"".concat(e.shift,"px")}),(function(e){var n=e.theme;return"".concat(n.iconSize+2*n.gaps.small,"rem")}),(function(e){return e.animate?function(e){return e.theme.durations.animation}:0})),Me=o.ZP.button(Oe||(Oe=Ie(["\n  display: none;\n\n  @media "," {\n    display: block;\n    position: absolute;\n    height: ",";\n    width: 100%;\n    border: none;\n    z-index: 2;\n\n    display: ",";\n    opacity: ",";\n  }\n"])),(function(e){return e.theme.media.small}),(function(e){var n=e.theme;return"".concat(n.player.thumbHeight,"rem")}),(function(e){return 0===e.opacity?"none":"block"}),(function(e){return e.opacity})),Te=o.ZP.button(ze||(ze=Ie(["\n  border: none;\n  height: 100%;\n\n  @media "," {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: ","px;\n    opacity: ",";\n  }\n"])),(function(e){return e.theme.media.small}),(function(e){return e.height}),(function(e){return e.opacity}));const Re=function(e){var n=(0,a.useRef)(),t=(0,a.useRef)(),r=Ae((0,a.useState)(0),2),o=r[0],c=r[1],i=Ae((0,a.useState)(0),2),l=i[0],u=i[1],m=Ae((0,a.useState)(0),2),s=m[0],f=m[1],d=Ae((0,a.useState)(screen.height),2),h=d[0],v=d[1],p=Ae((0,a.useState)(null),2),g=p[0],b=p[1],y=Ae((0,a.useState)(null),2),E=y[0],x=y[1],w=Ae((0,a.useState)(null),2),Z=w[0],S=w[1],j=Ae((0,a.useState)(null),2),P=j[0],k=j[1],O=Ae((0,a.useState)(null),2),z=O[0],A=O[1],C=Ae((0,a.useState)(null),2),I=C[0],W=C[1],M=Ae((0,a.useState)(screen.height),2),T=M[0],R=M[1];(0,a.useEffect)((function(){c(e.navElem.current?e.navElem.current.getBoundingClientRect().height:0)}),[e.navElem]),(0,a.useEffect)((function(){u(t.current?t.current.getBoundingClientRect().height:0)}),[t]),(0,a.useEffect)((function(){f(window.innerHeight)}),[window.innerHeight]),(0,a.useEffect)((function(){o&&l&&s&&(v(s-o-l),R(s-o-l))}),[o,l,s]),(0,a.useEffect)((function(){var e=function(e){x(null),b(e)},t=function(e){k(e),A((new Date).getTime())},r=function(e){b(null),S(null),x(e),W((new Date).getTime())};n&&n.current&&(n.current.addEventListener("mousedown",(function(n){return e(n.clientY)})),n.current.addEventListener("touchstart",(function(n){return e(n.touches[0].clientY)})),n.current.addEventListener("mousemove",(function(e){return t(e.clientY)})),n.current.addEventListener("touchmove",(function(e){return t(e.touches[0].clientY)})),n.current.addEventListener("mouseup",(function(e){return r(e.clientY)})),n.current.addEventListener("touchend",(function(e){return r(e.changedTouches[0].clientY)})))}),[n.current]),(0,a.useEffect)((function(){var e=z&&I&&E&&P?Math.abs(E-P)/(I-z):0;if(P&&g)if(null===Z)S(T);else{var n=P-g;Z+n>0&&R(Z+n)}else P&&E&&e>.5?(E>P&&R(h),E<P&&R(0),k(null),b(null),x(null)):0===T&&T===h||R(T<h/2?0:h)}),[P,g,E]);var U=T/h*2;return a.createElement(We,{shift:T,animate:!g,ref:n},a.createElement(Me,{ref:t,onClick:function(){R(0)},opacity:U},a.createElement(Pe,{video:e.video,onPause:e.onPause})),a.createElement(Te,{height:s&&o?s-o:0,opacity:1},a.createElement(me,{video:e.video,onCollapse:function(){R(h)},onRange:e.onRange,onScrollBack:e.onScrollBack,onScrollFurther:e.onScrollFurther,onPause:e.onPause,onPrevious:e.onPrevious,onNext:e.onNext})))};function Ue(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const Be=(0,S.$j)((function(e){return{saved:e.saved,queue:e.queue.data,current:e.queue.current}}))((function(e){(0,S.I0)();var n,t,r=(n=(0,a.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw a}}return o}}(n,t)||function(e,n){if(e){if("string"==typeof e)return Ue(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ue(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];return(0,a.useEffect)((function(){if(e.current){var n=(0,L.om)(e.saved,e.current);n&&c(n)}}),[e.current]),a.createElement(a.Fragment,null,o?a.createElement(Re,{video:o,navElem:e.navElem,onRange:function(){},onScrollBack:function(){},onPrevious:function(){},onPause:function(){},onNext:function(){},onScrollFurther:function(){}}):null)}));var qe=t(8221),Fe=t(4857),He=(0,a.lazy)((function(){return Promise.all([t.e(383),t.e(87),t.e(445)]).then(t.bind(t,3445))}));const Ye=function(){return a.createElement(qe.Z,{file:"search",skeleton:a.createElement(Fe.Z,null)},a.createElement(He,null))};var $e=(0,a.lazy)((function(){return t.e(773).then(t.bind(t,4773))}));const Ne=function(){var e=(0,c.UO)();return a.createElement(qe.Z,{file:"video",skeleton:a.createElement(Fe.Z,null)},a.createElement($e,{id:e.id||null}))};var Le=(0,a.lazy)((function(){return Promise.all([t.e(383),t.e(930)]).then(t.bind(t,1930))}));const Ge=function(){var e=(0,c.UO)();return a.createElement(qe.Z,{file:"playlist",skeleton:a.createElement(Fe.Z,null)},a.createElement(Le,{id:e.id||null}))};var _e=(0,a.lazy)((function(){return Promise.all([t.e(383),t.e(85)]).then(t.bind(t,7597))}));const De=function(){var e=(0,c.UO)();return a.createElement(qe.Z,{file:"channel",skeleton:a.createElement(Fe.Z,null)},a.createElement(_e,{id:e.id||null}))};var Ke=(0,a.lazy)((function(){return Promise.all([t.e(383),t.e(87),t.e(737)]).then(t.bind(t,737))}));const Je=function(){return a.createElement(qe.Z,{file:"saved",skeleton:a.createElement(Fe.Z,null)},a.createElement(Ke,null))};var Qe=(0,a.lazy)((function(){return Promise.all([t.e(613),t.e(742)]).then(t.bind(t,2742))}));const Ve=function(){return a.createElement(qe.Z,{file:"queue",skeleton:a.createElement(Fe.Z,null)},a.createElement(Qe,null))};var Xe=(0,a.lazy)((function(){return Promise.all([t.e(623),t.e(317)]).then(t.bind(t,1087))}));const en=function(){return a.createElement(qe.Z,{file:"settings",skeleton:a.createElement(Fe.Z,null)},a.createElement(Xe,null))};var nn,tn;function rn(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var an="/collectSounds/",on=o.ZP.div(nn||(nn=rn(["\n  overflow: hidden;\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  @media "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.media.small})),cn=o.ZP.div(tn||(tn=rn(["\n  padding: "," 0;\n  background: ",";\n  z-index: ",";\n  border-right: 1px solid ",";\n\n  @media "," {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-right: none;\n  }\n"])),(function(e){var n=e.theme;return"".concat(n.gaps.smallest,"rem")}),(function(e){return e.theme.colors.bgSecondary}),(function(e){return e.theme.order.footer}),(function(e){return e.theme.colors.bg}),(function(e){return e.theme.media.small}));const ln=function(){var e=(0,a.useRef)();return a.createElement(on,null,a.createElement(cn,{ref:e},a.createElement(d,null)),a.createElement(Be,{navElem:e}),a.createElement(c.Z5,null,a.createElement(c.AW,{path:"".concat(an),element:a.createElement(Ye,null)}),a.createElement(c.AW,{path:"".concat(an,"search/video/:id"),element:a.createElement(Ne,null)}),a.createElement(c.AW,{path:"".concat(an,"search/playlist/:id"),element:a.createElement(Ge,null)}),a.createElement(c.AW,{path:"".concat(an,"search/channel/:id"),element:a.createElement(De,null)}),a.createElement(c.AW,{path:"".concat(an,"search"),element:a.createElement(Ye,null)}),a.createElement(c.AW,{path:"".concat(an,"saved/video/:id"),element:a.createElement(Ne,null)}),a.createElement(c.AW,{path:"".concat(an,"saved/playlist/:id"),element:a.createElement(Ge,null)}),a.createElement(c.AW,{path:"".concat(an,"saved/channel/:id"),element:a.createElement(De,null)}),a.createElement(c.AW,{path:"".concat(an,"saved"),element:a.createElement(Je,null)}),a.createElement(c.AW,{path:"".concat(an,"queue"),element:a.createElement(Ve,null)}),a.createElement(c.AW,{path:"".concat(an,"settings"),element:a.createElement(en,null)})),a.createElement(I,null))}},1751:(e,n,t)=>{t.d(n,{O:()=>r});var r=function(e){return"".concat(e/36e5>1?"".concat(Math.floor(e/36e5),":"):"").concat(e/6e4>1?"".concat(e/6e4<10?"0":"").concat(Math.floor(e%36e5/6e4),":"):"","".concat(e%6e4/1e3<10?"0":"").concat(Math.floor(e%6e4/1e3)))}},9753:(e,n,t)=>{t.d(n,{Y:()=>o});var r=t(6141);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var o=function(){return function(e){var n=e((0,r.g)());if(!n&&!n.length)return[];var t=[];return n.forEach((function(e){return e.tags&&t.push.apply(t,function(e){if(Array.isArray(e))return a(e)}(n=e.tags)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var n})),t.length?Array.from(new Set(t)):[]}}},6896:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(7294),a=t(4806),o=t(680);function c(){var e=r.useContext(a._y);return(0,o.lq)(e),e}}}]);