importScripts('./workbox-v4.3.1/workbox-sw.js');

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
  modulePathPrefix: './workbox-v4.3.1/'
});

// Turn on logging
workbox.setConfig({
  debug: true
});

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "82b08244eda68ea942af619a6ace954a"
  },
  {
    "url": "manifest.json",
    "revision": "38119959394e18fdfeff4674e522d70e"
  },
  {
    "url": "css/style.css",
    "revision": "34247672bb22883da4610c662502f177"
  },
  {
    "url": "js/script.js",
    "revision": "642b50d5d43035fdd1946c429f97cd6f"
  },
  {
    "url": "js/scroll.js",
    "revision": "0532c16c54e2ea31f51a6c30fd954617"
  },
  {
    "url": "main.js",
    "revision": "80846bb3403b82a07c7f84658f186b23"
  },
  {
    "url": "polyfills.js",
    "revision": "56f34b0f4d3a42d45bfdb1782adaa173"
  },
  {
    "url": "pwacompat.min.js",
    "revision": "038770ef3eb91f3e8a50a3916cb7cf28"
  },
  {
    "url": "runtime.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "update.js",
    "revision": "db409cd90d613a43e7a19c449e074441"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "1a9037bb1dc1bac36920e94df46e4428"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "c2dfb6a2bc9aa1511df490b1918e15cb"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "a813c10bb9f044b62fa730a756bdf21d"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "4bb29e118735376b51fa34b2f8a22c0a"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "5f924a04d1a05d2fef7999d30b9d481f"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "38fef0950eb2fd0654ae88a16a9ba710"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "55ae9dcbccbf411fffa9cb7040ea3491"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "8972748ef693931ae8a47e4004f6c3ab"
  }
]);

// RUNTIME CACHING

// Google fonts
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

// API with network-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
  workbox.strategies.networkFirst()
)

// API with cache-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
  workbox.strategies.cacheFirst()
)

// OTHER EVENTS

// Receive push and show a notification
self.addEventListener('push', function(event) {
  console.log('[Service Worker]: Received push event', event);
});
