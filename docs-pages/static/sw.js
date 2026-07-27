// Kill-switch Service Worker: 注销旧的 SW 并清除所有缓存
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', async () => {
  // 清除所有 Cache Storage
  const keys = await caches.keys();
  await Promise.all(keys.map(k => caches.delete(k)));
  // 注销自己
  await self.registration.unregister();
  // 强制所有客户端刷新
  const clients = await self.clients.matchAll({ type: 'window' });
  clients.forEach(c => c.navigate(c.url));
});
