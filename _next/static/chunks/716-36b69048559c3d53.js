"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{901:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(8229)._(r(2115)).default.createContext(null)},1193:(e,t)=>{function r(e){var t;let{config:r,src:n,width:i,quality:o}=e,a=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+a+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},1469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let n=r(8229),i=r(8883),o=r(3063),a=n._(r(1193));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},1974:(e,t,r)=>{r.d(t,{l:()=>U});var n=r(6168),i=r(2115),o=r(6128);let a=(e,t,r)=>{let n=t-e;return((r-e)%n+n)%n+e};var l=r(1050);function s(e,t){return(0,l.h)(e)?e[a(0,e.length,t)]:e}var u=r(9714),d=r(7333),f=r(5057);function c(e){return"object"==typeof e&&!Array.isArray(e)}var p=r(793);function g(e,t,r,n){return"string"==typeof e&&c(t)?(0,p.K)(e,r,n):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function m(e,t,r,n){return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?r:n.get(t)??e}var h=r(8720),y=r(5649);function v(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}var b=r(6917),_=r(1835),w=r(4449),j=r(8865),S=r(5538);function x(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function O(e,t){return t[e]||(t[e]=[]),t[e]}let C=e=>"number"==typeof e,P=e=>e.every(C);var E=r(2386),M=r(3330),A=r(3798),R=r(1734),z=r(9066),I=r(5915),k=r(3207);class N extends k.B{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,t){if(t in e){let r=e[t];if("string"==typeof r||"number"==typeof r)return r}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return(0,I.ge)()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}}function D(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=(0,A.x)(e)?new R.l(t):new z.M(t);r.mount(e),E.C.set(e,r)}function F(e){let t=new N({presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}});t.mount(e),E.C.set(e,t)}var T=r(2685);function L(e,t,r,n){let i=[];if((0,f.S)(e)||"number"==typeof e||"string"==typeof e&&!c(t))i.push((0,T.z)(e,c(t)&&t.default||t,r&&r.default||r));else{let o=g(e,t,n),a=o.length;(0,w.V)(!!a,"No valid elements provided.");for(let e=0;e<a;e++){let n=o[e],l=n instanceof Element?D:F;E.C.has(n)||l(n);let s=E.C.get(n),u={...r};"delay"in u&&"function"==typeof u.delay&&(u.delay=u.delay(e,a)),i.push(...(0,M.$)(s,{...t,transition:u},{}))}}return i}var V=r(3720);function B(e){return function(t,r,n){let i=[];i=Array.isArray(t)&&t.some(Array.isArray)?function(e,t,r){let n=[];return(function(e,{defaultTransition:t={},...r}={},n,i){let o=t.duration||.3,a=new Map,l=new Map,c={},p=new Map,C=0,E=0,M=0;for(let r=0;r<e.length;r++){let a=e[r];if("string"==typeof a){p.set(a,E);continue}if(!Array.isArray(a)){p.set(a.name,m(E,a.at,C,p));continue}let[v,j,z={}]=a;void 0!==z.at&&(E=m(E,z.at,C,p));let I=0,k=(e,r,n,a=0,l=0)=>{var f;let c=Array.isArray(f=e)?f:[f],{delay:p=0,times:g=(0,u.Z)(c),type:m="keyframes",repeat:v,repeatType:j,repeatDelay:x=0,...O}=r,{ease:C=t.ease||"easeOut",duration:A}=r,R="function"==typeof p?p(a,l):p,z=c.length,k=(0,b.W)(m)?m:i?.[m];if(z<=2&&k){let e=100;2===z&&P(c)&&(e=Math.abs(c[1]-c[0]));let t={...O};void 0!==A&&(t.duration=(0,S.f)(A));let r=(0,_.X)(t,e,k);C=r.ease,A=r.duration}A??(A=o);let N=E+R;1===g.length&&0===g[0]&&(g[1]=1);let D=g.length-c.length;if(D>0&&(0,d.f)(g,D),1===c.length&&c.unshift(null),v){(0,w.V)(v<20,"Repeat count too high, must be less than 20");A*=v+1;let e=[...c],t=[...g],r=[...C=Array.isArray(C)?[...C]:[C]];for(let n=0;n<v;n++){c.push(...e);for(let i=0;i<e.length;i++)g.push(t[i]+(n+1)),C.push(0===i?"linear":s(r,i-1))}for(let e=0;e<g.length;e++)g[e]=g[e]/(v+1)}let F=N+A;!function(e,t,r,n,i,o){for(let t=0;t<e.length;t++){let r=e[t];r.at>i&&r.at<o&&((0,y.Ai)(e,r),t--)}for(let a=0;a<t.length;a++)e.push({value:t[a],at:(0,h.k)(i,o,n[a]),easing:s(r,a)})}(n,c,C,g,N,F),I=Math.max(R+A,I),M=Math.max(F,M)};if((0,f.S)(v))k(j,z,O("default",x(v,l)));else{let e=g(v,j,n,c),t=e.length;for(let r=0;r<t;r++){let n=x(e[r],l);for(let e in j){var A,R;k(j[e],(A=z,R=e,A&&A[R]?{...A,...A[R]}:{...A}),O(e,n),r,t)}}}C=E,E+=I}return l.forEach((e,n)=>{for(let i in e){let o=e[i];o.sort(v);let l=[],s=[],u=[];for(let e=0;e<o.length;e++){let{at:t,value:r,easing:n}=o[e];l.push(r),s.push((0,j.q)(0,M,t)),u.push(n||"easeOut")}0!==s[0]&&(s.unshift(0),l.unshift(l[0]),u.unshift("easeInOut")),1!==s[s.length-1]&&(s.push(1),l.push(null)),a.has(n)||a.set(n,{keyframes:{},transition:{}});let d=a.get(n);d.keyframes[i]=l,d.transition[i]={...t,duration:M,ease:u,times:s,...r}}}),a})(e,t,r,{spring:o.o}).forEach(({keyframes:e,transition:t},r)=>{n.push(...L(r,e,t))}),n}(t,r,e):L(t,r,n,e);let a=new V.b(i);return e&&e.animations.push(a),a}}function U(){var e;let t=(0,n.M)(()=>({current:null,animations:[]})),r=(0,n.M)(()=>B(t));return e=()=>{t.animations.forEach(e=>e.stop())},(0,i.useEffect)(()=>()=>e(),[]),[t,r]}B()},2464:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(8229)._(r(2115)).default.createContext({})},3063:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(8229),i=r(6966),o=r(5155),a=i._(r(2115)),l=n._(r(7650)),s=n._(r(5564)),u=r(8883),d=r(5840),f=r(6752);r(3230);let c=r(901),p=n._(r(1193)),g=r(6654),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:s,decoding:u,className:d,style:f,fetchPriority:c,placeholder:p,loading:m,unoptimized:v,fill:b,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:S,sizesInput:x,onLoad:O,onError:C,...P}=e,E=(0,a.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&h(e,p,_,w,j,v,x))},[r,p,_,w,j,C,v,x]),M=(0,g.useMergedRef)(t,E);return(0,o.jsx)("img",{...P,...y(c),loading:m,width:s,height:l,decoding:u,"data-nimg":b?"fill":"1",className:d,style:f,sizes:i,srcSet:n,src:r,ref:M,onLoad:e=>{h(e.currentTarget,p,_,w,j,v,x)},onError:e=>{S(!0),"empty"!==p&&j(!0),C&&C(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(c.RouterContext),n=(0,a.useContext)(f.ImageConfigContext),i=(0,a.useMemo)(()=>{var e;let t=m||n||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:o}},[n]),{onLoad:l,onLoadingComplete:s}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[y,_]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),{props:S,meta:x}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...S,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),x.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3494:(e,t,r)=>{r.d(t,{y:()=>i});var n=r(254);function i(e=.1,{startDelay:t=0,from:r=0,ease:o}={}){return(i,a)=>{let l=e*Math.abs(("number"==typeof r?r:function(e,t){if("first"===e)return 0;{let r=t-1;return"last"===e?r:r/2}}(r,a))-i);if(o){let t=a*e;l=(0,n.K)(o)(l/t)*t}return t+l}}},5029:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(2115),i=n.useLayoutEffect,o=n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5100:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,s=i?40*i:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5564:(e,t,r)=>{var n=r(9509);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return c}});let i=r(8229),o=r(6966),a=r(5155),l=o._(r(2115)),s=i._(r(5029)),u=r(2464),d=r(2830),f=r(7544);function c(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(3230);let g=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=g.length;e<t;e++){let t=g[e];if(i.props.hasOwnProperty(t))if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,r=(0,l.useContext)(u.AmpStateContext),n=(0,l.useContext)(d.HeadManagerContext);return(0,a.jsx)(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,f.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5840:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},6752:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(8229)._(r(2115)),i=r(5840),o=n.default.createContext(i.imageConfigDefault)},6766:(e,t,r)=>{r.d(t,{default:()=>i.a});var n=r(1469),i=r.n(n)},7544:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},8883:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(3230);let n=r(5100),i=r(5840),o=["-moz-initial","fill","none","scale-down",void 0];function a(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r,s;let u,d,f,{src:c,sizes:p,unoptimized:g=!1,priority:m=!1,loading:h,className:y,quality:v,width:b,height:_,fill:w=!1,style:j,overrideSrc:S,onLoad:x,onLoadingComplete:O,placeholder:C="empty",blurDataURL:P,fetchPriority:E,decoding:M="async",layout:A,objectFit:R,objectPosition:z,lazyBoundary:I,lazyRoot:k,...N}=e,{imgConf:D,showAltText:F,blurComplete:T,defaultLoader:L}=t,V=D||i.imageConfigDefault;if("allSizes"in V)u=V;else{let e=[...V.deviceSizes,...V.imageSizes].sort((e,t)=>e-t),t=V.deviceSizes.sort((e,t)=>e-t),n=null==(r=V.qualities)?void 0:r.sort((e,t)=>e-t);u={...V,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=N.loader||L;delete N.loader,delete N.srcSet;let U="__next_img_default"in B;if(U){if("custom"===u.loader)throw Object.defineProperty(Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(A){"fill"===A&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[A];t&&!p&&(p=t)}let W="",q=l(b),G=l(_);if((s=c)&&"object"==typeof s&&(a(s)||void 0!==s.src)){let e=a(c)?c.default:c;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(d=e.blurWidth,f=e.blurHeight,P=P||e.blurDataURL,W=e.src,!w)if(q||G){if(q&&!G){let t=q/e.width;G=Math.round(e.height*t)}else if(!q&&G){let t=G/e.height;q=Math.round(e.width*t)}}else q=e.width,G=e.height}let X=!m&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:W)||c.startsWith("data:")||c.startsWith("blob:"))&&(g=!0,X=!1),u.unoptimized&&(g=!0),U&&!u.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(g=!0);let H=l(v),$=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:z}:{},F?{}:{color:"transparent"},j),J=T||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:G,blurWidth:d,blurHeight:f,blurDataURL:P||"",objectFit:$.objectFit})+'")':'url("'+C+'")',K=o.includes($.objectFit)?"fill"===$.objectFit?"100% 100%":"cover":$.objectFit,Y=J?{backgroundSize:K,backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:u,src:c,unoptimized:g,width:q,quality:H,sizes:p,loader:B});return{props:{...N,loading:X?"lazy":h,fetchPriority:E,width:q,height:G,decoding:M,className:y,style:{...$,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:S||Z.src},meta:{unoptimized:g,priority:m,placeholder:C,fill:w}}}}}]);