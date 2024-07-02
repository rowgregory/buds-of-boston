import{r as d,j as c,A as We,m as Ce,k as ue,l as ft,n as yo,o as wo,q as Ve,v as Re,w as Mn,x as _o,P as Eo,y as Co,z as Rt,a as Ge,c as Se,B as So,L as P,u as Ne,_ as ce,s as I,t as M,g as No,C as Ao,h as Io,E as Ro,F as To,T as jn,H as Oo,I as Do,J as ko,f as Po,D as Fn,p as Bn,i as Ln,R as Mo,e as Te}from"./index-Dnp_oc2s.js";import{S as ge,I as Un,L as $n}from"./logo-VdixgAPP.js";const jo="/assets/delete-CCXd37Qu.mp3";function Fo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Bo=Fo();function Lo(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function rn(...e){return t=>{e.forEach(n=>{Lo(n,t)})}}var on={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},V={enter:{duration:.2,ease:on.easeOut},exit:{duration:.1,ease:on.easeIn}},G={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})},Uo={enter:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:1,transition:(r=e==null?void 0:e.enter)!=null?r:G.enter(V.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:0,transition:(r=e==null?void 0:e.exit)!=null?r:G.exit(V.exit,n),transitionEnd:t==null?void 0:t.exit}}},zn={initial:"exit",animate:"enter",exit:"exit",variants:Uo},$o=d.forwardRef(function(t,n){const{unmountOnExit:r,in:o,className:a,transition:s,transitionEnd:i,delay:u,...l}=t,m=o||r?"enter":"exit",f=r?o&&r:!0,h={transition:s,transitionEnd:i,delay:u};return c.jsx(We,{custom:h,children:f&&c.jsx(Ce.div,{ref:n,className:ue("chakra-fade",a),custom:h,...zn,animate:m,...l})})});$o.displayName="Fade";var zo={exit:({reverse:e,initialScale:t,transition:n,transitionEnd:r,delay:o})=>{var a;return{opacity:0,...e?{scale:t,transitionEnd:r==null?void 0:r.exit}:{transitionEnd:{scale:t,...r==null?void 0:r.exit}},transition:(a=n==null?void 0:n.exit)!=null?a:G.exit(V.exit,o)}},enter:({transitionEnd:e,transition:t,delay:n})=>{var r;return{opacity:1,scale:1,transition:(r=t==null?void 0:t.enter)!=null?r:G.enter(V.enter,n),transitionEnd:e==null?void 0:e.enter}}},Hn={initial:"exit",animate:"enter",exit:"exit",variants:zo},Ho=d.forwardRef(function(t,n){const{unmountOnExit:r,in:o,reverse:a=!0,initialScale:s=.95,className:i,transition:u,transitionEnd:l,delay:m,...f}=t,h=r?o&&r:!0,v=o||r?"enter":"exit",b={initialScale:s,reverse:a,transition:u,transitionEnd:l,delay:m};return c.jsx(We,{custom:b,children:h&&c.jsx(Ce.div,{ref:n,className:ue("chakra-offset-slide",i),...Hn,animate:v,custom:b,...f})})});Ho.displayName="ScaleFade";var Wo={initial:({offsetX:e,offsetY:t,transition:n,transitionEnd:r,delay:o})=>{var a;return{opacity:0,x:e,y:t,transition:(a=n==null?void 0:n.exit)!=null?a:G.exit(V.exit,o),transitionEnd:r==null?void 0:r.exit}},enter:({transition:e,transitionEnd:t,delay:n})=>{var r;return{opacity:1,x:0,y:0,transition:(r=e==null?void 0:e.enter)!=null?r:G.enter(V.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({offsetY:e,offsetX:t,transition:n,transitionEnd:r,reverse:o,delay:a})=>{var s;const i={x:t,y:e};return{opacity:0,transition:(s=n==null?void 0:n.exit)!=null?s:G.exit(V.exit,a),...o?{...i,transitionEnd:r==null?void 0:r.exit}:{transitionEnd:{...i,...r==null?void 0:r.exit}}}}},me={initial:"initial",animate:"enter",exit:"exit",variants:Wo},Vo=d.forwardRef(function(t,n){const{unmountOnExit:r,in:o,reverse:a=!0,className:s,offsetX:i=0,offsetY:u=8,transition:l,transitionEnd:m,delay:f,...h}=t,v=r?o&&r:!0,b=o||r?"enter":"exit",p={offsetX:i,offsetY:u,reverse:a,transition:l,transitionEnd:m,delay:f};return c.jsx(We,{custom:p,children:v&&c.jsx(Ce.div,{ref:n,className:ue("chakra-offset-slide",s),custom:p,...me,animate:b,...h})})});Vo.displayName="SlideFade";function Go(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var ht="data-focus-lock",Wn="data-focus-lock-disabled",qo="data-no-focus-lock",Ko="data-autofocus-inside",Xo="data-no-autofocus";function Je(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Yo(e,t){var n=d.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Zo=typeof window<"u"?d.useLayoutEffect:d.useEffect,an=new WeakMap;function Vn(e,t){var n=Yo(null,function(r){return e.forEach(function(o){return Je(o,r)})});return Zo(function(){var r=an.get(n);if(r){var o=new Set(r),a=new Set(e),s=n.current;o.forEach(function(i){a.has(i)||Je(i,null)}),a.forEach(function(i){o.has(i)||Je(i,s)})}an.set(n,e)},[e]),n}var Qe={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},j=function(){return j=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},j.apply(this,arguments)};function Gn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Jo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function qn(e){return e}function Kn(e,t){t===void 0&&(t=qn);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var s=t(a,r);return n.push(s),function(){n=n.filter(function(i){return i!==s})}},assignSyncMedium:function(a){for(r=!0;n.length;){var s=n;n=[],s.forEach(a)}n={push:function(i){return a(i)},filter:function(){return n}}},assignMedium:function(a){r=!0;var s=[];if(n.length){var i=n;n=[],i.forEach(a),s=n}var u=function(){var m=s;s=[],m.forEach(a)},l=function(){return Promise.resolve().then(u)};l(),n={push:function(m){s.push(m),l()},filter:function(m){return s=s.filter(m),n}}}};return o}function Tt(e,t){return t===void 0&&(t=qn),Kn(e,t)}function Xn(e){e===void 0&&(e={});var t=Kn(null);return t.options=j({async:!0,ssr:!1},e),t}var Yn=function(e){var t=e.sideCar,n=Gn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return d.createElement(r,j({},n))};Yn.isSideCarExport=!0;function Qo(e,t){return e.useMedium(t),Yn}var Zn=Tt({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),Jn=Tt(),ea=Tt(),ta=Xn({async:!0,ssr:typeof document<"u"}),na=d.createContext(void 0),ra=[],Ot=d.forwardRef(function(t,n){var r,o=d.useState(),a=o[0],s=o[1],i=d.useRef(),u=d.useRef(!1),l=d.useRef(null),m=d.useState({}),f=m[1],h=t.children,v=t.disabled,b=v===void 0?!1:v,p=t.noFocusGuards,g=p===void 0?!1:p,x=t.persistentFocus,w=x===void 0?!1:x,y=t.crossFrame,_=y===void 0?!0:y,E=t.autoFocus,T=E===void 0?!0:E;t.allowTextSelection;var D=t.group,k=t.className,A=t.whiteList,fe=t.hasPositiveIndices,Ae=t.shards,Xe=Ae===void 0?ra:Ae,Jt=t.as,ro=Jt===void 0?"div":Jt,Qt=t.lockProps,oo=Qt===void 0?{}:Qt,ao=t.sideCar,en=t.returnFocus,Ie=en===void 0?!1:en,so=t.focusOptions,Ye=t.onActivation,Ze=t.onDeactivation,io=d.useState({}),co=io[0],lo=d.useCallback(function(L){var J=L.captureFocusRestore;if(!l.current){var Q,H=(Q=document)==null?void 0:Q.activeElement;l.current=H,H!==document.body&&(l.current=J(H))}i.current&&Ye&&Ye(i.current),u.current=!0,f()},[Ye]),uo=d.useCallback(function(){u.current=!1,Ze&&Ze(i.current),f()},[Ze]),fo=d.useCallback(function(L){var J=l.current;if(J){var Q=(typeof J=="function"?J():J)||document.body,H=typeof Ie=="function"?Ie(Q):Ie;if(H){var nn=typeof H=="object"?H:void 0;l.current=null,L?Promise.resolve().then(function(){return Q.focus(nn)}):Q.focus(nn)}}},[Ie]),ho=d.useCallback(function(L){u.current&&Zn.useMedium(L)},[]),po=Jn.useMedium,mo=d.useCallback(function(L){i.current!==L&&(i.current=L,s(L))},[]),vo=ft((r={},r[Wn]=b&&"disabled",r[ht]=D,r),oo),tn=g!==!0,go=tn&&g!=="tail",bo=Vn([n,mo]),xo=d.useMemo(function(){return{observed:i,shards:Xe,enabled:!b,active:u.current}},[b,u.current,Xe,a]);return d.createElement(d.Fragment,null,tn&&[d.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:b?-1:0,style:Qe}),fe?d.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:b?-1:1,style:Qe}):null],!b&&d.createElement(ao,{id:co,sideCar:ta,observed:a,disabled:b,persistentFocus:w,crossFrame:_,autoFocus:T,whiteList:A,shards:Xe,onActivation:lo,onDeactivation:uo,returnFocus:fo,focusOptions:so}),d.createElement(ro,ft({ref:bo},vo,{className:k,onBlur:po,onFocus:ho}),d.createElement(na.Provider,{value:xo},h)),go&&d.createElement("div",{"data-focus-guard":!0,tabIndex:b?-1:0,style:Qe}))});Ot.propTypes={};function pt(e,t){return pt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},pt(e,t)}function oa(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,pt(e,t)}function be(e){"@babel/helpers - typeof";return be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},be(e)}function aa(e,t){if(be(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(be(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function sa(e){var t=aa(e,"string");return be(t)=="symbol"?t:t+""}function ia(e,t,n){return t=sa(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ca(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],s;function i(){s=e(a.map(function(l){return l.props})),t(s)}var u=function(l){oa(m,l);function m(){return l.apply(this,arguments)||this}m.peek=function(){return s};var f=m.prototype;return f.componentDidMount=function(){a.push(this),i()},f.componentDidUpdate=function(){i()},f.componentWillUnmount=function(){var v=a.indexOf(this);a.splice(v,1),i()},f.render=function(){return yo.createElement(o,this.props)},m}(d.PureComponent);return ia(u,"displayName","SideEffect("+n(o)+")"),u}}var B=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},X=function(e){return Array.isArray(e)?e:[e]},Qn=function(e){return Array.isArray(e)?e[0]:e},la=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},er=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},tr=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},ua=function(e){return e.hasAttribute("inert")},da=function(e,t){return!e||tr(e)||!la(e)&&!ua(e)&&t(er(e))},nr=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=da(t,nr.bind(void 0,e));return e.set(t,r),r},fa=function(e,t){return e&&!tr(e)?ma(e)?t(er(e)):!1:!0},rr=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=fa(t,rr.bind(void 0,e));return e.set(t,r),r},or=function(e){return e.dataset},ha=function(e){return e.tagName==="BUTTON"},ar=function(e){return e.tagName==="INPUT"},sr=function(e){return ar(e)&&e.type==="radio"},pa=function(e){return!((ar(e)||ha(e))&&(e.type==="hidden"||e.disabled))},ma=function(e){var t=e.getAttribute(Xo);return![!0,"true",""].includes(t)},Dt=function(e){var t;return!!(e&&(!((t=or(e))===null||t===void 0)&&t.focusGuard))},mt=function(e){return!Dt(e)},va=function(e){return!!e},ga=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},ba=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},kt=function(e,t,n){return B(e).map(function(r,o){var a=ba(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(ga)},xa=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Pt=xa.join(","),ya="".concat(Pt,", [data-focus-guard]"),ir=function(e,t){return B((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?ya:Pt)?[r]:[],ir(r))},[])},wa=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?le([e.contentDocument.body],t):[e]},le=function(e,t){return e.reduce(function(n,r){var o,a=ir(r,t),s=(o=[]).concat.apply(o,a.map(function(i){return wa(i,t)}));return n.concat(s,r.parentNode?B(r.parentNode.querySelectorAll(Pt)).filter(function(i){return i===r}):[])},[])},_a=function(e){var t=e.querySelectorAll("[".concat(Ko,"]"));return B(t).map(function(n){return le([n])}).reduce(function(n,r){return n.concat(r)},[])},Mt=function(e,t){return B(e).filter(function(n){return nr(t,n)}).filter(function(n){return pa(n)})},sn=function(e,t){return t===void 0&&(t=new Map),B(e).filter(function(n){return rr(t,n)})},jt=function(e,t,n){return kt(Mt(le(e,n),t),!0,n)},Le=function(e,t){return kt(Mt(le(e),t),!1)},Ea=function(e,t){return Mt(_a(e),t)},q=function(e,t){return e.shadowRoot?q(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:B(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?q(o,t):!1}return q(n,t)})},Ca=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(s,i){return!t.has(i)})},cr=function(e){return e.parentNode?cr(e.parentNode):e},Ft=function(e){var t=X(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(ht);return n.push.apply(n,o?Ca(B(cr(r).querySelectorAll("[".concat(ht,'="').concat(o,'"]:not([').concat(Wn,'="disabled"])')))):[r]),n},[])},Sa=function(e){try{return e()}catch{return}},xe=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?xe(t.shadowRoot):t instanceof HTMLIFrameElement&&Sa(function(){return t.contentWindow.document})?xe(t.contentWindow.document):t}},Na=function(e,t){return e===t},Aa=function(e,t){return!!B(e.querySelectorAll("iframe")).some(function(n){return Na(n,t)})},lr=function(e,t){return t===void 0&&(t=xe(Qn(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Ft(e).some(function(n){return q(n,t)||Aa(n,t)})},Ia=function(e){e===void 0&&(e=document);var t=xe(e);return t?B(e.querySelectorAll("[".concat(qo,"]"))).some(function(n){return q(n,t)}):!1},Ra=function(e,t){return t.filter(sr).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Bt=function(e,t){return sr(e)&&e.name?Ra(e,t):e},Ta=function(e){var t=new Set;return e.forEach(function(n){return t.add(Bt(n,e))}),e.filter(function(n){return t.has(n)})},cn=function(e){return e[0]&&e.length>1?Bt(e[0],e):e[0]},ln=function(e,t){return e.indexOf(Bt(t,e))},vt="NEW_FOCUS",Oa=function(e,t,n,r,o){var a=e.length,s=e[0],i=e[a-1],u=Dt(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,m=o?n.indexOf(o):l,f=o?e.indexOf(o):-1;if(l===-1)return f!==-1?f:vt;if(f===-1)return vt;var h=l-m,v=n.indexOf(s),b=n.indexOf(i),p=Ta(n),g=r!==void 0?p.indexOf(r):-1,x=g-(o?p.indexOf(o):l);if(!h&&f>=0||t.length===0)return f;var w=ln(e,t[0]),y=ln(e,t[t.length-1]);if(l<=v&&u&&Math.abs(h)>1)return y;if(l>=b&&u&&Math.abs(h)>1)return w;if(h&&Math.abs(x)>1)return f;if(l<=v)return y;if(l>b)return w;if(h)return Math.abs(h)>1?f:(a+f+h)%a}},Da=function(e){return function(t){var n,r=(n=or(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},un=function(e,t,n){var r=e.map(function(a){var s=a.node;return s}),o=sn(r.filter(Da(n)));return o&&o.length?cn(o):cn(sn(t))},gt=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&gt(e.parentNode.host||e.parentNode,t),t},et=function(e,t){for(var n=gt(e),r=gt(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},ur=function(e,t,n){var r=X(e),o=X(t),a=r[0],s=!1;return o.filter(Boolean).forEach(function(i){s=et(s||i,i)||s,n.filter(Boolean).forEach(function(u){var l=et(a,u);l&&(!s||q(l,s)?s=l:s=et(l,s))})}),s},dn=function(e,t){return e.reduce(function(n,r){return n.concat(Ea(r,t))},[])},ka=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(va)},Pa=function(e,t){var n=xe(X(e).length>0?document:Qn(e).ownerDocument),r=Ft(e).filter(mt),o=ur(n||e,e,r),a=new Map,s=Le(r,a),i=s.filter(function(b){var p=b.node;return mt(p)});if(i[0]){var u=Le([o],a).map(function(b){var p=b.node;return p}),l=ka(u,i),m=l.map(function(b){var p=b.node;return p}),f=l.filter(function(b){var p=b.tabIndex;return p>=0}).map(function(b){var p=b.node;return p}),h=Oa(m,f,u,n,t);if(h===vt){var v=un(s,f,dn(r,a))||un(s,m,dn(r,a));if(v)return{node:v};console.warn("focus-lock: cannot find any node to move focus into");return}return h===void 0?h:l[h]}},Ma=function(e){var t=Ft(e).filter(mt),n=ur(e,e,t),r=kt(le([n],!0),!0,!0),o=le(t,!1);return r.map(function(a){var s=a.node,i=a.index;return{node:s,index:i,lockItem:o.indexOf(s)>=0,guard:Dt(s)}})},Lt=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},tt=0,nt=!1,dr=function(e,t,n){n===void 0&&(n={});var r=Pa(e,t);if(!nt&&r){if(tt>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),nt=!0,setTimeout(function(){nt=!1},1);return}tt++,Lt(r.node,n.focusOptions),tt--}};function he(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var ja=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:he(n),parent:he(n.parentElement),left:he(n.previousElementSibling),right:he(n.nextElementSibling)}),n=n.parentElement;return{element:he(e),stack:t,ownerDocument:e.ownerDocument}},Fa=function(e){var t,n,r,o,a;if(e)for(var s=e.stack,i=e.ownerDocument,u=new Map,l=0,m=s;l<m.length;l++){var f=m[l],h=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(h&&i.contains(h)){for(var v=(n=f.left)===null||n===void 0?void 0:n.call(f),b=f.current(),p=h.contains(b)?b:void 0,g=(r=f.right)===null||r===void 0?void 0:r.call(f),x=jt([h],u),w=(a=(o=p??(v==null?void 0:v.nextElementSibling))!==null&&o!==void 0?o:g)!==null&&a!==void 0?a:v;w;){for(var y=0,_=x;y<_.length;y++){var E=_[y];if(w!=null&&w.contains(E.node))return E.node}w=w.nextElementSibling}if(x.length)return x[0].node}}},Ba=function(e){var t=ja(e);return function(){return Fa(t)}},La=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=X(t);if(r.every(function(s){return!q(s,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?jt(r,new Map):Le(r,new Map),a=o.findIndex(function(s){var i=s.node;return i===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},Ua=function(e,t){var n=t?jt(X(e),new Map):Le(X(e),new Map);return{first:n[0],last:n[n.length-1]}},$a=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},fr=function(e,t,n){t===void 0&&(t={});var r=$a(t),o=La(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&Lt(a.node,r.focusOptions)}},za=function(e,t){t===void 0&&(t={}),fr(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},Ha=function(e,t){t===void 0&&(t={}),fr(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},hr=function(e,t,n){var r,o=Ua(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&Lt(a.node,t.focusOptions)},Wa=function(e,t){t===void 0&&(t={}),hr(e,t,"first")},Va=function(e,t){t===void 0&&(t={}),hr(e,t,"last")};function Ut(e){setTimeout(e,1)}var Ga=function(t){return t&&"current"in t?t.current:t},qa=function(){return document&&document.activeElement===document.body},Ka=function(){return qa()||Ia()},oe=null,re=null,ae=null,ye=!1,Xa=function(){return!0},Ya=function(t){return(oe.whiteList||Xa)(t)},Za=function(t,n){ae={observerNode:t,portaledElement:n}},Ja=function(t){return ae&&ae.portaledElement===t};function fn(e,t,n,r){var o=null,a=e;do{var s=r[a];if(s.guard)s.node.dataset.focusAutoGuard&&(o=s);else if(s.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Qa=function(t){return t?!!ye:ye==="meanwhile"},es=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},ts=function(t,n){return n.some(function(r){return es(t,r,r)})},Ue=function(){var t=!1;if(oe){var n=oe,r=n.observed,o=n.persistentFocus,a=n.autoFocus,s=n.shards,i=n.crossFrame,u=n.focusOptions,l=r||ae&&ae.portaledElement,m=document&&document.activeElement;if(l){var f=[l].concat(s.map(Ga).filter(Boolean));if((!m||Ya(m))&&(o||Qa(i)||!Ka()||!re&&a)&&(l&&!(lr(f)||m&&ts(m,f)||Ja(m))&&(document&&!re&&m&&!a?(m.blur&&m.blur(),document.body.focus()):(t=dr(f,re,{focusOptions:u}),ae={})),ye=!1,re=document&&document.activeElement),document&&m!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var h=document&&document.activeElement,v=Ma(f),b=v.map(function(p){var g=p.node;return g}).indexOf(h);b>-1&&(v.filter(function(p){var g=p.guard,x=p.node;return g&&x.dataset.focusAutoGuard}).forEach(function(p){var g=p.node;return g.removeAttribute("tabIndex")}),fn(b,v.length,1,v),fn(b,-1,-1,v))}}}return t},pr=function(t){Ue()&&t&&(t.stopPropagation(),t.preventDefault())},$t=function(){return Ut(Ue)},ns=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Za(r,n)},rs=function(){return null},mr=function(){ye="just",Ut(function(){ye="meanwhile"})},os=function(){document.addEventListener("focusin",pr),document.addEventListener("focusout",$t),window.addEventListener("blur",mr)},as=function(){document.removeEventListener("focusin",pr),document.removeEventListener("focusout",$t),window.removeEventListener("blur",mr)};function ss(e){return e.filter(function(t){var n=t.disabled;return!n})}var vr={moveFocusInside:dr,focusInside:lr,focusNextElement:za,focusPrevElement:Ha,focusFirstElement:Wa,focusLastElement:Va,captureFocusRestore:Ba};function is(e){var t=e.slice(-1)[0];t&&!oe&&os();var n=oe,r=n&&t&&t.id===n.id;oe=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(re=null,(!r||n.observed!==t.observed)&&t.onActivation(vr),Ue(),Ut(Ue)):(as(),re=null)}Zn.assignSyncMedium(ns);Jn.assignMedium($t);ea.assignMedium(function(e){return e(vr)});const cs=ca(ss,is)(rs);var bt=d.forwardRef(function(t,n){return d.createElement(Ot,ft({sideCar:cs,ref:n},t))}),gr=Ot.propTypes||{};gr.sideCar;Go(gr,["sideCar"]);bt.propTypes={};function ls(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function us(e){var t;if(!ls(e))return!1;const n=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof n.HTMLElement}var ds=e=>e.hasAttribute("tabindex");function fs(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function br(e){return e.parentElement&&br(e.parentElement)?!0:e.hidden}function hs(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function ps(e){if(!us(e)||br(e)||fs(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in r?r[t]():hs(e)?!0:ds(e)}var ms=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],vs=ms.join(),gs=e=>e.offsetWidth>0&&e.offsetHeight>0;function bs(e){const t=Array.from(e.querySelectorAll(vs));return t.unshift(e),t.filter(n=>ps(n)&&gs(n))}var hn,xs=(hn=bt.default)!=null?hn:bt,xr=e=>{const{initialFocusRef:t,finalFocusRef:n,contentRef:r,restoreFocus:o,children:a,isDisabled:s,autoFocus:i,persistentFocus:u,lockFocusAcrossFrames:l}=e,m=d.useCallback(()=>{t!=null&&t.current?t.current.focus():r!=null&&r.current&&bs(r.current).length===0&&requestAnimationFrame(()=>{var b;(b=r.current)==null||b.focus()})},[t,r]),f=d.useCallback(()=>{var v;(v=n==null?void 0:n.current)==null||v.focus()},[n]),h=o&&!n;return c.jsx(xs,{crossFrame:l,persistentFocus:u,autoFocus:i,disabled:s,onActivation:m,onDeactivation:f,returnFocus:h,children:a})};xr.displayName="FocusLock";var ys=Bo?d.useLayoutEffect:d.useEffect;function pn(e,t=[]){const n=d.useRef(e);return ys(()=>{n.current=e}),d.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}function ws(e,t){const n=d.useId();return d.useMemo(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}function _s(e,t){const n=e!==void 0;return[n,n&&typeof e<"u"?e:t]}function Es(e={}){const{onClose:t,onOpen:n,isOpen:r,id:o}=e,a=pn(n),s=pn(t),[i,u]=d.useState(e.defaultIsOpen||!1),[l,m]=_s(r,i),f=ws(o,"disclosure"),h=d.useCallback(()=>{l||u(!1),s==null||s()},[l,s]),v=d.useCallback(()=>{l||u(!0),a==null||a()},[l,a]),b=d.useCallback(()=>{(m?h:v)()},[m,v,h]);return{isOpen:!!m,onOpen:v,onClose:h,onToggle:b,isControlled:l,getButtonProps:(p={})=>({...p,"aria-expanded":m,"aria-controls":f,onClick:wo(p.onClick,b)}),getDisclosureProps:(p={})=>({...p,hidden:!m,id:f})}}var Cs={slideInBottom:{...me,custom:{offsetY:16,reverse:!0}},slideInRight:{...me,custom:{offsetX:16,reverse:!0}},slideInTop:{...me,custom:{offsetY:-16,reverse:!0}},slideInLeft:{...me,custom:{offsetX:-16,reverse:!0}},scale:{...Hn,custom:{initialScale:.95,reverse:!0}},none:{}},Ss=Ve(Ce.section),Ns=e=>Cs[e||"none"],yr=d.forwardRef((e,t)=>{const{preset:n,motionProps:r=Ns(n),...o}=e;return c.jsx(Ss,{ref:t,...r,...o})});yr.displayName="ModalTransition";var As=Object.defineProperty,Is=(e,t,n)=>t in e?As(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rs=(e,t,n)=>(Is(e,t+"",n),n),Ts=class{constructor(){Rs(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},xt=new Ts;function wr(e,t){const[n,r]=d.useState(0);return d.useEffect(()=>{const o=e.current;if(o){if(t){const a=xt.add(o);r(a)}return()=>{xt.remove(o),r(0)}}},[t,e]),n}var Os=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},ee=new WeakMap,Oe=new WeakMap,De={},rt=0,_r=function(e){return e&&(e.host||_r(e.parentNode))},Ds=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=_r(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},ks=function(e,t,n,r){var o=Ds(t,Array.isArray(e)?e:[e]);De[n]||(De[n]=new WeakMap);var a=De[n],s=[],i=new Set,u=new Set(o),l=function(f){!f||i.has(f)||(i.add(f),l(f.parentNode))};o.forEach(l);var m=function(f){!f||u.has(f)||Array.prototype.forEach.call(f.children,function(h){if(i.has(h))m(h);else try{var v=h.getAttribute(r),b=v!==null&&v!=="false",p=(ee.get(h)||0)+1,g=(a.get(h)||0)+1;ee.set(h,p),a.set(h,g),s.push(h),p===1&&b&&Oe.set(h,!0),g===1&&h.setAttribute(n,"true"),b||h.setAttribute(r,"true")}catch(x){console.error("aria-hidden: cannot operate on ",h,x)}})};return m(t),i.clear(),rt++,function(){s.forEach(function(f){var h=ee.get(f)-1,v=a.get(f)-1;ee.set(f,h),a.set(f,v),h||(Oe.has(f)||f.removeAttribute(r),Oe.delete(f)),v||f.removeAttribute(n)}),rt--,rt||(ee=new WeakMap,ee=new WeakMap,Oe=new WeakMap,De={})}},Ps=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Os(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),ks(r,o,n,"aria-hidden")):function(){return null}};function Ms(e){const{isOpen:t,onClose:n,id:r,closeOnOverlayClick:o=!0,closeOnEsc:a=!0,useInert:s=!0,onOverlayClick:i,onEsc:u}=e,l=d.useRef(null),m=d.useRef(null),[f,h,v]=Fs(r,"chakra-modal","chakra-modal--header","chakra-modal--body");js(l,t&&s);const b=wr(l,t),p=d.useRef(null),g=d.useCallback(A=>{p.current=A.target},[]),x=d.useCallback(A=>{A.key==="Escape"&&(A.stopPropagation(),a&&(n==null||n()),u==null||u())},[a,n,u]),[w,y]=d.useState(!1),[_,E]=d.useState(!1),T=d.useCallback((A={},fe=null)=>({role:"dialog",...A,ref:rn(fe,l),id:f,tabIndex:-1,"aria-modal":!0,"aria-labelledby":w?h:void 0,"aria-describedby":_?v:void 0,onClick:Re(A.onClick,Ae=>Ae.stopPropagation())}),[v,_,f,h,w]),D=d.useCallback(A=>{A.stopPropagation(),p.current===A.target&&xt.isTopModal(l.current)&&(o&&(n==null||n()),i==null||i())},[n,o,i]),k=d.useCallback((A={},fe=null)=>({...A,ref:rn(fe,m),onClick:Re(A.onClick,D),onKeyDown:Re(A.onKeyDown,x),onMouseDown:Re(A.onMouseDown,g)}),[x,g,D]);return{isOpen:t,onClose:n,headerId:h,bodyId:v,setBodyMounted:E,setHeaderMounted:y,dialogRef:l,overlayRef:m,getDialogProps:T,getDialogContainerProps:k,index:b}}function js(e,t){const n=e.current;d.useEffect(()=>{if(!(!e.current||!t))return Ps(e.current)},[t,e,n])}function Fs(e,...t){const n=d.useId(),r=e||n;return d.useMemo(()=>t.map(o=>`${o}-${r}`),[r,t])}var[Bs,zt]=Mn({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[Ls,we]=Mn({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Ht=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:n,children:r,autoFocus:o,trapFocus:a,initialFocusRef:s,finalFocusRef:i,returnFocusOnClose:u,blockScrollOnMount:l,allowPinchZoom:m,preserveScrollBarGap:f,motionPreset:h,lockFocusAcrossFrames:v,onCloseComplete:b}=t,p=_o("Modal",t),x={...Ms(t),autoFocus:o,trapFocus:a,initialFocusRef:s,finalFocusRef:i,returnFocusOnClose:u,blockScrollOnMount:l,allowPinchZoom:m,preserveScrollBarGap:f,motionPreset:h,lockFocusAcrossFrames:v};return c.jsx(Ls,{value:x,children:c.jsx(Bs,{value:p,children:c.jsx(We,{onExitComplete:b,children:x.isOpen&&c.jsx(Eo,{...n,children:r})})})})};Ht.displayName="Modal";var Fe="right-scroll-bar-position",Be="width-before-scroll-bar",Us="with-scroll-bars-hidden",$s="--removed-body-scroll-bar-size",Er=Xn(),ot=function(){},qe=d.forwardRef(function(e,t){var n=d.useRef(null),r=d.useState({onScrollCapture:ot,onWheelCapture:ot,onTouchMoveCapture:ot}),o=r[0],a=r[1],s=e.forwardProps,i=e.children,u=e.className,l=e.removeScrollBar,m=e.enabled,f=e.shards,h=e.sideCar,v=e.noIsolation,b=e.inert,p=e.allowPinchZoom,g=e.as,x=g===void 0?"div":g,w=e.gapMode,y=Gn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),_=h,E=Vn([n,t]),T=j(j({},y),o);return d.createElement(d.Fragment,null,m&&d.createElement(_,{sideCar:Er,removeScrollBar:l,shards:f,noIsolation:v,inert:b,setCallbacks:a,allowPinchZoom:!!p,lockRef:n,gapMode:w}),s?d.cloneElement(d.Children.only(i),j(j({},T),{ref:E})):d.createElement(x,j({},T,{className:u,ref:E}),i))});qe.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};qe.classNames={fullWidth:Be,zeroRight:Fe};var zs=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Hs(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=zs();return t&&e.setAttribute("nonce",t),e}function Ws(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Vs(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Gs=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Hs())&&(Ws(t,n),Vs(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},qs=function(){var e=Gs();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Cr=function(){var e=qs(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Ks={left:0,top:0,right:0,gap:0},at=function(e){return parseInt(e||"",10)||0},Xs=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[at(n),at(r),at(o)]},Ys=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Ks;var t=Xs(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Zs=Cr(),se="data-scroll-locked",Js=function(e,t,n,r){var o=e.left,a=e.top,s=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Us,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(se,`] {
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
  
  .`).concat(Fe,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(Be,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(Fe," .").concat(Fe,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Be," .").concat(Be,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(se,`] {
    `).concat($s,": ").concat(i,`px;
  }
`)},mn=function(){var e=parseInt(document.body.getAttribute(se)||"0",10);return isFinite(e)?e:0},Qs=function(){d.useEffect(function(){return document.body.setAttribute(se,(mn()+1).toString()),function(){var e=mn()-1;e<=0?document.body.removeAttribute(se):document.body.setAttribute(se,e.toString())}},[])},ei=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Qs();var a=d.useMemo(function(){return Ys(o)},[o]);return d.createElement(Zs,{styles:Js(a,!t,o,n?"":"!important")})},yt=!1;if(typeof window<"u")try{var ke=Object.defineProperty({},"passive",{get:function(){return yt=!0,!0}});window.addEventListener("test",ke,ke),window.removeEventListener("test",ke,ke)}catch{yt=!1}var te=yt?{passive:!1}:!1,ti=function(e){return e.tagName==="TEXTAREA"},Sr=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!ti(e)&&n[t]==="visible")},ni=function(e){return Sr(e,"overflowY")},ri=function(e){return Sr(e,"overflowX")},vn=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Nr(e,r);if(o){var a=Ar(e,r),s=a[1],i=a[2];if(s>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},oi=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},ai=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Nr=function(e,t){return e==="v"?ni(t):ri(t)},Ar=function(e,t){return e==="v"?oi(t):ai(t)},si=function(e,t){return e==="h"&&t==="rtl"?-1:1},ii=function(e,t,n,r,o){var a=si(e,window.getComputedStyle(t).direction),s=a*r,i=n.target,u=t.contains(i),l=!1,m=s>0,f=0,h=0;do{var v=Ar(e,i),b=v[0],p=v[1],g=v[2],x=p-g-a*b;(b||x)&&Nr(e,i)&&(f+=x,h+=b),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!u&&i!==document.body||u&&(t.contains(i)||t===i));return(m&&(Math.abs(f)<1||!o)||!m&&(Math.abs(h)<1||!o))&&(l=!0),l},Pe=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},gn=function(e){return[e.deltaX,e.deltaY]},bn=function(e){return e&&"current"in e?e.current:e},ci=function(e,t){return e[0]===t[0]&&e[1]===t[1]},li=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},ui=0,ne=[];function di(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(ui++)[0],a=d.useState(Cr)[0],s=d.useRef(e);d.useEffect(function(){s.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var p=Jo([e.lockRef.current],(e.shards||[]).map(bn),!0).filter(Boolean);return p.forEach(function(g){return g.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),p.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=d.useCallback(function(p,g){if("touches"in p&&p.touches.length===2)return!s.current.allowPinchZoom;var x=Pe(p),w=n.current,y="deltaX"in p?p.deltaX:w[0]-x[0],_="deltaY"in p?p.deltaY:w[1]-x[1],E,T=p.target,D=Math.abs(y)>Math.abs(_)?"h":"v";if("touches"in p&&D==="h"&&T.type==="range")return!1;var k=vn(D,T);if(!k)return!0;if(k?E=D:(E=D==="v"?"h":"v",k=vn(D,T)),!k)return!1;if(!r.current&&"changedTouches"in p&&(y||_)&&(r.current=E),!E)return!0;var A=r.current||E;return ii(A,g,p,A==="h"?y:_,!0)},[]),u=d.useCallback(function(p){var g=p;if(!(!ne.length||ne[ne.length-1]!==a)){var x="deltaY"in g?gn(g):Pe(g),w=t.current.filter(function(E){return E.name===g.type&&(E.target===g.target||g.target===E.shadowParent)&&ci(E.delta,x)})[0];if(w&&w.should){g.cancelable&&g.preventDefault();return}if(!w){var y=(s.current.shards||[]).map(bn).filter(Boolean).filter(function(E){return E.contains(g.target)}),_=y.length>0?i(g,y[0]):!s.current.noIsolation;_&&g.cancelable&&g.preventDefault()}}},[]),l=d.useCallback(function(p,g,x,w){var y={name:p,delta:g,target:x,should:w,shadowParent:fi(x)};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(_){return _!==y})},1)},[]),m=d.useCallback(function(p){n.current=Pe(p),r.current=void 0},[]),f=d.useCallback(function(p){l(p.type,gn(p),p.target,i(p,e.lockRef.current))},[]),h=d.useCallback(function(p){l(p.type,Pe(p),p.target,i(p,e.lockRef.current))},[]);d.useEffect(function(){return ne.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",u,te),document.addEventListener("touchmove",u,te),document.addEventListener("touchstart",m,te),function(){ne=ne.filter(function(p){return p!==a}),document.removeEventListener("wheel",u,te),document.removeEventListener("touchmove",u,te),document.removeEventListener("touchstart",m,te)}},[]);var v=e.removeScrollBar,b=e.inert;return d.createElement(d.Fragment,null,b?d.createElement(a,{styles:li(o)}):null,v?d.createElement(ei,{gapMode:e.gapMode}):null)}function fi(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const hi=Qo(Er,di);var Ir=d.forwardRef(function(e,t){return d.createElement(qe,j({},e,{ref:t,sideCar:hi}))});Ir.classNames=qe.classNames;function pi(e){const{autoFocus:t,trapFocus:n,dialogRef:r,initialFocusRef:o,blockScrollOnMount:a,allowPinchZoom:s,finalFocusRef:i,returnFocusOnClose:u,preserveScrollBarGap:l,lockFocusAcrossFrames:m,isOpen:f}=we(),[h,v]=Co();d.useEffect(()=>{!h&&v&&setTimeout(v)},[h,v]);const b=wr(r,f);return c.jsx(xr,{autoFocus:t,isDisabled:!n,initialFocusRef:o,finalFocusRef:i,restoreFocus:u,contentRef:r,lockFocusAcrossFrames:m,children:c.jsx(Ir,{removeScrollBar:!l,allowPinchZoom:s,enabled:b===1&&a,forwardProps:!0,children:e.children})})}var Wt=Rt((e,t)=>{const{className:n,children:r,containerProps:o,motionProps:a,...s}=e,{getDialogProps:i,getDialogContainerProps:u}=we(),l=i(s,t),m=u(o),f=ue("chakra-modal__content",n),h=zt(),v={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...h.dialog},b={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...h.dialogContainer},{motionPreset:p}=we();return c.jsx(pi,{children:c.jsx(Ve.div,{...m,className:"chakra-modal__content-container",tabIndex:-1,__css:b,children:c.jsx(yr,{preset:p,motionProps:a,className:f,...l,__css:v,children:r})})})});Wt.displayName="ModalContent";var mi=Ve(Ce.div),Vt=Rt((e,t)=>{const{className:n,transition:r,motionProps:o,...a}=e,s=ue("chakra-modal__overlay",n),u={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...zt().overlay},{motionPreset:l}=we(),f=o||(l==="none"?{}:zn);return c.jsx(mi,{...f,__css:u,ref:t,className:s,...a})});Vt.displayName="ModalOverlay";var Rr=Rt((e,t)=>{const{className:n,...r}=e,{bodyId:o,setBodyMounted:a}=we();d.useEffect(()=>(a(!0),()=>a(!1)),[a]);const s=ue("chakra-modal__body",n),i=zt();return c.jsx(Ve.div,{ref:t,className:s,id:o,...r,__css:i.body})});Rr.displayName="ModalBody";const wt=e=>{var t;return(t=new Date(e))==null?void 0:t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0,timeZone:"America/New_York"})},vi=()=>{var a,s;const e=Ge(),t=Se(i=>i.dashboard.info),[n,r]=d.useState(!1),{isLoading:o}=So();return c.jsxs("div",{className:"min-h-screen pt-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8 pb-3",children:[c.jsx("div",{className:"font-Matter-Medium text-xl mb-3.5",children:"Dashboard"}),c.jsxs("div",{className:"max-w-screen-lg w-full mx-auto grid grid-cols-12 gap-8 ",children:[c.jsxs(P,{to:"/admin/products",className:"col-span-12 md:col-span-6 h-40 bg-gradient-to-r from-blue-800 to-blue-300 rounded-sm px-8 py-5 cursor-pointer relative overflow-hidden flex flex-col justify-between",children:[o?c.jsx("div",{className:"m-auto",children:c.jsx(ge,{fill:"fill-white"})}):c.jsxs(d.Fragment,{children:[c.jsx("p",{className:"uppercase font-thin tracking-wider text-sm",children:"Products"}),c.jsx("h1",{className:"text-5xl font-semibold",children:t==null?void 0:t.productsCount}),c.jsxs("p",{className:"text-xs text-white/50",children:["Last created: ",wt(t==null?void 0:t.createdAt)]})]}),c.jsx("i",{className:"fas fa-box-open text-white/10 text-[200px] absolute -right-16 -top-0"})]}),c.jsxs("button",{onClick:()=>e("/admin/code"),className:"col-span-12 md:col-span-6 h-40 bg-gradient-to-r from-lime-800 to-lime-300 rounded-sm px-8 py-5 cursor-pointer flex flex-col justify-between relative overflow-hidden",children:[o?c.jsx("div",{className:"m-auto",children:c.jsx(ge,{fill:"fill-white"})}):c.jsxs(d.Fragment,{children:[c.jsx("p",{className:"uppercase font-thin tracking-wider text-sm",children:"Code"}),c.jsx("h1",{onClick:i=>{i.stopPropagation(),r(!n)},className:"text-5xl font-semibold w-fit",children:n?(a=t==null?void 0:t.code)==null?void 0:a.code:"****"}),c.jsxs("p",{className:"text-xs text-white/50",children:["Last updated: ",wt((s=t==null?void 0:t.code)==null?void 0:s.updatedAt)]})]}),c.jsx("i",{className:"fas fa-code-compare text-white/15 text-[200px] absolute -right-16 -top-0"})]})]})]})},xn=()=>c.jsx("svg",{width:16,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:c.jsx("path",{fill:"#d1d1d6",d:"M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"})}),gi=(e,t)=>{const n=d.useCallback(r=>{e.current&&!e.current.contains(r.target)&&t()},[e,t]);d.useEffect(()=>(document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}),[n])},bi=()=>{const[e,t]=d.useState(!1);return{show:e,openModal:()=>{t(!0)},closeModal:()=>{t(!1)}}},xi=({idAndName:e,deleteDocument:t,loading:n,hook:r})=>{const o=Ne(),a=new ce(jo),s=async()=>{o(I(0)),await t({id:e.id}).unwrap().then(()=>{a.play(),o(I(100)),o(M(!1)),r.closeModal()})};return c.jsxs(Ht,{isOpen:r.show,isCentered:!0,onClose:r.closeModal,children:[c.jsx(Vt,{}),c.jsx(Wt,{children:c.jsxs("div",{className:"bg-[#09090b] p-5 min-h-72 flex flex-col justify-between",children:[c.jsxs("p",{className:"font-Matter-Medium text-gray-400",children:["Are you sure you want to delete"," ",c.jsx("span",{className:"text-red-500 font-bold",children:e.name}),"?"]}),c.jsxs("div",{className:"flex items-center justify-end gap-3",children:[c.jsx("button",{className:"px-4 py-2 text-red-500 border-2 border-red-500 duration-200 hover:shadow-lg text-xs",onClick:r.closeModal,children:"No"}),c.jsx("button",{className:"px-4 py-2 bg-red-500 border-2 border-red-500 text-white duration-200 hover:shadow-lg text-xs hover:bg-red-600",onClick:s,children:n?c.jsx(ge,{fill:"fill-white"}):"Yes"})]})]})})]})},yi=({filteredProducts:e,productToBeEdited:t,productMenuRef:n,setIdAndName:r,openModal:o,setProductToBeEdited:a})=>{const s=Se(i=>i.auth.token);return c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"whitespace-nowrap px-4 pb-4 pt-2",children:c.jsxs("tr",{className:"bg-zinc-900",children:[c.jsx("th",{className:"px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none",children:c.jsx("div",{className:"text-xs -mx-1.5 -my-1 w-fit px-1.5 py-1 flex flex-nowrap items-center gap-2",children:"Name"})}),c.jsx("th",{className:"px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none",children:c.jsx("div",{className:"text-xs flex flex-nowrap items-center gap-2",children:"Quantity"})}),c.jsx("th",{className:"px-4 font-Matter-Regular text-star py-2 first:-ml-4 first:pl-6 last:pr-6 select-none",children:c.jsx("div",{className:"text-xs flex flex-nowrap items-center gap-2",children:"Date & Time"})}),c.jsx("th",{children:c.jsx("div",{className:"flex flex-nowrap items-center gap-2 invisible",children:"ghosthead"})})]})}),c.jsx("tbody",{children:e==null?void 0:e.map((i,u)=>{var l;return c.jsxs("tr",{className:"bg-zinc-800 z-1 h-[3.25rem] group [&_td]:focus-within:bg-zinc-900 [&_td]:hover:bg-zinc-900 relative",children:[c.jsx("td",{className:"px-2",children:c.jsx("div",{className:"m-0 w-full p-0 decoration-inherit hover:text-inherit hover:decoration-inherit !flex h-[3.25rem] items-center px-4 whitespace-nowrap",children:c.jsx("div",{className:"max-w-[15rem]",children:c.jsx("span",{className:"text-xs font-Matter-Regular truncate",children:i==null?void 0:i.productName})})})}),c.jsx("td",{children:c.jsx("p",{className:"text-xs font-Matter-Regular items-center px-4 whitespace-nowrap",children:i==null?void 0:i.quantity})}),c.jsx("td",{children:c.jsx("p",{className:"text-xs font-Matter-Regular items-center px-4 whitespace-nowrap",children:wt(i==null?void 0:i.createdAt)})}),c.jsx("td",{children:c.jsxs("div",{className:"",children:[t.open&&((l=t.product)==null?void 0:l.id)===(i==null?void 0:i.id)&&c.jsxs("div",{ref:n,className:"flex flex-col justify-center shadow-lg p-1.5 absolute z-40 w-28 h-fit bg-[#0f1119] -top-[44px] right-28",children:[c.jsx(P,{to:"/admin/product",state:{product:t.product,isEditMode:!0},className:"flex w-full text-xs text-zinc-400 px-2 py-1 hover:no-underline hover:bg-zinc-700 hover:text-zinc-400",children:"Edit"}),c.jsx(P,{to:`/code-validated/${s}/item`,state:{product:t.product},className:"flex w-full text-xs text-zinc-400 px-2 py-1 hover:no-underline hover:bg-zinc-700 hover:text-zinc-400",children:"View"}),c.jsx("button",{onClick:()=>{r({id:i==null?void 0:i.id,name:i==null?void 0:i.productName}),o()},className:"flex w-full text-xs text-zinc-400 px-2 py-1 hover:no-underline hover:bg-zinc-700 hover:text-zinc-400",children:"Delete"})]}),c.jsx("div",{onClick:()=>a({open:!0,product:i}),className:"m-0 w-full border-0 p-0 items-center px-4 relative flex justify-center",children:c.jsx("button",{className:"flex h-7 cursor-pointer items-center justify-center p-2 hover:bg-zinc-950 text-zinc-600",children:c.jsx("i",{className:"fa-solid fa-ellipsis-vertical"})})})]})})]},u)})})]})},wi=()=>{const[e,t]=d.useState(""),[n,r]=d.useState({id:"",name:""}),o=Se(g=>g.product.products),a=(o==null?void 0:o.length)===0,[s,i]=d.useState({open:!1,product:{id:null,productName:null}}),u=d.useRef(null),{openModal:l,show:m,closeModal:f}=bi();No();const[h,{isLoading:v}]=Ao(),b=o==null?void 0:o.filter(g=>g==null?void 0:g.productName.toLowerCase().includes(e.toLowerCase())),p=d.useCallback(()=>{i({open:!1,product:{id:null,productName:null}})},[]);return gi(u,p),c.jsxs(d.Fragment,{children:[c.jsx(xi,{idAndName:n,deleteDocument:h,loading:v,hook:{openModal:l,show:m,closeModal:f}}),c.jsx("div",{className:"min-h-screen py-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8",children:c.jsxs("div",{className:"max-w-screen-lg w-full mx-auto",children:[c.jsx("div",{className:"font-Matter-Medium text-xl mb-3.5",children:"Products"}),c.jsxs("div",{className:"flex justify-between",children:[c.jsxs("div",{className:"flex items-center font-Matter-Light border border-zinc-800 py-2 px-[16px] ",children:[c.jsx(xn,{}),c.jsx("input",{onChange:g=>t(g.target.value),className:"w-full h-full focus:outline-0 ml-2 bg-transparent text-xs",placeholder:"Search"})]}),c.jsx(P,{to:"/admin/product",className:"whitespace-nowrap w-fit px-4 duration-200 hover:no-underline text-center flex justify-center items-center font-Matter-Medium bg-lime-600 text-xs text-white py-2 hover:bg-lime-500",state:{isEditMode:!1},children:"Add product"})]}),c.jsx("div",{className:"bg-zinc-900 w-full mt-3",children:a?c.jsxs("div",{className:"flex flex-col justify-center max-w-48 w-full items-center mx-auto  py-10",children:[c.jsx("div",{className:" bg-zinc-800 h-12 w-12 flex justify-center items-center",children:c.jsx(xn,{})}),c.jsx("div",{className:"text-xs my-2",children:"No products"})]}):c.jsx(yi,{filteredProducts:b,productToBeEdited:s,productMenuRef:u,setIdAndName:r,openModal:l,setProductToBeEdited:i})})]})})]})},_i="/assets/product-updated-DcGutOZi.mp3";var yn={};/**
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
 */const Tr=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Ei=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=e[n++];t[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=e[n++],s=e[n++],i=e[n++],u=((o&7)<<18|(a&63)<<12|(s&63)<<6|i&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|s&63)}}return t.join("")},Or={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const a=e[o],s=o+1<e.length,i=s?e[o+1]:0,u=o+2<e.length,l=u?e[o+2]:0,m=a>>2,f=(a&3)<<4|i>>4;let h=(i&15)<<2|l>>6,v=l&63;u||(v=64,s||(h=64)),r.push(n[m],n[f],n[h],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Tr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ei(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const a=n[e.charAt(o++)],i=o<e.length?n[e.charAt(o)]:0;++o;const l=o<e.length?n[e.charAt(o)]:64;++o;const f=o<e.length?n[e.charAt(o)]:64;if(++o,a==null||i==null||l==null||f==null)throw new Ci;const h=a<<2|i>>4;if(r.push(h),l!==64){const v=i<<4&240|l>>2;if(r.push(v),f!==64){const b=l<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ci extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Si=function(e){const t=Tr(e);return Or.encodeByteArray(t,!0)},$e=function(e){return Si(e).replace(/\./g,"")},Ni=function(e){try{return Or.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ai(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ii=()=>Ai().__FIREBASE_DEFAULTS__,Ri=()=>{if(typeof process>"u"||typeof yn>"u")return;const e=yn.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ti=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ni(e[1]);return t&&JSON.parse(t)},Dr=()=>{try{return Ii()||Ri()||Ti()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Oi=e=>{var t,n;return(n=(t=Dr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Di=e=>{const t=Oi(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},kr=()=>{var e;return(e=Dr())===null||e===void 0?void 0:e.config};/**
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
 */class ki{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Pi(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,a=e.sub||e.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},e);return[$e(JSON.stringify(n)),$e(JSON.stringify(s)),""].join(".")}function Mi(){try{return typeof indexedDB=="object"}catch{return!1}}function ji(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var a;t(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const Fi="FirebaseError";class de extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Fi,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,a=this.errors[t],s=a?Bi(a,r):"Error",i=`${this.serviceName}: ${s} (${o}).`;return new de(o,i,r)}}function Bi(e,t){return e.replace(Li,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const Li=/\{\$([^}]+)}/g;function _t(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const a=e[o],s=t[o];if(wn(a)&&wn(s)){if(!_t(a,s))return!1}else if(a!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function wn(e){return e!==null&&typeof e=="object"}/**
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
 */class Ui{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ki;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zi(t))try{this.getOrInitializeService({instanceIdentifier:W})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(t=W){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=W){return this.instances.has(t)}getOptions(t=W){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(a);r===i&&s.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(o,a);const s=this.instances.get(o);return s&&t(s,o),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$i(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=W){return this.component?this.component.multipleInstances?t:W:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $i(e){return e===W?void 0:e}function zi(e){return e.instantiationMode==="EAGER"}/**
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
 */class Hi{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ui(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var C;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(C||(C={}));const Wi={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},Vi=C.INFO,Gi={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},qi=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=Gi[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ki{constructor(t){this.name=t,this._logLevel=Vi,this._logHandler=qi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in C))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wi[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...t),this._logHandler(this,C.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...t),this._logHandler(this,C.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,C.INFO,...t),this._logHandler(this,C.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,C.WARN,...t),this._logHandler(this,C.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...t),this._logHandler(this,C.ERROR,...t)}}const Xi=(e,t)=>t.some(n=>e instanceof n);let _n,En;function Yi(){return _n||(_n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zi(){return En||(En=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mr=new WeakMap,Et=new WeakMap,jr=new WeakMap,st=new WeakMap,Gt=new WeakMap;function Ji(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n($(e.result)),o()},s=()=>{r(e.error),o()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Mr.set(n,e)}).catch(()=>{}),Gt.set(t,e),t}function Qi(e){if(Et.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),o()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});Et.set(e,t)}let Ct={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Et.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ec(e){Ct=e(Ct)}function tc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(it(this),t,...n);return jr.set(r,t.sort?t.sort():[t]),$(r)}:Zi().includes(e)?function(...t){return e.apply(it(this),t),$(Mr.get(this))}:function(...t){return $(e.apply(it(this),t))}}function nc(e){return typeof e=="function"?tc(e):(e instanceof IDBTransaction&&Qi(e),Xi(e,Yi())?new Proxy(e,Ct):e)}function $(e){if(e instanceof IDBRequest)return Ji(e);if(st.has(e))return st.get(e);const t=nc(e);return t!==e&&(st.set(e,t),Gt.set(t,e)),t}const it=e=>Gt.get(e);function rc(e,t,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const s=indexedDB.open(e,t),i=$(s);return r&&s.addEventListener("upgradeneeded",u=>{r($(s.result),u.oldVersion,u.newVersion,$(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),i.then(u=>{a&&u.addEventListener("close",()=>a()),o&&u.addEventListener("versionchange",l=>o(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const oc=["get","getKey","getAll","getAllKeys","count"],ac=["put","add","delete","clear"],ct=new Map;function Cn(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ct.get(t))return ct.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=ac.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||oc.includes(n)))return;const a=async function(s,...i){const u=this.transaction(s,o?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),o&&u.done]))[0]};return ct.set(t,a),a}ec(e=>({...e,get:(t,n,r)=>Cn(t,n)||e.get(t,n,r),has:(t,n)=>!!Cn(t,n)||e.has(t,n)}));/**
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
 */class sc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ic(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ic(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const St="@firebase/app",Sn="0.10.5";/**
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
 */const Y=new Ki("@firebase/app"),cc="@firebase/app-compat",lc="@firebase/analytics-compat",uc="@firebase/analytics",dc="@firebase/app-check-compat",fc="@firebase/app-check",hc="@firebase/auth",pc="@firebase/auth-compat",mc="@firebase/database",vc="@firebase/database-compat",gc="@firebase/functions",bc="@firebase/functions-compat",xc="@firebase/installations",yc="@firebase/installations-compat",wc="@firebase/messaging",_c="@firebase/messaging-compat",Ec="@firebase/performance",Cc="@firebase/performance-compat",Sc="@firebase/remote-config",Nc="@firebase/remote-config-compat",Ac="@firebase/storage",Ic="@firebase/storage-compat",Rc="@firebase/firestore",Tc="@firebase/vertexai-preview",Oc="@firebase/firestore-compat",Dc="firebase",kc="10.12.2";/**
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
 */const Nt="[DEFAULT]",Pc={[St]:"fire-core",[cc]:"fire-core-compat",[uc]:"fire-analytics",[lc]:"fire-analytics-compat",[fc]:"fire-app-check",[dc]:"fire-app-check-compat",[hc]:"fire-auth",[pc]:"fire-auth-compat",[mc]:"fire-rtdb",[vc]:"fire-rtdb-compat",[gc]:"fire-fn",[bc]:"fire-fn-compat",[xc]:"fire-iid",[yc]:"fire-iid-compat",[wc]:"fire-fcm",[_c]:"fire-fcm-compat",[Ec]:"fire-perf",[Cc]:"fire-perf-compat",[Sc]:"fire-rc",[Nc]:"fire-rc-compat",[Ac]:"fire-gcs",[Ic]:"fire-gcs-compat",[Rc]:"fire-fst",[Oc]:"fire-fst-compat",[Tc]:"fire-vertex","fire-js":"fire-js",[Dc]:"fire-js-all"};/**
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
 */const ze=new Map,Mc=new Map,At=new Map;function Nn(e,t){try{e.container.addComponent(t)}catch(n){Y.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function He(e){const t=e.name;if(At.has(t))return Y.debug(`There were multiple attempts to register component ${t}.`),!1;At.set(t,e);for(const n of ze.values())Nn(n,e);for(const n of Mc.values())Nn(n,e);return!0}function jc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Fc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},z=new Pr("app","Firebase",Fc);/**
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
 */class Bc{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}/**
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
 */const Lc=kc;function Fr(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Nt,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw z.create("bad-app-name",{appName:String(o)});if(n||(n=kr()),!n)throw z.create("no-options");const a=ze.get(o);if(a){if(_t(n,a.options)&&_t(r,a.config))return a;throw z.create("duplicate-app",{appName:o})}const s=new Hi(o);for(const u of At.values())s.addComponent(u);const i=new Bc(n,r,s);return ze.set(o,i),i}function Uc(e=Nt){const t=ze.get(e);if(!t&&e===Nt&&kr())return Fr();if(!t)throw z.create("no-app",{appName:e});return t}function ie(e,t,n){var r;let o=(r=Pc[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const i=[`Unable to register library "${o}" with version "${t}":`];a&&i.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&i.push("and"),s&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Y.warn(i.join(" "));return}He(new _e(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const $c="firebase-heartbeat-database",zc=1,Ee="firebase-heartbeat-store";let lt=null;function Br(){return lt||(lt=rc($c,zc,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ee)}catch(n){console.warn(n)}}}}).catch(e=>{throw z.create("idb-open",{originalErrorMessage:e.message})})),lt}async function Hc(e){try{const n=(await Br()).transaction(Ee),r=await n.objectStore(Ee).get(Lr(e));return await n.done,r}catch(t){if(t instanceof de)Y.warn(t.message);else{const n=z.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Y.warn(n.message)}}}async function An(e,t){try{const r=(await Br()).transaction(Ee,"readwrite");await r.objectStore(Ee).put(t,Lr(e)),await r.done}catch(n){if(n instanceof de)Y.warn(n.message);else{const r=z.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Y.warn(r.message)}}}function Lr(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Wc=1024,Vc=30*24*60*60*1e3;class Gc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=In();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(s=>s.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Vc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=In(),{heartbeatsToSend:r,unsentEntries:o}=qc(this._heartbeatsCache.heartbeats),a=$e(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function In(){return new Date().toISOString().substring(0,10)}function qc(e,t=Wc){const n=[];let r=e.slice();for(const o of e){const a=n.find(s=>s.agent===o.agent);if(a){if(a.dates.push(o.date),Rn(n)>t){a.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Rn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mi()?ji().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return An(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return An(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Rn(e){return $e(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Xc(e){He(new _e("platform-logger",t=>new sc(t),"PRIVATE")),He(new _e("heartbeat",t=>new Gc(t),"PRIVATE")),ie(St,Sn,e),ie(St,Sn,"esm2017"),ie("fire-js","")}Xc("");/**
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
 */const Ur="firebasestorage.googleapis.com",$r="storageBucket",Yc=2*60*1e3,Zc=10*60*1e3;/**
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
 */class N extends de{constructor(t,n,r=0){super(ut(t),`Firebase Storage: ${n} (${ut(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,N.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ut(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var S;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(S||(S={}));function ut(e){return"storage/"+e}function qt(){const e="An unknown error occurred, please check the error payload for server response.";return new N(S.UNKNOWN,e)}function Jc(e){return new N(S.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Qc(e){return new N(S.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function el(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new N(S.UNAUTHENTICATED,e)}function tl(){return new N(S.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nl(e){return new N(S.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function rl(){return new N(S.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ol(){return new N(S.CANCELED,"User canceled the upload/download.")}function al(e){return new N(S.INVALID_URL,"Invalid URL '"+e+"'.")}function sl(e){return new N(S.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function il(){return new N(S.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$r+"' property when initializing the app?")}function cl(){return new N(S.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ll(){return new N(S.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ul(e){return new N(S.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function It(e){return new N(S.INVALID_ARGUMENT,e)}function zr(){return new N(S.APP_DELETED,"The Firebase app was deleted.")}function dl(e){return new N(S.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ve(e,t){return new N(S.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function pe(e){throw new N(S.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class O{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=O.makeFromUrl(t,n)}catch{return new O(t,"")}if(r.path==="")return r;throw sl(t)}static makeFromUrl(t,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const s="(/(.*))?$",i=new RegExp("^gs://"+o+s,"i"),u={bucket:1,path:3};function l(_){_.path_=decodeURIComponent(_.path)}const m="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${m}/b/${o}/o${h}`,"i"),b={bucket:1,path:3},p=n===Ur?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",x=new RegExp(`^https?://${p}/${o}/${g}`,"i"),y=[{regex:i,indices:u,postModify:a},{regex:v,indices:b,postModify:l},{regex:x,indices:{bucket:1,path:2},postModify:l}];for(let _=0;_<y.length;_++){const E=y[_],T=E.regex.exec(t);if(T){const D=T[E.indices.bucket];let k=T[E.indices.path];k||(k=""),r=new O(D,k),E.postModify(r);break}}if(r==null)throw al(t);return r}}class fl{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function hl(e,t,n){let r=1,o=null,a=null,s=!1,i=0;function u(){return i===2}let l=!1;function m(...g){l||(l=!0,t.apply(null,g))}function f(g){o=setTimeout(()=>{o=null,e(v,u())},g)}function h(){a&&clearTimeout(a)}function v(g,...x){if(l){h();return}if(g){h(),m.call(null,g,...x);return}if(u()||s){h(),m.call(null,g,...x);return}r<64&&(r*=2);let y;i===1?(i=2,y=0):y=(r+Math.random())*1e3,f(y)}let b=!1;function p(g){b||(b=!0,h(),!l&&(o!==null?(g||(i=2),clearTimeout(o),f(0)):g||(i=1)))}return f(0),a=setTimeout(()=>{s=!0,p(!0)},n),p}function pl(e){e(!1)}/**
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
 */function ml(e){return e!==void 0}function vl(e){return typeof e=="object"&&!Array.isArray(e)}function Kt(e){return typeof e=="string"||e instanceof String}function Tn(e){return Xt()&&e instanceof Blob}function Xt(){return typeof Blob<"u"}function On(e,t,n,r){if(r<t)throw It(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw It(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Yt(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Hr(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const o=t(r)+"="+t(e[r]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
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
 */function gl(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,a=t.indexOf(e)!==-1;return n||o||a}/**
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
 */class bl{constructor(t,n,r,o,a,s,i,u,l,m,f,h=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=s,this.callback_=i,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=m,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,b)=>{this.resolve_=v,this.reject_=b,this.start_()})}start_(){const t=(r,o)=>{if(o){r(!1,new Me(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const s=i=>{const u=i.loaded,l=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&a.addUploadProgressListener(s),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(s),this.pendingConnection_=null;const i=a.getErrorCode()===K.NO_ERROR,u=a.getStatus();if(!i||gl(u,this.additionalRetryCodes_)&&this.retry){const m=a.getErrorCode()===K.ABORT;r(!1,new Me(!1,null,m));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new Me(l,a))})},n=(r,o)=>{const a=this.resolve_,s=this.reject_,i=o.connection;if(o.wasSuccessCode)try{const u=this.callback_(i,i.getResponse());ml(u)?a(u):a()}catch(u){s(u)}else if(i!==null){const u=qt();u.serverResponse=i.getErrorText(),this.errorCallback_?s(this.errorCallback_(i,u)):s(u)}else if(o.canceled){const u=this.appDelete_?zr():ol();s(u)}else{const u=rl();s(u)}};this.canceled_?n(!1,new Me(!1,null,!0)):this.backoffId_=hl(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&pl(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Me{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function xl(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function yl(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function wl(e,t){t&&(e["X-Firebase-GMPID"]=t)}function _l(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function El(e,t,n,r,o,a,s=!0){const i=Hr(e.urlParams),u=e.url+i,l=Object.assign({},e.headers);return wl(l,t),xl(l,n),yl(l,a),_l(l,r),new bl(u,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,s)}/**
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
 */function Cl(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Sl(...e){const t=Cl();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Xt())return new Blob(e);throw new N(S.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Nl(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function Al(e){if(typeof atob>"u")throw ul("base-64");return atob(e)}/**
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
 */const F={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class dt{constructor(t,n){this.data=t,this.contentType=n||null}}function Il(e,t){switch(e){case F.RAW:return new dt(Wr(t));case F.BASE64:case F.BASE64URL:return new dt(Vr(e,t));case F.DATA_URL:return new dt(Tl(t),Ol(t))}throw qt()}function Wr(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const a=r,s=e.charCodeAt(++n);r=65536|(a&1023)<<10|s&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function Rl(e){let t;try{t=decodeURIComponent(e)}catch{throw ve(F.DATA_URL,"Malformed data URL.")}return Wr(t)}function Vr(e,t){switch(e){case F.BASE64:{const o=t.indexOf("-")!==-1,a=t.indexOf("_")!==-1;if(o||a)throw ve(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case F.BASE64URL:{const o=t.indexOf("+")!==-1,a=t.indexOf("/")!==-1;if(o||a)throw ve(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Al(t)}catch(o){throw o.message.includes("polyfill")?o:ve(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class Gr{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw ve(F.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Dl(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function Tl(e){const t=new Gr(e);return t.base64?Vr(F.BASE64,t.rest):Rl(t.rest)}function Ol(e){return new Gr(e).contentType}function Dl(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class U{constructor(t,n){let r=0,o="";Tn(t)?(this.data_=t,r=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(Tn(this.data_)){const r=this.data_,o=Nl(r,t,n);return o===null?null:new U(o)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new U(r,!0)}}static getBlob(...t){if(Xt()){const n=t.map(r=>r instanceof U?r.data_:r);return new U(Sl.apply(null,n))}else{const n=t.map(s=>Kt(s)?Il(F.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const o=new Uint8Array(r);let a=0;return n.forEach(s=>{for(let i=0;i<s.length;i++)o[a++]=s[i]}),new U(o,!0)}}uploadData(){return this.data_}}/**
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
 */function qr(e){let t;try{t=JSON.parse(e)}catch{return null}return vl(t)?t:null}/**
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
 */function kl(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Pl(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Kr(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Ml(e,t){return t}class R{constructor(t,n,r,o){this.server=t,this.local=n||t,this.writable=!!r,this.xform=o||Ml}}let je=null;function jl(e){return!Kt(e)||e.length<2?e:Kr(e)}function Xr(){if(je)return je;const e=[];e.push(new R("bucket")),e.push(new R("generation")),e.push(new R("metageneration")),e.push(new R("name","fullPath",!0));function t(a,s){return jl(s)}const n=new R("name");n.xform=t,e.push(n);function r(a,s){return s!==void 0?Number(s):s}const o=new R("size");return o.xform=r,e.push(o),e.push(new R("timeCreated")),e.push(new R("updated")),e.push(new R("md5Hash",null,!0)),e.push(new R("cacheControl",null,!0)),e.push(new R("contentDisposition",null,!0)),e.push(new R("contentEncoding",null,!0)),e.push(new R("contentLanguage",null,!0)),e.push(new R("contentType",null,!0)),e.push(new R("metadata","customMetadata",!0)),je=e,je}function Fl(e,t){function n(){const r=e.bucket,o=e.fullPath,a=new O(r,o);return t._makeStorageReference(a)}Object.defineProperty(e,"ref",{get:n})}function Bl(e,t,n){const r={};r.type="file";const o=n.length;for(let a=0;a<o;a++){const s=n[a];r[s.local]=s.xform(r,t[s.server])}return Fl(r,e),r}function Yr(e,t,n){const r=qr(t);return r===null?null:Bl(e,r,n)}function Ll(e,t,n,r){const o=qr(t);if(o===null||!Kt(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const s=encodeURIComponent;return a.split(",").map(l=>{const m=e.bucket,f=e.fullPath,h="/b/"+s(m)+"/o/"+s(f),v=Yt(h,n,r),b=Hr({alt:"media",token:l});return v+b})[0]}function Ul(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const a=t[o];a.writable&&(n[a.server]=e[a.local])}return JSON.stringify(n)}class Zr{constructor(t,n,r,o){this.url=t,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Jr(e){if(!e)throw qt()}function $l(e,t){function n(r,o){const a=Yr(e,o,t);return Jr(a!==null),a}return n}function zl(e,t){function n(r,o){const a=Yr(e,o,t);return Jr(a!==null),Ll(a,o,e.host,e._protocol)}return n}function Qr(e){function t(n,r){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=tl():o=el():n.getStatus()===402?o=Qc(e.bucket):n.getStatus()===403?o=nl(e.path):o=r,o.status=n.getStatus(),o.serverResponse=r.serverResponse,o}return t}function Hl(e){const t=Qr(e);function n(r,o){let a=t(r,o);return r.getStatus()===404&&(a=Jc(e.path)),a.serverResponse=o.serverResponse,a}return n}function Wl(e,t,n){const r=t.fullServerUrl(),o=Yt(r,e.host,e._protocol),a="GET",s=e.maxOperationRetryTime,i=new Zr(o,a,zl(e,n),s);return i.errorHandler=Hl(t),i}function Vl(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Gl(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=Vl(null,t)),r}function ql(e,t,n,r,o){const a=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function i(){let y="";for(let _=0;_<2;_++)y=y+Math.random().toString().slice(2);return y}const u=i();s["Content-Type"]="multipart/related; boundary="+u;const l=Gl(t,r,o),m=Ul(l,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,h=`\r
--`+u+"--",v=U.getBlob(f,r,h);if(v===null)throw cl();const b={name:l.fullPath},p=Yt(a,e.host,e._protocol),g="POST",x=e.maxUploadRetryTime,w=new Zr(p,g,$l(e,n),x);return w.urlParams=b,w.headers=s,w.body=v.uploadData(),w.errorHandler=Qr(t),w}class Kl{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=K.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=K.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=K.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,o){if(this.sent_)throw pe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Xl extends Kl{initXhr(){this.xhr_.responseType="text"}}function eo(){return new Xl}/**
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
 */class Z{constructor(t,n){this._service=t,n instanceof O?this._location=n:this._location=O.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Z(t,n)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Kr(this._location.path)}get storage(){return this._service}get parent(){const t=kl(this._location.path);if(t===null)return null;const n=new O(this._location.bucket,t);return new Z(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw dl(t)}}function Yl(e,t,n){e._throwIfRoot("uploadBytes");const r=ql(e.storage,e._location,Xr(),new U(t,!0),n);return e.storage.makeRequestWithTokens(r,eo).then(o=>({metadata:o,ref:e}))}function Zl(e){e._throwIfRoot("getDownloadURL");const t=Wl(e.storage,e._location,Xr());return e.storage.makeRequestWithTokens(t,eo).then(n=>{if(n===null)throw ll();return n})}function Jl(e,t){const n=Pl(e._location.path,t),r=new O(e._location.bucket,n);return new Z(e.storage,r)}/**
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
 */function Ql(e){return/^[A-Za-z]+:\/\//.test(e)}function eu(e,t){return new Z(e,t)}function to(e,t){if(e instanceof Zt){const n=e;if(n._bucket==null)throw il();const r=new Z(n,n._bucket);return t!=null?to(r,t):r}else return t!==void 0?Jl(e,t):e}function tu(e,t){if(t&&Ql(t)){if(e instanceof Zt)return eu(e,t);throw It("To use ref(service, url), the first argument must be a Storage instance.")}else return to(e,t)}function Dn(e,t){const n=t==null?void 0:t[$r];return n==null?null:O.makeFromBucketSpec(n,e)}function nu(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken=typeof o=="string"?o:Pi(o,e.app.options.projectId))}class Zt{constructor(t,n,r,o,a){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=Ur,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Yc,this._maxUploadRetryTime=Zc,this._requests=new Set,o!=null?this._bucket=O.makeFromBucketSpec(o,this._host):this._bucket=Dn(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=Dn(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){On("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){On("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Z(this,t)}_makeRequest(t,n,r,o,a=!0){if(this._deleted)return new fl(zr());{const s=El(t,this._appId,r,o,n,this._firebaseVersion,a);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,o).getPromise()}}const kn="@firebase/storage",Pn="0.12.5";/**
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
 */const no="storage";function ru(e,t,n){return e=Ke(e),Yl(e,t,n)}function ou(e){return e=Ke(e),Zl(e)}function au(e,t){return e=Ke(e),tu(e,t)}function su(e=Uc(),t){e=Ke(e);const r=jc(e,no).getImmediate({identifier:t}),o=Di("storage");return o&&iu(r,...o),r}function iu(e,t,n,r={}){nu(e,t,n,r)}function cu(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Zt(n,r,o,t,Lc)}function lu(){He(new _e(no,cu,"PUBLIC").setMultipleInstances(!0)),ie(kn,Pn,""),ie(kn,Pn,"esm2017")}lu();var uu="firebase",du="10.12.2";/**
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
 */ie(uu,du,"app");const fu={apiKey:"AIzaSyA70Yl-Xf-ZvvHdQV317yZm8nz8qS_LU8M",authDomain:"budzofboston-e47c7.firebaseapp.com",databaseURL:"https://budzofboston-e47c7-default-rtdb.firebaseio.com",projectId:"budzofboston-e47c7",storageBucket:"budzofboston-e47c7.appspot.com",messagingSenderId:"127046953971",appId:"1:127046953971:web:83f302a87785c480870086"},hu=Fr(fu),pu=async e=>{const t=su(hu),n=au(t,"images/"+(e==null?void 0:e.name));try{const r=await ru(n,e);return{url:await ou(r.ref),size:Math.round(r.metadata.size/1024)}}catch(r){return console.error("Error uploading file:",r),null}},mu=e=>{const[t,n]=d.useState({productName:"",quantity:0,description:"",image:""});return d.useEffect(()=>{e&&n(o=>({...o,productName:e==null?void 0:e.productName,image:e==null?void 0:e.image,quantity:e==null?void 0:e.quantity,description:e==null?void 0:e.description}))},[e]),{handleInput:o=>{const{name:a,value:s,type:i}=o.target,u=i==="number"?+s:s;n(l=>({...l,[a]:u}))},inputs:t,setInputs:n}},vu=({editPhotoHandler:e,inputs:t,handleInput:n,handleSubmit:r,isEditMode:o,loadingCreate:a,loadingUpdate:s})=>c.jsxs("form",{className:"flex flex-col gap-y-4 border-[1px] border-zinc-800 rounded-lg py-12 px-8 bg-[#141418]",children:[c.jsxs("div",{className:"grid grid-cols-12 gap-10",children:[c.jsx("div",{className:"col-span-12 md:col-span-5",children:"Upload an image of your product"}),c.jsxs("div",{className:"col-span-12 md:col-span-7 flex justify-center mx-auto items-center",children:[c.jsx("input",{id:"image-file",type:"file",onChange:e,className:"hidden",name:"image"}),c.jsx("label",{htmlFor:"image-file",className:"bg-zinc-950 w-full p-10 rounded-md",children:t.image?c.jsx("img",{src:t.image,alt:"Budz of Boston",className:"object-cover h-full w-full bg-zinc-900 rounded-md"}):c.jsxs("div",{className:"flex flex-col justify-center items-center",children:[c.jsx("i",{className:"fa-solid fa-cloud-arrow-up fa-xl mb-2 bg-gray-800 rounded-full flex justify-center items-center h-12 w-12 text-gray-200"}),c.jsx("p",{className:"font-Matter-Regular underline text-gray-500",children:"Click to add photo"})]})})]})]}),c.jsx("div",{className:"h-[1px] w-full bg-zinc-800 my-12"}),c.jsxs("div",{className:"grid grid-cols-12 gap-10",children:[c.jsx("div",{className:"col-span-12 md:col-span-5",children:"Product details"}),c.jsxs("div",{className:"col-span-12 md:col-span-7 grid gap-6",children:[c.jsxs("div",{className:"flex flex-col",children:[c.jsx("label",{htmlFor:"name",className:"text-xs text-zinc-300 mb-1",children:"Product name"}),c.jsx("input",{type:"text",name:"productName",onChange:n,value:t.productName||"",className:"border-zinc-700 border-[1px] px-3 text-xs text-white bg-transparent h-10 focus:outline-none input-box"})]}),c.jsxs("div",{className:"flex flex-col",children:[c.jsx("label",{htmlFor:"quantity",className:"text-xs text-zinc-300 mb-1",children:"Quantity"}),c.jsx("input",{type:"number",name:"quantity",onChange:n,value:t.quantity||"",className:"border-zinc-700 border-[1px] px-3 text-white bg-transparent h-10 focus:outline-none text-xs input-box"})]}),c.jsxs("div",{className:"flex flex-col",children:[c.jsx("label",{htmlFor:"description",className:"text-xs text-zinc-300 mb-1",children:"Description"}),c.jsx("textarea",{id:"description",name:"description",rows:5,value:t.description||"",onChange:n,"aria-label":"Enter description",className:"border-zinc-700 border-[1px] p-3 text-white bg-transparent focus:outline-none text-xs input-box"})]})]})]}),c.jsx("div",{className:"h-[1px] w-full bg-zinc-800 my-12"}),c.jsxs("button",{onClick:r,className:"mt-5 cursor-pointer text-sm bg-lime-600 font-bold text-white w-fit px-3 py-2 hover:bg-lime-500 duration-200 flex self-end items-center",children:[a||s&&c.jsx(ge,{fill:"fill-white"}),o?`Updat${s?"ing...":"e"}`:`Creat${a?"ing...":"e"}`]})]}),gu=()=>{const e=Ne(),t=Ge(),{state:n}=Io(),r=n==null?void 0:n.product,o=n==null?void 0:n.isEditMode,a=new ce(_i),{handleInput:s,inputs:i,setInputs:u}=mu(r),[l,{isLoading:m}]=Ro(),[f,{isLoading:h}]=To(),v=async p=>{p.preventDefault(),o?(e(I(0)),await f({...i,id:r==null?void 0:r.id}).unwrap().then(()=>{e(I(100)),a.play(),e(M(!1)),t("/admin/products")}).catch(g=>{e(I(0)),e(M(!1)),console.error(g)})):await l(i).unwrap().then(()=>{e(I(100)),a.play(),e(M(!1)),t("/admin/products")}).catch(g=>{e(I(0)),e(M(!1)),console.error(g)})},b=async p=>{const g=await pu(p.target.files[0]);u(x=>({...x,image:g==null?void 0:g.url})),p.target.value=""};return c.jsxs("div",{className:"flex flex-col gap-y-8 py-20 w-full lg:max-w-screen-md mx-auto px-3 md:px-6",children:[c.jsxs(P,{to:"/admin/products",className:"w-fit border border-zinc-900 bg-zinc-900 rounded-md  px-3.5 py-1.5 flex items-center hover:no-underline group hover:bg-zinc-800 duration-300",children:[c.jsx("i",{className:"fas fa-chevron-left fa-xs mr-2"}),c.jsx("p",{className:"font-Matter-Regular text-sm mt-0.5",children:"Back to products"})]}),c.jsx(vu,{editPhotoHandler:b,inputs:i,handleInput:s,handleSubmit:v,isEditMode:o,loadingCreate:m,loadingUpdate:h})]})},bu="/assets/cartoon-blink-fast-CYAXvoX6.mp3",xu="/assets/ascent-cartoon-top-toes-BnJkqREh.mp3",yu=e=>{const[t,n]=d.useState({code:"",id:0});return d.useEffect(()=>{e&&n(o=>{var a,s;return{...o,code:(a=e==null?void 0:e.code)==null?void 0:a.code,id:(s=e==null?void 0:e.code)==null?void 0:s.id}})},[e]),{handleInput:o=>{const{name:a,value:s}=o.target;n(i=>({...i,[a]:s}))},inputs:t,setInputs:n}},wu=({isOpen:e,onClose:t,isEditMode:n,handleInput:r,inputs:o,handleSubmit:a})=>c.jsxs(Ht,{isOpen:e,onClose:t,isCentered:!0,children:[c.jsx(Vt,{}),c.jsx(Wt,{className:"h-32",children:c.jsxs(Rr,{className:" bg-zinc-900 text-zinc-300 flex flex-col justify-center",children:[c.jsx(jn,{sentence:n?"Update":"Enter a code",speed:60,text:"text-xs"}),c.jsxs("div",{className:"flex items-center gap-2 mt-1.5",children:[c.jsx("input",{onChange:r,name:"code",type:"text","aria-label":"Enter code",className:"input-box focus:outline-none bg-zinc-800 text-zinc-300 text-xs px-3 py-2 h-9 w-full",value:o.code||"",onKeyDown:s=>s.key==="Enter"&&a(s)}),c.jsx("i",{onClick:a,className:`cursor-pointer text-sm text-lime-400 hover:text-lime-500 duration-300 w-fit px-3 py-2 fa-solid ${n?"fa-pen-to-square":"fa-code"}`})]})]})})]}),_u=()=>{const e=Ne(),{isOpen:t,onOpen:n,onClose:r}=Es(),o=new ce(bu),a=new ce(xu),[s]=Oo(),[i]=Do(),{isLoading:u}=ko(),l=Se(g=>g.code),m=!!(l!=null&&l.code),{handleInput:f,inputs:h}=yu(l),[v,b]=d.useState(!1),p=async g=>{g.preventDefault(),e(I(0)),m?await i(h).unwrap().then(()=>{e(I(100)),o.play(),e(M(!1)),r(),b(!0)}).catch(x=>{e(I(0)),e(M(!1)),console.error(x)}):await s(h).unwrap().then(()=>{e(I(100)),a.play(),e(M(!1)),r(),b(!0)}).catch(x=>{e(I(0)),e(M(!1)),console.error(x)})};return c.jsxs(d.Fragment,{children:[c.jsx(wu,{isOpen:t,onClose:r,isEditMode:m,handleInput:f,inputs:h,handleSubmit:p}),c.jsx("div",{className:"min-h-screen pt-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8 pb-3",children:c.jsxs("div",{className:"max-w-screen-lg w-full mx-auto",children:[c.jsx("div",{className:"font-Matter-Medium text-xl mb-3.5",children:"Code"}),c.jsx("div",{onClick:()=>{n(),b(!1)},className:"w-fit min-w-40 h-40 border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center text-center group hover:bg-[#121214] duration-200 cursor-pointer px-4",children:u?c.jsx(ge,{}):c.jsxs(d.Fragment,{children:[c.jsx(jn,{sentence:m?"Update":"Create",speed:50,text:"text-xs"}),m?c.jsx("p",{onClick:g=>{g.stopPropagation(),b(!v)},className:"relative z-10 text-sm text-lime-400 mt-2 font-bold hover:bg-zinc-950 hover:rounded-md p-1 duration-200",children:v?h.code:"****"}):c.jsx("i",{className:"mt-2 fa-code text-lime-400 text-sm fa-solid"})]})})]})})]})},Eu=e=>[{linkKey:"/admin/dashboard",textKey:"Dashboard",icon:"fa-solid fa-chart-column",isActive:e==="dashboard"},{linkKey:"/admin/products",textKey:"Products",icon:"fa-solid fa-boxes-packing",isActive:e==="products"},{linkKey:"/admin/code",textKey:"Code",icon:"fa-solid fa-code",isActive:e==="code"}],Cu=()=>{const e=Po()["*"],t=Ge(),n=Ne(),r=new ce(Fn),o=Se(s=>s.auth),a=()=>{n(I(0)),r.play(),Bn.purge(),n(Ln()),n(I(100)),n(M(!1)),t("/auth/login")};return c.jsxs("div",{className:"w-[240px]",children:[c.jsx("div",{className:"px-3 pt-5 mb-10",children:c.jsx(P,{to:`/code-validated/${o==null?void 0:o.token}/items`,children:c.jsx(Un,{src:$n,alt:"Dream Budz",className:"object-contain mx-auto"})})}),Eu(e).map((s,i)=>c.jsxs("div",{className:"grid grid-cols-9 mb-6 items-center group",children:[c.jsx("i",{className:`${s.icon} ${s!=null&&s.isActive?"bg-slate-600 rounded-tr-2xl rounded-br-2xl text-lime-400":"text-zinc-400"} col-span-2 py-2 pl-2 pr-3 w-fit duration-200 group-hover:text-lime-400`}),c.jsx(P,{className:`${s.isActive?"text-lime-400 font-bold":"text-zinc-400"} col-span-7 duration-200 group-hover:text-lime-400`,to:s.linkKey,children:s.textKey})]},i)),c.jsxs("div",{onClick:a,className:"grid grid-cols-9 mb-6 items-center cursor-pointer group",children:[c.jsx("i",{className:"fa-solid fa-right-from-bracket text-zinc-400 col-span-2 py-2 pl-2 pr-3 w-fit duration-200 group-hover:text-lime-400"}),c.jsx("p",{className:"text-zinc-400 col-span-7 duration-200 group-hover:text-lime-400",children:"Logout"})]})]})},Su=({sidebar:e,children:t})=>c.jsxs("div",{className:"flex min-h-screen",children:[c.jsx("aside",{className:"hidden lg:block lg:w-[240px] bg-zinc-900",children:e}),c.jsx("main",{className:"max-w-screen-lg w-full mx-auto",children:t})]}),Nu=({toggleMobileMenu:e,close:t})=>{const n=Ne(),r=Ge(),o=new ce(Fn),a=()=>{n(I(0)),o.play(),Bn.purge(),n(Ln()),n(I(100)),n(M(!1)),t(),r("/auth/login")};return c.jsxs("div",{className:`${e?"w-screen left-0 overflow-hidden":"left-[-100vw] w-none"} fixed duration-200 min-h-screen bg-zinc-950 top-0 left-0 flex flex-col items-center justify-center gap-5 z-[60]`,children:[c.jsx(Un,{onClick:t,src:$n,className:"w-40 top-1 left-3 block lg:hidden hover:text-lime-400 duration-200 cursor-pointer",alt:"Budz of Boston"}),c.jsx(P,{onClick:t,className:"hover:text-lime-400 duration-200",to:"/admin/dashboard",children:"Dashboard"}),c.jsx(P,{onClick:t,className:"hover:text-lime-400 duration-200",to:"/admin/products",children:"Products"}),c.jsx(P,{onClick:t,className:"hover:text-lime-400 duration-200",to:"/admin/code",children:"Code"}),c.jsx(P,{onClick:a,className:"hover:text-lime-400 duration-200",to:"/auth/login",children:"Logout"})]})},Ru=()=>{const[e,t]=d.useState(!1),n=()=>t(!1);return c.jsxs(Su,{sidebar:c.jsx(Cu,{}),children:[c.jsx("i",{onClick:()=>t(!e),className:"block lg:hidden fa-solid fa-bars text-lime-500 col-span-2 py-2 pl-2 pr-3 w-fit duration-200 hover:text-lime-400 absolute top-2 right-2 cursor-pointer z-20"}),c.jsx(Nu,{toggleMobileMenu:e,close:n}),c.jsxs(Mo,{children:[c.jsx(Te,{path:"dashboard",element:c.jsx(vi,{})}),c.jsx(Te,{path:"products",element:c.jsx(wi,{})}),c.jsx(Te,{path:"product",element:c.jsx(gu,{})}),c.jsx(Te,{path:"code",element:c.jsx(_u,{})})]})]})};export{Ru as default};
