// Terrakotta fuvarnapló — nem tárol semmit, csak a telepítéshez kell.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
