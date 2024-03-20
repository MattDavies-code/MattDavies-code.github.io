function Qp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rc={exports:{}},si={},Dc={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=Symbol.for("react.element"),Xp=Symbol.for("react.portal"),Kp=Symbol.for("react.fragment"),bp=Symbol.for("react.strict_mode"),Gp=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),Jp=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),e0=Symbol.for("react.suspense"),t0=Symbol.for("react.memo"),n0=Symbol.for("react.lazy"),Js=Symbol.iterator;function r0(e){return e===null||typeof e!="object"?null:(e=Js&&e[Js]||e["@@iterator"],typeof e=="function"?e:null)}var Fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ac=Object.assign,Hc={};function Rn(e,t,n){this.props=e,this.context=t,this.refs=Hc,this.updater=n||Fc}Rn.prototype.isReactComponent={};Rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Uc(){}Uc.prototype=Rn.prototype;function Da(e,t,n){this.props=e,this.context=t,this.refs=Hc,this.updater=n||Fc}var Fa=Da.prototype=new Uc;Fa.constructor=Da;Ac(Fa,Rn.prototype);Fa.isPureReactComponent=!0;var qs=Array.isArray,Bc=Object.prototype.hasOwnProperty,Aa={current:null},Wc={key:!0,ref:!0,__self:!0,__source:!0};function Vc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Bc.call(t,r)&&!Wc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Mr,type:e,key:i,ref:l,props:o,_owner:Aa.current}}function o0(e,t){return{$$typeof:Mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mr}function i0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?i0(""+e.key):t.toString(36)}function So(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Mr:case Xp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ol(l,0):r,qs(o)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),So(o,t,n,"",function(u){return u})):o!=null&&(Ha(o)&&(o=o0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(eu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",qs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+ol(i,a);l+=So(i,t,n,s,o)}else if(s=r0(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+ol(i,a++),l+=So(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Kr(e,t,n){if(e==null)return e;var r=[],o=0;return So(e,r,"","",function(i){return t.call(n,i,o++)}),r}function l0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},xo={transition:null},a0={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:xo,ReactCurrentOwner:Aa};z.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!Ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Rn;z.Fragment=Kp;z.Profiler=Gp;z.PureComponent=Da;z.StrictMode=bp;z.Suspense=e0;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ac({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Aa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Bc.call(t,s)&&!Wc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Mr,type:e.type,key:o,ref:i,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:Jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zp,_context:e},e.Consumer=e};z.createElement=Vc;z.createFactory=function(e){var t=Vc.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:qp,render:e}};z.isValidElement=Ha;z.lazy=function(e){return{$$typeof:n0,_payload:{_status:-1,_result:e},_init:l0}};z.memo=function(e,t){return{$$typeof:t0,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=xo.transition;xo.transition={};try{e()}finally{xo.transition=t}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,t){return ke.current.useCallback(e,t)};z.useContext=function(e){return ke.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};z.useEffect=function(e,t){return ke.current.useEffect(e,t)};z.useId=function(){return ke.current.useId()};z.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ke.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};z.useRef=function(e){return ke.current.useRef(e)};z.useState=function(e){return ke.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ke.current.useTransition()};z.version="18.2.0";Dc.exports=z;var $=Dc.exports;const Qc=Yp($),tu=Qp({__proto__:null,default:Qc},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=$,u0=Symbol.for("react.element"),c0=Symbol.for("react.fragment"),f0=Object.prototype.hasOwnProperty,d0=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p0={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)f0.call(t,r)&&!p0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:u0,type:e,key:i,ref:l,props:o,_owner:d0.current}}si.Fragment=c0;si.jsx=Yc;si.jsxs=Yc;Rc.exports=si;var S=Rc.exports,Dl={},Xc={exports:{}},Re={},Kc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var M=T.length;T.push(L);e:for(;0<M;){var ee=M-1>>>1,le=T[ee];if(0<o(le,L))T[ee]=L,T[M]=le,M=ee;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],M=T.pop();if(M!==L){T[0]=M;e:for(var ee=0,le=T.length,Qr=le>>>1;ee<Qr;){var Vt=2*(ee+1)-1,rl=T[Vt],Qt=Vt+1,Yr=T[Qt];if(0>o(rl,M))Qt<le&&0>o(Yr,rl)?(T[ee]=Yr,T[Qt]=M,ee=Qt):(T[ee]=rl,T[Vt]=M,ee=Vt);else if(Qt<le&&0>o(Yr,M))T[ee]=Yr,T[Qt]=M,ee=Qt;else break e}}return L}function o(T,L){var M=T.sortIndex-L.sortIndex;return M!==0?M:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,m=null,h=3,w=!1,g=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=T)r(u),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(u)}}function y(T){if(v=!1,d(T),!g)if(n(s)!==null)g=!0,tl(C);else{var L=n(u);L!==null&&nl(y,L.startTime-T)}}function C(T,L){g=!1,v&&(v=!1,f(O),O=-1),w=!0;var M=h;try{for(d(L),m=n(s);m!==null&&(!(m.expirationTime>L)||T&&!_e());){var ee=m.callback;if(typeof ee=="function"){m.callback=null,h=m.priorityLevel;var le=ee(m.expirationTime<=L);L=e.unstable_now(),typeof le=="function"?m.callback=le:m===n(s)&&r(s),d(L)}else r(s);m=n(s)}if(m!==null)var Qr=!0;else{var Vt=n(u);Vt!==null&&nl(y,Vt.startTime-L),Qr=!1}return Qr}finally{m=null,h=M,w=!1}}var E=!1,x=null,O=-1,U=5,j=-1;function _e(){return!(e.unstable_now()-j<U)}function wt(){if(x!==null){var T=e.unstable_now();j=T;var L=!0;try{L=x(!0,T)}finally{L?Wt():(E=!1,x=null)}}else E=!1}var Wt;if(typeof c=="function")Wt=function(){c(wt)};else if(typeof MessageChannel<"u"){var Un=new MessageChannel,el=Un.port2;Un.port1.onmessage=wt,Wt=function(){el.postMessage(null)}}else Wt=function(){N(wt,0)};function tl(T){x=T,E||(E=!0,Wt())}function nl(T,L){O=N(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,tl(C))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var M=h;h=L;try{return T()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=h;h=T;try{return L()}finally{h=M}},e.unstable_scheduleCallback=function(T,L,M){var ee=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ee+M:ee):M=ee,T){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=M+le,T={id:p++,callback:L,priorityLevel:T,startTime:M,expirationTime:le,sortIndex:-1},M>ee?(T.sortIndex=M,t(u,T),n(s)===null&&T===n(u)&&(v?(f(O),O=-1):v=!0,nl(y,M-ee))):(T.sortIndex=le,t(s,T),g||w||(g=!0,tl(C))),T},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(T){var L=h;return function(){var M=h;h=L;try{return T.apply(this,arguments)}finally{h=M}}}})(bc);Kc.exports=bc;var m0=Kc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc=$,Ie=m0;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zc=new Set,fr={};function ln(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(fr[e]=t,e=0;e<t.length;e++)Zc.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,h0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nu={},ru={};function v0(e){return Fl.call(ru,e)?!0:Fl.call(nu,e)?!1:h0.test(e)?ru[e]=!0:(nu[e]=!0,!1)}function y0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g0(e,t,n,r){if(t===null||typeof t>"u"||y0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ua=/[\-:]([a-z])/g;function Ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ua,Ba);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ua,Ba);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ua,Ba);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wa(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(g0(t,n,o,r)&&(n=null),r||o===null?v0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=Gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,br=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),Va=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),Jc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),Qa=Symbol.for("react.forward_ref"),Hl=Symbol.for("react.suspense"),Ul=Symbol.for("react.suspense_list"),Ya=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),ef=Symbol.for("react.offscreen"),ou=Symbol.iterator;function Bn(e){return e===null||typeof e!="object"?null:(e=ou&&e[ou]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,il;function Zn(e){if(il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var ll=!1;function al(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function w0(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case Al:return"Profiler";case Va:return"StrictMode";case Hl:return"Suspense";case Ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qc:return(e.displayName||"Context")+".Consumer";case Jc:return(e._context.displayName||"Context")+".Provider";case Qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ya:return t=e.displayName||null,t!==null?t:Bl(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return Bl(e(t))}catch{}}return null}function S0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(t);case 8:return t===Va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function x0(e){var t=tf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=x0(e))}function nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function iu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rf(e,t){t=t.checked,t!=null&&Wa(e,"checked",t,!1)}function Vl(e,t){rf(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||Ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Jn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function of(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,af=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){k0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function sf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function uf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=sf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var E0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(e,t){if(t){if(E0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function Xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,kn=null,En=null;function uu(e){if(e=Ir(e)){if(typeof Zl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=pi(t),Zl(e.stateNode,e.type,t))}}function cf(e){kn?En?En.push(e):En=[e]:kn=e}function ff(){if(kn){var e=kn,t=En;if(En=kn=null,uu(e),t)for(e=0;e<t.length;e++)uu(t[e])}}function df(e,t){return e(t)}function pf(){}var sl=!1;function mf(e,t,n){if(sl)return e(t,n);sl=!0;try{return df(e,t,n)}finally{sl=!1,(kn!==null||En!==null)&&(pf(),ff())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=pi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Jl=!1;if(mt)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{Jl=!1}function _0(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var rr=!1,Do=null,Fo=!1,ql=null,C0={onError:function(e){rr=!0,Do=e}};function P0(e,t,n,r,o,i,l,a,s){rr=!1,Do=null,_0.apply(C0,arguments)}function T0(e,t,n,r,o,i,l,a,s){if(P0.apply(this,arguments),rr){if(rr){var u=Do;rr=!1,Do=null}else throw Error(k(198));Fo||(Fo=!0,ql=u)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(an(e)!==e)throw Error(k(188))}function O0(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return cu(o),e;if(i===r)return cu(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function vf(e){return e=O0(e),e!==null?yf(e):null}function yf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yf(e);if(t!==null)return t;e=e.sibling}return null}var gf=Ie.unstable_scheduleCallback,fu=Ie.unstable_cancelCallback,N0=Ie.unstable_shouldYield,L0=Ie.unstable_requestPaint,te=Ie.unstable_now,j0=Ie.unstable_getCurrentPriorityLevel,Ka=Ie.unstable_ImmediatePriority,wf=Ie.unstable_UserBlockingPriority,Ao=Ie.unstable_NormalPriority,M0=Ie.unstable_LowPriority,Sf=Ie.unstable_IdlePriority,ui=null,it=null;function $0(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:R0,z0=Math.log,I0=Math.LN2;function R0(e){return e>>>=0,e===0?32:31-(z0(e)/I0|0)|0}var Jr=64,qr=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=qn(a):(i&=l,i!==0&&(r=qn(i)))}else l=n&~o,l!==0?r=qn(l):i!==0&&(r=qn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),o=1<<n,r|=e[n],t&=~o;return r}function D0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ge(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=D0(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xf(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function A0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ge(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function kf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ef,Ga,_f,Cf,Pf,ta=!1,eo=[],Lt=null,jt=null,Mt=null,mr=new Map,hr=new Map,Ct=[],H0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function Vn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ir(t),t!==null&&Ga(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function U0(e,t,n,r,o){switch(t){case"focusin":return Lt=Vn(Lt,e,t,n,r,o),!0;case"dragenter":return jt=Vn(jt,e,t,n,r,o),!0;case"mouseover":return Mt=Vn(Mt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return mr.set(i,Vn(mr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,hr.set(i,Vn(hr.get(i)||null,e,t,n,r,o)),!0}return!1}function Tf(e){var t=bt(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=hf(n),t!==null){e.blockedOn=t,Pf(e.priority,function(){_f(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gl=r,n.target.dispatchEvent(r),Gl=null}else return t=Ir(n),t!==null&&Ga(t),e.blockedOn=n,!1;t.shift()}return!0}function pu(e,t,n){ko(e)&&n.delete(t)}function B0(){ta=!1,Lt!==null&&ko(Lt)&&(Lt=null),jt!==null&&ko(jt)&&(jt=null),Mt!==null&&ko(Mt)&&(Mt=null),mr.forEach(pu),hr.forEach(pu)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,ta||(ta=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,B0)))}function vr(e){function t(o){return Qn(o,e)}if(0<eo.length){Qn(eo[0],e);for(var n=1;n<eo.length;n++){var r=eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&Qn(Lt,e),jt!==null&&Qn(jt,e),Mt!==null&&Qn(Mt,e),mr.forEach(t),hr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Tf(n),n.blockedOn===null&&Ct.shift()}var _n=gt.ReactCurrentBatchConfig,Uo=!0;function W0(e,t,n,r){var o=F,i=_n.transition;_n.transition=null;try{F=1,Za(e,t,n,r)}finally{F=o,_n.transition=i}}function V0(e,t,n,r){var o=F,i=_n.transition;_n.transition=null;try{F=4,Za(e,t,n,r)}finally{F=o,_n.transition=i}}function Za(e,t,n,r){if(Uo){var o=na(e,t,n,r);if(o===null)wl(e,t,r,Bo,n),du(e,r);else if(U0(o,e,t,n,r))r.stopPropagation();else if(du(e,r),t&4&&-1<H0.indexOf(e)){for(;o!==null;){var i=Ir(o);if(i!==null&&Ef(i),i=na(e,t,n,r),i===null&&wl(e,t,r,Bo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var Bo=null;function na(e,t,n,r){if(Bo=null,e=Xa(r),e=bt(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function Of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j0()){case Ka:return 1;case wf:return 4;case Ao:case M0:return 16;case Sf:return 536870912;default:return 16}default:return 16}}var Ot=null,Ja=null,Eo=null;function Nf(){if(Eo)return Eo;var e,t=Ja,n=t.length,r,o="value"in Ot?Ot.value:Ot.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Eo=o.slice(e,1<r?1-r:void 0)}function _o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function mu(){return!1}function De(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?to:mu,this.isPropagationStopped=mu,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qa=De(Dn),zr=Z({},Dn,{view:0,detail:0}),Q0=De(zr),cl,fl,Yn,ci=Z({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(cl=e.screenX-Yn.screenX,fl=e.screenY-Yn.screenY):fl=cl=0,Yn=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),hu=De(ci),Y0=Z({},ci,{dataTransfer:0}),X0=De(Y0),K0=Z({},zr,{relatedTarget:0}),dl=De(K0),b0=Z({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=De(b0),Z0=Z({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J0=De(Z0),q0=Z({},Dn,{data:0}),vu=De(q0),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nm[e])?!!t[e]:!1}function es(){return rm}var om=Z({},zr,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=De(om),lm=Z({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yu=De(lm),am=Z({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),sm=De(am),um=Z({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=De(um),fm=Z({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=De(fm),pm=[9,13,27,32],ts=mt&&"CompositionEvent"in window,or=null;mt&&"documentMode"in document&&(or=document.documentMode);var mm=mt&&"TextEvent"in window&&!or,Lf=mt&&(!ts||or&&8<or&&11>=or),gu=" ",wu=!1;function jf(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function hm(e,t){switch(e){case"compositionend":return Mf(t);case"keypress":return t.which!==32?null:(wu=!0,gu);case"textInput":return e=t.data,e===gu&&wu?null:e;default:return null}}function vm(e,t){if(fn)return e==="compositionend"||!ts&&jf(e,t)?(e=Nf(),Eo=Ja=Ot=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lf&&t.locale!=="ko"?null:t.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ym[e.type]:t==="textarea"}function $f(e,t,n,r){cf(r),t=Wo(t,"onChange"),0<t.length&&(n=new qa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,yr=null;function gm(e){Vf(e,0)}function fi(e){var t=mn(e);if(nf(t))return e}function wm(e,t){if(e==="change")return t}var zf=!1;if(mt){var pl;if(mt){var ml="oninput"in document;if(!ml){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),ml=typeof xu.oninput=="function"}pl=ml}else pl=!1;zf=pl&&(!document.documentMode||9<document.documentMode)}function ku(){ir&&(ir.detachEvent("onpropertychange",If),yr=ir=null)}function If(e){if(e.propertyName==="value"&&fi(yr)){var t=[];$f(t,yr,e,Xa(e)),mf(gm,t)}}function Sm(e,t,n){e==="focusin"?(ku(),ir=t,yr=n,ir.attachEvent("onpropertychange",If)):e==="focusout"&&ku()}function xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(yr)}function km(e,t){if(e==="click")return fi(t)}function Em(e,t){if(e==="input"||e==="change")return fi(t)}function _m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:_m;function gr(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Fl.call(t,o)||!Je(e[o],t[o]))return!1}return!0}function Eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,t){var n=Eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eu(n)}}function Rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Df(){for(var e=window,t=Ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ro(e.document)}return t}function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cm(e){var t=Df(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rf(n.ownerDocument.documentElement,n)){if(r!==null&&ns(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_u(n,i);var l=_u(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pm=mt&&"documentMode"in document&&11>=document.documentMode,dn=null,ra=null,lr=null,oa=!1;function Cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oa||dn==null||dn!==Ro(r)||(r=dn,"selectionStart"in r&&ns(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&gr(lr,r)||(lr=r,r=Wo(ra,"onSelect"),0<r.length&&(t=new qa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function no(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},hl={},Ff={};mt&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function di(e){if(hl[e])return hl[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ff)return hl[e]=t[n];return e}var Af=di("animationend"),Hf=di("animationiteration"),Uf=di("animationstart"),Bf=di("transitionend"),Wf=new Map,Pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Wf.set(e,t),ln(t,[e])}for(var vl=0;vl<Pu.length;vl++){var yl=Pu[vl],Tm=yl.toLowerCase(),Om=yl[0].toUpperCase()+yl.slice(1);Ht(Tm,"on"+Om)}Ht(Af,"onAnimationEnd");Ht(Hf,"onAnimationIteration");Ht(Uf,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(Bf,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nm=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,T0(r,t,void 0,e),e.currentTarget=null}function Vf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Tu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Tu(o,a,u),i=s}}}if(Fo)throw e=ql,Fo=!1,ql=null,e}function W(e,t){var n=t[ua];n===void 0&&(n=t[ua]=new Set);var r=e+"__bubble";n.has(r)||(Qf(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),Qf(n,e,r,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[ro]){e[ro]=!0,Zc.forEach(function(n){n!=="selectionchange"&&(Nm.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,gl("selectionchange",!1,t))}}function Qf(e,t,n,r){switch(Of(t)){case 1:var o=W0;break;case 4:o=V0;break;default:o=Za}n=o.bind(null,t,n,e),o=void 0,!Jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=bt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}mf(function(){var u=i,p=Xa(n),m=[];e:{var h=Wf.get(e);if(h!==void 0){var w=qa,g=e;switch(e){case"keypress":if(_o(n)===0)break e;case"keydown":case"keyup":w=im;break;case"focusin":g="focus",w=dl;break;case"focusout":g="blur",w=dl;break;case"beforeblur":case"afterblur":w=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=X0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=sm;break;case Af:case Hf:case Uf:w=G0;break;case Bf:w=cm;break;case"scroll":w=Q0;break;case"wheel":w=dm;break;case"copy":case"cut":case"paste":w=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=yu}var v=(t&4)!==0,N=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,d;c!==null;){d=c;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=pr(c,f),y!=null&&v.push(Sr(c,y,d)))),N)break;c=c.return}0<v.length&&(h=new w(h,g,null,n,p),m.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Gl&&(g=n.relatedTarget||n.fromElement)&&(bt(g)||g[ht]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=u,g=g?bt(g):null,g!==null&&(N=an(g),g!==N||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(v=hu,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=yu,y="onPointerLeave",f="onPointerEnter",c="pointer"),N=w==null?h:mn(w),d=g==null?h:mn(g),h=new v(y,c+"leave",w,n,p),h.target=N,h.relatedTarget=d,y=null,bt(p)===u&&(v=new v(f,c+"enter",g,n,p),v.target=d,v.relatedTarget=N,y=v),N=y,w&&g)t:{for(v=w,f=g,c=0,d=v;d;d=sn(d))c++;for(d=0,y=f;y;y=sn(y))d++;for(;0<c-d;)v=sn(v),c--;for(;0<d-c;)f=sn(f),d--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=sn(v),f=sn(f)}v=null}else v=null;w!==null&&Ou(m,h,w,v,!1),g!==null&&N!==null&&Ou(m,N,g,v,!0)}}e:{if(h=u?mn(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=wm;else if(Su(h))if(zf)C=Em;else{C=xm;var E=Sm}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=km);if(C&&(C=C(e,u))){$f(m,C,n,p);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Ql(h,"number",h.value)}switch(E=u?mn(u):window,e){case"focusin":(Su(E)||E.contentEditable==="true")&&(dn=E,ra=u,lr=null);break;case"focusout":lr=ra=dn=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,Cu(m,n,p);break;case"selectionchange":if(Pm)break;case"keydown":case"keyup":Cu(m,n,p)}var x;if(ts)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else fn?jf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Lf&&n.locale!=="ko"&&(fn||O!=="onCompositionStart"?O==="onCompositionEnd"&&fn&&(x=Nf()):(Ot=p,Ja="value"in Ot?Ot.value:Ot.textContent,fn=!0)),E=Wo(u,O),0<E.length&&(O=new vu(O,e,null,n,p),m.push({event:O,listeners:E}),x?O.data=x:(x=Mf(n),x!==null&&(O.data=x)))),(x=mm?hm(e,n):vm(e,n))&&(u=Wo(u,"onBeforeInput"),0<u.length&&(p=new vu("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=x))}Vf(m,t)})}function Sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=pr(e,n),i!=null&&r.unshift(Sr(e,i,o)),i=pr(e,t),i!=null&&r.push(Sr(e,i,o))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=pr(n,i),s!=null&&l.unshift(Sr(n,s,a))):o||(s=pr(n,i),s!=null&&l.push(Sr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Lm=/\r\n?/g,jm=/\u0000|\uFFFD/g;function Nu(e){return(typeof e=="string"?e:""+e).replace(Lm,`
`).replace(jm,"")}function oo(e,t,n){if(t=Nu(t),Nu(e)!==t&&n)throw Error(k(425))}function Vo(){}var ia=null,la=null;function aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,Mm=typeof clearTimeout=="function"?clearTimeout:void 0,Lu=typeof Promise=="function"?Promise:void 0,$m=typeof queueMicrotask=="function"?queueMicrotask:typeof Lu<"u"?function(e){return Lu.resolve(null).then(e).catch(zm)}:sa;function zm(e){setTimeout(function(){throw e})}function Sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);vr(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Fn,xr="__reactProps$"+Fn,ht="__reactContainer$"+Fn,ua="__reactEvents$"+Fn,Im="__reactListeners$"+Fn,Rm="__reactHandles$"+Fn;function bt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ju(e);e!==null;){if(n=e[ot])return n;e=ju(e)}return t}e=n,n=e.parentNode}return null}function Ir(e){return e=e[ot]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function pi(e){return e[xr]||null}var ca=[],hn=-1;function Ut(e){return{current:e}}function V(e){0>hn||(e.current=ca[hn],ca[hn]=null,hn--)}function B(e,t){hn++,ca[hn]=e.current,e.current=t}var At={},we=Ut(At),Te=Ut(!1),en=At;function Nn(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function Qo(){V(Te),V(we)}function Mu(e,t,n){if(we.current!==At)throw Error(k(168));B(we,t),B(Te,n)}function Yf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,S0(e)||"Unknown",o));return Z({},n,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,en=we.current,B(we,e),B(Te,Te.current),!0}function $u(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Yf(e,t,en),r.__reactInternalMemoizedMergedChildContext=e,V(Te),V(we),B(we,e)):V(Te),B(Te,n)}var ct=null,mi=!1,xl=!1;function Xf(e){ct===null?ct=[e]:ct.push(e)}function Dm(e){mi=!0,Xf(e)}function Bt(){if(!xl&&ct!==null){xl=!0;var e=0,t=F;try{var n=ct;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,mi=!1}catch(o){throw ct!==null&&(ct=ct.slice(e+1)),gf(Ka,Bt),o}finally{F=t,xl=!1}}return null}var vn=[],yn=0,Xo=null,Ko=0,Ae=[],He=0,tn=null,ft=1,dt="";function Xt(e,t){vn[yn++]=Ko,vn[yn++]=Xo,Xo=e,Ko=t}function Kf(e,t,n){Ae[He++]=ft,Ae[He++]=dt,Ae[He++]=tn,tn=e;var r=ft;e=dt;var o=32-Ge(r)-1;r&=~(1<<o),n+=1;var i=32-Ge(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ft=1<<32-Ge(t)+o|n<<o|r,dt=i+e}else ft=1<<i|n<<o|r,dt=e}function rs(e){e.return!==null&&(Xt(e,1),Kf(e,1,0))}function os(e){for(;e===Xo;)Xo=vn[--yn],vn[yn]=null,Ko=vn[--yn],vn[yn]=null;for(;e===tn;)tn=Ae[--He],Ae[He]=null,dt=Ae[--He],Ae[He]=null,ft=Ae[--He],Ae[He]=null}var $e=null,Me=null,Y=!1,be=null;function bf(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Me=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tn!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Me=null,!0):!1;default:return!1}}function fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function da(e){if(Y){var t=Me;if(t){var n=t;if(!zu(e,t)){if(fa(e))throw Error(k(418));t=$t(n.nextSibling);var r=$e;t&&zu(e,t)?bf(r,n):(e.flags=e.flags&-4097|2,Y=!1,$e=e)}}else{if(fa(e))throw Error(k(418));e.flags=e.flags&-4097|2,Y=!1,$e=e}}}function Iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function io(e){if(e!==$e)return!1;if(!Y)return Iu(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!aa(e.type,e.memoizedProps)),t&&(t=Me)){if(fa(e))throw Gf(),Error(k(418));for(;t;)bf(e,t),t=$t(t.nextSibling)}if(Iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=$e?$t(e.stateNode.nextSibling):null;return!0}function Gf(){for(var e=Me;e;)e=$t(e.nextSibling)}function Ln(){Me=$e=null,Y=!1}function is(e){be===null?be=[e]:be.push(e)}var Fm=gt.ReactCurrentBatchConfig;function Xe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var bo=Ut(null),Go=null,gn=null,ls=null;function as(){ls=gn=Go=null}function ss(e){var t=bo.current;V(bo),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){Go=e,ls=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(ls!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(Go===null)throw Error(k(308));gn=e,Go.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Gt=null;function us(e){Gt===null?Gt=[e]:Gt.push(e)}function Zf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,us(t)):(n.next=o.next,o.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,vt(e,n)}return o=r.interleaved,o===null?(t.next=t,us(r)):(t.next=o.next,o.next=t),r.interleaved=t,vt(e,n)}function Co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ba(e,n)}}function Ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zo(e,t,n,r){var o=e.updateQueue;_t=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;l=0,p=u=s=null,a=i;do{var h=a.lane,w=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,v=a;switch(h=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){m=g.call(w,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(w,m,h):g,h==null)break e;m=Z({},m,h);break e;case 2:_t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=w,s=m):p=p.next=w,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(p===null&&(s=m),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);rn|=l,e.lanes=l,e.memoizedState=m}}function Du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var qf=new Gc.Component().refs;function ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hi={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Rt(e),i=pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,o),t!==null&&(Ze(t,e,o,r),Co(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Rt(e),i=pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,o),t!==null&&(Ze(t,e,o,r),Co(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Rt(e),o=pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=zt(e,o,r),t!==null&&(Ze(t,e,r,n),Co(t,e,r))}};function Fu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(o,i):!0}function ed(e,t,n){var r=!1,o=At,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=Oe(t)?en:we.current,r=t.contextTypes,i=(r=r!=null)?Nn(e,o):At),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Au(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hi.enqueueReplaceState(t,t.state,null)}function ha(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=qf,cs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=Oe(t)?en:we.current,o.context=Nn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ma(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&hi.enqueueReplaceState(o,o.state,null),Zo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===qf&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hu(e){var t=e._init;return t(e._payload)}function td(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Dt(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,y){return c===null||c.tag!==6?(c=Ol(d,f.mode,y),c.return=f,c):(c=o(c,d),c.return=f,c)}function s(f,c,d,y){var C=d.type;return C===cn?p(f,c,d.props.children,y,d.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Et&&Hu(C)===c.type)?(y=o(c,d.props),y.ref=Xn(f,c,d),y.return=f,y):(y=jo(d.type,d.key,d.props,null,f.mode,y),y.ref=Xn(f,c,d),y.return=f,y)}function u(f,c,d,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Nl(d,f.mode,y),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function p(f,c,d,y,C){return c===null||c.tag!==7?(c=qt(d,f.mode,y,C),c.return=f,c):(c=o(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ol(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case br:return d=jo(c.type,c.key,c.props,null,f.mode,d),d.ref=Xn(f,null,c),d.return=f,d;case un:return c=Nl(c,f.mode,d),c.return=f,c;case Et:var y=c._init;return m(f,y(c._payload),d)}if(Jn(c)||Bn(c))return c=qt(c,f.mode,d,null),c.return=f,c;lo(f,c)}return null}function h(f,c,d,y){var C=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return C!==null?null:a(f,c,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case br:return d.key===C?s(f,c,d,y):null;case un:return d.key===C?u(f,c,d,y):null;case Et:return C=d._init,h(f,c,C(d._payload),y)}if(Jn(d)||Bn(d))return C!==null?null:p(f,c,d,y,null);lo(f,d)}return null}function w(f,c,d,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,a(c,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case br:return f=f.get(y.key===null?d:y.key)||null,s(c,f,y,C);case un:return f=f.get(y.key===null?d:y.key)||null,u(c,f,y,C);case Et:var E=y._init;return w(f,c,d,E(y._payload),C)}if(Jn(y)||Bn(y))return f=f.get(d)||null,p(c,f,y,C,null);lo(c,y)}return null}function g(f,c,d,y){for(var C=null,E=null,x=c,O=c=0,U=null;x!==null&&O<d.length;O++){x.index>O?(U=x,x=null):U=x.sibling;var j=h(f,x,d[O],y);if(j===null){x===null&&(x=U);break}e&&x&&j.alternate===null&&t(f,x),c=i(j,c,O),E===null?C=j:E.sibling=j,E=j,x=U}if(O===d.length)return n(f,x),Y&&Xt(f,O),C;if(x===null){for(;O<d.length;O++)x=m(f,d[O],y),x!==null&&(c=i(x,c,O),E===null?C=x:E.sibling=x,E=x);return Y&&Xt(f,O),C}for(x=r(f,x);O<d.length;O++)U=w(x,f,O,d[O],y),U!==null&&(e&&U.alternate!==null&&x.delete(U.key===null?O:U.key),c=i(U,c,O),E===null?C=U:E.sibling=U,E=U);return e&&x.forEach(function(_e){return t(f,_e)}),Y&&Xt(f,O),C}function v(f,c,d,y){var C=Bn(d);if(typeof C!="function")throw Error(k(150));if(d=C.call(d),d==null)throw Error(k(151));for(var E=C=null,x=c,O=c=0,U=null,j=d.next();x!==null&&!j.done;O++,j=d.next()){x.index>O?(U=x,x=null):U=x.sibling;var _e=h(f,x,j.value,y);if(_e===null){x===null&&(x=U);break}e&&x&&_e.alternate===null&&t(f,x),c=i(_e,c,O),E===null?C=_e:E.sibling=_e,E=_e,x=U}if(j.done)return n(f,x),Y&&Xt(f,O),C;if(x===null){for(;!j.done;O++,j=d.next())j=m(f,j.value,y),j!==null&&(c=i(j,c,O),E===null?C=j:E.sibling=j,E=j);return Y&&Xt(f,O),C}for(x=r(f,x);!j.done;O++,j=d.next())j=w(x,f,O,j.value,y),j!==null&&(e&&j.alternate!==null&&x.delete(j.key===null?O:j.key),c=i(j,c,O),E===null?C=j:E.sibling=j,E=j);return e&&x.forEach(function(wt){return t(f,wt)}),Y&&Xt(f,O),C}function N(f,c,d,y){if(typeof d=="object"&&d!==null&&d.type===cn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case br:e:{for(var C=d.key,E=c;E!==null;){if(E.key===C){if(C=d.type,C===cn){if(E.tag===7){n(f,E.sibling),c=o(E,d.props.children),c.return=f,f=c;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Et&&Hu(C)===E.type){n(f,E.sibling),c=o(E,d.props),c.ref=Xn(f,E,d),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}d.type===cn?(c=qt(d.props.children,f.mode,y,d.key),c.return=f,f=c):(y=jo(d.type,d.key,d.props,null,f.mode,y),y.ref=Xn(f,c,d),y.return=f,f=y)}return l(f);case un:e:{for(E=d.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Nl(d,f.mode,y),c.return=f,f=c}return l(f);case Et:return E=d._init,N(f,c,E(d._payload),y)}if(Jn(d))return g(f,c,d,y);if(Bn(d))return v(f,c,d,y);lo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=Ol(d,f.mode,y),c.return=f,f=c),l(f)):n(f,c)}return N}var jn=td(!0),nd=td(!1),Rr={},lt=Ut(Rr),kr=Ut(Rr),Er=Ut(Rr);function Zt(e){if(e===Rr)throw Error(k(174));return e}function fs(e,t){switch(B(Er,t),B(kr,e),B(lt,Rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xl(t,e)}V(lt),B(lt,t)}function Mn(){V(lt),V(kr),V(Er)}function rd(e){Zt(Er.current);var t=Zt(lt.current),n=Xl(t,e.type);t!==n&&(B(kr,e),B(lt,n))}function ds(e){kr.current===e&&(V(lt),V(kr))}var b=Ut(0);function Jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kl=[];function ps(){for(var e=0;e<kl.length;e++)kl[e]._workInProgressVersionPrimary=null;kl.length=0}var Po=gt.ReactCurrentDispatcher,El=gt.ReactCurrentBatchConfig,nn=0,G=null,oe=null,se=null,qo=!1,ar=!1,_r=0,Am=0;function he(){throw Error(k(321))}function ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function hs(e,t,n,r,o,i){if(nn=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Po.current=e===null||e.memoizedState===null?Wm:Vm,e=n(r,o),ar){i=0;do{if(ar=!1,_r=0,25<=i)throw Error(k(301));i+=1,se=oe=null,t.updateQueue=null,Po.current=Qm,e=n(r,o)}while(ar)}if(Po.current=ei,t=oe!==null&&oe.next!==null,nn=0,se=oe=G=null,qo=!1,t)throw Error(k(300));return e}function vs(){var e=_r!==0;return _r=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?G.memoizedState=se=e:se=se.next=e,se}function Ve(){if(oe===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=se===null?G.memoizedState:se.next;if(t!==null)se=t,oe=e;else{if(e===null)throw Error(k(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},se===null?G.memoizedState=se=e:se=se.next=e}return se}function Cr(e,t){return typeof t=="function"?t(e):t}function _l(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=oe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var p=u.lane;if((nn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,G.lanes|=p,rn|=p}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Je(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cl(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Je(i,t.memoizedState)||(Pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function od(){}function id(e,t){var n=G,r=Ve(),o=t(),i=!Je(r.memoizedState,o);if(i&&(r.memoizedState=o,Pe=!0),r=r.queue,ys(sd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Pr(9,ad.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(k(349));nn&30||ld(n,t,o)}return o}function ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ad(e,t,n,r){t.value=n,t.getSnapshot=r,ud(t)&&cd(e)}function sd(e,t,n){return n(function(){ud(t)&&cd(e)})}function ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function cd(e){var t=vt(e,1);t!==null&&Ze(t,e,1,-1)}function Uu(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Bm.bind(null,G,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fd(){return Ve().memoizedState}function To(e,t,n,r){var o=et();G.flags|=e,o.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function vi(e,t,n,r){var o=Ve();r=r===void 0?null:r;var i=void 0;if(oe!==null){var l=oe.memoizedState;if(i=l.destroy,r!==null&&ms(r,l.deps)){o.memoizedState=Pr(t,n,i,r);return}}G.flags|=e,o.memoizedState=Pr(1|t,n,i,r)}function Bu(e,t){return To(8390656,8,e,t)}function ys(e,t){return vi(2048,8,e,t)}function dd(e,t){return vi(4,2,e,t)}function pd(e,t){return vi(4,4,e,t)}function md(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hd(e,t,n){return n=n!=null?n.concat([e]):null,vi(4,4,md.bind(null,t,e),n)}function gs(){}function vd(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ms(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yd(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ms(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gd(e,t,n){return nn&21?(Je(n,t)||(n=xf(),G.lanes|=n,rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function Hm(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=El.transition;El.transition={};try{e(!1),t()}finally{F=n,El.transition=r}}function wd(){return Ve().memoizedState}function Um(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sd(e))xd(t,n);else if(n=Zf(e,t,n,r),n!==null){var o=xe();Ze(n,e,r,o),kd(n,t,r)}}function Bm(e,t,n){var r=Rt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sd(e))xd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Je(a,l)){var s=t.interleaved;s===null?(o.next=o,us(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Zf(e,t,o,r),n!==null&&(o=xe(),Ze(n,e,r,o),kd(n,t,r))}}function Sd(e){var t=e.alternate;return e===G||t!==null&&t===G}function xd(e,t){ar=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ba(e,n)}}var ei={readContext:We,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Wm={readContext:We,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,md.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Um.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Uu,useDebugValue:gs,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Uu(!1),t=e[0];return e=Hm.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=et();if(Y){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ue===null)throw Error(k(349));nn&30||ld(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Bu(sd.bind(null,r,i,e),[e]),r.flags|=2048,Pr(9,ad.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=et(),t=ue.identifierPrefix;if(Y){var n=dt,r=ft;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Am++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vm={readContext:We,useCallback:vd,useContext:We,useEffect:ys,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:pd,useMemo:yd,useReducer:_l,useRef:fd,useState:function(){return _l(Cr)},useDebugValue:gs,useDeferredValue:function(e){var t=Ve();return gd(t,oe.memoizedState,e)},useTransition:function(){var e=_l(Cr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:od,useSyncExternalStore:id,useId:wd,unstable_isNewReconciler:!1},Qm={readContext:We,useCallback:vd,useContext:We,useEffect:ys,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:pd,useMemo:yd,useReducer:Cl,useRef:fd,useState:function(){return Cl(Cr)},useDebugValue:gs,useDeferredValue:function(e){var t=Ve();return oe===null?t.memoizedState=e:gd(t,oe.memoizedState,e)},useTransition:function(){var e=Cl(Cr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:od,useSyncExternalStore:id,useId:wd,unstable_isNewReconciler:!1};function $n(e,t){try{var n="",r=t;do n+=w0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function va(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ym=typeof WeakMap=="function"?WeakMap:Map;function Ed(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ni||(ni=!0,Pa=r),va(e,t)},n}function _d(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){va(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){va(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ym;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=lh.bind(null,e,t,n),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var Xm=gt.ReactCurrentOwner,Pe=!1;function Se(e,t,n,r){t.child=e===null?nd(t,null,n,r):jn(t,e.child,n,r)}function Yu(e,t,n,r,o){n=n.render;var i=t.ref;return Cn(t,o),r=hs(e,t,n,r,i,o),n=vs(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(Y&&n&&rs(t),t.flags|=1,Se(e,t,r,o),t.child)}function Xu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ps(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Cd(e,t,i,r,o)):(e=jo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:gr,n(l,r)&&e.ref===t.ref)return yt(e,t,o)}return t.flags|=1,e=Dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Cd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(gr(i,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,yt(e,t,o)}return ya(e,t,n,r,o)}function Pd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Sn,je),je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Sn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(Sn,je),je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(Sn,je),je|=r;return Se(e,t,o,n),t.child}function Td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ya(e,t,n,r,o){var i=Oe(n)?en:we.current;return i=Nn(t,i),Cn(t,o),n=hs(e,t,n,r,i,o),r=vs(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(Y&&r&&rs(t),t.flags|=1,Se(e,t,n,o),t.child)}function Ku(e,t,n,r,o){if(Oe(n)){var i=!0;Yo(t)}else i=!1;if(Cn(t,o),t.stateNode===null)Oo(e,t),ed(t,n,r),ha(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Oe(n)?en:we.current,u=Nn(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Au(t,l,r,u),_t=!1;var h=t.memoizedState;l.state=h,Zo(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Te.current||_t?(typeof p=="function"&&(ma(t,n,p,r),s=t.memoizedState),(a=_t||Fu(t,n,a,r,h,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Jf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Xe(t.type,a),l.props=u,m=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=We(s):(s=Oe(n)?en:we.current,s=Nn(t,s));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||h!==s)&&Au(t,l,r,s),_t=!1,h=t.memoizedState,l.state=h,Zo(t,r,l,o);var g=t.memoizedState;a!==m||h!==g||Te.current||_t?(typeof w=="function"&&(ma(t,n,w,r),g=t.memoizedState),(u=_t||Fu(t,n,u,r,h,g,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ga(e,t,n,r,i,o)}function ga(e,t,n,r,o,i){Td(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&$u(t,n,!1),yt(e,t,i);r=t.stateNode,Xm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=jn(t,e.child,null,i),t.child=jn(t,null,a,i)):Se(e,t,a,i),t.memoizedState=r.state,o&&$u(t,n,!0),t.child}function Od(e){var t=e.stateNode;t.pendingContext?Mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mu(e,t.context,!1),fs(e,t.containerInfo)}function bu(e,t,n,r,o){return Ln(),is(o),t.flags|=256,Se(e,t,n,r),t.child}var wa={dehydrated:null,treeContext:null,retryLane:0};function Sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t,n){var r=t.pendingProps,o=b.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(b,o&1),e===null)return da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=wi(l,r,0,null),e=qt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Sa(n),t.memoizedState=wa,e):ws(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Km(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Dt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Dt(a,i):(i=qt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Sa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=wa,r}return i=e.child,e=i.sibling,r=Dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ws(e,t){return t=wi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&is(r),jn(t,e.child,null,n),e=ws(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Km(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(k(422))),ao(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=wi({mode:"visible",children:r.children},o,0,null),i=qt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&jn(t,e.child,null,l),t.child.memoizedState=Sa(l),t.memoizedState=wa,i);if(!(t.mode&1))return ao(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=Pl(i,r,void 0),ao(e,t,l,r)}if(a=(l&e.childLanes)!==0,Pe||a){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,vt(e,o),Ze(r,e,o,-1))}return Cs(),r=Pl(Error(k(421))),ao(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ah.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Me=$t(o.nextSibling),$e=t,Y=!0,be=null,e!==null&&(Ae[He++]=ft,Ae[He++]=dt,Ae[He++]=tn,ft=e.id,dt=e.overflow,tn=t),t=ws(t,r.children),t.flags|=4096,t)}function Gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function Tl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ld(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Se(e,t,r.children,n),r=b.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gu(e,n,t);else if(e.tag===19)Gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(b,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Tl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Tl(t,!0,n,null,i);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bm(e,t,n){switch(t.tag){case 3:Od(t),Ln();break;case 5:rd(t);break;case 1:Oe(t.type)&&Yo(t);break;case 4:fs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(bo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(b,b.current&1),t.flags|=128,null):n&t.child.childLanes?Nd(e,t,n):(B(b,b.current&1),e=yt(e,t,n),e!==null?e.sibling:null);B(b,b.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ld(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(b,b.current),r)break;return null;case 22:case 23:return t.lanes=0,Pd(e,t,n)}return yt(e,t,n)}var jd,xa,Md,$d;jd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xa=function(){};Md=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Zt(lt.current);var i=null;switch(n){case"input":o=Wl(e,o),r=Wl(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=Yl(e,o),r=Yl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vo)}Kl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&W("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};$d=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gm(e,t,n){var r=t.pendingProps;switch(os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Oe(t.type)&&Qo(),ve(t),null;case 3:return r=t.stateNode,Mn(),V(Te),V(we),ps(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(Na(be),be=null))),xa(e,t),ve(t),null;case 5:ds(t);var o=Zt(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)Md(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ve(t),null}if(e=Zt(lt.current),io(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ot]=t,r[xr]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<er.length;o++)W(er[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":iu(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":au(r,i),W("invalid",r)}Kl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,a,e),o=["children",""+a]):fr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Gr(r),lu(r,i,!0);break;case"textarea":Gr(r),su(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ot]=t,e[xr]=r,jd(e,t,!1,!1),t.stateNode=e;e:{switch(l=bl(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<er.length;o++)W(er[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":iu(e,r),o=Wl(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":au(e,r),o=Yl(e,r),W("invalid",e);break;default:o=r}Kl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?uf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&af(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&dr(e,s):typeof s=="number"&&dr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&W("scroll",e):s!=null&&Wa(e,i,s,l))}switch(n){case"input":Gr(e),lu(e,r,!1);break;case"textarea":Gr(e),su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xn(e,!!r.multiple,i,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)$d(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Zt(Er.current),Zt(lt.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:oo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return ve(t),null;case 13:if(V(b),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Me!==null&&t.mode&1&&!(t.flags&128))Gf(),Ln(),t.flags|=98560,i=!1;else if(i=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[ot]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else be!==null&&(Na(be),be=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||b.current&1?ie===0&&(ie=3):Cs())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Mn(),xa(e,t),e===null&&wr(t.stateNode.containerInfo),ve(t),null;case 10:return ss(t.type._context),ve(t),null;case 17:return Oe(t.type)&&Qo(),ve(t),null;case 19:if(V(b),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Kn(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Jo(e),l!==null){for(t.flags|=128,Kn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(b,b.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>zn&&(t.flags|=128,r=!0,Kn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Jo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return ve(t),null}else 2*te()-i.renderingStartTime>zn&&n!==1073741824&&(t.flags|=128,r=!0,Kn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=b.current,B(b,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return _s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Zm(e,t){switch(os(t),t.tag){case 1:return Oe(t.type)&&Qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),V(Te),V(we),ps(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ds(t),null;case 13:if(V(b),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(b),null;case 4:return Mn(),null;case 10:return ss(t.type._context),null;case 22:case 23:return _s(),null;case 24:return null;default:return null}}var so=!1,ge=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,P=null;function wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function ka(e,t,n){try{n()}catch(r){q(e,t,r)}}var Zu=!1;function qm(e,t){if(ia=Uo,e=Df(),ns(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,m=e,h=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++p===r&&(s=l),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(la={focusedElem:e,selectionRange:n},Uo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,N=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xe(t.type,v),N);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=Zu,Zu=!1,g}function sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ka(t,n,i)}o=o.next}while(o!==r)}}function yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ea(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[xr],delete t[ua],delete t[Im],delete t[Rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Id(e){return e.tag===5||e.tag===3||e.tag===4}function Ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vo));else if(r!==4&&(e=e.child,e!==null))for(_a(e,t,n),e=e.sibling;e!==null;)_a(e,t,n),e=e.sibling}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}var fe=null,Ke=!1;function St(e,t,n){for(n=n.child;n!==null;)Rd(e,t,n),n=n.sibling}function Rd(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(ui,n)}catch{}switch(n.tag){case 5:ge||wn(n,t);case 6:var r=fe,o=Ke;fe=null,St(e,t,n),fe=r,Ke=o,fe!==null&&(Ke?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Ke?(e=fe,n=n.stateNode,e.nodeType===8?Sl(e.parentNode,n):e.nodeType===1&&Sl(e,n),vr(e)):Sl(fe,n.stateNode));break;case 4:r=fe,o=Ke,fe=n.stateNode.containerInfo,Ke=!0,St(e,t,n),fe=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ka(n,t,l),o=o.next}while(o!==r)}St(e,t,n);break;case 1:if(!ge&&(wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,St(e,t,n),ge=r):St(e,t,n);break;default:St(e,t,n)}}function qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jm),t.forEach(function(r){var o=sh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,Ke=!1;break e;case 3:fe=a.stateNode.containerInfo,Ke=!0;break e;case 4:fe=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(fe===null)throw Error(k(160));Rd(i,l,o),fe=null,Ke=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){q(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dd(t,e),t=t.sibling}function Dd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),qe(e),r&4){try{sr(3,e,e.return),yi(3,e)}catch(v){q(e,e.return,v)}try{sr(5,e,e.return)}catch(v){q(e,e.return,v)}}break;case 1:Ye(t,e),qe(e),r&512&&n!==null&&wn(n,n.return);break;case 5:if(Ye(t,e),qe(e),r&512&&n!==null&&wn(n,n.return),e.flags&32){var o=e.stateNode;try{dr(o,"")}catch(v){q(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&rf(o,i),bl(a,l);var u=bl(a,i);for(l=0;l<s.length;l+=2){var p=s[l],m=s[l+1];p==="style"?uf(o,m):p==="dangerouslySetInnerHTML"?af(o,m):p==="children"?dr(o,m):Wa(o,p,m,u)}switch(a){case"input":Vl(o,i);break;case"textarea":of(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?xn(o,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?xn(o,!!i.multiple,i.defaultValue,!0):xn(o,!!i.multiple,i.multiple?[]:"",!1))}o[xr]=i}catch(v){q(e,e.return,v)}}break;case 6:if(Ye(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){q(e,e.return,v)}}break;case 3:if(Ye(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(v){q(e,e.return,v)}break;case 4:Ye(t,e),qe(e);break;case 13:Ye(t,e),qe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ks=te())),r&4&&qu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||p,Ye(t,e),ge=u):Ye(t,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(m=P=p;P!==null;){switch(h=P,w=h.child,h.tag){case 0:case 11:case 14:case 15:sr(4,h,h.return);break;case 1:wn(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){q(r,n,v)}}break;case 5:wn(h,h.return);break;case 22:if(h.memoizedState!==null){tc(m);continue}}w!==null?(w.return=h,P=w):tc(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=sf("display",l))}catch(v){q(e,e.return,v)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(v){q(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ye(t,e),qe(e),r&4&&qu(e);break;case 21:break;default:Ye(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Id(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(dr(o,""),r.flags&=-33);var i=Ju(e);Ca(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ju(e);_a(e,a,l);break;default:throw Error(k(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eh(e,t,n){P=e,Fd(e)}function Fd(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||so;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ge;a=so;var u=ge;if(so=l,(ge=s)&&!u)for(P=o;P!==null;)l=P,s=l.child,l.tag===22&&l.memoizedState!==null?nc(o):s!==null?(s.return=l,P=s):nc(o);for(;i!==null;)P=i,Fd(i),i=i.sibling;P=o,so=a,ge=u}ec(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):ec(e)}}function ec(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||yi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Du(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Du(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&vr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ge||t.flags&512&&Ea(t)}catch(h){q(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function tc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function nc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yi(4,t)}catch(s){q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){q(t,o,s)}}var i=t.return;try{Ea(t)}catch(s){q(t,i,s)}break;case 5:var l=t.return;try{Ea(t)}catch(s){q(t,l,s)}}}catch(s){q(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var th=Math.ceil,ti=gt.ReactCurrentDispatcher,Ss=gt.ReactCurrentOwner,Be=gt.ReactCurrentBatchConfig,I=0,ue=null,re=null,pe=0,je=0,Sn=Ut(0),ie=0,Tr=null,rn=0,gi=0,xs=0,ur=null,Ce=null,ks=0,zn=1/0,ut=null,ni=!1,Pa=null,It=null,uo=!1,Nt=null,ri=0,cr=0,Ta=null,No=-1,Lo=0;function xe(){return I&6?te():No!==-1?No:No=te()}function Rt(e){return e.mode&1?I&2&&pe!==0?pe&-pe:Fm.transition!==null?(Lo===0&&(Lo=xf()),Lo):(e=F,e!==0||(e=window.event,e=e===void 0?16:Of(e.type)),e):1}function Ze(e,t,n,r){if(50<cr)throw cr=0,Ta=null,Error(k(185));$r(e,n,r),(!(I&2)||e!==ue)&&(e===ue&&(!(I&2)&&(gi|=n),ie===4&&Pt(e,pe)),Ne(e,r),n===1&&I===0&&!(t.mode&1)&&(zn=te()+500,mi&&Bt()))}function Ne(e,t){var n=e.callbackNode;F0(e,t);var r=Ho(e,e===ue?pe:0);if(r===0)n!==null&&fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fu(n),t===1)e.tag===0?Dm(rc.bind(null,e)):Xf(rc.bind(null,e)),$m(function(){!(I&6)&&Bt()}),n=null;else{switch(kf(r)){case 1:n=Ka;break;case 4:n=wf;break;case 16:n=Ao;break;case 536870912:n=Sf;break;default:n=Ao}n=Yd(n,Ad.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ad(e,t){if(No=-1,Lo=0,I&6)throw Error(k(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var r=Ho(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oi(e,r);else{t=r;var o=I;I|=2;var i=Ud();(ue!==e||pe!==t)&&(ut=null,zn=te()+500,Jt(e,t));do try{oh();break}catch(a){Hd(e,a)}while(!0);as(),ti.current=i,I=o,re!==null?t=0:(ue=null,pe=0,t=ie)}if(t!==0){if(t===2&&(o=ea(e),o!==0&&(r=o,t=Oa(e,o))),t===1)throw n=Tr,Jt(e,0),Pt(e,r),Ne(e,te()),n;if(t===6)Pt(e,r);else{if(o=e.current.alternate,!(r&30)&&!nh(o)&&(t=oi(e,r),t===2&&(i=ea(e),i!==0&&(r=i,t=Oa(e,i))),t===1))throw n=Tr,Jt(e,0),Pt(e,r),Ne(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Kt(e,Ce,ut);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=ks+500-te(),10<t)){if(Ho(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=sa(Kt.bind(null,e,Ce,ut),t);break}Kt(e,Ce,ut);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ge(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*th(r/1960))-r,10<r){e.timeoutHandle=sa(Kt.bind(null,e,Ce,ut),r);break}Kt(e,Ce,ut);break;case 5:Kt(e,Ce,ut);break;default:throw Error(k(329))}}}return Ne(e,te()),e.callbackNode===n?Ad.bind(null,e):null}function Oa(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=oi(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Na(t)),e}function Na(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function nh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Je(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~xs,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function rc(e){if(I&6)throw Error(k(327));Pn();var t=Ho(e,0);if(!(t&1))return Ne(e,te()),null;var n=oi(e,t);if(e.tag!==0&&n===2){var r=ea(e);r!==0&&(t=r,n=Oa(e,r))}if(n===1)throw n=Tr,Jt(e,0),Pt(e,t),Ne(e,te()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,Ce,ut),Ne(e,te()),null}function Es(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(zn=te()+500,mi&&Bt())}}function on(e){Nt!==null&&Nt.tag===0&&!(I&6)&&Pn();var t=I;I|=1;var n=Be.transition,r=F;try{if(Be.transition=null,F=1,e)return e()}finally{F=r,Be.transition=n,I=t,!(I&6)&&Bt()}}function _s(){je=Sn.current,V(Sn)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mm(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(os(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qo();break;case 3:Mn(),V(Te),V(we),ps();break;case 5:ds(r);break;case 4:Mn();break;case 13:V(b);break;case 19:V(b);break;case 10:ss(r.type._context);break;case 22:case 23:_s()}n=n.return}if(ue=e,re=e=Dt(e.current,null),pe=je=t,ie=0,Tr=null,xs=gi=rn=0,Ce=ur=null,Gt!==null){for(t=0;t<Gt.length;t++)if(n=Gt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Gt=null}return e}function Hd(e,t){do{var n=re;try{if(as(),Po.current=ei,qo){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}qo=!1}if(nn=0,se=oe=G=null,ar=!1,_r=0,Ss.current=null,n===null||n.return===null){ie=1,Tr=t,re=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=pe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Vu(l);if(w!==null){w.flags&=-257,Qu(w,l,a,i,t),w.mode&1&&Wu(i,u,t),t=w,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){Wu(i,u,t),Cs();break e}s=Error(k(426))}}else if(Y&&a.mode&1){var N=Vu(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Qu(N,l,a,i,t),is($n(s,a));break e}}i=s=$n(s,a),ie!==4&&(ie=2),ur===null?ur=[i]:ur.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ed(i,s,t);Ru(i,f);break e;case 1:a=s;var c=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(It===null||!It.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=_d(i,a,t);Ru(i,y);break e}}i=i.return}while(i!==null)}Wd(n)}catch(C){t=C,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Ud(){var e=ti.current;return ti.current=ei,e===null?ei:e}function Cs(){(ie===0||ie===3||ie===2)&&(ie=4),ue===null||!(rn&268435455)&&!(gi&268435455)||Pt(ue,pe)}function oi(e,t){var n=I;I|=2;var r=Ud();(ue!==e||pe!==t)&&(ut=null,Jt(e,t));do try{rh();break}catch(o){Hd(e,o)}while(!0);if(as(),I=n,ti.current=r,re!==null)throw Error(k(261));return ue=null,pe=0,ie}function rh(){for(;re!==null;)Bd(re)}function oh(){for(;re!==null&&!N0();)Bd(re)}function Bd(e){var t=Qd(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Wd(e):re=t,Ss.current=null}function Wd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zm(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,re=null;return}}else if(n=Gm(n,t,je),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ie===0&&(ie=5)}function Kt(e,t,n){var r=F,o=Be.transition;try{Be.transition=null,F=1,ih(e,t,n,r)}finally{Be.transition=o,F=r}return null}function ih(e,t,n,r){do Pn();while(Nt!==null);if(I&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(A0(e,i),e===ue&&(re=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,Yd(Ao,function(){return Pn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=F;F=1;var a=I;I|=4,Ss.current=null,qm(e,n),Dd(n,e),Cm(la),Uo=!!ia,la=ia=null,e.current=n,eh(n),L0(),I=a,F=l,Be.transition=i}else e.current=n;if(uo&&(uo=!1,Nt=e,ri=o),i=e.pendingLanes,i===0&&(It=null),$0(n.stateNode),Ne(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ni)throw ni=!1,e=Pa,Pa=null,e;return ri&1&&e.tag!==0&&Pn(),i=e.pendingLanes,i&1?e===Ta?cr++:(cr=0,Ta=e):cr=0,Bt(),null}function Pn(){if(Nt!==null){var e=kf(ri),t=Be.transition,n=F;try{if(Be.transition=null,F=16>e?16:e,Nt===null)var r=!1;else{if(e=Nt,Nt=null,ri=0,I&6)throw Error(k(331));var o=I;for(I|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(P=u;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:sr(8,p,i)}var m=p.child;if(m!==null)m.return=p,P=m;else for(;P!==null;){p=P;var h=p.sibling,w=p.return;if(zd(p),p===u){P=null;break}if(h!==null){h.return=w,P=h;break}P=w}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var N=v.sibling;v.sibling=null,v=N}while(v!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:sr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,P=d;else e:for(l=c;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yi(9,a)}}catch(C){q(a,a.return,C)}if(a===l){P=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,P=y;break e}P=a.return}}if(I=o,Bt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(ui,e)}catch{}r=!0}return r}finally{F=n,Be.transition=t}}return!1}function oc(e,t,n){t=$n(n,t),t=Ed(e,t,1),e=zt(e,t,1),t=xe(),e!==null&&($r(e,1,t),Ne(e,t))}function q(e,t,n){if(e.tag===3)oc(e,e,n);else for(;t!==null;){if(t.tag===3){oc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=$n(n,e),e=_d(t,e,1),t=zt(t,e,1),e=xe(),t!==null&&($r(t,1,e),Ne(t,e));break}}t=t.return}}function lh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(ie===4||ie===3&&(pe&130023424)===pe&&500>te()-ks?Jt(e,0):xs|=n),Ne(e,t)}function Vd(e,t){t===0&&(e.mode&1?(t=qr,qr<<=1,!(qr&130023424)&&(qr=4194304)):t=1);var n=xe();e=vt(e,t),e!==null&&($r(e,t,n),Ne(e,n))}function ah(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vd(e,n)}function sh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Vd(e,n)}var Qd;Qd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,bm(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,Y&&t.flags&1048576&&Kf(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oo(e,t),e=t.pendingProps;var o=Nn(t,we.current);Cn(t,n),o=hs(null,t,r,e,o,n);var i=vs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(i=!0,Yo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,cs(t),o.updater=hi,t.stateNode=o,o._reactInternals=t,ha(t,r,e,n),t=ga(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&rs(t),Se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ch(r),e=Xe(r,e),o){case 0:t=ya(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=Yu(null,t,r,e,n);break e;case 14:t=Xu(null,t,r,Xe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),ya(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Ku(e,t,r,o,n);case 3:e:{if(Od(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Jf(e,t),Zo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=$n(Error(k(423)),t),t=bu(e,t,r,n,o);break e}else if(r!==o){o=$n(Error(k(424)),t),t=bu(e,t,r,n,o);break e}else for(Me=$t(t.stateNode.containerInfo.firstChild),$e=t,Y=!0,be=null,n=nd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===o){t=yt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return rd(t),e===null&&da(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,aa(r,o)?l=null:i!==null&&aa(r,i)&&(t.flags|=32),Td(e,t),Se(e,t,l,n),t.child;case 6:return e===null&&da(t),null;case 13:return Nd(e,t,n);case 4:return fs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Yu(e,t,r,o,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,B(bo,r._currentValue),r._currentValue=l,i!==null)if(Je(i.value,l)){if(i.children===o.children&&!Te.current){t=yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=pt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),pa(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),pa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Cn(t,n),o=We(o),r=r(o),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,o=Xe(r,t.pendingProps),o=Xe(r.type,o),Xu(e,t,r,o,n);case 15:return Cd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Oo(e,t),t.tag=1,Oe(r)?(e=!0,Yo(t)):e=!1,Cn(t,n),ed(t,r,o),ha(t,r,o,n),ga(null,t,r,!0,e,n);case 19:return Ld(e,t,n);case 22:return Pd(e,t,n)}throw Error(k(156,t.tag))};function Yd(e,t){return gf(e,t)}function uh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new uh(e,t,n,r)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ch(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qa)return 11;if(e===Ya)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ps(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cn:return qt(n.children,o,i,t);case Va:l=8,o|=8;break;case Al:return e=Ue(12,n,t,o|2),e.elementType=Al,e.lanes=i,e;case Hl:return e=Ue(13,n,t,o),e.elementType=Hl,e.lanes=i,e;case Ul:return e=Ue(19,n,t,o),e.elementType=Ul,e.lanes=i,e;case ef:return wi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jc:l=10;break e;case qc:l=9;break e;case Qa:l=11;break e;case Ya:l=14;break e;case Et:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ue(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function qt(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function wi(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=ef,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function Nl(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ts(e,t,n,r,o,i,l,a,s){return e=new fh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cs(i),e}function dh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xd(e){if(!e)return At;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Oe(n))return Yf(e,n,t)}return t}function Kd(e,t,n,r,o,i,l,a,s){return e=Ts(n,r,!0,e,o,i,l,a,s),e.context=Xd(null),n=e.current,r=xe(),o=Rt(n),i=pt(r,o),i.callback=t??null,zt(n,i,o),e.current.lanes=o,$r(e,o,r),Ne(e,r),e}function Si(e,t,n,r){var o=t.current,i=xe(),l=Rt(o);return n=Xd(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(o,t,l),e!==null&&(Ze(e,o,l,i),Co(e,o,l)),l}function ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ic(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){ic(e,t),(e=e.alternate)&&ic(e,t)}function ph(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ns(e){this._internalRoot=e}xi.prototype.render=Ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Si(e,t,null,null)};xi.prototype.unmount=Ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Si(null,e,null,null)}),t[ht]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Tf(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lc(){}function mh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ii(l);i.call(u)}}var l=Kd(t,r,e,0,null,!1,!1,"",lc);return e._reactRootContainer=l,e[ht]=l.current,wr(e.nodeType===8?e.parentNode:e),on(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ii(s);a.call(u)}}var s=Ts(e,0,!1,null,null,!1,!1,"",lc);return e._reactRootContainer=s,e[ht]=s.current,wr(e.nodeType===8?e.parentNode:e),on(function(){Si(t,s,n,r)}),s}function Ei(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=ii(l);a.call(s)}}Si(t,l,e,o)}else l=mh(n,t,e,o,r);return ii(l)}Ef=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(ba(t,n|1),Ne(t,te()),!(I&6)&&(zn=te()+500,Bt()))}break;case 13:on(function(){var r=vt(e,1);if(r!==null){var o=xe();Ze(r,e,1,o)}}),Os(e,1)}};Ga=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=xe();Ze(t,e,134217728,n)}Os(e,134217728)}};_f=function(e){if(e.tag===13){var t=Rt(e),n=vt(e,t);if(n!==null){var r=xe();Ze(n,e,t,r)}Os(e,t)}};Cf=function(){return F};Pf=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Zl=function(e,t,n){switch(t){case"input":if(Vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=pi(r);if(!o)throw Error(k(90));nf(r),Vl(r,o)}}}break;case"textarea":of(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};df=Es;pf=on;var hh={usingClientEntryPoint:!1,Events:[Ir,mn,pi,cf,ff,Es]},bn={findFiberByHostInstance:bt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vh={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vf(e),e===null?null:e.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||ph,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{ui=co.inject(vh),it=co}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hh;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(k(200));return dh(e,t,null,n)};Re.createRoot=function(e,t){if(!Ls(e))throw Error(k(299));var n=!1,r="",o=bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ts(e,1,!1,null,null,n,!1,r,o),e[ht]=t.current,wr(e.nodeType===8?e.parentNode:e),new Ns(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=vf(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return on(e)};Re.hydrate=function(e,t,n){if(!ki(t))throw Error(k(200));return Ei(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Ls(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=bd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Kd(t,null,e,1,n??null,o,!1,i,l),e[ht]=t.current,wr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new xi(t)};Re.render=function(e,t,n){if(!ki(t))throw Error(k(200));return Ei(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!ki(e))throw Error(k(40));return e._reactRootContainer?(on(function(){Ei(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};Re.unstable_batchedUpdates=Es;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ki(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ei(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";function Gd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd)}catch(e){console.error(e)}}Gd(),Xc.exports=Re;var Zd=Xc.exports,ac=Zd;Dl.createRoot=ac.createRoot,Dl.hydrateRoot=ac.hydrateRoot;function js({children:e,id:t}){return S.jsx("h1",{id:t&&t,className:"text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white",children:e})}function yh(){return S.jsx("div",{id:"Contact",className:"flex flex-col mb-10 mx-auto",children:S.jsx("div",{className:"flex justify-center items-center",children:S.jsxs("form",{action:"https://getform.io/f/navkkevb",method:"POST",className:"flex flex-col w-full md:w-7/12",children:[S.jsx(js,{children:"Contact"}),S.jsx("input",{type:"text",name:"name",placeholder:"Name",className:"p-2 bg-transparent border-2 rounded-md focus:outline-none"}),S.jsx("input",{type:"text",name:"email",placeholder:"Email",className:"my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"}),S.jsx("textarea",{name:"message",placeholder:"Message",rows:"10",className:"p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"}),S.jsx("button",{type:"button",className:"text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white",children:"Work With Me"})]})})})}function gh(){return S.jsx("div",{className:"py-5 text-center",children:S.jsxs("div",{className:"container max-w-screen-lg mx-auto",children:[S.jsx("div",{children:S.jsxs("div",{className:"flex flex-wrap justify-center gap-2",children:[S.jsx("a",{href:"https://www.linkedin.com/in/matthew-davies-a0931a19b/",className:"bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full",children:S.jsx("svg",{className:"w-5 h-5 fill-current",role:"img",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:S.jsx("g",{children:S.jsx("path",{d:"M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"})})})}),S.jsx("a",{href:"https://github.com/MattDavies-code",className:"bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full",children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"w-5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:S.jsx("g",{fill:"none",children:S.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",fill:"currentColor"})})})}),S.jsx("a",{href:"https://letterboxd.com/maffywaffy/films/by/date/",className:"bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full",children:"Letterboxd"})]})}),S.jsxs("div",{className:"mt-5 text-sm text-gray-500",children:[" ","© ",new Date().getFullYear()," Matthew Davies"]})]})})}const wh="/assets/photo-cropped.jpg";function Sh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function xh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var kh=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xh(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Sh(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",li="-moz-",R="-webkit-",Jd="comm",Ms="rule",$s="decl",Eh="@import",qd="@keyframes",_h="@layer",Ch=Math.abs,_i=String.fromCharCode,Ph=Object.assign;function Th(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function ep(e){return e.trim()}function Oh(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function La(e,t){return e.indexOf(t)}function de(e,t){return e.charCodeAt(t)|0}function Or(e,t,n){return e.slice(t,n)}function tt(e){return e.length}function zs(e){return e.length}function fo(e,t){return t.push(e),e}function Nh(e,t){return e.map(t).join("")}var Ci=1,In=1,tp=0,Le=0,ne=0,An="";function Pi(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ci,column:In,length:l,return:""}}function Gn(e,t){return Ph(Pi("",null,null,"",null,null,0),e,{length:-e.length},t)}function Lh(){return ne}function jh(){return ne=Le>0?de(An,--Le):0,In--,ne===10&&(In=1,Ci--),ne}function ze(){return ne=Le<tp?de(An,Le++):0,In++,ne===10&&(In=1,Ci++),ne}function at(){return de(An,Le)}function Mo(){return Le}function Dr(e,t){return Or(An,e,t)}function Nr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function np(e){return Ci=In=1,tp=tt(An=e),Le=0,[]}function rp(e){return An="",e}function $o(e){return ep(Dr(Le-1,ja(e===91?e+2:e===40?e+1:e)))}function Mh(e){for(;(ne=at())&&ne<33;)ze();return Nr(e)>2||Nr(ne)>3?"":" "}function $h(e,t){for(;--t&&ze()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Dr(e,Mo()+(t<6&&at()==32&&ze()==32))}function ja(e){for(;ze();)switch(ne){case e:return Le;case 34:case 39:e!==34&&e!==39&&ja(ne);break;case 40:e===41&&ja(e);break;case 92:ze();break}return Le}function zh(e,t){for(;ze()&&e+ne!==57;)if(e+ne===84&&at()===47)break;return"/*"+Dr(t,Le-1)+"*"+_i(e===47?e:ze())}function Ih(e){for(;!Nr(at());)ze();return Dr(e,Le)}function Rh(e){return rp(zo("",null,null,null,[""],e=np(e),0,[0],e))}function zo(e,t,n,r,o,i,l,a,s){for(var u=0,p=0,m=l,h=0,w=0,g=0,v=1,N=1,f=1,c=0,d="",y=o,C=i,E=r,x=d;N;)switch(g=c,c=ze()){case 40:if(g!=108&&de(x,m-1)==58){La(x+=D($o(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:x+=$o(c);break;case 9:case 10:case 13:case 32:x+=Mh(g);break;case 92:x+=$h(Mo()-1,7);continue;case 47:switch(at()){case 42:case 47:fo(Dh(zh(ze(),Mo()),t,n),s);break;default:x+="/"}break;case 123*v:a[u++]=tt(x)*f;case 125*v:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+p:f==-1&&(x=D(x,/\f/g,"")),w>0&&tt(x)-m&&fo(w>32?uc(x+";",r,n,m-1):uc(D(x," ","")+";",r,n,m-2),s);break;case 59:x+=";";default:if(fo(E=sc(x,t,n,u,p,o,a,d,y=[],C=[],m),i),c===123)if(p===0)zo(x,t,E,E,y,i,m,a,C);else switch(h===99&&de(x,3)===110?100:h){case 100:case 108:case 109:case 115:zo(e,E,E,r&&fo(sc(e,E,E,0,0,o,a,d,o,y=[],m),C),o,C,m,a,r?y:C);break;default:zo(x,E,E,E,[""],C,0,a,C)}}u=p=w=0,v=f=1,d=x="",m=l;break;case 58:m=1+tt(x),w=g;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&jh()==125)continue}switch(x+=_i(c),c*v){case 38:f=p>0?1:(x+="\f",-1);break;case 44:a[u++]=(tt(x)-1)*f,f=1;break;case 64:at()===45&&(x+=$o(ze())),h=at(),p=m=tt(d=x+=Ih(Mo())),c++;break;case 45:g===45&&tt(x)==2&&(v=0)}}return i}function sc(e,t,n,r,o,i,l,a,s,u,p){for(var m=o-1,h=o===0?i:[""],w=zs(h),g=0,v=0,N=0;g<r;++g)for(var f=0,c=Or(e,m+1,m=Ch(v=l[g])),d=e;f<w;++f)(d=ep(v>0?h[f]+" "+c:D(c,/&\f/g,h[f])))&&(s[N++]=d);return Pi(e,t,n,o===0?Ms:a,s,u,p)}function Dh(e,t,n){return Pi(e,t,n,Jd,_i(Lh()),Or(e,2,-2),0)}function uc(e,t,n,r){return Pi(e,t,n,$s,Or(e,0,r),Or(e,r+1,-1),r)}function Tn(e,t){for(var n="",r=zs(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Fh(e,t,n,r){switch(e.type){case _h:if(e.children.length)break;case Eh:case $s:return e.return=e.return||e.value;case Jd:return"";case qd:return e.return=e.value+"{"+Tn(e.children,r)+"}";case Ms:e.value=e.props.join(",")}return tt(n=Tn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ah(e){var t=zs(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Hh(e){return function(t){t.root||(t=t.return)&&e(t)}}function Uh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Bh=function(t,n,r){for(var o=0,i=0;o=i,i=at(),o===38&&i===12&&(n[r]=1),!Nr(i);)ze();return Dr(t,Le)},Wh=function(t,n){var r=-1,o=44;do switch(Nr(o)){case 0:o===38&&at()===12&&(n[r]=1),t[r]+=Bh(Le-1,n,r);break;case 2:t[r]+=$o(o);break;case 4:if(o===44){t[++r]=at()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=_i(o)}while(o=ze());return t},Vh=function(t,n){return rp(Wh(np(t),n))},cc=new WeakMap,Qh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!cc.get(r))&&!o){cc.set(t,!0);for(var i=[],l=Vh(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var p=0;p<a.length;p++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[p]):a[p]+" "+l[s]}}},Yh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function op(e,t){switch(Th(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+li+e+ye+e+e;case 6828:case 4268:return R+e+ye+e+e;case 6165:return R+e+ye+"flex-"+e+e;case 5187:return R+e+D(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return R+e+ye+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return R+e+ye+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return R+e+ye+D(e,"shrink","negative")+e;case 5292:return R+e+ye+D(e,"basis","preferred-size")+e;case 6060:return R+"box-"+D(e,"-grow","")+R+e+ye+D(e,"grow","positive")+e;case 4554:return R+D(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tt(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+li+(de(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~La(e,"stretch")?op(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(de(e,t+1)!==115)break;case 6444:switch(de(e,tt(e)-3-(~La(e,"!important")&&10))){case 107:return D(e,":",":"+R)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+R+(de(e,14)===45?"inline-":"")+"box$3$1"+R+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(de(e,t+11)){case 114:return R+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return R+e+ye+e+e}return e}var Xh=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case $s:t.return=op(t.value,t.length);break;case qd:return Tn([Gn(t,{value:D(t.value,"@","@"+R)})],o);case Ms:if(t.length)return Nh(t.props,function(i){switch(Oh(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Tn([Gn(t,{props:[D(i,/:(read-\w+)/,":"+li+"$1")]})],o);case"::placeholder":return Tn([Gn(t,{props:[D(i,/:(plac\w+)/,":"+R+"input-$1")]}),Gn(t,{props:[D(i,/:(plac\w+)/,":"+li+"$1")]}),Gn(t,{props:[D(i,/:(plac\w+)/,ye+"input-$1")]})],o)}return""})}},Kh=[Xh],bh=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var N=v.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||Kh,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var N=v.getAttribute("data-emotion").split(" "),f=1;f<N.length;f++)i[N[f]]=!0;a.push(v)});var s,u=[Qh,Yh];{var p,m=[Fh,Hh(function(v){p.insert(v)})],h=Ah(u.concat(o,m)),w=function(N){return Tn(Rh(N),h)};s=function(N,f,c,d){p=c,w(N?N+"{"+f.styles+"}":f.styles),d&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new kh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(a),g},ip={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,Is=ce?Symbol.for("react.element"):60103,Rs=ce?Symbol.for("react.portal"):60106,Ti=ce?Symbol.for("react.fragment"):60107,Oi=ce?Symbol.for("react.strict_mode"):60108,Ni=ce?Symbol.for("react.profiler"):60114,Li=ce?Symbol.for("react.provider"):60109,ji=ce?Symbol.for("react.context"):60110,Ds=ce?Symbol.for("react.async_mode"):60111,Mi=ce?Symbol.for("react.concurrent_mode"):60111,$i=ce?Symbol.for("react.forward_ref"):60112,zi=ce?Symbol.for("react.suspense"):60113,Gh=ce?Symbol.for("react.suspense_list"):60120,Ii=ce?Symbol.for("react.memo"):60115,Ri=ce?Symbol.for("react.lazy"):60116,Zh=ce?Symbol.for("react.block"):60121,Jh=ce?Symbol.for("react.fundamental"):60117,qh=ce?Symbol.for("react.responder"):60118,e1=ce?Symbol.for("react.scope"):60119;function Fe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Is:switch(e=e.type,e){case Ds:case Mi:case Ti:case Ni:case Oi:case zi:return e;default:switch(e=e&&e.$$typeof,e){case ji:case $i:case Ri:case Ii:case Li:return e;default:return t}}case Rs:return t}}}function lp(e){return Fe(e)===Mi}A.AsyncMode=Ds;A.ConcurrentMode=Mi;A.ContextConsumer=ji;A.ContextProvider=Li;A.Element=Is;A.ForwardRef=$i;A.Fragment=Ti;A.Lazy=Ri;A.Memo=Ii;A.Portal=Rs;A.Profiler=Ni;A.StrictMode=Oi;A.Suspense=zi;A.isAsyncMode=function(e){return lp(e)||Fe(e)===Ds};A.isConcurrentMode=lp;A.isContextConsumer=function(e){return Fe(e)===ji};A.isContextProvider=function(e){return Fe(e)===Li};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Is};A.isForwardRef=function(e){return Fe(e)===$i};A.isFragment=function(e){return Fe(e)===Ti};A.isLazy=function(e){return Fe(e)===Ri};A.isMemo=function(e){return Fe(e)===Ii};A.isPortal=function(e){return Fe(e)===Rs};A.isProfiler=function(e){return Fe(e)===Ni};A.isStrictMode=function(e){return Fe(e)===Oi};A.isSuspense=function(e){return Fe(e)===zi};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ti||e===Mi||e===Ni||e===Oi||e===zi||e===Gh||typeof e=="object"&&e!==null&&(e.$$typeof===Ri||e.$$typeof===Ii||e.$$typeof===Li||e.$$typeof===ji||e.$$typeof===$i||e.$$typeof===Jh||e.$$typeof===qh||e.$$typeof===e1||e.$$typeof===Zh)};A.typeOf=Fe;ip.exports=A;var t1=ip.exports,ap=t1,n1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},r1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sp={};sp[ap.ForwardRef]=n1;sp[ap.Memo]=r1;var o1=!0;function up(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Fs=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||o1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},cp=function(t,n,r){Fs(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function i1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var l1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a1=/[A-Z]|^ms/g,s1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fp=function(t){return t.charCodeAt(1)===45},fc=function(t){return t!=null&&typeof t!="boolean"},Ll=Uh(function(e){return fp(e)?e:e.replace(a1,"-$&").toLowerCase()}),dc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(s1,function(r,o,i){return nt={name:o,styles:i,next:nt},o})}return l1[t]!==1&&!fp(t)&&typeof n=="number"&&n!==0?n+"px":n};function Lr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return nt={name:n.name,styles:n.styles,next:nt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)nt={name:r.name,styles:r.styles,next:nt},r=r.next;var o=n.styles+";";return o}return u1(e,t,n)}case"function":{if(e!==void 0){var i=nt,l=n(e);return nt=i,Lr(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function u1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Lr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":fc(l)&&(r+=Ll(i)+":"+dc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)fc(l[a])&&(r+=Ll(i)+":"+dc(i,l[a])+";");else{var s=Lr(e,t,l);switch(i){case"animation":case"animationName":{r+=Ll(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var pc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,nt,As=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";nt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Lr(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=Lr(r,n,t[a]),o&&(i+=l[a]);pc.lastIndex=0;for(var s="",u;(u=pc.exec(i))!==null;)s+="-"+u[1];var p=i1(i)+s;return{name:p,styles:i,next:nt}},c1=function(t){return t()},f1=tu.useInsertionEffect?tu.useInsertionEffect:!1,dp=f1||c1,Hs={}.hasOwnProperty,pp=$.createContext(typeof HTMLElement<"u"?bh({key:"css"}):null);pp.Provider;var mp=function(t){return $.forwardRef(function(n,r){var o=$.useContext(pp);return t(n,o,r)})},hp=$.createContext({}),Ma="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",d1=function(t,n){var r={};for(var o in n)Hs.call(n,o)&&(r[o]=n[o]);return r[Ma]=t,r},p1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Fs(n,r,o),dp(function(){return cp(n,r,o)}),null},m1=mp(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ma],i=[r],l="";typeof e.className=="string"?l=up(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=As(i,void 0,$.useContext(hp));l+=t.key+"-"+a.name;var s={};for(var u in e)Hs.call(e,u)&&u!=="css"&&u!==Ma&&(s[u]=e[u]);return s.ref=n,s.className=l,$.createElement($.Fragment,null,$.createElement(p1,{cache:t,serialized:a,isStringTag:typeof o=="string"}),$.createElement(o,s))}),h1=m1,v1=S.Fragment;function ae(e,t,n){return Hs.call(t,"css")?S.jsx(h1,d1(e,t),n):S.jsx(e,t,n)}function vp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return As(t)}var _=function(){var t=vp.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},y1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function g1(e,t,n){var r=[],o=up(e,r,n);return r.length<2?n:o+t(r)}var w1=function(t){var n=t.cache,r=t.serializedArr;return dp(function(){for(var o=0;o<r.length;o++)cp(n,r[o],!1)}),null},jl=mp(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];var h=As(p,t.registered);return r.push(h),Fs(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];return g1(t.registered,o,y1(p))},l={css:o,cx:i,theme:$.useContext(hp)},a=e.children(l);return n=!0,$.createElement($.Fragment,null,$.createElement(w1,{cache:t,serializedArr:r}),a)}),S1=Object.defineProperty,x1=(e,t,n)=>t in e?S1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,po=(e,t,n)=>(x1(e,typeof t!="symbol"?t+"":t,n),n),$a=new Map,mo=new WeakMap,mc=0,k1=void 0;function E1(e){return e?(mo.has(e)||(mc+=1,mo.set(e,mc.toString())),mo.get(e)):"0"}function _1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?E1(e.root):e[t]}`).toString()}function C1(e){const t=_1(e);let n=$a.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&o.some(p=>a.intersectionRatio>=p);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(p=>{p(u,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},$a.set(t,n)}return n}function yp(e,t,n={},r=k1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=C1(n),a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),$a.delete(o))}}function P1(e){return typeof e.children!="function"}var hc=class extends $.Component{constructor(e){super(e),po(this,"node",null),po(this,"_unobserveCb",null),po(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),po(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),P1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=yp(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:g}=this.state;return e({inView:w,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:a,trackVisibility:s,delay:u,initialInView:p,fallbackInView:m,...h}=this.props;return $.createElement(t||"div",{ref:this.handleNode,...h},e)}};function gp({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var p;const[m,h]=$.useState(null),w=$.useRef(),[g,v]=$.useState({inView:!!a,entry:void 0});w.current=u,$.useEffect(()=>{if(l||!m)return;let d;return d=yp(m,(y,C)=>{v({inView:y,entry:C}),w.current&&w.current(y,C),C.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,o,r,i,l,n,s,t]);const N=(p=g.entry)==null?void 0:p.target,f=$.useRef();!m&&N&&!i&&!l&&f.current!==N&&(f.current=N,v({inView:!!a,entry:void 0}));const c=[h,g.inView,g.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var wp={exports:{}},H={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Us=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Fi=Symbol.for("react.strict_mode"),Ai=Symbol.for("react.profiler"),Hi=Symbol.for("react.provider"),Ui=Symbol.for("react.context"),T1=Symbol.for("react.server_context"),Bi=Symbol.for("react.forward_ref"),Wi=Symbol.for("react.suspense"),Vi=Symbol.for("react.suspense_list"),Qi=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),O1=Symbol.for("react.offscreen"),Sp;Sp=Symbol.for("react.module.reference");function Qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Us:switch(e=e.type,e){case Di:case Ai:case Fi:case Wi:case Vi:return e;default:switch(e=e&&e.$$typeof,e){case T1:case Ui:case Bi:case Yi:case Qi:case Hi:return e;default:return t}}case Bs:return t}}}H.ContextConsumer=Ui;H.ContextProvider=Hi;H.Element=Us;H.ForwardRef=Bi;H.Fragment=Di;H.Lazy=Yi;H.Memo=Qi;H.Portal=Bs;H.Profiler=Ai;H.StrictMode=Fi;H.Suspense=Wi;H.SuspenseList=Vi;H.isAsyncMode=function(){return!1};H.isConcurrentMode=function(){return!1};H.isContextConsumer=function(e){return Qe(e)===Ui};H.isContextProvider=function(e){return Qe(e)===Hi};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Us};H.isForwardRef=function(e){return Qe(e)===Bi};H.isFragment=function(e){return Qe(e)===Di};H.isLazy=function(e){return Qe(e)===Yi};H.isMemo=function(e){return Qe(e)===Qi};H.isPortal=function(e){return Qe(e)===Bs};H.isProfiler=function(e){return Qe(e)===Ai};H.isStrictMode=function(e){return Qe(e)===Fi};H.isSuspense=function(e){return Qe(e)===Wi};H.isSuspenseList=function(e){return Qe(e)===Vi};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Di||e===Ai||e===Fi||e===Wi||e===Vi||e===O1||typeof e=="object"&&e!==null&&(e.$$typeof===Yi||e.$$typeof===Qi||e.$$typeof===Hi||e.$$typeof===Ui||e.$$typeof===Bi||e.$$typeof===Sp||e.getModuleId!==void 0)};H.typeOf=Qe;wp.exports=H;var N1=wp.exports;_`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;_`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;_`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;_`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;_`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const L1=_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,j1=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,M1=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$1=_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,z1=_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ws=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,I1=_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,R1=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,D1=_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F1=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,A1=_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,H1=_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,U1=_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function B1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Ws,iterationCount:o=1}){return vp`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function W1(e){return e==null}function V1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function xp(e,t){return n=>n?e():t()}function jr(e){return xp(e,()=>null)}function za(e){return jr(()=>({opacity:0}))(e)}const kp=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=Ws,triggerOnce:a=!1,className:s,style:u,childClassName:p,childStyle:m,children:h,onVisibilityChange:w}=e,g=$.useMemo(()=>B1({keyframes:l,duration:o}),[o,l]);return W1(h)?null:V1(h)?ae(Y1,{...e,animationStyles:g,children:String(h)}):N1.isFragment(h)?ae(Ep,{...e,animationStyles:g}):ae(v1,{children:$.Children.map(h,(v,N)=>{if(!$.isValidElement(v))return null;const f=r+(t?N*o*n:0);switch(v.type){case"ol":case"ul":return ae(jl,{children:({cx:c})=>ae(v.type,{...v.props,className:c(s,v.props.className),style:Object.assign({},u,v.props.style),children:ae(kp,{...e,children:v.props.children})})});case"li":return ae(hc,{threshold:i,triggerOnce:a,onChange:w,children:({inView:c,ref:d})=>ae(jl,{children:({cx:y})=>ae(v.type,{...v.props,ref:d,className:y(p,v.props.className),css:jr(()=>g)(c),style:Object.assign({},m,v.props.style,za(!c),{animationDelay:f+"ms"})})})});default:return ae(hc,{threshold:i,triggerOnce:a,onChange:w,children:({inView:c,ref:d})=>ae("div",{ref:d,className:s,css:jr(()=>g)(c),style:Object.assign({},u,za(!c),{animationDelay:f+"ms"}),children:ae(jl,{children:({cx:y})=>ae(v.type,{...v.props,className:y(p,v.props.className),style:Object.assign({},m,v.props.style)})})})})}})})},Q1={display:"inline-block",whiteSpace:"pre"},Y1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:u,children:p,onVisibilityChange:m}=e,{ref:h,inView:w}=gp({triggerOnce:a,threshold:l,onChange:m});return xp(()=>ae("div",{ref:h,className:s,style:Object.assign({},u,Q1),children:p.split("").map((g,v)=>ae("span",{css:jr(()=>t)(w),style:{animationDelay:o+v*i*r+"ms"},children:g},v))}),()=>ae(Ep,{...e,children:p}))(n)},Ep=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:s,inView:u}=gp({triggerOnce:r,threshold:n,onChange:a});return ae("div",{ref:s,className:o,css:jr(()=>t)(u),style:Object.assign({},i,za(!u)),children:l})};_`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;_`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const X1=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,K1=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,b1=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,G1=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Z1=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,J1=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,q1=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ev=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,tv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,nv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,rv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ov=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,iv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function lv(e,t,n){switch(n){case"bottom-left":return t?K1:j1;case"bottom-right":return t?b1:M1;case"down":return e?t?Z1:z1:t?G1:$1;case"left":return e?t?q1:I1:t?J1:Ws;case"right":return e?t?tv:D1:t?ev:R1;case"top-left":return t?nv:F1;case"top-right":return t?rv:A1;case"up":return e?t?iv:U1:t?ov:H1;default:return t?X1:L1}}const Tt=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=$.useMemo(()=>lv(t,r,n),[t,n,r]);return ae(kp,{keyframes:i,...o})};_`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;_`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;_`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function av(){return S.jsx("div",{id:"Intro",className:"flex items-center justify-center flex-col text-center pt-20 pb-6 mt-10",children:S.jsxs("div",{className:"flex flex-col md:flex-row items-center",children:[" ",S.jsxs(Tt,{delay:2500,children:[S.jsx("img",{src:wh,alt:"Matthew Davies",className:"w-80 h-80 object-cover rounded-lg border-white border-2 mr-10 mb-4 md:mb-10"})," "]}),S.jsxs("div",{children:[S.jsx(Tt,{delay:500,children:S.jsx("h1",{className:"text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold text-left",children:"Matthew Davies"})}),S.jsxs(Tt,{delay:1500,children:[S.jsx("p",{className:"text-base md:text-xl mb-3 font-medium text-left",children:"CS Student"}),S.jsxs("p",{className:"text-sm max-w-xl mb-6 font-bold text-left",children:["Hi, I'm a 3rd year Computer Science student at the University of Edinburgh.",S.jsx("br",{}),"I'm interested in Web Development, Networking, and Cloud Engineering.",S.jsx("br",{}),"In my spare time I enjoy playing the piano and football, working out and learning Swedish.",S.jsx("br",{})]})]})]})]})})}const sv=[{title:"Autonomous Delivery Drone",imgUrl:"/assets/AutoDrone.png",stack:["Java","Maven","SpringBoot"],link:"https://github.com/MattDavies-code/Autonomous-drone-delivery"},{title:"Portfolio Website",imgUrl:"/assets/website.png",stack:["JavaScript","React","CSS Tailwind"],link:"https://github.com/MattDavies-code/MattDavies-code.github.io"},{title:"Trends in Movies using IMDb",imgUrl:"/assets/LinearRegression.png",stack:["Python","TensorFlow","Seaborn"],link:"https://github.com/MattDavies-code/Exploring-Movie-Trends-Using-IMDb"},{title:"Autonomous Car in Unity",imgUrl:"/assets/car.png",stack:["C#","Unity"],link:"https://github.com/MattDavies-code/Autonomous-Car-in-Unity/blob/main/README.md"},{title:"2D Platformer Game",imgUrl:"/assets/fox.png",stack:["C#","Unity"]},{title:"In Progress: Social Discovery Music App",imgUrl:"/assets/app.jpg",stack:["Javascript","React Native","Java"],link:"https://github.com/MattDavies-code/Exploring-Movie-Trends-Using-IMDb"}];function uv({title:e,imgUrl:t,stack:n,link:r}){return S.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"border-2 border-stone-900 dark:border-white rounded-md overflow-hidden transition-colors duration-200 ease-in-out hover:bg-stone-700 hover:text-white",children:[S.jsx("img",{src:t,alt:"portfolio",className:"w-full h-36 md:h-48 object-cover cursor-pointer"}),S.jsxs("div",{className:"w-full p-4",children:[S.jsx("h3",{className:"text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ",children:e}),S.jsx("p",{className:"flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ",children:n.map(o=>S.jsx("span",{className:"inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md",children:o}))})]})]})}function cv(){return S.jsxs("div",{id:"Portfolio",className:"flex flex-col",children:[S.jsx("div",{className:"mb-30",children:S.jsx(js,{children:"Portfolio"})}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:sv.map(e=>S.jsx(uv,{imgUrl:e.imgUrl,title:e.title,stack:e.stack,link:e.link}))})]})}const fv=[{year:"Future",title:"Software Engineer",duration:"",details:"Looking to collaborate, learn, and contribute to innovative projects within the tech industry. Ready to make a meaningful impact as an engineer."},{year:"Today",title:"Bachelor's Degree in Computer Science",duration:"4 years",details:"I am pursuing the knowledge that a computer science degree has to offer. I'm learning about algorithms, data structures, and software engineering principles. I am also having fun working as part of a team building a multiplayer Connect-4 robot."},{year:"2019",title:"A-Levels at Pates Grammar School",duration:"2 years",details:"I founded Computer Science Society with some of my friends and had a blast building a revision website and holding weekly talks on whatever what we found interesting. I also took Maths and Economics A-Levels..."},{year:"2013",title:"GCSEs at St. Edwards School",duration:"2 years",details:"I decided to take Computer Sceince GCSE and here is where I wrote my first line of code. I was introduced to the world of programming and I was hooked. I knew that this was what I wanted to do. An amazing teacher did help with that."}];function dv({year:e,title:t,duration:n,details:r}){return S.jsx("ol",{className:"flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700",children:S.jsxs("li",{className:"mb-10 ml-4",children:[S.jsx("div",{className:"absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700"}),S.jsxs("p",{className:"flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm",children:[S.jsx("span",{className:"inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md",children:e}),S.jsx("h3",{className:"text-lg font-semibold text-stone-900 dark:text-white",children:t}),S.jsx("div",{className:"my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500",children:n})]}),S.jsx("p",{className:"my-2 text-base font-normal text-stone-500 dark:text-stone-400",children:r})]})})}function pv(){return S.jsx("div",{id:"Timeline",className:"flex flex-col md:flex-row justify-center my-20",children:S.jsxs("div",{className:"w-full md:w-7/12",children:[S.jsx(js,{children:"Timeline"}),fv.map(e=>S.jsx(dv,{year:e.year,title:e.title,duration:e.duration,details:e.details}))]})})}var J={},Vs={},Fr={},Ar={},_p="Expected a function",vc=NaN,mv="[object Symbol]",hv=/^\s+|\s+$/g,vv=/^[-+]0x[0-9a-f]+$/i,yv=/^0b[01]+$/i,gv=/^0o[0-7]+$/i,wv=parseInt,Sv=typeof Xr=="object"&&Xr&&Xr.Object===Object&&Xr,xv=typeof self=="object"&&self&&self.Object===Object&&self,kv=Sv||xv||Function("return this")(),Ev=Object.prototype,_v=Ev.toString,Cv=Math.max,Pv=Math.min,Ml=function(){return kv.Date.now()};function Tv(e,t,n){var r,o,i,l,a,s,u=0,p=!1,m=!1,h=!0;if(typeof e!="function")throw new TypeError(_p);t=yc(t)||0,ai(n)&&(p=!!n.leading,m="maxWait"in n,i=m?Cv(yc(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h);function w(E){var x=r,O=o;return r=o=void 0,u=E,l=e.apply(O,x),l}function g(E){return u=E,a=setTimeout(f,t),p?w(E):l}function v(E){var x=E-s,O=E-u,U=t-x;return m?Pv(U,i-O):U}function N(E){var x=E-s,O=E-u;return s===void 0||x>=t||x<0||m&&O>=i}function f(){var E=Ml();if(N(E))return c(E);a=setTimeout(f,v(E))}function c(E){return a=void 0,h&&r?w(E):(r=o=void 0,l)}function d(){a!==void 0&&clearTimeout(a),u=0,r=s=o=a=void 0}function y(){return a===void 0?l:c(Ml())}function C(){var E=Ml(),x=N(E);if(r=arguments,o=this,s=E,x){if(a===void 0)return g(s);if(m)return a=setTimeout(f,t),w(s)}return a===void 0&&(a=setTimeout(f,t)),l}return C.cancel=d,C.flush=y,C}function Ov(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(_p);return ai(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Tv(e,t,{leading:r,maxWait:t,trailing:o})}function ai(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Nv(e){return!!e&&typeof e=="object"}function Lv(e){return typeof e=="symbol"||Nv(e)&&_v.call(e)==mv}function yc(e){if(typeof e=="number")return e;if(Lv(e))return vc;if(ai(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ai(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(hv,"");var n=yv.test(e);return n||gv.test(e)?wv(e.slice(2),n?2:8):vv.test(e)?vc:+e}var jv=Ov,Hr={};Object.defineProperty(Hr,"__esModule",{value:!0});Hr.addPassiveEventListener=function(t,n,r){var o=r.name;o||(o=n,console.warn("Listener must be a named function.")),Io.has(n)||Io.set(n,new Set);var i=Io.get(n);if(!i.has(o)){var l=function(){var a=!1;try{var s=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,s)}catch{}return a}();t.addEventListener(n,r,l?{passive:!0}:!1),i.add(o)}};Hr.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),Io.get(n).delete(r.name||n)};var Io=new Map;Object.defineProperty(Ar,"__esModule",{value:!0});var Mv=jv,$v=Iv(Mv),zv=Hr;function Iv(e){return e&&e.__esModule?e:{default:e}}var Rv=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,$v.default)(t,n)},X={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=Rv(function(o){X.scrollHandler(t)},n);X.scrollSpyContainers.push(t),(0,zv.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return X.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=X.scrollSpyContainers[X.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(X.currentPositionX(t),X.currentPositionY(t))})},addStateHandler:function(t){X.spySetState.push(t)},addSpyHandler:function(t,n){var r=X.scrollSpyContainers[X.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(X.currentPositionX(n),X.currentPositionY(n))},updateStates:function(){X.spySetState.forEach(function(t){return t()})},unmount:function(t,n){X.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),X.spySetState&&X.spySetState.length&&X.spySetState.indexOf(t)>-1&&X.spySetState.splice(X.spySetState.indexOf(t),1),document.removeEventListener("scroll",X.scrollHandler)},update:function(){return X.scrollSpyContainers.forEach(function(t){return X.scrollHandler(t)})}};Ar.default=X;var Hn={},Ur={};Object.defineProperty(Ur,"__esModule",{value:!0});var Dv=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,o=r?"#"+r:"",i=window&&window.location,l=o?i.pathname+i.search+o:i.pathname+i.search;n?history.pushState(history.state,"",l):history.replaceState(history.state,"",l)},Fv=function(){return window.location.hash.replace(/^#/,"")},Av=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},Hv=function(t){return getComputedStyle(t).position!=="static"},$l=function(t,n){for(var r=t.offsetTop,o=t.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},Uv=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(Hv(t)){if(n.offsetParent!==t){var o=function(p){return p===t||p===document},i=$l(n,o),l=i.offsetTop,a=i.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return l}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(p){return p===document};return $l(n,s).offsetTop-$l(t,s).offsetTop};Ur.default={updateHash:Dv,getHash:Fv,filterElementInContainer:Av,scrollOffset:Uv};var Xi={},Qs={};Object.defineProperty(Qs,"__esModule",{value:!0});Qs.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var Ys={};Object.defineProperty(Ys,"__esModule",{value:!0});var Bv=Hr,Wv=["mousedown","mousewheel","touchmove","keydown"];Ys.default={subscribe:function(t){return typeof document<"u"&&Wv.forEach(function(n){return(0,Bv.addPassiveEventListener)(document,n,t)})}};var Br={};Object.defineProperty(Br,"__esModule",{value:!0});var Ia={registered:{},scrollEvent:{register:function(t,n){Ia.registered[t]=n},remove:function(t){Ia.registered[t]=null}}};Br.default=Ia;Object.defineProperty(Xi,"__esModule",{value:!0});var Vv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qv=Ur;Ki(Qv);var Yv=Qs,gc=Ki(Yv),Xv=Ys,Kv=Ki(Xv),bv=Br,rt=Ki(bv);function Ki(e){return e&&e.__esModule?e:{default:e}}var Cp=function(t){return gc.default[t.smooth]||gc.default.defaultEasing},Gv=function(t){return typeof t=="function"?t:function(){return t}},Zv=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Ra=function(){return Zv()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),Pp=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Tp=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},Op=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},Jv=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},qv=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},ey=function e(t,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){rt.default.registered.end&&rt.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var i=e.bind(null,t,n);Ra.call(window,i);return}rt.default.registered.end&&rt.default.registered.end(o.to,o.target,o.currentPosition)},Xs=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},Wr=function(t,n,r,o){n.data=n.data||Pp(),window.clearTimeout(n.data.delayTimeout);var i=function(){n.data.cancel=!0};if(Kv.default.subscribe(i),Xs(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Tp(n):Op(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){rt.default.registered.end&&rt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Gv(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var l=Cp(n),a=ey.bind(null,l,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){rt.default.registered.begin&&rt.default.registered.begin(n.data.to,n.data.target),Ra.call(window,a)},n.delay);return}rt.default.registered.begin&&rt.default.registered.begin(n.data.to,n.data.target),Ra.call(window,a)},bi=function(t){return t=Vv({},t),t.data=t.data||Pp(),t.absolute=!0,t},ty=function(t){Wr(0,bi(t))},ny=function(t,n){Wr(t,bi(n))},ry=function(t){t=bi(t),Xs(t),Wr(t.horizontal?Jv(t):qv(t),t)},oy=function(t,n){n=bi(n),Xs(n);var r=n.horizontal?Tp(n):Op(n);Wr(t+r,n)};Xi.default={animateTopScroll:Wr,getAnimationType:Cp,scrollToTop:ty,scrollToBottom:ry,scrollTo:ny,scrollMore:oy};Object.defineProperty(Hn,"__esModule",{value:!0});var iy=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ly=Ur,ay=Ks(ly),sy=Xi,uy=Ks(sy),cy=Br,ho=Ks(cy);function Ks(e){return e&&e.__esModule?e:{default:e}}var vo={},wc=void 0;Hn.default={unmount:function(){vo={}},register:function(t,n){vo[t]=n},unregister:function(t){delete vo[t]},get:function(t){return vo[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return wc=t},getActiveLink:function(){return wc},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=iy({},n,{absolute:!1});var o=n.containerId,i=n.container,l=void 0;o?l=document.getElementById(o):i&&i.nodeType?l=i:l=document,n.absolute=!0;var a=n.horizontal,s=ay.default.scrollOffset(l,r,a)+(n.offset||0);if(!n.smooth){ho.default.registered.begin&&ho.default.registered.begin(t,r),l===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):l.scrollTop=s,ho.default.registered.end&&ho.default.registered.end(t,r);return}uy.default.animateTopScroll(s,n,t,r)}};var Np={exports:{}},fy="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dy=fy,py=dy;function Lp(){}function jp(){}jp.resetWarningCache=Lp;var my=function(){function e(r,o,i,l,a,s){if(s!==py){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:jp,resetWarningCache:Lp};return n.PropTypes=n,n};Np.exports=my();var Gi=Np.exports,Zi={};Object.defineProperty(Zi,"__esModule",{value:!0});var hy=Ur,zl=vy(hy);function vy(e){return e&&e.__esModule?e:{default:e}}var yy={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,o=r.get(t);if(o&&(n||t!==r.getActiveLink())){var i=this.containers[t]||document;r.scrollTo(t,{container:i})}},getHash:function(){return zl.default.getHash()},changeHash:function(t,n){this.isInitialized()&&zl.default.getHash()!==t&&zl.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Zi.default=yy;Object.defineProperty(Fr,"__esModule",{value:!0});var yo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gy=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),wy=$,Sc=Vr(wy),Sy=Ar,go=Vr(Sy),xy=Hn,ky=Vr(xy),Ey=Gi,Q=Vr(Ey),_y=Zi,xt=Vr(_y);function Vr(e){return e&&e.__esModule?e:{default:e}}function Cy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Py(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Ty(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var xc={to:Q.default.string.isRequired,containerId:Q.default.string,container:Q.default.object,activeClass:Q.default.string,activeStyle:Q.default.object,spy:Q.default.bool,horizontal:Q.default.bool,smooth:Q.default.oneOfType([Q.default.bool,Q.default.string]),offset:Q.default.number,delay:Q.default.number,isDynamic:Q.default.bool,onClick:Q.default.func,duration:Q.default.oneOfType([Q.default.number,Q.default.func]),absolute:Q.default.bool,onSetActive:Q.default.func,onSetInactive:Q.default.func,ignoreCancelEvents:Q.default.bool,hashSpy:Q.default.bool,saveHashHistory:Q.default.bool,spyThrottle:Q.default.number};Fr.default=function(e,t){var n=t||ky.default,r=function(i){Ty(l,i);function l(a){Cy(this,l);var s=Py(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return o.call(s),s.state={active:!1},s}return gy(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();go.default.isMounted(s)||go.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(xt.default.isMounted()||xt.default.mount(n),xt.default.mapContainer(this.props.to,s)),go.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){go.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=yo({},this.props.style,this.props.activeStyle):u=yo({},this.props.style);var p=yo({},this.props);for(var m in xc)p.hasOwnProperty(m)&&delete p[m];return p.className=s,p.style=u,p.onClick=this.handleClick,Sc.default.createElement(e,p)}}]),l}(Sc.default.PureComponent),o=function(){var l=this;this.scrollTo=function(a,s){n.scrollTo(a,yo({},l.state,s))},this.handleClick=function(a){l.props.onClick&&l.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),l.scrollTo(l.props.to,l.props)},this.spyHandler=function(a,s){var u=l.getScrollSpyContainer();if(!(xt.default.isMounted()&&!xt.default.isInitialized())){var p=l.props.horizontal,m=l.props.to,h=null,w=void 0,g=void 0;if(p){var v=0,N=0,f=0;if(u.getBoundingClientRect){var c=u.getBoundingClientRect();f=c.left}if(!h||l.props.isDynamic){if(h=n.get(m),!h)return;var d=h.getBoundingClientRect();v=d.left-f+a,N=v+d.width}var y=a-l.props.offset;w=y>=Math.floor(v)&&y<Math.floor(N),g=y<Math.floor(v)||y>=Math.floor(N)}else{var C=0,E=0,x=0;if(u.getBoundingClientRect){var O=u.getBoundingClientRect();x=O.top}if(!h||l.props.isDynamic){if(h=n.get(m),!h)return;var U=h.getBoundingClientRect();C=U.top-x+s,E=C+U.height}var j=s-l.props.offset;w=j>=Math.floor(C)&&j<Math.floor(E),g=j<Math.floor(C)||j>=Math.floor(E)}var _e=n.getActiveLink();if(g){if(m===_e&&n.setActiveLink(void 0),l.props.hashSpy&&xt.default.getHash()===m){var wt=l.props.saveHashHistory,Wt=wt===void 0?!1:wt;xt.default.changeHash("",Wt)}l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive(m,h))}if(w&&(_e!==m||l.state.active===!1)){n.setActiveLink(m);var Un=l.props.saveHashHistory,el=Un===void 0?!1:Un;l.props.hashSpy&&xt.default.changeHash(m,el),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(m,h))}}}};return r.propTypes=xc,r.defaultProps={offset:0},r};Object.defineProperty(Vs,"__esModule",{value:!0});var Oy=$,kc=Mp(Oy),Ny=Fr,Ly=Mp(Ny);function Mp(e){return e&&e.__esModule?e:{default:e}}function jy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ec(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function My(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var $y=function(e){My(t,e);function t(){var n,r,o,i;jy(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return i=(r=(o=Ec(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),o),o.render=function(){return kc.default.createElement("a",o.props,o.props.children)},r),Ec(o,i)}return t}(kc.default.Component);Vs.default=(0,Ly.default)($y);var bs={};Object.defineProperty(bs,"__esModule",{value:!0});var zy=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Iy=$,_c=$p(Iy),Ry=Fr,Dy=$p(Ry);function $p(e){return e&&e.__esModule?e:{default:e}}function Fy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ay(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Hy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Uy=function(e){Hy(t,e);function t(){return Fy(this,t),Ay(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return zy(t,[{key:"render",value:function(){return _c.default.createElement("button",this.props,this.props.children)}}]),t}(_c.default.Component);bs.default=(0,Dy.default)(Uy);var Gs={},Ji={};Object.defineProperty(Ji,"__esModule",{value:!0});var By=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wy=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Vy=$,Cc=qi(Vy),Qy=Zd;qi(Qy);var Yy=Hn,Pc=qi(Yy),Xy=Gi,Tc=qi(Xy);function qi(e){return e&&e.__esModule?e:{default:e}}function Ky(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function by(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Gy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Ji.default=function(e){var t=function(n){Gy(r,n);function r(o){Ky(this,r);var i=by(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i.childBindings={domNode:null},i}return Wy(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Pc.default.unregister(this.props.name)}},{key:"registerElems",value:function(i){Pc.default.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return Cc.default.createElement(e,By({},this.props,{parentBindings:this.childBindings}))}}]),r}(Cc.default.Component);return t.propTypes={name:Tc.default.string,id:Tc.default.string},t};Object.defineProperty(Gs,"__esModule",{value:!0});var Oc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zy=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Jy=$,Nc=Zs(Jy),qy=Ji,eg=Zs(qy),tg=Gi,Lc=Zs(tg);function Zs(e){return e&&e.__esModule?e:{default:e}}function ng(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rg(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function og(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var zp=function(e){og(t,e);function t(){return ng(this,t),rg(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Zy(t,[{key:"render",value:function(){var r=this,o=Oc({},this.props);return delete o.name,o.parentBindings&&delete o.parentBindings,Nc.default.createElement("div",Oc({},o,{ref:function(l){r.props.parentBindings.domNode=l}}),this.props.children)}}]),t}(Nc.default.Component);zp.propTypes={name:Lc.default.string,id:Lc.default.string};Gs.default=(0,eg.default)(zp);var Il=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jc=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Mc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function zc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var wo=$,Yt=Ar,Rl=Hn,K=Gi,kt=Zi,Ic={to:K.string.isRequired,containerId:K.string,container:K.object,activeClass:K.string,spy:K.bool,smooth:K.oneOfType([K.bool,K.string]),offset:K.number,delay:K.number,isDynamic:K.bool,onClick:K.func,duration:K.oneOfType([K.number,K.func]),absolute:K.bool,onSetActive:K.func,onSetInactive:K.func,ignoreCancelEvents:K.bool,hashSpy:K.bool,spyThrottle:K.number},ig={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Rl,o=function(l){zc(a,l);function a(s){Mc(this,a);var u=$c(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(u),u.state={active:!1},u}return jc(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,p=this.props.container;return u?document.getElementById(u):p&&p.nodeType?p:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Yt.isMounted(u)||Yt.mount(u,this.props.spyThrottle),this.props.hashSpy&&(kt.isMounted()||kt.mount(r),kt.mapContainer(this.props.to,u)),this.props.spy&&Yt.addStateHandler(this.stateHandler),Yt.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Yt.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var p=Il({},this.props);for(var m in Ic)p.hasOwnProperty(m)&&delete p[m];return p.className=u,p.onClick=this.handleClick,wo.createElement(t,p)}}]),a}(wo.Component),i=function(){var a=this;this.scrollTo=function(s,u){r.scrollTo(s,Il({},a.state,u))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(s){var u=a.getScrollSpyContainer();if(!(kt.isMounted()&&!kt.isInitialized())){var p=a.props.to,m=null,h=0,w=0,g=0;if(u.getBoundingClientRect){var v=u.getBoundingClientRect();g=v.top}if(!m||a.props.isDynamic){if(m=r.get(p),!m)return;var N=m.getBoundingClientRect();h=N.top-g+s,w=h+N.height}var f=s-a.props.offset,c=f>=Math.floor(h)&&f<Math.floor(w),d=f<Math.floor(h)||f>=Math.floor(w),y=r.getActiveLink();if(d)return p===y&&r.setActiveLink(void 0),a.props.hashSpy&&kt.getHash()===p&&kt.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),Yt.updateStates();if(c&&y!==p)return r.setActiveLink(p),a.props.hashSpy&&kt.changeHash(p),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(p)),Yt.updateStates()}}};return o.propTypes=Ic,o.defaultProps={offset:0},o},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){zc(o,r);function o(i){Mc(this,o);var l=$c(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return l.childBindings={domNode:null},l}return jc(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(l){this.props.name!==l.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Rl.unregister(this.props.name)}},{key:"registerElems",value:function(l){Rl.register(l,this.childBindings.domNode)}},{key:"render",value:function(){return wo.createElement(t,Il({},this.props,{parentBindings:this.childBindings}))}}]),o}(wo.Component);return n.propTypes={name:K.string,id:K.string},n}},lg=ig;Object.defineProperty(J,"__esModule",{value:!0});J.Helpers=J.ScrollElement=J.ScrollLink=J.animateScroll=J.scrollSpy=J.Events=J.scroller=J.Element=J.Button=tr=J.Link=void 0;var ag=Vs,Ip=st(ag),sg=bs,Rp=st(sg),ug=Gs,Dp=st(ug),cg=Hn,Fp=st(cg),fg=Br,Ap=st(fg),dg=Ar,Hp=st(dg),pg=Xi,Up=st(pg),mg=Fr,Bp=st(mg),hg=Ji,Wp=st(hg),vg=lg,Vp=st(vg);function st(e){return e&&e.__esModule?e:{default:e}}var tr=J.Link=Ip.default;J.Button=Rp.default;J.Element=Dp.default;J.scroller=Fp.default;J.Events=Ap.default;J.scrollSpy=Hp.default;J.animateScroll=Up.default;J.ScrollLink=Bp.default;J.ScrollElement=Wp.default;J.Helpers=Vp.default;J.default={Link:Ip.default,Button:Rp.default,Element:Dp.default,scroller:Fp.default,Events:Ap.default,scrollSpy:Hp.default,animateScroll:Up.default,ScrollLink:Bp.default,ScrollElement:Wp.default,Helpers:Vp.default};const yg="/assets/logo2T.png",gg=({handleThemeSwitch:e,theme:t})=>{const n=S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),r=S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"white",className:"w-6 h-6",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})});return S.jsx("nav",{className:"fixed w-full z-30 top-0 text-white bg-black bg-opacity-100",children:S.jsxs("div",{className:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2.5 px-10 lg:px-60",children:[S.jsx("div",{className:"pl-4 flex items-center",children:S.jsx("a",{className:"toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-1xl",href:"#",children:S.jsx("img",{src:yg,alt:"Logo",className:"h-12 w-auto"})})}),S.jsx("div",{className:"block lg:hidden pr-4"}),S.jsx("div",{className:"w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-gray-900 lg:bg-transparent text-sm lg:flex-grow",children:S.jsxs("div",{className:"lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto",children:[S.jsx(tr,{to:"Intro",smooth:!0,duration:800,className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white mr-2",children:"Intro"}),S.jsx(tr,{to:"Portfolio",smooth:!0,offset:-90,duration:800,className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white mr-2",children:"Portfolio"}),S.jsx(tr,{to:"Timeline",smooth:!0,offset:-80,duration:800,className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white mr-2",children:"Timeline"}),S.jsx(tr,{to:"Contact",smooth:!0,duration:800,className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white mr-4",children:"Contact"})]})}),S.jsx("button",{type:"button",onClick:e,className:"p-2 z-10 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md mr-4",children:t==="dark"?n:r})]})})};function wg(){const[e,t]=$.useState(null);$.useEffect(()=>{window.matchMedia("(prefers-color-scheme: dark)").matches?t("light"):t("dark")},[]);const n=()=>{t(e==="dark"?"light":"dark")};return $.useEffect(()=>{e==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]),S.jsxs(S.Fragment,{children:[S.jsx(gg,{handleThemeSwitch:n,theme:e}),S.jsx("div",{className:"bg-gradient-to-r from-offWhite-1 to-offWhite-2 dark:from-black dark:to-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter",children:S.jsxs("div",{className:"max-w-5xl w-11/12 mx-auto",children:[S.jsx(Tt,{triggerOnce:!0,children:S.jsx(av,{})}),S.jsx(Tt,{triggerOnce:!0,delay:4e3,children:S.jsx(cv,{})}),S.jsx(Tt,{triggerOnce:!0,delay:4e3,children:S.jsx(pv,{})}),S.jsx(Tt,{triggerOnce:!0,children:S.jsx(yh,{})}),S.jsx(Tt,{triggerOnce:!0,children:S.jsx(gh,{})})]})})]})}Dl.createRoot(document.getElementById("root")).render(S.jsx(Qc.StrictMode,{children:S.jsx(wg,{})}));
