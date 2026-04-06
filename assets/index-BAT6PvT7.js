var e=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,te());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?te():S=!1}}}var te;if(typeof y==`function`)te=function(){y(ee)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=ee,te=function(){re.postMessage(null)}}else te=function(){_(ee,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,te()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.4`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),te=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case te:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function k(e){return{current:e}}function A(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function j(e,t){de++,ue[de]=e.current,e.current=t}var fe=k(null),M=k(null),pe=k(null),me=k(null);function he(e,t){switch(j(pe,t),j(M,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}A(fe),j(fe,e)}function ge(){A(fe),A(M),A(pe)}function _e(e){e.memoizedState!==null&&j(me,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(M,e),j(fe,n))}function ve(e){M.current===e&&(A(fe),A(M)),me.current===e&&(A(me),Qf._currentValue=le)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:ot(n),(n&(e.suspendedLanes|t))===0?n:0}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ct(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function lt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var P=Math.random().toString(36).slice(2),F=`__reactFiber$`+P,ut=`__reactProps$`+P,dt=`__reactContainer$`+P,ft=`__reactEvents$`+P,pt=`__reactListeners$`+P,mt=`__reactHandles$`+P,ht=`__reactResources$`+P,I=`__reactMarker$`+P;function gt(e){delete e[F],delete e[ut],delete e[ft],delete e[pt],delete e[mt]}function _t(e){var t=e[F];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[F]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[F])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function vt(e){if(e=e[F]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function bt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function xt(e){e[I]=!0}var St=new Set,Ct={};function wt(e,t){Tt(e,t),Tt(e+`Capture`,t)}function Tt(e,t){for(Ct[e]=t,e=0;e<t.length;e++)St.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return Ee.call(Ot,e)?!0:Ee.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Mt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Nt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function L(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Pt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){if(!e._valueTracker){var t=L(e)?`checked`:`value`;e._valueTracker=Pt(e,t,``+e[t])}}function It(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=L(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Lt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Rt=/[\n"\\]/g;function zt(e){return e.replace(Rt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Bt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Nt(t)):e.value!==``+Nt(t)&&(e.value=``+Nt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ht(e,o,Nt(n)):Ht(e,o,Nt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Nt(s):e.removeAttribute(`name`)}function Vt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ft(e);return}n=n==null?``:``+Nt(n),t=t==null?n:``+Nt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ft(e)}function Ht(e,t,n){t===`number`&&Lt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ut(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wt(e,t,n){if(t!=null&&(t=``+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Nt(n)}function Gt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ce(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Nt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ft(e)}function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Jt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Yt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Jt(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Jt(e,a,t[a])}function Xt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var R=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=vt(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+zt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ut]||null;if(!i)throw Error(s(90));Bt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&It(r)}break a;case`textarea`:Wt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(bu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,`passive`,{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=h({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=h({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ln,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(h({},Dn,{dataTransfer:0})),An=yn(h({},Sn,{relatedTarget:0})),z=yn(h({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),jn=yn(h({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Mn=yn(h({},bn,{data:0})),Nn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Pn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Fn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function In(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fn[e])?!!t[e]:!1}function Ln(){return In}var Rn=yn(h({},Sn,{key:function(e){if(e.key){var t=Nn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Pn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ln,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),zn=yn(h({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Bn=yn(h({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ln})),Vn=yn(h({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Hn=yn(h({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Un=yn(h({},bn,{newState:0,oldState:0})),Wn=[9,13,27,32],Gn=ln&&`CompositionEvent`in window,Kn=null;ln&&`documentMode`in document&&(Kn=document.documentMode);var qn=ln&&`TextEvent`in window&&!Kn,Jn=ln&&(!Gn||Kn&&8<Kn&&11>=Kn),Yn=` `,Xn=!1;function Zn(e,t){switch(e){case`keyup`:return Wn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Qn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var $n=!1;function er(e,t){switch(e){case`compositionend`:return Qn(t);case`keypress`:return t.which===32?(Xn=!0,Yn):null;case`textInput`:return e=t.data,e===Yn&&Xn?null:e;default:return null}}function tr(e,t){if($n)return e===`compositionend`||!Gn&&Zn(e,t)?(e=hn(),mn=pn=fn=null,$n=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Jn&&t.locale!==`ko`?null:t.data;default:return null}}var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!nr[e.type]:t===`textarea`}function ir(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Ed(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ar=null,or=null;function sr(e){yd(e,0)}function cr(e){if(It(yt(e)))return e}function lr(e,t){if(e===`change`)return t}var ur=!1;if(ln){var dr;if(ln){var fr=`oninput`in document;if(!fr){var pr=document.createElement(`div`);pr.setAttribute(`oninput`,`return;`),fr=typeof pr.oninput==`function`}dr=fr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function mr(){ar&&(ar.detachEvent(`onpropertychange`,hr),or=ar=null)}function hr(e){if(e.propertyName===`value`&&cr(or)){var t=[];ir(t,or,e,tn(e)),sn(sr,t)}}function gr(e,t,n){e===`focusin`?(mr(),ar=t,or=n,ar.attachEvent(`onpropertychange`,hr)):e===`focusout`&&mr()}function _r(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return cr(or)}function vr(e,t){if(e===`click`)return cr(t)}function yr(e,t){if(e===`input`||e===`change`)return cr(t)}function br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var xr=typeof Object.is==`function`?Object.is:br;function Sr(e,t){if(xr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!xr(e[i],t[i]))return!1}return!0}function Cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n=Cr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Cr(n)}}function Tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Er(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lt(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Or=ln&&`documentMode`in document&&11>=document.documentMode,kr=null,Ar=null,jr=null,Mr=!1;function Nr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mr||kr==null||kr!==Lt(r)||(r=kr,`selectionStart`in r&&Dr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Sr(jr,r)||(jr=r,r=Ed(Ar,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Fr={animationend:Pr(`Animation`,`AnimationEnd`),animationiteration:Pr(`Animation`,`AnimationIteration`),animationstart:Pr(`Animation`,`AnimationStart`),transitionrun:Pr(`Transition`,`TransitionRun`),transitionstart:Pr(`Transition`,`TransitionStart`),transitioncancel:Pr(`Transition`,`TransitionCancel`),transitionend:Pr(`Transition`,`TransitionEnd`)},Ir={},Lr={};ln&&(Lr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),`TransitionEvent`in window||delete Fr.transitionend.transition);function Rr(e){if(Ir[e])return Ir[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lr)return Ir[e]=t[n];return e}var zr=Rr(`animationend`),Br=Rr(`animationiteration`),Vr=Rr(`animationstart`),Hr=Rr(`transitionrun`),Ur=Rr(`transitionstart`),Wr=Rr(`transitioncancel`),Gr=Rr(`transitionend`),Kr=new Map,qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);qr.push(`scrollEnd`);function Jr(e,t){Kr.set(e,t),wt(t,[e])}var Yr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Xr=[],Zr=0,Qr=0;function $r(){for(var e=Zr,t=Qr=Zr=0;t<e;){var n=Xr[t];Xr[t++]=null;var r=Xr[t];Xr[t++]=null;var i=Xr[t];Xr[t++]=null;var a=Xr[t];if(Xr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ri(n,i,a)}}function ei(e,t,n,r){Xr[Zr++]=e,Xr[Zr++]=t,Xr[Zr++]=n,Xr[Zr++]=r,Qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ti(e,t,n,r){return ei(e,t,n,r),ii(e)}function ni(e,t){return ei(e,null,null,t),ii(e)}function ri(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ii(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,t,n,r){return new oi(e,t,n,r)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function li(e,t){var n=e.alternate;return n===null?(n=si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ui(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)ci(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=si(31,n,t,i),e.elementType=ne,e.lanes=a,e;case y:return fi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=si(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case T:return e=si(13,n,t,i),e.elementType=T,e.lanes=a,e;case E:return e=si(19,n,t,i),e.elementType=E,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:o=10;break a;case S:o=9;break a;case w:o=11;break a;case ee:o=14;break a;case te:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=si(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function fi(e,t,n,r){return e=si(7,e,r,t),e.lanes=n,e}function pi(e,t,n){return e=si(6,e,null,t),e.lanes=n,e}function mi(e){var t=si(18,null,null,0);return t.stateNode=e,t}function hi(e,t,n){return t=si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=new WeakMap;function _i(e,t){if(typeof e==`object`&&e){var n=gi.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},gi.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var vi=[],yi=0,bi=null,xi=0,Si=[],Ci=0,wi=null,Ti=1,Ei=``;function Di(e,t){vi[yi++]=xi,vi[yi++]=bi,bi=e,xi=t}function Oi(e,t,n){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,wi=e;var r=Ti;e=Ei;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ti=1<<32-Ue(t)+i|n<<i|r,Ei=a+e}else Ti=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===bi;)bi=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null;for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ei=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null}function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,Ti=t.id,Ei=t.overflow,wi=e}var Mi=null,B=null,V=!1,Ni=null,Pi=!1,Fi=Error(s(519));function Ii(e){throw Hi(_i(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[F]=e,t[ut]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Mi=Mi.return}}function zi(e){if(e!==Mi)return!1;if(!V)return Ri(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&B&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));B=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));B=uf(e)}else t===27?(t=B,Zd(e.type)?(e=lf,lf=null,B=e):B=t):B=Mi?cf(e.stateNode.nextSibling):null;return!0}function Bi(){B=Mi=null,V=!1}function Vi(){var e=Ni;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ni=null),e}function Hi(e){Ni===null?Ni=[e]:Ni.push(e)}var Ui=k(null),Wi=null,Gi=null;function Ki(e,t,n){j(Ui,t._currentValue),t._currentValue=n}function qi(e){e._currentValue=Ui.current,A(Ui)}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ji(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ji(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Xi(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;xr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===me.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qi(e){Wi=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $i(e){return ta(Wi,e)}function ea(e,t){return Wi===null&&Qi(e),ta(e,t)}function ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var na=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ra=t.unstable_scheduleCallback,ia=t.unstable_NormalPriority,aa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oa(){return{controller:new na,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ra(ia,function(){e.controller.abort()})}var ca=null,la=0,ua=0,da=null;function fa(e,t){if(ca===null){var n=ca=[];la=0,ua=dd(),da={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return la++,t.then(pa,pa),t}function pa(){if(--la===0&&ca!==null){da!==null&&(da.status=`fulfilled`);var e=ca;ca=null,ua=0,da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ha=D.S;D.S=function(e,t){eu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&fa(e,t),ha!==null&&ha(e,t)};var ga=k(null);function _a(){var e=ga.current;return e===null?q.pooledCache:e}function va(e,t){t===null?j(ga,ga.current):j(ga,t.pool)}function ya(){var e=_a();return e===null?null:{parent:aa._currentValue,pool:e}}var ba=Error(s(460)),xa=Error(s(474)),Sa=Error(s(542)),Ca={then:function(){}};function wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ta(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e}throw Da=t,ba}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Da=e,ba):e}}var Da=null;function Oa(){if(Da===null)throw Error(s(459));var e=Da;return Da=null,e}function ka(e){if(e===ba||e===Sa)throw Error(s(483))}var Aa=null,ja=0;function Ma(e){var t=ja;return ja+=1,Aa===null&&(Aa=[]),Ta(Aa,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Pa(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=li(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=pi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===te&&Ea(a)===t.type)?(t=i(t,n.props),Na(t,n),t.return=e,t):(t=di(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=hi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=fi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=di(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case v:return t=hi(t,e.mode,n),t.return=e,t;case te:return t=Ea(t),f(e,t,n)}if(ce(t)||ae(t))return t=fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===C)return f(e,ea(e,t),n);Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case te:return n=Ea(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===C)return p(e,t,ea(e,n),r);Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case te:return r=Ea(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===C)return m(e,t,n,ea(t,r),i);Pa(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Di(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return V&&Di(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Di(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),V&&Di(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return V&&Di(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),V&&Di(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===te&&Ea(l)===r.type){n(e,r.sibling),c=i(r,a.props),Na(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=fi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=di(a.type,a.key,a.props,null,e.mode,c),Na(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=hi(a,e.mode,c),c.return=e,e=c}return o(e);case te:return a=Ea(a),b(e,r,a,c)}if(ce(a))return h(e,r,a,c);if(ae(a)){if(l=ae(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ma(a),c);if(a.$$typeof===C)return b(e,r,ea(e,a),c);Pa(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=pi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return Aa=null,i}catch(t){if(t===ba||t===Sa)throw t;var a=si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ia=Fa(!0),La=Fa(!1),Ra=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ii(e),ri(e,null,n),t}return ei(e,r,t,n),ii(e)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ga=!1;function Ka(){if(Ga){var e=da;if(e!==null)throw e}}function qa(e,t,n,r){Ga=!1;var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ua&&(Ga=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ra=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ja(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function Ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ja(n[e],t)}var Xa=k(null),Za=k(0);function Qa(e,t){e=Ul,j(Za,e),j(Xa,t),Ul=e|t.baseLanes}function $a(){j(Za,Ul),j(Xa,Xa.current)}function eo(){Ul=Za.current,A(Xa),A(Za)}var to=k(null),no=null;function ro(e){var t=e.alternate;j(co,co.current&1),j(to,e),no===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(no=e)}function io(e){j(co,co.current),j(to,e),no===null&&(no=e)}function ao(e){e.tag===22?(j(co,co.current),j(to,e),no===null&&(no=e)):oo(e)}function oo(){j(co,co.current),j(to,to.current)}function so(e){A(to),no===e&&(no=null),A(co)}var co=k(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,U=null,fo=null,po=!1,mo=!1,ho=!1,go=0,_o=0,vo=null,yo=0;function bo(){throw Error(s(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?zs:Bs,ho=!1,a=n(r,i),ho=!1,mo&&(a=wo(t,n,r,i)),Co(e),a}function Co(e){D.H=Rs;var t=U!==null&&U.next!==null;if(uo=0,fo=U=H=null,po=!1,_o=0,vo=null,t)throw Error(s(300));e===null||rc||(e=e.dependencies,e!==null&&Zi(e)&&(rc=!0))}function wo(e,t,n,r){H=e;var i=0;do{if(mo&&(vo=null),_o=0,mo=!1,25<=i)throw Error(s(301));if(i+=1,fo=U=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}D.H=Vs,a=t(n,r)}while(mo);return a}function To(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function Eo(){var e=go!==0;return go=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(po){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}po=!1}uo=0,fo=U=H=null,mo=!1,_o=go=0,vo=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?H.memoizedState=fo=e:fo=fo.next=e,fo}function Ao(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=fo===null?H.memoizedState:fo.next;if(t!==null)fo=t,U=e;else{if(e===null)throw H.alternate===null?Error(s(467)):Error(s(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},fo===null?H.memoizedState=fo=e:fo=fo.next=e}return fo}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=_o;return _o+=1,vo===null&&(vo=[]),e=Ta(vo,e,t),t=H,(fo===null?t.memoizedState:fo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===C)return $i(e)}throw Error(s(438,String(e)))}function Po(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),U,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ua&&(d=!0);else if((uo&p)===p){u=u.next,p===ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,H.lanes|=p,Gl|=p;f=u.action,ho&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,H.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!xr(a,e.memoizedState)&&(rc=!0,d&&(n=da,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);xr(a,t.memoizedState)||(rc=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function zo(e,t,n){var r=H,i=Ao(),a=V;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!xr((U||i).memoizedState,n);if(o&&(i.memoizedState=n,rc=!0),i=i.queue,us(Ho.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,i,n,t),null),q===null)throw Error(s(349));a||uo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=jo(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch{return!0}}function Wo(e){var t=ni(e,2);t!==null&&hu(t,e,2)}function Go(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),ho){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,U,typeof r==`function`?r:Fo)}function qo(e,t,n,r,i){if(Fs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};D.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Jo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(V){var n=q.formState;if(n!==null){a:{var r=H;if(V){if(B){b:{for(var i=B,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=cf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,H,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,H,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(Ao(),U,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===ba?Sa:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=Ao(),n=U;if(n!==null)return ns(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=jo(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return Ao().memoizedState}function ss(e,t,n,r){var i=ko();H.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&xo(r,U.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(H.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=jo(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=Ao().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(K&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xo(t,r[1]))return r[0];if(r=e(),ho){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||uo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),H.lanes|=e,Gl|=e,n)}function xs(e,t,n,r){return xr(n,t)?n:Xa.current===null?!(uo&42)||uo&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),H.lanes|=e,Gl|=e,t):(e=bs(e,n,r),xr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Ps(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,ma(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=Ts(e).queue;Ss(e,i,t,le,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return $i(Qf)}function Os(){return Ao().memoizedState}function ks(){return Ao().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Va(n);var r=Ha(t,e,n);r!==null&&(hu(r,t,n),Ua(r,t,n)),t={cache:oa()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=ti(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,xr(s,o))return ei(e,t,i,0),q===null&&$r(),!1}catch{}if(n=ti(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(s(479))}else t=ti(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===H||t!==null&&t===H}function Is(e,t){mo=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var Rs={readContext:$i,use:No,useCallback:bo,useContext:bo,useEffect:bo,useImperativeHandle:bo,useLayoutEffect:bo,useInsertionEffect:bo,useMemo:bo,useReducer:bo,useRef:bo,useState:bo,useDebugValue:bo,useDeferredValue:bo,useTransition:bo,useSyncExternalStore:bo,useId:bo,useHostTransitionStatus:bo,useFormState:bo,useActionState:bo,useOptimistic:bo,useMemoCache:bo,useCacheRefresh:bo};Rs.useEffectEvent=bo;var zs={readContext:$i,use:No,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:$i,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(ho){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(ho){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(ko(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,H,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,i=ko();if(V){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),q===null)throw Error(s(349));Y&127||Bo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ls(Ho.bind(null,r,a,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),n},useId:function(){var e=ko(),t=q.identifierPrefix;if(V){var n=Ei,r=Ti;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=go++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return ko().memoizedState=As.bind(null,H)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:$i,use:No,useCallback:vs,useContext:$i,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(Ao(),U.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(Ao(),U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:$i,use:No,useCallback:vs,useContext:$i,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=Ao();return U===null?bs(n,e,t):xs(n,U.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=Ao();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Va(n);r.tag=2,t!=null&&(r.callback=t),t=Ha(e,r,n),t!==null&&(hu(t,e,n),Ua(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){Yr(e)}function Js(e){console.error(e)}function Ys(e){Yr(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Va(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Xi(t,n,i,!0),n=to.current,n!==null){switch(n.tag){case 31:case 13:return no===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(V)return t=to.current,t===null?(r!==Fi&&(t=Error(s(423),{cause:r}),Hi(_i(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=_i(r,n),i=Qs(e.stateNode,r,i),Wa(e,i),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Fi&&(e=Error(s(422),{cause:r}),Hi(_i(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=_i(a,n),Xl===null?Xl=[a]:Xl.push(a),Wl!==4&&(Wl=2),t===null)return!0;r=_i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Qs(n.stateNode,r,e),Wa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=$s(i),ec(i,e,n,r),Wa(n,i),!1}n=n.return}while(n!==null);return!1}var nc=Error(s(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Qi(t),r=So(e,t,n,o,a,i),s=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(V&&s&&ki(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Sr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=li(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Sr(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&va(t,a===null?null:a.cachePool),a===null?$a():Qa(t,a),ao(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&va(t,null),$a(),oo(t)):(va(t,a.cachePool),Qa(t,a),oo(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=_a();return a=a===null?null:{parent:aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&va(t,null),$a(),ao(t),e!==null&&Xi(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Ia(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,so(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(io(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return dc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(io(t),i)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(rc||Xi(e,t,n,!1),i=(n&e.childLanes)!==0,rc||i){if(r=q,r!==null&&(o=at(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,ni(e,o),hu(r,e,o),nc;Du(),t=fc(e,t,n)}else e=a.treeContext,B=cf(o.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=dc(t,r),t.flags|=4096;return t}return e=li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return Qi(t),n=So(e,t,n,r,void 0,i),r=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(V&&r&&ki(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return Qi(t),t.updateQueue=null,n=wo(t,r,n,i),Co(e),r=Eo(),e!==null&&!rc?(Do(e,t,a),kc(e,t,a)):(V&&r&&ki(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(Qi(t),t.stateNode===null){var a=ai,o=n.contextType;typeof o==`object`&&o&&(a=$i(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},za(t),o=n.contextType,a.context=typeof o==`object`&&o?$i(o):ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),qa(t,r,a,i),Ka(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=ai,typeof u==`object`&&u&&(o=$i(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ra=!1;var f=t.memoizedState;a.state=f,qa(t,r,a,i),Ka(),l=t.memoizedState,s||f!==l||Ra?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ra||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ai,typeof l==`object`&&l&&(c=$i(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ra=!1,f=t.memoizedState,a.state=f,qa(t,r,a,i),Ka();var p=t.memoizedState;o!==d||f!==p||Ra||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ra||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Bi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:ya()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(co.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(V){if(i?ro(t):oo(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(oo(t),i=t.mode,c=wc({mode:`hidden`,children:c},i),r=fi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,o,n),t.memoizedState=yc,lc(null,r)):(ro(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(ro(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(oo(t),c=r.fallback,i=t.mode,r=wc({mode:`visible`,children:r.children},i),c=fi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ia(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,o,n),t.memoizedState=yc,t=lc(null,r)):(oo(t),t.child=e.child,t.flags|=128,t=null);else if(ro(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Hi({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||Xi(e,t,n,!1),o=(n&e.childLanes)!==0,rc||o){if(o=q,o!==null&&(r=at(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ni(e,r),hu(o,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,B=cf(c.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return i?(oo(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=li(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=fi(c,i,n,null),c.flags|=2):c=li(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(i=c.cachePool,i===null?i=ya():(l=aa._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=xc(e,o,n),t.memoizedState=yc,lc(e.child,r)):(ro(t),n=e.child,e=n.sibling,n=li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=si(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ia(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=co.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(co,o),ic(e,t,r,n),r=V?xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Zi(e))):!0}function jc(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),Ki(t,aa,e.memoizedState.cache),Bi();break;case 27:case 5:_e(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:Ki(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ro(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(ro(t),t.flags|=128,null);ro(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Xi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(co,co.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Ki(t,aa,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,V&&t.flags&1048576&&Oi(t,xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e==`function`)ci(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===w){t.tag=11,t=ac(null,t,e,r,n);break a}else if(i===ee){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(s(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ks(r,t.pendingProps),_c(e,t,r,i,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ba(e,t),qa(t,r,null,n);var o=t.memoizedState;if(r=o.cache,Ki(t,aa,r),r!==a.cache&&Yi(t,[aa],n,!0),Ka(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==i){i=_i(Error(s(424)),t),Hi(i),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=cf(e.firstChild),Mi=t,V=!0,Ni=null,Pi=!0,n=La(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===i){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=Bd(pe.current).createElement(n),r[F]=t,r[ut]=e,Pd(r,n,e),xt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&V&&(r=t.stateNode=ff(t.type,t.pendingProps,pe.current),Mi=t,Pi=!0,i=B,Zd(t.type)?(lf=i,B=cf(r.firstChild)):B=i),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((i=r=B)&&(r=tf(r,t.type,t.pendingProps,Pi),r===null?i=!1:(t.stateNode=r,Mi=t,B=cf(r.firstChild),Pi=!1,i=!0)),i||Ii(t)),_e(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=So(e,t,To,null,null,n),Qf._currentValue=i),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=nf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,Mi=t,B=null,e=!0)),e||Ii(t)),null;case 13:return Sc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ki(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Qi(t),i=$i(i),r=r(i),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return Qi(t),r=$i(aa),e===null?(i=_a(),i===null&&(i=q,a=oa(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},za(t),Ki(t,aa,i)):((e.lanes&n)!==0&&(Ba(e,t),qa(t,null,null,n),Ka()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Ki(t,aa,r),r!==i.cache&&Yi(t,[aa],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ki(t,aa,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Da=Ca,xa}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Da=Ca,xa}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:N(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qi(aa),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),W(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Nc(t),a===null?(W(t),Pc(t,i,null,r,n)):(W(t),Fc(t,a))):a?a===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,a)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,i,e,r,n)),null;case 27:if(ve(t),n=pe.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return W(t),null}e=fe.current,zi(t)?Li(t,e):(e=ff(i,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(ve(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return W(t),null}if(a=fe.current,zi(t))Li(t,a);else{var o=Bd(pe.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[F]=t,a[ut]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=pe.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Mi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[F]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ii(t,!0)}else e=Bd(e).createTextNode(r),e[F]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[F]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(so(t),t):(so(t),null);if(t.flags&128)throw Error(s(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[F]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),i=!1}else i=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(so(t),t):(so(t),null)}return so(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return ge(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return qi(t.type),W(t),null;case 19:if(A(co),r=t.memoizedState,r===null)return W(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=lo(e),a!==null){for(t.flags|=128,Lc(r,!1),e=a.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ui(n,e),n=n.sibling;return j(co,co.current&1|2),V&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>tu&&(t.flags|=128,i=!0,Lc(r,!1),t.lanes=4194304)}else{if(!i)if(e=lo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!V)return W(t),null}else 2*je()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=co.current,j(co,i?n&1|2:n&1),V&&Di(t,r.treeForkCount),e);case 22:case 23:return so(t),eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&A(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qi(aa),W(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function zc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(aa),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(so(t),t.alternate===null)throw Error(s(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(so(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(co),null;case 4:return ge(),null;case 10:return qi(t.type),null;case 22:case 23:return so(t),eo(),e!==null&&A(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qi(aa),null;case 25:return null;default:return null}}function Bc(e,t){switch(Ai(t),t.tag){case 3:qi(aa),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&so(t);break;case 13:so(t);break;case 19:A(co);break;case 10:qi(t.type);break;case 22:case 23:so(t),eo(),e!==null&&A(ga);break;case 24:qi(aa)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ya(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ut]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[F]=e,t[ut]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Er(e),Dr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Ks(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ya(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null)if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(s(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(s(160));ul(a,o,i),G=null,cl=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[I]||a[F]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[F]=e,xt(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[F]=e,xt(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){i=e.stateNode;try{Kt(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Jc(e,i,n===null?i:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=gl,gl=gf(t.containerInfo),hl(t,e),gl=i,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||i,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;Qc(e,Xc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(Kt(a,``),n.flags&=-33),Qc(e,Xc(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;Zc(e,Xc(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ja(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=$i(aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $i(aa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:D.T===null?ct():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||V){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Jl=e}else Jl=536870912;return e=to.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),tt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Qe(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=$l+300-je(),10<i)){if(yu(r,t,Jl,!Bl),Ze(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},jl(t,a,d);var m=(a&62914560)===a?$l-je():(a&4194048)===a?eu-je():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!xr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Gi=Wi=null,Oo(e),Aa=null,ja=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=li(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,$r(),n}function Cu(e,t){H=null,D.H=Rs,t===ba||t===Sa?(t=Oa(),X=3):t===xa?(t=Oa(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,_i(t,e.current)))}function wu(){var e=to.current;return e===null?!0:(Y&4194048)===Y?no===null:(Y&62914560)===Y||Y&536870912?e===no:!1}function Tu(){var e=D.H;return D.H=Rs,e===null?Rs:e}function Eu(){var e=D.A;return D.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&to.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:to.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Gi=Wi=null,K=r,D.H=i,D.A=a,J===null&&(q=null,Y=0,$r()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),i=Eu();q!==e||Y!==t?(nu=null,tu=je()+500,Su(e,t)):Vl=Qe(e,t);a:do try{if(X!==0&&J!==null){t=J;var a=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,a,1);break;case 2:case 9:if(wa(a)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},a.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:wa(a)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(J.tag){case 26:o=J.memoizedState;case 5:case 27:var c=J;if(o?Wf(o):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,a,5);break;case 6:X=0,zl=null,Pu(e,t,a,6);break;case 8:xu(),Wl=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Gi=Wi=null,D.H=r,D.A=i,K=n,J===null?(q=null,Y=0,$r(),Wl):0}function ju(){for(;J!==null&&!ke();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Oo(t);default:Bc(n,t),t=J=ui(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Gi=Wi=null,Oo(t),Aa=null,ja=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,_i(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,_i(n,e.current)),J=null;return}t.flags&32768?(V||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=to.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=Qr,nt(e,n,a,o,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Fe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,i=O.p,O.p=2,o=K,K|=4;try{al(e,t,n)}finally{K=o,O.p=i,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Er(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Tr(s.ownerDocument.documentElement,s)){if(c!==null&&Dr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=wr(s,h),v=wr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ae();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),st(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=st(su),r=D.T,i=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var a=au,o=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(s(331));var c=K;if(K|=4,Pl(a.current),El(a,a.current,o,n),K=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,a)}catch{}return!0}finally{O.p=i,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=_i(n,t),t=Qs(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(tt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=_i(n,e),n=$s(2),r=Ha(t,n,2),r!==null&&(ec(n,r,t,e),tt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>je()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=N()),e=ni(e,t),e!==null&&(tt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return De(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ze(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=je(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),st(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=cd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ze(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,je()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?De(Ne,ad):od()})}function dd(){if(nd===0){var e=ua;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ut]||null).action),o=r.submitter;o&&(t=(t=o[ut]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<qr.length;hd++){var gd=qr[hd];Jr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Jr(zr,`onAnimationEnd`),Jr(Br,`onAnimationIteration`),Jr(Vr,`onAnimationStart`),Jr(`dblclick`,`onDoubleClick`),Jr(`focusin`,`onFocus`),Jr(`focusout`,`onBlur`),Jr(Hr,`onTransitionRun`),Jr(Ur,`onTransitionStart`),Jr(Wr,`onTransitionCancel`),Jr(Gr,`onTransitionEnd`),Tt(`onMouseEnter`,[`mouseout`,`mouseover`]),Tt(`onMouseLeave`,[`mouseout`,`mouseover`]),Tt(`onPointerEnter`,[`pointerout`,`pointerover`]),Tt(`onPointerLeave`,[`pointerout`,`pointerover`]),wt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),wt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),wt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),wt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,St.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=_t(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),o=[];a:{var s=Kr.get(e);if(s!==void 0){var c=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:c=Rn;break;case`focusin`:u=`focus`,c=An;break;case`focusout`:u=`blur`,c=An;break;case`beforeblur`:case`afterblur`:c=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Bn;break;case zr:case Br:case Vr:c=z;break;case Gr:c=Vn;break;case`scroll`:case`scrollend`:c=Cn;break;case`wheel`:c=Hn;break;case`copy`:case`cut`:case`paste`:c=jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=zn;break;case`toggle`:case`beforetoggle`:c=Un}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(_t(u)||u[dt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?_t(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=zn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:yt(c),h=u==null?s:yt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,_t(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?yt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=lr;else if(rr(s))if(ur)v=yr;else{v=_r;var y=gr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Xt(r.elementType)&&(v=lr):v=vr;if(v&&=v(e,r)){ir(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Ht(s,`number`,s.value)}switch(y=r?yt(r):window,e){case`focusin`:(rr(y)||y.contentEditable===`true`)&&(kr=y,Ar=r,jr=null);break;case`focusout`:jr=Ar=kr=null;break;case`mousedown`:Mr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Mr=!1,Nr(o,n,i);break;case`selectionchange`:if(Or)break;case`keydown`:case`keyup`:Nr(o,n,i)}var b;if(Gn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else $n?Zn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Jn&&n.locale!==`ko`&&($n||x!==`onCompositionStart`?x===`onCompositionEnd`&&$n&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,$n=!0)),y=Ed(r,x),0<y.length&&(x=new Mn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=Qn(n),b!==null&&(x.data=b)))),(b=qn?er(e,n):tr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Mn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=cn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Kt(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:Yt(e,r,a);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=R.get(n)||n,At(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:Yt(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Kt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ct.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[ut]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Vt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Ut(e,!!r,n,!0):Ut(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Gt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(Xt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Bt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Ut(e,!!n,n?[]:``,!1):Ut(e,!!n,t,!0)):Ut(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Wt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Xt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[I]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),gt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[I])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=vt(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=zt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+zt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+zt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+zt(n.imageSizes)+`"]`)):i+=`[href="`+zt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+zt(r)+`"][href="`+zt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),xt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=bt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);xt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=bt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),xt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=bt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),xt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=pe.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=bt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=bt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=bt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+zt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),xt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+zt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+zt(n.href)+`"]`);if(r)return t.instance=r,xt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),xt(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,xt(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),xt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,xt(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),xt(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[I]||a[F]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,xt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),xt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=si(3,null,null,t),e.current=a,a.stateNode=e,t=oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},za(a),e}function tp(e){return e?(e=ai,e):ai}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Va(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ha(e,r,t),n!==null&&(hu(n,e,t),Ua(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ni(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ot(t);var n=ni(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=je()+500,id(0,!1))}}break;case 31:case 13:s=ni(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=tn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=_t(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=vt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=_t(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=vt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=vt(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ut]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ut]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[dt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.4`)throw Error(s(527,Lp,`19.2.4`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=qs,a=Js,o=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[dt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),f=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),p=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),m=e=>{let t=p(e);return t.charAt(0).toUpperCase()+t.slice(1)},h={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},g=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},_=(0,l.createContext)({}),v=()=>(0,l.useContext)(_),y=(0,l.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:u=24,strokeWidth:f=2,absoluteStrokeWidth:p=!1,color:m=`currentColor`,className:_=``}=v()??{},y=r??p?Number(n??f)*24/Number(t??u):n??f;return(0,l.createElement)(`svg`,{ref:c,...h,width:t??u??h.width,height:t??u??h.height,stroke:e??m,strokeWidth:y,className:d(`lucide`,_,i),...!a&&!g(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,l.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),b=(e,t)=>{let n=(0,l.forwardRef)(({className:n,...r},i)=>(0,l.createElement)(y,{ref:i,iconNode:t,className:d(`lucide-${f(m(e))}`,`lucide-${e}`,n),...r}));return n.displayName=m(e),n},x=b(`arrow-right-left`,[[`path`,{d:`m16 3 4 4-4 4`,key:`1x1c3m`}],[`path`,{d:`M20 7H4`,key:`zbl0bi`}],[`path`,{d:`m8 21-4-4 4-4`,key:`h9nckh`}],[`path`,{d:`M4 17h16`,key:`g4d7ey`}]]),S=b(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),C=b(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),w=b(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),T=b(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),E=b(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),ee=b(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),te=b(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),ne=b(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),re=b(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),ie=b(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),ae=b(`lightbulb`,[[`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`}],[`path`,{d:`M9 18h6`,key:`x1upvd`}],[`path`,{d:`M10 22h4`,key:`ceow96`}]]),oe=b(`list`,[[`path`,{d:`M3 5h.01`,key:`18ugdj`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M3 19h.01`,key:`noohij`}],[`path`,{d:`M8 5h13`,key:`1pao27`}],[`path`,{d:`M8 12h13`,key:`1za7za`}],[`path`,{d:`M8 19h13`,key:`m83p4d`}]]),se=b(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),ce=b(`monitor`,[[`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`,key:`48i651`}],[`line`,{x1:`8`,x2:`16`,y1:`21`,y2:`21`,key:`1svkeh`}],[`line`,{x1:`12`,x2:`12`,y1:`17`,y2:`21`,key:`vw1qmm`}]]),D=b(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),O=b(`rocket`,[[`path`,{d:`M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`,key:`qeys4`}],[`path`,{d:`M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09`,key:`u4xsad`}],[`path`,{d:`M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z`,key:`676m9`}],[`path`,{d:`M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05`,key:`92ym6u`}]]),le=b(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),ue=b(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),de=b(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),k=b(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),A=b(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]);function j(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=j(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function fe(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=j(e))&&(r&&(r+=` `),r+=t);return r}var M=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},pe=(e,t)=>({classGroupId:e,validator:t}),me=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),he=`-`,ge=[],_e=`arbitrary..`,ve=e=>{let t=xe(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return be(e);let n=e.split(he);return ye(n,n[0]===``&&n.length>1?1:0,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?M(i,t):t:i||ge}return n[e]||ge}}},ye=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=ye(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(he):e.slice(t).join(he),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},be=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?_e+r:void 0})(),xe=e=>{let{theme:t,classGroups:n}=e;return Se(n,t)},Se=(e,t)=>{let n=me();for(let r in e){let i=e[r];Ce(i,n,r,t)}return n},Ce=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];we(i,t,n,r)}},we=(e,t,n,r)=>{if(typeof e==`string`){Te(e,t,n);return}if(typeof e==`function`){Ee(e,t,n,r);return}De(e,t,n,r)},Te=(e,t,n)=>{let r=e===``?t:Oe(t,e);r.classGroupId=n},Ee=(e,t,n,r)=>{if(ke(e)){Ce(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(pe(n,e))},De=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Ce(o,Oe(t,a),n,r)}},Oe=(e,t)=>{let n=e,r=t.split(he),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=me(),n.nextPart.set(t,i)),n=i}return n},ke=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Ae=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},je=`!`,Me=`:`,Ne=[],Pe=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Fe=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Me){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(je)?(c=s.slice(0,-1),l=!0):s.startsWith(je)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Pe(t,l,c,u)};if(t){let e=t+Me,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Pe(Ne,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},Ie=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},Le=e=>({cache:Ae(e.cacheSize),parseClassName:Fe(e),sortModifiers:Ie(e),...ve(e)}),Re=/\s+/,ze=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=t,o=[],s=e.trim().split(Re),c=``;for(let e=s.length-1;e>=0;--e){let t=s[e],{isExternal:l,modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=n(t);if(l){c=t+(c.length>0?` `+c:c);continue}let m=!!p,h=r(m?f.substring(0,p):f);if(!h){if(!m){c=t+(c.length>0?` `+c:c);continue}if(h=r(f),!h){c=t+(c.length>0?` `+c:c);continue}m=!1}let g=u.length===0?``:u.length===1?u[0]:a(u).join(`:`),_=d?g+je:g,v=_+h;if(o.indexOf(v)>-1)continue;o.push(v);let y=i(h,m);for(let e=0;e<y.length;++e){let t=y[e];o.push(_+t)}c=t+(c.length>0?` `+c:c)}return c},Be=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=Ve(n))&&(i&&(i+=` `),i+=r);return i},Ve=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=Ve(e[r]))&&(n&&(n+=` `),n+=t);return n},He=(e,...t)=>{let n,r,i,a,o=o=>(n=Le(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=ze(e,n);return i(e,a),a};return a=o,(...e)=>a(Be(...e))},Ue=[],We=e=>{let t=t=>t[e]||Ue;return t.isThemeGetter=!0,t},Ge=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ke=/^\((?:(\w[\w-]*):)?(.+)\)$/i,qe=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Je=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ye=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Xe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ze=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Qe=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$e=e=>qe.test(e),N=e=>!!e&&!Number.isNaN(Number(e)),et=e=>!!e&&Number.isInteger(Number(e)),tt=e=>e.endsWith(`%`)&&N(e.slice(0,-1)),nt=e=>Je.test(e),rt=()=>!0,it=e=>Ye.test(e)&&!Xe.test(e),at=()=>!1,ot=e=>Ze.test(e),st=e=>Qe.test(e),ct=e=>!P(e)&&!I(e),lt=e=>Ct(e,Dt,at),P=e=>Ge.test(e),F=e=>Ct(e,Ot,it),ut=e=>Ct(e,kt,N),dt=e=>Ct(e,jt,rt),ft=e=>Ct(e,At,at),pt=e=>Ct(e,Tt,at),mt=e=>Ct(e,Et,st),ht=e=>Ct(e,Mt,ot),I=e=>Ke.test(e),gt=e=>wt(e,Ot),_t=e=>wt(e,At),vt=e=>wt(e,Tt),yt=e=>wt(e,Dt),bt=e=>wt(e,Et),xt=e=>wt(e,Mt,!0),St=e=>wt(e,jt,!0),Ct=(e,t,n)=>{let r=Ge.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},wt=(e,t,n=!1)=>{let r=Ke.exec(e);return r?r[1]?t(r[1]):n:!1},Tt=e=>e===`position`||e===`percentage`,Et=e=>e===`image`||e===`url`,Dt=e=>e===`length`||e===`size`||e===`bg-size`,Ot=e=>e===`length`,kt=e=>e===`number`,At=e=>e===`family-name`,jt=e=>e===`number`||e===`weight`,Mt=e=>e===`shadow`,Nt=He(()=>{let e=We(`color`),t=We(`font`),n=We(`text`),r=We(`font-weight`),i=We(`tracking`),a=We(`leading`),o=We(`breakpoint`),s=We(`container`),c=We(`spacing`),l=We(`radius`),u=We(`shadow`),d=We(`inset-shadow`),f=We(`text-shadow`),p=We(`drop-shadow`),m=We(`blur`),h=We(`perspective`),g=We(`aspect`),_=We(`ease`),v=We(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),I,P],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[I,P,c],T=()=>[$e,`full`,`auto`,...w()],E=()=>[et,`none`,`subgrid`,I,P],ee=()=>[`auto`,{span:[`full`,et,I,P]},et,I,P],te=()=>[et,`auto`,I,P],ne=()=>[`auto`,`min`,`max`,`fr`,I,P],re=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],ie=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],ae=()=>[`auto`,...w()],oe=()=>[$e,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],se=()=>[$e,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],ce=()=>[$e,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],D=()=>[e,I,P],O=()=>[...b(),vt,pt,{position:[I,P]}],le=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],ue=()=>[`auto`,`cover`,`contain`,yt,lt,{size:[I,P]}],de=()=>[tt,gt,F],k=()=>[``,`none`,`full`,l,I,P],A=()=>[``,N,gt,F],j=()=>[`solid`,`dashed`,`dotted`,`double`],fe=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],M=()=>[N,tt,vt,pt],pe=()=>[``,`none`,m,I,P],me=()=>[`none`,N,I,P],he=()=>[`none`,N,I,P],ge=()=>[N,I,P],_e=()=>[$e,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[nt],breakpoint:[nt],color:[rt],container:[nt],"drop-shadow":[nt],ease:[`in`,`out`,`in-out`],font:[ct],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[nt],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[nt],shadow:[nt],spacing:[`px`,N],text:[nt],"text-shadow":[nt],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,$e,P,I,g]}],container:[`container`],columns:[{columns:[N,P,I,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[et,`auto`,I,P]}],basis:[{basis:[$e,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[N,$e,`auto`,`initial`,`none`,P]}],grow:[{grow:[``,N,I,P]}],shrink:[{shrink:[``,N,I,P]}],order:[{order:[et,`first`,`last`,`none`,I,P]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:ee()}],"col-start":[{"col-start":te()}],"col-end":[{"col-end":te()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:ee()}],"row-start":[{"row-start":te()}],"row-end":[{"row-end":te()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":ne()}],"auto-rows":[{"auto-rows":ne()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...re(),`normal`]}],"justify-items":[{"justify-items":[...ie(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...ie()]}],"align-content":[{content:[`normal`,...re()]}],"align-items":[{items:[...ie(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...ie(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":re()}],"place-items":[{"place-items":[...ie(),`baseline`]}],"place-self":[{"place-self":[`auto`,...ie()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:ae()}],mx:[{mx:ae()}],my:[{my:ae()}],ms:[{ms:ae()}],me:[{me:ae()}],mbs:[{mbs:ae()}],mbe:[{mbe:ae()}],mt:[{mt:ae()}],mr:[{mr:ae()}],mb:[{mb:ae()}],ml:[{ml:ae()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:oe()}],"inline-size":[{inline:[`auto`,...se()]}],"min-inline-size":[{"min-inline":[`auto`,...se()]}],"max-inline-size":[{"max-inline":[`none`,...se()]}],"block-size":[{block:[`auto`,...ce()]}],"min-block-size":[{"min-block":[`auto`,...ce()]}],"max-block-size":[{"max-block":[`none`,...ce()]}],w:[{w:[s,`screen`,...oe()]}],"min-w":[{"min-w":[s,`screen`,`none`,...oe()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...oe()]}],h:[{h:[`screen`,`lh`,...oe()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...oe()]}],"max-h":[{"max-h":[`screen`,`lh`,...oe()]}],"font-size":[{text:[`base`,n,gt,F]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,St,dt]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,tt,P]}],"font-family":[{font:[_t,ft,t]}],"font-features":[{"font-features":[P]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,I,P]}],"line-clamp":[{"line-clamp":[N,`none`,I,ut]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,I,P]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,I,P]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...j(),`wavy`]}],"text-decoration-thickness":[{decoration:[N,`from-font`,`auto`,I,F]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[N,`auto`,I,P]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,I,P]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,I,P]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:O()}],"bg-repeat":[{bg:le()}],"bg-size":[{bg:ue()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},et,I,P],radial:[``,I,P],conic:[et,I,P]},bt,mt]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:de()}],"gradient-via-pos":[{via:de()}],"gradient-to-pos":[{to:de()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:k()}],"rounded-s":[{"rounded-s":k()}],"rounded-e":[{"rounded-e":k()}],"rounded-t":[{"rounded-t":k()}],"rounded-r":[{"rounded-r":k()}],"rounded-b":[{"rounded-b":k()}],"rounded-l":[{"rounded-l":k()}],"rounded-ss":[{"rounded-ss":k()}],"rounded-se":[{"rounded-se":k()}],"rounded-ee":[{"rounded-ee":k()}],"rounded-es":[{"rounded-es":k()}],"rounded-tl":[{"rounded-tl":k()}],"rounded-tr":[{"rounded-tr":k()}],"rounded-br":[{"rounded-br":k()}],"rounded-bl":[{"rounded-bl":k()}],"border-w":[{border:A()}],"border-w-x":[{"border-x":A()}],"border-w-y":[{"border-y":A()}],"border-w-s":[{"border-s":A()}],"border-w-e":[{"border-e":A()}],"border-w-bs":[{"border-bs":A()}],"border-w-be":[{"border-be":A()}],"border-w-t":[{"border-t":A()}],"border-w-r":[{"border-r":A()}],"border-w-b":[{"border-b":A()}],"border-w-l":[{"border-l":A()}],"divide-x":[{"divide-x":A()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":A()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...j(),`hidden`,`none`]}],"divide-style":[{divide:[...j(),`hidden`,`none`]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-bs":[{"border-bs":D()}],"border-color-be":[{"border-be":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...j(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[N,I,P]}],"outline-w":[{outline:[``,N,gt,F]}],"outline-color":[{outline:D()}],shadow:[{shadow:[``,`none`,u,xt,ht]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":[`none`,d,xt,ht]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:A()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[N,F]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":A()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":[`none`,f,xt,ht]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[N,I,P]}],"mix-blend":[{"mix-blend":[...fe(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":fe()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[N]}],"mask-image-linear-from-pos":[{"mask-linear-from":M()}],"mask-image-linear-to-pos":[{"mask-linear-to":M()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":M()}],"mask-image-t-to-pos":[{"mask-t-to":M()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":M()}],"mask-image-r-to-pos":[{"mask-r-to":M()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":M()}],"mask-image-b-to-pos":[{"mask-b-to":M()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":M()}],"mask-image-l-to-pos":[{"mask-l-to":M()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":M()}],"mask-image-x-to-pos":[{"mask-x-to":M()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":M()}],"mask-image-y-to-pos":[{"mask-y-to":M()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[I,P]}],"mask-image-radial-from-pos":[{"mask-radial-from":M()}],"mask-image-radial-to-pos":[{"mask-radial-to":M()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[N]}],"mask-image-conic-from-pos":[{"mask-conic-from":M()}],"mask-image-conic-to-pos":[{"mask-conic-to":M()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:O()}],"mask-repeat":[{mask:le()}],"mask-size":[{mask:ue()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,I,P]}],filter:[{filter:[``,`none`,I,P]}],blur:[{blur:pe()}],brightness:[{brightness:[N,I,P]}],contrast:[{contrast:[N,I,P]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,xt,ht]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:[``,N,I,P]}],"hue-rotate":[{"hue-rotate":[N,I,P]}],invert:[{invert:[``,N,I,P]}],saturate:[{saturate:[N,I,P]}],sepia:[{sepia:[``,N,I,P]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,I,P]}],"backdrop-blur":[{"backdrop-blur":pe()}],"backdrop-brightness":[{"backdrop-brightness":[N,I,P]}],"backdrop-contrast":[{"backdrop-contrast":[N,I,P]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,N,I,P]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[N,I,P]}],"backdrop-invert":[{"backdrop-invert":[``,N,I,P]}],"backdrop-opacity":[{"backdrop-opacity":[N,I,P]}],"backdrop-saturate":[{"backdrop-saturate":[N,I,P]}],"backdrop-sepia":[{"backdrop-sepia":[``,N,I,P]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,I,P]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[N,`initial`,I,P]}],ease:[{ease:[`linear`,`initial`,_,I,P]}],delay:[{delay:[N,I,P]}],animate:[{animate:[`none`,v,I,P]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,I,P]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:me()}],"rotate-x":[{"rotate-x":me()}],"rotate-y":[{"rotate-y":me()}],"rotate-z":[{"rotate-z":me()}],scale:[{scale:he()}],"scale-x":[{"scale-x":he()}],"scale-y":[{"scale-y":he()}],"scale-z":[{"scale-z":he()}],"scale-3d":[`scale-3d`],skew:[{skew:ge()}],"skew-x":[{"skew-x":ge()}],"skew-y":[{"skew-y":ge()}],transform:[{transform:[I,P,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:_e()}],"translate-x":[{"translate-x":_e()}],"translate-y":[{"translate-y":_e()}],"translate-z":[{"translate-z":_e()}],"translate-none":[`translate-none`],accent:[{accent:D()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,I,P]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,I,P]}],fill:[{fill:[`none`,...D()]}],"stroke-w":[{stroke:[N,gt,F,ut]}],stroke:[{stroke:[`none`,...D()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function L(...e){return Nt(fe(e))}var Pt=Object.create,Ft=Object.defineProperty,It=Object.defineProperties,Lt=Object.getOwnPropertyDescriptor,Rt=Object.getOwnPropertyDescriptors,zt=Object.getOwnPropertyNames,Bt=Object.getOwnPropertySymbols,Vt=Object.getPrototypeOf,Ht=Object.prototype.hasOwnProperty,Ut=Object.prototype.propertyIsEnumerable,Wt=(e,t,n)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gt=(e,t)=>{for(var n in t||={})Ht.call(t,n)&&Wt(e,n,t[n]);if(Bt)for(var n of Bt(t))Ut.call(t,n)&&Wt(e,n,t[n]);return e},Kt=(e,t)=>It(e,Rt(t)),qt=(e,t)=>{var n={};for(var r in e)Ht.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Bt)for(var r of Bt(e))t.indexOf(r)<0&&Ut.call(e,r)&&(n[r]=e[r]);return n},Jt=(e,t)=>function(){return t||(0,e[zt(e)[0]])((t={exports:{}}).exports,t),t.exports},Yt=(e,t)=>{for(var n in t)Ft(e,n,{get:t[n],enumerable:!0})},Xt=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of zt(t))!Ht.call(e,i)&&i!==n&&Ft(e,i,{get:()=>t[i],enumerable:!(r=Lt(t,i))||r.enumerable});return e},R=((e,t,n)=>(n=e==null?{}:Pt(Vt(e)),Xt(t||!e||!e.__esModule?Ft(n,`default`,{value:e,enumerable:!0}):n,e)))(Jt({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e,t){var n=function(){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,n={},r={util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/\u00a0/g,` `)},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,`__id`,{value:++t}),e.__id},clone:function e(t,n){n||={};var i,a;switch(r.util.type(t)){case`Object`:if(a=r.util.objId(t),n[a])return n[a];for(var o in i={},n[a]=i,t)t.hasOwnProperty(o)&&(i[o]=e(t[o],n));return i;case`Array`:return a=r.util.objId(t),n[a]?n[a]:(i=[],n[a]=i,t.forEach(function(t,r){i[r]=e(t,n)}),i);default:return t}},getLanguage:function(t){for(;t;){var n=e.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return`none`},setLanguage:function(t,n){t.className=t.className.replace(RegExp(e,`gi`),``),t.classList.add(`language-`+n)},isActive:function(e,t,n){for(var r=`no-`+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){i||=r.languages;var a=i[e],o={};for(var s in a)if(a.hasOwnProperty(s)){if(s==t)for(var c in n)n.hasOwnProperty(c)&&(o[c]=n[c]);n.hasOwnProperty(s)||(o[s]=a[s])}var l=i[e];return i[e]=o,r.languages.DFS(r.languages,function(t,n){n===l&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,i,a){a||={};var o=r.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],i||s);var c=t[s],l=r.util.type(c);l===`Object`&&!a[o(c)]?(a[o(c)]=!0,e(c,n,null,a)):l===`Array`&&!a[o(c)]&&(a[o(c)]=!0,e(c,n,s,a))}}},plugins:{},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(r.hooks.run(`before-tokenize`,a),!a.grammar)throw Error(`The language "`+a.language+`" has no grammar.`);return a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run(`after-tokenize`,a),i.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var i=new s;return c(i,i.head,e),o(e,i,t,i.head,0),u(i)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(!(!n||!n.length))for(var i=0,a;a=n[i++];)a(t)}},Token:i};function i(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=(r||``).length|0}i.stringify=function e(t,n){if(typeof t==`string`)return t;if(Array.isArray(t)){var i=``;return t.forEach(function(t){i+=e(t,n)}),i}var a={type:t.type,content:e(t.content,n),tag:`span`,classes:[`token`,t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(a.classes,o):a.classes.push(o)),r.hooks.run(`wrap`,a);var s=``;for(var c in a.attributes)s+=` `+c+`="`+(a.attributes[c]||``).replace(/"/g,`&quot;`)+`"`;return`<`+a.tag+` class="`+a.classes.join(` `)+`"`+s+`>`+a.content+`</`+a.tag+`>`};function a(e,t,n,r){e.lastIndex=t;var i=e.exec(n);if(i&&r&&i[1]){var a=i[1].length;i.index+=a,i[0]=i[0].slice(a)}return i}function o(e,t,n,s,u,d){for(var f in n)if(!(!n.hasOwnProperty(f)||!n[f])){var p=n[f];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(d&&d.cause==f+`,`+m)return;var h=p[m],g=h.inside,_=!!h.lookbehind,v=!!h.greedy,y=h.alias;if(v&&!h.pattern.global){var b=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,b+`g`)}for(var x=h.pattern||h,S=s.next,C=u;S!==t.tail&&!(d&&C>=d.reach);C+=S.value.length,S=S.next){var w=S.value;if(t.length>e.length)return;if(!(w instanceof i)){var T=1,E;if(v){if(E=a(x,C,e,_),!E||E.index>=e.length)break;var ee=E.index,te=E.index+E[0].length,ne=C;for(ne+=S.value.length;ee>=ne;)S=S.next,ne+=S.value.length;if(ne-=S.value.length,C=ne,S.value instanceof i)continue;for(var re=S;re!==t.tail&&(ne<te||typeof re.value==`string`);re=re.next)T++,ne+=re.value.length;T--,w=e.slice(C,ne),E.index-=C}else if(E=a(x,0,w,_),!E)continue;var ee=E.index,ie=E[0],ae=w.slice(0,ee),oe=w.slice(ee+ie.length),se=C+w.length;d&&se>d.reach&&(d.reach=se);var ce=S.prev;ae&&(ce=c(t,ce,ae),C+=ae.length),l(t,ce,T);var D=new i(f,g?r.tokenize(ie,g):ie,y,ie);if(S=c(t,ce,D),oe&&c(t,S,oe),T>1){var O={cause:f+`,`+m,reach:se};o(e,t,n,S.prev,C,O),d&&O.reach>d.reach&&(d.reach=O.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var r=t.next,i={value:n,prev:t,next:r};return t.next=i,r.prev=i,e.length++,i}function l(e,t,n){for(var r=t.next,i=0;i<n&&r!==e.tail;i++)r=r.next;t.next=r,r.prev=t,e.length-=i}function u(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}return r}();t.exports=n,n.default=n}})());R.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:`attr-equals`},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:`named-entity`},/&#x?[\da-f]{1,8};/i]},R.languages.markup.tag.inside[`attr-value`].inside.entity=R.languages.markup.entity,R.languages.markup.doctype.inside[`internal-subset`].inside=R.languages.markup,R.hooks.add(`wrap`,function(e){e.type===`entity`&&(e.attributes.title=e.content.replace(/&amp;/,`&`))}),Object.defineProperty(R.languages.markup.tag,`addInlined`,{value:function(e,t){var n={},n=(n[`language-`+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:R.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}}),t=(n[`language-`+t]={pattern:/[\s\S]+/,inside:R.languages[t]},{});t[e]={pattern:RegExp(`(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)`.replace(/__/g,function(){return e}),`i`),lookbehind:!0,greedy:!0,inside:n},R.languages.insertBefore(`markup`,`cdata`,t)}}),Object.defineProperty(R.languages.markup.tag,`addAttribute`,{value:function(e,t){R.languages.markup.tag.inside[`special-attr`].push({pattern:RegExp(`(^|["'\\s])(?:`+e+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,`i`),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,`language-`+t],inside:R.languages[t]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/"|'/]}}}})}}),R.languages.html=R.languages.markup,R.languages.mathml=R.languages.markup,R.languages.svg=R.languages.markup,R.languages.xml=R.languages.extend(`markup`,{}),R.languages.ssml=R.languages.xml,R.languages.atom=R.languages.xml,R.languages.rss=R.languages.xml,function(e){var t={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:`escape`},n=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,r=`(?:[^\\\\-]|`+n.source+`)`,r=RegExp(r+`-`+r),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:`variable`};e.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:`operator`},"char-class-punctuation":{pattern:/^\[|\]$/,alias:`punctuation`},range:{pattern:r,inside:{escape:n,"range-punctuation":{pattern:/-/,alias:`operator`}}},"special-escape":t,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:`class-name`},escape:n}},"special-escape":t,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:`class-name`},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:`keyword`},{pattern:/\\k<[^<>']+>/,alias:`keyword`,inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:`function`},escape:n,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:`punctuation`,inside:{"group-name":i}},{pattern:/\)/,alias:`punctuation`}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:`number`},alternation:{pattern:/\|/,alias:`keyword`}}}(R),R.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},R.languages.javascript=R.languages.extend(`clike`,{"class-name":[R.languages.clike[`class-name`],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(`(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])`),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),R.languages.javascript[`class-name`][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,R.languages.insertBefore(`javascript`,`keyword`,{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:`language-regex`,inside:R.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:`function`},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:R.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:R.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:R.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:R.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),R.languages.insertBefore(`javascript`,`string`,{hashbang:{pattern:/^#!.*/,greedy:!0,alias:`comment`},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:`punctuation`},rest:R.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:`property`}}),R.languages.insertBefore(`javascript`,`operator`,{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:`property`}}),R.languages.markup&&(R.languages.markup.tag.addInlined(`script`,`javascript`),R.languages.markup.tag.addAttribute(`on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)`,`javascript`)),R.languages.js=R.languages.javascript,R.languages.actionscript=R.languages.extend(`javascript`,{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),R.languages.actionscript[`class-name`].alias=`function`,delete R.languages.actionscript.parameter,delete R.languages.actionscript[`literal-property`],R.languages.markup&&R.languages.insertBefore(`actionscript`,`string`,{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:R.languages.markup}}),function(e){var t=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:`variable`};e.languages.coffeescript=e.languages.extend(`javascript`,{comment:t,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:`variable`}}),e.languages.insertBefore(`coffeescript`,`comment`,{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:`comment`},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:`regex`,inside:{comment:t,interpolation:n}}}),e.languages.insertBefore(`coffeescript`,`string`,{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:`punctuation`},script:{pattern:/[\s\S]+/,alias:`language-javascript`,inside:e.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:`string`},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:`string`,inside:{interpolation:n}}]}),e.languages.insertBefore(`coffeescript`,`keyword`,{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript[`template-string`],e.languages.coffee=e.languages.coffeescript}(R),function(e){var t=e.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(t,`addSupport`,{value:function(t,n){(t=typeof t==`string`?[t]:t).forEach(function(t){var r=function(e){e.inside||={},e.inside.rest=n},i=`doc-comment`;if(a=e.languages[t]){var a,o=a[i];if((o||=(a=e.languages.insertBefore(t,`comment`,{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:`comment`}}))[i])instanceof RegExp&&(o=a[i]={pattern:o}),Array.isArray(o))for(var s=0,c=o.length;s<c;s++)o[s]instanceof RegExp&&(o[s]={pattern:o[s]}),r(o[s]);else r(o)}})}}),t.addSupport([`java`,`javascript`,`php`],t)}(R),function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,t=(e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+`)*?(?:;|(?=\\s*\\{))`),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:`selector`},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp(`\\burl\\((?:`+t.source+`|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`,`i`),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp(`^`+t.source+`$`),alias:`url`}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+`)*(?=\\s*\\{)`),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,e.languages.markup);t&&(t.tag.addInlined(`style`,`css`),t.tag.addAttribute(`style`,`css`))}(R),function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,t=(e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:t={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+t.source+`)*\\]`),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:`keyword`},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[t,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside[`selector-function-argument`].inside=t,e.languages.insertBefore(`css`,`property`,{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),n={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore(`css`,`function`,{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:`color`},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:t,number:n,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:t,number:n})}(R),function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r=`(?:`+n.source+`(?:[ 	]+`+t.source+`)?|`+t.source+`(?:[ 	]+`+n.source+`)?)`,i=`(?:[^\\s\\x00-\\x08\\x0e-\\x1f!"#%&'*,\\-:>?@[\\]\`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \\t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*`.replace(/<PLAIN>/g,function(){return`[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]`}),a=`"(?:[^"\\\\\\r\\n]|\\\\.)*"|'(?:[^'\\\\\\r\\n]|\\\\.)*'`;function o(e,t){t=(t||``).replace(/m/g,``)+`m`;var n=`([:\\-,[{]\\s*(?:\\s<<prop>>[ \\t]+)?)(?:<<value>>)(?=[ \\t]*(?:$|,|\\]|\\}|(?:[\\r\\n]\\s*)?#))`.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return e});return RegExp(n,t)}e.languages.yaml={scalar:{pattern:RegExp(`([\\-:]\\s*(?:\\s<<prop>>[ \\t]+)?[|>])[ \\t]*(?:((?:\\r?\\n|\\r)[ \\t]+)\\S[^\\r\\n]*(?:\\2[^\\r\\n]+)*)`.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:`string`},comment:/#.*/,key:{pattern:RegExp(`((?:^|[:\\-,[{\\r\\n?])[ \\t]*(?:<<prop>>[ \\t]+)?)<<key>>(?=\\s*:\\s)`.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return`(?:`+i+`|`+a+`)`})),lookbehind:!0,greedy:!0,alias:`atrule`},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:`important`},datetime:{pattern:o(`\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \\t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \\t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?`),lookbehind:!0,alias:`number`},boolean:{pattern:o(`false|true`,`i`),lookbehind:!0,alias:`important`},null:{pattern:o(`null|~`,`i`),lookbehind:!0,alias:`important`},string:{pattern:o(a),lookbehind:!0,greedy:!0},number:{pattern:o(`[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)`,`i`),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(R),function(e){var t=`(?:\\\\.|[^\\\\\\n\\r]|(?:\\n|\\r\\n?)(?![\\r\\n]))`;function n(e){return e=e.replace(/<inner>/g,function(){return t}),RegExp(`((?:^|[^\\\\])(?:\\\\{2})*)(?:`+e+`)`)}var r="(?:\\\\.|``(?:[^`\\r\\n]|`(?!`))+``|`[^`\\r\\n]+`|[^\\\\|\\r\\n`])+",i=`\\|?__(?:\\|__)+\\|?(?:(?:\\n|\\r\\n?)|(?![\\s\\S]))`.replace(/__/g,function(){return r}),a=`\\|?[ \\t]*:?-{3,}:?[ \\t]*(?:\\|[ \\t]*:?-{3,}:?[ \\t]*)+\\|?(?:\\n|\\r\\n?)`,o=(e.languages.markdown=e.languages.extend(`markup`,{}),e.languages.insertBefore(`markdown`,`prolog`,{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:[`yaml`,`language-yaml`],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:`punctuation`},table:{pattern:RegExp(`^`+i+a+`(?:`+i+`)*`,`m`),inside:{"table-data-rows":{pattern:RegExp(`^(`+i+a+`)(?:`+i+`)*$`),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp(`^(`+i+`)`+a+`$`),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp(`^`+i+`$`),inside:{"table-header":{pattern:RegExp(r),alias:`important`,inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:`keyword`},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:`important`,inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:`important`,inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:`punctuation`},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:`punctuation`},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:`url`},bold:{pattern:n(`\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*`),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(`\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*`),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(`(~~?)(?:(?!~)<inner>)+\\2`),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:[`code`,`keyword`]},url:{pattern:n(`!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \\t]?\\[(?:(?!\\])<inner>)+\\])`),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),[`url`,`bold`,`italic`,`strike`].forEach(function(t){[`url`,`bold`,`italic`,`strike`,`code-snippet`].forEach(function(n){t!==n&&(e.languages.markdown[t].inside.content.inside[n]=e.languages.markdown[n])})}),e.hooks.add(`after-tokenize`,function(e){e.language!==`markdown`&&e.language!==`md`||function e(t){if(t&&typeof t!=`string`)for(var n=0,r=t.length;n<r;n++){var i,a=t[n];a.type===`code`?(i=a.content[1],a=a.content[3],i&&a&&i.type===`code-language`&&a.type===`code-block`&&typeof i.content==`string`&&(i=i.content.replace(/\b#/g,`sharp`).replace(/\b\+\+/g,`pp`),i=`language-`+(i=(/[a-z][\w-]*/i.exec(i)||[``])[0].toLowerCase()),a.alias?typeof a.alias==`string`?a.alias=[a.alias,i]:a.alias.push(i):a.alias=[i])):e(a.content)}}(e.tokens)}),e.hooks.add(`wrap`,function(t){if(t.type===`code-block`){for(var n=``,r=0,i=t.classes.length;r<i;r++){var a=t.classes[r],a=/language-(.+)/.exec(a);if(a){n=a[1];break}}var l,u=e.languages[n];u?t.content=e.highlight(function(e){return e=e.replace(o,``),e=e.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(e,t){var n;return(t=t.toLowerCase())[0]===`#`?(n=t[1]===`x`?parseInt(t.slice(2),16):Number(t.slice(1)),c(n)):s[t]||e})}(t.content),u,n):n&&n!==`none`&&e.plugins.autoloader&&(l=`md-`+new Date().valueOf()+`-`+Math.floor(0x2386f26fc10000*Math.random()),t.attributes.id=l,e.plugins.autoloader.loadLanguages(n,function(){var t=document.getElementById(l);t&&(t.innerHTML=e.highlight(t.textContent,e.languages[n],n))}))}}),RegExp(e.languages.markup.tag.pattern.source,`gi`)),s={amp:`&`,lt:`<`,gt:`>`,quot:`"`},c=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}(R),R.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:`string`,inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:R.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:`function`},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:`class-name`},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:`function`},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:`function`},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:`function`},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},R.hooks.add(`after-tokenize`,function(e){if(e.language===`graphql`)for(var t=e.tokens.filter(function(e){return typeof e!=`string`&&e.type!==`comment`&&e.type!==`scalar`}),n=0;n<t.length;){var r=t[n++];if(r.type===`keyword`&&r.content===`mutation`){var i=[];if(d([`definition-mutation`,`punctuation`])&&u(1).content===`(`){n+=2;var a=f(/^\($/,/^\)$/);if(a===-1)continue;for(;n<a;n++){var o=u(0);o.type===`variable`&&(p(o,`variable-input`),i.push(o.content))}n=a+1}if(d([`punctuation`,`property-query`])&&u(0).content===`{`&&(n++,p(u(0),`property-mutation`),0<i.length)){var s=f(/^\{$/,/^\}$/);if(s!==-1)for(var c=n;c<s;c++){var l=t[c];l.type===`variable`&&0<=i.indexOf(l.content)&&p(l,`variable-input`)}}}}function u(e){return t[n+e]}function d(e,t){t||=0;for(var n=0;n<e.length;n++){var r=u(n+t);if(!r||r.type!==e[n])return}return 1}function f(e,r){for(var i=1,a=n;a<t.length;a++){var o=t[a],s=o.content;if(o.type===`punctuation`&&typeof s==`string`){if(e.test(s))i++;else if(r.test(s)&&--i===0)return a}}return-1}function p(e,t){var n=e.alias;n?Array.isArray(n)||(e.alias=n=[n]):e.alias=n=[],n.push(t)}}),R.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(e){var t=e.languages.javascript[`template-string`],n=t.pattern.source,r=t.inside.interpolation,i=r.inside[`interpolation-punctuation`],a=r.pattern.source;function o(t,r){if(e.languages[t])return{pattern:RegExp(`((?:`+r+`)\\s*)`+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}function s(t,n,r){return t={code:t,grammar:n,language:r},e.hooks.run(`before-tokenize`,t),t.tokens=e.tokenize(t.code,t.grammar),e.hooks.run(`after-tokenize`,t),t.tokens}function c(t,n,o){var c=e.tokenize(t,{interpolation:{pattern:RegExp(a),lookbehind:!0}}),l=0,u={},c=s(c.map(function(e){if(typeof e==`string`)return e;for(var n,r,e=e.content;t.indexOf((r=l++,n=`___`+o.toUpperCase()+`_`+r+`___`))!==-1;);return u[n]=e,n}).join(``),n,o),d=Object.keys(u);return l=0,function t(n){for(var a=0;a<n.length;a++){if(l>=d.length)return;var o,c,f,p,m,h,g,_=n[a];typeof _==`string`||typeof _.content==`string`?(o=d[l],(g=(h=typeof _==`string`?_:_.content).indexOf(o))!==-1&&(++l,c=h.substring(0,g),m=u[o],f=void 0,(p={})[`interpolation-punctuation`]=i,(p=e.tokenize(m,p)).length===3&&((f=[1,1]).push.apply(f,s(p[1],e.languages.javascript,`javascript`)),p.splice.apply(p,f)),f=new e.Token(`interpolation`,p,r.alias,m),p=h.substring(g+o.length),m=[],c&&m.push(c),m.push(f),p&&(t(h=[p]),m.push.apply(m,h)),typeof _==`string`?(n.splice.apply(n,[a,1].concat(m)),a+=m.length-1):_.content=m)):(g=_.content,t(Array.isArray(g)?g:[g]))}}(c),new e.Token(o,c,`language-`+o,t)}e.languages.javascript[`template-string`]=[o(`css`,`\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)`),o(`html`,`\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?=`),o(`svg`,`\\bsvg`),o(`markdown`,`\\b(?:markdown|md)`),o(`graphql`,`\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)`),o(`sql`,`\\bsql`),t].filter(Boolean);var l={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function u(e){return typeof e==`string`?e:Array.isArray(e)?e.map(u).join(``):u(e.content)}e.hooks.add(`after-tokenize`,function(t){t.language in l&&function t(n){for(var r=0,i=n.length;r<i;r++){var a,o,s,l=n[r];typeof l!=`string`&&(a=l.content,Array.isArray(a)?l.type===`template-string`?(l=a[1],a.length===3&&typeof l!=`string`&&l.type===`embedded-code`&&(o=u(l),l=l.alias,l=Array.isArray(l)?l[0]:l,s=e.languages[l])&&(a[1]=c(o,s,l))):t(a):typeof a!=`string`&&t([a]))}}(t.tokens)})}(R),function(e){e.languages.typescript=e.languages.extend(`javascript`,{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript[`literal-property`];var t=e.languages.extend(`typescript`,{});delete t[`class-name`],e.languages.typescript[`class-name`].inside=t,e.languages.insertBefore(`typescript`,`function`,{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:`operator`},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:`class-name`,inside:t}}}}),e.languages.ts=e.languages.typescript}(R),function(e){var t=e.languages.javascript,n=`\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})+\\}`,r=`(@(?:arg|argument|param|property)\\s+(?:`+n+`\\s+)?)`;e.languages.jsdoc=e.languages.extend(`javadoclike`,{parameter:{pattern:RegExp(r+`(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)`),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore(`jsdoc`,`keyword`,{"optional-parameter":{pattern:RegExp(r+`\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)`),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:t,alias:`language-javascript`},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(`(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*`.replace(/<TYPE>/g,function(){return n})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp(`(@[a-z]+\\s+)`+n),lookbehind:!0,inside:{string:t.string,number:t.number,boolean:t.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:t,alias:`language-javascript`}}}}),e.languages.javadoclike.addSupport(`javascript`,e.languages.jsdoc)}(R),function(e){e.languages.flow=e.languages.extend(`javascript`,{}),e.languages.insertBefore(`flow`,`keyword`,{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:`class-name`}]}),e.languages.flow[`function-variable`].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete e.languages.flow.parameter,e.languages.insertBefore(`flow`,`operator`,{"flow-punctuation":{pattern:/\{\||\|\}/,alias:`punctuation`}}),Array.isArray(e.languages.flow.keyword)||(e.languages.flow.keyword=[e.languages.flow.keyword]),e.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(R),R.languages.n4js=R.languages.extend(`javascript`,{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),R.languages.insertBefore(`n4js`,`constant`,{annotation:{pattern:/@+\w+/,alias:`operator`}}),R.languages.n4jsd=R.languages.n4js,function(e){function t(e,t){return RegExp(e.replace(/<ID>/g,function(){return`(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*`}),t)}e.languages.insertBefore(`javascript`,`function-variable`,{"method-variable":{pattern:RegExp(`(\\.\\s*)`+e.languages.javascript[`function-variable`].pattern.source),lookbehind:!0,alias:[`function-variable`,`method`,`function`,`property-access`]}}),e.languages.insertBefore(`javascript`,`function`,{method:{pattern:RegExp(`(\\.\\s*)`+e.languages.javascript.function.source),lookbehind:!0,alias:[`function`,`property-access`]}}),e.languages.insertBefore(`javascript`,`constant`,{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:`class-name`},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:`class-name`}]}),e.languages.insertBefore(`javascript`,`keyword`,{imports:{pattern:t(`(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)`),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:t(`(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})`),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:`module`},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:`control-flow`},{pattern:/\bnull\b/,alias:[`null`,`nil`]},{pattern:/\bundefined\b/,alias:`nil`}),e.languages.insertBefore(`javascript`,`operator`,{spread:{pattern:/\.{3}/,alias:`operator`},arrow:{pattern:/=>/,alias:`operator`}}),e.languages.insertBefore(`javascript`,`punctuation`,{"property-access":{pattern:t(`(\\.\\s*)#?<ID>`),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:`variable`},console:{pattern:/\bconsole(?=\s*\.)/,alias:`class-name`}});for(var n=[`function`,`function-variable`,`method`,`method-variable`,`property-access`],r=0;r<n.length;r++){var i=n[r],a=e.languages.javascript[i],i=(a=e.util.type(a)===`RegExp`?e.languages.javascript[i]={pattern:a}:a).inside||{};(a.inside=i)[`maybe-class-name`]=/^[A-Z][\s\S]*/}}(R),function(e){var t=e.util.clone(e.languages.javascript),n=`(?:\\s|\\/\\/.*(?!.)|\\/\\*(?:[^*]|\\*(?!\\/))\\*\\/)`,r=`(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})`,i=`(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})`;function a(e,t){return e=e.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return i}),RegExp(e,t)}i=a(i).source,e.languages.jsx=e.languages.extend(`markup`,t),e.languages.jsx.tag.pattern=a(`<\\/?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[\\s\\S]|[^\\\\"])*"|'(?:\\\\[\\s\\S]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\\/?)?>`),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside[`attr-value`].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside[`class-name`]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore(`inside`,`attr-name`,{spread:{pattern:a(`<SPREAD>`),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore(`inside`,`special-attr`,{script:{pattern:a(`=<BRACES>`),alias:`language-javascript`,inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:`punctuation`},rest:e.languages.jsx}}},e.languages.jsx.tag);function o(t){for(var n=[],r=0;r<t.length;r++){var i=t[r],a=!1;typeof i!=`string`&&(i.type===`tag`&&i.content[0]&&i.content[0].type===`tag`?i.content[0].content[0].content===`</`?0<n.length&&n[n.length-1].tagName===s(i.content[0].content[1])&&n.pop():i.content[i.content.length-1].content!==`/>`&&n.push({tagName:s(i.content[0].content[1]),openedBraces:0}):0<n.length&&i.type===`punctuation`&&i.content===`{`?n[n.length-1].openedBraces++:0<n.length&&0<n[n.length-1].openedBraces&&i.type===`punctuation`&&i.content===`}`?n[n.length-1].openedBraces--:a=!0),(a||typeof i==`string`)&&0<n.length&&n[n.length-1].openedBraces===0&&(a=s(i),r<t.length-1&&(typeof t[r+1]==`string`||t[r+1].type===`plain-text`)&&(a+=s(t[r+1]),t.splice(r+1,1)),0<r&&(typeof t[r-1]==`string`||t[r-1].type===`plain-text`)&&(a=s(t[r-1])+a,t.splice(r-1,1),r--),t[r]=new e.Token(`plain-text`,a,null,a)),i.content&&typeof i.content!=`string`&&o(i.content)}}var s=function(e){return e?typeof e==`string`?e:typeof e.content==`string`?e.content:e.content.map(s).join(``):``};e.hooks.add(`after-tokenize`,function(e){e.language!==`jsx`&&e.language!==`tsx`||o(e.tokens)})}(R),function(e){var t=e.util.clone(e.languages.typescript),t=(e.languages.tsx=e.languages.extend(`jsx`,t),delete e.languages.tsx.parameter,delete e.languages.tsx[`literal-property`],e.languages.tsx.tag);t.pattern=RegExp(`(^|[^\\w$]|(?=<\\/))(?:`+t.pattern.source+`)`,t.pattern.flags),t.lookbehind=!0}(R),R.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(`(^|[^"#])(?:"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\\r\\n|[^(])|[^\\\\\\r\\n"])*"|"""(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\"]|"(?!""))*""")(?!["#])`),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:`punctuation`},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(`(^|[^"#])(#+)(?:"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\\r\\n|[^#])|[^\\\\\\r\\n])*?"|"""(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?""")\\2`),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:`punctuation`},string:/[\s\S]+/}}],directive:{pattern:RegExp(`#(?:(?:elseif|if)\\b(?:[ 	]*(?:![ \\t]*)?(?:\\b\\w+\\b(?:[ \\t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \\t]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)`),alias:`property`,inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:`constant`},"other-directive":{pattern:/#\w+\b/,alias:`property`},attribute:{pattern:/@\w+/,alias:`atrule`},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:`function`},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:`important`},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:`constant`},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:`keyword`},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},R.languages.swift[`string-literal`].forEach(function(e){e.inside.interpolation.inside=R.languages.swift}),function(e){e.languages.kotlin=e.languages.extend(`clike`,{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete e.languages.kotlin[`class-name`];var t={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:`punctuation`},expression:{pattern:/[\s\S]+/,inside:e.languages.kotlin}};e.languages.insertBefore(`kotlin`,`string`,{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:`multiline`,inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:t},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:`singleline`,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:t},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete e.languages.kotlin.string,e.languages.insertBefore(`kotlin`,`keyword`,{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:`builtin`}}),e.languages.insertBefore(`kotlin`,`function`,{label:{pattern:/\b\w+@|@\w+\b/,alias:`symbol`}}),e.languages.kt=e.languages.kotlin,e.languages.kts=e.languages.kotlin}(R),R.languages.c=R.languages.extend(`clike`,{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),R.languages.insertBefore(`c`,`string`,{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),R.languages.insertBefore(`c`,`string`,{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:`property`,inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},R.languages.c.string],char:R.languages.c.char,comment:R.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:`function`}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:`keyword`},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:R.languages.c}}}}),R.languages.insertBefore(`c`,`function`,{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete R.languages.c.boolean,R.languages.objectivec=R.languages.extend(`c`,{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete R.languages.objectivec[`class-name`],R.languages.objc=R.languages.objectivec,R.languages.reason=R.languages.extend(`clike`,{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),R.languages.insertBefore(`reason`,`class-name`,{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:`symbol`}}),delete R.languages.reason.function,function(e){for(var t=`\\/\\*(?:[^*/]|\\*(?!\\/)|\\/(?!\\*)|<self>)*\\*\\/`,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return`[^\\s\\S]`}),e.languages.rust={comment:[{pattern:RegExp(`(^|[^\\\\])`+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:`attr-name`,inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:`punctuation`},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:`symbol`},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:`punctuation`},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:`function`},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:`class-name`},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:`namespace`},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:`namespace`,inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:`property`},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust[`closure-params`].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(R),R.languages.go=R.languages.extend(`clike`,{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),R.languages.insertBefore(`go`,`string`,{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete R.languages.go[`class-name`],function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=`\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b`.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend(`c`,{"class-name":[{pattern:RegExp(`(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+`.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore(`cpp`,`string`,{module:{pattern:RegExp(`(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\\r\\n|[\\s\\S])|[^"\\\\\\r\\n])*"|<[^<>\\r\\n]*>|`+`<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>`.replace(/<mod-name>/g,function(){return n})+`)`),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:`string`,greedy:!0}}),e.languages.insertBefore(`cpp`,`keyword`,{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:`class-name`,inside:e.languages.cpp}}}}),e.languages.insertBefore(`cpp`,`operator`,{"double-colon":{pattern:/::/,alias:`punctuation`}}),e.languages.insertBefore(`cpp`,`class-name`,{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend(`cpp`,{})}}),e.languages.insertBefore(`inside`,`double-colon`,{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp[`base-clause`])}(R),R.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:`punctuation`},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:`string`},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:[`annotation`,`punctuation`],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},R.languages.python[`string-interpolation`].inside.interpolation.inside.rest=R.languages.python,R.languages.py=R.languages.python,R.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:`keyword`}},R.languages.webmanifest=R.languages.json;var Zt={};Yt(Zt,{dracula:()=>Qt,duotoneDark:()=>$t,duotoneLight:()=>en,github:()=>tn,gruvboxMaterialDark:()=>vn,gruvboxMaterialLight:()=>yn,jettwaveDark:()=>mn,jettwaveLight:()=>hn,nightOwl:()=>nn,nightOwlLight:()=>rn,oceanicNext:()=>on,okaidia:()=>sn,oneDark:()=>gn,oneLight:()=>_n,palenight:()=>cn,shadesOfPurple:()=>ln,synthwave84:()=>un,ultramin:()=>dn,vsDark:()=>fn,vsLight:()=>pn});var Qt={plain:{color:`#F8F8F2`,backgroundColor:`#282A36`},styles:[{types:[`prolog`,`constant`,`builtin`],style:{color:`rgb(189, 147, 249)`}},{types:[`inserted`,`function`],style:{color:`rgb(80, 250, 123)`}},{types:[`deleted`],style:{color:`rgb(255, 85, 85)`}},{types:[`changed`],style:{color:`rgb(255, 184, 108)`}},{types:[`punctuation`,`symbol`],style:{color:`rgb(248, 248, 242)`}},{types:[`string`,`char`,`tag`,`selector`],style:{color:`rgb(255, 121, 198)`}},{types:[`keyword`,`variable`],style:{color:`rgb(189, 147, 249)`,fontStyle:`italic`}},{types:[`comment`],style:{color:`rgb(98, 114, 164)`}},{types:[`attr-name`],style:{color:`rgb(241, 250, 140)`}}]},$t={plain:{backgroundColor:`#2a2734`,color:`#9a86fd`},styles:[{types:[`comment`,`prolog`,`doctype`,`cdata`,`punctuation`],style:{color:`#6c6783`}},{types:[`namespace`],style:{opacity:.7}},{types:[`tag`,`operator`,`number`],style:{color:`#e09142`}},{types:[`property`,`function`],style:{color:`#9a86fd`}},{types:[`tag-id`,`selector`,`atrule-id`],style:{color:`#eeebff`}},{types:[`attr-name`],style:{color:`#c4b9fe`}},{types:[`boolean`,`string`,`entity`,`url`,`attr-value`,`keyword`,`control`,`directive`,`unit`,`statement`,`regex`,`atrule`,`placeholder`,`variable`],style:{color:`#ffcc99`}},{types:[`deleted`],style:{textDecorationLine:`line-through`}},{types:[`inserted`],style:{textDecorationLine:`underline`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`important`,`bold`],style:{fontWeight:`bold`}},{types:[`important`],style:{color:`#c4b9fe`}}]},en={plain:{backgroundColor:`#faf8f5`,color:`#728fcb`},styles:[{types:[`comment`,`prolog`,`doctype`,`cdata`,`punctuation`],style:{color:`#b6ad9a`}},{types:[`namespace`],style:{opacity:.7}},{types:[`tag`,`operator`,`number`],style:{color:`#063289`}},{types:[`property`,`function`],style:{color:`#b29762`}},{types:[`tag-id`,`selector`,`atrule-id`],style:{color:`#2d2006`}},{types:[`attr-name`],style:{color:`#896724`}},{types:[`boolean`,`string`,`entity`,`url`,`attr-value`,`keyword`,`control`,`directive`,`unit`,`statement`,`regex`,`atrule`],style:{color:`#728fcb`}},{types:[`placeholder`,`variable`],style:{color:`#93abdc`}},{types:[`deleted`],style:{textDecorationLine:`line-through`}},{types:[`inserted`],style:{textDecorationLine:`underline`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`important`,`bold`],style:{fontWeight:`bold`}},{types:[`important`],style:{color:`#896724`}}]},tn={plain:{color:`#393A34`,backgroundColor:`#f6f8fa`},styles:[{types:[`comment`,`prolog`,`doctype`,`cdata`],style:{color:`#999988`,fontStyle:`italic`}},{types:[`namespace`],style:{opacity:.7}},{types:[`string`,`attr-value`],style:{color:`#e3116c`}},{types:[`punctuation`,`operator`],style:{color:`#393A34`}},{types:[`entity`,`url`,`symbol`,`number`,`boolean`,`variable`,`constant`,`property`,`regex`,`inserted`],style:{color:`#36acaa`}},{types:[`atrule`,`keyword`,`attr-name`,`selector`],style:{color:`#00a4db`}},{types:[`function`,`deleted`,`tag`],style:{color:`#d73a49`}},{types:[`function-variable`],style:{color:`#6f42c1`}},{types:[`tag`,`selector`,`keyword`],style:{color:`#00009f`}}]},nn={plain:{color:`#d6deeb`,backgroundColor:`#011627`},styles:[{types:[`changed`],style:{color:`rgb(162, 191, 252)`,fontStyle:`italic`}},{types:[`deleted`],style:{color:`rgba(239, 83, 80, 0.56)`,fontStyle:`italic`}},{types:[`inserted`,`attr-name`],style:{color:`rgb(173, 219, 103)`,fontStyle:`italic`}},{types:[`comment`],style:{color:`rgb(99, 119, 119)`,fontStyle:`italic`}},{types:[`string`,`url`],style:{color:`rgb(173, 219, 103)`}},{types:[`variable`],style:{color:`rgb(214, 222, 235)`}},{types:[`number`],style:{color:`rgb(247, 140, 108)`}},{types:[`builtin`,`char`,`constant`,`function`],style:{color:`rgb(130, 170, 255)`}},{types:[`punctuation`],style:{color:`rgb(199, 146, 234)`}},{types:[`selector`,`doctype`],style:{color:`rgb(199, 146, 234)`,fontStyle:`italic`}},{types:[`class-name`],style:{color:`rgb(255, 203, 139)`}},{types:[`tag`,`operator`,`keyword`],style:{color:`rgb(127, 219, 202)`}},{types:[`boolean`],style:{color:`rgb(255, 88, 116)`}},{types:[`property`],style:{color:`rgb(128, 203, 196)`}},{types:[`namespace`],style:{color:`rgb(178, 204, 214)`}}]},rn={plain:{color:`#403f53`,backgroundColor:`#FBFBFB`},styles:[{types:[`changed`],style:{color:`rgb(162, 191, 252)`,fontStyle:`italic`}},{types:[`deleted`],style:{color:`rgba(239, 83, 80, 0.56)`,fontStyle:`italic`}},{types:[`inserted`,`attr-name`],style:{color:`rgb(72, 118, 214)`,fontStyle:`italic`}},{types:[`comment`],style:{color:`rgb(152, 159, 177)`,fontStyle:`italic`}},{types:[`string`,`builtin`,`char`,`constant`,`url`],style:{color:`rgb(72, 118, 214)`}},{types:[`variable`],style:{color:`rgb(201, 103, 101)`}},{types:[`number`],style:{color:`rgb(170, 9, 130)`}},{types:[`punctuation`],style:{color:`rgb(153, 76, 195)`}},{types:[`function`,`selector`,`doctype`],style:{color:`rgb(153, 76, 195)`,fontStyle:`italic`}},{types:[`class-name`],style:{color:`rgb(17, 17, 17)`}},{types:[`tag`],style:{color:`rgb(153, 76, 195)`}},{types:[`operator`,`property`,`keyword`,`namespace`],style:{color:`rgb(12, 150, 155)`}},{types:[`boolean`],style:{color:`rgb(188, 84, 84)`}}]},an={char:`#D8DEE9`,comment:`#999999`,keyword:`#c5a5c5`,primitive:`#5a9bcf`,string:`#8dc891`,variable:`#d7deea`,boolean:`#ff8b50`,punctuation:`#5FB3B3`,tag:`#fc929e`,function:`#79b6f2`,className:`#FAC863`,method:`#6699CC`,operator:`#fc929e`},on={plain:{backgroundColor:`#282c34`,color:`#ffffff`},styles:[{types:[`attr-name`],style:{color:an.keyword}},{types:[`attr-value`],style:{color:an.string}},{types:[`comment`,`block-comment`,`prolog`,`doctype`,`cdata`,`shebang`],style:{color:an.comment}},{types:[`property`,`number`,`function-name`,`constant`,`symbol`,`deleted`],style:{color:an.primitive}},{types:[`boolean`],style:{color:an.boolean}},{types:[`tag`],style:{color:an.tag}},{types:[`string`],style:{color:an.string}},{types:[`punctuation`],style:{color:an.string}},{types:[`selector`,`char`,`builtin`,`inserted`],style:{color:an.char}},{types:[`function`],style:{color:an.function}},{types:[`operator`,`entity`,`url`,`variable`],style:{color:an.variable}},{types:[`keyword`],style:{color:an.keyword}},{types:[`atrule`,`class-name`],style:{color:an.className}},{types:[`important`],style:{fontWeight:`400`}},{types:[`bold`],style:{fontWeight:`bold`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`namespace`],style:{opacity:.7}}]},sn={plain:{color:`#f8f8f2`,backgroundColor:`#272822`},styles:[{types:[`changed`],style:{color:`rgb(162, 191, 252)`,fontStyle:`italic`}},{types:[`deleted`],style:{color:`#f92672`,fontStyle:`italic`}},{types:[`inserted`],style:{color:`rgb(173, 219, 103)`,fontStyle:`italic`}},{types:[`comment`],style:{color:`#8292a2`,fontStyle:`italic`}},{types:[`string`,`url`],style:{color:`#a6e22e`}},{types:[`variable`],style:{color:`#f8f8f2`}},{types:[`number`],style:{color:`#ae81ff`}},{types:[`builtin`,`char`,`constant`,`function`,`class-name`],style:{color:`#e6db74`}},{types:[`punctuation`],style:{color:`#f8f8f2`}},{types:[`selector`,`doctype`],style:{color:`#a6e22e`,fontStyle:`italic`}},{types:[`tag`,`operator`,`keyword`],style:{color:`#66d9ef`}},{types:[`boolean`],style:{color:`#ae81ff`}},{types:[`namespace`],style:{color:`rgb(178, 204, 214)`,opacity:.7}},{types:[`tag`,`property`],style:{color:`#f92672`}},{types:[`attr-name`],style:{color:`#a6e22e !important`}},{types:[`doctype`],style:{color:`#8292a2`}},{types:[`rule`],style:{color:`#e6db74`}}]},cn={plain:{color:`#bfc7d5`,backgroundColor:`#292d3e`},styles:[{types:[`comment`],style:{color:`rgb(105, 112, 152)`,fontStyle:`italic`}},{types:[`string`,`inserted`],style:{color:`rgb(195, 232, 141)`}},{types:[`number`],style:{color:`rgb(247, 140, 108)`}},{types:[`builtin`,`char`,`constant`,`function`],style:{color:`rgb(130, 170, 255)`}},{types:[`punctuation`,`selector`],style:{color:`rgb(199, 146, 234)`}},{types:[`variable`],style:{color:`rgb(191, 199, 213)`}},{types:[`class-name`,`attr-name`],style:{color:`rgb(255, 203, 107)`}},{types:[`tag`,`deleted`],style:{color:`rgb(255, 85, 114)`}},{types:[`operator`],style:{color:`rgb(137, 221, 255)`}},{types:[`boolean`],style:{color:`rgb(255, 88, 116)`}},{types:[`keyword`],style:{fontStyle:`italic`}},{types:[`doctype`],style:{color:`rgb(199, 146, 234)`,fontStyle:`italic`}},{types:[`namespace`],style:{color:`rgb(178, 204, 214)`}},{types:[`url`],style:{color:`rgb(221, 221, 221)`}}]},ln={plain:{color:`#9EFEFF`,backgroundColor:`#2D2A55`},styles:[{types:[`changed`],style:{color:`rgb(255, 238, 128)`}},{types:[`deleted`],style:{color:`rgba(239, 83, 80, 0.56)`}},{types:[`inserted`],style:{color:`rgb(173, 219, 103)`}},{types:[`comment`],style:{color:`rgb(179, 98, 255)`,fontStyle:`italic`}},{types:[`punctuation`],style:{color:`rgb(255, 255, 255)`}},{types:[`constant`],style:{color:`rgb(255, 98, 140)`}},{types:[`string`,`url`],style:{color:`rgb(165, 255, 144)`}},{types:[`variable`],style:{color:`rgb(255, 238, 128)`}},{types:[`number`,`boolean`],style:{color:`rgb(255, 98, 140)`}},{types:[`attr-name`],style:{color:`rgb(255, 180, 84)`}},{types:[`keyword`,`operator`,`property`,`namespace`,`tag`,`selector`,`doctype`],style:{color:`rgb(255, 157, 0)`}},{types:[`builtin`,`char`,`constant`,`function`,`class-name`],style:{color:`rgb(250, 208, 0)`}}]},un={plain:{backgroundColor:`linear-gradient(to bottom, #2a2139 75%, #34294f)`,backgroundImage:`#34294f`,color:`#f92aad`,textShadow:`0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3`},styles:[{types:[`comment`,`block-comment`,`prolog`,`doctype`,`cdata`],style:{color:`#495495`,fontStyle:`italic`}},{types:[`punctuation`],style:{color:`#ccc`}},{types:[`tag`,`attr-name`,`namespace`,`number`,`unit`,`hexcode`,`deleted`],style:{color:`#e2777a`}},{types:[`property`,`selector`],style:{color:`#72f1b8`,textShadow:`0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475`}},{types:[`function-name`],style:{color:`#6196cc`}},{types:[`boolean`,`selector-id`,`function`],style:{color:`#fdfdfd`,textShadow:`0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975`}},{types:[`class-name`,`maybe-class-name`,`builtin`],style:{color:`#fff5f6`,textShadow:`0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75`}},{types:[`constant`,`symbol`],style:{color:`#f92aad`,textShadow:`0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3`}},{types:[`important`,`atrule`,`keyword`,`selector-class`],style:{color:`#f4eee4`,textShadow:`0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575`}},{types:[`string`,`char`,`attr-value`,`regex`,`variable`],style:{color:`#f87c32`}},{types:[`parameter`],style:{fontStyle:`italic`}},{types:[`entity`,`url`],style:{color:`#67cdcc`}},{types:[`operator`],style:{color:`ffffffee`}},{types:[`important`,`bold`],style:{fontWeight:`bold`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`entity`],style:{cursor:`help`}},{types:[`inserted`],style:{color:`green`}}]},dn={plain:{color:`#282a2e`,backgroundColor:`#ffffff`},styles:[{types:[`comment`],style:{color:`rgb(197, 200, 198)`}},{types:[`string`,`number`,`builtin`,`variable`],style:{color:`rgb(150, 152, 150)`}},{types:[`class-name`,`function`,`tag`,`attr-name`],style:{color:`rgb(40, 42, 46)`}}]},fn={plain:{color:`#9CDCFE`,backgroundColor:`#1E1E1E`},styles:[{types:[`prolog`],style:{color:`rgb(0, 0, 128)`}},{types:[`comment`],style:{color:`rgb(106, 153, 85)`}},{types:[`builtin`,`changed`,`keyword`,`interpolation-punctuation`],style:{color:`rgb(86, 156, 214)`}},{types:[`number`,`inserted`],style:{color:`rgb(181, 206, 168)`}},{types:[`constant`],style:{color:`rgb(100, 102, 149)`}},{types:[`attr-name`,`variable`],style:{color:`rgb(156, 220, 254)`}},{types:[`deleted`,`string`,`attr-value`,`template-punctuation`],style:{color:`rgb(206, 145, 120)`}},{types:[`selector`],style:{color:`rgb(215, 186, 125)`}},{types:[`tag`],style:{color:`rgb(78, 201, 176)`}},{types:[`tag`],languages:[`markup`],style:{color:`rgb(86, 156, 214)`}},{types:[`punctuation`,`operator`],style:{color:`rgb(212, 212, 212)`}},{types:[`punctuation`],languages:[`markup`],style:{color:`#808080`}},{types:[`function`],style:{color:`rgb(220, 220, 170)`}},{types:[`class-name`],style:{color:`rgb(78, 201, 176)`}},{types:[`char`],style:{color:`rgb(209, 105, 105)`}}]},pn={plain:{color:`#000000`,backgroundColor:`#ffffff`},styles:[{types:[`comment`],style:{color:`rgb(0, 128, 0)`}},{types:[`builtin`],style:{color:`rgb(0, 112, 193)`}},{types:[`number`,`variable`,`inserted`],style:{color:`rgb(9, 134, 88)`}},{types:[`operator`],style:{color:`rgb(0, 0, 0)`}},{types:[`constant`,`char`],style:{color:`rgb(129, 31, 63)`}},{types:[`tag`],style:{color:`rgb(128, 0, 0)`}},{types:[`attr-name`],style:{color:`rgb(255, 0, 0)`}},{types:[`deleted`,`string`],style:{color:`rgb(163, 21, 21)`}},{types:[`changed`,`punctuation`],style:{color:`rgb(4, 81, 165)`}},{types:[`function`,`keyword`],style:{color:`rgb(0, 0, 255)`}},{types:[`class-name`],style:{color:`rgb(38, 127, 153)`}}]},mn={plain:{color:`#f8fafc`,backgroundColor:`#011627`},styles:[{types:[`prolog`],style:{color:`#000080`}},{types:[`comment`],style:{color:`#6A9955`}},{types:[`builtin`,`changed`,`keyword`,`interpolation-punctuation`],style:{color:`#569CD6`}},{types:[`number`,`inserted`],style:{color:`#B5CEA8`}},{types:[`constant`],style:{color:`#f8fafc`}},{types:[`attr-name`,`variable`],style:{color:`#9CDCFE`}},{types:[`deleted`,`string`,`attr-value`,`template-punctuation`],style:{color:`#cbd5e1`}},{types:[`selector`],style:{color:`#D7BA7D`}},{types:[`tag`],style:{color:`#0ea5e9`}},{types:[`tag`],languages:[`markup`],style:{color:`#0ea5e9`}},{types:[`punctuation`,`operator`],style:{color:`#D4D4D4`}},{types:[`punctuation`],languages:[`markup`],style:{color:`#808080`}},{types:[`function`],style:{color:`#7dd3fc`}},{types:[`class-name`],style:{color:`#0ea5e9`}},{types:[`char`],style:{color:`#D16969`}}]},hn={plain:{color:`#0f172a`,backgroundColor:`#f1f5f9`},styles:[{types:[`prolog`],style:{color:`#000080`}},{types:[`comment`],style:{color:`#6A9955`}},{types:[`builtin`,`changed`,`keyword`,`interpolation-punctuation`],style:{color:`#0c4a6e`}},{types:[`number`,`inserted`],style:{color:`#B5CEA8`}},{types:[`constant`],style:{color:`#0f172a`}},{types:[`attr-name`,`variable`],style:{color:`#0c4a6e`}},{types:[`deleted`,`string`,`attr-value`,`template-punctuation`],style:{color:`#64748b`}},{types:[`selector`],style:{color:`#D7BA7D`}},{types:[`tag`],style:{color:`#0ea5e9`}},{types:[`tag`],languages:[`markup`],style:{color:`#0ea5e9`}},{types:[`punctuation`,`operator`],style:{color:`#475569`}},{types:[`punctuation`],languages:[`markup`],style:{color:`#808080`}},{types:[`function`],style:{color:`#0e7490`}},{types:[`class-name`],style:{color:`#0ea5e9`}},{types:[`char`],style:{color:`#D16969`}}]},gn={plain:{backgroundColor:`hsl(220, 13%, 18%)`,color:`hsl(220, 14%, 71%)`,textShadow:`0 1px rgba(0, 0, 0, 0.3)`},styles:[{types:[`comment`,`prolog`,`cdata`],style:{color:`hsl(220, 10%, 40%)`}},{types:[`doctype`,`punctuation`,`entity`],style:{color:`hsl(220, 14%, 71%)`}},{types:[`attr-name`,`class-name`,`maybe-class-name`,`boolean`,`constant`,`number`,`atrule`],style:{color:`hsl(29, 54%, 61%)`}},{types:[`keyword`],style:{color:`hsl(286, 60%, 67%)`}},{types:[`property`,`tag`,`symbol`,`deleted`,`important`],style:{color:`hsl(355, 65%, 65%)`}},{types:[`selector`,`string`,`char`,`builtin`,`inserted`,`regex`,`attr-value`],style:{color:`hsl(95, 38%, 62%)`}},{types:[`variable`,`operator`,`function`],style:{color:`hsl(207, 82%, 66%)`}},{types:[`url`],style:{color:`hsl(187, 47%, 55%)`}},{types:[`deleted`],style:{textDecorationLine:`line-through`}},{types:[`inserted`],style:{textDecorationLine:`underline`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`important`,`bold`],style:{fontWeight:`bold`}},{types:[`important`],style:{color:`hsl(220, 14%, 71%)`}}]},_n={plain:{backgroundColor:`hsl(230, 1%, 98%)`,color:`hsl(230, 8%, 24%)`},styles:[{types:[`comment`,`prolog`,`cdata`],style:{color:`hsl(230, 4%, 64%)`}},{types:[`doctype`,`punctuation`,`entity`],style:{color:`hsl(230, 8%, 24%)`}},{types:[`attr-name`,`class-name`,`boolean`,`constant`,`number`,`atrule`],style:{color:`hsl(35, 99%, 36%)`}},{types:[`keyword`],style:{color:`hsl(301, 63%, 40%)`}},{types:[`property`,`tag`,`symbol`,`deleted`,`important`],style:{color:`hsl(5, 74%, 59%)`}},{types:[`selector`,`string`,`char`,`builtin`,`inserted`,`regex`,`attr-value`,`punctuation`],style:{color:`hsl(119, 34%, 47%)`}},{types:[`variable`,`operator`,`function`],style:{color:`hsl(221, 87%, 60%)`}},{types:[`url`],style:{color:`hsl(198, 99%, 37%)`}},{types:[`deleted`],style:{textDecorationLine:`line-through`}},{types:[`inserted`],style:{textDecorationLine:`underline`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`important`,`bold`],style:{fontWeight:`bold`}},{types:[`important`],style:{color:`hsl(230, 8%, 24%)`}}]},vn={plain:{color:`#ebdbb2`,backgroundColor:`#292828`},styles:[{types:[`imports`,`class-name`,`maybe-class-name`,`constant`,`doctype`,`builtin`,`function`],style:{color:`#d8a657`}},{types:[`property-access`],style:{color:`#7daea3`}},{types:[`tag`],style:{color:`#e78a4e`}},{types:[`attr-name`,`char`,`url`,`regex`],style:{color:`#a9b665`}},{types:[`attr-value`,`string`],style:{color:`#89b482`}},{types:[`comment`,`prolog`,`cdata`,`operator`,`inserted`],style:{color:`#a89984`}},{types:[`delimiter`,`boolean`,`keyword`,`selector`,`important`,`atrule`,`property`,`variable`,`deleted`],style:{color:`#ea6962`}},{types:[`entity`,`number`,`symbol`],style:{color:`#d3869b`}}]},yn={plain:{color:`#654735`,backgroundColor:`#f9f5d7`},styles:[{types:[`delimiter`,`boolean`,`keyword`,`selector`,`important`,`atrule`,`property`,`variable`,`deleted`],style:{color:`#af2528`}},{types:[`imports`,`class-name`,`maybe-class-name`,`constant`,`doctype`,`builtin`],style:{color:`#b4730e`}},{types:[`string`,`attr-value`],style:{color:`#477a5b`}},{types:[`property-access`],style:{color:`#266b79`}},{types:[`function`,`attr-name`,`char`,`url`],style:{color:`#72761e`}},{types:[`tag`],style:{color:`#b94c07`}},{types:[`comment`,`prolog`,`cdata`,`operator`,`inserted`],style:{color:`#a89984`}},{types:[`entity`,`number`,`symbol`],style:{color:`#924f79`}}]},bn=e=>(0,l.useCallback)(t=>{var n=t,{className:r,style:i,line:a}=n;let o=Kt(Gt({},qt(n,[`className`,`style`,`line`])),{className:fe(`token-line`,r)});return typeof e==`object`&&`plain`in e&&(o.style=e.plain),typeof i==`object`&&(o.style=Gt(Gt({},o.style||{}),i)),o},[e]),xn=e=>{let t=(0,l.useCallback)(({types:t,empty:n})=>{if(e!=null)return t.length===1&&t[0]===`plain`?n==null?void 0:{display:`inline-block`}:t.length===1&&n!=null?e[t[0]]:Object.assign(n==null?{}:{display:`inline-block`},...t.map(t=>e[t]))},[e]);return(0,l.useCallback)(e=>{var n=e,{token:r,className:i,style:a}=n;let o=Kt(Gt({},qt(n,[`token`,`className`,`style`])),{className:fe(`token`,...r.types,i),children:r.content,style:t(r)});return a!=null&&(o.style=Gt(Gt({},o.style||{}),a)),o},[t])},Sn=/\r\n|\r|\n/,Cn=e=>{e.length===0?e.push({types:[`plain`],content:`
`,empty:!0}):e.length===1&&e[0].content===``&&(e[0].content=`
`,e[0].empty=!0)},wn=(e,t)=>{let n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Tn=e=>{let t=[[]],n=[e],r=[0],i=[e.length],a=0,o=0,s=[],c=[s];for(;o>-1;){for(;(a=r[o]++)<i[o];){let e,l=t[o],u=n[o][a];if(typeof u==`string`?(l=o>0?l:[`plain`],e=u):(l=wn(l,u.type),u.alias&&(l=wn(l,u.alias)),e=u.content),typeof e!=`string`){o++,t.push(l),n.push(e),r.push(0),i.push(e.length);continue}let d=e.split(Sn),f=d.length;s.push({types:l,content:d[0]});for(let e=1;e<f;e++)Cn(s),c.push(s=[]),s.push({types:l,content:d[e]})}o--,t.pop(),n.pop(),r.pop(),i.pop()}return Cn(s),c},En=({prism:e,code:t,grammar:n,language:r})=>(0,l.useMemo)(()=>{if(n==null)return Tn([t]);let i={code:t,grammar:n,language:r,tokens:[]};return e.hooks.run(`before-tokenize`,i),i.tokens=e.tokenize(t,n),e.hooks.run(`after-tokenize`,i),Tn(i.tokens)},[t,n,r,e]),Dn=(e,t)=>{let{plain:n}=e,r=e.styles.reduce((e,n)=>{let{languages:r,style:i}=n;return r&&!r.includes(t)||n.types.forEach(t=>{e[t]=Gt(Gt({},e[t]),i)}),e},{});return r.root=n,r.plain=Kt(Gt({},n),{backgroundColor:void 0}),r},On=({children:e,language:t,code:n,theme:r,prism:i})=>{let a=t.toLowerCase(),o=Dn(r,a),s=bn(o),c=xn(o),l=i.languages[a];return e({tokens:En({prism:i,language:a,code:n,grammar:l}),className:`prism-code language-${a}`,style:o==null?{}:o.root,getLineProps:s,getTokenProps:c})},kn=e=>(0,l.createElement)(On,Kt(Gt({},e),{prism:e.prism||R,theme:e.theme||fn,code:e.code,language:e.language})),An=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),z=e(((e,t)=>{t.exports=An()}))(),jn={ts:`typescript`,tsx:`tsx`,js:`javascript`,jsx:`jsx`,json:`json`,bash:`bash`,sh:`bash`,css:`css`,html:`markup`,xml:`markup`};function Mn({code:e,language:t,title:n}){let[r,i]=(0,l.useState)(!1),a=async()=>{await navigator.clipboard.writeText(e),i(!0),setTimeout(()=>i(!1),2e3)},o=jn[t??``]??`tsx`;return(0,z.jsxs)(`div`,{className:`group relative rounded-xl border border-zinc-800/80 overflow-hidden my-4 bg-[#0d1117] shadow-lg shadow-black/20 transition-all duration-300 hover:border-zinc-700/80 hover:shadow-xl hover:shadow-black/30`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-zinc-800/60`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,z.jsx)(`div`,{className:`size-3 rounded-full bg-[#ff5f57] opacity-80`}),(0,z.jsx)(`div`,{className:`size-3 rounded-full bg-[#febc2e] opacity-80`}),(0,z.jsx)(`div`,{className:`size-3 rounded-full bg-[#28c840] opacity-80`})]}),n&&(0,z.jsxs)(`div`,{className:`flex items-center gap-1.5 ml-2`,children:[(0,z.jsx)(ue,{className:`size-3.5 text-zinc-500`}),(0,z.jsx)(`span`,{className:`text-xs font-medium text-zinc-400`,children:n})]})]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[t&&(0,z.jsx)(`span`,{className:`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20`,children:t}),(0,z.jsx)(`button`,{onClick:a,className:L(`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200`,r?`bg-emerald-500/15 text-emerald-400 border border-emerald-500/30`:`text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 opacity-0 group-hover:opacity-100`),children:r?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(C,{className:`size-3.5`}),(0,z.jsx)(`span`,{children:`Kopyalandı!`})]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(te,{className:`size-3.5`}),(0,z.jsx)(`span`,{children:`Kopyala`})]})})]})]}),(0,z.jsx)(kn,{theme:Zt.nightOwl,code:e.trim(),language:o,children:({tokens:e,getLineProps:t,getTokenProps:n})=>(0,z.jsx)(`div`,{className:`relative overflow-x-auto`,children:(0,z.jsx)(`pre`,{className:`p-5 text-[13px] leading-7 font-mono`,style:{background:`transparent`},children:e.map((e,r)=>(0,z.jsxs)(`div`,{...t({line:e,key:r}),className:`table-row`,children:[(0,z.jsx)(`span`,{className:`table-cell pr-5 text-right text-zinc-600 select-none text-[12px] w-8 sticky left-0 bg-[#0d1117]`,children:r+1}),(0,z.jsx)(`span`,{className:`table-cell`,children:e.map((e,t)=>(0,z.jsx)(`span`,{...n({token:e,key:t})},t))})]},r))})})})]})}function Nn({title:e,content:t}){return(0,z.jsxs)(`div`,{className:`my-4 rounded-xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent overflow-hidden`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 px-4 py-2.5 bg-emerald-500/5 border-b border-emerald-500/10`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,z.jsx)(`div`,{className:`size-2.5 rounded-full bg-red-400/60`}),(0,z.jsx)(`div`,{className:`size-2.5 rounded-full bg-amber-400/60`}),(0,z.jsx)(`div`,{className:`size-2.5 rounded-full bg-emerald-400/60`})]}),(0,z.jsxs)(`div`,{className:`flex-1 flex items-center gap-2 ml-2 px-3 py-1 rounded-md bg-zinc-900/60 border border-zinc-800`,children:[(0,z.jsx)(ne,{className:`size-3 text-zinc-500`}),(0,z.jsx)(`span`,{className:`text-[11px] text-zinc-500`,children:`localhost:3000`})]}),(0,z.jsx)(`span`,{className:`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/25`,children:`Çıktı`})]}),e&&(0,z.jsx)(`div`,{className:`px-4 pt-3 pb-0`,children:(0,z.jsxs)(`span`,{className:`text-xs font-medium text-emerald-400/80`,children:[`↳ `,e]})}),(0,z.jsx)(`div`,{className:`p-5`,dangerouslySetInnerHTML:{__html:t}})]})}function Pn(){let[e,t]=(0,l.useState)(0);return(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-center gap-6`,children:[(0,z.jsx)(`button`,{onClick:()=>t(e=>e-1),className:`w-12 h-12 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all text-xl font-bold`,children:`−`}),(0,z.jsxs)(`div`,{className:`text-center`,children:[(0,z.jsx)(`div`,{className:`text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tabular-nums`,children:e}),(0,z.jsx)(`div`,{className:`text-xs text-zinc-500 mt-1`,children:`count değeri`})]}),(0,z.jsx)(`button`,{onClick:()=>t(e=>e+1),className:`w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all text-xl font-bold`,children:`+`})]}),(0,z.jsxs)(`div`,{className:`bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1`,children:[(0,z.jsx)(`div`,{className:`text-zinc-500`,children:`// React state takibi:`}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-purple-400`,children:`useState`}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:`(0) → count = `}),(0,z.jsx)(`span`,{className:`text-emerald-400 font-bold`,children:e})]}),(0,z.jsx)(`div`,{className:`text-zinc-500`,children:`// Butona tıkla → setCount çalışır → component yeniden render olur`})]}),(0,z.jsxs)(`div`,{className:`flex gap-2`,children:[(0,z.jsx)(`button`,{onClick:()=>t(0),className:`flex-1 py-2 rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-all text-xs`,children:`Sıfırla`}),(0,z.jsx)(`button`,{onClick:()=>{t(e=>e+1),t(e=>e+1),t(e=>e+1)},className:`flex-1 py-2 rounded-lg bg-violet-500/20 text-violet-400 border border-violet-500/30 hover:bg-violet-500/30 transition-all text-xs`,children:`+3 (updater ile)`})]})]})}function Fn(){let[e,t]=(0,l.useState)(!0),[n,r]=(0,l.useState)(!1),[i,a]=(0,l.useState)(!1);return(0,z.jsxs)(`div`,{className:`space-y-5`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/50`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`text-sm font-medium text-zinc-200`,children:`Tema`}),(0,z.jsxs)(`div`,{className:`text-xs text-zinc-500`,children:[`isDark = `,String(e)]})]}),(0,z.jsxs)(`button`,{onClick:()=>t(e=>!e),className:`relative w-14 h-7 rounded-full transition-colors duration-300 ${e?`bg-violet-600`:`bg-amber-400`}`,children:[(0,z.jsx)(`div`,{className:`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${e?`translate-x-7`:`translate-x-0.5`}`}),(0,z.jsx)(`span`,{className:`absolute inset-0 flex items-center justify-center text-xs`,children:e?`🌙`:`☀️`})]})]}),(0,z.jsxs)(`div`,{className:`rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden`,children:[(0,z.jsxs)(`button`,{onClick:()=>r(e=>!e),className:`w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`text-sm font-medium text-zinc-200`,children:`Accordion`}),(0,z.jsxs)(`div`,{className:`text-xs text-zinc-500`,children:[`isOpen = `,String(n)]})]}),(0,z.jsx)(`span`,{className:`text-zinc-400 transition-transform duration-300 ${n?`rotate-180`:``}`,children:`▼`})]}),(0,z.jsx)(`div`,{className:`overflow-hidden transition-all duration-300 ${n?`max-h-32 opacity-100`:`max-h-0 opacity-0`}`,children:(0,z.jsxs)(`div`,{className:`px-4 pb-4 text-sm text-zinc-400`,children:[`Bu içerik `,(0,z.jsx)(`code`,{className:`text-violet-400`,children:`isOpen`}),` state'i `,(0,z.jsx)(`code`,{className:`text-emerald-400`,children:`true`}),` olduğunda görünür. Boolean state ile açılıp kapanabilen UI öğeleri yapabilirsiniz!`]})})]}),(0,z.jsxs)(`div`,{className:`flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/50`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`text-sm font-medium text-zinc-200`,children:`Loading State`}),(0,z.jsxs)(`div`,{className:`text-xs text-zinc-500`,children:[`isLoading = `,String(i)]})]}),(0,z.jsx)(`button`,{onClick:()=>{a(!0),setTimeout(()=>a(!1),2e3)},disabled:i,className:`px-4 py-2 rounded-lg text-xs font-medium transition-all ${i?`bg-zinc-700 text-zinc-500 cursor-not-allowed`:`bg-blue-600 text-white hover:bg-blue-500`}`,children:i?(0,z.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(`span`,{className:`w-3 h-3 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin`}),`Yükleniyor...`]}):`Veri Çek (2sn)`})]}),(0,z.jsxs)(`div`,{className:`bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono`,children:[(0,z.jsx)(`span`,{className:`text-zinc-500`,children:`// Boolean state = `}),(0,z.jsx)(`span`,{className:`text-amber-400`,children:`true`}),(0,z.jsx)(`span`,{className:`text-zinc-500`,children:` / `}),(0,z.jsx)(`span`,{className:`text-amber-400`,children:`false`}),(0,z.jsx)(`span`,{className:`text-zinc-500`,children:` → UI'ı kontrol eder`})]})]})}function In(){let[e,t]=(0,l.useState)([{id:1,text:`React öğren`,done:!0},{id:2,text:`TypeScript öğren`,done:!1},{id:3,text:`Proje yap`,done:!1}]),[n,r]=(0,l.useState)(``),[i,a]=(0,l.useState)(0),o=()=>{n.trim()&&(t(e=>[...e,{id:Date.now(),text:n,done:!1}]),r(``),a(e=>e+1))},s=e=>{t(t=>t.map(t=>t.id===e?{...t,done:!t.done}:t)),a(e=>e+1)},c=e=>{t(t=>t.filter(t=>t.id!==e)),a(e=>e+1)},u=e.filter(e=>e.done).length;return(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`div`,{className:`flex gap-2`,children:[(0,z.jsx)(`input`,{value:n,onChange:e=>r(e.target.value),onKeyDown:e=>e.key===`Enter`&&o(),placeholder:`Yeni görev ekle...`,className:`flex-1 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors`}),(0,z.jsx)(`button`,{onClick:o,className:`px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors`,children:`Ekle`})]}),(0,z.jsxs)(`div`,{className:`space-y-1`,children:[(0,z.jsxs)(`div`,{className:`flex justify-between text-xs text-zinc-500`,children:[(0,z.jsxs)(`span`,{children:[u,`/`,e.length,` tamamlandı`]}),(0,z.jsxs)(`span`,{children:[e.length>0?Math.round(u/e.length*100):0,`%`]})]}),(0,z.jsx)(`div`,{className:`h-1.5 bg-zinc-800 rounded-full overflow-hidden`,children:(0,z.jsx)(`div`,{className:`h-full bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full transition-all duration-500`,style:{width:`${e.length>0?u/e.length*100:0}%`}})})]}),(0,z.jsxs)(`div`,{className:`space-y-2`,children:[e.map(e=>(0,z.jsxs)(`div`,{className:`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${e.done?`bg-emerald-500/5 border-emerald-500/20`:`bg-zinc-900/50 border-zinc-800 hover:border-zinc-700`}`,children:[(0,z.jsx)(`button`,{onClick:()=>s(e.id),className:`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${e.done?`bg-emerald-500 border-emerald-500 text-white`:`border-zinc-600 hover:border-violet-500`}`,children:e.done&&(0,z.jsx)(`span`,{className:`text-xs`,children:`✓`})}),(0,z.jsx)(`span`,{className:`flex-1 text-sm transition-all ${e.done?`line-through text-zinc-500`:`text-zinc-200`}`,children:e.text}),(0,z.jsx)(`button`,{onClick:()=>c(e.id),className:`text-zinc-600 hover:text-red-400 transition-colors text-sm`,children:`✕`})]},e.id)),e.length===0&&(0,z.jsx)(`div`,{className:`text-center py-6 text-zinc-600 text-sm`,children:`Görev yok — yukarıdan ekle! 🎯`})]}),(0,z.jsxs)(`div`,{className:`bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1`,children:[(0,z.jsx)(`div`,{className:`text-zinc-500`,children:`// State durumu:`}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-purple-400`,children:`todos`}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:`.length = `}),(0,z.jsx)(`span`,{className:`text-emerald-400`,children:e.length}),(0,z.jsx)(`span`,{className:`text-zinc-600`,children:` // [...prev, newTodo]`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-purple-400`,children:`filter`}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:`(done) = `}),(0,z.jsx)(`span`,{className:`text-emerald-400`,children:u}),(0,z.jsx)(`span`,{className:`text-zinc-600`,children:` // .filter(t => t.done)`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-purple-400`,children:`render`}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:` sayısı = `}),(0,z.jsx)(`span`,{className:`text-amber-400`,children:i}),(0,z.jsx)(`span`,{className:`text-zinc-600`,children:` // her state değişiminde +1`})]})]})]})}function Ln(){let[e,t]=(0,l.useState)(0),[n,r]=(0,l.useState)(!1),[i,a]=(0,l.useState)([]),o=(0,l.useRef)(null),s=(0,l.useRef)(null);(0,l.useEffect)(()=>{if(n)return a(e=>[...e,`▶ useEffect çalıştı — interval başlatıldı`]),o.current=setInterval(()=>{t(e=>e+1)},1e3),()=>{o.current&&(clearInterval(o.current),a(e=>[...e,`🧹 Cleanup çalıştı — interval temizlendi`]))}},[n]),(0,l.useEffect)(()=>{s.current?.scrollIntoView({behavior:`smooth`})},[i]);let c=()=>{r(!0),a(e=>[...e,`📌 setIsRunning(true) — dependency değişti`])},u=()=>{r(!1),a(e=>[...e,`📌 setIsRunning(false) — cleanup tetiklendi`])};return(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`div`,{className:`text-center py-4`,children:[(0,z.jsx)(`div`,{className:`text-5xl font-bold font-mono tabular-nums transition-colors ${n?`text-emerald-400`:`text-zinc-400`}`,children:(e=>{let t=Math.floor(e/60),n=e%60;return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`})(e)}),(0,z.jsxs)(`div`,{className:`text-xs text-zinc-500 mt-2`,children:[`isRunning = `,(0,z.jsx)(`span`,{className:n?`text-emerald-400`:`text-red-400`,children:String(n)})]})]}),(0,z.jsxs)(`div`,{className:`flex gap-2`,children:[n?(0,z.jsx)(`button`,{onClick:u,className:`flex-1 py-2.5 rounded-lg bg-amber-600 text-white text-sm font-medium hover:bg-amber-500 transition-colors`,children:`⏸ Durdur`}):(0,z.jsx)(`button`,{onClick:c,className:`flex-1 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-colors`,children:`▶ Başlat`}),(0,z.jsx)(`button`,{onClick:()=>{u(),t(0),a([`🔄 Sıfırlandı`])},className:`flex-1 py-2.5 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-700 transition-colors`,children:`↻ Sıfırla`})]}),(0,z.jsxs)(`div`,{className:`bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-hidden`,children:[(0,z.jsx)(`div`,{className:`px-3 py-2 border-b border-zinc-800 bg-zinc-800/50`,children:(0,z.jsx)(`span`,{className:`text-xs font-medium text-zinc-400`,children:`useEffect Yaşam Döngüsü Log`})}),(0,z.jsxs)(`div`,{className:`max-h-28 overflow-y-auto p-3 space-y-1 text-xs font-mono`,children:[i.length===0&&(0,z.jsx)(`div`,{className:`text-zinc-600`,children:`Başlat butonuna tıklayarak useEffect döngüsünü izle...`}),i.map((e,t)=>(0,z.jsx)(`div`,{className:`${e.includes(`Cleanup`)?`text-red-400`:e.includes(`useEffect`)?`text-emerald-400`:e.includes(`dependency`)?`text-amber-400`:`text-zinc-500`}`,children:e},t)),(0,z.jsx)(`div`,{ref:s})]})]}),(0,z.jsxs)(`div`,{className:`bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1`,children:[(0,z.jsx)(`div`,{className:`text-zinc-500`,children:`// useEffect akışı:`}),(0,z.jsx)(`div`,{className:`text-blue-400`,children:`// isRunning değişir → effect çalışır → interval başlar`}),(0,z.jsx)(`div`,{className:`text-red-400`,children:`// isRunning tekrar değişir → ÖNCE cleanup → SONRA yeni effect`}),(0,z.jsx)(`div`,{className:`text-zinc-500`,children:`// Bu sayede eski interval temizlenir, memory leak olmaz!`})]})]})}function Rn(){let[e,t]=(0,l.useState)(0),[n,r]=(0,l.useState)(!1),i={tag:`div`,children:[{tag:`h1`,text:`Sayaç`},{tag:`p`,text:String(e),changed:n},{tag:`button`,text:`Artır`}]},a={tag:`div`,children:[{tag:`h1`,text:`Sayaç`},{tag:`p`,text:String(e+1),changed:n},{tag:`button`,text:`Artır`}]},o=()=>{r(!0),setTimeout(()=>{t(e=>e+1),r(!1)},1500)},s=(e,t=0)=>{let n=t*20,r=e.changed;return(0,z.jsxs)(`div`,{style:{marginLeft:n},children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-1.5 py-0.5 px-2 rounded text-xs font-mono transition-all duration-500 ${r?`bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/40`:`text-zinc-400`}`,children:[(0,z.jsxs)(`span`,{className:`text-blue-400`,children:[`<`,e.tag,`>`]}),e.text!==void 0&&(0,z.jsx)(`span`,{className:r?`text-amber-300 font-bold`:`text-emerald-400`,children:e.text})]}),e.children?.map(e=>s(e,t+1))]},e.tag+t)};return(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,z.jsxs)(`div`,{className:`bg-zinc-900/70 rounded-lg border border-zinc-800 p-3`,children:[(0,z.jsxs)(`div`,{className:`text-xs font-medium text-zinc-500 mb-2 flex items-center gap-1.5`,children:[(0,z.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-blue-500`}),`Eski Virtual DOM`]}),s(i)]}),(0,z.jsxs)(`div`,{className:`bg-zinc-900/70 rounded-lg border border-zinc-800 p-3`,children:[(0,z.jsxs)(`div`,{className:`text-xs font-medium text-zinc-500 mb-2 flex items-center gap-1.5`,children:[(0,z.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-500`}),`Yeni Virtual DOM`]}),s(a)]})]}),(0,z.jsx)(`div`,{className:`rounded-lg border p-3 transition-all duration-500 ${n?`bg-amber-500/10 border-amber-500/30`:`bg-zinc-900/50 border-zinc-800`}`,children:(0,z.jsx)(`div`,{className:`text-xs font-mono space-y-1`,children:n?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`div`,{className:`text-amber-400 font-medium`,children:`🔍 Diffing (karşılaştırma) yapılıyor...`}),(0,z.jsxs)(`div`,{className:`text-zinc-500`,children:[`├─ <h1> değişmedi → `,(0,z.jsx)(`span`,{className:`text-emerald-400`,children:`DOKUNMA`})]}),(0,z.jsxs)(`div`,{className:`text-amber-300`,children:[`├─ <p> değişti: `,e,` → `,e+1,` → `,(0,z.jsx)(`span`,{className:`text-amber-400 font-bold`,children:`GÜNCELLE`})]}),(0,z.jsxs)(`div`,{className:`text-zinc-500`,children:[`└─ <button> değişmedi → `,(0,z.jsx)(`span`,{className:`text-emerald-400`,children:`DOKUNMA`})]}),(0,z.jsx)(`div`,{className:`text-violet-400 mt-2`,children:`Sonuç: Sadece 1 DOM güncellemesi (3 yerine!)`})]}):(0,z.jsx)(`div`,{className:`text-zinc-500`,children:`Butona tıklayarak Virtual DOM diff sürecini izle →`})})}),(0,z.jsxs)(`div`,{className:`flex items-center justify-between p-3 rounded-lg border border-zinc-800 bg-zinc-900/50`,children:[(0,z.jsxs)(`div`,{className:`text-sm text-zinc-300`,children:[`Gerçek DOM: count = `,(0,z.jsx)(`span`,{className:`text-emerald-400 font-bold font-mono`,children:e})]}),(0,z.jsx)(`button`,{onClick:o,disabled:n,className:`px-4 py-2 rounded-lg text-sm font-medium transition-all ${n?`bg-amber-600/30 text-amber-400 cursor-wait`:`bg-blue-600 text-white hover:bg-blue-500`}`,children:n?`Diffing...`:`setCount(count + 1)`})]})]})}function zn({name:e,role:t,isActive:n,onToggle:r}){return(0,z.jsx)(`div`,{className:`p-3 rounded-lg border transition-all duration-300 ${n?`bg-emerald-500/10 border-emerald-500/30`:`bg-zinc-900/50 border-zinc-800`}`,children:(0,z.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`text-sm font-medium text-zinc-200`,children:e}),(0,z.jsx)(`div`,{className:`text-xs text-zinc-500`,children:t})]}),(0,z.jsx)(`button`,{onClick:r,className:`px-3 py-1 rounded-md text-xs font-medium transition-all ${n?`bg-emerald-500/20 text-emerald-400 border border-emerald-500/30`:`bg-zinc-800 text-zinc-500 border border-zinc-700`}`,children:n?`🟢 Aktif`:`🔴 Pasif`})]})})}function Bn(){let[e,t]=(0,l.useState)([{id:1,name:`Çağlar`,role:`Frontend Dev`,isActive:!0},{id:2,name:`Ali`,role:`Backend Dev`,isActive:!1},{id:3,name:`Ayşe`,role:`Designer`,isActive:!0}]),n=e=>{t(t=>t.map(t=>t.id===e?{...t,isActive:!t.isActive}:t))},r=e.filter(e=>e.isActive).length;return(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`div`,{className:`bg-zinc-900/70 rounded-lg border border-zinc-800 p-3`,children:[(0,z.jsx)(`div`,{className:`text-xs font-medium text-violet-400 mb-2`,children:`Parent → Child Veri Akışı`}),(0,z.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-mono`,children:[(0,z.jsx)(`span`,{className:`px-2 py-1 rounded bg-violet-500/20 text-violet-300`,children:`Parent`}),(0,z.jsx)(`span`,{className:`text-zinc-600`,children:`──props──→`}),(0,z.jsx)(`span`,{className:`px-2 py-1 rounded bg-blue-500/20 text-blue-300`,children:`UserCard`}),(0,z.jsx)(`span`,{className:`text-zinc-600`,children:`──callback──→`}),(0,z.jsx)(`span`,{className:`px-2 py-1 rounded bg-violet-500/20 text-violet-300`,children:`Parent`})]}),(0,z.jsx)(`div`,{className:`text-xs text-zinc-600 mt-2`,children:`Veri aşağı akar (props), olaylar yukarı akar (callback)`})]}),(0,z.jsx)(`div`,{className:`space-y-2`,children:e.map(e=>(0,z.jsx)(zn,{name:e.name,role:e.role,isActive:e.isActive,onToggle:()=>n(e.id)},e.id))}),(0,z.jsxs)(`div`,{className:`bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1`,children:[(0,z.jsx)(`div`,{className:`text-zinc-500`,children:`// Her UserCard'a geçilen props:`}),e.map(e=>(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-blue-400`,children:`<UserCard`}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:` name=`}),(0,z.jsxs)(`span`,{className:`text-amber-400`,children:[`"`,e.name,`"`]}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:` isActive=`}),(0,z.jsx)(`span`,{className:e.isActive?`text-emerald-400`:`text-red-400`,children:`{`+String(e.isActive)+`}`}),(0,z.jsx)(`span`,{className:`text-blue-400`,children:` />`})]},e.id)),(0,z.jsxs)(`div`,{className:`text-zinc-500 mt-1`,children:[`// Aktif: `,r,`/`,e.length,` — her tıklamada parent state değişir, props güncellenir`]})]})]})}function Vn(){let[e,t]=(0,l.useState)(`idle`),[n,r]=(0,l.useState)(!0),[i,a]=(0,l.useState)(3),o=()=>{t(`loading`),setTimeout(()=>{t(Math.random()>.3?`success`:`error`)},1500)},s={idle:{icon:`⏸`,text:`Bekleniyor...`,color:`text-zinc-400`},loading:{icon:`⏳`,text:`Yükleniyor...`,color:`text-amber-400`},success:{icon:`✅`,text:`Başarılı!`,color:`text-emerald-400`},error:{icon:`❌`,text:`Hata oluştu!`,color:`text-red-400`}};return(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`div`,{className:`p-3 rounded-lg border border-zinc-800 bg-zinc-900/50`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,z.jsxs)(`span`,{className:`text-xs font-medium text-zinc-400`,children:[`&&`,` Operatörü`]}),(0,z.jsxs)(`div`,{className:`flex gap-2`,children:[(0,z.jsxs)(`button`,{onClick:()=>r(e=>!e),className:`px-2 py-1 rounded text-xs bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-colors`,children:[`Badge: `,n?`ON`:`OFF`]}),(0,z.jsx)(`button`,{onClick:()=>a(e=>Math.max(0,e-1)),className:`px-2 py-1 rounded text-xs bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-colors`,children:`−`}),(0,z.jsx)(`button`,{onClick:()=>a(e=>e+1),className:`px-2 py-1 rounded text-xs bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-colors`,children:`+`})]})]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50`,children:[(0,z.jsx)(`span`,{className:`text-sm text-zinc-300`,children:`🔔 Bildirimler`}),n&&i>0&&(0,z.jsx)(`span`,{className:`px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold animate-pulse`,children:i})]}),(0,z.jsxs)(`div`,{className:`mt-2 text-xs font-mono text-zinc-500`,children:[`showBadge=`,(0,z.jsx)(`span`,{className:n?`text-emerald-400`:`text-red-400`,children:String(n)}),` && `,`count=`,(0,z.jsx)(`span`,{className:i>0?`text-emerald-400`:`text-red-400`,children:i}),` → `,(0,z.jsx)(`span`,{className:n&&i>0?`text-emerald-400`:`text-red-400`,children:n&&i>0?`GÖSTER`:`GİZLE`})]})]}),(0,z.jsxs)(`div`,{className:`p-3 rounded-lg border border-zinc-800 bg-zinc-900/50`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,z.jsx)(`span`,{className:`text-xs font-medium text-zinc-400`,children:`Status Pattern (Object Map)`}),(0,z.jsx)(`div`,{className:`flex gap-1`,children:[`idle`,`loading`,`success`,`error`].map(n=>(0,z.jsx)(`button`,{onClick:()=>t(n),className:`px-2 py-1 rounded text-xs transition-colors ${e===n?`bg-violet-600 text-white`:`bg-zinc-800 text-zinc-500 hover:bg-zinc-700`}`,children:n},n))})]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-3 p-4 rounded-lg bg-zinc-800/50 transition-all duration-300 ${s[e].color}`,children:[(0,z.jsx)(`span`,{className:`text-2xl`,children:s[e].icon}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`text-sm font-medium`,children:s[e].text}),(0,z.jsxs)(`div`,{className:`text-xs opacity-60`,children:[`status = "`,e,`"`]})]}),e===`loading`&&(0,z.jsx)(`div`,{className:`ml-auto w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin`})]}),(0,z.jsx)(`button`,{onClick:o,disabled:e===`loading`,className:`mt-3 w-full py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,children:`API Çağrısı Simüle Et (%70 başarı)`})]}),(0,z.jsxs)(`div`,{className:`bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono`,children:[(0,z.jsx)(`span`,{className:`text-zinc-500`,children:`// Object Map: `}),(0,z.jsxs)(`span`,{className:`text-violet-400`,children:[`statusMap["`,e,`"]`]}),(0,z.jsx)(`span`,{className:`text-zinc-500`,children:` → if/else zinciri yerine obje lookup`})]})]})}function Hn(){let[e,t]=(0,l.useState)({name:``,email:``,message:``}),[n,r]=(0,l.useState)(!1),[i,a]=(0,l.useState)([]),o=(e,n)=>{t(t=>({...t,[e]:n})),a(t=>[...t.slice(-4),`setForm({ ${e}: "${n.slice(-15)}" })`])},s=e=>{e.preventDefault(),r(!0),a(e=>[...e.slice(-4),`✅ Form submitted!`]),setTimeout(()=>r(!1),3e3)},c=e.name.length>0&&e.email.includes(`@`)&&e.message.length>0;return(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`form`,{onSubmit:s,className:`space-y-3`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`label`,{className:`text-xs text-zinc-500 mb-1 block`,children:`İsim`}),(0,z.jsx)(`input`,{value:e.name,onChange:e=>o(`name`,e.target.value),placeholder:`Adınız...`,className:`w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors`}),e.name.length>0&&e.name.length<2&&(0,z.jsx)(`span`,{className:`text-xs text-amber-400 mt-1`,children:`En az 2 karakter`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`label`,{className:`text-xs text-zinc-500 mb-1 block`,children:`E-posta`}),(0,z.jsx)(`input`,{value:e.email,onChange:e=>o(`email`,e.target.value),placeholder:`email@ornek.com`,className:`w-full px-3 py-2 rounded-lg bg-zinc-900 border text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none transition-colors ${e.email.length>0&&!e.email.includes(`@`)?`border-red-500 focus:border-red-500`:`border-zinc-700 focus:border-violet-500`}`}),e.email.length>0&&!e.email.includes(`@`)&&(0,z.jsx)(`span`,{className:`text-xs text-red-400 mt-1`,children:`Geçersiz e-posta`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`label`,{className:`text-xs text-zinc-500 mb-1 block`,children:`Mesaj`}),(0,z.jsx)(`textarea`,{value:e.message,onChange:e=>o(`message`,e.target.value),placeholder:`Mesajınız...`,rows:2,className:`w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none`})]}),(0,z.jsx)(`button`,{type:`submit`,disabled:!c,className:`w-full py-2.5 rounded-lg text-sm font-medium transition-all ${n?`bg-emerald-600 text-white`:c?`bg-violet-600 text-white hover:bg-violet-500`:`bg-zinc-800 text-zinc-500 cursor-not-allowed`}`,children:n?`✅ Gönderildi!`:c?`Gönder`:`Tüm alanları doldurun`})]}),(0,z.jsxs)(`div`,{className:`bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1`,children:[(0,z.jsx)(`div`,{className:`text-zinc-500`,children:`// Kontrollü Form State:`}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-purple-400`,children:`form`}),(0,z.jsxs)(`span`,{className:`text-zinc-400`,children:[` = `,`{`]})]}),(0,z.jsxs)(`div`,{className:`pl-4`,children:[(0,z.jsx)(`span`,{className:`text-blue-400`,children:`name`}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:`: `}),(0,z.jsxs)(`span`,{className:`text-amber-400`,children:[`"`,e.name,`"`]})]}),(0,z.jsxs)(`div`,{className:`pl-4`,children:[(0,z.jsx)(`span`,{className:`text-blue-400`,children:`email`}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:`: `}),(0,z.jsxs)(`span`,{className:e.email.includes(`@`)?`text-emerald-400`:`text-amber-400`,children:[`"`,e.email,`"`]})]}),(0,z.jsxs)(`div`,{className:`pl-4`,children:[(0,z.jsx)(`span`,{className:`text-blue-400`,children:`message`}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:`: `}),(0,z.jsxs)(`span`,{className:`text-amber-400`,children:[`"`,e.message.length>20?e.message.slice(0,20)+`...`:e.message,`"`]})]}),(0,z.jsx)(`div`,{children:(0,z.jsx)(`span`,{className:`text-zinc-400`,children:`}`})}),(0,z.jsxs)(`div`,{className:`text-zinc-500 mt-1`,children:[`// isValid = `,String(c)]})]}),i.length>0&&(0,z.jsxs)(`div`,{className:`bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono`,children:[(0,z.jsx)(`div`,{className:`text-zinc-500 mb-1`,children:`// Son güncellemeler:`}),i.map((e,t)=>(0,z.jsx)(`div`,{className:e.includes(`✅`)?`text-emerald-400`:`text-zinc-500`,children:e},t))]})]})}function Un(){let e=(0,l.useRef)(null),[t,n]=(0,l.useState)(``),r=(0,l.useRef)(0),i=(0,l.useRef)(``),[a,o]=(0,l.useState)([]),s=(0,l.useRef)(null);return r.current+=1,(0,l.useEffect)(()=>{i.current=t},[t]),(0,l.useEffect)(()=>{s.current?.scrollIntoView({behavior:`smooth`})},[a]),(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`div`,{className:`p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 space-y-3`,children:[(0,z.jsx)(`div`,{className:`text-xs font-medium text-violet-400`,children:`useRef — DOM Erişimi`}),(0,z.jsx)(`input`,{ref:e,value:t,onChange:e=>n(e.target.value),placeholder:`Bu input'un ref'i var...`,className:`w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20 transition-all`}),(0,z.jsxs)(`div`,{className:`flex gap-2`,children:[(0,z.jsx)(`button`,{onClick:()=>{e.current?.focus(),o(e=>[...e,`🎯 inputRef.current.focus() çağrıldı`])},className:`flex-1 py-2 rounded-lg bg-violet-600/20 text-violet-400 border border-violet-500/30 text-xs font-medium hover:bg-violet-600/30 transition-colors`,children:`Focus Ver`}),(0,z.jsx)(`button`,{onClick:()=>{e.current?.select(),o(e=>[...e,`📋 inputRef.current.select() çağrıldı`])},className:`flex-1 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-medium hover:bg-blue-600/30 transition-colors`,children:`Tümünü Seç`})]})]}),(0,z.jsxs)(`div`,{className:`p-3 rounded-lg border border-zinc-800 bg-zinc-900/50`,children:[(0,z.jsx)(`div`,{className:`text-xs font-medium text-amber-400 mb-3`,children:`useRef — Mutable Değerler (re-render tetiklemez!)`}),(0,z.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,z.jsxs)(`div`,{className:`p-3 rounded-lg bg-zinc-800/50 text-center`,children:[(0,z.jsx)(`div`,{className:`text-2xl font-bold text-emerald-400 font-mono`,children:r.current}),(0,z.jsx)(`div`,{className:`text-xs text-zinc-500 mt-1`,children:`Render sayısı`}),(0,z.jsx)(`div`,{className:`text-[10px] text-zinc-600`,children:`(useRef — re-render yok)`})]}),(0,z.jsxs)(`div`,{className:`p-3 rounded-lg bg-zinc-800/50 text-center`,children:[(0,z.jsx)(`div`,{className:`text-lg font-bold text-amber-400 font-mono truncate`,children:i.current||`—`}),(0,z.jsx)(`div`,{className:`text-xs text-zinc-500 mt-1`,children:`Önceki değer`}),(0,z.jsx)(`div`,{className:`text-[10px] text-zinc-600`,children:`(prevValue.current)`})]})]})]}),a.length>0&&(0,z.jsxs)(`div`,{className:`bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-hidden`,children:[(0,z.jsxs)(`div`,{className:`px-3 py-2 border-b border-zinc-800 bg-zinc-800/50 flex justify-between`,children:[(0,z.jsx)(`span`,{className:`text-xs font-medium text-zinc-400`,children:`DOM İşlem Logu`}),(0,z.jsx)(`button`,{onClick:()=>o([]),className:`text-xs text-zinc-600 hover:text-zinc-400`,children:`Temizle`})]}),(0,z.jsxs)(`div`,{className:`max-h-20 overflow-y-auto p-2 space-y-0.5 text-xs font-mono`,children:[a.map((e,t)=>(0,z.jsx)(`div`,{className:`text-zinc-400`,children:e},t)),(0,z.jsx)(`div`,{ref:s})]})]}),(0,z.jsxs)(`div`,{className:`bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1`,children:[(0,z.jsx)(`div`,{className:`text-zinc-500`,children:`// useRef vs useState:`}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-purple-400`,children:`renderCount`}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:`.current = `}),(0,z.jsx)(`span`,{className:`text-emerald-400`,children:r.current}),(0,z.jsx)(`span`,{className:`text-zinc-600`,children:` // değişir ama render tetiklemez`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-purple-400`,children:`inputValue`}),(0,z.jsx)(`span`,{className:`text-zinc-400`,children:` = `}),(0,z.jsxs)(`span`,{className:`text-amber-400`,children:[`"`,t,`"`]}),(0,z.jsx)(`span`,{className:`text-zinc-600`,children:` // useState → render tetikler`})]})]})]})}var Wn={counter:{component:Pn,title:`Sayaç Demo`,description:`useState ile state değişimini canlı gör`},toggle:{component:Fn,title:`Toggle Demo`,description:`Boolean state ile UI kontrol et`},todo:{component:In,title:`Todo List Demo`,description:`Dizi state: ekle, sil, güncelle, filtrele`},timer:{component:Ln,title:`Kronometre Demo`,description:`useEffect yaşam döngüsünü izle: setup → cleanup`},"virtual-dom":{component:Rn,title:`Virtual DOM Demo`,description:`Diffing algoritmasını görselleştir`},props:{component:Bn,title:`Props Demo`,description:`Parent → Child veri akışını gör`},conditional:{component:Vn,title:`Conditional Render Demo`,description:`&&, ternary ve object map pattern canlı`},form:{component:Hn,title:`Form Demo`,description:`Kontrollü form: input → state → validation`},ref:{component:Un,title:`useRef Demo`,description:`DOM erişimi ve mutable değerler`}};function Gn({demoId:e}){let t=Wn[e];if(!t)return(0,z.jsxs)(`div`,{className:`my-4 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm`,children:[`Demo bulunamadı: `,e]});let n=t.component;return(0,z.jsxs)(`div`,{className:`my-5 rounded-xl border border-violet-500/20 bg-gradient-to-b from-violet-500/5 to-transparent overflow-hidden`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-3 px-4 py-3 border-b border-violet-500/10 bg-violet-500/5`,children:[(0,z.jsx)(`div`,{className:`flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20`,children:(0,z.jsx)(ce,{className:`w-4 h-4 text-violet-400`})}),(0,z.jsxs)(`div`,{className:`flex-1`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(`span`,{className:`text-sm font-semibold text-violet-300`,children:t.title}),(0,z.jsxs)(`span`,{className:`flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 text-[10px] font-medium`,children:[(0,z.jsx)(D,{className:`w-2.5 h-2.5 fill-current`}),`İnteraktif`]})]}),(0,z.jsx)(`div`,{className:`text-xs text-zinc-500`,children:t.description})]})]}),(0,z.jsx)(`div`,{className:`p-4`,children:(0,z.jsx)(n,{})})]})}var Kn=o();function qn(e){let t=[],n=[],r=[];for(let i of e){i.type===`text`||i.type===`tip`||i.type===`warning`?n.push(i):r.push(i);let e=n.length>=3&&r.length>=1,a=r.length>=2&&n.length>=1,o=n.length>=2&&r.length>=1;(e||a||o)&&(t.push({left:n,right:r}),n=[],r=[])}if((n.length>0||r.length>0)&&t.push({left:n,right:r}),t.length===0&&e.length>0){let n=e.filter(e=>e.type===`text`||e.type===`tip`||e.type===`warning`),r=e.filter(e=>e.type!==`text`&&e.type!==`tip`&&e.type!==`warning`);t.push({left:n,right:r})}return t}function Jn(e,t){switch(e.type){case`text`:return(0,z.jsx)(`p`,{className:`text-[15px] text-zinc-300 leading-8 tracking-wide`,children:e.content},t);case`tip`:return(0,z.jsxs)(`div`,{className:`flex gap-3 p-4 rounded-xl bg-sky-500/[0.07] border border-sky-500/20`,children:[(0,z.jsx)(`div`,{className:`flex items-center justify-center size-7 rounded-lg bg-sky-500/15 shrink-0 mt-0.5`,children:(0,z.jsx)(ae,{className:`size-3.5 text-sky-400`})}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`p`,{className:`text-[11px] font-semibold text-sky-400 uppercase tracking-wider mb-1`,children:`İpucu`}),(0,z.jsx)(`p`,{className:`text-sm text-sky-200/80 leading-relaxed`,children:e.content})]})]},t);case`warning`:return(0,z.jsxs)(`div`,{className:`flex gap-3 p-4 rounded-xl bg-amber-500/[0.07] border border-amber-500/20`,children:[(0,z.jsx)(`div`,{className:`flex items-center justify-center size-7 rounded-lg bg-amber-500/15 shrink-0 mt-0.5`,children:(0,z.jsx)(de,{className:`size-3.5 text-amber-400`})}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`p`,{className:`text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1`,children:`Dikkat`}),(0,z.jsx)(`p`,{className:`text-sm text-amber-200/80 leading-relaxed`,children:e.content})]})]},t);case`code`:return(0,z.jsx)(Mn,{code:e.content,language:e.language,title:e.title},t);case`preview`:return(0,z.jsx)(Nn,{content:e.content,title:e.title},t);case`demo`:return e.demoId?(0,z.jsx)(Gn,{demoId:e.demoId},t):null;default:return null}}function Yn({lesson:e,lessonIndex:t,totalLessons:n,sectionTitle:r,accentColor:i,onClose:a,onNavigate:o}){let s=qn(e.blocks),[c,u]=(0,l.useState)(0),d=s.length,f=(0,l.useCallback)(()=>{c<d-1&&u(e=>e+1)},[c,d]),p=(0,l.useCallback)(()=>{c>0&&u(e=>e-1)},[c]);(0,l.useEffect)(()=>{let e=e=>{e.key===`Escape`&&a(),(e.key===`ArrowRight`||e.key===`ArrowDown`)&&f(),(e.key===`ArrowLeft`||e.key===`ArrowUp`)&&p()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[a,f,p]),(0,l.useEffect)(()=>{u(0)},[e.id]),(0,l.useEffect)(()=>(document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=``}),[]);let m=s[c],h=m?.left.length>0,g=m?.right.length>0;return(0,Kn.createPortal)((0,z.jsxs)(`div`,{className:`fixed inset-0 z-[9999] bg-zinc-950 flex flex-col animate-fade-in`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between px-6 py-3 border-b border-zinc-800/80 bg-zinc-900/80 backdrop-blur-xl shrink-0`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,z.jsx)(se,{className:L(`size-4`,i)}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-xs text-zinc-500`,children:r}),(0,z.jsx)(`h2`,{className:`text-sm font-semibold text-zinc-200`,children:e.title})]})]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,z.jsx)(`div`,{className:`flex items-center gap-2`,children:s.map((e,t)=>(0,z.jsx)(`button`,{onClick:()=>u(t),className:L(`transition-all duration-300 rounded-full`,t===c?`w-6 h-2 ${i===`text-emerald-400`?`bg-emerald-500`:i===`text-amber-400`?`bg-amber-500`:i===`text-rose-400`?`bg-rose-500`:`bg-violet-500`}`:`w-2 h-2 bg-zinc-700 hover:bg-zinc-600`)},t))}),(0,z.jsxs)(`span`,{className:`text-xs text-zinc-500 tabular-nums`,children:[c+1,` / `,d]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-1 border-l border-zinc-800 pl-4`,children:[(0,z.jsx)(`button`,{onClick:()=>o(`prev`),disabled:t===0,className:`p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,title:`Önceki ders`,children:(0,z.jsx)(S,{className:`size-4`})}),(0,z.jsxs)(`span`,{className:`text-xs text-zinc-600 tabular-nums mx-1`,children:[`Ders `,t+1,`/`,n]}),(0,z.jsx)(`button`,{onClick:()=>o(`next`),disabled:t===n-1,className:`p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,title:`Sonraki ders`,children:(0,z.jsx)(S,{className:`size-4`})})]}),(0,z.jsx)(`button`,{onClick:a,className:`p-2 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors`,title:`Kapat (Esc)`,children:(0,z.jsx)(k,{className:`size-5`})})]})]}),(0,z.jsx)(`div`,{className:`flex-1 overflow-hidden`,children:(0,z.jsxs)(`div`,{className:L(`h-full`,h&&g?`grid grid-cols-2`:`flex`),children:[h&&(0,z.jsx)(`div`,{className:L(`h-full overflow-y-auto border-r border-zinc-800/60`,!g&&`max-w-3xl mx-auto`),children:(0,z.jsxs)(`div`,{className:`p-8 lg:p-10 space-y-6`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 mb-2`,children:[(0,z.jsx)(`div`,{className:L(`w-1 h-6 rounded-full`,i===`text-emerald-400`?`bg-emerald-500`:i===`text-amber-400`?`bg-amber-500`:i===`text-rose-400`?`bg-rose-500`:`bg-violet-500`)}),(0,z.jsx)(`span`,{className:`text-xs font-medium text-zinc-500 uppercase tracking-wider`,children:`Açıklama`})]}),m.left.map((e,t)=>Jn(e,t))]})}),g&&(0,z.jsx)(`div`,{className:L(`h-full overflow-y-auto bg-zinc-900/30`,!h&&`max-w-4xl mx-auto w-full`),children:(0,z.jsxs)(`div`,{className:`p-8 lg:p-10 space-y-6`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 mb-2`,children:[(0,z.jsx)(`div`,{className:`w-1 h-6 rounded-full bg-blue-500`}),(0,z.jsx)(`span`,{className:`text-xs font-medium text-zinc-500 uppercase tracking-wider`,children:`Kod & Çıktı`})]}),m.right.map((e,t)=>Jn(e,t))]})})]})}),(0,z.jsxs)(`div`,{className:`flex items-center justify-between px-6 py-3 border-t border-zinc-800/80 bg-zinc-900/80 backdrop-blur-xl shrink-0`,children:[(0,z.jsxs)(`button`,{onClick:p,disabled:c===0,className:L(`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all`,c===0?`text-zinc-600 cursor-not-allowed`:`text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100`),children:[(0,z.jsx)(T,{className:`size-4`}),`Önceki`]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-1 text-xs text-zinc-600`,children:[(0,z.jsx)(`span`,{children:`← →`}),(0,z.jsx)(`span`,{className:`ml-1`,children:`ok tuşları ile gezin`}),(0,z.jsx)(`span`,{className:`mx-2`,children:`·`}),(0,z.jsx)(`span`,{children:`Esc`}),(0,z.jsx)(`span`,{className:`ml-1`,children:`kapatır`})]}),(0,z.jsxs)(`button`,{onClick:f,disabled:c===d-1,className:L(`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all`,c===d-1?`text-zinc-600 cursor-not-allowed`:L(`text-white`,i===`text-emerald-400`?`bg-emerald-600 hover:bg-emerald-500`:i===`text-amber-400`?`bg-amber-600 hover:bg-amber-500`:i===`text-rose-400`?`bg-rose-600 hover:bg-rose-500`:`bg-violet-600 hover:bg-violet-500`)),children:[`Sonraki`,(0,z.jsx)(E,{className:`size-4`})]})]})]}),document.body)}var Xn={beginner:{gradient:`from-emerald-500/20 via-transparent to-transparent`,border:`border-emerald-500/20 hover:border-emerald-500/40`,badge:`bg-emerald-500/15 text-emerald-400 border border-emerald-500/25`,icon:`🌱`,label:`Başlangıç`,accent:`text-emerald-400`,glow:`shadow-emerald-500/5`},intermediate:{gradient:`from-amber-500/20 via-transparent to-transparent`,border:`border-amber-500/20 hover:border-amber-500/40`,badge:`bg-amber-500/15 text-amber-400 border border-amber-500/25`,icon:`⚡`,label:`Orta Seviye`,accent:`text-amber-400`,glow:`shadow-amber-500/5`},advanced:{gradient:`from-rose-500/20 via-transparent to-transparent`,border:`border-rose-500/20 hover:border-rose-500/40`,badge:`bg-rose-500/15 text-rose-400 border border-rose-500/25`,icon:`🔥`,label:`İleri Seviye`,accent:`text-rose-400`,glow:`shadow-rose-500/5`},expert:{gradient:`from-violet-500/20 via-transparent to-transparent`,border:`border-violet-500/20 hover:border-violet-500/40`,badge:`bg-violet-500/15 text-violet-400 border border-violet-500/25`,icon:`👑`,label:`Uzman`,accent:`text-violet-400`,glow:`shadow-violet-500/5`}};function Zn({section:e}){let[t,n]=(0,l.useState)(new Set),[r,i]=(0,l.useState)(null),a=Xn[e.level],o=e=>{n(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},s=(0,l.useCallback)(t=>{i(n=>n===null?null:t===`prev`&&n>0?n-1:t===`next`&&n<e.lessons.length-1?n+1:n)},[e.lessons.length]);return(0,z.jsxs)(`div`,{id:e.id,className:L(`relative rounded-2xl border p-6 md:p-8 mb-8 transition-all duration-500 animate-fade-in`,`bg-zinc-900/40 backdrop-blur-sm`,`shadow-xl`,a.border,a.glow),children:[(0,z.jsx)(`div`,{className:L(`absolute inset-x-0 top-0 h-32 rounded-t-2xl bg-gradient-to-b pointer-events-none`,a.gradient)}),(0,z.jsxs)(`div`,{className:`relative z-[1] mb-6`,children:[(0,z.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,z.jsx)(`div`,{className:`text-3xl mt-0.5`,children:a.icon}),(0,z.jsxs)(`div`,{className:`flex-1`,children:[(0,z.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 mb-2`,children:[(0,z.jsx)(`h2`,{className:`text-2xl font-bold text-zinc-50 tracking-tight`,children:e.title}),(0,z.jsx)(`span`,{className:L(`text-[11px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider`,a.badge),children:a.label})]}),(0,z.jsx)(`p`,{className:`text-zinc-400 leading-relaxed text-[15px]`,children:e.description})]})]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-2 mt-4 text-xs text-zinc-500`,children:[(0,z.jsx)(S,{className:`size-3.5`}),(0,z.jsxs)(`span`,{children:[e.lessons.length,` ders`]}),(0,z.jsx)(`span`,{className:`text-zinc-700`,children:`•`}),(0,z.jsx)(le,{className:`size-3.5`}),(0,z.jsxs)(`span`,{children:[e.lessons.reduce((e,t)=>e+t.blocks.length,0),` içerik bloğu`]})]})]}),(0,z.jsx)(`div`,{className:`relative z-[1] space-y-3`,children:e.lessons.map((e,n)=>{let r=t.has(e.id);return(0,z.jsxs)(`div`,{className:L(`rounded-xl border transition-all duration-300`,r?`border-zinc-700/80 bg-zinc-900/80 shadow-lg shadow-black/10`:`border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700/60`),style:{animationDelay:`${n*50}ms`},children:[(0,z.jsxs)(`div`,{className:`flex items-center`,children:[(0,z.jsxs)(`button`,{onClick:()=>o(e.id),className:`flex-1 flex items-center gap-3 px-5 py-4 text-left transition-colors rounded-l-xl`,children:[(0,z.jsx)(`div`,{className:L(`flex items-center justify-center size-7 rounded-lg text-xs font-bold transition-colors`,r?`bg-zinc-800 ${a.accent}`:`bg-zinc-800/50 text-zinc-500`),children:n+1}),(0,z.jsx)(`span`,{className:L(`flex-1 font-semibold transition-colors`,r?`text-zinc-100`:`text-zinc-300`),children:e.title}),(0,z.jsx)(`div`,{className:L(`transition-transform duration-300`,r?`rotate-180`:`rotate-0`),children:r?(0,z.jsx)(w,{className:L(`size-5`,a.accent)}):(0,z.jsx)(E,{className:`size-5 text-zinc-600`})})]}),(0,z.jsx)(`button`,{onClick:e=>{e.stopPropagation(),i(n)},className:`p-4 rounded-r-xl text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/60 transition-colors`,title:`Tam ekran oku`,children:(0,z.jsx)(se,{className:`size-4`})})]}),r&&(0,z.jsxs)(`div`,{className:`px-5 pb-5 space-y-4 animate-fade-in`,children:[(0,z.jsx)(`div`,{className:`h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent`}),e.blocks.map((e,t)=>{switch(e.type){case`text`:return(0,z.jsx)(`p`,{className:`text-[15px] text-zinc-300 leading-7 tracking-wide`,children:e.content},t);case`code`:return(0,z.jsx)(Mn,{code:e.content,language:e.language,title:e.title},t);case`tip`:return(0,z.jsxs)(`div`,{className:`flex gap-3.5 p-4 rounded-xl bg-sky-500/[0.07] border border-sky-500/20 backdrop-blur-sm`,children:[(0,z.jsx)(`div`,{className:`flex items-center justify-center size-8 rounded-lg bg-sky-500/15 shrink-0`,children:(0,z.jsx)(ae,{className:`size-4 text-sky-400`})}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`p`,{className:`text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1`,children:`İpucu`}),(0,z.jsx)(`p`,{className:`text-sm text-sky-200/80 leading-relaxed`,children:e.content})]})]},t);case`warning`:return(0,z.jsxs)(`div`,{className:`flex gap-3.5 p-4 rounded-xl bg-amber-500/[0.07] border border-amber-500/20 backdrop-blur-sm`,children:[(0,z.jsx)(`div`,{className:`flex items-center justify-center size-8 rounded-lg bg-amber-500/15 shrink-0`,children:(0,z.jsx)(de,{className:`size-4 text-amber-400`})}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`p`,{className:`text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1`,children:`Dikkat`}),(0,z.jsx)(`p`,{className:`text-sm text-amber-200/80 leading-relaxed`,children:e.content})]})]},t);case`preview`:return(0,z.jsx)(Nn,{content:e.content,title:e.title},t);case`demo`:return e.demoId?(0,z.jsx)(Gn,{demoId:e.demoId},t):null;default:return null}})]})]},e.id)})}),r!==null&&(0,z.jsx)(Yn,{lesson:e.lessons[r],lessonIndex:r,totalLessons:e.lessons.length,sectionTitle:e.title,accentColor:a.accent,onClose:()=>i(null),onNavigate:s})]})}var Qn={beginner:{dot:`bg-emerald-400`,activeBg:`bg-emerald-500/10 border-emerald-500/30`,activeText:`text-emerald-300`,icon:`🌱`,label:`Başlangıç`,color:`text-emerald-400`},intermediate:{dot:`bg-amber-400`,activeBg:`bg-amber-500/10 border-amber-500/30`,activeText:`text-amber-300`,icon:`⚡`,label:`Orta`,color:`text-amber-400`},advanced:{dot:`bg-rose-400`,activeBg:`bg-rose-500/10 border-rose-500/30`,activeText:`text-rose-300`,icon:`🔥`,label:`İleri`,color:`text-rose-400`},expert:{dot:`bg-violet-400`,activeBg:`bg-violet-500/10 border-violet-500/30`,activeText:`text-violet-300`,icon:`👑`,label:`Uzman`,color:`text-violet-400`}};function $n({sections:e,activeSection:t}){let n=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})},r=e.findIndex(e=>e.id===t),i=e.length>0?(r+1)/e.length*100:0;return(0,z.jsxs)(`nav`,{className:`sticky top-24 space-y-1`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 mb-4 px-1`,children:[(0,z.jsx)(`div`,{className:`flex items-center justify-center size-7 rounded-lg bg-zinc-800 border border-zinc-700/50`,children:(0,z.jsx)(oe,{className:`size-3.5 text-zinc-400`})}),(0,z.jsx)(`span`,{className:`text-sm font-bold text-zinc-300 uppercase tracking-wider`,children:`İçindekiler`})]}),(0,z.jsxs)(`div`,{className:`mb-4 px-1`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between text-[11px] text-zinc-500 mb-1.5`,children:[(0,z.jsx)(`span`,{children:`İlerleme`}),(0,z.jsxs)(`span`,{className:`font-mono`,children:[r+1,`/`,e.length]})]}),(0,z.jsx)(`div`,{className:`h-1 bg-zinc-800 rounded-full overflow-hidden`,children:(0,z.jsx)(`div`,{className:`h-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 rounded-full transition-all duration-500 ease-out`,style:{width:`${i}%`}})})]}),(0,z.jsx)(`div`,{className:`space-y-1`,children:e.map((e,r)=>{let i=Qn[e.level],a=t===e.id;return(0,z.jsxs)(`button`,{onClick:()=>n(e.id),className:L(`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-xl text-left transition-all duration-200 border`,a?`${i.activeBg} ${i.activeText} shadow-sm`:`text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/40 border-transparent`),children:[(0,z.jsx)(`span`,{className:L(`flex items-center justify-center size-5 rounded-md text-[10px] font-bold shrink-0 transition-colors`,a?`${i.activeText} bg-white/5`:`text-zinc-600 bg-zinc-800/50`),children:r+1}),(0,z.jsx)(`span`,{className:`truncate text-[13px] font-medium`,children:e.title}),a&&(0,z.jsx)(`div`,{className:L(`ml-auto size-1.5 rounded-full shrink-0`,i.dot)})]},e.id)})}),(0,z.jsxs)(`div`,{className:`mt-6 pt-5 border-t border-zinc-800/60`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-2 mb-3 px-1`,children:[(0,z.jsx)(re,{className:`size-3.5 text-zinc-500`}),(0,z.jsx)(`span`,{className:`text-[11px] font-semibold text-zinc-500 uppercase tracking-wider`,children:`Seviyeler`})]}),(0,z.jsx)(`div`,{className:`grid grid-cols-2 gap-1.5`,children:Object.entries(Qn).map(([e,t])=>(0,z.jsxs)(`div`,{className:`flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-900/50`,children:[(0,z.jsx)(`span`,{className:`text-xs`,children:t.icon}),(0,z.jsx)(`span`,{className:L(`text-[11px] font-medium`,t.color),children:t.label})]},e))})]})]})}function er({tabs:e,activeTab:t,onTabChange:n}){return(0,z.jsx)(`div`,{className:`flex gap-1 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/60 backdrop-blur-sm shadow-inner`,children:e.map(e=>{let r=t===e.id;return(0,z.jsxs)(`button`,{onClick:()=>n(e.id),className:L(`relative flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300`,r?`bg-gradient-to-b from-zinc-700/90 to-zinc-800/90 text-white shadow-lg shadow-black/20 border border-zinc-600/40`:`text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/40 border border-transparent`),children:[e.icon&&(0,z.jsx)(`span`,{className:`text-base`,children:e.icon}),(0,z.jsx)(`span`,{children:e.label}),e.count!==void 0&&(0,z.jsx)(`span`,{className:L(`text-[10px] font-bold px-1.5 py-0.5 rounded-md`,r?`bg-white/10 text-zinc-300`:`bg-zinc-800 text-zinc-600`),children:e.count}),r&&(0,z.jsx)(`div`,{className:`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-400`})]},e.id)})})}var tr={id:`query-basics`,title:`1. TanStack Query Temelleri`,description:`useQuery, queryKey, queryFn kavramlarını sıfırdan öğrenin.`,level:`beginner`,lessons:[{id:`what-is-tanstack-query`,title:`TanStack Query Nedir?`,blocks:[{type:`text`,content:`TanStack Query (eski adıyla React Query), sunucu state yönetimi için kullanılan bir kütüphanedir. Veri çekme, cache'leme, senkronizasyon ve güncelleme işlemlerini otomatik olarak yönetir. Redux veya Zustand gibi client-state kütüphanelerinden farklıdır çünkü server-state'e odaklanır.`},{type:`text`,content:`Server state ile client state arasındaki fark: Client state (theme, sidebar açık/kapalı) tamamen senin kontrolündedir. Server state (kullanıcı listesi, ürünler) başka birisi tarafından değiştirilebilir, asenkrondir ve "stale" (bayat) olabilir.`},{type:`code`,title:`QueryClientProvider Kurulumu`,language:`tsx`,content:`import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 dakika
      gcTime: 1000 * 60 * 10,   // 10 dakika (eski adı: cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  )
}`},{type:`tip`,content:`staleTime: Verinin ne kadar süre "taze" sayılacağı. gcTime: Verinin cache'den ne zaman temizleneceği. staleTime < gcTime olmalıdır.`}]},{id:`use-query-basics`,title:`useQuery - İlk Sorgu`,blocks:[{type:`text`,content:`useQuery, veri çekmek için kullanılan temel hook'tur. İki zorunlu parametre alır: queryKey (cache anahtarı) ve queryFn (veriyi çeken fonksiyon).`},{type:`code`,title:`Temel useQuery Kullanımı`,language:`tsx`,content:`import {useQuery} from '@tanstack/react-query'

function UserList() {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['users'],        // Cache anahtarı - benzersiz olmalı
    queryFn: () =>              // Veriyi çeken async fonksiyon
      fetch('/api/users').then(res => res.json()),
  })

  if (isLoading) return <div>Yükleniyor...</div>
  if (isError) return <div>Hata: {error.message}</div>

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}`},{type:`text`,content:`useQuery birçok faydalı state döndürür: isPending (ilk yükleme), isLoading (isPending + isFetching), isFetching (arka planda yenileme), isSuccess, isError, data, error, status...`},{type:`code`,title:`useQuery'den Dönen Tüm Önemli Değerler`,language:`tsx`,content:`const {
  data,           // Başarılı response verisi
  error,          // Hata objesi
  status,         // 'pending' | 'error' | 'success'
  fetchStatus,    // 'idle' | 'fetching' | 'paused'
  isPending,      // status === 'pending' (henüz data yok)
  isLoading,      // isPending && isFetching (ilk yükleme)
  isFetching,     // Arka planda veri çekiliyor
  isError,        // status === 'error'
  isSuccess,      // status === 'success'
  isStale,        // Veri "bayat" mı?
  refetch,        // Manuel olarak tekrar çek
  dataUpdatedAt,  // Son güncelleme zamanı (timestamp)
} = useQuery({...})`},{type:`warning`,content:`isPending vs isLoading farkı: isPending sadece data'nın henüz olmadığını söyler. isLoading ise isPending + isFetching birleşimidir (gerçekten şu an yükleniyor). Cache'den veri geliyorsa isPending false olur.`}]},{id:`query-keys`,title:`Query Keys - Cache Anahtarları`,blocks:[{type:`text`,content:`queryKey, TanStack Query'nin en önemli konseptidir. Her sorgu benzersiz bir key ile tanımlanır. Key değiştiğinde yeni bir sorgu tetiklenir. Key'ler array formatındadır ve serializable olmalıdır.`},{type:`code`,title:`Query Key Örnekleri`,language:`tsx`,content:`// Basit key
useQuery({queryKey: ['users'], ...})

// Parametreli key - ID ile
useQuery({queryKey: ['users', userId], ...})

// Filtreli key - Obje ile
useQuery({queryKey: ['users', {status: 'active', page: 1}], ...})

// Nested key
useQuery({queryKey: ['users', userId, 'posts'], ...})

// Key hiyerarşisi önemli!
// ['users']                    → Tüm kullanıcılar
// ['users', 1]                 → ID=1 olan kullanıcı
// ['users', {status: 'active'}] → Aktif kullanıcılar
// ['users', 1, 'posts']        → Kullanıcı 1'in postları`},{type:`tip`,content:`Query key'leri bir fabrika fonksiyonu ile yönetmek best practice'dir. Bu projede biz queryOptions kullanıyoruz - bir sonraki derste göreceksiniz.`},{type:`code`,title:`Query Key Factory Pattern`,language:`tsx`,content:`// query-keys.ts
export const userKeys = {
  all:    ['users'] as const,
  lists:  () => [...userKeys.all, 'list'] as const,
  list:   (filters: UserFilters) => [...userKeys.lists(), filters] as const,
  details:() => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
}

// Kullanım
useQuery({queryKey: userKeys.detail(5), ...})
useQuery({queryKey: userKeys.list({page: 1, status: 'active'}), ...})

// Invalidation'da süper güçlü:
queryClient.invalidateQueries({queryKey: userKeys.all})
// → Tüm user query'lerini invalidate eder`}]},{id:`query-fn`,title:`Query Functions - Veri Çekme`,blocks:[{type:`text`,content:`queryFn, Promise döndüren herhangi bir fonksiyondur. fetch, axios, ya da kendi API client'ınız olabilir. Hata durumunda throw etmelidir - resolve edilen her şey başarılı sayılır.`},{type:`code`,title:`Farklı queryFn Örnekleri`,language:`tsx`,content:`// 1. Düz fetch ile
useQuery({
  queryKey: ['users'],
  queryFn: async () => {
    const res = await fetch('/api/users')
    if (!res.ok) throw new Error('Hata oluştu')
    return res.json()
  },
})

// 2. Axios ile
useQuery({
  queryKey: ['users'],
  queryFn: () => axios.get('/api/users').then(res => res.data),
})

// 3. Kendi API katmanınız ile (bu projede böyle!)
useQuery({
  queryKey: ['users'],
  queryFn: () => getUsers(), // API fonksiyonu
})

// 4. queryKey'den parametre alma (context)
useQuery({
  queryKey: ['users', userId],
  queryFn: ({queryKey}) => {
    const [, id] = queryKey
    return getUserById(id)
  },
})`},{type:`warning`,content:`fetch API varsayılan olarak 4xx/5xx hatalarda reject etmez! response.ok kontrolü yapmalısınız. Axios ise otomatik olarak reject eder.`}]}]},nr={id:`query-advanced`,title:`2. queryOptions Pattern`,description:`Bu projede kullanılan queryOptions pattern'ini öğrenin. Query tanımlarını merkezi hale getirir.`,level:`beginner`,lessons:[{id:`query-options-intro`,title:`queryOptions Nedir?`,blocks:[{type:`text`,content:`queryOptions, queryKey ve queryFn'i tek bir yerde tanımlamanızı sağlar. Bu sayede aynı sorguyu birden fazla yerde kullanırken key/fn tutarsızlığı yaşamazsınız. Bu projede tüm sorgular bu pattern ile yazılmaktadır.`},{type:`code`,title:`queryOptions Tanımlama`,language:`tsx`,content:`import {queryOptions} from '@tanstack/react-query'
import {getUsers, getUserById} from '../api/users'

// Tüm kullanıcıları getiren query option
export const usersQueryOptions = () =>
  queryOptions({
    queryKey: ['users'],
    queryFn: getUsers,
  })

// Tek kullanıcıyı getiren query option (parametreli)
export const userDetailQueryOptions = (userId: number) =>
  queryOptions({
    queryKey: ['users', userId],
    queryFn: () => getUserById(userId),
  })`},{type:`code`,title:`queryOptions Kullanımı - Component İçinde`,language:`tsx`,content:`import {useQuery} from '@tanstack/react-query'
import {usersQueryOptions, userDetailQueryOptions} from '../queries/users'

function UserList() {
  // queryOptions spread edilir
  const {data, isLoading} = useQuery(usersQueryOptions())
  // ...
}

function UserDetail({userId}: {userId: number}) {
  const {data: user} = useQuery(userDetailQueryOptions(userId))
  // ...
}`},{type:`tip`,content:`queryOptions ile tanımlanan sorgular, hem useQuery'de hem useSuspenseQuery'de hem de queryClient.prefetchQuery'de kullanılabilir. Tek bir kaynak, her yerde geçerli!`}]},{id:`query-options-project`,title:`Bu Projede queryOptions Kullanımı`,blocks:[{type:`text`,content:`Projede her feature modülünün queries/ klasöründe queryOptions tanımları bulunur. API fonksiyonları api/ klasöründe, tipler types/ klasöründedir.`},{type:`code`,title:`Gerçek Proje Yapısı`,language:`text`,content:`src/features/users/
  ├── api/
  │   └── users.ts          ← API çağrıları (fetch/axios)
  ├── queries/
  │   └── users.ts          ← queryOptions tanımları
  ├── types/
  │   └── user-types.ts     ← TypeScript tipleri
  ├── hooks/
  │   └── use-users.ts      ← Custom hooks (mutation + invalidation)
  ├── components/
  │   └── UserTable.tsx      ← UI componentleri
  └── schemas/
      └── user-schema.ts    ← Zod validation`},{type:`code`,title:`API Katmanı (api/users.ts)`,language:`tsx`,content:`import {api} from '~/common/lib/api-client'
import type {User, UsersResponse} from '../types/user-types'

export const getUsers = async (params?: UserFilters): Promise<UsersResponse> => {
  const response = await api.get('/users', {params})
  return response.data
}

export const getUserById = async (id: number): Promise<User> => {
  const response = await api.get(\`/users/\${id}\`)
  return response.data
}`},{type:`code`,title:`Query Tanımları (queries/users.ts)`,language:`tsx`,content:`import {queryOptions} from '@tanstack/react-query'
import {getUsers, getUserById} from '../api/users'
import type {UserFilters} from '../types/user-types'

export const usersQueryOptions = (filters?: UserFilters) =>
  queryOptions({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
  })

export const userDetailQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ['users', id],
    queryFn: () => getUserById(id),
    enabled: id > 0, // id geçerli değilse sorguyu çalıştırma
  })`}]},{id:`enabled-option`,title:`enabled - Koşullu Sorgular`,blocks:[{type:`text`,content:`enabled seçeneği, sorgunun otomatik olarak çalışıp çalışmayacağını kontrol eder. false ise sorgu çalışmaz. Bağımlı sorgular veya kullanıcı etkileşimi gerektiren durumlar için kullanılır.`},{type:`code`,title:`enabled Kullanım Örnekleri`,language:`tsx`,content:`// 1. Parametre hazır olana kadar bekleme
const {data: user} = useQuery({
  queryKey: ['users', userId],
  queryFn: () => getUserById(userId),
  enabled: !!userId, // userId varsa çalış
})

// 2. Bağımlı sorgular (dependent queries)
const {data: user} = useQuery(userDetailQueryOptions(userId))
const {data: posts} = useQuery({
  queryKey: ['users', userId, 'posts'],
  queryFn: () => getUserPosts(userId),
  enabled: !!user, // Önce user yüklenmeli
})

// 3. Toggle ile açıp kapama
const [showDetails, setShowDetails] = useState(false)
const {data} = useQuery({
  queryKey: ['details'],
  queryFn: fetchDetails,
  enabled: showDetails,
})`},{type:`warning`,content:`enabled: false olan bir sorgu hiç çalışmaz. isLoading true olmaz ama isPending true olur (data yok). Bu farkı UI'da handle etmeyi unutmayın.`}]}]},rr={id:`mutations`,title:`3. Mutations - Veri Değiştirme`,description:`useMutation ile POST, PUT, DELETE işlemlerini ve invalidation mekanizmasını öğrenin.`,level:`intermediate`,lessons:[{id:`use-mutation-basics`,title:`useMutation Temelleri`,blocks:[{type:`text`,content:`useMutation, sunucuda veri oluşturma, güncelleme ve silme işlemleri için kullanılır. useQuery'den farklı olarak otomatik çalışmaz - siz tetiklersiniz. mutate() veya mutateAsync() ile çağırırsınız.`},{type:`code`,title:`Temel useMutation Kullanımı`,language:`tsx`,content:`import {useMutation} from '@tanstack/react-query'

function CreateUserForm() {
  const mutation = useMutation({
    mutationFn: (newUser: CreateUserDto) =>
      api.post('/users', newUser),
  })

  const handleSubmit = (data: CreateUserDto) => {
    mutation.mutate(data) // Fire and forget
  }

  return (
    <form onSubmit={handleSubmit}>
      {mutation.isPending && <span>Kaydediliyor...</span>}
      {mutation.isError && <span>Hata: {mutation.error.message}</span>}
      {mutation.isSuccess && <span>Başarılı!</span>}
      {/* form fields */}
    </form>
  )
}`},{type:`code`,title:`mutate vs mutateAsync`,language:`tsx`,content:`// mutate - Callback based (önerilen)
mutation.mutate(data, {
  onSuccess: (result) => {
    console.log('Başarılı:', result)
  },
  onError: (error) => {
    console.log('Hata:', error)
  },
  onSettled: () => {
    console.log('Bitti (başarılı veya hata)')
  },
})

// mutateAsync - Promise based (try/catch kullanımı)
const handleSubmit = async (data: CreateUserDto) => {
  try {
    const result = await mutation.mutateAsync(data)
    console.log('Başarılı:', result)
  } catch (error) {
    console.log('Hata:', error)
  }
}`},{type:`tip`,content:`mutate kullanırken hata yönetimi callback'ler ile yapılır. mutateAsync kullanırken try/catch ile yapılır. Çoğu durumda mutate yeterlidir ve daha güvenlidir (unhandled rejection riski yok).`}]},{id:`mutation-callbacks`,title:`Mutation Callbacks (onSuccess, onError, onSettled)`,blocks:[{type:`text`,content:`Callback'ler iki yerde tanımlanabilir: useMutation tanımında (global) ve mutate() çağrısında (per-call). İkisi birlikte çalışır - önce global, sonra per-call çalışır.`},{type:`code`,title:`Global vs Per-Call Callbacks`,language:`tsx`,content:`const mutation = useMutation({
  mutationFn: createUser,

  // Global callbacks - her mutate çağrısında çalışır
  onSuccess: (data) => {
    // Cache invalidation burada yapılır
    queryClient.invalidateQueries({queryKey: ['users']})
    toast.success('Kullanıcı oluşturuldu')
  },
  onError: (error) => {
    toast.error('Hata: ' + error.message)
  },
  onSettled: () => {
    // Başarılı veya hatalı, her durumda çalışır
    // Temizlik işlemleri
  },
})

// Per-call callback - sadece bu çağrıda çalışır
mutation.mutate(data, {
  onSuccess: () => {
    // Dialog kapat, form resetle vb.
    closeDialog()
    form.reset()
  },
})`},{type:`warning`,content:`Global onSuccess'te cache invalidation yapın. Per-call onSuccess'te UI işlemleri (dialog kapat, navigate et) yapın. Bu ayrım kodunuzu temiz tutar.`}]},{id:`invalidation`,title:`Query Invalidation - Cache Yenileme`,blocks:[{type:`text`,content:`Mutation sonrası eski veriyi yenilemek için invalidateQueries kullanılır. Bu, ilgili sorguları "stale" olarak işaretler ve aktif olanları otomatik yeniden çeker.`},{type:`code`,title:`invalidateQueries Kullanımı`,language:`tsx`,content:`import {useQueryClient} from '@tanstack/react-query'

function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // 1. Tam eşleşme - sadece ['users'] key'ini invalidate et
      queryClient.invalidateQueries({queryKey: ['users']})

      // 2. Prefix eşleşme - ['users', ...] ile başlayan hepsini
      queryClient.invalidateQueries({queryKey: ['users']})
      // Bu şunları da invalidate eder:
      // ['users', 1]
      // ['users', {page: 1}]
      // ['users', 1, 'posts']

      // 3. exact: true - SADECE tam eşleşen key'i
      queryClient.invalidateQueries({
        queryKey: ['users'],
        exact: true,
      })
      // Sadece ['users'] invalidate olur, ['users', 1] olmaz

      // 4. Birden fazla key invalidate etme
      await Promise.all([
        queryClient.invalidateQueries({queryKey: ['users']}),
        queryClient.invalidateQueries({queryKey: ['stats']}),
      ])
    },
  })
}`},{type:`code`,title:`Bu Projede Invalidation Pattern'i (Custom Hook)`,language:`tsx`,content:`// hooks/use-users.ts
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {createUser, updateUser, deleteUser} from '../api/users'
import {toast} from 'sonner'

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı başarıyla oluşturuldu')
    },
    onError: () => {
      toast.error('Kullanıcı oluşturulurken hata oluştu')
    },
  })
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id, data}: {id: number; data: UpdateUserDto}) =>
      updateUser(id, data),
    onSuccess: (_data, variables) => {
      // Hem listeyi hem detayı invalidate et
      queryClient.invalidateQueries({queryKey: ['users']})
      queryClient.invalidateQueries({queryKey: ['users', variables.id]})
      toast.success('Kullanıcı güncellendi')
    },
  })
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı silindi')
    },
  })
}`},{type:`tip`,content:`Her CRUD işlemi için ayrı bir custom hook yazın. Bu hook'lar mutation + invalidation + toast mesajlarını birleştirir. Component'ler sadece hook'u çağırır.`}]},{id:`setQueryData`,title:`setQueryData - Cache'i Manuel Güncelleme`,blocks:[{type:`text`,content:`Bazen invalidation yerine cache'i direkt güncellemek istersiniz. setQueryData ile cache'e yeni veri yazabilirsiniz. Bu, ek bir network isteği yapmadan UI'ı anında günceller.`},{type:`code`,title:`setQueryData Kullanımı`,language:`tsx`,content:`const queryClient = useQueryClient()

// Mutation sonrası cache'i güncelleme
useMutation({
  mutationFn: updateUser,
  onSuccess: (updatedUser) => {
    // 1. Detay cache'ini güncelle
    queryClient.setQueryData(
      ['users', updatedUser.id],
      updatedUser,
    )

    // 2. Liste cache'ini güncelle (updater function)
    queryClient.setQueryData(['users'], (oldData: User[] | undefined) => {
      if (!oldData) return [updatedUser]
      return oldData.map(user =>
        user.id === updatedUser.id ? updatedUser : user,
      )
    })
  },
})

// Cache'den veri okuma
const cachedUser = queryClient.getQueryData(['users', 5])`},{type:`warning`,content:`setQueryData kullanırken dikkatli olun. Sunucu ve cache arasında tutarsızlık oluşabilir. Çoğu durumda invalidateQueries daha güvenlidir.`}]}]},ir={id:`advanced-patterns`,title:`4. İleri Seviye Query Patterns`,description:`Pagination, infinite query, prefetching, optimistic update ve select gibi ileri konular.`,level:`advanced`,lessons:[{id:`pagination`,title:`Sayfalama (Pagination)`,blocks:[{type:`text`,content:`Sayfalı veri çekerken queryKey'e page parametresini ekleyin. keepPreviousData (placeholderData) ile sayfa geçişlerinde önceki veriyi göstermeye devam edebilirsiniz.`},{type:`code`,title:`Pagination Örneği`,language:`tsx`,content:`import {useQuery, keepPreviousData} from '@tanstack/react-query'
import {useState} from 'react'

function PaginatedUsers() {
  const [page, setPage] = useState(1)

  const {data, isLoading, isPlaceholderData} = useQuery({
    queryKey: ['users', {page}],
    queryFn: () => getUsers({page, pageSize: 10}),
    placeholderData: keepPreviousData, // Sayfa değişirken eski veriyi göster
  })

  return (
    <div>
      {/* isPlaceholderData true ise eski veri gösteriliyor */}
      <div className={isPlaceholderData ? 'opacity-50' : ''}>
        {data?.items.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}>
          Önceki
        </button>
        <span>Sayfa {page} / {data?.totalPages}</span>
        <button
          onClick={() => setPage(p => p + 1)}
          disabled={isPlaceholderData || !data?.hasNextPage}>
          Sonraki
        </button>
      </div>
    </div>
  )
}`},{type:`tip`,content:`keepPreviousData (v5'te placeholderData: keepPreviousData) sayfa geçişlerinde loading spinner göstermek yerine eski veriyi gösterir. UX açısından çok daha iyi bir deneyim sunar.`}]},{id:`infinite-queries`,title:`Infinite Queries (Sonsuz Scroll)`,blocks:[{type:`text`,content:`useInfiniteQuery, "daha fazla yükle" veya sonsuz scroll pattern'i için kullanılır. Her sayfa önceki sayfanın devamıdır.`},{type:`code`,title:`useInfiniteQuery Örneği`,language:`tsx`,content:`import {useInfiniteQuery} from '@tanstack/react-query'

function InfiniteUserList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['users', 'infinite'],
    queryFn: ({pageParam}) => getUsers({page: pageParam, pageSize: 20}),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // Son sayfadaysak undefined döndür (daha fazla yok)
      if (lastPage.page >= lastPage.totalPages) return undefined
      return lastPage.page + 1
    },
  })

  // data.pages bir array'dir, her eleman bir sayfa
  const allUsers = data?.pages.flatMap(page => page.items) ?? []

  return (
    <div>
      {allUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage
          ? 'Yükleniyor...'
          : hasNextPage
            ? 'Daha Fazla Yükle'
            : 'Hepsi Bu Kadar'}
      </button>
    </div>
  )
}`},{type:`warning`,content:`getNextPageParam undefined döndürürse hasNextPage false olur. null veya 0 döndürürseniz yine "sayfa var" demek olur - dikkatli olun.`}]},{id:`prefetching`,title:`Prefetching - Önceden Veri Yükleme`,blocks:[{type:`text`,content:`Kullanıcı bir sayfaya veya linke gitmeden önce veriyi arka planda yükleyebilirsiniz. Bu, navigasyon anında veri hazır olur ve kullanıcı loading görmez.`},{type:`code`,title:`Prefetch Yöntemleri`,language:`tsx`,content:`import {useQueryClient} from '@tanstack/react-query'

// 1. Hover'da prefetch
function UserListItem({user}: {user: User}) {
  const queryClient = useQueryClient()

  const handleMouseEnter = () => {
    queryClient.prefetchQuery(userDetailQueryOptions(user.id))
  }

  return (
    <Link
      to="/users/$userId"
      params={{userId: user.id}}
      onMouseEnter={handleMouseEnter}>
      {user.name}
    </Link>
  )
}

// 2. Route loader'da prefetch (TanStack Router ile)
export const createUserDetailRoute = (parent: AnyRoute) =>
  createRoute({
    getParentRoute: () => parent,
    path: '/users/$userId',
    loader: ({context, params}) => {
      // Sayfa yüklenmeden önce veriyi çek
      context.queryClient.ensureQueryData(
        userDetailQueryOptions(Number(params.userId))
      )
    },
    component: lazyRouteComponent(() => import('./UserDetailPage')),
  })

// 3. Manuel prefetch
queryClient.prefetchQuery({
  queryKey: ['users', {page: 2}],
  queryFn: () => getUsers({page: 2}),
})`},{type:`tip`,content:`ensureQueryData vs prefetchQuery: ensureQueryData cache'de veri varsa tekrar çekmez. prefetchQuery her zaman çeker (staleTime'a bağlı). Route loader'larda ensureQueryData tercih edilir.`}]},{id:`optimistic-updates`,title:`Optimistic Updates`,blocks:[{type:`text`,content:`Optimistic update, sunucu yanıt vermeden önce UI'ı günceller. Kullanıcı anında sonucu görür. Hata olursa eski haline döner (rollback). Deneyimi çok iyileştirir ama dikkatli kullanılmalıdır.`},{type:`code`,title:`Optimistic Update Tam Örnek`,language:`tsx`,content:`export const useToggleUserStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id, status}: {id: number; status: string}) =>
      updateUserStatus(id, status),

    // Mutation başlamadan ÖNCE çalışır
    onMutate: async ({id, status}) => {
      // 1. Devam eden query'leri iptal et (race condition önleme)
      await queryClient.cancelQueries({queryKey: ['users']})

      // 2. Mevcut cache'i kaydet (rollback için)
      const previousUsers = queryClient.getQueryData(['users'])

      // 3. Cache'i optimistic olarak güncelle
      queryClient.setQueryData(['users'], (old: User[]) =>
        old.map(user =>
          user.id === id ? {...user, status} : user,
        ),
      )

      // 4. Rollback context'i döndür
      return {previousUsers}
    },

    // Hata olursa rollback yap
    onError: (_error, _variables, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(['users'], context.previousUsers)
      }
      toast.error('İşlem başarısız oldu')
    },

    // Her durumda (başarılı/hata) gerçek veriyi getir
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
    },
  })
}`},{type:`warning`,content:`Optimistic update, basit toggle/like işlemleri için idealdir. Karmaşık formlar veya birden fazla entity etkileyen işlemlerde invalidation daha güvenlidir.`}]},{id:`select-option`,title:`select - Veriyi Dönüştürme`,blocks:[{type:`text`,content:`select seçeneği ile query'den dönen veriyi component'e vermeden önce dönüştürebilirsiniz. Sadece component'in ihtiyacı olan kısımları seçer ve gereksiz re-render'ları önler.`},{type:`code`,title:`select Kullanımı`,language:`tsx`,content:`// 1. Basit field seçimi
const {data: userNames} = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
  select: (data) => data.map(user => user.name), // Sadece isimler
})

// 2. Filtreleme
const {data: activeUsers} = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
  select: (data) => data.filter(user => user.status === 'active'),
})

// 3. Dönüşüm
const {data: userCount} = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
  select: (data) => data.length,
})

// 4. useCallback ile memoize (re-render optimizasyonu)
const selectActiveUsers = useCallback(
  (data: User[]) => data.filter(u => u.status === 'active'),
  [],
)
const {data} = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
  select: selectActiveUsers,
})`},{type:`tip`,content:`select sadece render sırasında çalışır, cache'deki veriyi değiştirmez. Aynı cache'den farklı component'ler farklı select ile farklı parçalar alabilir.`}]}]},ar={id:`tanstack-router`,title:`5. TanStack Router`,description:`Code-based routing, route context, guards, loader ve search params gibi router kavramlarını öğrenin.`,level:`intermediate`,lessons:[{id:`router-basics`,title:`TanStack Router Temelleri`,blocks:[{type:`text`,content:`TanStack Router, type-safe bir React router'dır. Bu projede CODE-BASED routing kullanılır (file-based değil). Route'lar manuel olarak tanımlanır ve router.tsx'de birleştirilir.`},{type:`code`,title:`Route Oluşturma`,language:`tsx`,content:`import {createRoute, lazyRouteComponent} from '@tanstack/react-router'
import type {AnyRoute} from '@tanstack/react-router'

// Her route bir factory fonksiyonu ile oluşturulur
export const createUsersRoute = (parentRoute: AnyRoute) => {
  return createRoute({
    getParentRoute: () => parentRoute,
    path: '/users',
    component: lazyRouteComponent(() => import('./UsersPage')),
  })
}

// lazyRouteComponent → code splitting sağlar
// Sayfa yüklenene kadar bundle'a dahil olmaz`},{type:`code`,title:`Router Tree Oluşturma (router.tsx)`,language:`tsx`,content:`import {createRootRouteWithContext, createRouter} from '@tanstack/react-router'

// 1. Root route + context tanımı
const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />  {/* Child route'lar buraya render olur */}
      <Toaster />
    </>
  ),
  errorComponent: GlobalError,
  notFoundComponent: GlobalNotFound,
})

// 2. Gate route'lar (layout + guard)
const AuthGateRoute = createAuthGateRoute(rootRoute)
const AppGateRoute = createAppGateRoute(rootRoute)

// 3. Feature route'ları parent'a bağla
const users = createUsersRoute(AppGateRoute)
const dashboard = createDashboardRoute(AppGateRoute)

// 4. Route tree'yi oluştur
const routeTree = rootRoute.addChildren([
  AuthGateRoute.addChildren([...authPublicRoutes]),
  AppGateRoute.addChildren([dashboard, users, ...]),
])

// 5. Router instance'ı
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',  // Link hover'da prefetch
  context: {queryClient, user: null},
})`}]},{id:`router-context`,title:`Router Context`,blocks:[{type:`text`,content:`Router context, tüm route'lara paylaşılan veridir. Bu projede queryClient ve user bilgisi context üzerinden paylaşılır. beforeLoad ve loader fonksiyonlarında kullanılır.`},{type:`code`,title:`Router Context Tanımı ve Kullanımı`,language:`tsx`,content:`// types.ts - Context tipi
interface RouterContext {
  queryClient: QueryClient
  user: AuthUser | null
}

// AppProviders.tsx - Context'i sağlama
<RouterProvider
  router={router}
  context={{queryClient, user}}
/>

// Route'da kullanım (beforeLoad)
createRoute({
  path: '/admin',
  beforeLoad: ({context}) => {
    // context.user ve context.queryClient erişilebilir
    if (!context.user) {
      throw redirect({to: '/login'})
    }
  },
})

// Route'da kullanım (loader)
createRoute({
  path: '/users/$userId',
  loader: ({context, params}) => {
    // Sayfaya gitmeden veriyi yükle
    return context.queryClient.ensureQueryData(
      userDetailQueryOptions(Number(params.userId))
    )
  },
})`}]},{id:`route-guards`,title:`Route Guards (beforeLoad)`,blocks:[{type:`text`,content:`beforeLoad, route yüklenmeden önce çalışan bir fonksiyondur. Auth kontrolü, yetki kontrolü ve redirect işlemleri için kullanılır. throw redirect() ile yönlendirme yapılır.`},{type:`code`,title:`Auth Guard Örneği`,language:`tsx`,content:`// guards.ts
import {redirect} from '@tanstack/react-router'

export function requireAuth(context: RouterContext) {
  if (!context.user) {
    throw redirect({to: '/login'})
  }
}

export function requireGuest(context: RouterContext) {
  if (context.user) {
    throw redirect({to: '/'})
  }
}

// Gate route'da kullanım
export function createAppGateRoute(rootRoute: AnyRoute) {
  return createRoute({
    getParentRoute: () => rootRoute,
    id: 'app',
    component: AppShell, // Layout wrapper
    beforeLoad: ({context}) => requireAuth(context as RouterContext),
  })
}

// Bu gate'in altındaki TÜM route'lar auth gerektirir
// AppGateRoute.addChildren([dashboard, users, ...])`},{type:`tip`,content:`Gate pattern: Layout + Guard birleşimi. Auth gate altındaki tüm sayfalar AppShell layout'u ile render olur VE auth kontrolünden geçer. İç içe gate'ler de mümkündür.`}]},{id:`search-params`,title:`Search Params (URL State)`,blocks:[{type:`text`,content:`TanStack Router, URL search parametrelerini type-safe olarak yönetir. Zod ile validasyon yapabilirsiniz. Filtre, sıralama ve pagination state'ini URL'de tutmak için idealdir.`},{type:`code`,title:`Search Params Kullanımı`,language:`tsx`,content:`import {createRoute} from '@tanstack/react-router'
import {z} from 'zod'

// Route tanımında search params şeması
const usersRoute = createRoute({
  getParentRoute: () => appGateRoute,
  path: '/users',
  validateSearch: z.object({
    page: z.number().optional().default(1),
    search: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional(),
    sortBy: z.string().optional(),
  }),
  component: lazyRouteComponent(() => import('./UsersPage')),
})

// Component'te kullanım
function UsersPage() {
  // Type-safe search params
  const {page, search, status} = usersRoute.useSearch()

  const navigate = useNavigate()

  // Search params güncelleme
  const handlePageChange = (newPage: number) => {
    navigate({
      search: (prev) => ({...prev, page: newPage}),
    })
  }

  const handleFilter = (newStatus: string) => {
    navigate({
      search: (prev) => ({...prev, status: newStatus, page: 1}),
    })
  }

  // Query'de kullanım
  const {data} = useQuery(usersQueryOptions({page, search, status}))
}`},{type:`tip`,content:`URL'deki search params değiştiğinde queryKey de değişir → TanStack Query otomatik olarak yeni veriyi çeker. Bu sayede filtre + pagination + query entegrasyonu seamless çalışır.`}]},{id:`navigation`,title:`Link ve Navigation`,blocks:[{type:`text`,content:`TanStack Router'da navigasyon Link componenti veya useNavigate hook'u ile yapılır. Type-safe'dir - olmayan bir route'a link vermeye çalışırsanız TypeScript hata verir.`},{type:`code`,title:`Link ve useNavigate`,language:`tsx`,content:`import {Link, useNavigate} from '@tanstack/react-router'

// 1. Link component (declarative)
<Link to="/users">Kullanıcılar</Link>

// 2. Parametreli link
<Link to="/users/$userId" params={{userId: 5}}>
  Kullanıcı Detay
</Link>

// 3. Search params ile link
<Link to="/users" search={{page: 2, status: 'active'}}>
  Aktif Kullanıcılar (Sayfa 2)
</Link>

// 4. Active state
<Link
  to="/users"
  activeProps={{className: 'font-bold text-blue-500'}}
  inactiveProps={{className: 'text-gray-500'}}>
  Kullanıcılar
</Link>

// 5. useNavigate (imperative)
const navigate = useNavigate()

const handleClick = () => {
  navigate({to: '/users/$userId', params: {userId: 5}})
}

// 6. Programmatic redirect
navigate({to: '/login', replace: true}) // history'ye ekleme`}]}]},or={id:`expert-patterns`,title:`6. Uzman Seviye Patterns`,description:`Suspense query, error boundary, query cancellation, retry stratejileri ve gerçek dünya pattern'leri.`,level:`expert`,lessons:[{id:`suspense-queries`,title:`useSuspenseQuery - Suspense ile Veri Çekme`,blocks:[{type:`text`,content:`useSuspenseQuery, React Suspense ile entegre çalışır. isPending/isLoading kontrolleri gerekmez - data her zaman tanımlıdır. Loading state'i üst seviyedeki Suspense boundary tarafından yönetilir.`},{type:`code`,title:`useSuspenseQuery Kullanımı`,language:`tsx`,content:`import {useSuspenseQuery} from '@tanstack/react-query'
import {Suspense} from 'react'

// Component - data her zaman tanımlı!
function UserList() {
  const {data} = useSuspenseQuery(usersQueryOptions())
  // data: User[] (undefined değil, kesin User[])

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

// Parent - Suspense boundary
function UsersPage() {
  return (
    <Suspense fallback={<Loading />}>
      <UserList />
    </Suspense>
  )
}

// ErrorBoundary ile birlikte
function UsersPage() {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
    </ErrorBoundary>
  )
}`},{type:`warning`,content:`useSuspenseQuery'de enabled seçeneği YOKTUR. Koşullu sorgular için useQuery kullanın. Ayrıca route loader ile birlikte kullanırsanız waterfall'u engellersiniz.`}]},{id:`query-cancellation`,title:`Query Cancellation (AbortSignal)`,blocks:[{type:`text`,content:`TanStack Query, unmount olan component'lerin query'lerini otomatik iptal edebilir. queryFn'e AbortSignal geçirerek bunu etkinleştirebilirsiniz.`},{type:`code`,title:`AbortSignal ile Query İptali`,language:`tsx`,content:`// queryFn'e signal parametresi geçirilir
useQuery({
  queryKey: ['users', searchTerm],
  queryFn: ({signal}) =>
    fetch('/api/users?q=' + searchTerm, {signal})
      .then(res => res.json()),
})

// Axios ile
useQuery({
  queryKey: ['users', searchTerm],
  queryFn: ({signal}) =>
    axios.get('/api/users', {
      params: {q: searchTerm},
      signal,
    }).then(res => res.data),
})

// Manuel iptal
const queryClient = useQueryClient()
queryClient.cancelQueries({queryKey: ['users']})`},{type:`tip`,content:`Özellikle arama (search) gibi hızla değişen query'lerde AbortSignal kullanmak önemlidir. Eski request'ler iptal edilir ve sadece son request'in sonucu alınır.`}]},{id:`retry-strategies`,title:`Retry Stratejileri`,blocks:[{type:`text`,content:`TanStack Query varsayılan olarak 3 kez retry yapar (exponential backoff ile). Bunu özelleştirebilirsiniz.`},{type:`code`,title:`Retry Konfigürasyonu`,language:`tsx`,content:`// 1. Global ayar
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,                    // 1 kez dene
      retryDelay: (attemptIndex) =>
        Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    },
  },
})

// 2. Per-query ayar
useQuery({
  queryKey: ['critical-data'],
  queryFn: fetchCriticalData,
  retry: 5,                       // 5 kez dene
  retryDelay: 1000,               // Her seferinde 1 saniye bekle
})

// 3. Koşullu retry
useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
  retry: (failureCount, error) => {
    // 404'te retry yapma
    if (error.status === 404) return false
    // Max 3 kez
    return failureCount < 3
  },
})

// 4. Mutation'da retry (varsayılan: 0)
useMutation({
  mutationFn: createUser,
  retry: 2, // Mutation'lar default retry yapmaz, açıkça belirtin
})`}]},{id:`parallel-dependent`,title:`Paralel ve Bağımlı Sorgular`,blocks:[{type:`text`,content:`Birden fazla sorguyu paralel çalıştırmak veya birbirine bağımlı sıralı sorgular yazmak çok yaygındır.`},{type:`code`,title:`Paralel Sorgular`,language:`tsx`,content:`// 1. Aynı component'te birden fazla useQuery (otomatik paralel)
function Dashboard() {
  const users = useQuery(usersQueryOptions())
  const stats = useQuery(statsQueryOptions())
  const notifications = useQuery(notificationsQueryOptions())
  // Üçü de aynı anda çalışır!
}

// 2. useQueries - Dinamik sayıda paralel sorgu
const userIds = [1, 2, 3, 4, 5]
const userQueries = useQueries({
  queries: userIds.map(id => ({
    queryKey: ['users', id],
    queryFn: () => getUserById(id),
  })),
})
// userQueries: UseQueryResult[] dizisi

// 3. combine ile birleştirme
const userQueries = useQueries({
  queries: userIds.map(id => userDetailQueryOptions(id)),
  combine: (results) => ({
    data: results.map(r => r.data).filter(Boolean),
    isLoading: results.some(r => r.isLoading),
    isError: results.some(r => r.isError),
  }),
})`},{type:`code`,title:`Bağımlı (Dependent) Sorgular`,language:`tsx`,content:`function UserPosts({userId}: {userId: number}) {
  // 1. Önce kullanıcıyı çek
  const {data: user} = useQuery(userDetailQueryOptions(userId))

  // 2. Kullanıcı yüklendikten sonra postlarını çek
  const {data: posts} = useQuery({
    queryKey: ['users', userId, 'posts'],
    queryFn: () => getUserPosts(userId),
    enabled: !!user, // user yüklenene kadar bekle
  })

  // 3. Postlar yüklendikten sonra yorumları çek
  const {data: comments} = useQuery({
    queryKey: ['posts', posts?.[0]?.id, 'comments'],
    queryFn: () => getPostComments(posts![0].id),
    enabled: !!posts?.length, // postlar yüklenene kadar bekle
  })
}`},{type:`warning`,content:`Bağımlı sorgular waterfall yaratır. Mümkünse paralel çalıştırmayı tercih edin. Eğer veriler gerçekten birbirine bağlıysa, backend'de tek bir endpoint yapın.`}]},{id:`real-world-patterns`,title:`Gerçek Dünya Pattern'leri`,blocks:[{type:`text`,content:`Bu projede sık kullanılan pattern'ler ve best practice'ler.`},{type:`code`,title:`CRUD Dialog Pattern (Bu Projede)`,language:`tsx`,content:`// 1. Custom Hook - CRUD işlemleri
export const useCreateFaq = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createFaq,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['faq']})
      toast.success('SSS oluşturuldu')
    },
  })
}

// 2. Dialog Component
function CreateFaqDialog({open, onOpenChange}) {
  const form = useForm({resolver: zodResolver(faqSchema)})
  const {mutate, isPending} = useCreateFaq()

  const handleSubmit = form.handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        onOpenChange(false)   // Dialog kapat
        form.reset()          // Form resetle
      },
    })
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form onSubmit={handleSubmit}>
        {/* form fields */}
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Kaydediliyor...' : 'Kaydet'}
        </Button>
      </form>
    </Dialog>
  )
}

// 3. Liste Sayfası
function FaqPage() {
  const {data, isLoading} = useQuery(faqQueryOptions())

  if (isLoading) return <PageLoader />

  return (
    <>
      <DataTable data={data} columns={columns} />
      <CreateFaqDialog />
    </>
  )
}`},{type:`code`,title:`Debounced Search Pattern`,language:`tsx`,content:`import {useDebouncedValue} from 'use-debounce'

function UserSearch() {
  const [search, setSearch] = useState('')
  const [debouncedSearch] = useDebouncedValue(search, 300)

  const {data, isFetching} = useQuery({
    queryKey: ['users', {search: debouncedSearch}],
    queryFn: () => searchUsers(debouncedSearch),
    enabled: debouncedSearch.length > 2, // En az 3 karakter
    placeholderData: keepPreviousData,
  })

  return (
    <div>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Ara..."
      />
      {isFetching && <Spinner />}
      {data?.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  )
}`},{type:`tip`,content:`Pattern özetleri: 1) queryOptions → query tanımlarını merkezileştir. 2) Custom hooks → mutation + invalidation birleştir. 3) enabled → koşullu sorgular. 4) placeholderData → geçiş sırasında önceki veriyi göster. 5) select → render için veri dönüştür.`}]}]},sr=[{id:`react-intro`,title:`0. React Nedir? — Temelden Başla`,description:`React'in ne olduğu, neden var olduğu, DOM vs Virtual DOM, tarayıcı nasıl çalışır, component mimarisi — her şeyin en başından.`,level:`beginner`,lessons:[{id:`what-is-react`,title:`React Nedir ve Neden Var?`,blocks:[{type:`text`,content:`React, Facebook (Meta) tarafından 2013'te açık kaynak olarak yayınlanan bir JavaScript kütüphanesidir. Amacı: kullanıcı arayüzleri (UI) oluşturmak. Angular veya Vue gibi bir 'framework' değildir — sadece UI katmanına odaklanır. Bu yüzden 'library' (kütüphane) olarak adlandırılır.`},{type:`text`,content:`Peki neden React'e ihtiyaç var? Vanilla JavaScript ile de UI yapabilirsiniz. Ama büyük uygulamalarda (binlerce DOM elementi, yüzlerce event listener, sürekli değişen veri) vanilla JS ile kod yönetimi kabus haline gelir. React şu sorunları çözer: 1) Declarative UI — ne görünsün söylersin, nasıl yapılacağını React halleder. 2) Component-based — UI'ı küçük, yeniden kullanılabilir parçalara bölersin. 3) Verimli güncelleme — Virtual DOM sayesinde sadece değişen kısımlar güncellenir.`},{type:`code`,title:`Vanilla JS vs React — Aynı İşi Yapan Kod`,language:`tsx`,content:`// ❌ Vanilla JavaScript — Imperative (adım adım talimat verirsin)
const container = document.getElementById('root')
const h1 = document.createElement('h1')
h1.textContent = 'Merhaba Dünya'
h1.className = 'title'
container.appendChild(h1)

// Veri değişince? Tüm DOM'u elle güncelle:
h1.textContent = 'Yeni Başlık'  // her elementi tek tek bul ve güncelle

// ✅ React — Declarative (ne istediğini söylersin)
function App() {
  const [title, setTitle] = useState('Merhaba Dünya')
  return <h1 className="title">{title}</h1>
  // title değişince React otomatik günceller!
}`},{type:`preview`,title:`Yukarıdaki kodun tarayıcıdaki çıktısı`,content:`<div style='font-family: system-ui; padding: 8px;'><h1 style='font-size: 24px; font-weight: bold; color: #e4e4e7; margin: 0;'>Merhaba Dünya</h1><p style='color: #71717a; font-size: 13px; margin-top: 8px;'>← Bu &lt;h1&gt; React tarafından DOM'a eklendi. <code style="color: #a78bfa;">setTitle('Yeni Başlık')</code> çağrılırsa React otomatik olarak bu metni günceller.</p></div>`},{type:`tip`,content:`Imperative = 'Şu elementi bul, textini değiştir, class ekle, DOM'a ekle' (adım adım). Declarative = 'Bu veri ile bu UI'ı göster' (sonucu tanımla). React declarative'dir — sen sadece STATE'i değiştirirsin, React UI'ı otomatik günceller.`}]},{id:`dom-explained`,title:`DOM Nedir? Tarayıcı Nasıl Çalışır?`,blocks:[{type:`text`,content:`DOM (Document Object Model), tarayıcının HTML'i anladığı ağaç yapısıdır. Tarayıcı bir HTML dosyası aldığında şu adımları izler: 1) HTML Parse → DOM Tree oluşturulur. 2) CSS Parse → CSSOM (CSS Object Model) oluşturulur. 3) DOM + CSSOM birleşir → Render Tree. 4) Layout — her elementin ekrandaki pozisyonu hesaplanır. 5) Paint — pikseller ekrana çizilir. 6) Composite — katmanlar birleştirilir.`},{type:`code`,title:`HTML → DOM Tree Dönüşümü`,language:`html`,content:`<!-- Bu HTML: -->
<div id="app">
  <h1>Başlık</h1>
  <p>Paragraf</p>
</div>

<!-- Şu DOM ağacına dönüşür:

  document
    └── html
        ├── head
        └── body
            └── div#app
                ├── h1
                │   └── "Başlık" (text node)
                └── p
                    └── "Paragraf" (text node)
-->`},{type:`text`,content:`DOM manipülasyonu PAHALIDIR. Neden? Çünkü her DOM değişikliği potansiyel olarak Layout → Paint → Composite döngüsünü tetikler. Buna 'reflow' ve 'repaint' denir. Örneğin bir elementin width'ini değiştirirsen, tarayıcı TÜM etkilenen elementlerin pozisyonunu yeniden hesaplar. 1000 elementin olduğu bir sayfada bu çok yavaş olabilir.`},{type:`code`,title:`DOM Manipülasyonu Neden Yavaş?`,language:`tsx`,content:`// ❌ KÖTÜ: Her satırda DOM'a dokunuyor → 1000 reflow!
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div')
  div.textContent = \`Item \${i}\`
  document.body.appendChild(div)  // Her seferinde reflow!
}

// ✅ İYİ: Fragment kullan → tek reflow
const fragment = document.createDocumentFragment()
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div')
  div.textContent = \`Item \${i}\`
  fragment.appendChild(div)  // Bellekte, DOM'da değil
}
document.body.appendChild(fragment)  // Tek seferde DOM'a ekle`},{type:`warning`,content:`DOM manipülasyonu yavaş olduğu için React, Virtual DOM kullanır. Değişiklikleri önce bellekte (JavaScript objesi olarak) hesaplar, sonra minimum DOM güncellemesi yapar. Bu React'in en önemli performans optimizasyonudur.`}]},{id:`virtual-dom`,title:`Virtual DOM ve Reconciliation Algoritması`,blocks:[{type:`text`,content:`Virtual DOM, gerçek DOM'un hafif bir JavaScript kopyasıdır. React her render'da yeni bir Virtual DOM ağacı oluşturur, eskisiyle karşılaştırır (diffing), ve sadece FARKLI olan kısımları gerçek DOM'a uygular. Bu sürece 'Reconciliation' (uzlaştırma) denir.`},{type:`code`,title:`Virtual DOM Nasıl Çalışır — Adım Adım`,language:`tsx`,content:`// 1. Component'in ilk render'ı
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Sayaç</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </div>
  )
}

// React şu Virtual DOM'u oluşturur (basitleştirilmiş):
// {
//   type: 'div',
//   children: [
//     { type: 'h1', children: 'Sayaç' },
//     { type: 'p',  children: '0' },          ← count = 0
//     { type: 'button', children: 'Artır' }
//   ]
// }

// 2. Butona tıklanır → setCount(1) → yeni Virtual DOM:
// {
//   type: 'div',
//   children: [
//     { type: 'h1', children: 'Sayaç' },
//     { type: 'p',  children: '1' },          ← count = 1 (DEĞİŞTİ!)
//     { type: 'button', children: 'Artır' }
//   ]
// }

// 3. React iki ağacı karşılaştırır (diffing):
//    - h1 aynı → DOKUNMA
//    - p değişti (0 → 1) → GÜNCELLE
//    - button aynı → DOKUNMA
// Sonuç: Sadece <p> elementinin textContent'i güncellenir!`},{type:`text`,content:`Reconciliation algoritmasının kuralları: 1) Farklı TYPE'a sahip elementler tamamen yeniden oluşturulur (div → span = sil ve yeniden yap). 2) Aynı type'a sahip elementlerde sadece değişen ATTRIBUTE'lar güncellenir. 3) Listeler için KEY prop'u kullanılır — React hangi elemanın eklendiğini/silindiğini/taşındığını anlar. KEY olmazsa React tüm listeyi yeniden render eder!`},{type:`tip`,content:`React 18+ ile gelen 'Concurrent Mode' sayesinde React, render işlemini bölebilir. Uzun süren render'lar kullanıcı etkileşimini bloklamaz. Bu, React'in en büyük avantajlarından biridir — büyük uygulamalarda bile 60fps akıcılık sağlar.`},{type:`demo`,content:`Virtual DOM'un diffing algoritmasını canlı izle:`,demoId:`virtual-dom`}]},{id:`component-architecture`,title:`Component Mimarisi — UI'ı Parçalara Böl`,blocks:[{type:`text`,content:`React'te her şey COMPONENT'tir. Bir buton, bir form, bir sayfa, hatta tüm uygulama birer component'tir. Component'ler LEGO gibidir — küçük parçaları birleştirerek büyük yapılar oluşturursun. Her component kendi state'ini (verisini) ve davranışını (event handler'larını) yönetir.`},{type:`code`,title:`Component Hiyerarşisi — Gerçek Dünya Örneği`,language:`tsx`,content:`// Bir e-ticaret sayfası component ağacı:
//
// App
// ├── Header
// │   ├── Logo
// │   ├── SearchBar
// │   └── CartIcon (itemCount: 3)
// ├── ProductList
// │   ├── ProductCard (product: iPhone)
// │   │   ├── ProductImage
// │   │   ├── ProductTitle
// │   │   ├── ProductPrice
// │   │   └── AddToCartButton
// │   ├── ProductCard (product: MacBook)
// │   └── ProductCard (product: AirPods)
// └── Footer

// Her biri bağımsız bir component:
function ProductCard({ product }) {
  return (
    <div className="card">
      <ProductImage src={product.image} />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice amount={product.price} />
      <AddToCartButton productId={product.id} />
    </div>
  )
}

// ProductCard 100 kez kullanılabilir, her seferinde farklı veri ile!`},{type:`text`,content:`Component türleri: 1) Presentational (Sunum) Component — sadece UI gösterir, veri almaz. Örnek: Button, Card, Badge. 2) Container (Akıllı) Component — veri çeker, state yönetir, çocuklara veri geçer. Örnek: UserListPage, DashboardContainer. 3) Layout Component — sayfa yapısını belirler. Örnek: Sidebar, Grid, Stack. Sektörde buna 'Component Composition Pattern' denir.`},{type:`preview`,title:`ProductCard component'i ekranda böyle görünür`,content:`<div style='display: flex; gap: 12px;'><div style='border: 1px solid #3f3f46; border-radius: 12px; padding: 16px; width: 160px; background: #18181b;'><div style='width: 100%; height: 80px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 8px; margin-bottom: 10px; display:flex; align-items:center; justify-content:center; color:white; font-size:24px;'>📱</div><div style='font-size: 14px; font-weight: 600; color: #e4e4e7;'>iPhone 15</div><div style='font-size: 13px; color: #a78bfa; margin-top: 4px;'>₺64.999</div><button style='margin-top: 8px; width:100%; padding: 6px; border-radius: 8px; background: #7c3aed; color: white; border: none; font-size: 12px; cursor: pointer;'>🛒 Sepete Ekle</button></div><div style='border: 1px solid #3f3f46; border-radius: 12px; padding: 16px; width: 160px; background: #18181b;'><div style='width: 100%; height: 80px; background: linear-gradient(135deg, #3b82f6, #06b6d4); border-radius: 8px; margin-bottom: 10px; display:flex; align-items:center; justify-content:center; color:white; font-size:24px;'>💻</div><div style='font-size: 14px; font-weight: 600; color: #e4e4e7;'>MacBook Pro</div><div style='font-size: 13px; color: #a78bfa; margin-top: 4px;'>₺84.999</div><button style='margin-top: 8px; width:100%; padding: 6px; border-radius: 8px; background: #7c3aed; color: white; border: none; font-size: 12px; cursor: pointer;'>🛒 Sepete Ekle</button></div><div style='border: 1px solid #3f3f46; border-radius: 12px; padding: 16px; width: 160px; background: #18181b;'><div style='width: 100%; height: 80px; background: linear-gradient(135deg, #10b981, #34d399); border-radius: 8px; margin-bottom: 10px; display:flex; align-items:center; justify-content:center; color:white; font-size:24px;'>🎧</div><div style='font-size: 14px; font-weight: 600; color: #e4e4e7;'>AirPods Pro</div><div style='font-size: 13px; color: #a78bfa; margin-top: 4px;'>₺9.999</div><button style='margin-top: 8px; width:100%; padding: 6px; border-radius: 8px; background: #7c3aed; color: white; border: none; font-size: 12px; cursor: pointer;'>🛒 Sepete Ekle</button></div></div><p style='color: #71717a; font-size: 12px; margin-top: 12px;'>↑ Aynı <code style="color:#a78bfa;">ProductCard</code> component'i 3 kez kullanıldı — her biri farklı props aldı. Bu component composition'ın gücü!</p>`},{type:`tip`,content:`Her component TEK BİR ŞEY yapmalıdır (Single Responsibility Principle). Bir component hem veri çekiyor, hem form yönetiyor, hem de stil veriyorsa — onu parçala! Küçük component'ler test etmesi, debug etmesi ve yeniden kullanması kolaydır.`}]},{id:`dev-environment`,title:`Geliştirme Ortamı — Node.js, npm, Vite`,blocks:[{type:`text`,content:`React projesi geliştirmek için şu araçlara ihtiyacın var: 1) Node.js — JavaScript'i tarayıcı dışında çalıştıran runtime. V8 engine (Chrome'un JS motoru) üzerine kurulu. 2) npm (Node Package Manager) — paket yöneticisi. React, TailwindCSS gibi kütüphaneleri yükler. 3) Vite — geliştirme sunucusu ve bundler. Kodunu tarayıcının anlayacağı hale getirir (JSX → JS, TypeScript → JS, modülleri birleştirir).`},{type:`code`,title:`Proje Yapısı ve Dosyaların Görevi`,language:`bash`,content:`learn-react-proj/
├── node_modules/        # Yüklenen tüm paketler (GIT'e EKLEME!)
├── public/              # Statik dosyalar (favicon, resimler)
├── src/                 # TÜM kaynak kodun buradadır
│   ├── main.tsx         # Uygulamanın GİRİŞ NOKTASI
│   ├── App.tsx          # Ana component
│   ├── index.css        # Global stiller
│   ├── components/      # Yeniden kullanılabilir UI parçaları
│   ├── pages/           # Sayfa component'leri
│   └── data/            # Veri dosyaları
├── index.html           # Tek HTML dosyası (SPA!)
├── package.json         # Proje bilgileri + bağımlılıklar
├── tsconfig.json        # TypeScript ayarları
└── vite.config.ts       # Vite (bundler) ayarları`},{type:`code`,title:`main.tsx — Her Şey Buradan Başlar`,language:`tsx`,content:`// main.tsx — Uygulamanın giriş noktası
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'       // Global stiller
import App from './App'    // Ana component

// 1. HTML'deki <div id="root"> elementini bul
// 2. React'i o elementin içine 'mount' et (bağla)
// 3. <App /> component'ini render et
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// StrictMode: Geliştirme ortamında hataları yakalar.
// Production'da hiçbir etkisi yoktur.
// Component'leri 2 kez render eder — side effect'leri tespit etmek için.`},{type:`warning`,content:`SPA (Single Page Application) = Tek HTML dosyası! Sayfa geçişlerinde tarayıcı yeni HTML indirmez. React, DOM'u JavaScript ile günceller. Bu yüzden ilk yükleme biraz yavaş olabilir (tüm JS indirilir) ama sonraki gezinmeler anında olur.`}]}]},{id:`jsx-basics`,title:`1. JSX — React'in Kalbi`,description:`JSX, React'te UI tanımlamanın temel yoludur. HTML'e benzer ama JavaScript'in tüm gücünü arkasına alır. Bu bölümde JSX'in ne olduğunu, nasıl çalıştığını, kurallarını ve pratik kullanım kalıplarını en ince detayına kadar öğreneceksiniz.`,level:`beginner`,lessons:[{id:`jsx-what-is`,title:`JSX Nedir ve Neden Var?`,blocks:[{type:`text`,content:`JSX (JavaScript XML), JavaScript dosyalarınızın içine HTML benzeri kod yazmanızı sağlayan bir syntax uzantısıdır. Tarayıcı JSX'i direkt anlayamaz — Babel veya SWC gibi derleyiciler (compiler) JSX kodunuzu React.createElement() çağrılarına dönüştürür. Yani JSX bir 'syntactic sugar'dır, yani altında JavaScript fonksiyon çağrıları yatar.`},{type:`text`,content:`Peki neden JSX kullanıyoruz? Çünkü UI oluşturmak aslında veriyi görselleştirmektir ve bu iş en iyi şekilde 'declarative' (bildirici) bir yaklaşımla yapılır. JSX olmadan React.createElement() ile iç içe fonksiyon çağrıları yazmak zorunda kalırdınız — bu okunması ve bakımı çok zor bir koddur. JSX, UI yapınızı bir bakışta anlamanızı sağlar.`},{type:`code`,title:`JSX vs React.createElement — Arka Planda Ne Olur?`,language:`tsx`,content:`// Siz bunu yazarsınız (JSX):
const element = (
  <div className="card">
    <h1>Merhaba!</h1>
    <p>Bu bir JSX örneği</p>
  </div>
)

// Derleyici (Babel/SWC) bunu üretir:
const element = React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h1', null, 'Merhaba!'),
  React.createElement('p', null, 'Bu bir JSX örneği')
)

// İkisi de TAMAMEN aynı şeydir.
// JSX sadece okunabilirlik ve geliştirme kolaylığı sağlar.
// React 17+ ile 'jsx runtime' kullanılır, artık React import'una bile gerek yok.`},{type:`preview`,title:`JSX kodunun tarayıcıdaki çıktısı`,content:`<div style='border: 1px solid #3f3f46; border-radius: 12px; padding: 20px; background: #18181b;'><h1 style='font-size: 22px; font-weight: bold; color: #e4e4e7; margin: 0 0 8px 0;'>Merhaba!</h1><p style='color: #a1a1aa; margin: 0; font-size: 14px;'>Bu bir JSX örneği</p></div><p style='color: #71717a; font-size: 12px; margin-top: 10px;'>↑ <code style="color:#a78bfa;">className="card"</code> bir CSS class'ı ekler. JSX'te <code style="color:#f87171;">class</code> yerine <code style="color:#4ade80;">className</code> yazılır!</p>`},{type:`tip`,content:`Vite projelerinde JSX dönüşümünü SWC (Speedy Web Compiler) yapar. SWC, Rust ile yazıldığı için Babel'den 20-70x daha hızlıdır. Bu yüzden Vite ile geliştirme deneyimi çok akıcıdır — dosyayı kaydeder kaydetmez değişiklik tarayıcıya yansır (HMR - Hot Module Replacement).`}]},{id:`jsx-rules`,title:`JSX'in Altın Kuralları`,blocks:[{type:`text`,content:`JSX, HTML'e benzese de aslında JavaScript'tir. Bu yüzden bazı katı kuralları vardır. Bu kuralları bilmezseniz sürekli hata alırsınız.`},{type:`code`,title:`Kural 1: Tek Bir Kök Element Döndür`,language:`tsx`,content:`// ❌ HATA: Birden fazla kök element
function App() {
  return (
    <h1>Başlık</h1>
    <p>Paragraf</p>
  )
}
// Hata: Adjacent JSX elements must be wrapped in an enclosing tag

// ✅ Çözüm 1: Bir div ile sar
function App() {
  return (
    <div>
      <h1>Başlık</h1>
      <p>Paragraf</p>
    </div>
  )
}

// ✅ Çözüm 2: Fragment kullan (DOM'a ekstra element EKLEMEZ!)
function App() {
  return (
    <>
      <h1>Başlık</h1>
      <p>Paragraf</p>
    </>
  )
}
// <> ... </> = React.Fragment kısaltması
// DOM'da gereksiz div oluşturmaz — daha temiz HTML çıktısı`},{type:`code`,title:`Kural 2: HTML Attribute İsimleri Farklıdır`,language:`tsx`,content:`// JSX'te HTML attribute'ları camelCase yazılır
// Çünkü JSX aslında JavaScript objesidir

// ❌ HTML syntax (JSX'te ÇALIŞMAZ)
<div class="container">        // class = JS reserved keyword!
<label for="email">Email</label> // for = JS reserved keyword!
<input tabindex="1" />           // tabindex değil
<img onclick="handleClick()" />  // string değil, fonksiyon olmalı

// ✅ JSX syntax
<div className="container">       // class → className
<label htmlFor="email">Email</label> // for → htmlFor
<input tabIndex={1} />              // tabindex → tabIndex (camelCase)
<img onClick={handleClick} />       // fonksiyon referansı geçilir

// Style objesi de camelCase:
<div style={{
  backgroundColor: 'red',    // background-color → backgroundColor
  fontSize: '16px',           // font-size → fontSize
  marginTop: '10px',          // margin-top → marginTop
  borderRadius: '8px'         // border-radius → borderRadius
}} />`},{type:`code`,title:`Kural 3: Tüm Etiketler Kapatılmalıdır`,language:`tsx`,content:`// HTML'de bazı etiketler kapatılmadan yazılabilir
// JSX'te TÜMÜ kapatılmalıdır!

// ❌ HTML'de geçerli ama JSX'te HATA
<img src="photo.jpg">
<input type="text">
<br>
<hr>

// ✅ JSX'te self-closing tag kullan
<img src="photo.jpg" />
<input type="text" />
<br />
<hr />

// Component'ler de aynı kurala uyar:
<MyComponent />          // Children yoksa self-closing
<MyComponent>içerik</MyComponent>  // Children varsa aç-kapat`},{type:`warning`,content:`En sık yapılan hata: className yerine class yazmak! Tarayıcı konsolu 'Warning: Invalid DOM property class. Did you mean className?' uyarısı verir. Aynı şekilde for yerine htmlFor kullanın.`}]},{id:`jsx-expressions`,title:`JSX İçinde JavaScript Kullanma — Süslü Parantez {}`,blocks:[{type:`text`,content:`JSX'in en güçlü özelliği: süslü parantez {} içinde HERHANGİ bir JavaScript expression'ı (ifade) yazabilirsiniz. Expression = bir DEĞER üreten kod. Değişkenler, fonksiyon çağrıları, matematiksel işlemler, ternary operatör — hepsi expression'dır.`},{type:`code`,title:`Süslü Parantez İçinde Neler Yapabilirsiniz`,language:`tsx`,content:`function UserProfile() {
  const name = 'Çağlar'
  const age = 25
  const isAdmin = true
  const skills = ['React', 'TypeScript', 'Node.js']
  const user = { avatar: '/avatar.jpg', role: 'Developer' }

  return (
    <div>
      {/* 1. Değişken gösterme */}
      <h1>{name}</h1>
      <p>Yaş: {age}</p>

      {/* 2. JavaScript expression'ları */}
      <p>Doğum yılı: {2025 - age}</p>
      <p>İsim uzunluğu: {name.length} karakter</p>
      <p>Büyük harf: {name.toUpperCase()}</p>

      {/* 3. Ternary operatör (koşullu değer) */}
      <span>{isAdmin ? '👑 Admin' : '👤 Kullanıcı'}</span>

      {/* 4. Fonksiyon çağrısı */}
      <p>{new Date().toLocaleDateString('tr-TR')}</p>

      {/* 5. Obje property'si */}
      <img src={user.avatar} alt={user.role} />

      {/* 6. Template literal */}
      <p>{\`Merhaba \${name}, \${age} yaşındasın!\`}</p>

      {/* 7. Dizi işlemleri */}
      <p>Yetenekler: {skills.join(', ')}</p>
    </div>
  )
}`},{type:`code`,title:`Süslü Parantez İçinde Yapamayacaklarınız`,language:`tsx`,content:`// ❌ BUNLAR ÇALIŞMAZ — statement (ifade değil, komut)
function Bad() {
  return (
    <div>
      {/* if/else KULLANILAMAZ */}
      {if (true) { return 'evet' }}  // HATA!

      {/* for döngüsü KULLANILAMAZ */}
      {for (let i = 0; i < 5; i++) { }}  // HATA!

      {/* switch KULLANILAMAZ */}
      {switch(x) { case 1: break }}  // HATA!

      {/* Obje direkt render edilemez */}
      {{ name: 'Ali', age: 25 }}  // HATA! Objects are not valid as React child
    </div>
  )
}

// ✅ Bunların yerine expression karşılıklarını kullan:
function Good() {
  const items = [1, 2, 3, 4, 5]
  return (
    <div>
      {/* if/else → ternary */}
      {true ? 'evet' : 'hayır'}

      {/* for → map */}
      {items.map(item => <span key={item}>{item}</span>)}

      {/* Obje → JSON.stringify veya property'lere ayrı eriş */}
      {JSON.stringify({ name: 'Ali' })}
    </div>
  )
}`},{type:`preview`,title:`UserProfile component'i ekranda böyle görünür`,content:`<div style='font-family: system-ui; padding: 4px;'><h1 style='font-size: 22px; font-weight: bold; color: #e4e4e7; margin: 0;'>Çağlar</h1><p style='color: #a1a1aa; font-size: 14px; margin: 4px 0;'>Yaş: 25</p><p style='color: #a1a1aa; font-size: 14px; margin: 4px 0;'>Doğum yılı: 2000</p><p style='color: #a1a1aa; font-size: 14px; margin: 4px 0;'>İsim uzunluğu: 6 karakter</p><p style='color: #a1a1aa; font-size: 14px; margin: 4px 0;'>Büyük harf: ÇAĞLAR</p><span style='display: inline-block; padding: 4px 10px; background: #7c3aed33; border: 1px solid #7c3aed55; border-radius: 6px; color: #c4b5fd; font-size: 13px;'>👑 Admin</span><p style='color: #a1a1aa; font-size: 14px; margin: 4px 0;'>Merhaba Çağlar, 25 yaşındasın!</p><p style='color: #a1a1aa; font-size: 14px; margin: 4px 0;'>Yetenekler: React, TypeScript, Node.js</p></div>`},{type:`tip`,content:`Kural basit: Süslü parantez {} içine SADECE expression (değer üreten kod) yazılabilir. if, for, while, switch gibi statement'lar (komutlar) yazılamaz. Bunların yerine: if → ternary (?:) veya &&, for → .map(), switch → obje map pattern kullanın.`}]},{id:`jsx-lists`,title:`Listeler ve Key Prop'u — .map() ile Render`,blocks:[{type:`text`,content:`React'te bir diziyi listeye dönüştürmek için Array.map() kullanılır. map(), dizideki her eleman için bir JSX döndürür. Ancak listelerde KEY prop'u zorunludur — React, hangi elemanın değiştiğini, eklendiğini veya silindiğini KEY ile anlar.`},{type:`code`,title:`Liste Render Etme — Basit ve İleri`,language:`tsx`,content:`// 1. Basit liste
function FruitList() {
  const fruits = ['Elma', 'Armut', 'Muz', 'Çilek']

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={fruit}>{fruit}</li>
        // key={fruit} — her elemanı benzersiz tanımlar
      ))}
    </ul>
  )
}

// 2. Obje dizisi ile liste (gerçek dünya)
interface User {
  id: number
  name: string
  email: string
  isActive: boolean
}

function UserList() {
  const users: User[] = [
    { id: 1, name: 'Ali', email: 'ali@mail.com', isActive: true },
    { id: 2, name: 'Ayşe', email: 'ayse@mail.com', isActive: false },
    { id: 3, name: 'Veli', email: 'veli@mail.com', isActive: true },
  ]

  return (
    <div>
      <h2>Kullanıcılar ({users.length})</h2>
      {users
        .filter(user => user.isActive)  // Sadece aktif olanlar
        .map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span>{user.isActive ? '🟢 Aktif' : '🔴 Pasif'}</span>
          </div>
        ))
      }
      {users.filter(u => u.isActive).length === 0 && (
        <p>Aktif kullanıcı bulunamadı.</p>
      )}
    </div>
  )
}`},{type:`code`,title:`KEY Neden Önemli? — Performans ve Doğruluk`,language:`tsx`,content:`// ❌ YANLIŞ: index'i key olarak kullanma!
{items.map((item, index) => (
  <li key={index}>{item.name}</li>
))}
// Neden kötü?
// Dizinin başına eleman eklendiğinde TÜM index'ler kayar:
// Eski: [A(0), B(1), C(2)]
// Yeni: [X(0), A(1), B(2), C(3)]
// React, index 0'ın değiştiğini sanır → A'yı X ile değiştirir
// Aslında sadece X eklendi ama React tüm listeyi günceller!

// ✅ DOĞRU: Benzersiz ve sabit bir değer kullan
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
// item.id hiç değişmez → React sadece yeni eklenen X'i render eder
// Performans: O(n) yerine O(1) güncelleme!

// Key için uygun değerler:
// ✅ Veritabanı ID'si (user.id, product.id)
// ✅ UUID / benzersiz string
// ✅ Sabit ve benzersiz herhangi bir değer
// ❌ Math.random() — her render'da değişir, anlamsız
// ❌ Array index — sıralama değişince sorun çıkar`},{type:`preview`,title:`UserList component'i ekranda böyle görünür (sadece aktif kullanıcılar)`,content:`<div style='font-family: system-ui;'><h2 style='font-size: 16px; color: #e4e4e7; margin: 0 0 10px 0;'>Kullanıcılar (3)</h2><div style='display: flex; flex-direction: column; gap: 8px;'><div style='padding: 12px; border: 1px solid #3f3f46; border-radius: 10px; background: #18181b;'><h3 style='margin: 0; font-size: 14px; color: #e4e4e7;'>Ali</h3><p style='margin: 2px 0 0; font-size: 12px; color: #71717a;'>ali@mail.com</p><span style='font-size: 11px; color: #4ade80;'>🟢 Aktif</span></div><div style='padding: 12px; border: 1px solid #3f3f46; border-radius: 10px; background: #18181b;'><h3 style='margin: 0; font-size: 14px; color: #e4e4e7;'>Veli</h3><p style='margin: 2px 0 0; font-size: 12px; color: #71717a;'>veli@mail.com</p><span style='font-size: 11px; color: #4ade80;'>🟢 Aktif</span></div></div><p style='color: #71717a; font-size: 11px; margin-top: 8px;'>↑ Ayşe (isActive: false) <code style="color:#f87171;">.filter()</code> ile çıkarıldı. Her kart'ın <code style="color:#a78bfa;">key={user.id}</code> prop'u var.</p></div>`},{type:`warning`,content:`KEY prop'u component'e prop olarak GEÇİRİLMEZ! key={user.id} yazarsanız, component içinden props.key ile erişemezsiniz. Key sadece React'in iç mekanizması için kullanılır. Eğer ID'ye component içinde ihtiyacınız varsa ayrıca userId={user.id} gibi bir prop geçin.`}]}]},{id:`props-children`,title:`2. Props & Children — Veri Akışı`,description:`Component'ler arası veri aktarımı. Props, children, default props, spread pattern ve TypeScript ile tip güvenliği. React'te veri TEK YÖNLÜ akar: yukarıdan aşağıya.`,level:`beginner`,lessons:[{id:`props-basics`,title:`Props Nedir? One-Way Data Flow`,blocks:[{type:`text`,content:`Props (properties), parent component'ten child component'e veri aktarmanın yoludur. HTML attribute'larına benzer ama çok daha güçlüdür — string, number, boolean, array, object, fonksiyon, hatta başka component'ler bile geçirebilirsiniz. Kritik kural: Props READ-ONLY'dir — child component, aldığı prop'ları DEĞİŞTİREMEZ.`},{type:`text`,content:`React'te veri akışı TEK YÖNLÜDÜR (unidirectional): Parent → Child. Bu 'One-Way Data Flow' prensibi, uygulamanızı tahmin edilebilir kılar. Veri nereden geldi? Parent'tan. Veri nereye gidiyor? Child'a. Debugging çok kolay — veriyi yukarıdan aşağıya takip edin.`},{type:`code`,title:`Props Kullanımı — TypeScript ile Tip Güvenliği`,language:`tsx`,content:`// 1. Interface ile prop tiplerini tanımla
interface UserCardProps {
  name: string                    // Zorunlu
  email: string                   // Zorunlu
  age?: number                    // Opsiyonel (? işareti)
  isActive?: boolean              // Opsiyonel, default: undefined
  role: 'admin' | 'user' | 'mod'  // Union type — sadece bu 3 değer
  onEdit: (id: number) => void    // Callback fonksiyon prop
  avatar?: React.ReactNode        // JSX kabul eden prop
}

// 2. Component tanımı — destructuring ile props al
function UserCard({
  name,
  email,
  age,
  isActive = false,  // Default değer: props geçilmezse false olur
  role,
  onEdit,
  avatar,
}: UserCardProps) {
  return (
    <div className={\`card \${isActive ? 'active' : ''}\`}>
      {avatar && <div className="avatar">{avatar}</div>}
      <h3>{name}</h3>
      <p>{email}</p>
      {age !== undefined && <p>Yaş: {age}</p>}
      <span className={\`badge badge-\${role}\`}>{role}</span>
      <button onClick={() => onEdit(42)}>Düzenle</button>
    </div>
  )
}

// 3. Kullanım — parent'tan props geçme
function App() {
  const handleEdit = (userId: number) => {
    console.log(\`Düzenleniyor: \${userId}\`)
  }

  return (
    <UserCard
      name="Çağlar"
      email="caglar@mail.com"
      age={25}
      isActive={true}
      role="admin"
      onEdit={handleEdit}
      avatar={<img src="/avatar.jpg" alt="" />}
    />
    // TypeScript burada tip kontrolü yapar:
    // role="invalid" yazarsanız → derleme HATASI!
    // name prop'unu geçmezseniz → derleme HATASI!
  )
}`},{type:`preview`,title:`UserCard component'i ekranda böyle görünür`,content:`<div style='border: 1px solid #3f3f46; border-radius: 12px; padding: 16px; background: #18181b; max-width: 280px; border-left: 3px solid #4ade80;'><div style='display: flex; align-items: center; gap: 10px; margin-bottom: 10px;'><div style='width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #6366f1, #a78bfa); display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;'>Ç</div><div><h3 style='margin: 0; font-size: 15px; color: #e4e4e7;'>Çağlar</h3><p style='margin: 0; font-size: 12px; color: #71717a;'>caglar@mail.com</p></div></div><p style='font-size: 13px; color: #a1a1aa; margin: 4px 0;'>Yaş: 25</p><div style='display: flex; align-items: center; justify-content: space-between; margin-top: 10px;'><span style='padding: 3px 10px; border-radius: 6px; background: #7c3aed33; color: #c4b5fd; font-size: 11px; font-weight: 600;'>👑 admin</span><button style='padding: 5px 14px; border-radius: 6px; background: #3b82f6; color: white; border: none; font-size: 12px; cursor: pointer;'>Düzenle</button></div></div><p style='color: #71717a; font-size: 11px; margin-top: 8px;'>↑ name, email, age, role, onEdit, avatar — hepsi parent'tan prop olarak geldi</p>`},{type:`tip`,content:`TypeScript'in en büyük avantajı: yanlış prop geçerseniz ÇALIŞMADAN ÖNCE hata alırsınız. Runtime'da (kullanıcının tarayıcısında) değil, geliştirme sırasında. Bu, büyük projelerde binlerce bug'ı önler. Sektörde buna 'shift-left testing' denir — hataları mümkün olduğunca erken yakalayın.`}]},{id:`children-prop`,title:`Children Prop — Component Composition`,blocks:[{type:`text`,content:`children, özel bir prop'tur. Component etiketlerinin ARASINA yazdığınız her şey children olarak geçer. Bu pattern sayesinde 'wrapper' ve 'layout' component'ler yapabilirsiniz — HTML'deki <div> gibi ama özelleştirilmiş.`},{type:`code`,title:`Children ile Wrapper/Layout Component'leri`,language:`tsx`,content:`// 1. Basit Wrapper: Card
interface CardProps {
  title?: string
  children: React.ReactNode  // ReactNode: string, number, element, null, array...
}

function Card({ title, children }: CardProps) {
  return (
    <div className="border border-zinc-700 rounded-xl overflow-hidden">
      {title && (
        <div className="px-4 py-3 border-b border-zinc-700 bg-zinc-800">
          <h3 className="font-semibold">{title}</h3>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  )
}

// Kullanım — children olarak ne isterseniz koyun
<Card title="Kullanıcı Bilgisi">
  <p>İsim: Ali</p>
  <p>Email: ali@mail.com</p>
  <button>Düzenle</button>
</Card>

<Card title="İstatistikler">
  <Chart data={salesData} />
</Card>

// 2. Layout Component
interface LayoutProps {
  header: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
}

function DashboardLayout({ header, sidebar, children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <header className="h-16 border-b">{header}</header>
      <div className="flex">
        <aside className="w-64 border-r">{sidebar}</aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

// Kullanım
<DashboardLayout
  header={<Navbar />}
  sidebar={<Sidebar />}
>
  <UserList />   {/* Bu children olarak geçer */}
</DashboardLayout>`},{type:`preview`,title:`Card component'i children ile böyle görünür`,content:`<div style='max-width: 300px;'><div style='border: 1px solid #3f3f46; border-radius: 12px; overflow: hidden; background: #18181b;'><div style='padding: 10px 16px; border-bottom: 1px solid #3f3f46; background: #27272a;'><h3 style='margin: 0; font-size: 14px; font-weight: 600; color: #e4e4e7;'>Kullanıcı Bilgisi</h3></div><div style='padding: 16px;'><p style='margin: 0 0 4px; font-size: 13px; color: #a1a1aa;'>İsim: Ali</p><p style='margin: 0 0 8px; font-size: 13px; color: #a1a1aa;'>Email: ali@mail.com</p><button style='padding: 6px 16px; border-radius: 8px; background: #3b82f6; color: white; border: none; font-size: 12px; cursor: pointer;'>Düzenle</button></div></div><p style='color: #71717a; font-size: 11px; margin-top: 8px;'>↑ <code style="color:#a78bfa;">title</code> prop header'ı oluşturdu. Ortadaki p ve button ise <code style="color:#4ade80;">children</code> olarak geçti.</p></div>`},{type:`tip`,content:`React'te inheritance (class extends) KULLANMAYIN. Her zaman composition (children, props, render props) tercih edin. Bu, React'in resmi önerisidir. Composition daha esnek, daha okunabilir ve daha test edilebilirdir.`}]},{id:`props-patterns`,title:`İleri Props Pattern'leri — Spread, Rest, Forwarding`,blocks:[{type:`text`,content:`Büyük projelerde props yönetimi karmaşıklaşır. Spread/rest operatörleri ve prop forwarding ile kodu temiz tutabilirsiniz.`},{type:`code`,title:`Spread & Rest Props — Gerçek Dünya`,language:`tsx`,content:`// 1. Spread: Obje'nin tüm property'lerini prop olarak geç
const user = { name: 'Ali', email: 'ali@mail.com', age: 25 }

// ❌ Tek tek geçmek
<UserCard name={user.name} email={user.email} age={user.age} />

// ✅ Spread ile
<UserCard {...user} />
// Eşdeğer: name="Ali" email="ali@mail.com" age={25}

// 2. Rest: Bilinen props'ları al, kalanını geç
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger'
  isLoading?: boolean
}

function Button({ variant, isLoading, children, ...rest }: ButtonProps) {
  // rest = onClick, disabled, className, type, vb.
  // HTML button'un tüm native prop'larını destekler!
  return (
    <button
      className={\`btn btn-\${variant}\`}
      disabled={isLoading || rest.disabled}
      {...rest}  // Kalan tüm prop'ları button'a geç
    >
      {isLoading ? 'Yükleniyor...' : children}
    </button>
  )
}

// Kullanım — native HTML attribute'ları da geçebilirsin
<Button variant="primary" onClick={handleSave} type="submit">
  Kaydet
</Button>

<Button variant="danger" disabled aria-label="Sil">
  Sil
</Button>`},{type:`warning`,content:`Prop drilling sorunu: Bir veriyi 5 seviye aşağıya geçirmek için her ara component'e props eklemek gerekir. Bu kodu karmaşıklaştırır. Çözümler: 1) Component Composition — ara component'leri children ile bypass et. 2) Context API — global veri paylaşımı. 3) Zustand/Redux — state management kütüphanesi.`},{type:`demo`,content:`Props akışını canlı gör — parent'tan child'a veri nasıl geçer:`,demoId:`props`}]}]},{id:`conditional-rendering`,title:`3. Conditional Rendering — Koşullu Gösterim`,description:`Koşullu render teknikleri: &&, ternary, early return, switch pattern. Hangi durumda hangisi kullanılır, performans etkileri ve sektördeki en iyi pratikler.`,level:`beginner`,lessons:[{id:`conditional-basics`,title:`Koşullu Render Yöntemleri — Tam Karşılaştırma`,blocks:[{type:`text`,content:`React'te if/else JSX içinde kullanılamaz çünkü JSX sadece expression (değer üreten ifade) kabul eder. Bunun yerine 4 temel yöntem vardır. Her birinin kullanım alanı farklıdır.`},{type:`code`,title:`Yöntem 1: && Operatörü — Göster veya Gösterme`,language:`tsx`,content:`// && (logical AND): Koşul true ise sağdakini render et
function Notifications({ count }: { count: number }) {
  return (
    <div>
      <h2>Bildirimler</h2>

      {/* count > 0 ise badge göster, değilse HİÇBİR ŞEY gösterme */}
      {count > 0 && (
        <span className="badge">{count} yeni bildirim</span>
      )}

      {/* Birden fazla koşul */}
      {count > 0 && count < 100 && (
        <p>Okunmamış bildirimleriniz var</p>
      )}

      {/* ⚠️ DİKKAT: Sayı ile && kullanma tuzağı */}
      {count && <span>Bildirim var</span>}
      {/* count = 0 ise ekranda "0" YAZAR! (falsy ama render edilir) */}
      {/* Çünkü 0 && <span>...</span> = 0 (React 0'ı render eder) */}

      {/* ✅ Çözüm: Boolean'a çevir */}
      {count > 0 && <span>Bildirim var</span>}
      {!!count && <span>Bildirim var</span>}
      {Boolean(count) && <span>Bildirim var</span>}
    </div>
  )
}`},{type:`preview`,title:`&& operatörü — count değerine göre ekran çıktısı`,content:`<div style='font-family: system-ui; display: flex; gap: 16px;'><div style='flex: 1; padding: 14px; border: 1px solid #3f3f46; border-radius: 10px; background: #18181b;'><div style='font-size: 11px; color: #71717a; margin-bottom: 6px;'>count = 5</div><h2 style='margin: 0 0 6px; font-size: 14px; color: #e4e4e7;'>Bildirimler</h2><span style='padding: 3px 10px; border-radius: 12px; background: #ef444433; color: #f87171; font-size: 12px; font-weight: 600;'>5 yeni bildirim</span></div><div style='flex: 1; padding: 14px; border: 1px solid #3f3f46; border-radius: 10px; background: #18181b;'><div style='font-size: 11px; color: #71717a; margin-bottom: 6px;'>count = 0</div><h2 style='margin: 0 0 6px; font-size: 14px; color: #e4e4e7;'>Bildirimler</h2><span style='font-size: 12px; color: #71717a;'>← Badge gösterilmiyor (0 > 0 = false)</span></div></div>`},{type:`code`,title:`Yöntem 2: Ternary Operatörü — İki Durumdan Biri`,language:`tsx`,content:`// condition ? ifTrue : ifFalse
function UserStatus({ isOnline }: { isOnline: boolean }) {
  return (
    <div>
      {/* Basit ternary */}
      <span>{isOnline ? '🟢 Çevrimiçi' : '🔴 Çevrimdışı'}</span>

      {/* className ile */}
      <div className={isOnline ? 'text-green-500' : 'text-red-500'}>
        {isOnline ? 'Aktif' : 'Pasif'}
      </div>

      {/* Component seçimi */}
      {isOnline ? <OnlinePanel /> : <OfflineMessage />}

      {/* ⚠️ İç içe ternary KULLANMAYIN — okunmaz! */}
      {/* ❌ */}
      {status === 'loading'
        ? <Spinner />
        : status === 'error'
          ? <Error />
          : status === 'empty'
            ? <Empty />
            : <Data />}  {/* Bu kabus! */}
    </div>
  )
}`},{type:`code`,title:`Yöntem 3: Early Return — En Temiz Yöntem`,language:`tsx`,content:`// Guard clause pattern: Fonksiyonun başında edge case'leri ele al
function UserProfile({ user, isLoading, error }: Props) {
  // 1. Loading durumu
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner size="lg" />
        <p>Profil yükleniyor...</p>
      </div>
    )
  }

  // 2. Hata durumu
  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500 p-4 rounded-lg">
        <h3>Hata Oluştu</h3>
        <p>{error.message}</p>
        <button onClick={() => window.location.reload()}>Tekrar Dene</button>
      </div>
    )
  }

  // 3. Veri yok
  if (!user) {
    return <p>Kullanıcı bulunamadı.</p>
  }

  // 4. Ana render — sadece mutlu yol (happy path)
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  )
}

// Sektörde buna 'Guard Clause' denir.
// Avantajları:
// - Her durum açıkça ele alınır
// - İç içe if/else YOK
// - Ana mantık en sonda, temiz ve okunabilir
// - TypeScript narrowing ile otomatik tip güvenliği`},{type:`code`,title:`Yöntem 4: Object Map Pattern — switch Alternatifi`,language:`tsx`,content:`// Birden fazla durum varsa obje map kullan
type Status = 'idle' | 'loading' | 'success' | 'error'

function StatusDisplay({ status }: { status: Status }) {
  // Her duruma karşılık gelen component
  const statusMap: Record<Status, React.ReactNode> = {
    idle: <p className="text-zinc-400">Bekleniyor...</p>,
    loading: <Spinner />,
    success: <p className="text-green-400">✅ Başarılı!</p>,
    error: <p className="text-red-400">❌ Hata oluştu!</p>,
  }

  return <div>{statusMap[status]}</div>
}

// Daha karmaşık örnek: Tab sistemi
function TabContent({ activeTab }: { activeTab: string }) {
  const tabs: Record<string, React.ReactNode> = {
    profile: <ProfileTab />,
    settings: <SettingsTab />,
    notifications: <NotificationsTab />,
    billing: <BillingTab />,
  }

  return tabs[activeTab] ?? <p>Sayfa bulunamadı</p>
  // ?? = nullish coalescing: null veya undefined ise sağdakini kullan
}`},{type:`tip`,content:`Hangi yöntemi ne zaman kullan? && → Göster/gizle (tek durum). Ternary → İki seçenek (A veya B). Early Return → Loading/error/empty durumları (guard clause). Object Map → 3+ durum (tab, status, role bazlı render). Nested ternary ASLA kullanma — kodu okunamaz hale getirir.`},{type:`demo`,content:`&&, ternary ve object map pattern'lerini canlı dene:`,demoId:`conditional`}]}]},{id:`event-handling`,title:`4. Event Handling — Olay Yönetimi`,description:`React'te event yönetimi, synthetic events, form events, TypeScript event tipleri ve event delegasyonu. Kullanıcı etkileşimlerini yakalama ve işleme.`,level:`beginner`,lessons:[{id:`events-basics`,title:`Event Handler Temelleri`,blocks:[{type:`text`,content:`React'te event'ler HTML'den farklıdır. camelCase yazılır (onclick → onClick), string yerine fonksiyon referansı geçilir. React, tarayıcı event'lerini 'SyntheticEvent' ile sarmalar — tüm tarayıcılarda tutarlı davranış sağlar.`},{type:`code`,title:`Event Handler Tanımlama Yolları`,language:`tsx`,content:`function EventExamples() {
  // 1. Inline arrow function
  // Basit işlemler için uygundur
  return (
    <button onClick={() => console.log('Tıklandı!')}>
      Tıkla
    </button>
  )
}

function EventExamples2() {
  // 2. Ayrı fonksiyon tanımla (ÖNERILEN)
  // Karmaşık mantık için daha okunabilir
  const handleClick = () => {
    console.log('Tıklandı!')
    // API çağrısı, state güncelleme vb.
  }

  // 3. Event objesine erişim
  const handleClickWithEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Tıklanan element:', e.currentTarget)
    console.log('Mouse pozisyonu:', e.clientX, e.clientY)
    console.log('Ctrl basılı mı?', e.ctrlKey)
  }

  // 4. Parametre geçme
  const handleDelete = (userId: number) => {
    console.log(\`Kullanıcı \${userId} siliniyor...\`)
  }

  return (
    <div>
      <button onClick={handleClick}>Tıkla</button>
      <button onClick={handleClickWithEvent}>Event ile</button>

      {/* ❌ YANLIŞ: Fonksiyonu ÇAĞIRIR (render sırasında!) */}
      <button onClick={handleDelete(5)}>Sil</button>

      {/* ✅ DOĞRU: Arrow function ile sar */}
      <button onClick={() => handleDelete(5)}>Sil</button>
    </div>
  )
}`},{type:`preview`,title:`Event handler çıktısı — butonlara tıklanınca ne olur`,content:`<div style='font-family: system-ui; display: flex; gap: 8px; flex-wrap: wrap;'><button style='padding: 8px 16px; border-radius: 8px; background: #3b82f6; color: white; border: none; font-size: 13px; cursor: pointer;'>Tıkla</button><button style='padding: 8px 16px; border-radius: 8px; background: #6366f1; color: white; border: none; font-size: 13px; cursor: pointer;'>Event ile</button><button style='padding: 8px 16px; border-radius: 8px; background: #ef4444; color: white; border: none; font-size: 13px; cursor: pointer;'>Sil</button></div><div style='margin-top: 10px; padding: 10px; background: #0c0c0c; border-radius: 8px; border: 1px solid #27272a; font-family: monospace; font-size: 12px;'><div style='color: #71717a;'>// Console çıktısı:</div><div style='color: #a1a1aa;'>Tıklandı!</div><div style='color: #a1a1aa;'>Tıklanan element: &lt;button&gt;</div><div style='color: #a1a1aa;'>Mouse pozisyonu: 142, 350</div><div style='color: #a1a1aa;'>Kullanıcı 5 siliniyor...</div></div>`},{type:`warning`,content:`onClick={handleDelete(5)} yazarsanız fonksiyon HEMEN çalışır (render sırasında)! Çünkü () parantez fonksiyonu çağırır. onClick={() => handleDelete(5)} yazın — bu bir fonksiyon REFERANSI geçer, tıklanınca çalışır.`}]},{id:`form-events`,title:`Form Event'leri — Input, Select, Textarea`,blocks:[{type:`text`,content:`Form elementleri React'in en sık kullanılan event'lerini içerir. onChange, onSubmit, onFocus, onBlur gibi event'lerle kullanıcı girişini yönetirsiniz. TypeScript ile event tipleri belirleyerek hata yapma olasılığını sıfıra indirirsiniz.`},{type:`code`,title:`Kontrollü Form — Tam Örnek`,language:`tsx`,content:`import { useState, type FormEvent, type ChangeEvent } from 'react'

interface FormData {
  username: string
  email: string
  role: 'admin' | 'user'
  bio: string
  agreeTerms: boolean
}

function RegistrationForm() {
  const [form, setForm] = useState<FormData>({
    username: '',
    email: '',
    role: 'user',
    bio: '',
    agreeTerms: false,
  })

  // Genel input handler — tüm input'lar için tek fonksiyon
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value,
    }))
  }

  // Form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()  // Sayfanın yenilenmesini engelle!
    console.log('Form verisi:', form)
    // API'ye gönder...
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Kullanıcı adı"
      />

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="E-posta"
      />

      <select name="role" value={form.role} onChange={handleChange}>
        <option value="user">Kullanıcı</option>
        <option value="admin">Admin</option>
      </select>

      <textarea
        name="bio"
        value={form.bio}
        onChange={handleChange}
        placeholder="Hakkınızda"
      />

      <label>
        <input
          name="agreeTerms"
          type="checkbox"
          checked={form.agreeTerms}
          onChange={handleChange}
        />
        Şartları kabul ediyorum
      </label>

      <button type="submit" disabled={!form.agreeTerms}>
        Kayıt Ol
      </button>
    </form>
  )
}`},{type:`code`,title:`TypeScript Event Tipleri — Cheat Sheet`,language:`tsx`,content:`// Her event tipi için doğru TypeScript tipi:

// Mouse event'leri
onClick:      (e: React.MouseEvent<HTMLButtonElement>) => void
onDoubleClick:(e: React.MouseEvent<HTMLDivElement>) => void
onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void

// Form event'leri
onChange:     (e: React.ChangeEvent<HTMLInputElement>) => void
onSubmit:     (e: React.FormEvent<HTMLFormElement>) => void
onFocus:      (e: React.FocusEvent<HTMLInputElement>) => void
onBlur:       (e: React.FocusEvent<HTMLInputElement>) => void

// Klavye event'leri
onKeyDown:    (e: React.KeyboardEvent<HTMLInputElement>) => void
onKeyUp:      (e: React.KeyboardEvent<HTMLInputElement>) => void

// Drag & Drop
onDrag:       (e: React.DragEvent<HTMLDivElement>) => void
onDrop:       (e: React.DragEvent<HTMLDivElement>) => void

// Touch (mobil)
onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void
onTouchEnd:   (e: React.TouchEvent<HTMLDivElement>) => void

// Scroll
onScroll:     (e: React.UIEvent<HTMLDivElement>) => void

// Kısayol: Generic element tipi bilmiyorsanız
// HTMLElement kullanabilirsiniz ama spesifik tip tercih edin.`},{type:`tip`,content:`e.preventDefault() en sık kullanılan event metodu: form submit'te sayfa yenilenmesini, link tıklamada navigasyonu engeller. e.stopPropagation() ise event'in parent elementlere 'bubble' etmesini (yukarı yayılmasını) engeller. İkisini karıştırmayın!`},{type:`demo`,content:`Kontrollü form örneğini canlı dene — input yaz, validation gör, submit et:`,demoId:`form`}]}]},{id:`use-state`,title:`5. useState — State Yönetiminin Temeli`,description:`Component içi state yönetiminin temeli. Her state değişiminde component yeniden render olur. State, React'in kalbidir — UI'ınızı canlı tutan mekanizmadır.`,level:`beginner`,lessons:[{id:`useState-what-is`,title:`State Nedir? Neden Değişkeni Yetmiyor?`,blocks:[{type:`text`,content:`State, bir component'in 'hafızası'dır. Normal bir let değişkeni kullanırsanız, React değişikliği FARK ETMEZ ve ekranı güncellemez. useState kullandığınızda React, değişikliği bilir ve component'i yeniden render eder — böylece yeni değer ekranda görünür.`},{type:`code`,title:`Normal Değişken vs useState — Kritik Fark`,language:`tsx`,content:`// ❌ ÇALIŞMAZ: Normal değişken kullanma
function BrokenCounter() {
  let count = 0  // Her render'da 0'a sıfırlanır!

  const handleClick = () => {
    count = count + 1  // Değer değişir AMA...
    console.log(count)  // Konsolda artar: 1, 2, 3...
    // ...React bunu BİLMEZ → ekran güncellenmez!
    // Ekranda hep 0 görürsünüz.
  }

  return (
    <div>
      <p>Sayaç: {count}</p>  {/* Her zaman 0 gösterir */}
      <button onClick={handleClick}>Artır</button>
    </div>
  )
}

// ✅ DOĞRU: useState kullan
import { useState } from 'react'

function WorkingCounter() {
  const [count, setCount] = useState(0)
  // count = mevcut değer (okuma)
  // setCount = değeri güncelleyen fonksiyon (yazma)
  // 0 = başlangıç değeri (sadece ilk render'da kullanılır)

  const handleClick = () => {
    setCount(count + 1)  // React'e "yeni değer 1" de
    // React component'i yeniden render eder
    // count artık 1 → ekran güncellenir!
  }

  return (
    <div>
      <p>Sayaç: {count}</p>  {/* Güncel değeri gösterir */}
      <button onClick={handleClick}>Artır</button>
    </div>
  )
}`},{type:`preview`,title:`BrokenCounter vs WorkingCounter — ekranda fark`,content:`<div style='display: flex; gap: 16px; font-family: system-ui;'><div style='flex: 1; padding: 16px; border: 1px solid #ef444466; border-radius: 12px; background: #18181b;'><div style='font-size: 11px; color: #f87171; font-weight: 600; margin-bottom: 8px;'>❌ BrokenCounter</div><p style='font-size: 20px; color: #e4e4e7; margin: 0; text-align: center;'>Sayaç: 0</p><p style='font-size: 10px; color: #71717a; text-align: center; margin: 4px 0 8px;'>← Butona 10 kez tıklasan bile hep 0</p><button style='width: 100%; padding: 6px; border-radius: 8px; background: #3f3f46; color: #a1a1aa; border: none; font-size: 12px;'>Artır (çalışmaz)</button></div><div style='flex: 1; padding: 16px; border: 1px solid #4ade8066; border-radius: 12px; background: #18181b;'><div style='font-size: 11px; color: #4ade80; font-weight: 600; margin-bottom: 8px;'>✅ WorkingCounter</div><p style='font-size: 20px; color: #e4e4e7; margin: 0; text-align: center;'>Sayaç: 3</p><p style='font-size: 10px; color: #71717a; text-align: center; margin: 4px 0 8px;'>← Her tıklamada güncellenir</p><button style='width: 100%; padding: 6px; border-radius: 8px; background: #7c3aed; color: white; border: none; font-size: 12px;'>Artır ✓</button></div></div>`},{type:`text`,content:`useState'in çalışma mekanizması: 1) setCount(yeniDeger) çağrılır. 2) React, yeni değeri kaydeder. 3) Component fonksiyonu BAŞTAN çalıştırılır (re-render). 4) useState(0) çağrılır ama React başlangıç değerini KULLANMAZ — kayıtlı son değeri döner. 5) Yeni JSX üretilir, Virtual DOM karşılaştırılır, gerçek DOM güncellenir.`},{type:`warning`,content:`State güncellemesi ASENKRON'dur! setCount(1) çağırdıktan hemen sonra count'u okursanız ESKİ değeri görürsünüz. Çünkü güncelleme bir sonraki render'da geçerli olur. Bu React'in en kafa karıştıran özelliğidir — batching (toplu güncelleme) sayesinde performans kazanır.`},{type:`demo`,content:`useState'i canlı dene — sayaç, updater fonksiyonu ve state değişimini gör:`,demoId:`counter`}]},{id:`useState-types`,title:`Farklı Veri Tipleriyle State Kullanımı`,blocks:[{type:`text`,content:`useState ile her türlü JavaScript değerini saklayabilirsiniz: number, string, boolean, array, object, null. TypeScript ile tip güvenliği de ekleyebilirsiniz.`},{type:`code`,title:`Tüm Veri Tipleri ile useState`,language:`tsx`,content:`import { useState } from 'react'

function AllStateTypes() {
  // Sayı
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(99.99)

  // String
  const [name, setName] = useState('')
  const [email, setEmail] = useState('user@mail.com')

  // Boolean
  const [isLoading, setIsLoading] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Dizi (Array)
  const [todos, setTodos] = useState<string[]>([])
  const [users, setUsers] = useState<User[]>([])

  // Obje
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  })

  // Null olabilir (API'den veri gelene kadar)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  // Union type
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  return (
    <div>
      {/* Boolean toggle */}
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? '🌙 Dark' : '☀️ Light'}
      </button>

      {/* String input */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="İsminiz"
      />

      {/* Status gösterimi */}
      {status === 'loading' && <p>Yükleniyor...</p>}
      {status === 'error' && <p>Hata oluştu!</p>}
      {status === 'success' && <p>Başarılı!</p>}
    </div>
  )
}`},{type:`tip`,content:`TypeScript ile useState kullanırken, başlangıç değerinden tip çıkarılamıyorsa generic kullanın: useState<User | null>(null). Böylece setSelectedUser(user) çağrısında TypeScript tip kontrolü yapar — yanlış veri tipi geçerseniz derleme hatası alırsınız.`},{type:`demo`,content:`Boolean state ile toggle, accordion ve loading durumlarını canlı dene:`,demoId:`toggle`}]},{id:`useState-updater`,title:`Updater Fonksiyonu — Önceki Değere Göre Güncelleme`,blocks:[{type:`text`,content:`State'i güncellerken önceki değere ihtiyacınız varsa, MUTLAKA updater fonksiyonu kullanın. Direkt değer yerine bir fonksiyon geçerseniz, React size HER ZAMAN en güncel değeri verir. Bu, özellikle birden fazla güncelleme yapıldığında kritiktir.`},{type:`code`,title:`Direkt Değer vs Updater Fonksiyonu`,language:`tsx`,content:`function Counter() {
  const [count, setCount] = useState(0)

  // ❌ SORUNLU: 3 kez çağırsan bile sadece 1 artar!
  const handleBadClick = () => {
    setCount(count + 1)  // count = 0, sonuç: 1
    setCount(count + 1)  // count HALA 0, sonuç: 1
    setCount(count + 1)  // count HALA 0, sonuç: 1
    // Sonuç: count = 1 (3 değil!)
    // Neden? Çünkü React bu render'daki count'u kullanır (0)
    // 3 kez "0 + 1 = 1" hesaplar → hepsi aynı!
  }

  // ✅ DOĞRU: Updater fonksiyonu ile
  const handleGoodClick = () => {
    setCount(prev => prev + 1)  // prev = 0, sonuç: 1
    setCount(prev => prev + 1)  // prev = 1, sonuç: 2
    setCount(prev => prev + 1)  // prev = 2, sonuç: 3
    // Sonuç: count = 3 ✅
    // prev her zaman EN GÜNCEL değeri alır
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleGoodClick}>+3</button>
    </div>
  )
}

// KURAL: Eğer yeni değer ESKİ değere bağlıysa → updater kullan
// setCount(prev => prev + 1)     ✅
// setCount(count + 1)             ❌ (closure tuzağı)
// setTodos(prev => [...prev, newTodo])  ✅`},{type:`warning`,content:`React 18'de tüm event handler'lar içindeki state güncellemeleri 'batch' (toplu) edilir. Yani 3 kez setState çağırsanız bile React SADECE 1 KEZ render eder. Bu performans optimizasyonudur. Ama bu yüzden closure'daki (kapatma) eski değeri kullanmamak için updater fonksiyonu şarttır!`}]},{id:`useState-immutability`,title:`Immutability — State'i Doğru Güncelleme`,blocks:[{type:`text`,content:`React'te state'i DOĞRUDAN değiştirmek (mutate etmek) YASAKTIR. Yeni bir kopya oluşturup onu set fonksiyonuna vermelisiniz. Neden? Çünkü React, eski ve yeni değerin referansını karşılaştırır. Aynı objeyi mutate ederseniz referans değişmez → React 'değişmedi' sanır → ekran güncellenmez!`},{type:`code`,title:`Obje State Güncelleme — Spread Operatörü`,language:`tsx`,content:`interface UserForm {
  name: string
  email: string
  age: number
  address: {
    city: string
    country: string
  }
}

function ProfileForm() {
  const [user, setUser] = useState<UserForm>({
    name: 'Ali',
    email: 'ali@mail.com',
    age: 25,
    address: { city: 'İstanbul', country: 'Türkiye' },
  })

  // ❌ YANLIŞ: Objeyi doğrudan değiştirme (mutation)
  const handleBad = () => {
    user.name = 'Veli'  // Objeyi mutate etti
    setUser(user)       // Aynı referans → React güncelleme yapmaz!
  }

  // ✅ DOĞRU: Yeni obje oluştur (spread ile)
  const handleNameChange = (newName: string) => {
    setUser(prev => ({
      ...prev,         // Tüm eski değerleri kopyala
      name: newName,   // Sadece name'i değiştir
    }))
  }

  // ✅ İç içe obje güncelleme (nested spread)
  const handleCityChange = (newCity: string) => {
    setUser(prev => ({
      ...prev,
      address: {
        ...prev.address,  // address'in eski değerlerini kopyala
        city: newCity,     // Sadece city'yi değiştir
      },
    }))
  }

  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => handleNameChange(e.target.value)}
      />
      <p>{user.address.city}, {user.address.country}</p>
    </div>
  )
}`},{type:`code`,title:`Dizi (Array) State Güncelleme — map, filter, spread`,language:`tsx`,content:`interface Todo {
  id: number
  text: string
  done: boolean
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  // EKLEME: Yeni eleman ekle
  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, done: false }
    setTodos(prev => [...prev, newTodo])  // Eski dizi + yeni eleman
  }

  // SİLME: ID'ye göre filtrele
  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
    // filter: koşulu sağlayanları döndürür (id eşit olmayanlar kalır)
  }

  // GÜNCELLEME: Belirli bir elemanı değiştir
  const toggleTodo = (id: number) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id
        ? { ...todo, done: !todo.done }  // Bu todo'yu güncelle
        : todo                           // Diğerlerine dokunma
    ))
  }

  // SIRALAMA: Yeni dizi oluştur, sonra sırala
  const sortTodos = () => {
    setTodos(prev => [...prev].sort((a, b) => a.text.localeCompare(b.text)))
    // [...prev] = kopya oluştur (sort orijinali değiştirir!)
  }

  // ❌ YANLIŞ: push, splice, sort doğrudan
  // todos.push(newTodo)     // Mutation! React görmez
  // todos.splice(0, 1)      // Mutation!
  // todos.sort()             // Mutation! Orijinal diziyi değiştirir

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => toggleTodo(todo.id)}>✓</button>
          <button onClick={() => removeTodo(todo.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}`},{type:`tip`,content:`Dizi için: EKLEME → [...prev, newItem] veya [newItem, ...prev] (başa). SİLME → prev.filter(). GÜNCELLEME → prev.map(). SIRALAMA → [...prev].sort(). Obje için: HER ZAMAN spread (...) ile yeni obje oluştur. İç içe objelerde her seviyede spread gerekir.`},{type:`demo`,content:`Dizi state yönetimini canlı dene — ekle, sil, tamamla, ilerlemeyi gör:`,demoId:`todo`}]},{id:`useState-lazy-init`,title:`Lazy Initialization — Performans Optimizasyonu`,blocks:[{type:`text`,content:`useState'e başlangıç değeri olarak pahalı bir hesaplama verirseniz, bu hesaplama HER RENDER'DA çalışır (sonucu kullanılmasa bile). Lazy initialization ile hesaplama SADECE ilk render'da çalışır.`},{type:`code`,title:`Lazy Initialization Kullanımı`,language:`tsx`,content:`// ❌ KÖTÜ: Her render'da localStorage okunur (gereksiz!)
const [theme, setTheme] = useState(
  localStorage.getItem('theme') || 'dark'
  // Bu expression her render'da çalışır
  // localStorage.getItem() her seferinde çağrılır
  // Ama sonucu sadece ilk render'da kullanılır!
)

// ✅ İYİ: Fonksiyon geçir → sadece ilk render'da çalışır
const [theme, setTheme] = useState(() => {
  // Bu fonksiyon SADECE component mount olduğunda çalışır
  const saved = localStorage.getItem('theme')
  return saved || 'dark'
})

// ❌ KÖTÜ: Pahalı hesaplama her render'da çalışır
const [data, setData] = useState(expensiveCalculation(rawData))

// ✅ İYİ: Lazy initialization
const [data, setData] = useState(() => expensiveCalculation(rawData))

// KURAL:
// useState(değer)       → değer her render'da hesaplanır
// useState(() => değer) → değer sadece ilk render'da hesaplanır
// Fark: () => ile sarmalamak = lazy (tembel) başlatma`},{type:`tip`,content:`Ne zaman lazy initialization kullanmalı? 1) localStorage/sessionStorage okuma. 2) Pahalı hesaplamalar (büyük dizi filtreleme, sıralama). 3) Başlangıç değeri props'tan türetiliyorsa ve hesaplama ağırsa. Basit değerler için (0, '', false, []) lazy initialization GEREKMEZ.`}]},{id:`useState-common-mistakes`,title:`En Sık Yapılan useState Hataları`,blocks:[{type:`text`,content:`useState ile çalışırken sıkça düşülen tuzaklar ve çözümleri. Bu hataları bilmek sizi saatlerce debug etmekten kurtarır.`},{type:`code`,title:`Hata 1: State Güncellendikten Hemen Sonra Okuma`,language:`tsx`,content:`function StaleValueBug() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prev => prev + 1)
    console.log(count)  // ❌ Hala 0 gösterir!
    // State güncelleme asenkrondur.
    // Yeni değer bir SONRAKİ render'da geçerli olur.

    // ✅ Çözüm 1: useEffect ile izle
    // ✅ Çözüm 2: Değeri bir değişkende tut
    const newCount = count + 1
    setCount(newCount)
    console.log(newCount)  // ✅ 1 gösterir
    // Ama dikkat: updater pattern'da bu çalışmaz
  }
}`},{type:`code`,title:`Hata 2: Gereksiz State Tanımlama`,language:`tsx`,content:`// ❌ YANLIŞ: Türetilebilir (derived) state
function UserList({ users }: { users: User[] }) {
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [count, setCount] = useState(users.length)
  // filteredUsers ve count zaten users'dan türetilebilir!
  // Ekstra state = ekstra karmaşıklık + senkronizasyon sorunu

  // ✅ DOĞRU: Hesaplayarak türet
  const filteredUsers = users.filter(u => u.isActive)
  const count = users.length
  // State yok → senkronizasyon sorunu yok!
  // users değişince otomatik hesaplanır
}

// KURAL: Eğer bir değer başka bir state veya prop'tan
// HESAPLANABİLİYORSA → state yapma, doğrudan hesapla!
// Bu 'Single Source of Truth' prensibidir.

// State yapılması GEREKEN şeyler:
// ✅ Kullanıcı input'u (form alanları)
// ✅ Toggle durumları (açık/kapalı)
// ✅ Seçili eleman (selectedId)
// ✅ Sayfa numarası, sıralama yönü

// State YAPILMAMASI gereken şeyler:
// ❌ Props'tan türetilebilen değerler
// ❌ Başka state'ten hesaplanabilen değerler
// ❌ Sabit değerler (const ile tanımla)`},{type:`code`,title:`Hata 3: Render İçinde State Güncelleme (Sonsuz Döngü!)`,language:`tsx`,content:`// ❌ SONSUZ DÖNGÜ!
function InfiniteLoop() {
  const [count, setCount] = useState(0)

  setCount(count + 1)  // Component body'de setState
  // 1. React render eder
  // 2. setCount çağrılır → yeniden render tetiklenir
  // 3. Tekrar setCount çağrılır → yeniden render
  // 4. SONSUZ DÖNGÜ! Tarayıcı çöker.

  // ✅ State güncelleme SADECE şuralarda yapılmalı:
  // 1. Event handler'lar (onClick, onChange, onSubmit...)
  // 2. useEffect içinde (yan etkiler)
  // 3. useCallback/useMemo gibi hook callback'leri

  return <p>{count}</p>
}`},{type:`warning`,content:`Her useState çağrısı, component'in bir render daha yapmasına sebep olur. Gereksiz state tanımlamayın! 5-6'dan fazla useState varsa, muhtemelen useReducer kullanmalısınız veya state'leri bir obje içinde birleştirmelisiniz.`}]}]},{id:`use-effect`,title:`6. useEffect — Yan Etkiler ve Yaşam Döngüsü`,description:`Component yaşam döngüsünü yönetin: mount, update, unmount. API çağrıları, event listener'lar, timer'lar ve subscription'lar. useEffect, React'in dış dünyayla iletişim kurma yoludur.`,level:`beginner`,lessons:[{id:`useEffect-what-is`,title:`useEffect Nedir? Side Effect Ne Demek?`,blocks:[{type:`text`,content:`React component'leri PURE (saf) fonksiyonlar olmalıdır: aynı props ile aynı JSX döndürmelidir. Ama gerçek uygulamalarda 'yan etkiler' (side effects) kaçınılmazdır: API'den veri çekmek, localStorage'a yazmak, DOM'u direkt manipüle etmek, timer kurmak, WebSocket bağlantısı açmak. İşte useEffect, bu yan etkileri güvenli şekilde gerçekleştirmenizi sağlar.`},{type:`text`,content:`useEffect, component render edildikten SONRA çalışır. Yani React önce ekranı günceller, sonra effect'inizi çalıştırır. Bu sayede kullanıcı UI'ın donmasını görmez — ekran hemen güncellenir, veri çekme gibi ağır işler arka planda olur.`},{type:`code`,title:`useEffect Anatomy — Yapı Analizi`,language:`tsx`,content:`import { useEffect } from 'react'

function MyComponent() {
  useEffect(() => {
    // ────────────────────────────────────
    // SETUP (Kurulum) fonksiyonu
    // Component render'dan SONRA çalışır
    // Yan etkilerinizi buraya yazın
    // ────────────────────────────────────
    console.log('Effect çalıştı!')

    // API çağrısı, event listener, timer vb.
    const timer = setInterval(() => {
      console.log('Tick!')
    }, 1000)

    return () => {
      // ──────────────────────────────────
      // CLEANUP (Temizlik) fonksiyonu
      // Component unmount olduğunda VEYA
      // effect yeniden çalışmadan ÖNCE çağrılır
      // ──────────────────────────────────
      clearInterval(timer)  // Timer'ı temizle
      console.log('Cleanup çalıştı!')
    }
  }, [/* dependency array */])
  //    ↑ Bu dizi, effect'in NE ZAMAN çalışacağını belirler

  return <div>Component</div>
}`},{type:`tip`,content:`useEffect'in üç parçası: 1) Setup fonksiyonu — yan etkiyi gerçekleştirir. 2) Cleanup fonksiyonu (opsiyonel) — yan etkiyi temizler. 3) Dependency array — effect'in ne zaman çalışacağını kontrol eder. Bu üçünü iyi anlamak, React'te hata yapmamak için kritiktir.`}]},{id:`useEffect-dependency`,title:`Dependency Array — Effect Ne Zaman Çalışır?`,blocks:[{type:`text`,content:`Dependency array, useEffect'in en önemli parçasıdır. Üç farklı kullanım şekli vardır ve her biri farklı davranır. Yanlış kullanım sonsuz döngüye veya eksik güncellemelere yol açar.`},{type:`code`,title:`3 Farklı Dependency Pattern`,language:`tsx`,content:`// ═══════════════════════════════════════════
// 1. DEPENDENCY ARRAY YOK — Her render'da çalışır
// ═══════════════════════════════════════════
useEffect(() => {
  console.log('Her render sonrası çalışır')
  // Component her güncellendiğinde tetiklenir
  // ⚠️ Dikkat: API çağrısı burada yaparsanız
  //    her state değişiminde istek gider!
})
// Ne zaman kullan: Hemen hemen HİÇBİR ZAMAN.
// Debug amaçlı kullanılabilir.

// ═══════════════════════════════════════════
// 2. BOŞ DİZİ [] — Sadece mount'ta çalışır (1 kez)
// ═══════════════════════════════════════════
useEffect(() => {
  console.log('Component DOM\\'a eklendi (mounted)')
  // Sadece component ilk kez görüntülendiğinde çalışır

  return () => {
    console.log('Component DOM\\'dan kaldırıldı (unmounted)')
    // Sadece component tamamen kaldırıldığında çalışır
  }
}, [])  // ← Boş dizi = "hiçbir şeye bağlı değilim"
// Ne zaman kullan:
// ✅ İlk API çağrısı (sayfa yüklendiğinde veri çek)
// ✅ Event listener ekle/kaldır
// ✅ WebSocket bağlantısı aç/kapat
// ✅ 3. parti kütüphane başlat

// ═══════════════════════════════════════════
// 3. DEĞİŞKENLİ DİZİ [a, b] — Bağımlılıklar değişince çalışır
// ═══════════════════════════════════════════
useEffect(() => {
  console.log(\`userId değişti: \${userId}\`)
  fetchUserData(userId)  // userId değişince yeni veri çek

  return () => {
    // Önceki effect'in temizliği
    // (eski userId için yapılan istek iptal edilebilir)
  }
}, [userId])  // ← userId değişince effect yeniden çalışır
// Ne zaman kullan:
// ✅ Belirli bir state/prop değiştiğinde API çağrısı
// ✅ Arama input'u değiştiğinde filtreleme
// ✅ Seçili öğe değiştiğinde detay getirme`},{type:`code`,title:`Gerçek Dünya: Kullanıcı Detayı Çekme`,language:`tsx`,content:`interface User {
  id: number
  name: string
  email: string
}

function UserDetail({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Her userId değişiminde bu effect çalışır
    let cancelled = false  // Cleanup flag (race condition önleme)

    const fetchUser = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(\`/api/users/\${userId}\`)
        if (!response.ok) throw new Error('Kullanıcı bulunamadı')
        const data = await response.json()

        // Component hala mount'taysa güncelle
        if (!cancelled) {
          setUser(data)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Hata oluştu')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchUser()

    return () => {
      cancelled = true  // Eski istek sonuçlarını yoksay
      // userId hızlı değiştiğinde eski isteklerin sonuçları
      // yeni userId'nin verisini ezmesini engeller
    }
  }, [userId])  // userId değişince yeniden çalışır

  if (loading) return <p>Yükleniyor...</p>
  if (error) return <p>Hata: {error}</p>
  if (!user) return <p>Kullanıcı bulunamadı</p>

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}`},{type:`preview`,title:`UserDetail component'i — 3 farklı durum`,content:`<div style='font-family: system-ui; display: flex; gap: 12px;'><div style='flex: 1; padding: 14px; border: 1px solid #3f3f46; border-radius: 10px; background: #18181b; text-align: center;'><div style='font-size: 10px; color: #71717a; margin-bottom: 6px;'>loading = true</div><div style='width: 20px; height: 20px; border: 2px solid #a78bfa; border-top-color: transparent; border-radius: 50%; margin: 8px auto;'></div><p style='font-size: 12px; color: #a1a1aa; margin: 4px 0 0;'>Yükleniyor...</p></div><div style='flex: 1; padding: 14px; border: 1px solid #ef444444; border-radius: 10px; background: #18181b; text-align: center;'><div style='font-size: 10px; color: #71717a; margin-bottom: 6px;'>error = true</div><p style='font-size: 14px; margin: 4px 0 0;'>❌</p><p style='font-size: 12px; color: #f87171; margin: 4px 0 0;'>Hata: Kullanıcı bulunamadı</p></div><div style='flex: 1; padding: 14px; border: 1px solid #4ade8044; border-radius: 10px; background: #18181b;'><div style='font-size: 10px; color: #71717a; margin-bottom: 6px;'>success</div><h2 style='margin: 0; font-size: 14px; color: #e4e4e7;'>Ali</h2><p style='font-size: 12px; color: #a1a1aa; margin: 2px 0 0;'>ali@mail.com</p></div></div>`},{type:`warning`,content:`Race Condition: Kullanıcı hızlıca 3 farklı userId'ye tıklarsa, 3 API isteği paralel gider. Hangisi önce döner bilinmez! cancelled flag olmadan, userId=1'in yanıtı userId=3'ün yanıtını ezebilir. Sektörde buna 'stale closure' veya 'race condition' denir. TanStack Query bu sorunu otomatik çözer.`}]},{id:`useEffect-cleanup`,title:`Cleanup Fonksiyonu — Bellek Sızıntısını Önle`,blocks:[{type:`text`,content:`Cleanup fonksiyonu, useEffect'ten return edilen fonksiyondur. İki durumda çağrılır: 1) Component unmount olduğunda (DOM'dan kaldırıldığında). 2) Effect yeniden çalışmadan hemen önce (dependency değiştiğinde eski effect temizlenir). Cleanup yapmayı unutursanız BELLEK SIZINTISI (memory leak) oluşur!`},{type:`code`,title:`Cleanup Örnekleri — Timer, Event Listener, Subscription`,language:`tsx`,content:`// 1. Timer (setInterval / setTimeout)
function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())  // Her saniye güncelle
    }, 1000)

    return () => clearInterval(interval)
    // ↑ Component kaldırıldığında timer'ı durdur
    // Yoksa arka planda çalışmaya devam eder!
  }, [])

  return <p>{time.toLocaleTimeString('tr-TR')}</p>
}

// 2. Event Listener (window, document)
function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
    // ↑ Listener'ı kaldır — yoksa her mount'ta yeni listener eklenir
    // 10 kez mount/unmount = 10 listener = bellek sızıntısı!
  }, [])

  return <p>{size.width} x {size.height}</p>
}

// 3. AbortController ile API isteği iptal
function SearchResults({ query }: { query: string }) {
  const [results, setResults] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    fetch(\`/api/search?q=\${query}\`, {
      signal: controller.signal,  // İptal sinyali bağla
    })
      .then(res => res.json())
      .then(data => setResults(data))
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Hata:', err)
        }
      })

    return () => controller.abort()  // Önceki isteği iptal et
    // query hızlı değişince eski istekler gerçekten iptal olur
    // Network sekmesinde "cancelled" olarak görürsünüz
  }, [query])

  return <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>
}`},{type:`tip`,content:`Cleanup gereken durumlar: setInterval/setTimeout, addEventListener, WebSocket/EventSource, IntersectionObserver/MutationObserver/ResizeObserver, AbortController, 3. parti kütüphane instance'ları. Kural: Setup'ta bir şey BAŞLATIYORSAN, cleanup'ta DURDUR.`},{type:`demo`,content:`useEffect yaşam döngüsünü canlı izle — setup, cleanup ve dependency değişimlerini gör:`,demoId:`timer`}]},{id:`useEffect-pitfalls`,title:`useEffect Tuzakları ve Anti-Pattern'ler`,blocks:[{type:`text`,content:`useEffect, React'in en çok yanlış kullanılan hook'udur. Birçok durumda useEffect'e ihtiyacınız YOKTUR. React ekibi bile 'You Might Not Need an Effect' başlıklı bir doküman yazmıştır.`},{type:`code`,title:`Anti-Pattern'ler — useEffect Kullanma!`,language:`tsx`,content:`// ❌ Anti-Pattern 1: Props'tan state türetme
function UserGreeting({ firstName, lastName }: Props) {
  const [fullName, setFullName] = useState('')

  useEffect(() => {
    setFullName(\`\${firstName} \${lastName}\`)  // Gereksiz!
  }, [firstName, lastName])
  // Bu useEffect + useState = fazladan 1 render!
}

// ✅ Doğrusu: Direkt hesapla
function UserGreeting({ firstName, lastName }: Props) {
  const fullName = \`\${firstName} \${lastName}\`  // Her render'da hesaplanır
  // useEffect YOK, ekstra render YOK, daha hızlı!
}

// ❌ Anti-Pattern 2: Event'e tepki verme
function Form() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (submitted) {
      sendAnalytics('form_submitted')  // Gereksiz useEffect!
    }
  }, [submitted])
}

// ✅ Doğrusu: Event handler içinde yap
function Form() {
  const handleSubmit = () => {
    submitForm(data)
    sendAnalytics('form_submitted')  // Direkt burada!
  }
}

// ❌ Anti-Pattern 3: Sonsuz döngü
function InfiniteLoop() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([...data, 'new'])  // data değişir → effect tekrar çalışır
  }, [data])  // data dependency → SONSUZ DÖNGÜ!
}

// ✅ Doğrusu: Updater pattern kullan
useEffect(() => {
  setData(prev => [...prev, 'new'])  // prev kullan, data'yı dependency'den çıkar
}, [])  // Sadece mount'ta çalışır`},{type:`code`,title:`useEffect Kullanılması GEREKEN Durumlar`,language:`tsx`,content:`// ✅ 1. Dış sistemlerle senkronizasyon (API, WebSocket, timer)
useEffect(() => {
  const ws = new WebSocket('wss://api.example.com')
  ws.onmessage = (event) => setMessages(prev => [...prev, event.data])
  return () => ws.close()
}, [])

// ✅ 2. DOM manipülasyonu (React dışı)
useEffect(() => {
  document.title = \`(\${unreadCount}) Mesajlar\`
}, [unreadCount])

// ✅ 3. 3. parti kütüphane başlatma
useEffect(() => {
  const chart = new Chart(canvasRef.current, config)
  return () => chart.destroy()
}, [])

// ✅ 4. Scroll pozisyonu izleme
useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY)
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])`},{type:`warning`,content:`StrictMode'da (geliştirme ortamı) React, her component'i 2 KEZ mount eder: mount → unmount → mount. Bu, cleanup fonksiyonunuzu doğru yazdığınızı test etmek içindir. Production'da bu davranış YOKTUR. Eğer effect'iniz 2 kez çalışınca bozuluyorsa, cleanup fonksiyonunuz eksik veya hatalıdır.`}]}]},{id:`use-ref`,title:`7. useRef — Referanslar ve Mutable Değerler`,description:`DOM elementlerine erişim ve render'lar arasında değer saklama (re-render tetiklemeden). useRef, React'in 'kaçış kapısı'dır — DOM'a doğrudan erişmeniz gerektiğinde kullanırsınız.`,level:`beginner`,lessons:[{id:`useRef-dom`,title:`DOM Referansları — Elemana Direkt Erişim`,blocks:[{type:`text`,content:`React normalde DOM'u sizin için yönetir — siz sadece JSX yazarsınız, React DOM'u günceller. Ama bazen DOM elementine doğrudan erişmeniz gerekir: input'a focus vermek, scroll pozisyonunu okumak, canvas üzerine çizmek gibi. useRef ile bir DOM elementine 'referans' tutabilirsiniz.`},{type:`code`,title:`useRef ile DOM Erişimi — Pratik Örnekler`,language:`tsx`,content:`import { useRef, useEffect } from 'react'

// 1. Input'a Otomatik Focus
function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  // inputRef.current → DOM elementi (veya null)

  useEffect(() => {
    // Component mount olduğunda input'a focus ver
    inputRef.current?.focus()
  }, [])

  return (
    <input
      ref={inputRef}  // Bu input'un DOM referansını inputRef'e bağla
      placeholder="Ara..."
    />
  )
}

// 2. Scroll Kontrolü
function ChatMessages({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement>(null)

  // Yeni mesaj geldiğinde en alta scroll et
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])  // messages değişince çalışır

  return (
    <div className="h-96 overflow-y-auto">
      {messages.map(msg => (
        <div key={msg.id}>{msg.text}</div>
      ))}
      <div ref={bottomRef} />  {/* Görünmez anchor element */}
    </div>
  )
}

// 3. Video/Audio Kontrolü
function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => videoRef.current?.play()
  const handlePause = () => videoRef.current?.pause()
  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time
    }
  }

  return (
    <div>
      <video ref={videoRef} src={src} />
      <button onClick={handlePlay}>▶ Oynat</button>
      <button onClick={handlePause}>⏸ Durdur</button>
      <button onClick={() => handleSeek(0)}>⏮ Başa Sar</button>
    </div>
  )
}`},{type:`preview`,title:`SearchBar ve VideoPlayer — DOM referansları ile kontrol`,content:`<div style='font-family: system-ui; display: flex; flex-direction: column; gap: 12px;'><div style='padding: 14px; border: 1px solid #3f3f46; border-radius: 10px; background: #18181b;'><div style='font-size: 11px; color: #a78bfa; margin-bottom: 6px;'>SearchBar — autoFocus</div><input style='width: 100%; padding: 8px 12px; border-radius: 8px; background: #09090b; border: 1px solid #6366f1; color: #e4e4e7; font-size: 13px; outline: none;' placeholder='Ara... (otomatik focus!)' /></div><div style='padding: 14px; border: 1px solid #3f3f46; border-radius: 10px; background: #18181b;'><div style='font-size: 11px; color: #a78bfa; margin-bottom: 6px;'>VideoPlayer — ref ile kontrol</div><div style='width: 100%; height: 60px; background: #09090b; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #71717a; font-size: 12px; margin-bottom: 8px;'>🎬 Video alanı</div><div style='display: flex; gap: 6px;'><button style='flex:1; padding: 6px; border-radius: 6px; background: #22c55e; color: white; border: none; font-size: 11px;'>▶ Oynat</button><button style='flex:1; padding: 6px; border-radius: 6px; background: #eab308; color: white; border: none; font-size: 11px;'>⏸ Durdur</button><button style='flex:1; padding: 6px; border-radius: 6px; background: #6366f1; color: white; border: none; font-size: 11px;'>⏮ Başa Sar</button></div></div></div>`},{type:`tip`,content:`useRef<HTMLInputElement>(null) — TypeScript'e 'bu ref bir input elementine bağlanacak' diyorsunuz. Bu sayede inputRef.current?.focus() gibi metotlarda TypeScript otomatik tamamlama ve tip kontrolü sağlar. null başlangıç değeri, component mount olmadan önce henüz DOM elementi yok demektir.`}]},{id:`useRef-mutable`,title:`Mutable Values — Re-render Olmadan Değer Saklama`,blocks:[{type:`text`,content:`useRef'in ikinci kullanım alanı: render'lar arasında değer saklamak AMA re-render tetiklememek. useState'den farkı: useState değişince component yeniden render olur, useRef değişince OLMAZ. Timer ID'leri, önceki değerler, flag'ler gibi 'sessiz' verileri saklamak için idealdir.`},{type:`code`,title:`useState vs useRef Karşılaştırma`,language:`tsx`,content:`import { useState, useRef, useEffect } from 'react'

function RenderCounter() {
  const [count, setCount] = useState(0)
  const renderCount = useRef(0)

  // Her render'da artır (ama re-render tetiklemez!)
  renderCount.current += 1

  return (
    <div>
      <p>Count: {count}</p>
      <p>Bu component {renderCount.current} kez render edildi</p>
      <button onClick={() => setCount(c => c + 1)}>Artır</button>
    </div>
  )
  // setCount → re-render → renderCount artar → ama kendi başına render tetiklemez
}

// Önceki Değeri Saklama (usePrevious pattern)
function PriceTracker({ price }: { price: number }) {
  const prevPrice = useRef(price)

  useEffect(() => {
    prevPrice.current = price  // Her render sonrası güncelle
  }, [price])

  const diff = price - prevPrice.current

  return (
    <div>
      <p>Fiyat: {price} TL</p>
      <p>
        {diff > 0 && '📈 '}
        {diff < 0 && '📉 '}
        {diff === 0 && '➡️ '}
        Değişim: {diff > 0 ? '+' : ''}{diff} TL
      </p>
    </div>
  )
}

// Timer ID Saklama
function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const start = () => {
    if (intervalRef.current) return  // Zaten çalışıyorsa tekrar başlatma
    intervalRef.current = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)
  }

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const reset = () => {
    stop()
    setSeconds(0)
  }

  // Cleanup: component unmount olursa timer'ı temizle
  useEffect(() => {
    return () => stop()
  }, [])

  return (
    <div>
      <p>{seconds} saniye</p>
      <button onClick={start}>Başlat</button>
      <button onClick={stop}>Durdur</button>
      <button onClick={reset}>Sıfırla</button>
    </div>
  )
}`},{type:`warning`,content:`KURAL: useState → Değiştiğinde ekranı güncellemek istiyorsanız. useRef → Değiştiğinde ekranı güncellemeye GEREK YOKSA (timer ID, DOM ref, önceki değer, flag). Yanlış seçim: useRef ile UI verisi saklarsanız ekran güncellenmez. useState ile timer ID saklarsanız her setState'te gereksiz render olur.`},{type:`demo`,content:`useRef'i canlı dene — DOM erişimi (focus, select) ve render sayacını gör:`,demoId:`ref`}]}]}],cr=[{id:`memo-callback`,title:`1. useMemo & useCallback - Performans`,description:`Gereksiz hesaplamaları ve re-render'ları önleyin. Ne zaman kullanılmalı, ne zaman kullanılmamalı.`,level:`intermediate`,lessons:[{id:`useMemo-basics`,title:`useMemo - Değer Memoize Etme`,blocks:[{type:`text`,content:`useMemo, pahalı hesaplamaların sonucunu cache'ler. Dependency'ler değişmedikçe aynı sonucu döndürür. Her render'da çalışan ağır işlemleri optimize eder.`},{type:`code`,title:`useMemo Kullanımı`,language:`tsx`,content:`import {useMemo} from 'react'

function UserStats({users}: {users: User[]}) {
  // ❌ Her render'da filtreleme + sıralama yapılır
  const activeUsers = users
    .filter(u => u.status === 'active')
    .sort((a, b) => a.name.localeCompare(b.name))

  // ✅ Sadece users değiştiğinde hesaplanır
  const activeUsers = useMemo(
    () => users
      .filter(u => u.status === 'active')
      .sort((a, b) => a.name.localeCompare(b.name)),
    [users],
  )

  // ✅ Birden fazla dependency
  const filteredUsers = useMemo(
    () => users.filter(u =>
      u.name.includes(search) && u.role === selectedRole
    ),
    [users, search, selectedRole],
  )

  return <UserTable data={activeUsers} />
}`},{type:`warning`,content:`useMemo'yu her yerde kullanmayın! Basit hesaplamalar için useMemo overhead'i, hesaplamanın kendisinden daha pahalı olabilir. Sadece gerçekten ağır işlemlerde veya referans eşitliği gereken yerlerde kullanın.`}]},{id:`useCallback-basics`,title:`useCallback - Fonksiyon Memoize Etme`,blocks:[{type:`text`,content:`useCallback, bir fonksiyonun referansını sabitler. Dependency'ler değişmedikçe aynı fonksiyon referansı döner. Genellikle React.memo ile sarılmış child component'lere prop olarak geçilen fonksiyonlarda kullanılır.`},{type:`code`,title:`useCallback Kullanımı`,language:`tsx`,content:`import {useCallback, memo} from 'react'

// Child component - memo ile sarılı
const ExpensiveList = memo(({ items, onItemClick }: Props) => {
  console.log('ExpensiveList render oldu')
  return items.map(item => (
    <div key={item.id} onClick={() => onItemClick(item.id)}>
      {item.name}
    </div>
  ))
})

// Parent component
function Parent() {
  const [count, setCount] = useState(0)
  const [items] = useState(generateItems())

  // ❌ Her render'da yeni fonksiyon → ExpensiveList tekrar render olur
  const handleClick = (id: number) => {
    console.log('Clicked:', id)
  }

  // ✅ Fonksiyon referansı sabit → ExpensiveList render olmaz
  const handleClick = useCallback((id: number) => {
    console.log('Clicked:', id)
  }, []) // Dependency boş = fonksiyon hiç değişmez

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      {/* count değişince Parent render olur ama
          ExpensiveList'e geçen props aynı kalır */}
      <ExpensiveList items={items} onItemClick={handleClick} />
    </div>
  )
}`},{type:`tip`,content:`useCallback = useMemo(() => fn, deps) kısaltmasıdır. useCallback(fn, deps) ile useMemo(() => fn, deps) aynı şeydir. useCallback fonksiyon için, useMemo değer için kullanılır.`}]},{id:`react-memo`,title:`React.memo - Component Memoize`,blocks:[{type:`text`,content:`React.memo, component'i sararak props değişmedikçe re-render olmasını engeller. useCallback ve useMemo ile birlikte kullanılır.`},{type:`code`,title:`React.memo Kullanımı`,language:`tsx`,content:`import {memo} from 'react'

// Basit kullanım
const UserCard = memo(({user}: {user: User}) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )
})

// Custom comparison function ile
const UserCard = memo(
  ({user}: {user: User}) => {
    return <div>{user.name}</div>
  },
  (prevProps, nextProps) => {
    // true dönerse RE-RENDER OLMAZ
    // false dönerse RE-RENDER OLUR
    return prevProps.user.id === nextProps.user.id
      && prevProps.user.name === nextProps.user.name
  },
)

// Ne zaman kullanmalı?
// ✅ Pahalı render işlemi olan component'ler
// ✅ Sık render olan parent'ın child'ları
// ✅ Aynı props ile sık çağrılan component'ler
// ❌ Props sık değişen component'ler (faydasız)
// ❌ Basit/ucuz component'ler (overhead > fayda)`}]}]},{id:`lazy-loading`,title:`2. Lazy Loading & Code Splitting`,description:`Uygulamanızın başlangıç yükleme süresini dramatik şekilde azaltın.`,level:`intermediate`,lessons:[{id:`react-lazy`,title:`React.lazy ve Suspense`,blocks:[{type:`text`,content:`React.lazy, component'leri dinamik import ile yükler. Bundle'ı küçük parçalara böler (code splitting). Kullanıcı ilgili sayfaya gittiğinde o component'in JS'i yüklenir.`},{type:`code`,title:`React.lazy Kullanımı`,language:`tsx`,content:`import {lazy, Suspense} from 'react'

// ❌ Normal import - ana bundle'a dahil
import HeavyChart from './HeavyChart'

// ✅ Lazy import - ayrı chunk olarak yüklenir
const HeavyChart = lazy(() => import('./HeavyChart'))

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Suspense: lazy component yüklenene kadar fallback gösterir */}
      <Suspense fallback={<div>Grafik yükleniyor...</div>}>
        <HeavyChart />
      </Suspense>
    </div>
  )
}`},{type:`code`,title:`TanStack Router ile Lazy Loading (Bu Projede)`,language:`tsx`,content:`import {createRoute, lazyRouteComponent} from '@tanstack/react-router'

// Her sayfa otomatik olarak lazy load edilir
export const createUsersRoute = (parent: AnyRoute) =>
  createRoute({
    getParentRoute: () => parent,
    path: '/users',
    // lazyRouteComponent = React.lazy wrapper
    component: lazyRouteComponent(() => import('./UsersPage')),
  })

// Avantajlar:
// 1. Her sayfa ayrı bir JS chunk'ı olur
// 2. Kullanıcı o sayfaya gidene kadar yüklenmez
// 3. defaultPreload: 'intent' ile hover'da önceden yüklenir
// 4. Bundle boyutu dramatik şekilde küçülür`},{type:`tip`,content:`Bu projede tüm route component'leri lazyRouteComponent ile lazy load edilir. Ayrıca defaultPreload: "intent" ayarı sayesinde kullanıcı bir linke hover ettiğinde o sayfa arka planda yüklenmeye başlar.`}]}]},{id:`custom-hooks`,title:`3. Custom Hooks`,description:`Tekrar eden mantığı yeniden kullanılabilir hook'lara çıkarın. Composition over inheritance.`,level:`intermediate`,lessons:[{id:`custom-hooks-basics`,title:`Custom Hook Yazma`,blocks:[{type:`text`,content:`Custom hook, "use" ile başlayan ve içinde diğer hook'ları kullanan bir fonksiyondur. Tekrar eden state + effect mantığını tek bir yere toplar.`},{type:`code`,title:`Custom Hook Örnekleri`,language:`tsx`,content:`// 1. useToggle - Boolean state yönetimi
function useToggle(initial = false) {
  const [value, setValue] = useState(initial)

  const toggle = useCallback(() => setValue(v => !v), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])

  return {value, toggle, setTrue, setFalse}
}

// Kullanım
function Modal() {
  const {value: isOpen, setTrue: open, setFalse: close} = useToggle()
  return (
    <>
      <button onClick={open}>Aç</button>
      {isOpen && <Dialog onClose={close} />}
    </>
  )
}

// 2. useDebounce - Debounce edilmiş değer
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

// Kullanım
function Search() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)

  // debouncedQuery sadece 300ms duraksama sonrası güncellenir
  useEffect(() => {
    if (debouncedQuery) searchAPI(debouncedQuery)
  }, [debouncedQuery])
}`},{type:`code`,title:`Bu Projedeki Custom Hook Pattern'i`,language:`tsx`,content:`// features/users/hooks/use-users.ts
// Mutation + invalidation + toast = tek hook

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı oluşturuldu')
    },
  })
}

// Component'te kullanım - çok temiz!
function UserForm() {
  const {mutate, isPending} = useCreateUser()

  const handleSubmit = (data: CreateUserDto) => {
    mutate(data, {
      onSuccess: () => closeDialog(),
    })
  }
}`},{type:`tip`,content:`Custom hook'lar test edilebilirlik, code reuse ve separation of concerns sağlar. Her feature modülünün hooks/ klasöründe domain'e özel hook'lar bulunmalıdır.`}]}]},{id:`context-api`,title:`4. Context API - Global State`,description:`Prop drilling olmadan component ağacı boyunca veri paylaşımı. Ne zaman Context, ne zaman Zustand?`,level:`intermediate`,lessons:[{id:`context-basics`,title:`Context Oluşturma ve Kullanma`,blocks:[{type:`text`,content:`Context API, parent-child zincirinde her seviyeye prop geçmek yerine (prop drilling), veriyi doğrudan ihtiyaç duyan component'e ulaştırır. Theme, dil, kullanıcı bilgisi gibi "global" veriler için idealdir.`},{type:`code`,title:`Context Oluşturma`,language:`tsx`,content:`import {createContext, useContext, useState} from 'react'

// 1. Context oluştur + tip tanımı
interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

// 2. Custom hook ile güvenli erişim
function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

// 3. Provider component
function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

// 4. Kullanım - herhangi bir derinlikteki component
function Header() {
  const {theme, toggleTheme} = useTheme()

  return (
    <header className={theme === 'dark' ? 'bg-black' : 'bg-white'}>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  )
}

// 5. App'te sarma
function App() {
  return (
    <ThemeProvider>
      <Header />    {/* prop geçmeden theme'e erişir */}
      <MainContent />
    </ThemeProvider>
  )
}`},{type:`warning`,content:`Context değiştiğinde, o Context'i kullanan TÜM component'ler re-render olur! Bu yüzden sık değişen veriler (form input, mouse position) için Context kullanmayın. Bunlar için Zustand veya useState tercih edin.`}]},{id:`context-patterns`,title:`Context Best Practices`,blocks:[{type:`code`,title:`Context'i Bölme (Split Context)`,language:`tsx`,content:`// ❌ KÖTÜ - Her şey tek Context'te
// theme değişince user bilgisi kullanan component'ler de re-render olur!
const AppContext = createContext({
  theme: 'dark',
  user: null,
  language: 'tr',
  notifications: [],
})

// ✅ İYİ - Ayrı Context'ler
const ThemeContext = createContext(...)    // Tema değişince sadece tema kullananlar
const UserContext = createContext(...)     // User değişince sadece user kullananlar
const I18nContext = createContext(...)     // Dil değişince sadece dil kullananlar

// Her biri bağımsız re-render tetikler`},{type:`code`,title:`Context vs Zustand vs Props Karar Ağacı`,language:`text`,content:`Veri sadece 1-2 seviye derine mi gidiyor?
  → ✅ Props kullan (en basit)

Veri nadiren değişiyor mu? (theme, user, locale)
  → ✅ Context API

Veri sık değişiyor mu? (form state, counters, UI state)
  → ✅ Zustand (veya useState)

Server'dan gelen veri mi? (API response)
  → ✅ TanStack Query (kesinlikle Context değil!)

Birden fazla component aynı state'i okuyor/yazıyor mu?
  → ✅ Zustand

Bu projede:
  - Server state → TanStack Query
  - Auth/Session → Zustand (useSessionStore)
  - UI state    → useState (component-local)
  - Theme/i18n  → Context (nadiren değişir)`},{type:`tip`,content:`Bu projede Context API doğrudan kullanılmıyor — server state için TanStack Query, client state için Zustand tercih ediliyor. Bu modern yaklaşımdır.`}]}]},{id:`use-reducer`,title:`5. useReducer - Karmaşık State`,description:`Birden fazla birbiriyle ilişkili state değişkenini tek bir yerde yönetin. useState'in güçlü versiyonu.`,level:`intermediate`,lessons:[{id:`useReducer-basics`,title:`useReducer Temelleri`,blocks:[{type:`text`,content:`useReducer, karmaşık state mantığını bir reducer fonksiyonuna taşır. State geçişleri açık ve öngörülebilir olur. Birden fazla birbiriyle ilişkili state değişkeni varsa useState yerine useReducer kullanın.`},{type:`code`,title:`useReducer vs useState Karşılaştırması`,language:`tsx`,content:`// ❌ useState ile karmaşık form state
function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    setError(null)
    try {
      await submitForm({name, email})
      setSubmitted(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  // 5 ayrı useState, birbirine bağlı geçişler...
}

// ✅ useReducer ile aynı mantık
interface FormState {
  name: string
  email: string
  loading: boolean
  error: string | null
  submitted: boolean
}

type FormAction =
  | {type: 'SET_FIELD'; field: string; value: string}
  | {type: 'SUBMIT_START'}
  | {type: 'SUBMIT_SUCCESS'}
  | {type: 'SUBMIT_ERROR'; error: string}
  | {type: 'RESET'}

const initialState: FormState = {
  name: '', email: '', loading: false, error: null, submitted: false,
}

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {...state, [action.field]: action.value}
    case 'SUBMIT_START':
      return {...state, loading: true, error: null}
    case 'SUBMIT_SUCCESS':
      return {...state, loading: false, submitted: true}
    case 'SUBMIT_ERROR':
      return {...state, loading: false, error: action.error}
    case 'RESET':
      return initialState
    default:
      return state
  }
}

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const handleSubmit = async () => {
    dispatch({type: 'SUBMIT_START'})
    try {
      await submitForm({name: state.name, email: state.email})
      dispatch({type: 'SUBMIT_SUCCESS'})
    } catch (e) {
      dispatch({type: 'SUBMIT_ERROR', error: e.message})
    }
  }

  // State geçişleri açık, öngörülebilir, test edilebilir
}`},{type:`tip`,content:`Kural: 2-3 bağımsız state → useState. 3+ birbiriyle ilişkili state → useReducer. Ancak bu projede form state için React Hook Form kullanıyoruz, bu yüzden useReducer'a nadiren ihtiyaç duyulur.`}]}]},{id:`error-boundaries`,title:`6. Error Boundaries`,description:`Component ağacında oluşan JavaScript hatalarını yakalayın ve graceful fallback gösterin.`,level:`intermediate`,lessons:[{id:`error-boundary-usage`,title:`Error Boundary Kullanımı`,blocks:[{type:`text`,content:`Error Boundary, child component'lerin render sırasında fırlattığı hataları yakalar ve tüm uygulamanın çökmesini engeller. Bunun yerine bir fallback UI gösterir. React 19'da hâlâ class component olarak yazılır (hook alternatifi yok).`},{type:`code`,title:`Error Boundary Implementasyonu`,language:`tsx`,content:`import {Component, type ErrorInfo, type ReactNode} from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {hasError: false, error: null}
  }

  static getDerivedStateFromError(error: Error): State {
    // Hata yakalandığında state'i güncelle
    return {hasError: true, error}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Hata raporlama servisi (Sentry vb.)
    console.error('Error caught by boundary:', error, errorInfo)
    // Sentry.captureException(error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 text-center">
          <h2>Bir hata oluştu</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({hasError: false, error: null})}>
            Tekrar Dene
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

// Kullanım
function App() {
  return (
    <ErrorBoundary fallback={<div>Widget yüklenemedi</div>}>
      <RiskyWidget />
    </ErrorBoundary>
  )
}`},{type:`code`,title:`Bu Projede: TanStack Router Error Component`,language:`tsx`,content:`// Bu projede Error Boundary yerine TanStack Router'ın
// errorComponent özelliği kullanılır:

const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
  errorComponent: GlobalError,   // ← Route seviyesinde hata yakalama
  notFoundComponent: GlobalNotFound,
})

// Her route kendi errorComponent'ini tanımlayabilir:
createRoute({
  path: '/users',
  component: UsersPage,
  errorComponent: ({error}) => (
    <div>
      <h2>Kullanıcılar yüklenemedi</h2>
      <p>{error.message}</p>
    </div>
  ),
})

// TanStack Query hataları da benzer şekilde:
const {data, isError, error} = useQuery({...})
if (isError) return <ErrorMessage error={error} />`},{type:`warning`,content:`Error Boundary şunları YAKALAMAZ: Event handler hataları (try/catch kullanın), async hatalar (useEffect içi), server-side rendering hataları. Sadece render sırasındaki hataları yakalar.`}]}]},{id:`portals`,title:`7. Portals & ForwardRef`,description:`Component'leri DOM ağacının farklı noktalarına render edin. Ref'leri child component'lere iletin.`,level:`intermediate`,lessons:[{id:`portals-basics`,title:`React Portals`,blocks:[{type:`text`,content:`Portal, bir component'in çıktısını DOM ağacında farklı bir noktaya render etmeyi sağlar. Modal, tooltip, dropdown gibi overlay element'ler için kullanılır. React event bubbling'i Portal'da da çalışır.`},{type:`code`,title:`Portal Kullanımı`,language:`tsx`,content:`import {createPortal} from 'react-dom'

function Modal({isOpen, onClose, children}: ModalProps) {
  if (!isOpen) return null

  // Component React ağacında parent'ın içindedir
  // AMA DOM'da document.body'nin altında render olur
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Content */}
      <div className="relative bg-white rounded-lg p-6 z-10">
        {children}
      </div>
    </div>,
    document.body, // DOM'da nereye render edilsin?
  )
}

// Neden Portal?
// 1. CSS overflow:hidden parent'ı modal'ı kesmez
// 2. z-index sorunları yaşanmaz
// 3. CSS stacking context dışına çıkar
// 4. React event'leri hâlâ parent'a bubble olur`},{type:`tip`,content:`Bu projede shadcn/ui Dialog, Sheet, Popover gibi component'ler zaten Radix UI Portal'ları kullanır. Manuel Portal yazmaya nadiren ihtiyaç duyulur.`}]},{id:`forward-ref`,title:`forwardRef ile Ref İletme`,blocks:[{type:`text`,content:`forwardRef, parent component'in child component içindeki bir DOM elementine ref ile erişmesini sağlar. Özellikle reusable UI component'leri (Input, Button vb.) için gereklidir.`},{type:`code`,title:`forwardRef Kullanımı`,language:`tsx`,content:`import {forwardRef, useRef} from 'react'

// Custom Input component - ref'i iletir
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({label, error, ...props}, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input
          ref={ref}  // Parent'tan gelen ref buraya bağlanır
          className={error ? 'border-red-500' : 'border-gray-300'}
          {...props}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    )
  },
)
Input.displayName = 'Input'

// Parent'ta kullanım
function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    emailRef.current?.focus() // Custom Input içindeki native input'a focus
  }, [])

  return (
    <form>
      <Input ref={emailRef} label="Email" type="email" />
      <Input label="Şifre" type="password" />
    </form>
  )
}

// React 19'da forwardRef yerine direkt ref prop:
function Input({label, ref, ...props}: InputProps & {ref?: React.Ref<HTMLInputElement>}) {
  return <input ref={ref} {...props} />
}`}]}]},{id:`controlled-uncontrolled`,title:`8. Controlled vs Uncontrolled Components`,description:`Form elementlerinin iki farklı yönetim şekli. Hangisi ne zaman kullanılır?`,level:`intermediate`,lessons:[{id:`controlled-vs-uncontrolled`,title:`Controlled ve Uncontrolled Farkı`,blocks:[{type:`code`,title:`Controlled Component`,language:`tsx`,content:`// CONTROLLED: React state ile yönetilir
// Her tuş vuruşunda state güncellenir → re-render olur
function ControlledForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // value + onChange = controlled
  return (
    <form>
      <input
        value={name}           // React state'den okunur
        onChange={e => setName(e.target.value)} // Her değişiklikte state güncellenir
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <p>Merhaba, {name}!</p> {/* Anlık güncellenir */}
    </form>
  )
}

// Avantajlar:
// ✅ Her an güncel değere erişim
// ✅ Input validasyonu anında yapılabilir
// ✅ Koşullu logic (ör: input uzunluk limiti)
// Dezavantajlar:
// ❌ Her tuşta re-render (çok form alanı = performans)`},{type:`code`,title:`Uncontrolled Component`,language:`tsx`,content:`// UNCONTROLLED: DOM kendisi yönetir, sadece submit'te değer alınır
function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Değer sadece submit anında okunur
    const name = nameRef.current?.value
    const email = emailRef.current?.value
    console.log({name, email})
  }

  // ref + defaultValue = uncontrolled
  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} defaultValue="" />
      <input ref={emailRef} defaultValue="" />
      <button type="submit">Gönder</button>
    </form>
  )
}

// Avantajlar:
// ✅ Daha az re-render (performans)
// ✅ Basit formlar için yeterli
// Dezavantajlar:
// ❌ Anlık değere erişim zor
// ❌ Validasyon karmaşık`},{type:`code`,title:`React Hook Form: İkisinin En İyisi`,language:`tsx`,content:`// React Hook Form = Uncontrolled performansı + Controlled esnekliği
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(1, 'İsim zorunlu'),
  email: z.string().email('Geçersiz email'),
})

function SmartForm() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(schema),
  })

  // register = ref tabanlı (uncontrolled) ama
  // validasyon, dirty tracking, error handling var (controlled gibi)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Gönder</button>
    </form>
  )
}

// Bu projede HER form React Hook Form + Zod ile yapılır
// Ne controlled ne uncontrolled — en iyi iki dünya!`},{type:`tip`,content:`Bu projede form yönetimi için HER ZAMAN React Hook Form + Zod kullanılır. Manuel controlled/uncontrolled form yazmayın.`}]}]}],lr=[{id:`compound-components`,title:`1. Compound Components Pattern`,description:`Birbiriyle ilişkili component'leri tek bir API altında birleştirin. shadcn/ui ve Radix UI bu pattern'i kullanır.`,level:`advanced`,lessons:[{id:`compound-basics`,title:`Compound Components Nedir?`,blocks:[{type:`text`,content:`Compound Components, birbirine bağlı component'lerin implicit state paylaşarak çalışmasıdır. HTML'deki <select> + <option> ilişkisi gibi. Parent, state'i yönetir; child'lar Context üzerinden erişir. shadcn/ui'daki Tabs, Accordion, Dialog hep bu pattern'dir.`},{type:`code`,title:`Compound Component Örneği: Accordion`,language:`tsx`,content:`import {createContext, useContext, useState, type ReactNode} from 'react'

// 1. Shared Context
interface AccordionContextType {
  openItems: Set<string>
  toggle: (id: string) => void
}
const AccordionContext = createContext<AccordionContextType | null>(null)

const useAccordion = () => {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('Accordion.Item must be inside Accordion')
  return ctx
}

// 2. Root Component (state yönetimi)
function Accordion({children, multiple = false}: {
  children: ReactNode
  multiple?: boolean
}) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(multiple ? prev : [])
      if (prev.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <AccordionContext.Provider value={{openItems, toggle}}>
      <div className="divide-y">{children}</div>
    </AccordionContext.Provider>
  )
}

// 3. Child Components (Context'ten state okur)
function AccordionItem({id, children}: {id: string; children: ReactNode}) {
  return <div data-id={id}>{children}</div>
}

function AccordionTrigger({id, children}: {id: string; children: ReactNode}) {
  const {openItems, toggle} = useAccordion()
  const isOpen = openItems.has(id)

  return (
    <button onClick={() => toggle(id)} className="w-full text-left p-4">
      {children}
      <span className={isOpen ? 'rotate-180' : ''}>▼</span>
    </button>
  )
}

function AccordionContent({id, children}: {id: string; children: ReactNode}) {
  const {openItems} = useAccordion()
  if (!openItems.has(id)) return null
  return <div className="p-4">{children}</div>
}

// 4. API'yi birleştir
Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent

// 5. Kullanım — çok temiz ve esnek!
function FAQ() {
  return (
    <Accordion multiple>
      <Accordion.Item id="q1">
        <Accordion.Trigger id="q1">React nedir?</Accordion.Trigger>
        <Accordion.Content id="q1">
          React bir UI kütüphanesidir...
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item id="q2">
        <Accordion.Trigger id="q2">JSX nedir?</Accordion.Trigger>
        <Accordion.Content id="q2">
          JSX, JavaScript içinde HTML yazmayı sağlar...
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}`},{type:`tip`,content:`Bu projede shadcn/ui component'leri (Tabs, Dialog, Sidebar, Accordion) hep Compound Components pattern'ini kullanır. Radix UI altyapısıyla gelir.`}]}]},{id:`render-props-hoc`,title:`2. Render Props & HOC Pattern'leri`,description:`Component mantığını paylaşmanın iki klasik yolu. Modern alternatifleri ile birlikte öğrenin.`,level:`advanced`,lessons:[{id:`render-props`,title:`Render Props Pattern`,blocks:[{type:`text`,content:`Render props, bir component'e fonksiyon geçerek render mantığını dışarıdan kontrol etmenizi sağlar. Hook'lardan önce çok yaygındı. Hâlâ bazı durumlarda faydalıdır (özellikle 3rd party kütüphanelerde).`},{type:`code`,title:`Render Props Örneği`,language:`tsx`,content:`// Mouse pozisyonunu takip eden component
interface MousePosition {
  x: number
  y: number
}

function MouseTracker({render}: {render: (pos: MousePosition) => ReactNode}) {
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({x: e.clientX, y: e.clientY})
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return <>{render(position)}</>
}

// Kullanım - render mantığı tamamen dışarıda
function App() {
  return (
    <MouseTracker
      render={({x, y}) => (
        <div>
          <p>Mouse: {x}, {y}</p>
          <div style={{
            position: 'absolute',
            left: x,
            top: y,
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: 'red',
          }} />
        </div>
      )}
    />
  )
}

// ✅ Modern alternatif: Custom Hook
function useMousePosition() {
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPosition({x: e.clientX, y: e.clientY})
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])
  return position
}

// Hook ile kullanım — çok daha temiz
function App() {
  const {x, y} = useMousePosition()
  return <p>Mouse: {x}, {y}</p>
}`}]},{id:`hoc-pattern`,title:`Higher-Order Component (HOC)`,blocks:[{type:`text`,content:`HOC, bir component alıp geliştirilmiş yeni bir component döndüren fonksiyondur. Eski React'te yaygındı. Artık hook'lar çoğu HOC ihtiyacını karşılar, ama bazı durumlarda hâlâ faydalıdır.`},{type:`code`,title:`HOC Örneği: withAuth`,language:`tsx`,content:`// HOC: Component'i sararak yetki kontrolü ekler
function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requiredRole?: string,
) {
  return function AuthenticatedComponent(props: P) {
    const {user} = useSessionStore()

    if (!user) return <Navigate to="/login" />
    if (requiredRole && user.role !== requiredRole) {
      return <div>Yetkiniz yok</div>
    }

    return <WrappedComponent {...props} />
  }
}

// Kullanım
const ProtectedDashboard = withAuth(Dashboard)
const AdminPanel = withAuth(AdminPage, 'admin')

// ✅ Bu projede HOC yerine route guard kullanılır:
createRoute({
  path: '/admin',
  component: AdminPage,
  beforeLoad: ({context}) => requireAuth(context), // ← Guard
})

// HOC hâlâ faydalı olduğu yerler:
// - Analytics wrapper (her sayfaya tracking ekle)
// - Error boundary wrapper
// - Feature flag wrapper`},{type:`tip`,content:`Modern React'te Hook'lar > HOC > Render Props sıralaması geçerlidir. Yeni kod yazarken önce Hook düşünün. HOC ve Render Props sadece Hook'un yetersiz kaldığı durumlarda (component sarmalama gerektiğinde) kullanın.`}]}]},{id:`performance-deep`,title:`3. Performans Optimizasyonu (İleri)`,description:`React Profiler, bundle analizi, virtualization ve render optimizasyon teknikleri.`,level:`expert`,lessons:[{id:`react-profiler`,title:`React DevTools Profiler ile Analiz`,blocks:[{type:`code`,title:`Performans Analiz Adımları`,language:`text`,content:`React DevTools Profiler Kullanımı:

1. Chrome DevTools → "Profiler" tab'ı açın
2. "Record" butonuna tıklayın
3. Uygulamada etkileşim yapın
4. "Stop" ile kaydı durdurun

Bakılacaklar:
━━━━━━━━━━━━
• Flame Graph: Hangi component ne kadar sürede render oldu?
• Ranked: En yavaş component'ler sıralı
• "Why did this render?": Re-render sebebini gösterir

Kırmızı Bayraklar 🚩:
━━━━━━━━━━━━━━━━
• 16ms üzeri render (60fps'i kaçırır)
• Unnecessary re-render (prop değişmeden render)
• Büyük liste render (100+ item → virtualization gerek)`},{type:`code`,title:`Programmatic Profiler`,language:`tsx`,content:`import {Profiler, type ProfilerOnRenderCallback} from 'react'

const onRender: ProfilerOnRenderCallback = (
  id,           // "UserList"
  phase,        // "mount" | "update"
  actualDuration, // Bu render ne kadar sürdü (ms)
  baseDuration,   // Memoize olmadan ne kadar sürerdi
  startTime,
  commitTime,
) => {
  if (actualDuration > 16) {
    console.warn(\`⚠️ Slow render: \${id} took \${actualDuration.toFixed(1)}ms\`)
  }
}

function App() {
  return (
    <Profiler id="UserList" onRender={onRender}>
      <UserList />
    </Profiler>
  )
}`}]},{id:`virtualization`,title:`Liste Virtualization`,blocks:[{type:`text`,content:`Büyük listelerde (100+ item) tüm öğeleri render etmek yerine, sadece ekranda görünen öğeleri render edin. TanStack Virtual veya react-window kullanılır.`},{type:`code`,title:`TanStack Virtual ile Virtualization`,language:`tsx`,content:`import {useVirtualizer} from '@tanstack/react-virtual'
import {useRef} from 'react'

function VirtualList({items}: {items: Item[]}) {
  const parentRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: items.length,      // Toplam item sayısı
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,   // Her satırın tahmini yüksekliği (px)
    overscan: 5,              // Ekran dışında kaç item render edilsin
  })

  return (
    <div ref={parentRef} style={{height: '600px', overflow: 'auto'}}>
      <div style={{height: virtualizer.getTotalSize(), position: 'relative'}}>
        {virtualizer.getVirtualItems().map(virtualRow => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualRow.size,
              transform: \`translateY(\${virtualRow.start}px)\`,
            }}>
            {items[virtualRow.index].name}
          </div>
        ))}
      </div>
    </div>
  )
}

// 10.000 item olsa bile sadece ~20 tanesi DOM'da!
// Scroll performansı mükemmel`},{type:`code`,title:`Bundle Analizi`,language:`bash`,content:`# Vite bundle analizi
npx vite-bundle-visualizer

# Sonuç: treemap görselinde hangi paket ne kadar yer kaplıyor
# Büyük paketler → lazy loading ile bölün
# Gereksiz paketler → kaldırın

# Tipik optimizasyonlar:
# 1. lodash → lodash-es (tree-shakeable)
# 2. moment → dayjs (çok daha küçük)
# 3. Büyük component'ler → React.lazy
# 4. Icon kütüphanesi → sadece kullanılanları import edin
#    import {House} from 'lucide-react'  ✅
#    import * as Icons from 'lucide-react' ❌`},{type:`tip`,content:`Erken optimizasyon yapmayın! Önce doğru çalışsın, sonra Profiler ile ölçün, sonra optimize edin. "Premature optimization is the root of all evil." — Donald Knuth`}]}]},{id:`typescript-react`,title:`4. TypeScript + React İleri Teknikler`,description:`Generic components, discriminated unions, template literal types ve type-safe event handling.`,level:`expert`,lessons:[{id:`generic-components`,title:`Generic Components`,blocks:[{type:`text`,content:`Generic component'ler, farklı veri tipleriyle çalışabilen yeniden kullanılabilir component'lerdir. Tablo, liste, select gibi veri agnostik component'ler için kritiktir.`},{type:`code`,title:`Generic Component Örnekleri`,language:`tsx`,content:`// 1. Generic Select Component
interface SelectProps<T> {
  items: T[]
  value: T | null
  onChange: (item: T) => void
  getLabel: (item: T) => string
  getKey: (item: T) => string | number
}

function Select<T>({items, value, onChange, getLabel, getKey}: SelectProps<T>) {
  return (
    <select
      value={value ? String(getKey(value)) : ''}
      onChange={e => {
        const item = items.find(i => String(getKey(i)) === e.target.value)
        if (item) onChange(item)
      }}>
      <option value="">Seçiniz</option>
      {items.map(item => (
        <option key={getKey(item)} value={String(getKey(item))}>
          {getLabel(item)}
        </option>
      ))}
    </select>
  )
}

// Kullanım - TypeScript tipi otomatik çıkarılır
interface City {
  id: number
  name: string
  population: number
}

<Select<City>
  items={cities}
  value={selectedCity}
  onChange={setSelectedCity}    // (city: City) => void
  getLabel={c => c.name}       // TypeScript c'nin City olduğunu bilir
  getKey={c => c.id}
/>

// 2. Generic DataTable Component
interface Column<T> {
  key: keyof T
  header: string
  render?: (value: T[keyof T], row: T) => ReactNode
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (row: T) => void
}

function DataTable<T extends {id: string | number}>({
  data, columns, onRowClick,
}: DataTableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={String(col.key)}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id} onClick={() => onRowClick?.(row)}>
            {columns.map(col => (
              <td key={String(col.key)}>
                {col.render
                  ? col.render(row[col.key], row)
                  : String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}`}]},{id:`discriminated-unions`,title:`Discriminated Unions ile Props`,blocks:[{type:`code`,title:`Type-Safe Variant Props`,language:`tsx`,content:`// Discriminated union: "type" alanına göre diğer alanlar değişir
type NotificationProps =
  | {type: 'success'; message: string}
  | {type: 'error'; message: string; retryAction: () => void}
  | {type: 'loading'; progress: number}

function Notification(props: NotificationProps) {
  switch (props.type) {
    case 'success':
      return <div className="text-green-500">{props.message}</div>

    case 'error':
      // TypeScript props.retryAction'ın var olduğunu bilir!
      return (
        <div className="text-red-500">
          {props.message}
          <button onClick={props.retryAction}>Tekrar Dene</button>
        </div>
      )

    case 'loading':
      // TypeScript props.progress'in var olduğunu bilir!
      return <ProgressBar value={props.progress} />
  }
}

// Kullanım - TypeScript yanlış prop geçmeyi engeller
<Notification type="success" message="Kaydedildi" />
<Notification type="error" message="Hata!" retryAction={() => retry()} />
<Notification type="loading" progress={75} />

// ❌ TypeScript HATA verir:
<Notification type="success" retryAction={() => {}} />
// 'retryAction' does not exist on type '{type: "success"; message: string}'

// Bu projede API response'ları için benzer pattern:
type ApiResponse<T> =
  | {success: true; data: T}
  | {success: false; error: {code: string; message: string}}`},{type:`tip`,content:`Discriminated union, component API'nizi type-safe yapar. Yanlış prop kombinasyonu derleme zamanında yakalanır. Button (variant + size), Alert (type + action), Modal (mode + content) gibi component'lerde kullanın.`}]}]},{id:`architecture-patterns`,title:`5. Proje Mimarisi & Best Practices`,description:`Feature-based architecture, separation of concerns ve bu projede uygulanan mimari kararlar.`,level:`expert`,lessons:[{id:`feature-architecture`,title:`Feature-Based Mimari`,blocks:[{type:`text`,content:`Bu projede domain-driven, feature-based mimari kullanılır. Her feature kendi API, component, hook, query, schema ve type tanımlarını içerir. Bu yapı, büyük projelerde kodu organize tutmanın en etkili yoludur.`},{type:`code`,title:`Bu Projenin Klasör Yapısı`,language:`text`,content:`src/
├── app/
│   ├── routes/           # Sayfa component'leri
│   │   └── users/
│   │       ├── route.tsx         # Route tanımı
│   │       └── UsersPage.tsx     # Sayfa component'i
│   ├── router/           # Router konfigürasyonu
│   │   ├── router.tsx            # Route tree
│   │   └── types.ts              # RouterContext tipi
│   ├── layout/           # AppShell, Sidebar, Header
│   └── errors/           # GlobalError, GlobalNotFound
│
├── features/             # Feature modülleri (DOMAIN-DRIVEN)
│   └── users/
│       ├── api/          # API fonksiyonları (axios calls)
│       │   └── users-api.ts
│       ├── components/   # Domain'e özel component'ler
│       │   ├── UserTable.tsx
│       │   ├── CreateUserDialog.tsx
│       │   └── UserFilters.tsx
│       ├── hooks/        # Custom hooks
│       │   └── use-users.ts
│       ├── queries/      # TanStack Query options
│       │   └── users-queries.ts
│       ├── schemas/      # Zod validation schemas
│       │   └── user-schema.ts
│       └── types/        # TypeScript type tanımları
│           └── user-types.ts
│
├── common/               # Paylaşılan kodlar
│   ├── components/       # Reusable UI components
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Global hooks
│   ├── lib/              # Utility libraries (query-client, axios)
│   ├── utils/            # Helper fonksiyonlar
│   └── i18n/             # Çeviri dosyaları`},{type:`code`,title:`Feature Modülü: Tam Akış Örneği`,language:`tsx`,content:`// 1. types/user-types.ts — Tip tanımları
export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
  status: 'active' | 'inactive'
}

export interface CreateUserDto {
  name: string
  email: string
  role: 'admin' | 'user'
}

// 2. schemas/user-schema.ts — Zod validasyon
export const createUserSchema = z.object({
  name: z.string().min(2, 'En az 2 karakter'),
  email: z.string().email('Geçersiz email'),
  role: z.enum(['admin', 'user']),
})

// 3. api/users-api.ts — API çağrıları
export const getUsers = (params: UserFilters) =>
  api.get<PaginatedResponse<User>>('/users', {params})

export const createUser = (data: CreateUserDto) =>
  api.post<User>('/users', data)

// 4. queries/users-queries.ts — Query options
export const usersQueryOptions = (filters: UserFilters) =>
  queryOptions({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
  })

// 5. hooks/use-users.ts — Mutation hooks
export const useCreateUser = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      qc.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı oluşturuldu')
    },
  })
}

// 6. components/CreateUserDialog.tsx — UI
// React Hook Form + Zod + useMutation

// 7. routes/users/UsersPage.tsx — Sayfa
// useQuery + DataTable + Filters + CreateDialog`},{type:`warning`,content:`features/ içindeki bir modül, başka bir feature'ı DOĞRUDAN import etmemelidir. Ortak kod common/ altında olmalıdır. Bu kural, feature'lar arası bağımlılığı (coupling) önler.`}]},{id:`clean-code-react`,title:`Clean Code Kuralları (React)`,blocks:[{type:`code`,title:`Component Tasarım Kuralları`,language:`tsx`,content:`// ✅ KURAL 1: Component küçük olmalı (~100-150 satır max)
// Büyüdüyse → bölün

// ✅ KURAL 2: Single Responsibility — her component tek iş yapmalı
// ❌ UserPageWithTableAndFiltersAndDialogAndExport
// ✅ UsersPage → UserTable + UserFilters + CreateUserDialog

// ✅ KURAL 3: İsimlendirme
// Component: PascalCase → UserCard, CreateUserDialog
// Hook: camelCase, "use" prefix → useUsers, useCreateUser
// Event handler: "handle" prefix → handleSubmit, handleDelete
// Boolean prop: "is/has/should" prefix → isOpen, hasError, shouldRefresh

// ✅ KURAL 4: Props Destructuring (ilk satırda)
// ❌ function UserCard(props) { return <p>{props.name}</p> }
// ✅ function UserCard({name, email}: UserCardProps) { ... }

// ✅ KURAL 5: Early Return ile guard clause
function UserDetail({user}: {user: User | null}) {
  if (!user) return <NotFound />  // Guard clause İLK
  // Ana mantık SONRA

  return <div>{user.name}</div>
}

// ✅ KURAL 6: Derived state — gereksiz useState kullanmayın
// ❌ YANLIŞ
const [fullName, setFullName] = useState('')
useEffect(() => {
  setFullName(user.firstName + ' ' + user.lastName)
}, [user])

// ✅ DOĞRU — hesaplanmış değer, state değil
const fullName = user.firstName + ' ' + user.lastName

// ✅ KURAL 7: İmport sırası
// 1. React / framework imports
// 2. Third-party imports
// 3. Local imports (absolute paths)
// 4. Types (import type)`},{type:`tip`,content:`En önemli kural: "Derived state useState ile tutulmaz." Eğer bir değer başka state'lerden hesaplanabiliyorsa, direkt hesaplayın. Gereksiz useState + useEffect = bug kaynağı.`}]}]},{id:`testing-patterns`,title:`6. Test Yazma Stratejileri`,description:`React component'leri ve hook'lar için test yazma yaklaşımları ve best practices.`,level:`expert`,lessons:[{id:`testing-philosophy`,title:`Test Piramidi ve React Testing`,blocks:[{type:`code`,title:`Test Stratejisi`,language:`text`,content:`React Test Piramidi:

         /\\
        /  \\
       / E2E \\          ← Cypress/Playwright (az ama kritik akışlar)
      /________\\
     /          \\
    / Integration \\     ← React Testing Library (çoğu test burası)
   /______________\\
  /                \\
 /    Unit Tests    \\   ← Vitest (utils, hooks, pure functions)
/____________________\\

Kural: "Test implementation değil, behavior test edin."

❌ YANLIŞ: "setCount çağrıldı mı?"
✅ DOĞRU:  "Butona tıklayınca sayaç 1 arttı mı?"

❌ YANLIŞ: "useState 5 kez çağrıldı mı?"
✅ DOĞRU:  "Form submit edilince success mesajı göründü mü?"`},{type:`code`,title:`Component Test Örnekleri`,language:`tsx`,content:`import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import {describe, it, expect, vi} from 'vitest'

// 1. Basit render testi
describe('UserCard', () => {
  it('should display user name and email', () => {
    render(<UserCard name="Ali" email="ali@mail.com" />)

    expect(screen.getByText('Ali')).toBeInTheDocument()
    expect(screen.getByText('ali@mail.com')).toBeInTheDocument()
  })
})

// 2. Event handler testi
describe('Counter', () => {
  it('should increment on button click', () => {
    render(<Counter />)

    const button = screen.getByRole('button', {name: /artır/i})
    fireEvent.click(button)
    fireEvent.click(button)

    expect(screen.getByText('Sayaç: 2')).toBeInTheDocument()
  })
})

// 3. Async testi (API çağrısı)
describe('UserList', () => {
  it('should load and display users', async () => {
    // Mock API
    vi.spyOn(api, 'getUsers').mockResolvedValue([
      {id: 1, name: 'Ali'},
      {id: 2, name: 'Veli'},
    ])

    render(
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>
    )

    // Loading state
    expect(screen.getByText('Yükleniyor...')).toBeInTheDocument()

    // Data loaded
    await waitFor(() => {
      expect(screen.getByText('Ali')).toBeInTheDocument()
      expect(screen.getByText('Veli')).toBeInTheDocument()
    })
  })
})

// 4. Custom hook testi
import {renderHook, act} from '@testing-library/react'

describe('useToggle', () => {
  it('should toggle value', () => {
    const {result} = renderHook(() => useToggle(false))

    expect(result.current.value).toBe(false)

    act(() => result.current.toggle())
    expect(result.current.value).toBe(true)

    act(() => result.current.toggle())
    expect(result.current.value).toBe(false)
  })
})`},{type:`tip`,content:`getByRole > getByText > getByTestId sırasıyla tercih edin. Role-based query'ler accessibility'yi de test eder. data-testid son çaredir.`}]}]}],ur=[{id:`fetch-comparison`,title:`1. Veri Çekme: useEffect vs TanStack Query`,description:`Aynı işi eski yöntemle ve TanStack Query ile nasıl yaparsınız? Farkı görün.`,level:`beginner`,lessons:[{id:`basic-fetch-old`,title:`Basit Veri Çekme Karşılaştırması`,blocks:[{type:`text`,content:`En temel senaryo: Bir API'den kullanıcı listesi çekmek. Eski yöntem 20+ satır, TanStack Query ile 3 satır.`},{type:`code`,title:`❌ Eski Yöntem: useState + useEffect`,language:`tsx`,content:`function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('/api/users')
        if (!res.ok) throw new Error('Hata oluştu')
        const data = await res.json()
        if (!cancelled) setUsers(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUsers()
    return () => { cancelled = true }
  }, [])

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}

// Sorunlar:
// 😩 3 ayrı useState (data, loading, error)
// 😩 cancelled flag ile race condition yönetimi
// 😩 Cache YOK - her mount'ta yeniden fetch
// 😩 Başka component aynı veriyi isterse tekrar fetch
// 😩 Window focus'ta yenileme YOK
// 😩 Retry mekanizması YOK
// 😩 Stale data kontrolü YOK`},{type:`code`,title:`✅ TanStack Query ile`,language:`tsx`,content:`function UserList() {
  const {data: users, isLoading, isError, error} = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
  })

  if (isLoading) return <Spinner />
  if (isError) return <ErrorMessage message={error.message} />

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}

// Otomatik olarak:
// ✅ Loading, error, success state yönetimi
// ✅ Akıllı cache - aynı veri tekrar fetch edilmez
// ✅ Race condition koruması
// ✅ Window focus'ta otomatik yenileme
// ✅ Retry mekanizması (varsayılan 3 kez)
// ✅ Stale/fresh data kontrolü
// ✅ Garbage collection
// ✅ Background refetch
// ✅ DevTools ile debug`}]},{id:`params-fetch-old`,title:`Parametreli Veri Çekme`,blocks:[{type:`text`,content:`Kullanıcı ID'si ile detay çekme gibi parametreli sorgularda eski yöntem çok daha karmaşıklaşır.`},{type:`code`,title:`❌ Eski Yöntem: Parametreli Fetch`,language:`tsx`,content:`function UserDetail({userId}: {userId: number}) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(\`/api/users/\${userId}\`)
      .then(res => {
        if (!res.ok) throw new Error('Kullanıcı bulunamadı')
        return res.json()
      })
      .then(data => {
        if (!cancelled) setUser(data)
      })
      .catch(err => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [userId]) // userId değiştiğinde tekrar çek

  // userId hızla değişirse (liste gezme) race condition!
  // cancelled flag bunu kısmen çözer ama karmaşık
}`},{type:`code`,title:`✅ TanStack Query ile`,language:`tsx`,content:`function UserDetail({userId}: {userId: number}) {
  const {data: user, isLoading, isError} = useQuery({
    queryKey: ['users', userId], // userId değişince otomatik yeni fetch
    queryFn: () => getUserById(userId),
    enabled: userId > 0, // Geçersiz id ise çalışma
  })

  // userId hızla değişse bile:
  // - Önceki request otomatik iptal edilir
  // - Cache'deki veri anında gösterilir
  // - Arka planda yeni veri çekilir
}`}]}]},{id:`mutation-comparison`,title:`2. Veri Değiştirme: Manuel vs useMutation`,description:`POST/PUT/DELETE işlemlerinde eski yöntem ve TanStack Query farkı.`,level:`intermediate`,lessons:[{id:`create-old`,title:`Veri Oluşturma (POST) Karşılaştırması`,blocks:[{type:`code`,title:`❌ Eski Yöntem: Manuel POST + State Yönetimi`,language:`tsx`,content:`function CreateUserForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (data: CreateUserDto) => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Oluşturma başarısız')

      // 😩 Listeyi güncellemek için ne yaparız?
      // Seçenek 1: Sayfayı yenile (kötü UX)
      // window.location.reload()

      // Seçenek 2: Parent'a callback ile bildir
      // onSuccess?.()

      // Seçenek 3: Global state'i güncelle (Redux dispatch)
      // dispatch(addUser(newUser))

      toast.success('Kullanıcı oluşturuldu')
    } catch (err) {
      setError(err.message)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <button disabled={loading}>
        {loading ? 'Kaydediliyor...' : 'Kaydet'}
      </button>
    </form>
  )
}`},{type:`code`,title:`✅ TanStack Query: useMutation + Otomatik Invalidation`,language:`tsx`,content:`// Hook: Tek seferde tanımla, her yerde kullan
export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Kullanıcı listesi otomatik yenilenir!
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı oluşturuldu')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}

// Component: Temiz ve minimal
function CreateUserForm({onClose}: {onClose: () => void}) {
  const {mutate, isPending} = useCreateUser()

  const handleSubmit = (data: CreateUserDto) => {
    mutate(data, {
      onSuccess: () => onClose(), // Dialog kapat
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <button disabled={isPending}>
        {isPending ? 'Kaydediliyor...' : 'Kaydet'}
      </button>
    </form>
  )
}

// Avantajlar:
// ✅ invalidateQueries → liste otomatik güncellenir
// ✅ Loading/error state otomatik
// ✅ Hook yeniden kullanılabilir
// ✅ Global callback (invalidation) + per-call callback (UI)`}]},{id:`delete-comparison`,title:`Silme İşlemi + Liste Güncelleme`,blocks:[{type:`code`,title:`❌ Eski Yöntem: Delete + Manuel State Güncelleme`,language:`tsx`,content:`function UserList() {
  const [users, setUsers] = useState<User[]>([])

  // Veri çek...
  useEffect(() => { /* fetch logic */ }, [])

  const handleDelete = async (id: number) => {
    try {
      await fetch(\`/api/users/\${id}\`, {method: 'DELETE'})

      // Manuel olarak listeden çıkar
      setUsers(prev => prev.filter(u => u.id !== id))

      // Ama başka component'lerde de bu kullanıcı varsa?
      // Oralar hâlâ eski veriyi gösterir! 😩

      // Ya da tüm listeyi tekrar çek
      // await fetchUsers() // Gereksiz network isteği

      toast.success('Silindi')
    } catch (err) {
      toast.error('Silme başarısız')
      // Hata olursa listeyi geri al? Çok karmaşık...
    }
  }

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>
          {u.name}
          <button onClick={() => handleDelete(u.id)}>Sil</button>
        </li>
      ))}
    </ul>
  )
}`},{type:`code`,title:`✅ TanStack Query: Tüm Cache Otomatik Güncellenir`,language:`tsx`,content:`// Hook
export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      // ['users'] ile başlayan TÜM query'ler yenilenir
      // Liste, detay, istatistik - hepsi güncellenir!
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı silindi')
    },
  })
}

// Component
function UserList() {
  const {data: users} = useQuery(usersQueryOptions())
  const {mutate: deleteUser} = useDeleteUser()

  return (
    <ul>
      {users?.map(u => (
        <li key={u.id}>
          {u.name}
          <button onClick={() => deleteUser(u.id)}>Sil</button>
        </li>
      ))}
    </ul>
  )
}

// Başka bir component de aynı veriyi kullanıyorsa
// o da otomatik güncellenir - hiçbir şey yapmanıza gerek yok!`},{type:`tip`,content:`TanStack Query'nin en büyük gücü: invalidateQueries ile TÜM ilgili component'ler otomatik güncellenir. Redux'ta dispatch, prop drilling veya context ile yapmanız gereken şeyi Query otomatik yapar.`}]}]},{id:`cache-comparison`,title:`3. Cache & State Yönetimi Karşılaştırması`,description:`Redux/Context ile server state yönetimi vs TanStack Query. Neden server state ayrı yönetilmeli?`,level:`advanced`,lessons:[{id:`redux-vs-query`,title:`Redux/Context vs TanStack Query`,blocks:[{type:`text`,content:`Eskiden hem client state hem server state için Redux kullanılırdı. Bu, gereksiz karmaşıklık yaratır. TanStack Query server state'i, Zustand/Redux client state'i yönetmelidir.`},{type:`code`,title:`❌ Redux ile Server State (Eski Yöntem)`,language:`tsx`,content:`// actions.ts
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const fetchUsers = () => async (dispatch) => {
  dispatch({type: FETCH_USERS_REQUEST})
  try {
    const res = await api.get('/users')
    dispatch({type: FETCH_USERS_SUCCESS, payload: res.data})
  } catch (error) {
    dispatch({type: FETCH_USERS_FAILURE, payload: error.message})
  }
}

// reducer.ts
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {...state, loading: true, error: null}
    case FETCH_USERS_SUCCESS:
      return {...state, loading: false, data: action.payload}
    case FETCH_USERS_FAILURE:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}

// component.tsx
function UserList() {
  const dispatch = useDispatch()
  const {data, loading, error} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  // 6 dosya, 50+ satır boilerplate
  // Cache? Yok. Stale control? Yok. Auto-refetch? Yok.
}`},{type:`code`,title:`✅ Modern Yaklaşım: TanStack Query + Zustand`,language:`tsx`,content:`// Server state → TanStack Query (3 satır!)
function UserList() {
  const {data, isLoading} = useQuery(usersQueryOptions())
  // Cache ✅ Stale control ✅ Auto-refetch ✅ Retry ✅
}

// Client state → Zustand (UI state, theme, sidebar vb.)
import {create} from 'zustand'

const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  toggle: () => set(state => ({isOpen: !state.isOpen})),
}))

// İkisi bir arada - temiz ayrım
function App() {
  // Server state
  const {data: user} = useQuery(currentUserQueryOptions())

  // Client state
  const {isOpen, toggle} = useSidebarStore()

  return (
    <Layout sidebarOpen={isOpen} onToggle={toggle}>
      <UserProfile user={user} />
    </Layout>
  )
}

// Kural: "Bu veri sunucudan mı geliyor?" → TanStack Query
//         "Bu veri sadece UI'da mı?" → Zustand/useState`},{type:`warning`,content:`Server state'i Redux'ta tutmayın! Redux, sadece karmaşık client-side state için kullanılmalıdır (ve çoğu projede Zustand daha basittir). API verisi = TanStack Query, UI state = Zustand/useState.`}]},{id:`stale-while-revalidate`,title:`Stale-While-Revalidate Stratejisi`,blocks:[{type:`text`,content:`TanStack Query'nin en güçlü özelliği stale-while-revalidate pattern'idir. Eski veriyi hemen gösterir, arka planda yenisini çeker. Kullanıcı asla loading görmez.`},{type:`code`,title:`Stale-While-Revalidate Akışı`,language:`text`,content:`Senaryo: Kullanıcı /users sayfasına gidiyor

━━━ ESKİ YÖNTEM ━━━
1. Sayfa açılır → Loading spinner gösterilir
2. API çağrısı yapılır (1-2 saniye)
3. Veri gelir → Liste gösterilir
4. Kullanıcı başka sayfaya gider ve geri döner
5. YİNE Loading spinner → YİNE API çağrısı → YİNE bekleme

━━━ TANSTACK QUERY (staleTime: 5dk) ━━━
1. İlk ziyaret: Loading → API → Liste (normal)
2. 5 dakika içinde tekrar gelirse:
   → Cache'den ANİNDA gösterir (0ms)
   → Arka planda yeni veri çeker
   → Fark varsa sessizce günceller
3. 5 dakika sonra gelirse:
   → Cache'deki eski veriyi hemen gösterir
   → Arka planda yenisini çeker
   → Güncellenmiş veriyi gösterir

Kullanıcı deneyimi:
Eski yöntem:  [⏳ Loading...] → [📋 Data]  (her seferinde)
TanStack:     [📋 Data] (anında!) → [📋 Updated] (sessizce)`},{type:`tip`,content:`staleTime ve gcTime ayarlarını projenize göre yapılandırın. Sık değişen veri (chat) → düşük staleTime. Nadir değişen veri (ayarlar) → yüksek staleTime.`}]}]},{id:`form-comparison`,title:`4. Form Submit: Eski vs Modern`,description:`Form submit + validasyon + API çağrısı + hata yönetimi tam karşılaştırma.`,level:`intermediate`,lessons:[{id:`form-full-comparison`,title:`Tam Form Akışı Karşılaştırması`,blocks:[{type:`code`,title:`❌ Eski Yöntem: Her Şey Manuel`,language:`tsx`,content:`function CreateUserForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = 'İsim zorunlu'
    if (!email.includes('@')) newErrors.email = 'Geçersiz email'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    try {
      setLoading(true)
      setServerError('')
      await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({name, email}),
      })
      // Başarılı... şimdi ne olacak?
      // Parent'ı bilgilendir? Listeyi yenile?
    } catch (err) {
      setServerError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // 5 useState, manuel validasyon, karmaşık submit
  // Her yeni field için: +1 useState, +1 validation rule
}`},{type:`code`,title:`✅ Modern: React Hook Form + Zod + TanStack Query`,language:`tsx`,content:`// Schema (validation kuralları tek yerde)
const createUserSchema = z.object({
  name: z.string().min(1, 'İsim zorunlu'),
  email: z.string().email('Geçersiz email'),
})
type CreateUserDto = z.infer<typeof createUserSchema>

// Hook (mutation tek yerde)
const useCreateUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı oluşturuldu')
    },
  })
}

// Component (temiz ve minimal)
function CreateUserForm({onClose}: {onClose: () => void}) {
  const form = useForm<CreateUserDto>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {name: '', email: ''},
  })

  const {mutate, isPending} = useCreateUser()

  const onSubmit = form.handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        form.reset()
        onClose()
      },
    })
  })

  return (
    <form onSubmit={onSubmit}>
      <Input {...form.register('name')} />
      {form.formState.errors.name && (
        <p>{form.formState.errors.name.message}</p>
      )}

      <Input {...form.register('email')} />
      {form.formState.errors.email && (
        <p>{form.formState.errors.email.message}</p>
      )}

      <Button disabled={isPending}>
        {isPending ? 'Kaydediliyor...' : 'Kaydet'}
      </Button>
    </form>
  )
}

// Avantajlar:
// ✅ Zod: Type-safe validasyon, schema'dan tip üretme
// ✅ React Hook Form: Performanslı, uncontrolled
// ✅ useMutation: Loading, error, cache invalidation
// ✅ Separation of concerns: Schema / Hook / Component ayrı`},{type:`tip`,content:`Bu projedeki pattern: Zod schema → TypeScript type → React Hook Form → useMutation → invalidation. Bu zincir her CRUD formunda aynı şekilde kullanılır.`}]}]}],dr=[tr,nr,rr,ir,ar,or],fr=[{id:`react-fundamentals`,label:`Temeller`,icon:(0,z.jsx)(ee,{className:`size-4`}),count:sr.length},{id:`react-intermediate`,label:`Orta`,icon:(0,z.jsx)(ie,{className:`size-4`}),count:cr.length},{id:`react-professional`,label:`İleri`,icon:(0,z.jsx)(O,{className:`size-4`}),count:lr.length},{id:`tanstack`,label:`TanStack`,icon:(0,z.jsx)(A,{className:`size-4`}),count:dr.length},{id:`old-vs-new`,label:`Karşılaştırma`,icon:(0,z.jsx)(x,{className:`size-4`}),count:ur.length}],pr={"react-fundamentals":{title:`React Temelleri`,subtitle:`JSX, Props, State, Hooks — sıfırdan sağlam temeller atın`},"react-intermediate":{title:`Orta Seviye React`,subtitle:`Context, useReducer, Error Boundaries, Custom Hooks ve daha fazlası`},"react-professional":{title:`Profesyonel React`,subtitle:`Compound Components, HOC, Performance, TypeScript ve Mimari`},tanstack:{title:`TanStack Ekosistemi`,subtitle:`Query, Router, Mutations — modern React veri yönetimi`},"old-vs-new":{title:`Eski vs Modern Yaklaşım`,subtitle:`useEffect+useState'den TanStack Query'ye geçiş rehberi`}};function mr(){let[e,t]=(0,l.useState)(`react-fundamentals`),[n,r]=(0,l.useState)(``),i=(0,l.useMemo)(()=>{switch(e){case`react-fundamentals`:return sr;case`react-intermediate`:return cr;case`react-professional`:return lr;case`tanstack`:return dr;case`old-vs-new`:return ur;default:return[]}},[e]);(0,l.useEffect)(()=>{i.length>0&&r(i[0].id)},[i]),(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&r(t.target.id)},{rootMargin:`-120px 0px -60% 0px`});return i.forEach(t=>{let n=document.getElementById(t.id);n&&e.observe(n)}),()=>e.disconnect()},[i]);let a=e=>{t(e),window.scrollTo({top:0,behavior:`smooth`})},o=pr[e];return(0,z.jsxs)(`div`,{className:`min-h-screen bg-[#09090b] relative`,children:[(0,z.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none overflow-hidden`,children:[(0,z.jsx)(`div`,{className:`absolute -top-40 -left-40 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl`}),(0,z.jsx)(`div`,{className:`absolute top-1/4 -right-20 w-80 h-80 bg-violet-500/[0.03] rounded-full blur-3xl`}),(0,z.jsx)(`div`,{className:`absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/[0.02] rounded-full blur-3xl`})]}),(0,z.jsx)(`header`,{className:`sticky top-0 z-30 glass border-b border-zinc-800/50`,children:(0,z.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6`,children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between py-4`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,z.jsx)(`div`,{className:`flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-violet-500/20`,children:(0,z.jsx)(ee,{className:`size-5 text-white`})}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h1`,{className:`text-lg font-bold text-zinc-100 tracking-tight`,children:`React Öğrenme Rehberi`}),(0,z.jsx)(`p`,{className:`text-[11px] text-zinc-500 font-medium`,children:`Sıfırdan Uzmanlığa • Kapsamlı Türkçe Kaynak`})]})]}),(0,z.jsx)(`div`,{className:`hidden md:flex items-center gap-4`,children:(0,z.jsxs)(`div`,{className:`flex items-center gap-6 px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/50`,children:[(0,z.jsxs)(`div`,{className:`text-center`,children:[(0,z.jsx)(`div`,{className:`text-sm font-bold text-zinc-200`,children:`5`}),(0,z.jsx)(`div`,{className:`text-[10px] text-zinc-500 uppercase tracking-wider`,children:`Modül`})]}),(0,z.jsx)(`div`,{className:`w-px h-6 bg-zinc-800`}),(0,z.jsxs)(`div`,{className:`text-center`,children:[(0,z.jsx)(`div`,{className:`text-sm font-bold text-zinc-200`,children:`40+`}),(0,z.jsx)(`div`,{className:`text-[10px] text-zinc-500 uppercase tracking-wider`,children:`Bölüm`})]}),(0,z.jsx)(`div`,{className:`w-px h-6 bg-zinc-800`}),(0,z.jsxs)(`div`,{className:`text-center`,children:[(0,z.jsx)(`div`,{className:`text-sm font-bold text-zinc-200`,children:`200+`}),(0,z.jsx)(`div`,{className:`text-[10px] text-zinc-500 uppercase tracking-wider`,children:`Örnek`})]})]})})]}),(0,z.jsx)(`div`,{className:`pb-4 -mx-2 overflow-x-auto`,children:(0,z.jsx)(er,{tabs:fr,activeTab:e,onTabChange:a})})]})}),(0,z.jsxs)(`div`,{className:`relative border-b border-zinc-800/30`,children:[(0,z.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 py-6`,children:(0,z.jsxs)(`div`,{className:`animate-fade-in`,children:[(0,z.jsx)(`h2`,{className:`text-2xl font-bold text-zinc-100 tracking-tight mb-1`,children:o.title}),(0,z.jsx)(`p`,{className:`text-sm text-zinc-500`,children:o.subtitle})]})}),(0,z.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent`})]}),(0,z.jsx)(`div`,{className:`relative max-w-7xl mx-auto px-6 py-8`,children:(0,z.jsxs)(`div`,{className:`flex gap-8`,children:[(0,z.jsx)(`aside`,{className:`hidden lg:block w-72 shrink-0`,children:(0,z.jsx)($n,{sections:i,activeSection:n})}),(0,z.jsxs)(`main`,{className:`flex-1 min-w-0`,children:[i.map(e=>(0,z.jsx)(Zn,{section:e},e.id)),(0,z.jsx)(`div`,{className:`h-32`})]})]})}),(0,z.jsx)(`footer`,{className:`relative border-t border-zinc-800/30`,children:(0,z.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 py-8 text-center`,children:(0,z.jsx)(`p`,{className:`text-sm text-zinc-600`,children:`React & TanStack Öğrenme Rehberi — Türkçe, kapsamlı ve ücretsiz.`})})})]})}function hr(){return(0,z.jsx)(mr,{})}(0,u.createRoot)(document.getElementById(`root`)).render((0,z.jsx)(l.StrictMode,{children:(0,z.jsx)(hr,{})}));