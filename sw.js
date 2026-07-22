const CACHE_NAME = 'altavela-v3';
const URLS = [
  './',
  './index.html',
  './calc-pontos.html',
  './calc-emissao.html',
  './comparativo.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// dados.json: sempre busca da rede primeiro (sem cache — são dados que mudam)
// HTMLs: cache-first (estáticos — só mudam quando você faz upload)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // dados.json = sempre rede, sem cache
  if (url.pathname.endsWith('dados.json')) {
    event.respondWith(
      fetch(event.request).catch(() => new Response('{}', {headers:{'Content-Type':'application/json'}}))
    );
    return;
  }
  
  // Todo o resto: cache-first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
