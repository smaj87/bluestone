import { openDB } from 'idb';

import initialProducts from './initialData';

// Dane inicjalne do załadowania tylko przy pierwszym utworzeniu bazy
export const dbPromise = openDB('BluestoneDB', 1, {
  async upgrade(db) {
    if (!db.objectStoreNames.contains('products')) {
      const store = db.createObjectStore('products', { keyPath: 'name' });

      // Dodaj wszystkie produkty równolegle w ramach tej samej transakcji
      await Promise.all(initialProducts.map((product) => store.add(product)));
    }
  },
});
