(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9917:function(e,t,n){"use strict";var r=n(3848),i=n(3115);var o=d(n(7294)),a=d(n(639)),c=n(8997),s=n(5809),u=n(7426);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}var m=new Set;var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(S(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function p(e){return void 0!==e.default}var _={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"imgix"}||s.imageConfigDefault,g=_.deviceSizes,v=_.imageSizes,x=_.loader,w=_.path,j=(_.domains,[].concat(i(g),i(v)));function b(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,a=[];r=o.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:j.filter((function(e){return e>=g[0]*c})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:g,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return j.find((function(t){return t>=e}))||j[j.length-1]})))),kind:"x"}}(o,r,c),l=u.widths,d=u.kind,f=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:l[f]})}}function y(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function N(e){var t=h.get(x);if(t)return t(f({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(x))}function S(e){return"/"===e[0]?e.slice(1):e}g.sort((function(e,t){return e-t})),j.sort((function(e,t){return e-t}))},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=i.useRef(),u=i.useState(!1),l=r(u,2),d=l[0],f=l[1],m=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return i.useEffect((function(){if(!a&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[m,d]};var i=n(7294),o=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},6124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=n(9008),o=(n(5675),n(4476)),a=n.n(o);function c(){return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Hello world"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:a().main,children:[(0,r.jsxs)("h1",{className:a().title,children:["Welcome to ",(0,r.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,r.jsxs)("p",{className:a().description,children:["Get started by editing"," ",(0,r.jsx)("code",{className:a().code,children:"pages/index.js"})]}),(0,r.jsxs)("div",{className:a().grid,children:[(0,r.jsxs)("a",{href:"https://nextjs.org/docs",className:a().card,children:[(0,r.jsx)("h2",{children:"Documentation \u2192"}),(0,r.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,r.jsxs)("a",{href:"https://nextjs.org/learn",className:a().card,children:[(0,r.jsx)("h2",{children:"Learn \u2192"}),(0,r.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,r.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:a().card,children:[(0,r.jsx)("h2",{children:"Examples \u2192"}),(0,r.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,r.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:a().card,children:[(0,r.jsx)("h2",{children:"Deploy \u2192"}),(0,r.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,r.jsx)("footer",{className:a().footer,children:(0,r.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,r.jsx)("span",{className:a().logo})]})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){n(9917)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);