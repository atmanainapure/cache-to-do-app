// Cache offline app shell. Task data is stored separately on the device.
const PREFIX = 'cache-static:' + self.registration.scope + ':';
const CACHE = PREFIX + 'atmanirbhar-v1';
const FILES = ["index.html","app.f0a5e487e8eb.js","styles.f6b14da875bd.css","manifest.webmanifest","favicon.svg","icon-192.png","icon-512.png","icon-maskable.png"];
const urls = FILES.map(file => new URL(file, self.registration.scope).href);
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(urls))); });
self.addEventListener('activate', event => { event.waitUntil((async () => {
  const names=await caches.keys();
  await Promise.all(names.filter(name=>name.startsWith(PREFIX)&&name!==CACHE).map(name=>caches.delete(name)));
  await self.clients.claim();
})()); });
self.addEventListener('fetch', event => {
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url),base=new URL(self.registration.scope);
  if(url.origin!==base.origin||!url.pathname.startsWith(base.pathname))return;
  const clean=url.origin+url.pathname;
  if(request.mode==='navigate'&&(clean===base.href||clean===new URL('index.html',base).href)){
    event.respondWith(fetch(request).then(response=>{if(!response.ok)throw new Error('Unavailable');return response}).catch(async()=>{
      const fallback=await (await caches.open(CACHE)).match(new URL('index.html',base).href);
      return fallback||new Response('Open Cache once while online to finish offline setup.',{status:503,headers:{'Content-Type':'text/plain'}});
    }));return;
  }
  if(urls.includes(clean))event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(clean))||fetch(request)));
});
