// Keeps the app opening when the internet is down. Network first, so a new
// version always wins when online; the saved copy is used only as a fallback.
var CACHE = "aspire-app-v1";
self.addEventListener("install", function (e) { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var own = url.origin === self.location.origin;
  var lib = url.hostname === "www.gstatic.com" || url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!own && !lib) return;
  e.respondWith(fetch(req).then(function (res) {
    if (res && (res.ok || res.type === "opaque")) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: own }).then(function (hit) { return hit || (req.mode === "navigate" ? caches.match("./") : Response.error()); });
  }));
});
