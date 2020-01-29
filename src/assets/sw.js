importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

self.addEventListener("install", event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

workbox.routing.registerRoute(/.+\.js$/, new workbox.strategies.NetworkFirst());
workbox.routing.registerRoute(
  /.+\.mp3$/,
  new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
  /.+\.png$/,
  new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
  /.+\.ttf$/,
  new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
  /.+\.css$/,
  new workbox.strategies.StaleWhileRevalidate()
);
