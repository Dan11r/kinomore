if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-2780d724"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/0Wh2tpB1Q5vr3pIlC9cw2/_buildManifest.js",revision:"37fbd1d5f5b3dc65b14f91676bf82d0c"},{url:"/_next/static/0Wh2tpB1Q5vr3pIlC9cw2/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/0Wh2tpB1Q5vr3pIlC9cw2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/162-6eaff3de6b876e2d.js",revision:"6eaff3de6b876e2d"},{url:"/_next/static/chunks/1a48c3c1-50dc31aac088341e.js",revision:"50dc31aac088341e"},{url:"/_next/static/chunks/518.056ea5c984d1a55d.js",revision:"056ea5c984d1a55d"},{url:"/_next/static/chunks/535.6f6bd2b0e291e1e3.js",revision:"6f6bd2b0e291e1e3"},{url:"/_next/static/chunks/611-f38e18e908101657.js",revision:"f38e18e908101657"},{url:"/_next/static/chunks/626-0bf4f9af48a529c3.js",revision:"0bf4f9af48a529c3"},{url:"/_next/static/chunks/675-e40231bb45ccbcbc.js",revision:"e40231bb45ccbcbc"},{url:"/_next/static/chunks/75fc9c18-289ba7b5fb63f228.js",revision:"289ba7b5fb63f228"},{url:"/_next/static/chunks/894.884bc9854a9cfe85.js",revision:"884bc9854a9cfe85"},{url:"/_next/static/chunks/913-a74ecdc4f45e0195.js",revision:"a74ecdc4f45e0195"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-21fbc9a5ad2df4ee.js",revision:"21fbc9a5ad2df4ee"},{url:"/_next/static/chunks/pages/404-933d2dd110965bb9.js",revision:"933d2dd110965bb9"},{url:"/_next/static/chunks/pages/_app-8be03c592f9fb53d.js",revision:"8be03c592f9fb53d"},{url:"/_next/static/chunks/pages/_error-815e492bede44f3e.js",revision:"815e492bede44f3e"},{url:"/_next/static/chunks/pages/auth-120bfcf84bede819.js",revision:"120bfcf84bede819"},{url:"/_next/static/chunks/pages/cartoons-c5e9552aaa558229.js",revision:"c5e9552aaa558229"},{url:"/_next/static/chunks/pages/favorites-98052d02617c3571.js",revision:"98052d02617c3571"},{url:"/_next/static/chunks/pages/film/%5Bid%5D-1e126d66cbc62bc8.js",revision:"1e126d66cbc62bc8"},{url:"/_next/static/chunks/pages/films-f5494d763ef727aa.js",revision:"f5494d763ef727aa"},{url:"/_next/static/chunks/pages/index-609f7c727bea77d5.js",revision:"609f7c727bea77d5"},{url:"/_next/static/chunks/pages/name/%5Bid%5D-a23a7d618c6ff929.js",revision:"a23a7d618c6ff929"},{url:"/_next/static/chunks/pages/room/%5Bid%5D-ee16a7d7e7463b97.js",revision:"ee16a7d7e7463b97"},{url:"/_next/static/chunks/pages/search/%5Bid%5D-6bda513483854174.js",revision:"6bda513483854174"},{url:"/_next/static/chunks/pages/series-d2849e15f67d10b7.js",revision:"d2849e15f67d10b7"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-7478ea321cfb5d10.js",revision:"7478ea321cfb5d10"},{url:"/_next/static/css/0ea8ba373ce2eb5e.css",revision:"0ea8ba373ce2eb5e"},{url:"/_next/static/css/6c3eb1d0f3612ced.css",revision:"6c3eb1d0f3612ced"},{url:"/_next/static/css/8a298244239062be.css",revision:"8a298244239062be"},{url:"/_next/static/css/b1e4879ab0685961.css",revision:"b1e4879ab0685961"},{url:"/_next/static/css/b93c867db696e4a2.css",revision:"b93c867db696e4a2"},{url:"/_next/static/css/bcf2ad564488211d.css",revision:"bcf2ad564488211d"},{url:"/_next/static/css/c20fbc6034a2eea6.css",revision:"c20fbc6034a2eea6"},{url:"/_next/static/css/fbdfbb6f2cbbe7f0.css",revision:"fbdfbb6f2cbbe7f0"},{url:"/favicon.ico",revision:"34ee9ed99273b178cfaab99b1fbc4d6a"},{url:"/fonts/FiraSans-Bold.woff2",revision:"07b9daf36cfedbb07b47c1eed9921763"},{url:"/fonts/FiraSans-ExtraBold.woff2",revision:"84e01280cf056a4198d6c14b2f8db407"},{url:"/fonts/FiraSans-Light.woff2",revision:"c2ece2ce8559a936160dd98c0747c9b2"},{url:"/fonts/FiraSans-Medium.woff2",revision:"3392354b6a7a83ac879b2dd4e258e7e1"},{url:"/fonts/FiraSans-Regular.woff2",revision:"44af09a058cd81661fc93376ee5d8f34"},{url:"/fonts/FiraSans-SemiBold.woff2",revision:"0b6a215f82eda2e94a2734e24a3924df"},{url:"/icons/icon-128x128.png",revision:"ed71efe8c1e31e605897c4e0171f83f6"},{url:"/icons/icon-144x144.png",revision:"d9a869458a89e798459710e7a8028246"},{url:"/icons/icon-152x152.png",revision:"0dedc3071c2c73f0bda7b593f6558f15"},{url:"/icons/icon-192x192.png",revision:"0ce8446c4ac510e59c6d5ca0900db6fb"},{url:"/icons/icon-384x384.png",revision:"6057c09d0bbd6a8a4215d7ddfb051c6a"},{url:"/icons/icon-512x512.png",revision:"3650a08a216920abf8dd8d95cba53918"},{url:"/icons/icon-72x72.png",revision:"1deefc2ceb464b17a8627e38551cd2b3"},{url:"/icons/icon-96x96.png",revision:"d53dc757ae185536c1a84ff46eddd0d0"},{url:"/logo.svg",revision:"83db41f04e69d7689d1e6ca74e6fda64"},{url:"/manifest.json",revision:"ed085b71e6220b327b4b98a7268b67bb"},{url:"/trailer.mp4",revision:"d6176db411467b57ee46707729152039"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
