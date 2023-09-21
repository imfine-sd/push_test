(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function k(){}function T(e,t){for(const n in t)e[n]=t[n];return e}function rn(e){return e()}function It(){return Object.create(null)}function Ie(e){e.forEach(rn)}function on(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function nr(e){return Object.keys(e).length===0}function de(e,t,n,r){if(e){const o=sn(e,t,n,r);return e[0](o)}}function sn(e,t,n,r){return e[1]&&r?T(n.ctx.slice(),e[1](r(t))):n.ctx}function he(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(t.dirty===void 0)return o;if(typeof o=="object"){const i=[],s=Math.max(t.dirty.length,o.length);for(let c=0;c<s;c+=1)i[c]=t.dirty[c]|o[c];return i}return t.dirty|o}return t.dirty}function pe(e,t,n,r,o,i){if(o){const s=sn(t,n,r,i);e.p(s,o)}}function ge(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function et(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function te(e,t){const n={};t=new Set(t);for(const r in e)!t.has(r)&&r[0]!=="$"&&(n[r]=e[r]);return n}function g(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function D(e){e.parentNode&&e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function N(){return G(" ")}function rr(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const or=["width","height"];function ne(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)t[r]==null?e.removeAttribute(r):r==="style"?e.style.cssText=t[r]:r==="__value"?e.value=e[r]=t[r]:n[r]&&n[r].set&&or.indexOf(r)===-1?e[r]=t[r]:y(e,r,t[r])}function ir(e){return Array.from(e.childNodes)}function tt(e,t){t=""+t,e.data!==t&&(e.data=t)}function re(e,t,n){e.classList[n?"add":"remove"](t)}let nt;function ie(e){nt=e}const Q=[],vt=[];let ee=[];const Et=[],sr=Promise.resolve();let Ve=!1;function ar(){Ve||(Ve=!0,sr.then(an))}function We(e){ee.push(e)}const Se=new Set;let Z=0;function an(){if(Z!==0)return;const e=nt;do{try{for(;Z<Q.length;){const t=Q[Z];Z++,ie(t),cr(t.$$)}}catch(t){throw Q.length=0,Z=0,t}for(ie(null),Q.length=0,Z=0;vt.length;)vt.pop()();for(let t=0;t<ee.length;t+=1){const n=ee[t];Se.has(n)||(Se.add(n),n())}ee.length=0}while(Q.length);for(;Et.length;)Et.pop()();Ve=!1,Se.clear(),ie(e)}function cr(e){if(e.fragment!==null){e.update(),Ie(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(We)}}function lr(e){const t=[],n=[];ee.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),ee=t}const me=new Set;let ur;function I(e,t){e&&e.i&&(me.delete(e),e.i(t))}function E(e,t,n,r){if(e&&e.o){if(me.has(e))return;me.add(e),ur.c.push(()=>{me.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function rt(e,t){const n={},r={},o={$$scope:1};let i=e.length;for(;i--;){const s=e[i],c=t[i];if(c){for(const a in s)a in c||(r[a]=1);for(const a in c)o[a]||(n[a]=c[a],o[a]=1);e[i]=c}else for(const a in s)o[a]=1}for(const s in r)s in n||(n[s]=void 0);return n}function H(e){e&&e.c()}function P(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||We(()=>{const s=e.$$.on_mount.map(rn).filter(on);e.$$.on_destroy?e.$$.on_destroy.push(...s):Ie(s),e.$$.on_mount=[]}),i.forEach(We)}function R(e,t){const n=e.$$;n.fragment!==null&&(lr(n.after_update),Ie(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fr(e,t){e.$$.dirty[0]===-1&&(Q.push(e),ar(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,r,o,i,s,c=[-1]){const a=nt;ie(e);const l=e.$$={fragment:null,ctx:[],props:i,update:k,not_equal:o,bound:It(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:It(),dirty:c,skip_bound:!1,root:t.target||a.$$.root};s&&s(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(d,f,...h)=>{const B=h.length?h[0]:f;return l.ctx&&o(l.ctx[d],l.ctx[d]=B)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](B),u&&fr(e,d)),f}):[],l.update(),u=!0,Ie(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const d=ir(t.target);l.fragment&&l.fragment.l(d),d.forEach(D)}else l.fragment&&l.fragment.c();t.intro&&I(e.$$.fragment),P(e,t.target,t.anchor,t.customElement),an()}ie(a)}class J{$destroy(){R(this,1),this.$destroy=k}$on(t,n){if(!on(n))return k;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!nr(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dr=e=>({}),St=e=>({}),hr=e=>({}),Tt=e=>({}),pr=e=>({}),At=e=>({});function gr(e){let t;return{c(){t=G("Need Contents")},m(n,r){O(n,t,r)},d(n){n&&D(t)}}}function mr(e){let t,n,r,o;const i=e[1].header,s=de(i,e,e[0],At),c=e[1].main,a=de(c,e,e[0],Tt),l=a||gr(),u=e[1].footer,d=de(u,e,e[0],St);return{c(){t=v("div"),s&&s.c(),n=N(),l&&l.c(),r=N(),d&&d.c(),y(t,"id","layoutContainer"),y(t,"class","layout svelte-lj24p2")},m(f,h){O(f,t,h),s&&s.m(t,null),g(t,n),l&&l.m(t,null),g(t,r),d&&d.m(t,null),o=!0},p(f,[h]){s&&s.p&&(!o||h&1)&&pe(s,i,f,f[0],o?he(i,f[0],h,pr):ge(f[0]),At),a&&a.p&&(!o||h&1)&&pe(a,c,f,f[0],o?he(c,f[0],h,hr):ge(f[0]),Tt),d&&d.p&&(!o||h&1)&&pe(d,u,f,f[0],o?he(u,f[0],h,dr):ge(f[0]),St)},i(f){o||(I(s,f),I(l,f),I(d,f),o=!0)},o(f){E(s,f),E(l,f),E(d,f),o=!1},d(f){f&&D(t),s&&s.d(f),l&&l.d(f),d&&d.d(f)}}}function br(e,t,n){let{$$slots:r={},$$scope:o}=t;return e.$$set=i=>{"$$scope"in i&&n(0,o=i.$$scope)},[o,r]}class yr extends J{constructor(t){super(),Y(this,t,br,mr,q,{})}}function wr(e){let t,n,r,o,i,s,c=[e[2]],a={};for(let l=0;l<c.length;l+=1)a=T(a,c[l]);return{c(){t=v("div"),n=v("label"),r=G(e[0]),i=N(),s=v("input"),y(n,"for",o=e[1].id),y(n,"class","svelte-dqsrnm"),ne(s,a),re(s,"svelte-dqsrnm",!0),y(t,"class","form input svelte-dqsrnm")},m(l,u){O(l,t,u),g(t,n),g(n,r),g(t,i),g(t,s),s.autofocus&&s.focus()},p(l,[u]){u&1&&tt(r,l[0]),u&2&&o!==(o=l[1].id)&&y(n,"for",o),ne(s,a=rt(c,[u&4&&l[2]])),re(s,"svelte-dqsrnm",!0)},i:k,o:k,d(l){l&&D(t)}}}function _r(e,t,n){const r=["label","attrs"];let o=te(t,r),{label:i,...s}={},{label:c=i,attrs:a=s}=t;return e.$$set=l=>{t=T(T({},t),et(l)),n(2,o=te(t,r)),"label"in l&&n(0,c=l.label),"attrs"in l&&n(1,a=l.attrs)},[c,a,o]}class Dt extends J{constructor(t){super(),Y(this,t,_r,wr,q,{label:0,attrs:1})}}function Ir(e){let t,n,r,o,i,s,c=[e[2]],a={};for(let l=0;l<c.length;l+=1)a=T(a,c[l]);return{c(){t=v("div"),n=v("label"),r=G(e[0]),i=N(),s=v("textarea"),y(n,"for",o=e[1].id),y(n,"class","svelte-144o8cn"),ne(s,a),re(s,"svelte-144o8cn",!0),y(t,"class","form textarea svelte-144o8cn")},m(l,u){O(l,t,u),g(t,n),g(n,r),g(t,i),g(t,s),s.autofocus&&s.focus()},p(l,[u]){u&1&&tt(r,l[0]),u&2&&o!==(o=l[1].id)&&y(n,"for",o),ne(s,a=rt(c,[u&4&&l[2]])),re(s,"svelte-144o8cn",!0)},i:k,o:k,d(l){l&&D(t)}}}function vr(e,t,n){const r=["label","attrs"];let o=te(t,r),{label:i,...s}={},{label:c=i,attrs:a=s}=t;return e.$$set=l=>{t=T(T({},t),et(l)),n(2,o=te(t,r)),"label"in l&&n(0,c=l.label),"attrs"in l&&n(1,a=l.attrs)},[c,a,o]}class Er extends J{constructor(t){super(),Y(this,t,vr,Ir,q,{label:0,attrs:1})}}function Sr(e){let t;return{c(){t=G("button")},m(n,r){O(n,t,r)},d(n){n&&D(t)}}}function Tr(e){let t,n;const r=e[3].default,o=de(r,e,e[2],null),i=o||Sr();let s=[e[0]],c={};for(let a=0;a<s.length;a+=1)c=T(c,s[a]);return{c(){t=v("button"),i&&i.c(),ne(t,c),re(t,"svelte-143dxrs",!0)},m(a,l){O(a,t,l),i&&i.m(t,null),t.autofocus&&t.focus(),n=!0},p(a,[l]){o&&o.p&&(!n||l&4)&&pe(o,r,a,a[2],n?he(r,a[2],l,null):ge(a[2]),null),ne(t,c=rt(s,[l&1&&a[0]])),re(t,"svelte-143dxrs",!0)},i(a){n||(I(i,a),n=!0)},o(a){E(i,a),n=!1},d(a){a&&D(t),i&&i.d(a)}}}function Ar(e,t,n){const r=["attrs"];let o=te(t,r),{$$slots:i={},$$scope:s}=t,{...c}={},{attrs:a=c}=t;return e.$$set=l=>{t=T(T({},t),et(l)),n(0,o=te(t,r)),"attrs"in l&&n(1,a=l.attrs),"$$scope"in l&&n(2,s=l.$$scope)},[o,a,s,i]}class Dr extends J{constructor(t){super(),Y(this,t,Ar,Tr,q,{attrs:1})}}function Cr(e){let t;return{c(){t=G("Send")},m(n,r){O(n,t,r)},d(n){n&&D(t)}}}function $r(e){let t,n,r,o,i,s,c,a,l,u,d,f,h,B,wt;return s=new Dt({props:{label:"Name",id:"name",name:"name",placeholder:"Enter your name"}}),a=new Dt({props:{label:"Email",id:"email",name:"email",placeholder:"Enter your email"}}),u=new Er({props:{label:"Message",id:"message",name:"message",placeholder:"Enter your message"}}),f=new Dr({props:{type:"submit",disabled:!0,$$slots:{default:[Cr]},$$scope:{ctx:e}}}),{c(){t=v("section"),n=v("h1"),r=G(e[0]),o=N(),i=v("form"),H(s.$$.fragment),c=N(),H(a.$$.fragment),l=N(),H(u.$$.fragment),d=N(),H(f.$$.fragment),y(i,"class","svelte-1cnv1o1"),y(t,"class","svelte-1cnv1o1")},m(m,oe){O(m,t,oe),g(t,n),g(n,r),g(t,o),g(t,i),P(s,i,null),g(i,c),P(a,i,null),g(i,l),P(u,i,null),g(i,d),P(f,i,null),h=!0,B||(wt=rr(i,"submit",kr),B=!0)},p(m,[oe]){(!h||oe&1)&&tt(r,m[0]);const _t={};oe&2&&(_t.$$scope={dirty:oe,ctx:m}),f.$set(_t)},i(m){h||(I(s.$$.fragment,m),I(a.$$.fragment,m),I(u.$$.fragment,m),I(f.$$.fragment,m),h=!0)},o(m){E(s.$$.fragment,m),E(a.$$.fragment,m),E(u.$$.fragment,m),E(f.$$.fragment,m),h=!1},d(m){m&&D(t),R(s),R(a),R(u),R(f),B=!1,wt()}}}async function kr(e){e.preventDefault();const t=new FormData(this),n=Object.fromEntries(t.entries());console.log(n)}function Mr(e,t,n){let{title:r="Title"}=t;return e.$$set=o=>{"title"in o&&n(0,r=o.title)},[r]}class Or extends J{constructor(t){super(),Y(this,t,Mr,$r,q,{title:0})}}function Br(e){let t,n,r;return n=new Or({}),{c(){t=v("main"),H(n.$$.fragment),y(t,"class","svelte-1t6c6v")},m(o,i){O(o,t,i),P(n,t,null),r=!0},p:k,i(o){r||(I(n.$$.fragment,o),r=!0)},o(o){E(n.$$.fragment,o),r=!1},d(o){o&&D(t),R(n)}}}class Nr extends J{constructor(t){super(),Y(this,t,null,Br,q,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Pr=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=e[n++],s=e[n++],c=e[n++],a=((o&7)<<18|(i&63)<<12|(s&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|s&63)}}return t.join("")},ln={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const i=e[o],s=o+1<e.length,c=s?e[o+1]:0,a=o+2<e.length,l=a?e[o+2]:0,u=i>>2,d=(i&3)<<4|c>>4;let f=(c&15)<<2|l>>6,h=l&63;a||(h=64,s||(f=64)),r.push(n[u],n[d],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(cn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Pr(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const i=n[e.charAt(o++)],c=o<e.length?n[e.charAt(o)]:0;++o;const l=o<e.length?n[e.charAt(o)]:64;++o;const d=o<e.length?n[e.charAt(o)]:64;if(++o,i==null||c==null||l==null||d==null)throw new Rr;const f=i<<2|c>>4;if(r.push(f),l!==64){const h=c<<4&240|l>>2;if(r.push(h),d!==64){const B=l<<6&192|d;r.push(B)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Rr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lr=function(e){const t=cn(e);return ln.encodeByteArray(t,!0)},un=function(e){return Lr(e).replace(/\./g,"")},Fr=function(e){try{return ln.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=()=>xr().__FIREBASE_DEFAULTS__,Hr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Vr=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fr(e[1]);return t&&JSON.parse(t)},Wr=()=>{try{return jr()||Hr()||Vr()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},fn=()=>{var e;return(e=Wr())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Ur(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ot(){try{return typeof indexedDB=="object"}catch{return!1}}function it(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var i;t(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function dn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="FirebaseError";class X extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=zr,Object.setPrototypeOf(this,X.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,le.prototype.create)}}class le{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,i=this.errors[t],s=i?qr(i,r):"Error",c=`${this.serviceName}: ${s} (${o}).`;return new X(o,c,r)}}function qr(e,t){return e.replace(Gr,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const Gr=/\{\$([^}]+)}/g;function be(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const i=e[o],s=t[o];if(Ct(i)&&Ct(s)){if(!be(i,s))return!1}else if(i!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Ct(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=1e3,Jr=2,Xr=4*60*60*1e3,Zr=.5;function $t(e,t=Yr,n=Jr){const r=t*Math.pow(n,e),o=Math.round(Zr*r*(Math.random()-.5)*2);return Math.min(Xr,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){return e&&e._delegate?e._delegate:e}class A{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Kr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(to(t))try{this.getOrInitializeService({instanceIdentifier:j})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(t=j){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=j){return this.instances.has(t)}getOptions(t=j){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,s]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&s.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(o,i);const s=this.instances.get(o);return s&&t(s,o),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eo(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=j){return this.component?this.component.multipleInstances?t:j:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eo(e){return e===j?void 0:e}function to(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Qr(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(p||(p={}));const ro={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},oo=p.INFO,io={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},so=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=io[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class hn{constructor(t){this.name=t,this._logLevel=oo,this._logHandler=so,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in p))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ro[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...t),this._logHandler(this,p.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...t),this._logHandler(this,p.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,p.INFO,...t),this._logHandler(this,p.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,p.WARN,...t),this._logHandler(this,p.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...t),this._logHandler(this,p.ERROR,...t)}}const ao=(e,t)=>t.some(n=>e instanceof n);let kt,Mt;function co(){return kt||(kt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lo(){return Mt||(Mt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pn=new WeakMap,Ke=new WeakMap,gn=new WeakMap,Te=new WeakMap,st=new WeakMap;function uo(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(L(e.result)),o()},s=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&pn.set(n,e)}).catch(()=>{}),st.set(t,e),t}function fo(e){if(Ke.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});Ke.set(e,t)}let Ue={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ke.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return L(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ho(e){Ue=e(Ue)}function po(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ae(this),t,...n);return gn.set(r,t.sort?t.sort():[t]),L(r)}:lo().includes(e)?function(...t){return e.apply(Ae(this),t),L(pn.get(this))}:function(...t){return L(e.apply(Ae(this),t))}}function go(e){return typeof e=="function"?po(e):(e instanceof IDBTransaction&&fo(e),ao(e,co())?new Proxy(e,Ue):e)}function L(e){if(e instanceof IDBRequest)return uo(e);if(Te.has(e))return Te.get(e);const t=go(e);return t!==e&&(Te.set(e,t),st.set(t,e)),t}const Ae=e=>st.get(e);function mo(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),c=L(s);return r&&s.addEventListener("upgradeneeded",a=>{r(L(s.result),a.oldVersion,a.newVersion,L(s.transaction),a)}),n&&s.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),o&&a.addEventListener("versionchange",l=>o(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const bo=["get","getKey","getAll","getAllKeys","count"],yo=["put","add","delete","clear"],De=new Map;function Ot(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(De.get(t))return De.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=yo.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||bo.includes(n)))return;const i=async function(s,...c){const a=this.transaction(s,o?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),o&&a.done]))[0]};return De.set(t,i),i}ho(e=>({...e,get:(t,n,r)=>Ot(t,n)||e.get(t,n,r),has:(t,n)=>!!Ot(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_o(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _o(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ze="@firebase/app",Bt="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=new hn("@firebase/app"),Io="@firebase/app-compat",vo="@firebase/analytics-compat",Eo="@firebase/analytics",So="@firebase/app-check-compat",To="@firebase/app-check",Ao="@firebase/auth",Do="@firebase/auth-compat",Co="@firebase/database",$o="@firebase/database-compat",ko="@firebase/functions",Mo="@firebase/functions-compat",Oo="@firebase/installations",Bo="@firebase/installations-compat",No="@firebase/messaging",Po="@firebase/messaging-compat",Ro="@firebase/performance",Lo="@firebase/performance-compat",Fo="@firebase/remote-config",xo="@firebase/remote-config-compat",jo="@firebase/storage",Ho="@firebase/storage-compat",Vo="@firebase/firestore",Wo="@firebase/firestore-compat",Ko="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="[DEFAULT]",Uo={[ze]:"fire-core",[Io]:"fire-core-compat",[Eo]:"fire-analytics",[vo]:"fire-analytics-compat",[To]:"fire-app-check",[So]:"fire-app-check-compat",[Ao]:"fire-auth",[Do]:"fire-auth-compat",[Co]:"fire-rtdb",[$o]:"fire-rtdb-compat",[ko]:"fire-fn",[Mo]:"fire-fn-compat",[Oo]:"fire-iid",[Bo]:"fire-iid-compat",[No]:"fire-fcm",[Po]:"fire-fcm-compat",[Ro]:"fire-perf",[Lo]:"fire-perf-compat",[Fo]:"fire-rc",[xo]:"fire-rc-compat",[jo]:"fire-gcs",[Ho]:"fire-gcs-compat",[Vo]:"fire-fst",[Wo]:"fire-fst-compat","fire-js":"fire-js",[Ko]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Map,Ge=new Map;function zo(e,t){try{e.container.addComponent(t)}catch(n){W.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function M(e){const t=e.name;if(Ge.has(t))return W.debug(`There were multiple attempts to register component ${t}.`),!1;Ge.set(t,e);for(const n of ye.values())zo(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},F=new le("app","Firebase",qo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new A("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw F.create("app-deleted",{appName:this._name})}}function mn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:qe,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw F.create("bad-app-name",{appName:String(o)});if(n||(n=fn()),!n)throw F.create("no-options");const i=ye.get(o);if(i){if(be(n,i.options)&&be(r,i.config))return i;throw F.create("duplicate-app",{appName:o})}const s=new no(o);for(const a of Ge.values())s.addComponent(a);const c=new Go(n,r,s);return ye.set(o,c),c}function bn(e=qe){const t=ye.get(e);if(!t&&e===qe&&fn())return mn();if(!t)throw F.create("no-app",{appName:e});return t}function S(e,t,n){var r;let o=(r=Uo[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const c=[`Unable to register library "${o}" with version "${t}":`];i&&c.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&c.push("and"),s&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),W.warn(c.join(" "));return}M(new A(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="firebase-heartbeat-database",Jo=1,ae="firebase-heartbeat-store";let Ce=null;function yn(){return Ce||(Ce=mo(Yo,Jo,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ae)}}}).catch(e=>{throw F.create("idb-open",{originalErrorMessage:e.message})})),Ce}async function Xo(e){try{return await(await yn()).transaction(ae).objectStore(ae).get(wn(e))}catch(t){if(t instanceof X)W.warn(t.message);else{const n=F.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});W.warn(n.message)}}}async function Nt(e,t){try{const r=(await yn()).transaction(ae,"readwrite");await r.objectStore(ae).put(t,wn(e)),await r.done}catch(n){if(n instanceof X)W.warn(n.message);else{const r=F.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});W.warn(r.message)}}}function wn(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=1024,Qo=30*24*60*60*1e3;class ei{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ni(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const i=new Date(o.date).valueOf();return Date.now()-i<=Qo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pt(),{heartbeatsToSend:n,unsentEntries:r}=ti(this._heartbeatsCache.heartbeats),o=un(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Pt(){return new Date().toISOString().substring(0,10)}function ti(e,t=Zo){const n=[];let r=e.slice();for(const o of e){const i=n.find(s=>s.agent===o.agent);if(i){if(i.dates.push(o.date),Rt(n)>t){i.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Rt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ni{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ot()?it().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Nt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Nt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Rt(e){return un(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){M(new A("platform-logger",t=>new wo(t),"PRIVATE")),M(new A("heartbeat",t=>new ei(t),"PRIVATE")),S(ze,Bt,e),S(ze,Bt,"esm2017"),S("fire-js","")}ri("");var oi="firebase",ii="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */S(oi,ii,"app");const si=(e,t)=>t.some(n=>e instanceof n);let Lt,Ft;function ai(){return Lt||(Lt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ci(){return Ft||(Ft=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _n=new WeakMap,Ye=new WeakMap,In=new WeakMap,$e=new WeakMap,at=new WeakMap;function li(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(x(e.result)),o()},s=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&_n.set(n,e)}).catch(()=>{}),at.set(t,e),t}function ui(e){if(Ye.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});Ye.set(e,t)}let Je={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ye.get(e);if(t==="objectStoreNames")return e.objectStoreNames||In.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return x(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function fi(e){Je=e(Je)}function di(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ke(this),t,...n);return In.set(r,t.sort?t.sort():[t]),x(r)}:ci().includes(e)?function(...t){return e.apply(ke(this),t),x(_n.get(this))}:function(...t){return x(e.apply(ke(this),t))}}function hi(e){return typeof e=="function"?di(e):(e instanceof IDBTransaction&&ui(e),si(e,ai())?new Proxy(e,Je):e)}function x(e){if(e instanceof IDBRequest)return li(e);if($e.has(e))return $e.get(e);const t=hi(e);return t!==e&&($e.set(e,t),at.set(t,e)),t}const ke=e=>at.get(e);function pi(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),c=x(s);return r&&s.addEventListener("upgradeneeded",a=>{r(x(s.result),a.oldVersion,a.newVersion,x(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),c.then(a=>{i&&a.addEventListener("close",()=>i()),o&&a.addEventListener("versionchange",()=>o())}).catch(()=>{}),c}const gi=["get","getKey","getAll","getAllKeys","count"],mi=["put","add","delete","clear"],Me=new Map;function xt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Me.get(t))return Me.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=mi.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||gi.includes(n)))return;const i=async function(s,...c){const a=this.transaction(s,o?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),o&&a.done]))[0]};return Me.set(t,i),i}fi(e=>({...e,get:(t,n,r)=>xt(t,n)||e.get(t,n,r),has:(t,n)=>!!xt(t,n)||e.has(t,n)}));const vn="@firebase/installations",ct="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=1e4,Sn=`w:${ct}`,Tn="FIS_v2",bi="https://firebaseinstallations.googleapis.com/v1",yi=60*60*1e3,wi="installations",_i="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},K=new le(wi,_i,Ii);function An(e){return e instanceof X&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn({projectId:e}){return`${bi}/projects/${e}/installations`}function Cn(e){return{token:e.token,requestStatus:2,expiresIn:Ei(e.expiresIn),creationTime:Date.now()}}async function $n(e,t){const r=(await t.json()).error;return K.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function kn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function vi(e,{refreshToken:t}){const n=kn(e);return n.append("Authorization",Si(t)),n}async function Mn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Ei(e){return Number(e.replace("s","000"))}function Si(e){return`${Tn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Dn(e),o=kn(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&o.append("x-firebase-client",l)}const s={fid:n,authVersion:Tn,appId:e.appId,sdkVersion:Sn},c={method:"POST",headers:o,body:JSON.stringify(s)},a=await Mn(()=>fetch(r,c));if(a.ok){const l=await a.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Cn(l.authToken)}}else throw await $n("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=/^[cdef][\w-]{21}$/,Xe="";function Ci(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=$i(e);return Di.test(n)?n:Xe}catch{return Xe}}function $i(e){return Ai(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Map;function Nn(e,t){const n=ve(e);Pn(n,t),ki(n,t)}function Pn(e,t){const n=Bn.get(e);if(n)for(const r of n)r(t)}function ki(e,t){const n=Mi();n&&n.postMessage({key:e,fid:t}),Oi()}let V=null;function Mi(){return!V&&"BroadcastChannel"in self&&(V=new BroadcastChannel("[Firebase] FID Change"),V.onmessage=e=>{Pn(e.data.key,e.data.fid)}),V}function Oi(){Bn.size===0&&V&&(V.close(),V=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="firebase-installations-database",Ni=1,U="firebase-installations-store";let Oe=null;function lt(){return Oe||(Oe=pi(Bi,Ni,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(U)}}})),Oe}async function we(e,t){const n=ve(e),o=(await lt()).transaction(U,"readwrite"),i=o.objectStore(U),s=await i.get(n);return await i.put(t,n),await o.done,(!s||s.fid!==t.fid)&&Nn(e,t.fid),t}async function Rn(e){const t=ve(e),r=(await lt()).transaction(U,"readwrite");await r.objectStore(U).delete(t),await r.done}async function Ee(e,t){const n=ve(e),o=(await lt()).transaction(U,"readwrite"),i=o.objectStore(U),s=await i.get(n),c=t(s);return c===void 0?await i.delete(n):await i.put(c,n),await o.done,c&&(!s||s.fid!==c.fid)&&Nn(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e){let t;const n=await Ee(e.appConfig,r=>{const o=Pi(r),i=Ri(e,o);return t=i.registrationPromise,i.installationEntry});return n.fid===Xe?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Pi(e){const t=e||{fid:Ci(),registrationStatus:0};return Ln(t)}function Ri(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(K.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Li(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Fi(e)}:{installationEntry:t}}async function Li(e,t){try{const n=await Ti(e,t);return we(e.appConfig,n)}catch(n){throw An(n)&&n.customData.serverCode===409?await Rn(e.appConfig):await we(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Fi(e){let t=await jt(e.appConfig);for(;t.registrationStatus===1;)await On(100),t=await jt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ut(e);return r||n}return t}function jt(e){return Ee(e,t=>{if(!t)throw K.create("installation-not-found");return Ln(t)})}function Ln(e){return xi(e)?{fid:e.fid,registrationStatus:0}:e}function xi(e){return e.registrationStatus===1&&e.registrationTime+En<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji({appConfig:e,heartbeatServiceProvider:t},n){const r=Hi(e,n),o=vi(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&o.append("x-firebase-client",l)}const s={installation:{sdkVersion:Sn,appId:e.appId}},c={method:"POST",headers:o,body:JSON.stringify(s)},a=await Mn(()=>fetch(r,c));if(a.ok){const l=await a.json();return Cn(l)}else throw await $n("Generate Auth Token",a)}function Hi(e,{fid:t}){return`${Dn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t=!1){let n;const r=await Ee(e.appConfig,i=>{if(!Fn(i))throw K.create("not-registered");const s=i.authToken;if(!t&&Ki(s))return i;if(s.requestStatus===1)return n=Vi(e,t),i;{if(!navigator.onLine)throw K.create("app-offline");const c=zi(i);return n=Wi(e,c),c}});return n?await n:r.authToken}async function Vi(e,t){let n=await Ht(e.appConfig);for(;n.authToken.requestStatus===1;)await On(100),n=await Ht(e.appConfig);const r=n.authToken;return r.requestStatus===0?ft(e,t):r}function Ht(e){return Ee(e,t=>{if(!Fn(t))throw K.create("not-registered");const n=t.authToken;return qi(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Wi(e,t){try{const n=await ji(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await we(e.appConfig,r),n}catch(n){if(An(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Rn(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await we(e.appConfig,r)}throw n}}function Fn(e){return e!==void 0&&e.registrationStatus===2}function Ki(e){return e.requestStatus===2&&!Ui(e)}function Ui(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yi}function zi(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function qi(e){return e.requestStatus===1&&e.requestTime+En<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(e){const t=e,{installationEntry:n,registrationPromise:r}=await ut(t);return r?r.catch(console.error):ft(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(e,t=!1){const n=e;return await Ji(n),(await ft(n,t)).token}async function Ji(e){const{registrationPromise:t}=await ut(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e){if(!e||!e.options)throw Be("App Configuration");if(!e.name)throw Be("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Be(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Be(e){return K.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="installations",Zi="installations-internal",Qi=e=>{const t=e.getProvider("app").getImmediate(),n=Xi(t),r=fe(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},es=e=>{const t=e.getProvider("app").getImmediate(),n=fe(t,xn).getImmediate();return{getId:()=>Gi(n),getToken:o=>Yi(n,o)}};function ts(){M(new A(xn,Qi,"PUBLIC")),M(new A(Zi,es,"PRIVATE"))}ts();S(vn,ct);S(vn,ct,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="analytics",ns="firebase_id",rs="origin",os=60*1e3,is="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dt="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new hn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_=new le("analytics","Analytics",ss);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(e){if(!e.startsWith(dt)){const t=_.create("invalid-gtag-resource",{gtagURL:e});return w.warn(t.message),""}return e}function jn(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function cs(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ls(e,t){const n=cs("firebase-js-sdk-policy",{createScriptURL:as}),r=document.createElement("script"),o=`${dt}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function us(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function fs(e,t,n,r,o,i){const s=r[o];try{if(s)await t[s];else{const a=(await jn(n)).find(l=>l.measurementId===o);a&&await t[a.appId]}}catch(c){w.error(c)}e("config",o,i)}async function ds(e,t,n,r,o){try{let i=[];if(o&&o.send_to){let s=o.send_to;Array.isArray(s)||(s=[s]);const c=await jn(n);for(const a of s){const l=c.find(d=>d.measurementId===a),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,o||{})}catch(i){w.error(i)}}function hs(e,t,n,r){async function o(i,...s){try{if(i==="event"){const[c,a]=s;await ds(e,t,n,c,a)}else if(i==="config"){const[c,a]=s;await fs(e,t,n,r,c,a)}else if(i==="consent"){const[c]=s;e("consent","update",c)}else if(i==="get"){const[c,a,l]=s;e("get",c,a,l)}else if(i==="set"){const[c]=s;e("set",c)}else e(i,...s)}catch(c){w.error(c)}}return o}function ps(e,t,n,r,o){let i=function(...s){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(i=window[o]),window[o]=hs(i,e,t,n),{gtagCore:i,wrappedGtag:window[o]}}function gs(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(dt)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=30,bs=1e3;class ys{constructor(t={},n=bs){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Hn=new ys;function ws(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function _s(e){var t;const{appId:n,apiKey:r}=e,o={method:"GET",headers:ws(r)},i=is.replace("{app-id}",n),s=await fetch(i,o);if(s.status!==200&&s.status!==304){let c="";try{const a=await s.json();!((t=a.error)===null||t===void 0)&&t.message&&(c=a.error.message)}catch{}throw _.create("config-fetch-failed",{httpStatus:s.status,responseMessage:c})}return s.json()}async function Is(e,t=Hn,n){const{appId:r,apiKey:o,measurementId:i}=e.options;if(!r)throw _.create("no-app-id");if(!o){if(i)return{measurementId:i,appId:r};throw _.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Ss;return setTimeout(async()=>{c.abort()},n!==void 0?n:os),Vn({appId:r,apiKey:o,measurementId:i},s,c,t)}async function Vn(e,{throttleEndTimeMillis:t,backoffCount:n},r,o=Hn){var i;const{appId:s,measurementId:c}=e;try{await vs(r,t)}catch(a){if(c)return w.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:s,measurementId:c};throw a}try{const a=await _s(e);return o.deleteThrottleMetadata(s),a}catch(a){const l=a;if(!Es(l)){if(o.deleteThrottleMetadata(s),c)return w.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:c};throw a}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?$t(n,o.intervalMillis,ms):$t(n,o.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return o.setThrottleMetadata(s,d),w.debug(`Calling attemptFetch again in ${u} millis`),Vn(e,d,r,o)}}function vs(e,t){return new Promise((n,r)=>{const o=Math.max(t-Date.now(),0),i=setTimeout(n,o);e.addEventListener(()=>{clearTimeout(i),r(_.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Es(e){if(!(e instanceof X)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ss{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ts(e,t,n,r,o){if(o&&o.global){e("event",n,r);return}else{const i=await t,s=Object.assign(Object.assign({},r),{send_to:i});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(){if(ot())try{await it()}catch(e){return w.warn(_.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return w.warn(_.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ds(e,t,n,r,o,i,s){var c;const a=Is(e);a.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&w.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>w.error(h)),t.push(a);const l=As().then(h=>{if(h)return r.getId()}),[u,d]=await Promise.all([a,l]);gs(i)||ls(i,u.measurementId),o("js",new Date);const f=(c=s==null?void 0:s.config)!==null&&c!==void 0?c:{};return f[rs]="firebase",f.update=!0,d!=null&&(f[ns]=d),o("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t){this.app=t}_delete(){return delete se[this.app.options.appId],Promise.resolve()}}let se={},Vt=[];const Wt={};let Ne="dataLayer",$s="gtag",Kt,Wn,Ut=!1;function ks(){const e=[];if(Ur()&&e.push("This is a browser extension environment."),dn()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,o)=>`(${o+1}) ${r}`).join(" "),n=_.create("invalid-analytics-context",{errorInfo:t});w.warn(n.message)}}function Ms(e,t,n){ks();const r=e.options.appId;if(!r)throw _.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)w.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _.create("no-api-key");if(se[r]!=null)throw _.create("already-exists",{id:r});if(!Ut){us(Ne);const{wrappedGtag:i,gtagCore:s}=ps(se,Vt,Wt,Ne,$s);Wn=i,Kt=s,Ut=!0}return se[r]=Ds(e,Vt,Wt,t,Kt,Ne,n),new Cs(e)}function Os(e=bn()){e=ue(e);const t=fe(e,_e);return t.isInitialized()?t.getImmediate():Bs(e)}function Bs(e,t={}){const n=fe(e,_e);if(n.isInitialized()){const o=n.getImmediate();if(be(t,n.getOptions()))return o;throw _.create("already-initialized")}return n.initialize({options:t})}function Ns(e,t,n,r){e=ue(e),Ts(Wn,se[e.app.options.appId],t,n,r).catch(o=>w.error(o))}const zt="@firebase/analytics",qt="0.10.0";function Ps(){M(new A(_e,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return Ms(r,o,n)},"PUBLIC")),M(new A("analytics-internal",e,"PRIVATE")),S(zt,qt),S(zt,qt,"esm2017");function e(t){try{const n=t.getProvider(_e).getImmediate();return{logEvent:(r,o,i)=>Ns(n,r,o,i)}}catch(n){throw _.create("interop-component-reg-failed",{reason:n})}}}Ps();const Rs=(e,t)=>t.some(n=>e instanceof n);let Gt,Yt;function Ls(){return Gt||(Gt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fs(){return Yt||(Yt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kn=new WeakMap,Ze=new WeakMap,Un=new WeakMap,Pe=new WeakMap,ht=new WeakMap;function xs(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n($(e.result)),o()},s=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Kn.set(n,e)}).catch(()=>{}),ht.set(t,e),t}function js(e){if(Ze.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});Ze.set(e,t)}let Qe={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ze.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Un.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Hs(e){Qe=e(Qe)}function Vs(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Re(this),t,...n);return Un.set(r,t.sort?t.sort():[t]),$(r)}:Fs().includes(e)?function(...t){return e.apply(Re(this),t),$(Kn.get(this))}:function(...t){return $(e.apply(Re(this),t))}}function Ws(e){return typeof e=="function"?Vs(e):(e instanceof IDBTransaction&&js(e),Rs(e,Ls())?new Proxy(e,Qe):e)}function $(e){if(e instanceof IDBRequest)return xs(e);if(Pe.has(e))return Pe.get(e);const t=Ws(e);return t!==e&&(Pe.set(e,t),ht.set(t,e)),t}const Re=e=>ht.get(e);function zn(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),c=$(s);return r&&s.addEventListener("upgradeneeded",a=>{r($(s.result),a.oldVersion,a.newVersion,$(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),c.then(a=>{i&&a.addEventListener("close",()=>i()),o&&a.addEventListener("versionchange",()=>o())}).catch(()=>{}),c}function Le(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),$(n).then(()=>{})}const Ks=["get","getKey","getAll","getAllKeys","count"],Us=["put","add","delete","clear"],Fe=new Map;function Jt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Fe.get(t))return Fe.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Us.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Ks.includes(n)))return;const i=async function(s,...c){const a=this.transaction(s,o?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),o&&a.done]))[0]};return Fe.set(t,i),i}Hs(e=>({...e,get:(t,n,r)=>Jt(t,n)||e.get(t,n,r),has:(t,n)=>!!Jt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="/firebase-messaging-sw.js",qs="/firebase-cloud-messaging-push-scope",qn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Gs="https://fcmregistrations.googleapis.com/v1",Gn="google.c.a.c_id",Ys="google.c.a.c_l",Js="google.c.a.ts",Xs="google.c.a.e";var Xt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Xt||(Xt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ce;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(ce||(ce={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Zs(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let i=0;i<r.length;++i)o[i]=r.charCodeAt(i);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="fcm_token_details_db",Qs=5,Zt="fcm_token_object_Store";async function ea(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(xe))return null;let t=null;return(await zn(xe,Qs,{upgrade:async(r,o,i,s)=>{var c;if(o<2||!r.objectStoreNames.contains(Zt))return;const a=s.objectStore(Zt),l=await a.index("fcmSenderId").get(e);if(await a.clear(),!!l){if(o===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(c=u.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:C(u.vapidKey)}}}else if(o===3){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:C(u.auth),p256dh:C(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:C(u.vapidKey)}}}else if(o===4){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:C(u.auth),p256dh:C(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:C(u.vapidKey)}}}}}})).close(),await Le(xe),await Le("fcm_vapid_details_db"),await Le("undefined"),ta(t)?t:null}function ta(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="firebase-messaging-database",ra=1,z="firebase-messaging-store";let je=null;function pt(){return je||(je=zn(na,ra,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(z)}}})),je}async function Yn(e){const t=mt(e),r=await(await pt()).transaction(z).objectStore(z).get(t);if(r)return r;{const o=await ea(e.appConfig.senderId);if(o)return await gt(e,o),o}}async function gt(e,t){const n=mt(e),o=(await pt()).transaction(z,"readwrite");return await o.objectStore(z).put(t,n),await o.done,t}async function oa(e){const t=mt(e),r=(await pt()).transaction(z,"readwrite");await r.objectStore(z).delete(t),await r.done}function mt({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},b=new le("messaging","Messaging",ia);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(e,t){const n=await yt(e),r=Xn(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(bt(e.appConfig),o)).json()}catch(s){throw b.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(i.error){const s=i.error.message;throw b.create("token-subscribe-failed",{errorInfo:s})}if(!i.token)throw b.create("token-subscribe-no-token");return i.token}async function aa(e,t){const n=await yt(e),r=Xn(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${bt(e.appConfig)}/${t.token}`,o)).json()}catch(s){throw b.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(i.error){const s=i.error.message;throw b.create("token-update-failed",{errorInfo:s})}if(!i.token)throw b.create("token-update-no-token");return i.token}async function Jn(e,t){const r={method:"DELETE",headers:await yt(e)};try{const i=await(await fetch(`${bt(e.appConfig)}/${t}`,r)).json();if(i.error){const s=i.error.message;throw b.create("token-unsubscribe-failed",{errorInfo:s})}}catch(o){throw b.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function bt({projectId:e}){return`${Gs}/projects/${e}/registrations`}async function yt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Xn({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==qn&&(o.web.applicationPubKey=r),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=7*24*60*60*1e3;async function la(e){const t=await da(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:C(t.getKey("auth")),p256dh:C(t.getKey("p256dh"))},r=await Yn(e.firebaseDependencies);if(r){if(ha(r.subscriptionOptions,n))return Date.now()>=r.createTime+ca?fa(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Jn(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return Qt(e.firebaseDependencies,n)}else return Qt(e.firebaseDependencies,n)}async function ua(e){const t=await Yn(e.firebaseDependencies);t&&(await Jn(e.firebaseDependencies,t.token),await oa(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function fa(e,t){try{const n=await aa(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await gt(e.firebaseDependencies,r),n}catch(n){throw await ua(e),n}}async function Qt(e,t){const r={token:await sa(e,t),createTime:Date.now(),subscriptionOptions:t};return await gt(e,r),r.token}async function da(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Zs(t)})}function ha(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&o&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return pa(t,e),ga(t,e),ma(t,e),t}function pa(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const i=t.notification.icon;i&&(e.notification.icon=i)}function ga(e,t){t.data&&(e.data=t.data)}function ma(e,t){var n,r,o,i,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(o=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(i=t.notification)===null||i===void 0?void 0:i.click_action;c&&(e.fcmOptions.link=c);const a=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;a&&(e.fcmOptions.analyticsLabel=a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e){return typeof e=="object"&&!!e&&Gn in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Zn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Zn(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(e){if(!e||!e.options)throw He("App Configuration Object");if(!e.name)throw He("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw He(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function He(e){return b.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=ya(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(e){try{e.swRegistration=await navigator.serviceWorker.register(zs,{scope:qs}),e.swRegistration.update().catch(()=>{})}catch(t){throw b.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(e,t){if(!t&&!e.swRegistration&&await _a(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw b.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=qn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(e,t){if(!navigator)throw b.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw b.create("permission-blocked");return await va(e,t==null?void 0:t.vapidKey),await Ia(e,t==null?void 0:t.serviceWorkerRegistration),la(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(e,t,n){const r=Sa(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Gn],message_name:n[Ys],message_time:n[Js],message_device_time:Math.floor(Date.now()/1e3)})}function Sa(e){switch(e){case ce.NOTIFICATION_CLICKED:return"notification_open";case ce.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===ce.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(en(n)):e.onMessageHandler.next(en(n)));const r=n.data;ba(r)&&r[Xs]==="1"&&await Ea(e,n.messageType,r)}const tn="@firebase/messaging",nn="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=e=>{const t=new wa(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ta(t,n)),t},Da=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Qn(t,r)}};function Ca(){M(new A("messaging",Aa,"PUBLIC")),M(new A("messaging-internal",Da,"PRIVATE")),S(tn,nn),S(tn,nn,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(){try{await it()}catch{return!1}return typeof window<"u"&&ot()&&dn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(e,t){if(!navigator)throw b.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(e=bn()){return $a().then(t=>{if(!t)throw b.create("unsupported-browser")},t=>{throw b.create("indexed-db-unsupported")}),fe(ue(e),"messaging").getImmediate()}async function Oa(e,t){return e=ue(e),Qn(e,t)}function Ba(e,t){return e=ue(e),ka(e,t)}Ca();const Na={apiKey:"AIzaSyASGvrvhr6QAWDUlGbcGDGoSgIHCMgeg00",authDomain:"pushtest-9c500.firebaseapp.com",projectId:"pushtest-9c500",storageBucket:"pushtest-9c500.appspot.com",messagingSenderId:"308592327423",appId:"1:308592327423:web:df1974986388c16dbceaca",measurementId:"G-BSKJPE9000"},er=mn(Na);Os(er);const tr=Ma(er);function Pa(){Notification.requestPermission().then(e=>{e==="granted"?(console.log("Notification permission granted."),alert("Notification permission granted.")):(console.log("Unable to get permission to notify."),alert("Unable to get permission to notify."))})}async function Ra(){console.log("getMessageToken"),Oa(tr,{vapidKey:"BFq8oM0fm-LwVAgCbhVR34aZsd54VYIZww5VMmvzdA7ponHzxylHInPGAYKCAmOlBahYPbBVI5YkwDgCPRdiCKA"}).then(e=>{e?(console.log("----message token----"),console.log(e),console.log("---------------------")):(console.log("No registration token available. Request permission to generate one."),alert("No registration token available. Request permission to generate one."),Pa())}).catch(e=>{console.error(e)})}Ba(tr,e=>{if(console.log("Message received. ",e),!Notification.requestPermission){console.log("Notification permission needed.");return}if(!window.Notification){console.log("Notification API not supported.");return}alert(e.notification.body)});function La(e){let t,n;return t=new Nr({props:{slot:"main"}}),{c(){H(t.$$.fragment)},m(r,o){P(t,r,o),n=!0},p:k,i(r){n||(I(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function Fa(e){let t,n;return t=new yr({props:{$$slots:{main:[La]},$$scope:{ctx:e}}}),{c(){H(t.$$.fragment)},m(r,o){P(t,r,o),n=!0},p(r,[o]){const i={};o&1&&(i.$$scope={dirty:o,ctx:r}),t.$set(i)},i(r){n||(I(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function xa(e){return Ra(),[]}class ja extends J{constructor(t){super(),Y(this,t,xa,Fa,q,{})}}"serviceWorker"in navigator?(navigator.serviceWorker.register("./service-worker.js").then(()=>console.log("Service worker registered")).catch(e=>console.error("Error registering service worker",e)),"PushManager"in window&&console.log("PushManager is supported")):console.log("Service worker not supported");new ja({target:document.getElementById("app")});
