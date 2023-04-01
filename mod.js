// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,e.get),p&&u&&u.call(r,t,e.set),r};var c=t;function l(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){if(r.__esModule)return r;var t=r.default;if("function"==typeof t){var e=function r(){if(this instanceof r){var e=[null];e.push.apply(e,arguments);var n=Function.bind.apply(t,e);return new n}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}function p(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,y=function(r){return b.exec(r).slice(1)};function v(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return(t?"/":"")+(r=p(E(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function d(r){var t=g(r),e="/"===A(r,-1);return(r=p(E(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function g(r){return"/"===r.charAt(0)}function j(){var r=Array.prototype.slice.call(arguments,0);return d(E(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function m(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=v(r).substr(1),t=v(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),i=Math.min(n.length,o.length),u=i,a=0;a<i;a++)if(n[a]!==o[a]){u=a;break}var f=[];for(a=u;a<n.length;a++)f.push("..");return(f=f.concat(o.slice(u))).join("/")}function h(r){var t=y(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function _(r,t){var e=y(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e}function w(r){return y(r)[3]}var O={extname:w,basename:_,dirname:h,sep:"/",delimiter:":",relative:m,join:j,isAbsolute:g,normalize:d,resolve:v};function E(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var A="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},S=s(Object.freeze({__proto__:null,basename:_,default:O,delimiter:":",dirname:h,extname:w,isAbsolute:g,join:j,normalize:d,relative:m,resolve:v,sep:"/"}));var P=/./;function k(r){return"boolean"==typeof r}var x="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function T(){return x&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var N,q="function"==typeof Symbol?Symbol.toStringTag:"";N=T()?function(r){var t,e,n,o,i;if(null==r)return B.call(r);e=r[q],i=q,t=null!=(o=r)&&M.call(o,i);try{r[q]=void 0}catch(t){return B.call(r)}return n=B.call(r),t?r[q]=e:delete r[q],n}:function(r){return B.call(r)};var C=N,F=Boolean.prototype.toString;var V=T();function z(r){return"object"==typeof r&&(r instanceof Boolean||(V?function(r){try{return F.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===C(r)))}function G(r){return k(r)||z(r)}function L(){return new Function("return this;")()}l(G,"isPrimitive",k),l(G,"isObject",z);var R="object"==typeof self?self:null,D="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof I?I:null;var U=function(r){if(arguments.length){if(!k(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return L()}if(R)return R;if(D)return D;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")}(),X=U.document&&U.document.childNodes,$=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var K,Q=/^\s*function\s*([^(]*)/i;l(H,"REGEXP",Q),K=Array.isArray?Array.isArray:function(r){return"[object Array]"===C(r)};var W=K;function Y(r){return null!==r&&"object"==typeof r}var Z=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!W(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Y);function rr(r){var t,e,n,o;if(("Object"===(e=C(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Q.exec(n.toString()))return t[1]}return Y(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(Y,"isObjectLikeArray",Z);var tr="function"==typeof P||"object"==typeof $||"function"==typeof X?function(r){return rr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?rr(r).toLowerCase():t};var er,nr,or=Object.getPrototypeOf;nr=Object.getPrototypeOf,er="function"===tr(nr)?or:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===C(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ir=er;function ur(r){return null==r?null:(r=Object(r),ir(r))}function ar(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===C(r))return!0;r=ur(r)}return!1}function fr(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return ar(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var cr=Math.floor;function lr(r,t,e,n){var o,i,u,a,f,c,l,s,p,b,y,v,d;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(y=0,d=0;d<r;d++)y+=t[o],o+=e;return y}if(r<=128){for(i=t[o],u=t[o+e],a=t[o+2*e],f=t[o+3*e],c=t[o+4*e],l=t[o+5*e],s=t[o+6*e],p=t[o+7*e],o+=8*e,b=r%8,d=8;d<r-b;d+=8)i+=t[o],u+=t[o+e],a+=t[o+2*e],f+=t[o+3*e],c+=t[o+4*e],l+=t[o+5*e],s+=t[o+6*e],p+=t[o+7*e],o+=8*e;for(y=i+u+(a+f)+(c+l+(s+p));d<r;d++)y+=t[o],o+=e;return y}return v=cr(r/2),lr(v-=v%8,t,e,o)+lr(r-v,t,e,o+v*e)}function sr(r,t,e){var n,o,i;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,i=0;i<r;i++)o+=t[n],n+=e;return o}return lr(r,t,e,n)}l(sr,"ndarray",lr);var pr,br=fr((0,S.join)("/home/runner/work/stats-base-dsvariance/stats-base-dsvariance/node_modules/@stdlib/blas-ext-base-dssumpw/lib","./native.js")),yr=pr=ar(br)?sr:br;const{ndarray:vr}=pr;function dr(r,t,e){return yr(r,t,e)}l(dr,"ndarray",(function(r,t,e,n){return vr(r,t,e,n)}));var gr,jr=fr((0,S.join)("/home/runner/work/stats-base-dsvariance/stats-base-dsvariance/node_modules/@stdlib/blas-ext-base-dssum/lib","./native.js")),mr=gr=ar(jr)?dr:jr;const{ndarray:hr}=gr;function _r(r,t,e,n){var o,i,u,a,f,c,l;if(c=r-t,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(o=mr(r,e,n)/r,i=n<0?(1-r)*n:0,u=0,a=0,l=0;l<r;l++)u+=(f=e[i]-o)*f,a+=f,i+=n;return u/c-a/r*(a/c)}l(_r,"ndarray",(function(r,t,e,n,o){var i,u,a,f,c,l,s;if(l=r-t,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(i=hr(r,e,n,o)/r,u=o,a=0,f=0,s=0;s<r;s++)a+=(c=e[u]-i)*c,f+=c,u+=n;return a/l-f/r*(f/l)}));var wr,Or=fr((0,S.join)("/home/runner/work/stats-base-dsvariance/stats-base-dsvariance/node_modules/@stdlib/stats-base-dsvariancepn/lib","./native.js")),Er=wr=Or instanceof Error?_r:Or;const{ndarray:Ar}=wr;function Sr(r,t,e,n){return Er(r,t,e,n)}function Pr(r,t,e,n,o){return Ar(r,t,e,n,o)}l(Sr,"ndarray",Pr);export{Sr as default,Pr as ndarray};
//# sourceMappingURL=mod.js.map