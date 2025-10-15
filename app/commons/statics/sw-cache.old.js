/* eslint-disable no-restricted-globals */
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {
  CacheFirst,
  NetworkFirst,
  StaleWhileRevalidate,
} from 'workbox-strategies';

const DAY_IN_SECONDS = 24 * 60 * 60;
const MONTH_IN_SECONDS = DAY_IN_SECONDS * 30;
const YEAR_IN_SECONDS = DAY_IN_SECONDS * 365;

const GOOGLE_FONTS_STYLESHEETS_CACHE_NAME = 'google-fonts-stylesheets';
const GOOGLE_FONTS_WEBFONTS_CACHE_NAME = 'google-fonts-webfonts';
const FONTS_CACHE_NAME = 'onet-fonts';
const DOCUMENT_CACHE_NAME = 'onet-document';
const IMAGE_CACHE_NAME = 'onet-images';
const JAVASCRIPT_CACHE_NAME = 'onet-js';
const API_FETCH_CACHE_NAME = 'onet-api-fetch';

let isStandalone = false;

const isMoreThan90DaysAgo = (dateTime) => {
  const ninetyDaysInMs = 90 * 24 * 60 * 60 * 1000;
  const timestampNinetyDaysInMsDaysAgo = new Date().getTime() - ninetyDaysInMs;

  if (timestampNinetyDaysInMsDaysAgo > dateTime) {
    return true;
  }

  return false;
};

const isRequestToCache = (event) => {
  const isGazetaApiRequest = !!event.request.url.match(
    /^https?:\/\/(download\.)?poczta\.gazeta\.pl\/((webmail|contacts|settings|calendar)api|api)/gi,
  );

  const isOnetApiRequest = !!event.request.url.match(
    /^https:\/\/(api\.)?\w+\.onet\.pl\/(api|webmailapi|settingsapi|calendarapi|contactsapi)/gi,
  );

  const isApiRequest = isGazetaApiRequest || isOnetApiRequest;

  return isApiRequest && isStandalone && event.request.method === 'GET';
};

// Clean outdated cache
cleanupOutdatedCaches();

// Precaching local static files
const assetsToCache = self.__WB_MANIFEST || [];
precacheAndRoute(assetsToCache);

/*
 * Mobile sharing files functionality
 */
let sharedFiles = [];
const saveSharedFiles = (files) => {
  sharedFiles = files;
};
export const shareFetch = (event) => {
  const url = new URL(event.request.url);
  event.respondWith(Response.redirect(url.origin, 302));

  event.waitUntil(
    event.request.formData().then((data) => {
      const files = data.getAll('shared');
      if (files.length) {
        saveSharedFiles(files);
      }

      return true;
    }),
  );
};

// Used to activate new sw after app changed
self.addEventListener('install', () => {
  self.skipWaiting();
});

// Get isStandalone variable from app
self.addEventListener('message', (event) => {
  const { data, source } = event;

  if (data) {
    if (data.isStandalone !== undefined) {
      // eslint-disable-next-line prefer-destructuring
      isStandalone = data.isStandalone;
    }

    if (data.action === 'init') {
      // Remove request cache if non standalone version
      caches.open(API_FETCH_CACHE_NAME).then((cache) => {
        cache.keys().then((requests) => {
          requests.forEach((request) => {
            if (!isStandalone) {
              cache.delete(request);
            }
          });
        });
      });
    }

    if (data.action === 'appReady') {
      if (sharedFiles && sharedFiles.length > 0) {
        source.postMessage({
          files: sharedFiles,
          action: 'sharedFiles',
        });
      }
    }

    if (data.action === 'clearShared') {
      sharedFiles = [];
    }
  }
});

self.addEventListener('activate', () => {
  // Remove outdated fetch cache
  caches.open(API_FETCH_CACHE_NAME).then((cache) => {
    cache.keys().then((requests) => {
      requests.forEach((request) => {
        caches.match(request).then((responseCache) => {
          const datetime = responseCache?.headers?.get?.('date') || '';

          if (datetime && isMoreThan90DaysAgo(datetime)) {
            cache.delete(request);
          }
        });
      });
    });
  });

  // Remove unused precache files
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      if (cacheName.includes('workbox-precache')) {
        caches.open(cacheName).then((cache) => {
          cache.keys().then((requests) => {
            requests.forEach((request) => {
              const precacheIncludesRequestUrl = assetsToCache.findIndex(
                ({ url }) => request.url.includes(url),
              );
              if (precacheIncludesRequestUrl === -1) {
                cache.delete(request);
              }
            });
          });
        });
      }
    });
  });
});

registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: GOOGLE_FONTS_STYLESHEETS_CACHE_NAME,
  }),
);

registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new CacheFirst({
    cacheName: GOOGLE_FONTS_WEBFONTS_CACHE_NAME,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: YEAR_IN_SECONDS,
        maxEntries: 10,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

registerRoute(
  /\.(?:woff|woff2|ttf|otf)$/,
  new CacheFirst({
    cacheName: FONTS_CACHE_NAME,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: YEAR_IN_SECONDS,
        maxEntries: 10,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

registerRoute(
  /(^https:\/\/ocdn\.eu\/pocztastatic\/(pocztareact|gazetareact)\/|https:\/\/\w+\.(onet|gazeta)\.pl(\/\w+)?\/assets|.*localhost.*).*\.(js|css)/,
  new CacheFirst({
    cacheName: JAVASCRIPT_CACHE_NAME,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: YEAR_IN_SECONDS,
        maxEntries: 100,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
  new CacheFirst({
    cacheName: IMAGE_CACHE_NAME,
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: MONTH_IN_SECONDS,
        maxEntries: 100,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst({
    cacheName: DOCUMENT_CACHE_NAME,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: YEAR_IN_SECONDS,
        maxEntries: 100,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

self.addEventListener('fetch', (event) => {
  if (
    event.request.method === 'POST' &&
    event.request.url.includes('_share_file')
  ) {
    shareFetch(event);
  } else if (isRequestToCache(event)) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const copy = networkResponse.clone();

          event.waitUntil(
            caches.open(API_FETCH_CACHE_NAME).then((cache) => {
              const headers = new Headers(copy.headers);
              headers.append('date', new Date().getTime());

              return copy.blob().then((body) =>
                cache.put(
                  event.request,
                  new Response(body, {
                    status: copy.status,
                    statusText: copy.statusText,
                    headers,
                  }),
                ),
              );
            }),
          );

          return networkResponse;
        })
        .catch(() => caches.match(event.request)),
    );
  }
});
