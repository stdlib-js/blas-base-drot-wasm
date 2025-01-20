"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=p(function(Q,w){
var P=require("path").resolve,V=require('@stdlib/fs-read-wasm/dist').sync,g=V(P(__dirname,"..","src","main.wasm"));w.exports=g
});var f=p(function(U,_){
var j=require('@stdlib/assert-is-wasm-memory/dist'),E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),D=require('@stdlib/error-tools-fmtprodmsg/dist'),k=m();function d(e){if(!(this instanceof d))return new d(e);if(!j(e))throw new TypeError(D('22bH0',e));return M.call(this,k,e,{env:{memory:e}}),this}z(d,M);E(d.prototype,"main",function(r,n,i,a,t,s,u){return this._instance.exports.c_drot(r,n,i,a,t,s,u),a});E(d.prototype,"ndarray",function(r,n,i,a,t,s,u,l,q){return this._instance.exports.c_drot_ndarray(r,n,i,a,t,s,u,l,q),t});_.exports=d
});var W=p(function(Z,S){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=require('@stdlib/utils-inherit/dist'),R=require('@stdlib/strided-base-stride2offset/dist'),x=require('@stdlib/strided-base-read-dataview/dist').ndarray,F=require('@stdlib/wasm-memory/dist'),G=require('@stdlib/wasm-base-arrays2ptrs/dist'),b=require('@stdlib/wasm-base-strided2object/dist'),h=f();function c(){return this instanceof c?(h.call(this,new F({initial:0})),this):new c}C(c,h);T(c.prototype,"main",function(r,n,i,a,t,s,u){return this.ndarray(r,n,i,R(r,i),a,t,R(r,t),s,u)});T(c.prototype,"ndarray",function(r,n,i,a,t,s,u,l,q){var y,o,v;return y=G(this,[b(r,n,i,a),b(r,t,s,u)]),o=y[0],v=y[1],h.prototype.ndarray.call(this,r,o.ptr,o.stride,o.offset,v.ptr,v.stride,v.offset,l,q),o.copy&&x(r,this.view,o.stride*o.BYTES_PER_ELEMENT,o.ptr,n,i,a,!0),v.copy&&x(r,this.view,v.stride*v.BYTES_PER_ELEMENT,v.ptr,t,s,u,!0),t});S.exports=c
});var O=p(function($,B){
var H=W(),A=new H;A.initializeSync();B.exports=A
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=O(),J=f();I(L,"Module",J);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
