/*!
* Vue Material v0.7.2.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=458)})({0:function(e,t){e.exports=function(e,t,n,r,o){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var u="function"==typeof a?a.options:a;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,l=d?u.render:u.beforeCreate;d?u.render=function(e,t){return c.call(t),l(e,t)}:u.beforeCreate=l?[].concat(l,c):[c]}return{esModule:i,exports:a,options:u}}},155:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(65),i=r(o);t.default={name:"md-image",props:{mdSrc:String},data:function(){return{loaded:!1,applyBlack:!0,imageElement:null}},watch:{mdSrc:function(){this.createImage()}},computed:{classes:function(){return{"md-loaded":this.loaded,"md-black-output":this.applyBlack}}},methods:{analyzeLightness:function(e){var t=this,n=function(){t.loaded=!0};(0,i.default)(e,(function(e){var r=256,o=(100*Math.abs(r-e)/r+15)/100;o>=.7&&(t.applyBlack=!0),t.$nextTick(n)}),n)},createImage:function(){this.loaded=!1,this.applyBlack=!1,this.imageElement=null,this.mdSrc&&(this.imageElement=document.createElement("img"),this.imageElement.crossOrigin="",this.imageElement.src=this.mdSrc,this.analyzeLightness(this.imageElement))}},created:function(){this.createImage()}},e.exports=t.default},261:function(e,t){},275:function(e,t){e.exports=""},324:function(e,t,n){function r(e){n(261)}var o=n(0)(n(155),n(438),r,null,null);e.exports=o.exports},438:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{staticClass:"md-image",class:e.classes,attrs:{src:e.mdSrc}})},staticRenderFns:[]}},458:function(e,t,n){e.exports=n(92)},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){var r=document.createElement("canvas");e.crossOrigin="Anonymous",e.onload=function(){var e=0,n=void 0,o=void 0,i=void 0,a=void 0,s=void 0,u=void 0,c=void 0;r.width=this.width,r.height=this.height,n=r.getContext("2d"),n.drawImage(this,0,0),o=n.getImageData(0,0,r.width,r.height),i=o.data;for(var d=0,l=i.length;d<l;d+=4)a=i[d],s=i[d+1],u=i[d+2],c=Math.floor((a+s+u)/3),e+=c;t(Math.floor(e/(this.width*this.height)))},e.onerror=n};t.default=r,e.exports=t.default},92:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-image",a.default),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(324),a=r(i),s=n(275),u=r(s);e.exports=t.default}})}));