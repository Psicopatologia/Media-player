const VERSION = "v1";

self.addEventListener('install', event => {
    event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if (request.method !== "GET") {
        return;
    }

    // Search on cache
    event.respondWith(cachedResponse(request));

    // Update cache
    event.waitUntil(updateCache(request));
})

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/js/index.js',
        '/js/MediaPlayer.js',
        '/js/plugins/AutoPlay.js',
        '/js/plugins/AutoPause.js',
        '/css/index.css',
        '/media/pexels-tima-miroshnichenko-5452674.mp4',
    ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = fetch(request);
    return cache.put(request, response)
}