export const isServiceWorker =
  'serviceWorker' in navigator && process.env.NODE_ENV !== 'development';

const initServiceWorker = () => {
  if (isServiceWorker) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw-cache.js');
    });
  }
};

export default initServiceWorker;
