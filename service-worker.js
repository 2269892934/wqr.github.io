if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const f=e=>d(e,a),n={module:{uri:a},exports:s,require:f};i[a]=Promise.all(r.map((e=>n[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-77824c33"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/07/25/hello-world/index.html",revision:"3fa142b8ae31aeeffd0652924ad3b286"},{url:"2023/07/25/vConsole的使用/index.html",revision:"62c2356d4d5352452f089ba02793de9d"},{url:"2023/07/30/javascript-advanced1/index.html",revision:"fde0fd0b45eeda77e87b6bad7789a6ee"},{url:"404.html",revision:"ae46ebe9d13a7f99f684c3d5fd29a1fa"},{url:"about/index.html",revision:"22e883d7bd8658b3f176f7039440bfd2"},{url:"archives/2023/07/index.html",revision:"cf8e3d356416da1676f77fbf5b439caa"},{url:"archives/2023/index.html",revision:"4e8a7bc26217c7689bca622d29d7b5ce"},{url:"archives/index.html",revision:"75004a8d801111297023eece0b688009"},{url:"categories/index.html",revision:"f911c20b9cab9292a3c66a2c9569d069"},{url:"categories/web/index.html",revision:"e829b1c2564e2606ac709c355a4a7fe4"},{url:"css/index.css",revision:"07bd2746f43a4379ee5cf2c2e1da2e84"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"99ba58710c2205a716c697d997340c96"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"1050a6d102336042a8dfcb5d5a117154"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"65029b231ff77a467e3cbdfe9bf5493c"},{url:"picture/index.html",revision:"86a8bc6cab6d832b253b2d71f789d5ff"},{url:"tags/index.html",revision:"3ef7c30b5113866b2af9db37541ce609"},{url:"tags/javascript/index.html",revision:"0ce7636e3c23db4c0c403b2b7107a36f"},{url:"tags/vConsole/index.html",revision:"f2e8591f6589c4c0ac41c4515a5c2fb2"}],{})}));
//# sourceMappingURL=service-worker.js.map
