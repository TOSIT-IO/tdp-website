"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{7551:function(e,t,n){let r;n.d(t,{R:function(){return o}});var o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},9299:function(e,t,n){n.d(t,{G:function(){return i}});var r=n(2265),o=n(777);function i(){let[e]=(0,r.useState)(o.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},6584:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(2265),o=n(8703);let i=function(e){let t=(0,o.E)(e);return r.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current(...n)},[t])}},6400:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(2265),o=n(1463);function i(){let e=(0,r.useRef)(!1);return(0,o.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},1463:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(2265),o=n(4462);let i=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},8703:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(2265),o=n(1463);function i(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},1469:function(e,t,n){n.d(t,{T:function(){return a},h:function(){return u}});var r=n(2265),o=n(6584);let i=Symbol();function u(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return Object.assign(e,{[i]:t})}function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let u=(0,r.useRef)(t);(0,r.useEffect)(()=>{u.current=t},[t]);let a=(0,o.z)(e=>{for(let t of u.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[i]))?void 0:a}},9080:function(e,t,n){let r;n.d(t,{_:function(){return u},x:function(){return i}});var o=n(3600),i=((r=i||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let u=(0,o.yV)(function(e,t){var n;let{features:r=1,...i}=e,u={ref:t,"aria-hidden":(2&r)==2||(null!=(n=i["aria-hidden"])?n:void 0),hidden:(4&r)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:u,theirProps:i,slot:{},defaultTag:"div",name:"Hidden"})})},2585:function(e,t,n){n.d(t,{A:function(){return r}});function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.from(new Set(t.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}},777:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let o=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(o))},nextFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let o=setTimeout(...t);return n.add(()=>clearTimeout(o))},microTask(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];let i={current:!0};return(0,r.Y)(()=>{i.current&&t[0]()}),n.add(()=>{i.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.includes(e)||t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(8043)},4462:function(e,t,n){n.d(t,{O:function(){return a}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);class u{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){i(this,"current",this.detect()),i(this,"handoffState","pending"),i(this,"currentId",0)}}let a=new u},9309:function(e,t,n){let r,o,i,u,a;n.d(t,{C5:function(){return y},TO:function(){return d},fE:function(){return h},jA:function(){return E},sP:function(){return p},tJ:function(){return v},z2:function(){return b}});var l=n(5583),c=n(1498);let s=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>"".concat(e,":not([tabindex='-1'])")).join(","),f=["[data-autofocus]"].map(e=>"".concat(e,":not([tabindex='-1'])")).join(",");var d=((r=d||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r[r.AutoFocus=64]="AutoFocus",r),h=((o=h||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),m=((i=m||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i),v=((u=v||{})[u.Strict=0]="Strict",u[u.Loose=1]="Loose",u);function p(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e!==(null==(t=(0,c.r)(e))?void 0:t.body)&&(0,l.E)(n,{0:()=>e.matches(s),1(){let t=e;for(;null!==t;){if(t.matches(s))return!0;t=t.parentElement}return!1}})}var g=((a=g||{})[a.Keyboard=0]="Keyboard",a[a.Mouse=1]="Mouse",a);function y(e){null==e||e.focus({preventScroll:!0})}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function E(e,t){var n,r,o;let{sorted:i=!0,relativeTo:u=null,skipElements:a=[]}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,c=Array.isArray(e)?i?b(e):e:64&t?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(f)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e):function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(s)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);a.length>0&&c.length>1&&(c=c.filter(e=>!a.some(t=>null!=t&&"current"in t?(null==t?void 0:t.current)===e:t===e))),u=null!=u?u:l.activeElement;let d=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,c.indexOf(u))-1;if(4&t)return Math.max(0,c.indexOf(u))+1;if(8&t)return c.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=32&t?{preventScroll:!0}:{},v=0,p=c.length,g;do{if(v>=p||v+p<=0)return 0;let e=h+v;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}null==(g=c[e])||g.focus(m),v+=d}while(g!==l.activeElement);return 6&t&&null!=(o=null==(r=null==(n=g)?void 0:n.matches)?void 0:r.call(n,"textarea,input"))&&o&&g.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},5583:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];if(e in t){let n=t[e];return"function"==typeof n?n(...o):n}let u=Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}},8043:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},1498:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(4462);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},3600:function(e,t,n){let r,o;n.d(t,{VN:function(){return l},dG:function(){return m},l4:function(){return c},oA:function(){return p},sY:function(){return s},yV:function(){return v}});var i=n(2265),u=n(2585),a=n(5583),l=((r=l||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),c=((o=c||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function s(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:o,features:i,visible:u=!0,name:l,mergeRefs:c}=e;c=null!=c?c:d;let s=h(n,t);if(u)return f(s,r,o,l,c);let m=null!=i?i:0;if(2&m){let{static:e=!1,...t}=s;if(e)return f(t,r,o,l,c)}if(1&m){let{unmount:e=!0,...t}=s;return(0,a.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},r,o,l,c)})}return f(s,r,o,l,c)}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,{as:a=n,children:l,refName:c="ref",...s}=g(e,["unmount","static"]),f=void 0!==e.ref?{[c]:e.ref}:{},d="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t)),s["aria-labelledby"]&&s["aria-labelledby"]===s.id&&(s["aria-labelledby"]=void 0);let m={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r.replace(/([A-Z])/g,e=>"-".concat(e.toLowerCase())));if(e)for(let e of(m["data-headlessui-state"]=n.join(" "),n))m["data-".concat(e)]=""}if(a===i.Fragment&&(Object.keys(p(s)).length>0||Object.keys(p(m)).length>0)){if(!(0,i.isValidElement)(d)||Array.isArray(d)&&d.length>1){if(Object.keys(p(s)).length>0)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(p(s)).concat(Object.keys(p(m))).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"))}else{let e=d.props,t=null==e?void 0:e.className,n="function"==typeof t?function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,u.A)(t(...n),s.className)}:(0,u.A)(t,s.className),r=h(d.props,p(g(s,["ref"])));for(let e in m)e in r&&delete m[e];return(0,i.cloneElement)(d,Object.assign({},r,m,f,{ref:o(d.ref,f.ref)},n?{className:n}:{}))}}return(0,i.createElement)(a,Object.assign({},g(s,["ref"]),a!==i.Fragment&&f,a!==i.Fragment&&m),d)}function d(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}function h(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])for(let e in o)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e)&&(o[e]=[e=>{var t;return null==(t=null==e?void 0:e.preventDefault)?void 0:t.call(e)}]);for(let e in o)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(let n of o[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];for(let e in o)Object.assign(r,{[e](){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];for(let t of o[e])null==t||t(...n)}});return r}function v(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},4839:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}}}]);