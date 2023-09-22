"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{348:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,u="";if("string"==typeof t||"number"==typeof t)u+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(u&&(u+=" "),u+=r);else for(n in t)t[n]&&(u&&(u+=" "),u+=n)}return u}(e))&&(r&&(r+=" "),r+=t);return r}},622:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:u,type:e,key:s,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},7437:function(e,t,n){e.exports=n(622)},1853:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,i=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),u=r[0].inst,c=r[1];return i(function(){u.value=n,u.getSnapshot=t,s(u)&&c({inst:u})},[e,n,t]),a(function(){return s(u)&&c({inst:u}),e(function(){s(u)&&c({inst:u})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},8704:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),u=n(6272),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=u.useSyncExternalStore,i=r.useRef,l=r.useEffect,s=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var f=i(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var p=a(e,(f=s(function(){function e(e){if(!l){if(l=!0,a=e,e=r(e),void 0!==u&&d.hasValue){var t=d.value;if(u(t,e))return i=t}return i=e}if(t=i,o(a,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(a=e,i=n)}var a,i,l=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,n,r,u]))[0],f[1]);return l(function(){d.hasValue=!0,d.value=p},[p]),c(p),p}},6272:function(e,t,n){e.exports=n(1853)},5401:function(e,t,n){e.exports=n(8704)},3850:function(e,t,n){n.d(t,{R:function(){return u}});var r,u=((r=u||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},5456:function(e,t,n){n.d(t,{O:function(){return D}});var r,u,o,a=n(2265),i=n(1931),l=n(5606),s=n(597),c=n(3850),f=n(5410),d=n(2600),p=n(6618);function b(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var v=n(1858),m=n(8227);function h({onFocus:e}){let[t,n]=(0,a.useState)(!0);return t?a.createElement(m._,{as:"button",type:"button",features:m.A.Focusable,onFocus:t=>{t.preventDefault();let r,u=50;r=requestAnimationFrame(function t(){if(u--<=0){r&&cancelAnimationFrame(r);return}if(e()){n(!1),cancelAnimationFrame(r);return}r=requestAnimationFrame(t)})}}):null}var g=n(2950),y=n(5195),E=n(4851);let x=a.createContext(null);function w({children:e}){let t=a.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let u=null!=(n=r.get(t))?n:0;return r.set(t,u+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return a.createElement(x.Provider,{value:t},e)}function S(e){let t=a.useContext(x);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let r=null!=(n=null==(t=null==(e=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!r)return Symbol();let u=[],o=r;for(;o;)u.push(o.index),o=o.return;return"$."+u.join(".")}(),[r,u]=t.current.get(e,n);return a.useEffect(()=>u,[]),r}var O=((r=O||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r),T=((u=T||{})[u.Less=-1]="Less",u[u.Equal=0]="Equal",u[u.Greater=1]="Greater",u),P=((o=P||{})[o.SetSelectedIndex=0]="SetSelectedIndex",o[o.RegisterTab=1]="RegisterTab",o[o.UnregisterTab=2]="UnregisterTab",o[o.RegisterPanel=3]="RegisterPanel",o[o.UnregisterPanel=4]="UnregisterPanel",o);let A={0(e,t){var n;let r=(0,f.z2)(e.tabs,e=>e.current),u=(0,f.z2)(e.panels,e=>e.current),o=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),a={...e,tabs:r,panels:u};if(t.index<0||t.index>r.length-1){let n=(0,s.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,s.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===o.length?a:{...a,selectedIndex:(0,s.E)(n,{0:()=>r.indexOf(o[0]),1:()=>r.indexOf(o[o.length-1])})}}let i=r.slice(0,t.index),l=[...r.slice(t.index),...i].find(e=>o.includes(e));if(!l)return a;let c=null!=(n=r.indexOf(l))?n:e.selectedIndex;return -1===c&&(c=e.selectedIndex),{...a,selectedIndex:c}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],u=(0,f.z2)([...e.tabs,t.tab],e=>e.current),o=null!=(n=u.indexOf(r))?n:e.selectedIndex;return -1===o&&(o=e.selectedIndex),{...e,tabs:u,selectedIndex:o}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,f.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},I=(0,a.createContext)(null);function N(e){let t=(0,a.useContext)(I);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,N),t}return t}I.displayName="TabsDataContext";let R=(0,a.createContext)(null);function j(e){let t=(0,a.useContext)(R);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return t}function _(e,t){return(0,s.E)(t.type,A,e,t)}R.displayName="TabsActionsContext";let F=a.Fragment,k=i.AN.RenderStrategy|i.AN.Static,D=Object.assign((0,i.yV)(function(e,t){var n,r;let u=(0,l.M)(),{id:o=`headlessui-tabs-tab-${u}`,...v}=e,{orientation:m,activation:h,selectedIndex:x,tabs:w,panels:O}=N("Tab"),T=j("Tab"),P=N("Tab"),A=(0,a.useRef)(null),I=(0,p.T)(A,t);(0,d.e)(()=>T.registerTab(A),[T,A]);let R=S("tabs"),_=w.indexOf(A);-1===_&&(_=R);let F=_===x,k=(0,g.z)(e=>{var t;let n=e();if(n===f.fE.Success&&"auto"===h){let e=null==(t=(0,E.r)(A))?void 0:t.activeElement,n=P.tabs.findIndex(t=>t.current===e);-1!==n&&T.change(n)}return n}),D=(0,g.z)(e=>{let t=w.map(e=>e.current).filter(Boolean);if(e.key===c.R.Space||e.key===c.R.Enter){e.preventDefault(),e.stopPropagation(),T.change(_);return}switch(e.key){case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),k(()=>(0,f.jA)(t,f.TO.First));case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),k(()=>(0,f.jA)(t,f.TO.Last))}if(k(()=>(0,s.E)(m,{vertical:()=>e.key===c.R.ArrowUp?(0,f.jA)(t,f.TO.Previous|f.TO.WrapAround):e.key===c.R.ArrowDown?(0,f.jA)(t,f.TO.Next|f.TO.WrapAround):f.fE.Error,horizontal:()=>e.key===c.R.ArrowLeft?(0,f.jA)(t,f.TO.Previous|f.TO.WrapAround):e.key===c.R.ArrowRight?(0,f.jA)(t,f.TO.Next|f.TO.WrapAround):f.fE.Error}))===f.fE.Success)return e.preventDefault()}),C=(0,a.useRef)(!1),L=(0,g.z)(()=>{var e;C.current||(C.current=!0,null==(e=A.current)||e.focus(),T.change(_),(0,y.Y)(()=>{C.current=!1}))}),M=(0,g.z)(e=>{e.preventDefault()}),U=(0,a.useMemo)(()=>({selected:F}),[F]),z={ref:I,onKeyDown:D,onMouseDown:M,onClick:L,id:o,role:"tab",type:function(e,t){let[n,r]=(0,a.useState)(()=>b(e));return(0,d.e)(()=>{r(b(e))},[e.type,e.as]),(0,d.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,A),"aria-controls":null==(r=null==(n=O[_])?void 0:n.current)?void 0:r.id,"aria-selected":F,tabIndex:F?0:-1};return(0,i.sY)({ourProps:z,theirProps:v,slot:U,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,i.yV)(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:u=!1,onChange:o,selectedIndex:l=null,...s}=e,c=r?"vertical":"horizontal",b=u?"manual":"auto",m=null!==l,y=(0,p.T)(t),[E,x]=(0,a.useReducer)(_,{selectedIndex:null!=l?l:n,tabs:[],panels:[]}),S=(0,a.useMemo)(()=>({selectedIndex:E.selectedIndex}),[E.selectedIndex]),O=(0,v.E)(o||(()=>{})),T=(0,v.E)(E.tabs),P=(0,a.useMemo)(()=>({orientation:c,activation:b,...E}),[c,b,E]),A=(0,g.z)(e=>(x({type:1,tab:e}),()=>x({type:2,tab:e}))),N=(0,g.z)(e=>(x({type:3,panel:e}),()=>x({type:4,panel:e}))),j=(0,g.z)(e=>{k.current!==e&&O.current(e),m||x({type:0,index:e})}),k=(0,v.E)(m?e.selectedIndex:E.selectedIndex),D=(0,a.useMemo)(()=>({registerTab:A,registerPanel:N,change:j}),[]);return(0,d.e)(()=>{x({type:0,index:null!=l?l:n})},[l]),(0,d.e)(()=>{if(void 0===k.current||E.tabs.length<=0)return;let e=(0,f.z2)(E.tabs,e=>e.current);e.some((e,t)=>E.tabs[t]!==e)&&j(e.indexOf(E.tabs[k.current]))}),a.createElement(w,null,a.createElement(R.Provider,{value:D},a.createElement(I.Provider,{value:P},P.tabs.length<=0&&a.createElement(h,{onFocus:()=>{var e,t;for(let n of T.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),(0,i.sY)({ourProps:{ref:y},theirProps:s,slot:S,defaultTag:F,name:"Tabs"}))))}),List:(0,i.yV)(function(e,t){let{orientation:n,selectedIndex:r}=N("Tab.List"),u=(0,p.T)(t);return(0,i.sY)({ourProps:{ref:u,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,i.yV)(function(e,t){let{selectedIndex:n}=N("Tab.Panels"),r=(0,p.T)(t),u=(0,a.useMemo)(()=>({selectedIndex:n}),[n]);return(0,i.sY)({ourProps:{ref:r},theirProps:e,slot:u,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,i.yV)(function(e,t){var n,r,u,o;let s=(0,l.M)(),{id:c=`headlessui-tabs-panel-${s}`,tabIndex:f=0,...b}=e,{selectedIndex:v,tabs:h,panels:g}=N("Tab.Panel"),y=j("Tab.Panel"),E=(0,a.useRef)(null),x=(0,p.T)(E,t);(0,d.e)(()=>y.registerPanel(E),[y,E]);let w=S("panels"),O=g.indexOf(E);-1===O&&(O=w);let T=O===v,P=(0,a.useMemo)(()=>({selected:T}),[T]),A={ref:x,id:c,role:"tabpanel","aria-labelledby":null==(r=null==(n=h[O])?void 0:n.current)?void 0:r.id,tabIndex:T?f:-1};return T||null!=(u=b.unmount)&&!u||null!=(o=b.static)&&o?(0,i.sY)({ourProps:A,theirProps:b,slot:P,defaultTag:"div",features:k,visible:T,name:"Tabs.Panel"}):a.createElement(m._,{as:"span",...A})})})},2950:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(2265),u=n(1858);let o=function(e){let t=(0,u.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},5606:function(e,t,n){n.d(t,{M:function(){return l}});var r,u=n(2265),o=n(2600),a=n(8957),i=n(2057);let l=null!=(r=u.useId)?r:function(){let e=(0,a.H)(),[t,n]=u.useState(e?()=>i.O.nextId():null);return(0,o.e)(()=>{null===t&&n(i.O.nextId())},[t]),null!=t?""+t:void 0}},2600:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(2265),u=n(2057);let o=(e,t)=>{u.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},1858:function(e,t,n){n.d(t,{E:function(){return o}});var r=n(2265),u=n(2600);function o(e){let t=(0,r.useRef)(e);return(0,u.e)(()=>{t.current=e},[e]),t}},8957:function(e,t,n){n.d(t,{H:function(){return o}});var r=n(2265),u=n(2057);function o(){let[e,t]=(0,r.useState)(u.O.isHandoffComplete);return e&&!1===u.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>u.O.handoff(),[]),e}},6618:function(e,t,n){n.d(t,{T:function(){return i},h:function(){return a}});var r=n(2265),u=n(2950);let o=Symbol();function a(e,t=!0){return Object.assign(e,{[o]:t})}function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,u.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[o]))?void 0:n}},8227:function(e,t,n){n.d(t,{A:function(){return o},_:function(){return a}});var r,u=n(1931),o=((r=o||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let a=(0,u.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,u.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},3960:function(e,t,n){n.d(t,{A:function(){return r}});function r(...e){return e.filter(Boolean).join(" ")}},2057:function(e,t,n){n.d(t,{O:function(){return a}});var r=Object.defineProperty,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t,n)=>(u(e,"symbol"!=typeof t?t+"":t,n),n);let a=new class{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},5410:function(e,t,n){n.d(t,{C5:function(){return h},TO:function(){return f},fE:function(){return d},jA:function(){return y},sP:function(){return v},tJ:function(){return b},z2:function(){return g}});var r,u,o,a,i,l=n(597),s=n(4851);let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var f=((r=f||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),d=((u=d||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),p=((o=p||{})[o.Previous=-1]="Previous",o[o.Next=1]="Next",o),b=((a=b||{})[a.Strict=0]="Strict",a[a.Loose=1]="Loose",a);function v(e,t=0){var n;return e!==(null==(n=(0,s.r)(e))?void 0:n.body)&&(0,l.E)(t,{0:()=>e.matches(c),1(){let t=e;for(;null!==t;){if(t.matches(c))return!0;t=t.parentElement}return!1}})}var m=((i=m||{})[i.Keyboard=0]="Keyboard",i[i.Mouse=1]="Mouse",i);function h(e){null==e||e.focus({preventScroll:!0})}function g(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),u=t(n);if(null===r||null===u)return 0;let o=r.compareDocumentPosition(u);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function y(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){var o,a,i;let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?g(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(c)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);u.length>0&&s.length>1&&(s=s.filter(e=>!u.includes(e))),r=null!=r?r:l.activeElement;let f=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=32&t?{preventScroll:!0}:{},b=0,v=s.length,m;do{if(b>=v||b+v<=0)return 0;let e=d+b;if(16&t)e=(e+v)%v;else{if(e<0)return 3;if(e>=v)return 1}null==(m=s[e])||m.focus(p),b+=f}while(m!==l.activeElement);return 6&t&&null!=(i=null==(a=null==(o=m)?void 0:o.matches)?void 0:a.call(o,"textarea,input"))&&i&&m.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},597:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let u=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}},5195:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},4851:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(2057);function u(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},1931:function(e,t,n){n.d(t,{AN:function(){return l},l4:function(){return s},sY:function(){return c},yV:function(){return p}});var r,u,o=n(2265),a=n(3960),i=n(597),l=((r=l||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((u=s||{})[u.Unmount=0]="Unmount",u[u.Hidden=1]="Hidden",u);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:o=!0,name:a}){let l=d(t,e);if(o)return f(l,n,r,a);let s=null!=u?u:0;if(2&s){let{static:e=!1,...t}=l;if(e)return f(t,n,r,a)}if(1&s){let{unmount:e=!0,...t}=l;return(0,i.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,a)})}return f(l,n,r,a)}function f(e,t={},n,r){let{as:u=n,children:i,refName:l="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[l]:e.ref}:{},f="function"==typeof i?i(t):i;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,u]of Object.entries(t))"boolean"==typeof u&&(e=!0),!0===u&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(u===o.Fragment&&Object.keys(b(s)).length>0){if(!(0,o.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,a.A)(null==e?void 0:e.className(...t),s.className):(0,a.A)(null==e?void 0:e.className,s.className),n=t?{className:t}:{};return(0,o.cloneElement)(f,Object.assign({},d(f.props,b(v(s,["ref"]))),p,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,c.ref),n))}return(0,o.createElement)(u,Object.assign({},v(s,["ref"]),u!==o.Fragment&&c,u!==o.Fragment&&p),f)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let u of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;u(t,...r)}}});return t}function p(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function b(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},4660:function(e,t,n){n.d(t,{Ue:function(){return s}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let u="function"==typeof e?e(t):e;if(!Object.is(u,t)){let e=t;t=(null!=r?r:"object"!=typeof u)?u:Object.assign({},t,u),n.forEach(n=>n(t,e))}},u=()=>t,o={setState:r,getState:u,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,u,o),o},u=e=>e?r(e):r;var o=n(2265),a=n(5401);let{useSyncExternalStoreWithSelector:i}=a,l=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?u(e):e,n=(e,n)=>(function(e,t=e.getState,n){let r=i(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,o.useDebugValue)(r),r})(t,e,n);return Object.assign(n,t),n},s=e=>e?l(e):l}}]);