(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{920:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9946).A)("mails",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]])},1284:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9946).A)("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},1465:(e,t,r)=>{"use strict";r.d(t,{G:()=>p});var n=r(5853);let o=e=>e&&"object"==typeof e&&e.mix,a=e=>o(e)?e.mix:void 0;var i=r(6168),u=r(9025),l=r(2942),s=r(6182);function c(e,t){let r=(0,l.d)(t()),n=()=>r.set(t());return n(),(0,u.E)(()=>{let t=()=>s.Gt.preRender(n,!1,!0),r=e.map(e=>e.on("change",t));return()=>{r.forEach(e=>e()),(0,s.WG)(n)}}),r}var f=r(9967);function p(e,t,r,o){if("function"==typeof e){f.bt.current=[],e();let t=c(f.bt.current,e);return f.bt.current=void 0,t}let i="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),r=t?0:-1,o=e[0+r],i=e[1+r],u=e[2+r],l=e[3+r],s=(0,n.G)(i,u,{mixer:a(u[0]),...l});return t?s(o):s}(t,r,o);return Array.isArray(e)?d(e,i):d([e],([e])=>i(e))}function d(e,t){let r=(0,i.M)(()=>[]);return c(e,()=>{r.length=0;let n=e.length;for(let t=0;t<n;t++)r[t]=e[t].get();return t(r)})}},1979:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9946).A)("laptop-minimal-check",[["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2",key:"8ur36m"}]])},2332:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9946).A)("file-code",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]])},2664:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=r(9991),o=r(7102);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},2757:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return u},urlObjectKeys:function(){return i}});let n=r(6966)._(r(8859)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",i=e.pathname||"",u=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+a+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return a(e)}},2942:(e,t,r)=>{"use strict";r.d(t,{d:()=>u});var n=r(2115),o=r(7471),a=r(6168),i=r(9967);function u(e){let t=(0,a.M)(()=>(0,i.OQ)(e)),{isStatic:r}=(0,n.useContext)(o.Q);if(r){let[,r]=(0,n.useState)(e);(0,n.useEffect)(()=>t.on("change",r),[])}return t}},3180:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},3509:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9946).A)("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},3789:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(2115),o={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}},a=((e,t,r,a)=>{let i=(0,n.forwardRef)((r,i)=>{let{color:u="currentColor",size:l=24,stroke:s=2,title:c,className:f,children:p,...d}=r;return(0,n.createElement)("svg",{ref:i,...o[e],width:l,height:l,className:["tabler-icon","tabler-icon-".concat(t),f].join(" "),..."filled"===e?{fill:u}:{strokeWidth:s,stroke:u},...d},[c&&(0,n.createElement)("title",{key:"svg-title"},c),...a.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(p)?p:[p]])});return i.displayName="".concat(r),i})("outline","layout-navbar-collapse","IconLayoutNavbarCollapse",[["path",{d:"M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M4 9h16",key:"svg-1"}],["path",{d:"M10 16l2 -2l2 2",key:"svg-2"}]])},3943:(e,t,r)=>{"use strict";r.d(t,{z:()=>p});var n=r(2115),o=r(9431),a=r(7471),i=r(6168),u=r(9025),l=r(2942),s=r(5057),c=r(1116),f=r(6182);function p(e,t={}){let{isStatic:r}=(0,n.useContext)(a.Q),h=(0,n.useRef)(null),y=(0,i.M)(()=>(0,s.S)(e)?e.get():e),g=(0,i.M)(()=>"string"==typeof y?y.replace(/[\d.-]/g,""):void 0),m=(0,l.d)(y),v=(0,n.useRef)(y),b=(0,n.useRef)(c.l),k=()=>{A(),h.current=(0,o.L)({keyframes:[d(m.get()),d(v.current)],velocity:m.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:b.current})},A=()=>{h.current&&h.current.stop()};return(0,n.useInsertionEffect)(()=>m.attach((e,t)=>r?t(e):(v.current=e,b.current=e=>{var r,n;return t((r=e,(n=g)?r+n:r))},f.Gt.postRender(k),m.get()),A),[JSON.stringify(t)]),(0,u.E)(()=>{if((0,s.S)(e))return e.on("change",e=>{var t,r;return m.set((t=e,(r=g)?t+r:t))})},[m,g]),m}function d(e){return"number"==typeof e?e:parseFloat(e)}},4147:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_e79375",variable:"__variable_e79375"}},6874:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},useLinkStatus:function(){return v}});let n=r(6966),o=r(5155),a=n._(r(2115)),i=r(2757),u=r(5227),l=r(9818),s=r(6654),c=r(9991),f=r(5929);r(3230);let p=r(4930),d=r(2664),h=r(6634);function y(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}function g(e){let t,r,n,[i,g]=(0,a.useOptimistic)(p.IDLE_LINK_STATUS),v=(0,a.useRef)(null),{href:b,as:k,children:A,prefetch:w=null,passHref:x,replace:_,shallow:E,scroll:M,onClick:N,onMouseEnter:P,onTouchStart:C,legacyBehavior:j=!1,onNavigate:O,ref:L,unstable_dynamicOnHover:S,...T}=e;t=A,j&&("string"==typeof t||"number"==typeof t)&&(t=(0,o.jsx)("a",{children:t}));let R=a.default.useContext(u.AppRouterContext),U=!1!==w,I=null===w?l.PrefetchKind.AUTO:l.PrefetchKind.FULL,{href:F,as:z}=a.default.useMemo(()=>{let e=y(b);return{href:e,as:k?y(k):e}},[b,k]);j&&(r=a.default.Children.only(t));let D=j?r&&"object"==typeof r&&r.ref:L,G=a.default.useCallback(e=>(null!==R&&(v.current=(0,p.mountLinkInstance)(e,F,R,I,U,g)),()=>{v.current&&((0,p.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,p.unmountPrefetchableInstance)(e)}),[U,F,R,I,g]),B={ref:(0,s.useMergedRef)(G,D),onClick(e){j||"function"!=typeof N||N(e),j&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&(e.defaultPrevented||function(e,t,r,n,o,i,u){let{nodeName:l}=e.currentTarget;if(!("A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||e.currentTarget.hasAttribute("download"))){if(!(0,d.isLocalURL)(t)){o&&(e.preventDefault(),location.replace(t));return}e.preventDefault(),a.default.startTransition(()=>{if(u){let e=!1;if(u({preventDefault:()=>{e=!0}}),e)return}(0,h.dispatchNavigateAction)(r||t,o?"replace":"push",null==i||i,n.current)})}}(e,F,z,v,_,M,O))},onMouseEnter(e){j||"function"!=typeof P||P(e),j&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&U&&(0,p.onNavigationIntent)(e.currentTarget,!0===S)},onTouchStart:function(e){j||"function"!=typeof C||C(e),j&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&U&&(0,p.onNavigationIntent)(e.currentTarget,!0===S)}};return(0,c.isAbsoluteUrl)(z)?B.href=z:j&&!x&&("a"!==r.type||"href"in r.props)||(B.href=(0,f.addBasePath)(z)),n=j?a.default.cloneElement(r,B):(0,o.jsx)("a",{...T,...B,children:t}),(0,o.jsx)(m.Provider,{value:i,children:n})}r(3180);let m=(0,a.createContext)(p.IDLE_LINK_STATUS),v=()=>(0,a.useContext)(m);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7576:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9946).A)("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]])},8489:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_d7949c",variable:"__variable_d7949c"}},8859:(e,t)=>{"use strict";function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},9717:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9946).A)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},9946:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),i=e=>{let t=a(e);return t.charAt(0).toUpperCase()+t.slice(1)},u=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:s="",children:c,iconNode:f,...p}=e;return(0,n.createElement)("svg",{ref:t,...l,width:o,height:o,stroke:r,strokeWidth:i?24*Number(a)/Number(o):a,className:u("lucide",s),...p},[...f.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),c=(e,t)=>{let r=(0,n.forwardRef)((r,a)=>{let{className:l,...c}=r;return(0,n.createElement)(s,{ref:a,iconNode:t,className:u("lucide-".concat(o(i(e))),"lucide-".concat(e),l),...c})});return r.displayName=i(e),r}},9991:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return m},NormalizeError:function(){return y},PageNotFoundError:function(){return g},SP:function(){return p},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return i},getURL:function(){return u},isAbsoluteUrl:function(){return a},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return b}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function u(){let{href:e}=window.location,t=i();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Object.defineProperty(Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);