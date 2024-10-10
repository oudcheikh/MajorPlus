/* eslint-disable no-restricted-globals */

// Importation des modules Workbox nécessaires
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';

clientsClaim();

// Version du cache - augmentez cette valeur à chaque mise à jour de contenu
const CURRENT_CACHE = 'precache-v2';

// Precache les ressources statiques
precacheAndRoute(self.__WB_MANIFEST);

// Route App Shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }) => {
    if (request.mode !== 'navigate') {
      return false;
    }
    if (url.pathname.startsWith('/_')) {
      return false;
    }
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// Caching dynamique pour les images
registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// Skip waiting and claim clients immediately after the new service worker is activated
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CURRENT_CACHE) {
            console.log('Service Worker: clearing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
  self.skipWaiting();
});

// Listener pour les messages de mise à jour
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Gestionnaire pour mise à jour des données dynamiques
registerRoute(
  // Match pour des requêtes spécifiques ou types de fichiers
  ({ url }) => url.origin === self.location.origin && url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-data',
    networkTimeoutSeconds: 3, // Répondre rapidement avec des données du cache si le réseau est lent
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24, // 1 jour
      }),
    ],
  })
);

// Logique personnalisée ou supplémentaire peut être ajoutée ici
