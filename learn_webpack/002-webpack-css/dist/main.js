(()=>{var e={682:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".title {\n  border: 10px;\n  text-decoration: underline;\n}\n",""]);const i=o},63:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".title {\r\n  color: blue;\r\n  background-color: red;\r\n  font-size: 60px;\r\n}",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},695:e=>{"use strict";var t={};e.exports=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=r(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(t[f].references++,t[f].updater(p)):t.push({identifier:d,updater:o(p,n),references:1}),a.push(d)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=r(i[a]);t[s].references--}for(var c=n(e,o),u=0;u<i.length;u++){var l=r(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},466:e=>{e.exports={priceFromat:function(){return"$99.88"}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(379),t=r.n(e),n=r(795),o=r.n(n),i=r(695),a=r.n(i),s=r(216),c=r.n(s),u=r(63),l={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=a()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};l.domAPI=o(),l.insertStyleElement=c(),t()(u.Z,l),u.Z&&u.Z.locals&&u.Z.locals;var d=r(682),f={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=a()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};f.domAPI=o(),f.insertStyleElement=c(),t()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals;const p=document.createElement("div");p.className="title",p.innerHTML="hello world",document.body.appendChild(p);const{priceFromat:v}=r(466);console.log(30),console.log(v())})()})();