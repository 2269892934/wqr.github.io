if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const s=e=>r(e,c),n={module:{uri:c},exports:f,require:s};i[c]=Promise.all(d.map((e=>n[e]||s(e)))).then((e=>(a(...e),f)))}}define(["./workbox-77824c33"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/07/25/vConsole的使用/index.html",revision:"723186fb7151706d5c74a8dab908e75f"},{url:"2023/07/30/javascript-advanced1/index.html",revision:"a1f6c8246ffc473c47eb3162076a9840"},{url:"2023/08/14/记一次项目过程中遇到的错误/index.html",revision:"6d07b69f07d35dfd2aa42bb5e81200d3"},{url:"2023/09/05/git报错问题记录/index.html",revision:"92a9df4a892f8fc0cd70282584bcfdfa"},{url:"2023/09/05/wow动画/index.html",revision:"a29a9b90e91d1f0d3ffb49595b16b28a"},{url:"404.html",revision:"40a923467a13e3dc077aae8cca050382"},{url:"about/index.html",revision:"5abb633b66f787ffe7d7a4f1603e1ebd"},{url:"archives/2023/07/index.html",revision:"b1368ea5437ec6a82a3efa1c097c3996"},{url:"archives/2023/08/index.html",revision:"2496bc130fc0f3ed0d07fb4036da0fa7"},{url:"archives/2023/09/index.html",revision:"5af82a46efaf6ba31a7b1afc762baf45"},{url:"archives/2023/index.html",revision:"00d00bfce7b51a856521d5bf8f7c0e2b"},{url:"archives/index.html",revision:"69be2c0bc27921f3ae4da4bdc82d3925"},{url:"categories/index.html",revision:"0859596dcee6bcb9258dfdb6ebce38e0"},{url:"categories/web/index.html",revision:"7007921fac75e12a53c8e4bd89fb41e6"},{url:"css/index.css",revision:"07bd2746f43a4379ee5cf2c2e1da2e84"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"99ba58710c2205a716c697d997340c96"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wx内置jsapi.png",revision:"87550173465db2cda203202386c3cf4b"},{url:"index.html",revision:"d9c94f100a0f88a446c982f9926f4f15"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"61dc666cd9edb02be1d4166dc43392bf"},{url:"picture/index.html",revision:"9b69fd9bf941cb4575a8f00beb36bd7a"},{url:"picture/wechatError.png",revision:"87550173465db2cda203202386c3cf4b"},{url:"tags/error/index.html",revision:"7f89308b3ea6607ec0d2b683d72c24fa"},{url:"tags/git/index.html",revision:"1bed12488a60046248d69b91e4496a9f"},{url:"tags/index.html",revision:"f8c19cb1c8762f4338f2226f7e88cefd"},{url:"tags/javascript/index.html",revision:"ea505963b6ccdbcf484d6774f165657b"},{url:"tags/js动画/index.html",revision:"e8ca2cea8ed58d3490f7b0ae0d439911"},{url:"tags/vConsole/index.html",revision:"8c5075088e972dfb67a0fb0b57919f56"}],{})}));
//# sourceMappingURL=service-worker.js.map
