"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(h,t){
var x=require('@stdlib/stats-base-dsvariancepn/dist');function f(e,r,a,i){return x(e,r,a,i)}t.exports=f
});var c=n(function(k,v){
var j=require('@stdlib/stats-base-dsvariancepn/dist').ndarray;function m(e,r,a,i,y){return j(e,r,a,i,y)}v.exports=m
});var o=n(function(w,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=u(),R=c();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),s,p=E(_(__dirname,"./native.js"));O(p)?s=b:s=p;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
