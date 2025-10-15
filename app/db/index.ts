import { openDB } from 'idb';

import initialProducts from './initialData';
import { Product } from './types';

// Dane inicjalne do załadowania tylko przy pierwszym utworzeniu bazy
export const dbPromise = openDB('BluestoneDB', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('products')) {
      const store = db.createObjectStore('products', { keyPath: 'name' });

      // Załaduj dane początkowe tylko przy pierwszym utworzeniu store
      initialProducts.forEach((product) => {
        store.add(product);
      });
    }
  },
});

// Dodaj produkt
export async function addProduct(product: Product) {
  const db = await dbPromise;
  await db.put('products', product);
}

// Usuń produkt po nazwie
export async function deleteProduct(name: string) {
  const db = await dbPromise;
  await db.delete('products', name);
}

// Pobierz produkt po nazwie
export async function getProduct(name: string) {
  const db = await dbPromise;
  return db.get('products', name);
}

// Pobierz wszystkie produkty
export async function getAllProducts() {
  const db = await dbPromise;
  return db.getAll('products');
}

// Edytuj produkt (put nadpisuje istniejący)
export async function updateProduct(product: Product) {
  const db = await dbPromise;
  await db.put('products', product);
}
