import{r as d,j as c,A as He,q as Ce,v as de,w as ft,x as wo,y as _o,z as We,B as Ie,C as Mn,E as Eo,P as Co,F as So,H as It,b as Ve,l as Ge,I as No,m as M,S as X,a as Se,_ as Ao,s as C,t as k,k as Io,J as Ro,n as To,K as Oo,M as Do,c as le,T as jn,N as ko,O as Po,Q as Mo,u as jo,U as nn,i as Fo,D as Fn,p as Bn,o as Ln,R as Bo,h as Re}from"./index-CqKicEeX.js";import{I as Un,L as $n}from"./logo-rnXZB2AS.js";const Lo="/assets/delete-CCXd37Qu.mp3",Uo="/assets/error-C_B2jrpZ.mp3",$o="/assets/ascend-musical-mallet-2-FsherSUY.mp3",zo="/assets/ascend-cartoon-tip-toes-BnJkqREh.mp3",Ho="/assets/cartoon-blink-fast-CYAXvoX6.mp3";function Wo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Vo=Wo();function Go(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function rn(...e){return t=>{e.forEach(n=>{Go(n,t)})}}var on={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},V={enter:{duration:.2,ease:on.easeOut},exit:{duration:.1,ease:on.easeIn}},G={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})},qo={enter:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:1,transition:(r=e==null?void 0:e.enter)!=null?r:G.enter(V.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:0,transition:(r=e==null?void 0:e.exit)!=null?r:G.exit(V.exit,n),transitionEnd:t==null?void 0:t.exit}}},zn={initial:"exit",animate:"enter",exit:"exit",variants:qo},Ko=d.forwardRef(function(t,n){const{unmountOnExit:r,in:o,className:a,transition:s,transitionEnd:i,delay:u,...l}=t,m=o||r?"enter":"exit",f=r?o&&r:!0,h={transition:s,transitionEnd:i,delay:u};return c.jsx(He,{custom:h,children:f&&c.jsx(Ce.div,{ref:n,className:de("chakra-fade",a),custom:h,...zn,animate:m,...l})})});Ko.displayName="Fade";var Xo={exit:({reverse:e,initialScale:t,transition:n,transitionEnd:r,delay:o})=>{var a;return{opacity:0,...e?{scale:t,transitionEnd:r==null?void 0:r.exit}:{transitionEnd:{scale:t,...r==null?void 0:r.exit}},transition:(a=n==null?void 0:n.exit)!=null?a:G.exit(V.exit,o)}},enter:({transitionEnd:e,transition:t,delay:n})=>{var r;return{opacity:1,scale:1,transition:(r=t==null?void 0:t.enter)!=null?r:G.enter(V.enter,n),transitionEnd:e==null?void 0:e.enter}}},Hn={initial:"exit",animate:"enter",exit:"exit",variants:Xo},Yo=d.forwardRef(function(t,n){const{unmountOnExit:r,in:o,reverse:a=!0,initialScale:s=.95,className:i,transition:u,transitionEnd:l,delay:m,...f}=t,h=r?o&&r:!0,g=o||r?"enter":"exit",v={initialScale:s,reverse:a,transition:u,transitionEnd:l,delay:m};return c.jsx(He,{custom:v,children:h&&c.jsx(Ce.div,{ref:n,className:de("chakra-offset-slide",i),...Hn,animate:g,custom:v,...f})})});Yo.displayName="ScaleFade";var Zo={initial:({offsetX:e,offsetY:t,transition:n,transitionEnd:r,delay:o})=>{var a;return{opacity:0,x:e,y:t,transition:(a=n==null?void 0:n.exit)!=null?a:G.exit(V.exit,o),transitionEnd:r==null?void 0:r.exit}},enter:({transition:e,transitionEnd:t,delay:n})=>{var r;return{opacity:1,x:0,y:0,transition:(r=e==null?void 0:e.enter)!=null?r:G.enter(V.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({offsetY:e,offsetX:t,transition:n,transitionEnd:r,reverse:o,delay:a})=>{var s;const i={x:t,y:e};return{opacity:0,transition:(s=n==null?void 0:n.exit)!=null?s:G.exit(V.exit,a),...o?{...i,transitionEnd:r==null?void 0:r.exit}:{transitionEnd:{...i,...r==null?void 0:r.exit}}}}},ve={initial:"initial",animate:"enter",exit:"exit",variants:Zo},Jo=d.forwardRef(function(t,n){const{unmountOnExit:r,in:o,reverse:a=!0,className:s,offsetX:i=0,offsetY:u=8,transition:l,transitionEnd:m,delay:f,...h}=t,g=r?o&&r:!0,v=o||r?"enter":"exit",p={offsetX:i,offsetY:u,reverse:a,transition:l,transitionEnd:m,delay:f};return c.jsx(He,{custom:p,children:g&&c.jsx(Ce.div,{ref:n,className:de("chakra-offset-slide",s),custom:p,...ve,animate:v,...h})})});Jo.displayName="SlideFade";function Qo(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var ht="data-focus-lock",Wn="data-focus-lock-disabled",ea="data-no-focus-lock",ta="data-autofocus-inside",na="data-no-autofocus";function Je(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function ra(e,t){var n=d.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var oa=typeof window<"u"?d.useLayoutEffect:d.useEffect,an=new WeakMap;function Vn(e,t){var n=ra(null,function(r){return e.forEach(function(o){return Je(o,r)})});return oa(function(){var r=an.get(n);if(r){var o=new Set(r),a=new Set(e),s=n.current;o.forEach(function(i){a.has(i)||Je(i,null)}),a.forEach(function(i){o.has(i)||Je(i,s)})}an.set(n,e)},[e]),n}var Qe={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},j=function(){return j=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},j.apply(this,arguments)};function Gn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function aa(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function qn(e){return e}function Kn(e,t){t===void 0&&(t=qn);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var s=t(a,r);return n.push(s),function(){n=n.filter(function(i){return i!==s})}},assignSyncMedium:function(a){for(r=!0;n.length;){var s=n;n=[],s.forEach(a)}n={push:function(i){return a(i)},filter:function(){return n}}},assignMedium:function(a){r=!0;var s=[];if(n.length){var i=n;n=[],i.forEach(a),s=n}var u=function(){var m=s;s=[],m.forEach(a)},l=function(){return Promise.resolve().then(u)};l(),n={push:function(m){s.push(m),l()},filter:function(m){return s=s.filter(m),n}}}};return o}function Rt(e,t){return t===void 0&&(t=qn),Kn(e,t)}function Xn(e){e===void 0&&(e={});var t=Kn(null);return t.options=j({async:!0,ssr:!1},e),t}var Yn=function(e){var t=e.sideCar,n=Gn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return d.createElement(r,j({},n))};Yn.isSideCarExport=!0;function sa(e,t){return e.useMedium(t),Yn}var Zn=Rt({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),Jn=Rt(),ia=Rt(),ca=Xn({async:!0,ssr:typeof document<"u"}),la=d.createContext(void 0),ua=[],Tt=d.forwardRef(function(t,n){var r,o=d.useState(),a=o[0],s=o[1],i=d.useRef(),u=d.useRef(!1),l=d.useRef(null),m=d.useState({}),f=m[1],h=t.children,g=t.disabled,v=g===void 0?!1:g,p=t.noFocusGuards,b=p===void 0?!1:p,x=t.persistentFocus,y=x===void 0?!1:x,w=t.crossFrame,_=w===void 0?!0:w,E=t.autoFocus,I=E===void 0?!0:E;t.allowTextSelection;var T=t.group,D=t.className,R=t.whiteList,he=t.hasPositiveIndices,Ne=t.shards,Xe=Ne===void 0?ua:Ne,Zt=t.as,oo=Zt===void 0?"div":Zt,Jt=t.lockProps,ao=Jt===void 0?{}:Jt,so=t.sideCar,Qt=t.returnFocus,Ae=Qt===void 0?!1:Qt,io=t.focusOptions,Ye=t.onActivation,Ze=t.onDeactivation,co=d.useState({}),lo=co[0],uo=d.useCallback(function(L){var Q=L.captureFocusRestore;if(!l.current){var ee,H=(ee=document)==null?void 0:ee.activeElement;l.current=H,H!==document.body&&(l.current=Q(H))}i.current&&Ye&&Ye(i.current),u.current=!0,f()},[Ye]),fo=d.useCallback(function(){u.current=!1,Ze&&Ze(i.current),f()},[Ze]),ho=d.useCallback(function(L){var Q=l.current;if(Q){var ee=(typeof Q=="function"?Q():Q)||document.body,H=typeof Ae=="function"?Ae(ee):Ae;if(H){var tn=typeof H=="object"?H:void 0;l.current=null,L?Promise.resolve().then(function(){return ee.focus(tn)}):ee.focus(tn)}}},[Ae]),po=d.useCallback(function(L){u.current&&Zn.useMedium(L)},[]),mo=Jn.useMedium,vo=d.useCallback(function(L){i.current!==L&&(i.current=L,s(L))},[]),go=ft((r={},r[Wn]=v&&"disabled",r[ht]=T,r),ao),en=b!==!0,bo=en&&b!=="tail",xo=Vn([n,vo]),yo=d.useMemo(function(){return{observed:i,shards:Xe,enabled:!v,active:u.current}},[v,u.current,Xe,a]);return d.createElement(d.Fragment,null,en&&[d.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:v?-1:0,style:Qe}),he?d.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:v?-1:1,style:Qe}):null],!v&&d.createElement(so,{id:lo,sideCar:ca,observed:a,disabled:v,persistentFocus:y,crossFrame:_,autoFocus:I,whiteList:R,shards:Xe,onActivation:uo,onDeactivation:fo,returnFocus:ho,focusOptions:io}),d.createElement(oo,ft({ref:xo},go,{className:D,onBlur:mo,onFocus:po}),d.createElement(la.Provider,{value:yo},h)),bo&&d.createElement("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:Qe}))});Tt.propTypes={};function pt(e,t){return pt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},pt(e,t)}function da(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,pt(e,t)}function be(e){"@babel/helpers - typeof";return be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},be(e)}function fa(e,t){if(be(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(be(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ha(e){var t=fa(e,"string");return be(t)=="symbol"?t:t+""}function pa(e,t,n){return t=ha(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ma(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],s;function i(){s=e(a.map(function(l){return l.props})),t(s)}var u=function(l){da(m,l);function m(){return l.apply(this,arguments)||this}m.peek=function(){return s};var f=m.prototype;return f.componentDidMount=function(){a.push(this),i()},f.componentDidUpdate=function(){i()},f.componentWillUnmount=function(){var g=a.indexOf(this);a.splice(g,1),i()},f.render=function(){return wo.createElement(o,this.props)},m}(d.PureComponent);return pa(u,"displayName","SideEffect("+n(o)+")"),u}}var B=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},Y=function(e){return Array.isArray(e)?e:[e]},Qn=function(e){return Array.isArray(e)?e[0]:e},va=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},er=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},tr=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},ga=function(e){return e.hasAttribute("inert")},ba=function(e,t){return!e||tr(e)||!va(e)&&!ga(e)&&t(er(e))},nr=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=ba(t,nr.bind(void 0,e));return e.set(t,r),r},xa=function(e,t){return e&&!tr(e)?_a(e)?t(er(e)):!1:!0},rr=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=xa(t,rr.bind(void 0,e));return e.set(t,r),r},or=function(e){return e.dataset},ya=function(e){return e.tagName==="BUTTON"},ar=function(e){return e.tagName==="INPUT"},sr=function(e){return ar(e)&&e.type==="radio"},wa=function(e){return!((ar(e)||ya(e))&&(e.type==="hidden"||e.disabled))},_a=function(e){var t=e.getAttribute(na);return![!0,"true",""].includes(t)},Ot=function(e){var t;return!!(e&&(!((t=or(e))===null||t===void 0)&&t.focusGuard))},mt=function(e){return!Ot(e)},Ea=function(e){return!!e},Ca=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},Sa=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},Dt=function(e,t,n){return B(e).map(function(r,o){var a=Sa(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(Ca)},Na=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],kt=Na.join(","),Aa="".concat(kt,", [data-focus-guard]"),ir=function(e,t){return B((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?Aa:kt)?[r]:[],ir(r))},[])},Ia=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?ue([e.contentDocument.body],t):[e]},ue=function(e,t){return e.reduce(function(n,r){var o,a=ir(r,t),s=(o=[]).concat.apply(o,a.map(function(i){return Ia(i,t)}));return n.concat(s,r.parentNode?B(r.parentNode.querySelectorAll(kt)).filter(function(i){return i===r}):[])},[])},Ra=function(e){var t=e.querySelectorAll("[".concat(ta,"]"));return B(t).map(function(n){return ue([n])}).reduce(function(n,r){return n.concat(r)},[])},Pt=function(e,t){return B(e).filter(function(n){return nr(t,n)}).filter(function(n){return wa(n)})},sn=function(e,t){return t===void 0&&(t=new Map),B(e).filter(function(n){return rr(t,n)})},Mt=function(e,t,n){return Dt(Pt(ue(e,n),t),!0,n)},Be=function(e,t){return Dt(Pt(ue(e),t),!1)},Ta=function(e,t){return Pt(Ra(e),t)},q=function(e,t){return e.shadowRoot?q(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:B(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?q(o,t):!1}return q(n,t)})},Oa=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(s,i){return!t.has(i)})},cr=function(e){return e.parentNode?cr(e.parentNode):e},jt=function(e){var t=Y(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(ht);return n.push.apply(n,o?Oa(B(cr(r).querySelectorAll("[".concat(ht,'="').concat(o,'"]:not([').concat(Wn,'="disabled"])')))):[r]),n},[])},Da=function(e){try{return e()}catch{return}},xe=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?xe(t.shadowRoot):t instanceof HTMLIFrameElement&&Da(function(){return t.contentWindow.document})?xe(t.contentWindow.document):t}},ka=function(e,t){return e===t},Pa=function(e,t){return!!B(e.querySelectorAll("iframe")).some(function(n){return ka(n,t)})},lr=function(e,t){return t===void 0&&(t=xe(Qn(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:jt(e).some(function(n){return q(n,t)||Pa(n,t)})},Ma=function(e){e===void 0&&(e=document);var t=xe(e);return t?B(e.querySelectorAll("[".concat(ea,"]"))).some(function(n){return q(n,t)}):!1},ja=function(e,t){return t.filter(sr).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Ft=function(e,t){return sr(e)&&e.name?ja(e,t):e},Fa=function(e){var t=new Set;return e.forEach(function(n){return t.add(Ft(n,e))}),e.filter(function(n){return t.has(n)})},cn=function(e){return e[0]&&e.length>1?Ft(e[0],e):e[0]},ln=function(e,t){return e.indexOf(Ft(t,e))},vt="NEW_FOCUS",Ba=function(e,t,n,r,o){var a=e.length,s=e[0],i=e[a-1],u=Ot(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,m=o?n.indexOf(o):l,f=o?e.indexOf(o):-1;if(l===-1)return f!==-1?f:vt;if(f===-1)return vt;var h=l-m,g=n.indexOf(s),v=n.indexOf(i),p=Fa(n),b=r!==void 0?p.indexOf(r):-1,x=b-(o?p.indexOf(o):l);if(!h&&f>=0||t.length===0)return f;var y=ln(e,t[0]),w=ln(e,t[t.length-1]);if(l<=g&&u&&Math.abs(h)>1)return w;if(l>=v&&u&&Math.abs(h)>1)return y;if(h&&Math.abs(x)>1)return f;if(l<=g)return w;if(l>v)return y;if(h)return Math.abs(h)>1?f:(a+f+h)%a}},La=function(e){return function(t){var n,r=(n=or(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},un=function(e,t,n){var r=e.map(function(a){var s=a.node;return s}),o=sn(r.filter(La(n)));return o&&o.length?cn(o):cn(sn(t))},gt=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&gt(e.parentNode.host||e.parentNode,t),t},et=function(e,t){for(var n=gt(e),r=gt(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},ur=function(e,t,n){var r=Y(e),o=Y(t),a=r[0],s=!1;return o.filter(Boolean).forEach(function(i){s=et(s||i,i)||s,n.filter(Boolean).forEach(function(u){var l=et(a,u);l&&(!s||q(l,s)?s=l:s=et(l,s))})}),s},dn=function(e,t){return e.reduce(function(n,r){return n.concat(Ta(r,t))},[])},Ua=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(Ea)},$a=function(e,t){var n=xe(Y(e).length>0?document:Qn(e).ownerDocument),r=jt(e).filter(mt),o=ur(n||e,e,r),a=new Map,s=Be(r,a),i=s.filter(function(v){var p=v.node;return mt(p)});if(i[0]){var u=Be([o],a).map(function(v){var p=v.node;return p}),l=Ua(u,i),m=l.map(function(v){var p=v.node;return p}),f=l.filter(function(v){var p=v.tabIndex;return p>=0}).map(function(v){var p=v.node;return p}),h=Ba(m,f,u,n,t);if(h===vt){var g=un(s,f,dn(r,a))||un(s,m,dn(r,a));if(g)return{node:g};console.warn("focus-lock: cannot find any node to move focus into");return}return h===void 0?h:l[h]}},za=function(e){var t=jt(e).filter(mt),n=ur(e,e,t),r=Dt(ue([n],!0),!0,!0),o=ue(t,!1);return r.map(function(a){var s=a.node,i=a.index;return{node:s,index:i,lockItem:o.indexOf(s)>=0,guard:Ot(s)}})},Bt=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},tt=0,nt=!1,dr=function(e,t,n){n===void 0&&(n={});var r=$a(e,t);if(!nt&&r){if(tt>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),nt=!0,setTimeout(function(){nt=!1},1);return}tt++,Bt(r.node,n.focusOptions),tt--}};function pe(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var Ha=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:pe(n),parent:pe(n.parentElement),left:pe(n.previousElementSibling),right:pe(n.nextElementSibling)}),n=n.parentElement;return{element:pe(e),stack:t,ownerDocument:e.ownerDocument}},Wa=function(e){var t,n,r,o,a;if(e)for(var s=e.stack,i=e.ownerDocument,u=new Map,l=0,m=s;l<m.length;l++){var f=m[l],h=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(h&&i.contains(h)){for(var g=(n=f.left)===null||n===void 0?void 0:n.call(f),v=f.current(),p=h.contains(v)?v:void 0,b=(r=f.right)===null||r===void 0?void 0:r.call(f),x=Mt([h],u),y=(a=(o=p??(g==null?void 0:g.nextElementSibling))!==null&&o!==void 0?o:b)!==null&&a!==void 0?a:g;y;){for(var w=0,_=x;w<_.length;w++){var E=_[w];if(y!=null&&y.contains(E.node))return E.node}y=y.nextElementSibling}if(x.length)return x[0].node}}},Va=function(e){var t=Ha(e);return function(){return Wa(t)}},Ga=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=Y(t);if(r.every(function(s){return!q(s,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?Mt(r,new Map):Be(r,new Map),a=o.findIndex(function(s){var i=s.node;return i===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},qa=function(e,t){var n=t?Mt(Y(e),new Map):Be(Y(e),new Map);return{first:n[0],last:n[n.length-1]}},Ka=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},fr=function(e,t,n){t===void 0&&(t={});var r=Ka(t),o=Ga(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&Bt(a.node,r.focusOptions)}},Xa=function(e,t){t===void 0&&(t={}),fr(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},Ya=function(e,t){t===void 0&&(t={}),fr(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},hr=function(e,t,n){var r,o=qa(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&Bt(a.node,t.focusOptions)},Za=function(e,t){t===void 0&&(t={}),hr(e,t,"first")},Ja=function(e,t){t===void 0&&(t={}),hr(e,t,"last")};function Lt(e){setTimeout(e,1)}var Qa=function(t){return t&&"current"in t?t.current:t},es=function(){return document&&document.activeElement===document.body},ts=function(){return es()||Ma()},ae=null,oe=null,se=null,ye=!1,ns=function(){return!0},rs=function(t){return(ae.whiteList||ns)(t)},os=function(t,n){se={observerNode:t,portaledElement:n}},as=function(t){return se&&se.portaledElement===t};function fn(e,t,n,r){var o=null,a=e;do{var s=r[a];if(s.guard)s.node.dataset.focusAutoGuard&&(o=s);else if(s.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var ss=function(t){return t?!!ye:ye==="meanwhile"},is=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},cs=function(t,n){return n.some(function(r){return is(t,r,r)})},Le=function(){var t=!1;if(ae){var n=ae,r=n.observed,o=n.persistentFocus,a=n.autoFocus,s=n.shards,i=n.crossFrame,u=n.focusOptions,l=r||se&&se.portaledElement,m=document&&document.activeElement;if(l){var f=[l].concat(s.map(Qa).filter(Boolean));if((!m||rs(m))&&(o||ss(i)||!ts()||!oe&&a)&&(l&&!(lr(f)||m&&cs(m,f)||as(m))&&(document&&!oe&&m&&!a?(m.blur&&m.blur(),document.body.focus()):(t=dr(f,oe,{focusOptions:u}),se={})),ye=!1,oe=document&&document.activeElement),document&&m!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var h=document&&document.activeElement,g=za(f),v=g.map(function(p){var b=p.node;return b}).indexOf(h);v>-1&&(g.filter(function(p){var b=p.guard,x=p.node;return b&&x.dataset.focusAutoGuard}).forEach(function(p){var b=p.node;return b.removeAttribute("tabIndex")}),fn(v,g.length,1,g),fn(v,-1,-1,g))}}}return t},pr=function(t){Le()&&t&&(t.stopPropagation(),t.preventDefault())},Ut=function(){return Lt(Le)},ls=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||os(r,n)},us=function(){return null},mr=function(){ye="just",Lt(function(){ye="meanwhile"})},ds=function(){document.addEventListener("focusin",pr),document.addEventListener("focusout",Ut),window.addEventListener("blur",mr)},fs=function(){document.removeEventListener("focusin",pr),document.removeEventListener("focusout",Ut),window.removeEventListener("blur",mr)};function hs(e){return e.filter(function(t){var n=t.disabled;return!n})}var vr={moveFocusInside:dr,focusInside:lr,focusNextElement:Xa,focusPrevElement:Ya,focusFirstElement:Za,focusLastElement:Ja,captureFocusRestore:Va};function ps(e){var t=e.slice(-1)[0];t&&!ae&&ds();var n=ae,r=n&&t&&t.id===n.id;ae=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(oe=null,(!r||n.observed!==t.observed)&&t.onActivation(vr),Le(),Lt(Le)):(fs(),oe=null)}Zn.assignSyncMedium(ls);Jn.assignMedium(Ut);ia.assignMedium(function(e){return e(vr)});const ms=ma(hs,ps)(us);var bt=d.forwardRef(function(t,n){return d.createElement(Tt,ft({sideCar:ms,ref:n},t))}),gr=Tt.propTypes||{};gr.sideCar;Qo(gr,["sideCar"]);bt.propTypes={};function vs(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function gs(e){var t;if(!vs(e))return!1;const n=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof n.HTMLElement}var bs=e=>e.hasAttribute("tabindex");function xs(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function br(e){return e.parentElement&&br(e.parentElement)?!0:e.hidden}function ys(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function ws(e){if(!gs(e)||br(e)||xs(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in r?r[t]():ys(e)?!0:bs(e)}var _s=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],Es=_s.join(),Cs=e=>e.offsetWidth>0&&e.offsetHeight>0;function Ss(e){const t=Array.from(e.querySelectorAll(Es));return t.unshift(e),t.filter(n=>ws(n)&&Cs(n))}var hn,Ns=(hn=bt.default)!=null?hn:bt,xr=e=>{const{initialFocusRef:t,finalFocusRef:n,contentRef:r,restoreFocus:o,children:a,isDisabled:s,autoFocus:i,persistentFocus:u,lockFocusAcrossFrames:l}=e,m=d.useCallback(()=>{t!=null&&t.current?t.current.focus():r!=null&&r.current&&Ss(r.current).length===0&&requestAnimationFrame(()=>{var v;(v=r.current)==null||v.focus()})},[t,r]),f=d.useCallback(()=>{var g;(g=n==null?void 0:n.current)==null||g.focus()},[n]),h=o&&!n;return c.jsx(Ns,{crossFrame:l,persistentFocus:u,autoFocus:i,disabled:s,onActivation:m,onDeactivation:f,returnFocus:h,children:a})};xr.displayName="FocusLock";var As=Vo?d.useLayoutEffect:d.useEffect;function pn(e,t=[]){const n=d.useRef(e);return As(()=>{n.current=e}),d.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}function Is(e,t){const n=d.useId();return d.useMemo(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}function Rs(e,t){const n=e!==void 0;return[n,n&&typeof e<"u"?e:t]}function Ts(e={}){const{onClose:t,onOpen:n,isOpen:r,id:o}=e,a=pn(n),s=pn(t),[i,u]=d.useState(e.defaultIsOpen||!1),[l,m]=Rs(r,i),f=Is(o,"disclosure"),h=d.useCallback(()=>{l||u(!1),s==null||s()},[l,s]),g=d.useCallback(()=>{l||u(!0),a==null||a()},[l,a]),v=d.useCallback(()=>{(m?h:g)()},[m,g,h]);return{isOpen:!!m,onOpen:g,onClose:h,onToggle:v,isControlled:l,getButtonProps:(p={})=>({...p,"aria-expanded":m,"aria-controls":f,onClick:_o(p.onClick,v)}),getDisclosureProps:(p={})=>({...p,hidden:!m,id:f})}}var Os={slideInBottom:{...ve,custom:{offsetY:16,reverse:!0}},slideInRight:{...ve,custom:{offsetX:16,reverse:!0}},slideInTop:{...ve,custom:{offsetY:-16,reverse:!0}},slideInLeft:{...ve,custom:{offsetX:-16,reverse:!0}},scale:{...Hn,custom:{initialScale:.95,reverse:!0}},none:{}},Ds=We(Ce.section),ks=e=>Os[e||"none"],yr=d.forwardRef((e,t)=>{const{preset:n,motionProps:r=ks(n),...o}=e;return c.jsx(Ds,{ref:t,...r,...o})});yr.displayName="ModalTransition";var Ps=Object.defineProperty,Ms=(e,t,n)=>t in e?Ps(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,js=(e,t,n)=>(Ms(e,t+"",n),n),Fs=class{constructor(){js(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},xt=new Fs;function wr(e,t){const[n,r]=d.useState(0);return d.useEffect(()=>{const o=e.current;if(o){if(t){const a=xt.add(o);r(a)}return()=>{xt.remove(o),r(0)}}},[t,e]),n}var Bs=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},te=new WeakMap,Te=new WeakMap,Oe={},rt=0,_r=function(e){return e&&(e.host||_r(e.parentNode))},Ls=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=_r(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Us=function(e,t,n,r){var o=Ls(t,Array.isArray(e)?e:[e]);Oe[n]||(Oe[n]=new WeakMap);var a=Oe[n],s=[],i=new Set,u=new Set(o),l=function(f){!f||i.has(f)||(i.add(f),l(f.parentNode))};o.forEach(l);var m=function(f){!f||u.has(f)||Array.prototype.forEach.call(f.children,function(h){if(i.has(h))m(h);else try{var g=h.getAttribute(r),v=g!==null&&g!=="false",p=(te.get(h)||0)+1,b=(a.get(h)||0)+1;te.set(h,p),a.set(h,b),s.push(h),p===1&&v&&Te.set(h,!0),b===1&&h.setAttribute(n,"true"),v||h.setAttribute(r,"true")}catch(x){console.error("aria-hidden: cannot operate on ",h,x)}})};return m(t),i.clear(),rt++,function(){s.forEach(function(f){var h=te.get(f)-1,g=a.get(f)-1;te.set(f,h),a.set(f,g),h||(Te.has(f)||f.removeAttribute(r),Te.delete(f)),g||f.removeAttribute(n)}),rt--,rt||(te=new WeakMap,te=new WeakMap,Te=new WeakMap,Oe={})}},$s=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Bs(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Us(r,o,n,"aria-hidden")):function(){return null}};function zs(e){const{isOpen:t,onClose:n,id:r,closeOnOverlayClick:o=!0,closeOnEsc:a=!0,useInert:s=!0,onOverlayClick:i,onEsc:u}=e,l=d.useRef(null),m=d.useRef(null),[f,h,g]=Ws(r,"chakra-modal","chakra-modal--header","chakra-modal--body");Hs(l,t&&s);const v=wr(l,t),p=d.useRef(null),b=d.useCallback(R=>{p.current=R.target},[]),x=d.useCallback(R=>{R.key==="Escape"&&(R.stopPropagation(),a&&(n==null||n()),u==null||u())},[a,n,u]),[y,w]=d.useState(!1),[_,E]=d.useState(!1),I=d.useCallback((R={},he=null)=>({role:"dialog",...R,ref:rn(he,l),id:f,tabIndex:-1,"aria-modal":!0,"aria-labelledby":y?h:void 0,"aria-describedby":_?g:void 0,onClick:Ie(R.onClick,Ne=>Ne.stopPropagation())}),[g,_,f,h,y]),T=d.useCallback(R=>{R.stopPropagation(),p.current===R.target&&xt.isTopModal(l.current)&&(o&&(n==null||n()),i==null||i())},[n,o,i]),D=d.useCallback((R={},he=null)=>({...R,ref:rn(he,m),onClick:Ie(R.onClick,T),onKeyDown:Ie(R.onKeyDown,x),onMouseDown:Ie(R.onMouseDown,b)}),[x,b,T]);return{isOpen:t,onClose:n,headerId:h,bodyId:g,setBodyMounted:E,setHeaderMounted:w,dialogRef:l,overlayRef:m,getDialogProps:I,getDialogContainerProps:D,index:v}}function Hs(e,t){const n=e.current;d.useEffect(()=>{if(!(!e.current||!t))return $s(e.current)},[t,e,n])}function Ws(e,...t){const n=d.useId(),r=e||n;return d.useMemo(()=>t.map(o=>`${o}-${r}`),[r,t])}var[Vs,$t]=Mn({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[Gs,we]=Mn({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),zt=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:n,children:r,autoFocus:o,trapFocus:a,initialFocusRef:s,finalFocusRef:i,returnFocusOnClose:u,blockScrollOnMount:l,allowPinchZoom:m,preserveScrollBarGap:f,motionPreset:h,lockFocusAcrossFrames:g,onCloseComplete:v}=t,p=Eo("Modal",t),x={...zs(t),autoFocus:o,trapFocus:a,initialFocusRef:s,finalFocusRef:i,returnFocusOnClose:u,blockScrollOnMount:l,allowPinchZoom:m,preserveScrollBarGap:f,motionPreset:h,lockFocusAcrossFrames:g};return c.jsx(Gs,{value:x,children:c.jsx(Vs,{value:p,children:c.jsx(He,{onExitComplete:v,children:x.isOpen&&c.jsx(Co,{...n,children:r})})})})};zt.displayName="Modal";var je="right-scroll-bar-position",Fe="width-before-scroll-bar",qs="with-scroll-bars-hidden",Ks="--removed-body-scroll-bar-size",Er=Xn(),ot=function(){},qe=d.forwardRef(function(e,t){var n=d.useRef(null),r=d.useState({onScrollCapture:ot,onWheelCapture:ot,onTouchMoveCapture:ot}),o=r[0],a=r[1],s=e.forwardProps,i=e.children,u=e.className,l=e.removeScrollBar,m=e.enabled,f=e.shards,h=e.sideCar,g=e.noIsolation,v=e.inert,p=e.allowPinchZoom,b=e.as,x=b===void 0?"div":b,y=e.gapMode,w=Gn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),_=h,E=Vn([n,t]),I=j(j({},w),o);return d.createElement(d.Fragment,null,m&&d.createElement(_,{sideCar:Er,removeScrollBar:l,shards:f,noIsolation:g,inert:v,setCallbacks:a,allowPinchZoom:!!p,lockRef:n,gapMode:y}),s?d.cloneElement(d.Children.only(i),j(j({},I),{ref:E})):d.createElement(x,j({},I,{className:u,ref:E}),i))});qe.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};qe.classNames={fullWidth:Fe,zeroRight:je};var Xs=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Ys(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Xs();return t&&e.setAttribute("nonce",t),e}function Zs(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Js(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Qs=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Ys())&&(Zs(t,n),Js(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ei=function(){var e=Qs();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Cr=function(){var e=ei(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},ti={left:0,top:0,right:0,gap:0},at=function(e){return parseInt(e||"",10)||0},ni=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[at(n),at(r),at(o)]},ri=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return ti;var t=ni(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},oi=Cr(),ie="data-scroll-locked",ai=function(e,t,n,r){var o=e.left,a=e.top,s=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(qs,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(ie,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(je,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(Fe,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(je," .").concat(je,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Fe," .").concat(Fe,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(ie,`] {
    `).concat(Ks,": ").concat(i,`px;
  }
`)},mn=function(){var e=parseInt(document.body.getAttribute(ie)||"0",10);return isFinite(e)?e:0},si=function(){d.useEffect(function(){return document.body.setAttribute(ie,(mn()+1).toString()),function(){var e=mn()-1;e<=0?document.body.removeAttribute(ie):document.body.setAttribute(ie,e.toString())}},[])},ii=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;si();var a=d.useMemo(function(){return ri(o)},[o]);return d.createElement(oi,{styles:ai(a,!t,o,n?"":"!important")})},yt=!1;if(typeof window<"u")try{var De=Object.defineProperty({},"passive",{get:function(){return yt=!0,!0}});window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch{yt=!1}var ne=yt?{passive:!1}:!1,ci=function(e){return e.tagName==="TEXTAREA"},Sr=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!ci(e)&&n[t]==="visible")},li=function(e){return Sr(e,"overflowY")},ui=function(e){return Sr(e,"overflowX")},vn=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Nr(e,r);if(o){var a=Ar(e,r),s=a[1],i=a[2];if(s>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},di=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},fi=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Nr=function(e,t){return e==="v"?li(t):ui(t)},Ar=function(e,t){return e==="v"?di(t):fi(t)},hi=function(e,t){return e==="h"&&t==="rtl"?-1:1},pi=function(e,t,n,r,o){var a=hi(e,window.getComputedStyle(t).direction),s=a*r,i=n.target,u=t.contains(i),l=!1,m=s>0,f=0,h=0;do{var g=Ar(e,i),v=g[0],p=g[1],b=g[2],x=p-b-a*v;(v||x)&&Nr(e,i)&&(f+=x,h+=v),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!u&&i!==document.body||u&&(t.contains(i)||t===i));return(m&&(Math.abs(f)<1||!o)||!m&&(Math.abs(h)<1||!o))&&(l=!0),l},ke=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},gn=function(e){return[e.deltaX,e.deltaY]},bn=function(e){return e&&"current"in e?e.current:e},mi=function(e,t){return e[0]===t[0]&&e[1]===t[1]},vi=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},gi=0,re=[];function bi(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(gi++)[0],a=d.useState(Cr)[0],s=d.useRef(e);d.useEffect(function(){s.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var p=aa([e.lockRef.current],(e.shards||[]).map(bn),!0).filter(Boolean);return p.forEach(function(b){return b.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),p.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=d.useCallback(function(p,b){if("touches"in p&&p.touches.length===2)return!s.current.allowPinchZoom;var x=ke(p),y=n.current,w="deltaX"in p?p.deltaX:y[0]-x[0],_="deltaY"in p?p.deltaY:y[1]-x[1],E,I=p.target,T=Math.abs(w)>Math.abs(_)?"h":"v";if("touches"in p&&T==="h"&&I.type==="range")return!1;var D=vn(T,I);if(!D)return!0;if(D?E=T:(E=T==="v"?"h":"v",D=vn(T,I)),!D)return!1;if(!r.current&&"changedTouches"in p&&(w||_)&&(r.current=E),!E)return!0;var R=r.current||E;return pi(R,b,p,R==="h"?w:_,!0)},[]),u=d.useCallback(function(p){var b=p;if(!(!re.length||re[re.length-1]!==a)){var x="deltaY"in b?gn(b):ke(b),y=t.current.filter(function(E){return E.name===b.type&&(E.target===b.target||b.target===E.shadowParent)&&mi(E.delta,x)})[0];if(y&&y.should){b.cancelable&&b.preventDefault();return}if(!y){var w=(s.current.shards||[]).map(bn).filter(Boolean).filter(function(E){return E.contains(b.target)}),_=w.length>0?i(b,w[0]):!s.current.noIsolation;_&&b.cancelable&&b.preventDefault()}}},[]),l=d.useCallback(function(p,b,x,y){var w={name:p,delta:b,target:x,should:y,shadowParent:xi(x)};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(_){return _!==w})},1)},[]),m=d.useCallback(function(p){n.current=ke(p),r.current=void 0},[]),f=d.useCallback(function(p){l(p.type,gn(p),p.target,i(p,e.lockRef.current))},[]),h=d.useCallback(function(p){l(p.type,ke(p),p.target,i(p,e.lockRef.current))},[]);d.useEffect(function(){return re.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",u,ne),document.addEventListener("touchmove",u,ne),document.addEventListener("touchstart",m,ne),function(){re=re.filter(function(p){return p!==a}),document.removeEventListener("wheel",u,ne),document.removeEventListener("touchmove",u,ne),document.removeEventListener("touchstart",m,ne)}},[]);var g=e.removeScrollBar,v=e.inert;return d.createElement(d.Fragment,null,v?d.createElement(a,{styles:vi(o)}):null,g?d.createElement(ii,{gapMode:e.gapMode}):null)}function xi(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const yi=sa(Er,bi);var Ir=d.forwardRef(function(e,t){return d.createElement(qe,j({},e,{ref:t,sideCar:yi}))});Ir.classNames=qe.classNames;function wi(e){const{autoFocus:t,trapFocus:n,dialogRef:r,initialFocusRef:o,blockScrollOnMount:a,allowPinchZoom:s,finalFocusRef:i,returnFocusOnClose:u,preserveScrollBarGap:l,lockFocusAcrossFrames:m,isOpen:f}=we(),[h,g]=So();d.useEffect(()=>{!h&&g&&setTimeout(g)},[h,g]);const v=wr(r,f);return c.jsx(xr,{autoFocus:t,isDisabled:!n,initialFocusRef:o,finalFocusRef:i,restoreFocus:u,contentRef:r,lockFocusAcrossFrames:m,children:c.jsx(Ir,{removeScrollBar:!l,allowPinchZoom:s,enabled:v===1&&a,forwardProps:!0,children:e.children})})}var Ht=It((e,t)=>{const{className:n,children:r,containerProps:o,motionProps:a,...s}=e,{getDialogProps:i,getDialogContainerProps:u}=we(),l=i(s,t),m=u(o),f=de("chakra-modal__content",n),h=$t(),g={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...h.dialog},v={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...h.dialogContainer},{motionPreset:p}=we();return c.jsx(wi,{children:c.jsx(We.div,{...m,className:"chakra-modal__content-container",tabIndex:-1,__css:v,children:c.jsx(yr,{preset:p,motionProps:a,className:f,...l,__css:g,children:r})})})});Ht.displayName="ModalContent";var _i=We(Ce.div),Wt=It((e,t)=>{const{className:n,transition:r,motionProps:o,...a}=e,s=de("chakra-modal__overlay",n),u={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...$t().overlay},{motionPreset:l}=we(),f=o||(l==="none"?{}:zn);return c.jsx(_i,{...f,__css:u,ref:t,className:s,...a})});Wt.displayName="ModalOverlay";var Rr=It((e,t)=>{const{className:n,...r}=e,{bodyId:o,setBodyMounted:a}=we();d.useEffect(()=>(a(!0),()=>a(!1)),[a]);const s=de("chakra-modal__body",n),i=$t();return c.jsx(We.div,{ref:t,className:s,id:o,...r,__css:i.body})});Rr.displayName="ModalBody";const Tr=e=>{var t;return(t=new Date(e))==null?void 0:t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0,timeZone:"America/New_York"})},Ei=()=>{var a,s;const e=Ve(),t=Ge(i=>i.dashboard.info),[n,r]=d.useState(!1),{isLoading:o}=No();return c.jsxs("div",{className:"min-h-screen pt-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8 pb-3",children:[c.jsx("div",{className:"font-Matter-Medium text-xl mb-3.5",children:"Dashboard"}),c.jsxs("div",{className:"max-w-screen-lg w-full mx-auto grid grid-cols-12 gap-8 ",children:[c.jsxs(M,{to:"/admin/products",className:"col-span-12 md:col-span-6 h-40 bg-gradient-to-r from-blue-800 to-blue-300 rounded-sm px-8 py-5 cursor-pointer relative overflow-hidden flex flex-col justify-between",children:[o?c.jsx("div",{className:"m-auto",children:c.jsx(X,{fill:"fill-white"})}):c.jsxs(d.Fragment,{children:[c.jsx("p",{className:"uppercase font-thin tracking-wider text-sm",children:"Products"}),c.jsx("h1",{className:"text-5xl font-semibold",children:t==null?void 0:t.productsCount}),c.jsx("p",{className:"text-xs text-white/50"})]}),c.jsx("i",{className:"fas fa-box-open text-white/10 text-[200px] absolute -right-16 -top-0"})]}),c.jsxs("button",{onClick:()=>e("/admin/code"),className:"col-span-12 md:col-span-6 h-40 bg-gradient-to-r from-lime-800 to-lime-300 rounded-sm px-8 py-5 cursor-pointer flex flex-col justify-between relative overflow-hidden",children:[o?c.jsx("div",{className:"m-auto",children:c.jsx(X,{fill:"fill-white"})}):c.jsxs(d.Fragment,{children:[c.jsx("p",{className:"uppercase font-thin tracking-wider text-sm",children:"Code"}),c.jsx("h1",{onClick:i=>{i.stopPropagation(),r(!n)},className:"text-5xl font-semibold w-fit",children:n?(a=t==null?void 0:t.code)==null?void 0:a.code:"****"}),c.jsxs("p",{className:"text-xs text-white/50",children:["Last updated: ",Tr((s=t==null?void 0:t.code)==null?void 0:s.updatedAt)]})]}),c.jsx("i",{className:"fas fa-code-compare text-white/15 text-[200px] absolute -right-16 -top-0"})]})]})]})},xn=()=>c.jsx("svg",{width:16,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:c.jsx("path",{fill:"#d1d1d6",d:"M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"})}),Ci=(e,t)=>{const n=d.useCallback(r=>{e.current&&!e.current.contains(r.target)&&t()},[e,t]);d.useEffect(()=>(document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}),[n])},Si=({idAndName:e,deleteDocument:t,loading:n,hook:r})=>{const o=Se(),a=new Ao(Lo),s=async()=>{o(C(0)),await t({id:e.id}).unwrap().then(()=>{a.play(),o(C(100)),o(k(!1)),r.closeModal()})};return c.jsxs(zt,{isOpen:r.show,isCentered:!0,onClose:r.closeModal,children:[c.jsx(Wt,{}),c.jsx(Ht,{children:c.jsxs("div",{className:"bg-[#09090b] p-5 min-h-72 flex flex-col justify-between",children:[c.jsxs("p",{className:"font-Matter-Medium text-gray-400",children:["Are you sure you want to delete"," ",c.jsx("span",{className:"text-red-500 font-bold",children:e.name}),"?"]}),c.jsxs("div",{className:"flex items-center justify-end gap-3",children:[c.jsx("button",{className:"px-4 py-2 text-red-500 border-2 border-red-500 duration-200 hover:shadow-lg text-xs",onClick:r.closeModal,children:"No"}),c.jsx("button",{className:"px-4 py-2 bg-red-500 border-2 border-red-500 text-white duration-200 hover:shadow-lg text-xs hover:bg-red-600",onClick:s,children:n?c.jsx(X,{fill:"fill-white"}):"Yes"})]})]})})]})},Ni=({filteredProducts:e,productToBeEdited:t,productMenuRef:n,setIdAndName:r,openModal:o,setProductToBeEdited:a})=>{const s=Ge(i=>i.auth.token);return c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"whitespace-nowrap px-4 pb-4 pt-2",children:c.jsxs("tr",{className:"bg-zinc-900",children:[c.jsx("th",{className:"px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none",children:c.jsx("div",{className:"text-xs -mx-1.5 -my-1 w-fit px-1.5 py-1 flex flex-nowrap items-center gap-2",children:"Name"})}),c.jsx("th",{className:"px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none",children:c.jsx("div",{className:"text-xs flex flex-nowrap items-center gap-2",children:"Quantity"})}),c.jsx("th",{className:"px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none",children:c.jsx("div",{className:"text-xs flex flex-nowrap items-center gap-2",children:"Date & Time"})}),c.jsx("th",{children:c.jsx("div",{className:"flex flex-nowrap items-center gap-2 invisible",children:"ghosthead"})})]})}),c.jsx("tbody",{children:e==null?void 0:e.map((i,u)=>{var l;return c.jsxs("tr",{className:"bg-zinc-800 z-1 h-[3.25rem] group [&_td]:focus-within:bg-zinc-900 [&_td]:hover:bg-zinc-900 relative",children:[c.jsx("td",{className:"px-2",children:c.jsx("div",{className:"m-0 w-full p-0 decoration-inherit hover:text-inherit hover:decoration-inherit !flex h-[3.25rem] items-center px-4 whitespace-nowrap",children:c.jsx("div",{className:"max-w-[15rem]",children:c.jsx("span",{className:"text-xs font-Matter-Regular truncate",children:i==null?void 0:i.productName})})})}),c.jsx("td",{children:c.jsx("p",{className:"text-xs font-Matter-Regular items-center px-4 whitespace-nowrap",children:i==null?void 0:i.quantity})}),c.jsx("td",{children:c.jsx("p",{className:"text-xs font-Matter-Regular items-center px-4 whitespace-nowrap",children:Tr(i==null?void 0:i.createdAt)})}),c.jsx("td",{children:c.jsxs("div",{className:"",children:[t.open&&((l=t.product)==null?void 0:l.id)===(i==null?void 0:i.id)&&c.jsxs("div",{ref:n,className:"flex flex-col justify-center shadow-lg p-1.5 absolute z-40 w-28 h-fit bg-[#0f1119] -top-[44px] right-28",children:[c.jsx(M,{to:"/admin/product",state:{product:t.product,isEditMode:!0},className:"flex w-full text-xs text-zinc-400 px-2 py-1 hover:no-underline hover:bg-zinc-700 hover:text-zinc-400",children:"Edit"}),c.jsx(M,{to:`/code-validated/${s}/item`,state:{product:t.product},className:"flex w-full text-xs text-zinc-400 px-2 py-1 hover:no-underline hover:bg-zinc-700 hover:text-zinc-400",children:"View"}),c.jsx("button",{onClick:()=>{r({id:i==null?void 0:i.id,name:i==null?void 0:i.productName}),o()},className:"flex w-full text-xs text-zinc-400 px-2 py-1 hover:no-underline hover:bg-zinc-700 hover:text-zinc-400",children:"Delete"})]}),c.jsx("div",{onClick:()=>a({open:!0,product:i}),className:"m-0 w-full border-0 p-0 items-center px-4 relative flex justify-center",children:c.jsx("button",{className:"flex h-7 cursor-pointer items-center justify-center p-2 hover:bg-zinc-950 text-zinc-600",children:c.jsx("i",{className:"fa-solid fa-ellipsis-vertical"})})})]})})]},u)})})]})},Ai=()=>{const[e,t]=d.useState(!1);return{show:e,openModal:()=>{t(!0)},closeModal:()=>{t(!1)}}},Ii=()=>{const[e,t]=d.useState(""),[n,r]=d.useState({id:"",name:""}),o=Ge(b=>b.product.products),a=(o==null?void 0:o.length)===0,[s,i]=d.useState({open:!1,product:{id:null,productName:null}}),u=d.useRef(null),{openModal:l,show:m,closeModal:f}=Ai();Io();const[h,{isLoading:g}]=Ro(),v=o==null?void 0:o.filter(b=>b==null?void 0:b.productName.toLowerCase().includes(e.toLowerCase())),p=d.useCallback(()=>{i({open:!1,product:{id:null,productName:null}})},[]);return Ci(u,p),c.jsxs(d.Fragment,{children:[c.jsx(Si,{idAndName:n,deleteDocument:h,loading:g,hook:{openModal:l,show:m,closeModal:f}}),c.jsx("div",{className:"min-h-screen py-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8",children:c.jsxs("div",{className:"max-w-screen-lg w-full mx-auto",children:[c.jsx("div",{className:"font-Matter-Medium text-xl mb-3.5",children:"Products"}),c.jsxs("div",{className:"flex justify-between",children:[c.jsxs("div",{className:"flex items-center font-Matter-Light border border-zinc-800 py-2 px-[16px] ",children:[c.jsx(xn,{}),c.jsx("input",{onChange:b=>t(b.target.value),className:"w-full h-full focus:outline-0 ml-2 bg-transparent text-xs",placeholder:"Search"})]}),c.jsx(M,{to:"/admin/product",className:"whitespace-nowrap w-fit px-4 duration-200 hover:no-underline text-center flex justify-center items-center font-Matter-Medium bg-lime-600 text-xs text-white py-2 hover:bg-lime-500",state:{isEditMode:!1},children:"Add product"})]}),c.jsx("div",{className:"bg-zinc-900 w-full mt-3",children:a?c.jsxs("div",{className:"flex flex-col justify-center max-w-48 w-full items-center mx-auto  py-10",children:[c.jsx("div",{className:" bg-zinc-800 h-12 w-12 flex justify-center items-center",children:c.jsx(xn,{})}),c.jsx("div",{className:"text-xs my-2",children:"No products"})]}):c.jsx(Ni,{filteredProducts:v,productToBeEdited:s,productMenuRef:u,setIdAndName:r,openModal:l,setProductToBeEdited:i})})]})})]})};var yn={};/**
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
 */const Or=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Ri=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=e[n++];t[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=e[n++],s=e[n++],i=e[n++],u=((o&7)<<18|(a&63)<<12|(s&63)<<6|i&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|s&63)}}return t.join("")},Dr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const a=e[o],s=o+1<e.length,i=s?e[o+1]:0,u=o+2<e.length,l=u?e[o+2]:0,m=a>>2,f=(a&3)<<4|i>>4;let h=(i&15)<<2|l>>6,g=l&63;u||(g=64,s||(h=64)),r.push(n[m],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Or(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ri(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const a=n[e.charAt(o++)],i=o<e.length?n[e.charAt(o)]:0;++o;const l=o<e.length?n[e.charAt(o)]:64;++o;const f=o<e.length?n[e.charAt(o)]:64;if(++o,a==null||i==null||l==null||f==null)throw new Ti;const h=a<<2|i>>4;if(r.push(h),l!==64){const g=i<<4&240|l>>2;if(r.push(g),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ti extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oi=function(e){const t=Or(e);return Dr.encodeByteArray(t,!0)},Ue=function(e){return Oi(e).replace(/\./g,"")},Di=function(e){try{return Dr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ki(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pi=()=>ki().__FIREBASE_DEFAULTS__,Mi=()=>{if(typeof process>"u"||typeof yn>"u")return;const e=yn.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ji=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Di(e[1]);return t&&JSON.parse(t)},kr=()=>{try{return Pi()||Mi()||ji()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Fi=e=>{var t,n;return(n=(t=kr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Bi=e=>{const t=Fi(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Pr=()=>{var e;return(e=kr())===null||e===void 0?void 0:e.config};/**
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
 */class Li{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ui(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,a=e.sub||e.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ue(JSON.stringify(n)),Ue(JSON.stringify(s)),""].join(".")}function $i(){try{return typeof indexedDB=="object"}catch{return!1}}function zi(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var a;t(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const Hi="FirebaseError";class fe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Hi,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,a=this.errors[t],s=a?Wi(a,r):"Error",i=`${this.serviceName}: ${s} (${o}).`;return new fe(o,i,r)}}function Wi(e,t){return e.replace(Vi,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const Vi=/\{\$([^}]+)}/g;function wt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const a=e[o],s=t[o];if(wn(a)&&wn(s)){if(!wt(a,s))return!1}else if(a!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function wn(e){return e!==null&&typeof e=="object"}/**
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
 */function Ke(e){return e&&e._delegate?e._delegate:e}class _e{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const W="[DEFAULT]";/**
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
 */class Gi{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Li;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ki(t))try{this.getOrInitializeService({instanceIdentifier:W})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(t=W){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=W){return this.instances.has(t)}getOptions(t=W){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(a);r===i&&s.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(o,a);const s=this.instances.get(o);return s&&t(s,o),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qi(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=W){return this.component?this.component.multipleInstances?t:W:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qi(e){return e===W?void 0:e}function Ki(e){return e.instantiationMode==="EAGER"}/**
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
 */class Xi{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Gi(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(S||(S={}));const Yi={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Zi=S.INFO,Ji={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Qi=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=Ji[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ec{constructor(t){this.name=t,this._logLevel=Zi,this._logHandler=Qi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in S))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yi[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...t),this._logHandler(this,S.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...t),this._logHandler(this,S.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,S.INFO,...t),this._logHandler(this,S.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,S.WARN,...t),this._logHandler(this,S.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...t),this._logHandler(this,S.ERROR,...t)}}const tc=(e,t)=>t.some(n=>e instanceof n);let _n,En;function nc(){return _n||(_n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rc(){return En||(En=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jr=new WeakMap,_t=new WeakMap,Fr=new WeakMap,st=new WeakMap,Vt=new WeakMap;function oc(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n($(e.result)),o()},s=()=>{r(e.error),o()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&jr.set(n,e)}).catch(()=>{}),Vt.set(t,e),t}function ac(e){if(_t.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),o()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});_t.set(e,t)}let Et={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return _t.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function sc(e){Et=e(Et)}function ic(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(it(this),t,...n);return Fr.set(r,t.sort?t.sort():[t]),$(r)}:rc().includes(e)?function(...t){return e.apply(it(this),t),$(jr.get(this))}:function(...t){return $(e.apply(it(this),t))}}function cc(e){return typeof e=="function"?ic(e):(e instanceof IDBTransaction&&ac(e),tc(e,nc())?new Proxy(e,Et):e)}function $(e){if(e instanceof IDBRequest)return oc(e);if(st.has(e))return st.get(e);const t=cc(e);return t!==e&&(st.set(e,t),Vt.set(t,e)),t}const it=e=>Vt.get(e);function lc(e,t,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const s=indexedDB.open(e,t),i=$(s);return r&&s.addEventListener("upgradeneeded",u=>{r($(s.result),u.oldVersion,u.newVersion,$(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),i.then(u=>{a&&u.addEventListener("close",()=>a()),o&&u.addEventListener("versionchange",l=>o(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const uc=["get","getKey","getAll","getAllKeys","count"],dc=["put","add","delete","clear"],ct=new Map;function Cn(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ct.get(t))return ct.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=dc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||uc.includes(n)))return;const a=async function(s,...i){const u=this.transaction(s,o?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),o&&u.done]))[0]};return ct.set(t,a),a}sc(e=>({...e,get:(t,n,r)=>Cn(t,n)||e.get(t,n,r),has:(t,n)=>!!Cn(t,n)||e.has(t,n)}));/**
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
 */class fc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ct="@firebase/app",Sn="0.10.5";/**
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
 */const Z=new ec("@firebase/app"),pc="@firebase/app-compat",mc="@firebase/analytics-compat",vc="@firebase/analytics",gc="@firebase/app-check-compat",bc="@firebase/app-check",xc="@firebase/auth",yc="@firebase/auth-compat",wc="@firebase/database",_c="@firebase/database-compat",Ec="@firebase/functions",Cc="@firebase/functions-compat",Sc="@firebase/installations",Nc="@firebase/installations-compat",Ac="@firebase/messaging",Ic="@firebase/messaging-compat",Rc="@firebase/performance",Tc="@firebase/performance-compat",Oc="@firebase/remote-config",Dc="@firebase/remote-config-compat",kc="@firebase/storage",Pc="@firebase/storage-compat",Mc="@firebase/firestore",jc="@firebase/vertexai-preview",Fc="@firebase/firestore-compat",Bc="firebase",Lc="10.12.2";/**
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
 */const St="[DEFAULT]",Uc={[Ct]:"fire-core",[pc]:"fire-core-compat",[vc]:"fire-analytics",[mc]:"fire-analytics-compat",[bc]:"fire-app-check",[gc]:"fire-app-check-compat",[xc]:"fire-auth",[yc]:"fire-auth-compat",[wc]:"fire-rtdb",[_c]:"fire-rtdb-compat",[Ec]:"fire-fn",[Cc]:"fire-fn-compat",[Sc]:"fire-iid",[Nc]:"fire-iid-compat",[Ac]:"fire-fcm",[Ic]:"fire-fcm-compat",[Rc]:"fire-perf",[Tc]:"fire-perf-compat",[Oc]:"fire-rc",[Dc]:"fire-rc-compat",[kc]:"fire-gcs",[Pc]:"fire-gcs-compat",[Mc]:"fire-fst",[Fc]:"fire-fst-compat",[jc]:"fire-vertex","fire-js":"fire-js",[Bc]:"fire-js-all"};/**
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
 */const $e=new Map,$c=new Map,Nt=new Map;function Nn(e,t){try{e.container.addComponent(t)}catch(n){Z.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ze(e){const t=e.name;if(Nt.has(t))return Z.debug(`There were multiple attempts to register component ${t}.`),!1;Nt.set(t,e);for(const n of $e.values())Nn(n,e);for(const n of $c.values())Nn(n,e);return!0}function zc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Hc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},z=new Mr("app","Firebase",Hc);/**
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
 */class Wc{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}/**
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
 */const Vc=Lc;function Br(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:St,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw z.create("bad-app-name",{appName:String(o)});if(n||(n=Pr()),!n)throw z.create("no-options");const a=$e.get(o);if(a){if(wt(n,a.options)&&wt(r,a.config))return a;throw z.create("duplicate-app",{appName:o})}const s=new Xi(o);for(const u of Nt.values())s.addComponent(u);const i=new Wc(n,r,s);return $e.set(o,i),i}function Gc(e=St){const t=$e.get(e);if(!t&&e===St&&Pr())return Br();if(!t)throw z.create("no-app",{appName:e});return t}function ce(e,t,n){var r;let o=(r=Uc[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const i=[`Unable to register library "${o}" with version "${t}":`];a&&i.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&i.push("and"),s&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Z.warn(i.join(" "));return}ze(new _e(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const qc="firebase-heartbeat-database",Kc=1,Ee="firebase-heartbeat-store";let lt=null;function Lr(){return lt||(lt=lc(qc,Kc,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ee)}catch(n){console.warn(n)}}}}).catch(e=>{throw z.create("idb-open",{originalErrorMessage:e.message})})),lt}async function Xc(e){try{const n=(await Lr()).transaction(Ee),r=await n.objectStore(Ee).get(Ur(e));return await n.done,r}catch(t){if(t instanceof fe)Z.warn(t.message);else{const n=z.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Z.warn(n.message)}}}async function An(e,t){try{const r=(await Lr()).transaction(Ee,"readwrite");await r.objectStore(Ee).put(t,Ur(e)),await r.done}catch(n){if(n instanceof fe)Z.warn(n.message);else{const r=z.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Z.warn(r.message)}}}function Ur(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Yc=1024,Zc=30*24*60*60*1e3;class Jc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new el(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=In();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(s=>s.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Zc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=In(),{heartbeatsToSend:r,unsentEntries:o}=Qc(this._heartbeatsCache.heartbeats),a=Ue(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function In(){return new Date().toISOString().substring(0,10)}function Qc(e,t=Yc){const n=[];let r=e.slice();for(const o of e){const a=n.find(s=>s.agent===o.agent);if(a){if(a.dates.push(o.date),Rn(n)>t){a.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Rn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class el{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $i()?zi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Xc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return An(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return An(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Rn(e){return Ue(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function tl(e){ze(new _e("platform-logger",t=>new fc(t),"PRIVATE")),ze(new _e("heartbeat",t=>new Jc(t),"PRIVATE")),ce(Ct,Sn,e),ce(Ct,Sn,"esm2017"),ce("fire-js","")}tl("");/**
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
 */const $r="firebasestorage.googleapis.com",zr="storageBucket",nl=2*60*1e3,rl=10*60*1e3;/**
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
 */class A extends fe{constructor(t,n,r=0){super(ut(t),`Firebase Storage: ${n} (${ut(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,A.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ut(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var N;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(N||(N={}));function ut(e){return"storage/"+e}function Gt(){const e="An unknown error occurred, please check the error payload for server response.";return new A(N.UNKNOWN,e)}function ol(e){return new A(N.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function al(e){return new A(N.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function sl(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new A(N.UNAUTHENTICATED,e)}function il(){return new A(N.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function cl(e){return new A(N.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function ll(){return new A(N.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ul(){return new A(N.CANCELED,"User canceled the upload/download.")}function dl(e){return new A(N.INVALID_URL,"Invalid URL '"+e+"'.")}function fl(e){return new A(N.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function hl(){return new A(N.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+zr+"' property when initializing the app?")}function pl(){return new A(N.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ml(){return new A(N.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vl(e){return new A(N.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function At(e){return new A(N.INVALID_ARGUMENT,e)}function Hr(){return new A(N.APP_DELETED,"The Firebase app was deleted.")}function gl(e){return new A(N.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ge(e,t){return new A(N.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function me(e){throw new A(N.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class P{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=P.makeFromUrl(t,n)}catch{return new P(t,"")}if(r.path==="")return r;throw fl(t)}static makeFromUrl(t,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const s="(/(.*))?$",i=new RegExp("^gs://"+o+s,"i"),u={bucket:1,path:3};function l(_){_.path_=decodeURIComponent(_.path)}const m="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${m}/b/${o}/o${h}`,"i"),v={bucket:1,path:3},p=n===$r?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",x=new RegExp(`^https?://${p}/${o}/${b}`,"i"),w=[{regex:i,indices:u,postModify:a},{regex:g,indices:v,postModify:l},{regex:x,indices:{bucket:1,path:2},postModify:l}];for(let _=0;_<w.length;_++){const E=w[_],I=E.regex.exec(t);if(I){const T=I[E.indices.bucket];let D=I[E.indices.path];D||(D=""),r=new P(T,D),E.postModify(r);break}}if(r==null)throw dl(t);return r}}class bl{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function xl(e,t,n){let r=1,o=null,a=null,s=!1,i=0;function u(){return i===2}let l=!1;function m(...b){l||(l=!0,t.apply(null,b))}function f(b){o=setTimeout(()=>{o=null,e(g,u())},b)}function h(){a&&clearTimeout(a)}function g(b,...x){if(l){h();return}if(b){h(),m.call(null,b,...x);return}if(u()||s){h(),m.call(null,b,...x);return}r<64&&(r*=2);let w;i===1?(i=2,w=0):w=(r+Math.random())*1e3,f(w)}let v=!1;function p(b){v||(v=!0,h(),!l&&(o!==null?(b||(i=2),clearTimeout(o),f(0)):b||(i=1)))}return f(0),a=setTimeout(()=>{s=!0,p(!0)},n),p}function yl(e){e(!1)}/**
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
 */function wl(e){return e!==void 0}function _l(e){return typeof e=="object"&&!Array.isArray(e)}function qt(e){return typeof e=="string"||e instanceof String}function Tn(e){return Kt()&&e instanceof Blob}function Kt(){return typeof Blob<"u"}function On(e,t,n,r){if(r<t)throw At(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw At(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Xt(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Wr(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const o=t(r)+"="+t(e[r]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
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
 */var K;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(K||(K={}));/**
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
 */function El(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,a=t.indexOf(e)!==-1;return n||o||a}/**
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
 */class Cl{constructor(t,n,r,o,a,s,i,u,l,m,f,h=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=s,this.callback_=i,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=m,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const t=(r,o)=>{if(o){r(!1,new Pe(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const s=i=>{const u=i.loaded,l=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&a.addUploadProgressListener(s),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(s),this.pendingConnection_=null;const i=a.getErrorCode()===K.NO_ERROR,u=a.getStatus();if(!i||El(u,this.additionalRetryCodes_)&&this.retry){const m=a.getErrorCode()===K.ABORT;r(!1,new Pe(!1,null,m));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new Pe(l,a))})},n=(r,o)=>{const a=this.resolve_,s=this.reject_,i=o.connection;if(o.wasSuccessCode)try{const u=this.callback_(i,i.getResponse());wl(u)?a(u):a()}catch(u){s(u)}else if(i!==null){const u=Gt();u.serverResponse=i.getErrorText(),this.errorCallback_?s(this.errorCallback_(i,u)):s(u)}else if(o.canceled){const u=this.appDelete_?Hr():ul();s(u)}else{const u=ll();s(u)}};this.canceled_?n(!1,new Pe(!1,null,!0)):this.backoffId_=xl(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&yl(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pe{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Sl(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Nl(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Al(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Il(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Rl(e,t,n,r,o,a,s=!0){const i=Wr(e.urlParams),u=e.url+i,l=Object.assign({},e.headers);return Al(l,t),Sl(l,n),Nl(l,a),Il(l,r),new Cl(u,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,s)}/**
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
 */function Tl(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ol(...e){const t=Tl();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Kt())return new Blob(e);throw new A(N.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Dl(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function kl(e){if(typeof atob>"u")throw vl("base-64");return atob(e)}/**
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
 */const F={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class dt{constructor(t,n){this.data=t,this.contentType=n||null}}function Pl(e,t){switch(e){case F.RAW:return new dt(Vr(t));case F.BASE64:case F.BASE64URL:return new dt(Gr(e,t));case F.DATA_URL:return new dt(jl(t),Fl(t))}throw Gt()}function Vr(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const a=r,s=e.charCodeAt(++n);r=65536|(a&1023)<<10|s&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function Ml(e){let t;try{t=decodeURIComponent(e)}catch{throw ge(F.DATA_URL,"Malformed data URL.")}return Vr(t)}function Gr(e,t){switch(e){case F.BASE64:{const o=t.indexOf("-")!==-1,a=t.indexOf("_")!==-1;if(o||a)throw ge(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case F.BASE64URL:{const o=t.indexOf("+")!==-1,a=t.indexOf("/")!==-1;if(o||a)throw ge(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kl(t)}catch(o){throw o.message.includes("polyfill")?o:ge(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class qr{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw ge(F.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Bl(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function jl(e){const t=new qr(e);return t.base64?Gr(F.BASE64,t.rest):Ml(t.rest)}function Fl(e){return new qr(e).contentType}function Bl(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class U{constructor(t,n){let r=0,o="";Tn(t)?(this.data_=t,r=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(Tn(this.data_)){const r=this.data_,o=Dl(r,t,n);return o===null?null:new U(o)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new U(r,!0)}}static getBlob(...t){if(Kt()){const n=t.map(r=>r instanceof U?r.data_:r);return new U(Ol.apply(null,n))}else{const n=t.map(s=>qt(s)?Pl(F.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const o=new Uint8Array(r);let a=0;return n.forEach(s=>{for(let i=0;i<s.length;i++)o[a++]=s[i]}),new U(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Kr(e){let t;try{t=JSON.parse(e)}catch{return null}return _l(t)?t:null}/**
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
 */function Ll(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Ul(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Xr(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function $l(e,t){return t}class O{constructor(t,n,r,o){this.server=t,this.local=n||t,this.writable=!!r,this.xform=o||$l}}let Me=null;function zl(e){return!qt(e)||e.length<2?e:Xr(e)}function Yr(){if(Me)return Me;const e=[];e.push(new O("bucket")),e.push(new O("generation")),e.push(new O("metageneration")),e.push(new O("name","fullPath",!0));function t(a,s){return zl(s)}const n=new O("name");n.xform=t,e.push(n);function r(a,s){return s!==void 0?Number(s):s}const o=new O("size");return o.xform=r,e.push(o),e.push(new O("timeCreated")),e.push(new O("updated")),e.push(new O("md5Hash",null,!0)),e.push(new O("cacheControl",null,!0)),e.push(new O("contentDisposition",null,!0)),e.push(new O("contentEncoding",null,!0)),e.push(new O("contentLanguage",null,!0)),e.push(new O("contentType",null,!0)),e.push(new O("metadata","customMetadata",!0)),Me=e,Me}function Hl(e,t){function n(){const r=e.bucket,o=e.fullPath,a=new P(r,o);return t._makeStorageReference(a)}Object.defineProperty(e,"ref",{get:n})}function Wl(e,t,n){const r={};r.type="file";const o=n.length;for(let a=0;a<o;a++){const s=n[a];r[s.local]=s.xform(r,t[s.server])}return Hl(r,e),r}function Zr(e,t,n){const r=Kr(t);return r===null?null:Wl(e,r,n)}function Vl(e,t,n,r){const o=Kr(t);if(o===null||!qt(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const s=encodeURIComponent;return a.split(",").map(l=>{const m=e.bucket,f=e.fullPath,h="/b/"+s(m)+"/o/"+s(f),g=Xt(h,n,r),v=Wr({alt:"media",token:l});return g+v})[0]}function Gl(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const a=t[o];a.writable&&(n[a.server]=e[a.local])}return JSON.stringify(n)}class Jr{constructor(t,n,r,o){this.url=t,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Qr(e){if(!e)throw Gt()}function ql(e,t){function n(r,o){const a=Zr(e,o,t);return Qr(a!==null),a}return n}function Kl(e,t){function n(r,o){const a=Zr(e,o,t);return Qr(a!==null),Vl(a,o,e.host,e._protocol)}return n}function eo(e){function t(n,r){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=il():o=sl():n.getStatus()===402?o=al(e.bucket):n.getStatus()===403?o=cl(e.path):o=r,o.status=n.getStatus(),o.serverResponse=r.serverResponse,o}return t}function Xl(e){const t=eo(e);function n(r,o){let a=t(r,o);return r.getStatus()===404&&(a=ol(e.path)),a.serverResponse=o.serverResponse,a}return n}function Yl(e,t,n){const r=t.fullServerUrl(),o=Xt(r,e.host,e._protocol),a="GET",s=e.maxOperationRetryTime,i=new Jr(o,a,Kl(e,n),s);return i.errorHandler=Xl(t),i}function Zl(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Jl(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=Zl(null,t)),r}function Ql(e,t,n,r,o){const a=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function i(){let w="";for(let _=0;_<2;_++)w=w+Math.random().toString().slice(2);return w}const u=i();s["Content-Type"]="multipart/related; boundary="+u;const l=Jl(t,r,o),m=Gl(l,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,h=`\r
--`+u+"--",g=U.getBlob(f,r,h);if(g===null)throw pl();const v={name:l.fullPath},p=Xt(a,e.host,e._protocol),b="POST",x=e.maxUploadRetryTime,y=new Jr(p,b,ql(e,n),x);return y.urlParams=v,y.headers=s,y.body=g.uploadData(),y.errorHandler=eo(t),y}class eu{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=K.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=K.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=K.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,o){if(this.sent_)throw me("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw me("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw me("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw me("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw me("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class tu extends eu{initXhr(){this.xhr_.responseType="text"}}function to(){return new tu}/**
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
 */class J{constructor(t,n){this._service=t,n instanceof P?this._location=n:this._location=P.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new J(t,n)}get root(){const t=new P(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xr(this._location.path)}get storage(){return this._service}get parent(){const t=Ll(this._location.path);if(t===null)return null;const n=new P(this._location.bucket,t);return new J(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw gl(t)}}function nu(e,t,n){e._throwIfRoot("uploadBytes");const r=Ql(e.storage,e._location,Yr(),new U(t,!0),n);return e.storage.makeRequestWithTokens(r,to).then(o=>({metadata:o,ref:e}))}function ru(e){e._throwIfRoot("getDownloadURL");const t=Yl(e.storage,e._location,Yr());return e.storage.makeRequestWithTokens(t,to).then(n=>{if(n===null)throw ml();return n})}function ou(e,t){const n=Ul(e._location.path,t),r=new P(e._location.bucket,n);return new J(e.storage,r)}/**
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
 */function au(e){return/^[A-Za-z]+:\/\//.test(e)}function su(e,t){return new J(e,t)}function no(e,t){if(e instanceof Yt){const n=e;if(n._bucket==null)throw hl();const r=new J(n,n._bucket);return t!=null?no(r,t):r}else return t!==void 0?ou(e,t):e}function iu(e,t){if(t&&au(t)){if(e instanceof Yt)return su(e,t);throw At("To use ref(service, url), the first argument must be a Storage instance.")}else return no(e,t)}function Dn(e,t){const n=t==null?void 0:t[zr];return n==null?null:P.makeFromBucketSpec(n,e)}function cu(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken=typeof o=="string"?o:Ui(o,e.app.options.projectId))}class Yt{constructor(t,n,r,o,a){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=$r,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nl,this._maxUploadRetryTime=rl,this._requests=new Set,o!=null?this._bucket=P.makeFromBucketSpec(o,this._host):this._bucket=Dn(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=P.makeFromBucketSpec(this._url,t):this._bucket=Dn(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){On("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){On("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new J(this,t)}_makeRequest(t,n,r,o,a=!0){if(this._deleted)return new bl(Hr());{const s=Rl(t,this._appId,r,o,n,this._firebaseVersion,a);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,o).getPromise()}}const kn="@firebase/storage",Pn="0.12.5";/**
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
 */const ro="storage";function lu(e,t,n){return e=Ke(e),nu(e,t,n)}function uu(e){return e=Ke(e),ru(e)}function du(e,t){return e=Ke(e),iu(e,t)}function fu(e=Gc(),t){e=Ke(e);const r=zc(e,ro).getImmediate({identifier:t}),o=Bi("storage");return o&&hu(r,...o),r}function hu(e,t,n,r={}){cu(e,t,n,r)}function pu(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Yt(n,r,o,t,Vc)}function mu(){ze(new _e(ro,pu,"PUBLIC").setMultipleInstances(!0)),ce(kn,Pn,""),ce(kn,Pn,"esm2017")}mu();var vu="firebase",gu="10.12.2";/**
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
 */ce(vu,gu,"app");const bu={apiKey:"AIzaSyA70Yl-Xf-ZvvHdQV317yZm8nz8qS_LU8M",authDomain:"budzofboston-e47c7.firebaseapp.com",databaseURL:"https://budzofboston-e47c7-default-rtdb.firebaseio.com",projectId:"budzofboston-e47c7",storageBucket:"budzofboston-e47c7.appspot.com",messagingSenderId:"127046953971",appId:"1:127046953971:web:83f302a87785c480870086"},xu=Br(bu),yu=async e=>{const t=fu(xu),n=du(t,"images/"+(e==null?void 0:e.name));try{const r=await lu(n,e);return{url:await uu(r.ref),size:Math.round(r.metadata.size/1024)}}catch(r){return console.error("Error uploading file:",r),null}},wu=e=>{const[t,n]=d.useState({productName:"",quantity:0,description:"",image:""});return d.useEffect(()=>{e&&n(o=>({...o,productName:e==null?void 0:e.productName,image:e==null?void 0:e.image,quantity:e==null?void 0:e.quantity,description:e==null?void 0:e.description}))},[e]),{handleInput:o=>{const{name:a,value:s,type:i}=o.target,u=i==="number"?+s:s;n(l=>({...l,[a]:u}))},inputs:t,setInputs:n}},_u=({editPhotoHandler:e,inputs:t,handleInput:n,handleSubmit:r,isEditMode:o,loadingCreate:a,loadingUpdate:s,uploadingToFirebase:i})=>c.jsxs("form",{className:"flex flex-col gap-y-4 border-[1px] border-zinc-800 rounded-lg py-12 px-8 bg-[#141418]",children:[c.jsxs("div",{className:"grid grid-cols-12 gap-10",children:[c.jsx("div",{className:"col-span-12 md:col-span-5",children:"Upload an image of your product"}),c.jsx("div",{className:"col-span-12 md:col-span-7 flex justify-center py-4 mx-auto w-full bg-zinc-950 cursor-pointer",children:i?c.jsx(X,{fill:"fill-lime-400"}):c.jsxs(d.Fragment,{children:[c.jsx("input",{id:"image-file",type:"file",onChange:e,className:"hidden",name:"image"}),c.jsx("label",{htmlFor:"image-file",className:"rounded-md cursor-pointer",children:t.image?c.jsx("img",{src:t.image,alt:"Dreambudz",className:"object-cover h-40 w-40 bg-zinc-950 rounded-md"}):c.jsxs("div",{className:"flex flex-col justify-center items-center",children:[c.jsx("div",{className:"h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 mb-1",children:c.jsx("i",{className:"fa-solid fa-cloud-arrow-up fa-xl mb-2 bg-gray-800 rounded-full flex justify-center items-center h-12 w-12 text-gray-200"})}),c.jsx("p",{className:"font-Matter-Regular underline text-gray-500",children:"Click to add photo"})]})})]})})]}),c.jsx("div",{className:"h-[1px] w-full bg-zinc-800 my-12"}),c.jsxs("div",{className:"grid grid-cols-12 gap-10",children:[c.jsx("div",{className:"col-span-12 md:col-span-5",children:"Product details"}),c.jsxs("div",{className:"col-span-12 md:col-span-7 grid gap-6",children:[c.jsxs("div",{className:"flex flex-col",children:[c.jsx("label",{htmlFor:"name",className:"text-xs text-zinc-300 mb-1",children:"Product name"}),c.jsx("input",{type:"text",name:"productName",onChange:n,value:t.productName||"",className:"border-zinc-700 border-[1px] px-3 text-xs text-white bg-transparent h-10 focus:outline-none input-box"})]}),c.jsxs("div",{className:"flex flex-col",children:[c.jsx("label",{htmlFor:"quantity",className:"text-xs text-zinc-300 mb-1",children:"Quantity"}),c.jsx("input",{type:"number",name:"quantity",onChange:n,value:t.quantity||"",className:"border-zinc-700 border-[1px] px-3 text-white bg-transparent h-10 focus:outline-none text-xs input-box"})]}),c.jsxs("div",{className:"flex flex-col",children:[c.jsx("label",{htmlFor:"description",className:"text-xs text-zinc-300 mb-1",children:"Description"}),c.jsx("textarea",{id:"description",name:"description",rows:5,value:t.description||"",onChange:n,"aria-label":"Enter description",className:"border-zinc-700 border-[1px] p-3 text-white bg-transparent focus:outline-none text-xs input-box"})]})]})]}),c.jsx("div",{className:"h-[1px] w-full bg-zinc-800 my-12"}),c.jsxs("button",{onClick:r,className:"mt-5 cursor-pointer text-sm bg-lime-600 font-bold text-white w-fit px-3 py-2 hover:bg-lime-500 duration-200 flex self-end items-center",children:[a||s&&c.jsx(X,{fill:"fill-white"}),o?`Updat${s?"ing...":"e"}`:`Creat${a?"ing...":"e"}`]})]}),Eu=()=>{const e=Se(),t=Ve(),[n,r]=d.useState(!1),{state:o}=To(),a=o==null?void 0:o.product,s=o==null?void 0:o.isEditMode,{handleInput:i,inputs:u,setInputs:l}=wu(a),[m,{isLoading:f}]=Oo(),[h,{isLoading:g}]=Do(),v=le($o),p=le(Uo),b=I=>{p==null||p.play(),e(C(0)),e(k(!1)),console.error(I)},x=()=>{e(C(85)),v==null||v.play(),e(C(100)),setTimeout(()=>{e(C(0)),e(k(!1)),t("/admin/products")},250)},y=async()=>{e(C(15)),await h({...u,id:a.id}).unwrap().then(x).catch(b)},w=async()=>{e(C(15)),await m(u).unwrap().then(x).catch(b)},_=async I=>{I.preventDefault(),e(k(!0)),e(C(5)),s?y():w()},E=async I=>{r(!0);const T=await yu(I.target.files[0]);r(!1),l(D=>({...D,image:T==null?void 0:T.url})),I.target.value=""};return c.jsxs("div",{className:"flex flex-col gap-y-8 py-20 w-full lg:max-w-screen-md mx-auto px-3 md:px-6",children:[c.jsxs(M,{to:"/admin/products",className:"w-fit border border-zinc-900 bg-zinc-900 rounded-md  px-3.5 py-1.5 flex items-center hover:no-underline group hover:bg-zinc-800 duration-300",children:[c.jsx("i",{className:"fas fa-chevron-left fa-xs mr-2"}),c.jsx("p",{className:"font-Matter-Regular text-sm mt-0.5",children:"Back to products"})]}),c.jsx(_u,{editPhotoHandler:E,inputs:u,handleInput:i,handleSubmit:_,isEditMode:s,loadingCreate:f,loadingUpdate:g,uploadingToFirebase:n})]})},Cu=e=>{const[t,n]=d.useState({code:"",id:0});return d.useEffect(()=>{e&&n(o=>{var a,s;return{...o,code:(a=e==null?void 0:e.code)==null?void 0:a.code,id:(s=e==null?void 0:e.code)==null?void 0:s.id}})},[e]),{handleInput:o=>{const{name:a,value:s}=o.target;n(i=>({...i,[a]:s}))},inputs:t,setInputs:n}},Su=({isOpen:e,onClose:t,isEditMode:n,handleInput:r,inputs:o,handleSubmit:a,isLoading:s,codeUpdated:i})=>c.jsxs(zt,{isOpen:e,onClose:t,isCentered:!0,children:[c.jsx(Wt,{}),c.jsx(Ht,{className:"h-32",children:c.jsxs(Rr,{className:" bg-zinc-900 text-zinc-300 flex flex-col justify-center",children:[c.jsx(jn,{sentence:n?"Update":"Enter a code",speed:60,text:"text-xs"}),c.jsxs("form",{onSubmit:a,className:"flex items-center gap-2 mt-1.5",children:[c.jsx("input",{onChange:r,name:"code",type:"text","aria-label":"Enter code",className:"input-box focus:outline-none bg-zinc-800 text-zinc-300 text-xs px-3 py-2 h-9 w-full",value:o.code||"",onKeyDown:u=>u.key==="Enter"&&a(u)}),s?c.jsx(X,{fill:"fill-lime-400"}):c.jsx("button",{type:"submit",className:"text-sm font-bold",children:c.jsx("i",{className:`fa-solid ${i?"fa-lock-open":"fa-lock"} fa-lg text-zinc-400 w-5 hover:text-zinc-500 duration-200`})})]})]})})]}),Nu=()=>{const e=Se(),{isOpen:t,onOpen:n,onClose:r}=Ts(),[o,{isLoading:a}]=ko(),[s,{isLoading:i}]=Po(),{isLoading:u}=Mo(),l=jo(y=>y.code),m=!!(l!=null&&l.code),f=le(Ho),h=le(zo),{handleInput:g,inputs:v}=Cu(l),[p,b]=d.useState(!1),x=async y=>{y.preventDefault(),e(k(!0)),e(C(10)),m?await s(v).unwrap().then(()=>{e(C(75)),f==null||f.play(),e(C(100)),setTimeout(()=>{r(),b(!0),e(C(0)),e(k(!1)),e(nn())},200)}).catch(w=>{e(C(0)),e(k(!1)),console.error(w)}):await o(v).unwrap().then(()=>{e(C(75)),h==null||h.play(),e(C(100)),setTimeout(()=>{e(C(0)),e(k(!1)),r(),b(!0),e(nn())},250)}).catch(w=>{e(C(0)),e(k(!1)),console.error(w)})};return c.jsxs(d.Fragment,{children:[c.jsx(Su,{isOpen:t,onClose:r,isEditMode:m,handleInput:g,inputs:v,handleSubmit:x,isLoading:i||a,codeUpdated:l.success}),c.jsx("div",{className:"min-h-screen pt-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8 pb-3",children:c.jsxs("div",{className:"max-w-screen-lg w-full mx-auto",children:[c.jsx("div",{className:"font-Matter-Medium text-xl mb-3.5",children:"Code"}),c.jsx("div",{onClick:()=>{n(),b(!1)},className:"w-fit min-w-40 h-40 border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center text-center group hover:bg-[#121214] duration-200 cursor-pointer px-4",children:u?c.jsx(X,{}):c.jsxs(d.Fragment,{children:[c.jsx(jn,{sentence:m?"Update":"Create",speed:50,text:"text-xs"}),m?c.jsx("p",{onClick:y=>{y.stopPropagation(),b(!p)},className:"relative z-10 text-sm text-lime-400 mt-2 font-bold hover:bg-zinc-950 hover:rounded-md p-1 duration-200",children:p?v.code:"****"}):c.jsx("i",{className:"mt-2 fa-code text-lime-400 text-sm fa-solid"})]})})]})})]})},Au=e=>[{linkKey:"/admin/dashboard",textKey:"Dashboard",icon:"fa-solid fa-chart-column",isActive:e==="dashboard"},{linkKey:"/admin/products",textKey:"Products",icon:"fa-solid fa-boxes-packing",isActive:e==="products"},{linkKey:"/admin/code",textKey:"Code",icon:"fa-solid fa-code",isActive:e==="code"}],Iu=()=>{const e=Fo()["*"],t=Ve(),n=Se(),r=Ge(s=>s.auth),o=le(Fn),a=()=>{n(k(!0)),n(C(0)),o==null||o.play(),Bn.purge(),n(C(50)),n(Ln()),n(C(100)),t("/auth/login"),setTimeout(()=>{n(k(!1)),n(C(0))},200)};return c.jsxs("div",{className:"w-[240px]",children:[c.jsx("div",{className:"px-3 pt-5 mb-10",children:c.jsx(M,{to:`/code-validated/${r==null?void 0:r.token}/items`,children:c.jsx(Un,{src:$n,alt:"Dream Budz",className:"object-contain mx-auto"})})}),Au(e).map((s,i)=>c.jsxs("div",{className:"grid grid-cols-9 mb-6 items-center group",children:[c.jsx("i",{className:`${s.icon} ${s!=null&&s.isActive?"bg-slate-600 rounded-tr-2xl rounded-br-2xl text-lime-400":"text-zinc-400"} col-span-2 py-2 pl-2 pr-3 w-fit duration-200 group-hover:text-lime-400`}),c.jsx(M,{className:`${s.isActive?"text-lime-400 font-bold":"text-zinc-400"} col-span-7 duration-200 group-hover:text-lime-400`,to:s.linkKey,children:s.textKey})]},i)),c.jsxs("div",{onClick:a,className:"grid grid-cols-9 mb-6 items-center cursor-pointer group",children:[c.jsx("i",{className:"fa-solid fa-right-from-bracket text-zinc-400 col-span-2 py-2 pl-2 pr-3 w-fit duration-200 group-hover:text-lime-400"}),c.jsx("p",{className:"text-zinc-400 col-span-7 duration-200 group-hover:text-lime-400",children:"Logout"})]})]})},Ru=({sidebar:e,children:t})=>c.jsxs("div",{className:"flex min-h-screen",children:[c.jsx("aside",{className:"hidden lg:block lg:w-[240px] bg-zinc-900",children:e}),c.jsx("main",{className:"max-w-screen-lg w-full mx-auto",children:t})]}),Tu=({toggleMobileMenu:e,close:t})=>{const n=Se(),r=Ve(),o=le(Fn),a=()=>{t(),n(k(!0)),n(C(0)),o==null||o.play(),Bn.purge(),n(C(50)),n(Ln()),n(C(100)),r("/auth/login"),setTimeout(()=>{n(k(!1)),n(C(0))},200)};return c.jsxs("div",{className:`${e?"w-screen left-0 overflow-hidden":"left-[-100vw] w-none"} fixed duration-200 min-h-screen bg-zinc-950 top-0 left-0 flex flex-col items-center justify-center gap-5 z-[60]`,children:[c.jsx(Un,{onClick:t,src:$n,className:"w-40 top-1 left-3 block lg:hidden hover:text-lime-400 duration-200 cursor-pointer",alt:"Budz of Boston"}),c.jsx(M,{onClick:t,className:"hover:text-lime-400 duration-200",to:"/admin/dashboard",children:"Dashboard"}),c.jsx(M,{onClick:t,className:"hover:text-lime-400 duration-200",to:"/admin/products",children:"Products"}),c.jsx(M,{onClick:t,className:"hover:text-lime-400 duration-200",to:"/admin/code",children:"Code"}),c.jsx(M,{onClick:a,className:"hover:text-lime-400 duration-200",to:"/auth/login",children:"Logout"})]})},ku=()=>{const[e,t]=d.useState(!1),n=()=>t(!1);return c.jsxs(Ru,{sidebar:c.jsx(Iu,{}),children:[c.jsx("i",{onClick:()=>t(!e),className:"block lg:hidden fa-solid fa-bars text-lime-500 col-span-2 py-2 pl-2 pr-3 w-fit duration-200 hover:text-lime-400 absolute top-2 right-2 cursor-pointer z-20"}),c.jsx(Tu,{toggleMobileMenu:e,close:n}),c.jsxs(Bo,{children:[c.jsx(Re,{path:"dashboard",element:c.jsx(Ei,{})}),c.jsx(Re,{path:"products",element:c.jsx(Ii,{})}),c.jsx(Re,{path:"product",element:c.jsx(Eu,{})}),c.jsx(Re,{path:"code",element:c.jsx(Nu,{})})]})]})};export{ku as default};
