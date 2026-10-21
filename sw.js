// 离线缓存：应用文件预先缓存；Google 字体首次在线打开时缓存，之后离线可用。
// 每次修改 index.html 后把 VERSION 改一下，用户下次打开就会拿到新版本。
const VERSION = "2026.10.21";
const APP = "acu-app-" + VERSION;
const FONTS = "acu-fonts-v1";
const SHELL = ["./", "index.html", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(APP).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith("acu-app-") && k !== APP).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(FONTS).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      try { const res = await fetch(req); if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }
      catch (err) { return new Response("", { status: 504 }); }
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  if (req.mode === "navigate") {
    // 页面：优先网络（拿到新版），离线时用缓存
    e.respondWith(fetch(req).then(res => { const cp = res.clone(); caches.open(APP).then(c => c.put("index.html", cp)); return res; })
      .catch(() => caches.match("index.html", { ignoreSearch: true })));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(APP).then(c => c.put(req, cp)); }
    return res;
  })));
});
