// Service worker mínimo: permite instalar la app. No guarda datos en caché;
// las incidencias siempre se leen y escriben directo en GitHub.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
