(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6110:function(e,t,r){"use strict";var n=r(5893),a=r(7294);t.Z=function(){return(0,a.useEffect)((function(){if(!window){var e=window.location.href.split("/"),t=e[e.length-1];console.log(t)}}),[]),(0,n.jsx)("header",{className:"bg-white dark:bg-gray-800",children:(0,n.jsx)("nav",{className:"bg-white dark:bg-gray-800",children:(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsxs)("div",{className:"flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300",children:[(0,n.jsx)("a",{href:"/",className:"border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6",children:"home"}),(0,n.jsx)("a",{href:"/online-compiler",className:"border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6",children:"Online Compiler"})]})})})})}},9917:function(e,t,r){"use strict";var n=r(3848),a=r(3115);var i=l(r(7294)),o=l(r(639)),c=r(8997),s=r(5809),d=r(7426);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}var f=new Set;var h=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,a=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(a||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,a=e.quality,i=new URL("".concat(t).concat(_(r))),o=i.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),a&&o.set("q",a.toString());return i.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,a=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(a||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(_(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(_(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"imgix"}||s.imageConfigDefault,x=v.deviceSizes,p=v.imageSizes,w=v.loader,b=v.path,y=(v.domains,[].concat(a(x),a(p)));function j(e){var t=e.src,r=e.unoptimized,n=e.layout,i=e.width,o=e.quality,c=e.sizes,s=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var d=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,i=/(^|\s)(1?\d?\d)vw/g,o=[];n=i.exec(r);n)o.push(parseInt(n[2]));if(o.length){var c=.01*Math.min.apply(Math,o);return{widths:y.filter((function(e){return e>=x[0]*c})),kind:"w"}}return{widths:y,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:x,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(i,n,c),u=d.widths,l=d.kind,m=u.length-1;return{sizes:c||"w"!==l?c:"100vw",srcSet:u.map((function(e,r){return"".concat(s({src:t,quality:o,width:e})," ").concat("w"===l?e:r+1).concat(l)})).join(", "),src:s({src:t,quality:o,width:u[m]})}}function N(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=h.get(w);if(t)return t(m({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(w))}function _(e){return"/"===e[0]?e.slice(1):e}x.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,s=a.useRef(),d=a.useState(!1),u=n(d,2),l=u[0],m=u[1],f=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||l||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,i=n.observer,o=n.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&m(e)}),{rootMargin:t}))}),[r,t,l]);return a.useEffect((function(){if(!o&&!l){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[l]),[f,l]};var a=r(7294),i=r(3447),o="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},4070:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893),a=r(6110);r(5675);var i=function(e){return(0,n.jsx)("div",{className:"bg-gray-100",children:(0,n.jsx)("div",{className:"container ",children:(0,n.jsx)("div",{className:"max-w-sm py-3",children:(0,n.jsxs)("div",{className:"bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg",children:[(0,n.jsx)("img",{className:"rounded-t-lg",style:{height:"200px"},src:e.data.cover,alt:"cover item"}),(0,n.jsxs)("div",{className:"py-2 px-4 rounded-lg bg-white",children:[(0,n.jsx)("h1",{className:"text-gray-700 font-bold text-xl hover:text-gray-900 hover:cursor-pointer",children:e.data.title}),(0,n.jsx)("button",{className:"mt-2 py-2 mb-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300",children:"Open"})]})]})})})})};var o=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{}),(0,n.jsxs)("div",{className:"container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6",children:[(0,n.jsx)("div",{className:"flex flex-col items-center w-full md:flex-row md:w-1/2",children:(0,n.jsxs)("div",{className:"max-w-lg md:mx-12 md:order-2",children:[(0,n.jsx)("h1",{className:"text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl",children:"NiceRoom"}),(0,n.jsx)("p",{className:"mt-4 text-gray-600 dark:text-gray-300",children:"Media Pembelajaran yang dibuat untuk siswa siswi SMK Negeri 1 Gresik sebagai penunjang mata pelajaran Pemrograman Dasar"}),(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsx)("a",{href:"#",className:"block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400",children:"Download from App Store"})})]})}),(0,n.jsx)("div",{className:"flex items-center justify-center w-full h-96 md:w-1/2",children:(0,n.jsx)("img",{className:"object-cover w-full h-full max-w-2xl rounded-md",src:"https://content.techgig.com/photo/80044166/everything-you-must-know-to-become-a-successful-programmer-in-2021.jpg",alt:"header"})})]}),(0,n.jsx)("div",{className:"p-10 grid md:grid-cols-4  gap-4 bg-gray-100",children:[{id:0,title:"Pendahuluan",cover:"https://thumbs.dreamstime.com/b/introduction-concept-word-cork-board-77226561.jpg"},{id:1,title:"Algoritma dan Flowchart",cover:"https://static7.depositphotos.com/1194063/684/i/600/depositphotos_6843383-stock-photo-hand-draws-flow-chart-on.jpg"},{id:2,title:"Mengenal Python",cover:"https://remakelearning.org/wp-content/uploads/2020/01/105.jpg"}].map((function(e){return(0,n.jsx)(i,{data:e},e.id)}))})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4070)}])},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},5675:function(e,t,r){r(9917)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);