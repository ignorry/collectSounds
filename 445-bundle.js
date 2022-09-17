"use strict";(self.webpackChunkcollectsounds=self.webpackChunkcollectsounds||[]).push([[445],{3445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r,a,o=n(7294),i=n(8804),c=n(4427),l=n(6974),u=n(6896),s=n(7563),f=n(4129),d=n(3774),m=n(5288),v=n(8971);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h=i.ZP.div(r||(r=y(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: ",";\n  margin: auto;\n  background: ",";\n  max-width: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}),(function(e){return e.theme.colors.bgSecondary}),(function(e){var t=e.theme;return"".concat(t.contentWidth,"rem")})),b=i.ZP.div(a||(a=y(["\n  display: flex;\n  gap: ",";\n\n  input {\n    width: 100%;\n  }\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}));const w=function(e){var t,n,r,a,i=(0,u.Z)(),c=g((0,o.useState)((null===(t=e.queries)||void 0===t?void 0:t.q)||null),2),l=c[0],s=c[1],p=g((0,o.useState)((null===(n=e.queries)||void 0===n?void 0:n.order)||"relevance"),2),y=p[0],w=p[1],M=g((0,o.useState)((null===(r=e.queries)||void 0===r?void 0:r.type)||"all"),2),S=M[0],E=M[1],Z=g((0,o.useState)((null===(a=e.queries)||void 0===a?void 0:a.videoDuration)||"any"),2),k=Z[0],j=Z[1];return o.createElement(h,null,o.createElement(b,null,o.createElement(f.Z,{value:l,callback:s,placeholder:i.formatMessage({id:"input"})}),o.createElement(v.Z,{callback:function(){var t={order:y};l&&(t.q=l),S&&"all"!==S&&(t.type=S),k&&"any"!==k&&(t.videoDuration=k),e.callback(t)},pic:"search",active:!0})),o.createElement(d.ZP,{label:i.formatMessage({id:"filters"}),icon:"filters",dontHandleOutside:!0},o.createElement(m.ZP,{callback:w,activeVal:i.formatMessage({id:y}),values:[i.formatMessage({id:"date"}),i.formatMessage({id:"rating"}),i.formatMessage({id:"relevance"}),i.formatMessage({id:"title"}),i.formatMessage({id:"videoCount"}),i.formatMessage({id:"viewCount"})]}),o.createElement(m.ZP,{callback:E,activeVal:i.formatMessage({id:S}),values:[i.formatMessage({id:"all"}),i.formatMessage({id:"video"}),i.formatMessage({id:"playlist"}),i.formatMessage({id:"channel"})]}),o.createElement(m.ZP,{callback:j,activeVal:i.formatMessage({id:k}),values:[i.formatMessage({id:"any"}),i.formatMessage({id:"long"}),i.formatMessage({id:"medium"}),i.formatMessage({id:"short"})]})))};var M,S,E,Z=n(5383),k=n(4857);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var O="/collectSounds/",P=i.ZP.div(M||(M=q(["\n  background: ",";\n"])),(function(e){return e.theme.colors.bgSecondary})),x=i.ZP.div(S||(S=q(["\n  margin: auto;\n  max-width: ",";\n  padding: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.contentWidth,"rem")}),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")})),C=i.ZP.div(E||(E=q(["\n  padding: ",";\n"])),(function(e){var t=e.theme;return"".concat(t.gaps.big,"rem")}));const I=function(){var e=(0,l.s0)(),t=(0,u.Z)(),n=j((0,o.useState)(s.parse(location.search)),2),r=n[0],a=n[1],i=j((0,o.useState)(null),2),f=i[0],d=i[1];(0,o.useEffect)((function(){r&&(0,c.on)(r).then((function(e){return d(e.filter((function(e){return e})))}))}),[r]),(0,o.useEffect)((function(){r?(0,c.on)(r).then((function(e){return d(e.filter((function(e){return e})))})):(0,c.JS)().then((function(e){return d(e.filter((function(e){return e})))}))}),[]);var m=f?o.createElement(Z.Z,{items:f.map((function(t){return{content:t,callback:function(){return e("".concat(O,"search/").concat(t.type,"/").concat(t.id))}}})),emptyMessage:t.formatMessage({id:"emptyRes"})}):o.createElement(C,null,o.createElement(k.Z,null));return o.createElement("div",null,o.createElement(P,null,o.createElement(w,{queries:r,callback:function(t){a(t),/^https:\/\/www.youtube.com\/watch\?v=/.test(t.q)&&e("".concat(O,"search/video/").concat(t.q.split("=")[1].split("&")[0])),/^https:\/\/www.youtube.com\/playlist\?list=/.test(t.q)&&e("".concat(O,"search/playlist/").concat(t.q.split("=")[1].split("&")[0]));var n=s.stringify(t);window.history.pushState("","","".concat(window.location.origin).concat(window.location.pathname,"?").concat(n)),d(null)}})),o.createElement(x,null,m))}}}]);