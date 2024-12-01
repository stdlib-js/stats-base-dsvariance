// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function i(r){return"number"==typeof r}function t(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function n(r,e,i){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=i?r+t(a):t(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,t,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(t=(-s).toString(e),r.precision&&(t=n(t,r.precision,r.padRight)),t="-"+t):(t=s.toString(e),s||r.precision?r.precision&&(t=n(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function y(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":c(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=u.call(t,v,"$1e"),t=u.call(t,b,"e"),t=u.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=u.call(t,f,"e+0$1"),t=u.call(t,g,"e-0$1"),r.alternate&&(t=u.call(t,d,"$1."),t=u.call(t,h,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):p.call(t)}function m(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}var _=String.fromCharCode,x=Array.isArray;function k(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,i,t,a,o,c,p,l,u,f,g,d,h;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",p=1,l=0;l<r.length;l++)if("string"==typeof(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,u=0;u<i.length;u++)switch(a=i.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,k(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!k(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(f=t.arg,g=t.width,d=t.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),c+=t.arg||"",p+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,i,t,n;for(i=[],n=0,t=j.exec(r);t;)(e=r.slice(n,j.lastIndex-t[0].length)).length&&i.push(e),i.push(V(t)),n=j.lastIndex,t=j.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function $(r){var e,i;if("string"!=typeof r)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return S.apply(null,e)}var F=Object.prototype,I=F.toString,A=F.__defineGetter__,C=F.__defineSetter__,R=F.__lookupGetter__,O=F.__lookupSetter__,P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var t,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===I.call(i))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(R.call(r,e)||O.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=i.value,r.__proto__=t):r[e]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(r,e,i.get),o&&C&&C.call(r,e,i.set),r};function Z(r,e,i){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:i})}var G=Math.floor,N=128;function W(r,e,i,t){var n,a,o,s,c,p,l,u,f,g,d,h,w;if(r<=0)return 0;if(1===r||0===i)return e[t];if(n=t,r<8){for(d=0,w=0;w<r;w++)d+=e[n],n+=i;return d}if(r<=N){for(a=e[n],o=e[n+i],s=e[n+2*i],c=e[n+3*i],p=e[n+4*i],l=e[n+5*i],u=e[n+6*i],f=e[n+7*i],n+=8*i,g=r%8,w=8;w<r-g;w+=8)a+=e[n],o+=e[n+i],s+=e[n+2*i],c+=e[n+3*i],p+=e[n+4*i],l+=e[n+5*i],u+=e[n+6*i],f+=e[n+7*i],n+=8*i;for(d=a+o+(s+c)+(p+l+(u+f));w<r;w++)d+=e[n],n+=i;return d}return h=G(r/2),W(h-=h%8,e,i,n)+W(r-h,e,i,n+h*i)}function L(r,e,i){var t,n,a;if(r<=0)return 0;if(1===r||0===i)return e[0];if(t=i<0?(1-r)*i:0,r<8){for(n=0,a=0;a<r;a++)n+=e[t],t+=i;return n}return W(r,e,i,t)}function M(r,e,i){return L(r,e,i)}function U(r,e,i,t){return W(r,e,i,t)}function X(r,e,i,t){var n,a,o,s,c,p,l;if(p=r-e,r<=0||p<=0)return NaN;if(1===r||0===t)return 0;for(n=M(r,i,t)/r,a=t<0?(1-r)*t:0,o=0,s=0,l=0;l<r;l++)o+=(c=i[a]-n)*c,s+=c,a+=t;return o/p-s/r*(s/p)}function z(r,e,i,t,n){var a,o,s,c,p,l,u;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===t)return 0;for(a=U(r,i,t,n)/r,o=n,s=0,c=0,u=0;u<r;u++)s+=(p=i[o]-a)*p,c+=p,o+=t;return s/l-c/r*(c/l)}function q(r,e,i,t){return X(r,e,i,t)}return Z(L,"ndarray",W),Z(M,"ndarray",U),Z(X,"ndarray",z),Z(q,"ndarray",(function(r,e,i,t,n){return z(r,e,i,t,n)})),q},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).dsvariance=e();
//# sourceMappingURL=browser.js.map
