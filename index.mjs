// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-read-dataview@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-memory@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-arrays2ptrs@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-strided2object@v0.0.0-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-wasm-memory@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-module-wrapper@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-base64-to-uint8array@esm/index.mjs";var p=a("AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEaA2AAAGAHf39/f398fABgCX9/f39/f398fAACDwEDZW52Bm1lbW9yeQIAAAMEAwABAgdKBBFfX3dhc21fY2FsbF9jdG9ycwAAGF9fd2FzbV9hcHBseV9kYXRhX3JlbG9jcwAABmNfZHJvdAABDmNfZHJvdF9uZGFycmF5AAIKqwEDAwABCz8BAn4gACABIAIgAqwiB0IBIACsIgh9fkIAIAdCAFcbpyADIAQgBKwiB0IBIAh9fkIAIAdCAFcbpyAFIAYQAgtlAgJ/AnwgAEEASgRAA0AgBCAGQQN0aiIJIAcgCSsDACILoiAIIAEgA0EDdGoiCSsDACIMoqE5AwAgCSAHIAyiIAggC6KgOQMAIAUgBmohBiACIANqIQMgCkEBaiIKIABHDQALCws=");function h(t){if(!(this instanceof h))return new h(t);if(!A(t))throw new TypeError(m("invalid argument. Must provide a WebAssembly memory instance. Value: `%s`.",t));return o.call(this,p,t,{env:{memory:t}}),this}function l(){return this instanceof l?(h.call(this,new i({initial:0})),this):new l}s(h,o),t(h.prototype,"main",(function(t,s,e,r,i,n,d){return this._instance.exports.c_drot(t,s,e,r,i,n,d),r})),t(h.prototype,"ndarray",(function(t,s,e,r,i,n,d,A,o){return this._instance.exports.c_drot_ndarray(t,s,e,r,i,n,d,A,o),i})),s(l,h),t(l.prototype,"main",(function(t,s,r,i,n,d,A){return this.ndarray(t,s,r,e(t,r),i,n,e(t,n),d,A)})),t(l.prototype,"ndarray",(function(t,s,e,i,A,o,m,a,p){var l,f,c;return f=(l=n(this,[d(t,s,e,i),d(t,A,o,m)]))[0],c=l[1],h.prototype.ndarray.call(this,t,f.ptr,f.stride,f.offset,c.ptr,c.stride,c.offset,a,p),f.copy&&r(t,this.view,f.stride*f.BYTES_PER_ELEMENT,f.ptr,s,e,i,!0),c.copy&&r(t,this.view,c.stride*c.BYTES_PER_ELEMENT,c.ptr,A,o,m,!0),A}));var f=new l;f.initializeSync(),t(f,"Module",h);export{h as Module,f as default};
//# sourceMappingURL=index.mjs.map
