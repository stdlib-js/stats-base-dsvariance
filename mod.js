// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,s,b;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),s="get"in n,b="set"in n,l&&(s||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),b&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===p(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(y(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function b(){var r=Array.prototype.slice.call(arguments,0);return s(y(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function y(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var p="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},v=/./;function d(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return j&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var m,h="function"==typeof Symbol?Symbol.toStringTag:"";m=_()?function(r){var t,n,e,o,u;if(null==r)return w.call(r);n=r[h],u=h,t=null!=(o=r)&&g.call(o,u);try{r[h]=void 0}catch(t){return w.call(r)}return e=w.call(r),t?r[h]=n:delete r[h],e}:function(r){return w.call(r)};var O=m,E=Boolean.prototype.toString;var S=_();function A(r){return"object"==typeof r&&(r instanceof Boolean||(S?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function P(r){return d(r)||A(r)}function B(){return new Function("return this;")()}l(P,"isPrimitive",d),l(P,"isObject",A);var T="object"==typeof self?self:null,k="object"==typeof window?window:null,x="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof x?x:null;var V=function(r){if(arguments.length){if(!d(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return B()}if(T)return T;if(k)return k;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),C=V.document&&V.document.childNodes,F=Int8Array;function G(){return/^\s*function\s*([^(]*)/i}var L,M=/^\s*function\s*([^(]*)/i;l(G,"REGEXP",M),L=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var q=L;function I(r){return null!==r&&"object"==typeof r}var J=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!q(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(I);function R(r){var t,n,e,o;if(("Object"===(n=O(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=M.exec(e.toString()))return t[1]}return I(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(I,"isObjectLikeArray",J);var U="function"==typeof v||"object"==typeof F||"function"==typeof C?function(r){return R(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?R(r).toLowerCase():t};var X,z,D=Object.getPrototypeOf;z=Object.getPrototypeOf,X="function"===U(z)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var H=X;function K(r){return null==r?null:(r=Object(r),H(r))}function Q(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===O(r))return!0;r=K(r)}return!1}function W(r){try{return require(r)}catch(r){return Q(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var Y,Z=Math.floor;function $(r,t,n,e){var o,u,i,a,f,c,l,s,b,y,p,v,d;if(r<=0)return 0;if(1===r||0===n)return t[e];if(o=e,r<8){for(p=0,d=0;d<r;d++)p+=t[o],o+=n;return p}if(r<=128){for(u=t[o],i=t[o+n],a=t[o+2*n],f=t[o+3*n],c=t[o+4*n],l=t[o+5*n],s=t[o+6*n],b=t[o+7*n],o+=8*n,y=r%8,d=8;d<r-y;d+=8)u+=t[o],i+=t[o+n],a+=t[o+2*n],f+=t[o+3*n],c+=t[o+4*n],l+=t[o+5*n],s+=t[o+6*n],b+=t[o+7*n],o+=8*n;for(p=u+i+(a+f)+(c+l+(s+b));d<r;d++)p+=t[o],o+=n;return p}return v=Z(r/2),$(v-=v%8,t,n,o)+$(r-v,t,n,o+v*n)}function rr(r,t,n){var e,o,u;if(r<=0)return 0;if(1===r||0===n)return t[0];if(e=n<0?(1-r)*n:0,r<8){for(o=0,u=0;u<r;u++)o+=t[e],e+=n;return o}return $(r,t,n,e)}l(rr,"ndarray",$);var tr=W(b("/home/runner/work/stats-base-dsvariance/stats-base-dsvariance/node_modules/@stdlib/blas-ext-base-dssumpw/lib","./native.js")),nr=Y=Q(tr)?rr:tr;const{ndarray:er}=Y;function or(r,t,n){return nr(r,t,n)}var ur;l(or,"ndarray",(function(r,t,n,e){return er(r,t,n,e)}));var ir=W(b("/home/runner/work/stats-base-dsvariance/stats-base-dsvariance/node_modules/@stdlib/blas-ext-base-dssum/lib","./native.js")),ar=ur=Q(ir)?or:ir;const{ndarray:fr}=ur;function cr(r,t,n,e){var o,u,i,a,f,c,l;if(c=r-t,r<=0||c<=0)return NaN;if(1===r||0===e)return 0;for(o=ar(r,n,e)/r,u=e<0?(1-r)*e:0,i=0,a=0,l=0;l<r;l++)i+=(f=n[u]-o)*f,a+=f,u+=e;return i/c-a/r*(a/c)}var lr;l(cr,"ndarray",(function(r,t,n,e,o){var u,i,a,f,c,l,s;if(l=r-t,r<=0||l<=0)return NaN;if(1===r||0===e)return 0;for(u=fr(r,n,e,o)/r,i=o,a=0,f=0,s=0;s<r;s++)a+=(c=n[i]-u)*c,f+=c,i+=e;return a/l-f/r*(f/l)}));var sr=W(b("/home/runner/work/stats-base-dsvariance/stats-base-dsvariance/node_modules/@stdlib/stats-base-dsvariancepn/lib","./native.js")),br=lr=sr instanceof Error?cr:sr;const{ndarray:yr}=lr;function pr(r,t,n,e){return br(r,t,n,e)}function vr(r,t,n,e,o){return yr(r,t,n,e,o)}l(pr,"ndarray",vr);export{pr as default,vr as ndarray};
//# sourceMappingURL=mod.js.map
