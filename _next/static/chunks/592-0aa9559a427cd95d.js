"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{4492:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=r.useState,i=r.useEffect,s=r.useLayoutEffect,a=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),o=r[0].inst,c=r[1];return s(function(){o.value=n,o.getSnapshot=t,l(o)&&c({inst:o})},[e,n,t]),i(function(){return l(o)&&c({inst:o}),e(function(){l(o)&&c({inst:o})})},[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},5107:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=n(554),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useSyncExternalStore,s=r.useRef,a=r.useEffect,l=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var d=s(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var v=i(e,(d=l(function(){function e(e){if(!a){if(a=!0,i=e,e=r(e),void 0!==o&&f.hasValue){var t=f.value;if(o(t,e))return s=t}return s=e}if(t=s,u(i,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(i=e,s=n)}var i,s,a=!1,l=void 0===n?null:n;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]},[t,n,r,o]))[0],d[1]);return a(function(){f.hasValue=!0,f.value=v},[v]),c(v),v}},554:function(e,t,n){e.exports=n(4492)},5006:function(e,t,n){e.exports=n(5107)},8471:function(e,t,n){let r,o,u;n.d(t,{OK:function(){return ea}});let i=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},s=e=>e&&"window"in e&&e.window===e?e:i(e).defaultView||window;var a=n(2265);let l=null,c=new Set,d=new Map,f=!1,v=!1,p={Tab:!0,Escape:!0};function b(e,t){for(let n of c)n(e,t)}function g(e){var t,n;f=!0,e.metaKey||(t=/^Mac/i,!("undefined"!=typeof window&&null!=window.navigator&&t.test((null===(n=window.navigator.userAgentData)||void 0===n?void 0:n.platform)||window.navigator.platform))&&e.altKey)||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(l="keyboard",b("keyboard",e))}function E(e){l="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(f=!0,b("pointer",e))}function m(e){var t,n;(0===e.mozInputSource&&e.isTrusted?0:(t=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(n=window.navigator.userAgentData)||void 0===n?void 0:n.brands.some(e=>t.test(e.brand)))||t.test(window.navigator.userAgent))&&e.pointerType)?"click"!==e.type||1!==e.buttons:0!==e.detail||e.pointerType)||(f=!0,l="virtual")}function h(e){e.target!==window&&e.target!==document&&(f||v||(l="virtual",b("virtual",e)),f=!1,v=!1)}function y(){f=!1,v=!0}function T(e){if("undefined"==typeof window||d.get(s(e)))return;let t=s(e),n=i(e),r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){f=!0,r.apply(this,arguments)},n.addEventListener("keydown",g,!0),n.addEventListener("keyup",g,!0),n.addEventListener("click",m,!0),t.addEventListener("focus",h,!0),t.addEventListener("blur",y,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",E,!0),n.addEventListener("pointermove",E,!0),n.addEventListener("pointerup",E,!0)):(n.addEventListener("mousedown",E,!0),n.addEventListener("mousemove",E,!0),n.addEventListener("mouseup",E,!0)),t.addEventListener("beforeunload",()=>{w(e)},{once:!0}),d.set(t,{focus:r})}let w=(e,t)=>{let n=s(e),r=i(e);t&&r.removeEventListener("DOMContentLoaded",t),d.has(n)&&(n.HTMLElement.prototype.focus=d.get(n).focus,r.removeEventListener("keydown",g,!0),r.removeEventListener("keyup",g,!0),r.removeEventListener("click",m,!0),n.removeEventListener("focus",h,!0),n.removeEventListener("blur",y,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",E,!0),r.removeEventListener("pointermove",E,!0),r.removeEventListener("pointerup",E,!0)):(r.removeEventListener("mousedown",E,!0),r.removeEventListener("mousemove",E,!0),r.removeEventListener("mouseup",E,!0)),d.delete(n))};function x(){return"pointer"!==l}"undefined"!=typeof document&&function(e){let t;let n=i(void 0);"loading"!==n.readyState?T(void 0):(t=()=>{T(void 0)},n.addEventListener("DOMContentLoaded",t)),()=>w(e,t)}();let P=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),L="undefined"!=typeof document?a.useLayoutEffect:()=>{};class S{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function F(e){let t=(0,a.useRef)({isFocused:!1,observer:null});L(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]);let n=function(e){let t=(0,a.useRef)(null);return L(()=>{t.current=e},[e]),(0,a.useCallback)((...e)=>{let n=t.current;return null==n?void 0:n(...e)},[])}(t=>{null==e||e(t)});return(0,a.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target;r.addEventListener("focusout",e=>{t.current.isFocused=!1,r.disabled&&n(new S("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}}),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[n])}function I(e={}){var t,n,r;let{autoFocus:o=!1,isTextInput:u,within:l}=e,d=(0,a.useRef)({isFocused:!1,isFocusVisible:o||x()}),[f,v]=(0,a.useState)(!1),[b,g]=(0,a.useState)(()=>d.current.isFocused&&d.current.isFocusVisible),E=(0,a.useCallback)(()=>g(d.current.isFocused&&d.current.isFocusVisible),[]),m=(0,a.useCallback)(e=>{d.current.isFocused=e,v(e),E()},[E]);t=e=>{d.current.isFocusVisible=e,E()},n=[],r={isTextInput:u},T(),(0,a.useEffect)(()=>{let e=(e,n)=>{(function(e,t,n){var r;let o="undefined"!=typeof window?s(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,u="undefined"!=typeof window?s(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,i="undefined"!=typeof window?s(null==n?void 0:n.target).HTMLElement:HTMLElement,a="undefined"!=typeof window?s(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof o&&!P.has(null==n?void 0:null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof u||(null==n?void 0:n.target)instanceof i&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof a&&!p[n.key])})(!!(null==r?void 0:r.isTextInput),e,n)&&t(x())};return c.add(e),()=>{c.delete(e)}},n);let{focusProps:h}=function(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e,u=(0,a.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0},[r,o]),s=F(u),l=(0,a.useCallback)(e=>{let t=i(e.target);e.target===e.currentTarget&&t.activeElement===e.target&&(n&&n(e),o&&o(!0),s(e))},[o,n,s]);return{focusProps:{onFocus:!t&&(n||o||r)?l:void 0,onBlur:!t&&(r||o)?u:void 0}}}({isDisabled:l,onFocusChange:m}),{focusWithinProps:y}=function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:o}=e,u=(0,a.useRef)({isFocusWithin:!1}),i=(0,a.useCallback)(e=>{u.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(u.current.isFocusWithin=!1,n&&n(e),o&&o(!1))},[n,o,u]),s=F(i),l=(0,a.useCallback)(e=>{u.current.isFocusWithin||document.activeElement!==e.target||(r&&r(e),o&&o(!0),u.current.isFocusWithin=!0,s(e))},[r,o,s]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:l,onBlur:i}}}({isDisabled:!l,onFocusWithinChange:m});return{isFocused:f,isFocusVisible:b,focusProps:l?y:h}}let k=!1,C=0;function M(){k=!0,setTimeout(()=>{k=!1},50)}function R(e){"touch"===e.pointerType&&M()}function D(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",R):document.addEventListener("touchend",M),C++,()=>{--C>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",R):document.removeEventListener("touchend",M))}}var O=n(1498),A=n(9299),H=n(6584),z=n(1463),V=n(8703);function W(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var _=n(1469),j=n(6400),B=n(9080);function N(e){let{onFocus:t}=e,[n,r]=(0,a.useState)(!0),o=(0,j.t)();return n?a.createElement(B._,{as:"button",type:"button",features:B.x.Focusable,onFocus:e=>{e.preventDefault();let n,u=50;n=requestAnimationFrame(function e(){if(u--<=0){n&&cancelAnimationFrame(n);return}if(t()){if(cancelAnimationFrame(n),!o.current)return;r(!1);return}n=requestAnimationFrame(e)})}}):null}var U=n(9309),Y=n(5583),G=n(8043),K=n(3600);let q=a.createContext(null);function X(e){let{children:t}=e,n=a.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let o=null!=(n=r.get(t))?n:0;return r.set(t,o+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return a.createElement(q.Provider,{value:n},t)}function $(e){let t=a.useContext(q);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let r=null!=(n=null==(t=null==(e=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!r)return Symbol();let o=[],u=r;for(;u;)o.push(u.index),u=u.return;return"$."+o.join(".")}(),[r,o]=t.current.get(e,n);return a.useEffect(()=>o,[]),r}var J=n(7551),Q=((r=Q||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r),Z=((o=Z||{})[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o),ee=((u=ee||{})[u.SetSelectedIndex=0]="SetSelectedIndex",u[u.RegisterTab=1]="RegisterTab",u[u.UnregisterTab=2]="UnregisterTab",u[u.RegisterPanel=3]="RegisterPanel",u[u.UnregisterPanel=4]="UnregisterPanel",u);let et={0(e,t){var n;let r=(0,U.z2)(e.tabs,e=>e.current),o=(0,U.z2)(e.panels,e=>e.current),u=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),i={...e,tabs:r,panels:o};if(t.index<0||t.index>r.length-1){let n=(0,Y.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,Y.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===u.length)return i;let o=(0,Y.E)(n,{0:()=>r.indexOf(u[0]),1:()=>r.indexOf(u[u.length-1])});return{...i,selectedIndex:-1===o?e.selectedIndex:o}}let s=r.slice(0,t.index),a=[...r.slice(t.index),...s].find(e=>u.includes(e));if(!a)return i;let l=null!=(n=r.indexOf(a))?n:e.selectedIndex;return -1===l&&(l=e.selectedIndex),{...i,selectedIndex:l}},1(e,t){if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],r=(0,U.z2)([...e.tabs,t.tab],e=>e.current),o=e.selectedIndex;return e.info.current.isControlled||-1===(o=r.indexOf(n))&&(o=e.selectedIndex),{...e,tabs:r,selectedIndex:o}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,U.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},en=(0,a.createContext)(null);function er(e){let t=(0,a.useContext)(en);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,er),t}return t}en.displayName="TabsDataContext";let eo=(0,a.createContext)(null);function eu(e){let t=(0,a.useContext)(eo);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,eu),t}return t}function ei(e,t){return(0,Y.E)(t.type,et,e,t)}eo.displayName="TabsActionsContext";let es=K.VN.RenderStrategy|K.VN.Static,ea=Object.assign((0,K.yV)(function(e,t){var n,r;let o=(0,a.useId)(),{id:u="headlessui-tabs-tab-".concat(o),disabled:i=!1,autoFocus:s=!1,...l}=e,{orientation:c,activation:d,selectedIndex:f,tabs:v,panels:p}=er("Tab"),b=eu("Tab"),g=er("Tab"),E=(0,a.useRef)(null),m=(0,_.T)(E,t);(0,z.e)(()=>b.registerTab(E),[b,E]);let h=$("tabs"),y=v.indexOf(E);-1===y&&(y=h);let T=y===f,w=(0,H.z)(e=>{var t;let n=e();if(n===U.fE.Success&&"auto"===d){let e=null==(t=(0,O.r)(E))?void 0:t.activeElement,n=g.tabs.findIndex(t=>t.current===e);-1!==n&&b.change(n)}return n}),x=(0,H.z)(e=>{let t=v.map(e=>e.current).filter(Boolean);if(e.key===J.R.Space||e.key===J.R.Enter){e.preventDefault(),e.stopPropagation(),b.change(y);return}switch(e.key){case J.R.Home:case J.R.PageUp:return e.preventDefault(),e.stopPropagation(),w(()=>(0,U.jA)(t,U.TO.First));case J.R.End:case J.R.PageDown:return e.preventDefault(),e.stopPropagation(),w(()=>(0,U.jA)(t,U.TO.Last))}if(w(()=>(0,Y.E)(c,{vertical:()=>e.key===J.R.ArrowUp?(0,U.jA)(t,U.TO.Previous|U.TO.WrapAround):e.key===J.R.ArrowDown?(0,U.jA)(t,U.TO.Next|U.TO.WrapAround):U.fE.Error,horizontal:()=>e.key===J.R.ArrowLeft?(0,U.jA)(t,U.TO.Previous|U.TO.WrapAround):e.key===J.R.ArrowRight?(0,U.jA)(t,U.TO.Next|U.TO.WrapAround):U.fE.Error}))===U.fE.Success)return e.preventDefault()}),P=(0,a.useRef)(!1),L=(0,H.z)(()=>{var e;P.current||(P.current=!0,null==(e=E.current)||e.focus({preventScroll:!0}),b.change(y),(0,G.Y)(()=>{P.current=!1}))}),S=(0,H.z)(e=>{e.preventDefault()}),{isFocusVisible:F,focusProps:C}=I({autoFocus:s}),{isHovered:M,hoverProps:R}=function(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:o}=e,[u,i]=(0,a.useState)(!1),s=(0,a.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,a.useEffect)(D,[]);let{hoverProps:l,triggerHoverEnd:c}=(0,a.useMemo)(()=>{let e=(e,r)=>{if(s.pointerType=r,o||"touch"===r||s.isHovered||!e.currentTarget.contains(e.target))return;s.isHovered=!0;let u=e.currentTarget;s.target=u,t&&t({type:"hoverstart",target:u,pointerType:r}),n&&n(!0),i(!0)},u=(e,t)=>{if(s.pointerType="",s.target=null,"touch"===t||!s.isHovered)return;s.isHovered=!1;let o=e.currentTarget;r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),i(!1)},a={};return"undefined"!=typeof PointerEvent?(a.onPointerEnter=t=>{k&&"mouse"===t.pointerType||e(t,t.pointerType)},a.onPointerLeave=e=>{!o&&e.currentTarget.contains(e.target)&&u(e,e.pointerType)}):(a.onTouchStart=()=>{s.ignoreEmulatedMouseEvents=!0},a.onMouseEnter=t=>{s.ignoreEmulatedMouseEvents||k||e(t,"mouse"),s.ignoreEmulatedMouseEvents=!1},a.onMouseLeave=e=>{!o&&e.currentTarget.contains(e.target)&&u(e,"mouse")}),{hoverProps:a,triggerHoverEnd:u}},[t,n,r,o,s]);return(0,a.useEffect)(()=>{o&&c({currentTarget:s.target},s.pointerType)},[o]),{hoverProps:l,isHovered:u}}({isDisabled:i}),{pressed:V,pressProps:j}=function(){let{disabled:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useRef)(null),[n,r]=(0,a.useState)(!1),o=(0,A.G)(),u=(0,H.z)(()=>{t.current=null,r(!1),o.dispose()}),i=(0,H.z)(e=>{if(o.dispose(),null===t.current){t.current=e.currentTarget,r(!0);{let n=(0,O.r)(e.currentTarget);o.addEventListener(n,"pointerup",u,!1),o.addEventListener(n,"pointermove",e=>{if(t.current){var n,o;let u,i;r((u=e.width/2,i=e.height/2,n={top:e.clientY-i,right:e.clientX+u,bottom:e.clientY+i,left:e.clientX-u},o=t.current.getBoundingClientRect(),!(!n||!o||n.right<o.left||n.left>o.right||n.bottom<o.top||n.top>o.bottom)))}},!1),o.addEventListener(n,"pointercancel",u,!1)}}});return{pressed:n,pressProps:e?{}:{onPointerDown:i,onPointerUp:u,onClick:u}}}({disabled:i}),B=(0,a.useMemo)(()=>({selected:T,hover:M,active:V,focus:F,autofocus:s,disabled:i}),[T,M,F,V,s,i]),N=(0,K.dG)({ref:m,onKeyDown:x,onMouseDown:S,onClick:L,id:u,role:"tab",type:function(e,t){let[n,r]=(0,a.useState)(()=>W(e));return(0,z.e)(()=>{r(W(e))},[e.type,e.as]),(0,z.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,E),"aria-controls":null==(r=null==(n=p[y])?void 0:n.current)?void 0:r.id,"aria-selected":T,tabIndex:T?0:-1,disabled:i||void 0,autoFocus:s},C,R,j);return(0,K.sY)({ourProps:N,theirProps:l,slot:B,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,K.yV)(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:o=!1,onChange:u,selectedIndex:i=null,...s}=e,l=r?"vertical":"horizontal",c=o?"manual":"auto",d=null!==i,f=(0,V.E)({isControlled:d}),v=(0,_.T)(t),[p,b]=(0,a.useReducer)(ei,{info:f,selectedIndex:null!=i?i:n,tabs:[],panels:[]}),g=(0,a.useMemo)(()=>({selectedIndex:p.selectedIndex}),[p.selectedIndex]),E=(0,V.E)(u||(()=>{})),m=(0,V.E)(p.tabs),h=(0,a.useMemo)(()=>({orientation:l,activation:c,...p}),[l,c,p]),y=(0,H.z)(e=>(b({type:1,tab:e}),()=>b({type:2,tab:e}))),T=(0,H.z)(e=>(b({type:3,panel:e}),()=>b({type:4,panel:e}))),w=(0,H.z)(e=>{x.current!==e&&E.current(e),d||b({type:0,index:e})}),x=(0,V.E)(d?e.selectedIndex:p.selectedIndex),P=(0,a.useMemo)(()=>({registerTab:y,registerPanel:T,change:w}),[]);return(0,z.e)(()=>{b({type:0,index:null!=i?i:n})},[i]),(0,z.e)(()=>{if(void 0===x.current||p.tabs.length<=0)return;let e=(0,U.z2)(p.tabs,e=>e.current);e.some((e,t)=>p.tabs[t]!==e)&&w(e.indexOf(p.tabs[x.current]))}),a.createElement(X,null,a.createElement(eo.Provider,{value:P},a.createElement(en.Provider,{value:h},h.tabs.length<=0&&a.createElement(N,{onFocus:()=>{var e,t;for(let n of m.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),(0,K.sY)({ourProps:{ref:v},theirProps:s,slot:g,defaultTag:"div",name:"Tabs"}))))}),List:(0,K.yV)(function(e,t){let{orientation:n,selectedIndex:r}=er("Tab.List"),o=(0,_.T)(t),u=(0,a.useMemo)(()=>({selectedIndex:r}),[r]);return(0,K.sY)({ourProps:{ref:o,role:"tablist","aria-orientation":n},theirProps:e,slot:u,defaultTag:"div",name:"Tabs.List"})}),Panels:(0,K.yV)(function(e,t){let{selectedIndex:n}=er("Tab.Panels"),r=(0,_.T)(t),o=(0,a.useMemo)(()=>({selectedIndex:n}),[n]);return(0,K.sY)({ourProps:{ref:r},theirProps:e,slot:o,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,K.yV)(function(e,t){var n,r,o,u;let i=(0,a.useId)(),{id:s="headlessui-tabs-panel-".concat(i),tabIndex:l=0,...c}=e,{selectedIndex:d,tabs:f,panels:v}=er("Tab.Panel"),p=eu("Tab.Panel"),b=(0,a.useRef)(null),g=(0,_.T)(b,t);(0,z.e)(()=>p.registerPanel(b),[p,b]);let E=$("panels"),m=v.indexOf(b);-1===m&&(m=E);let h=m===d,{isFocusVisible:y,focusProps:T}=I(),w=(0,a.useMemo)(()=>({selected:h,focus:y}),[h,y]),x=(0,K.dG)({ref:g,id:s,role:"tabpanel","aria-labelledby":null==(r=null==(n=f[m])?void 0:n.current)?void 0:r.id,tabIndex:h?l:-1},T);return h||null!=(o=c.unmount)&&!o||null!=(u=c.static)&&u?(0,K.sY)({ourProps:x,theirProps:c,slot:w,defaultTag:"div",features:es,visible:h,name:"Tabs.Panel"}):a.createElement(B._,{as:"span","aria-hidden":"true",...x})})})},9099:function(e,t,n){n.d(t,{Ue:function(){return f}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,u={setState:r,getState:o,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},i=t=e(r,o,u);return u},o=e=>e?r(e):r;var u=n(2265),i=n(5006);let{useDebugValue:s}=u,{useSyncExternalStoreWithSelector:a}=i,l=!1,c=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,n=(e,n)=>(function(e,t=c,n){n&&!l&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),l=!0);let r=a(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return s(r),r})(t,e,n);return Object.assign(n,t),n},f=e=>e?d(e):d}}]);