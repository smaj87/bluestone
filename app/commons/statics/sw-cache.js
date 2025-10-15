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

self.addEventListener('message', (event) => {
  const { data, source } = event;

  if (data) {
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

// self.addEventListener('activate', () => {});

self.addEventListener('fetch', (event) => {
  if (
    event.request.method === 'POST' &&
    event.request.url.includes('_share_file')
  ) {
    shareFetch(event);
  }
});
