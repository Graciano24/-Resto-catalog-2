if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const a=e=>n(e,o),f={module:{uri:o},exports:s,require:a};i[o]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(c(...e),s)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"7d2905ff7d31029c0ef7f615553fa6ed"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"0da44e1767752ef929b3697bffd5351c"},{url:"data/data.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.ico",revision:"7e25626802417a0020b2fb711e68d627"},{url:"favicon.png",revision:"8585675b832044be9806244863a51849"},{url:"icons/Frame 6.png",revision:"bf5c0462443c2d5205a9ab9c420fcc8a"},{url:"icons/apple-touch-icon.png",revision:"7d7eb4930774953c4f521df9ead92562"},{url:"icons/icon-128x128.png",revision:"ca7b7198181f7af30b1d8b54499fb803"},{url:"icons/icon-144x144.png",revision:"c7a43de2a73a7875232149aa45e029f6"},{url:"icons/icon-152x152.png",revision:"df3b3727ab1347ff9306cf48a715e6b8"},{url:"icons/icon-1920x1080.png",revision:"d8d23afcc7f02e17673c9036915075c7"},{url:"icons/icon-192x192.png",revision:"480c9cd8e12fb60e79ea2c844a802d56"},{url:"icons/icon-384x384.png",revision:"8080bc1d265bec3394c49d46491fefbe"},{url:"icons/icon-512x512.png",revision:"71a0b5078e3ab18e96a2311b564f6518"},{url:"icons/icon-72x72.png",revision:"fdb76641099744b502f62a2dd8b3ec84"},{url:"icons/icon-96x96.png",revision:"999f40a9a5c719e53d263c8c8091bd24"},{url:"images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"d10e2b130e8c09186e1ee4f9e37b7e1d"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"Wolf-restauran",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/small/")),new e.StaleWhileRevalidate({cacheName:"Wolf-restauran-img-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
