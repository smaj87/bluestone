import { delay } from 'utils/delay';

import { getDelayMs } from './config';
import { dbPromise } from './index';
import { Product } from './types';

/**
 * Wrapper dla operacji na bazie danych z symulacją opóźnień sieciowych
 */
async function withNetworkDelay<T>(operation: () => Promise<T>): Promise<T> {
  const delayMs = getDelayMs();

  if (delayMs > 0) {
    await delay(delayMs);
  }

  return operation();
}

/**
 * Dodaj lub zaktualizuj produkt
 */
export async function addProduct(product: Product): Promise<void> {
  return withNetworkDelay(async () => {
    const db = await dbPromise;
    await db.put('products', product);
  });
}

/**
 * Usuń produkt po nazwie
 */
export async function deleteProduct(name: string): Promise<void> {
  return withNetworkDelay(async () => {
    const db = await dbPromise;
    await db.delete('products', name);
  });
}

/**
 * Pobierz produkt po nazwie
 */
export async function getProduct(name: string): Promise<Product | undefined> {
  return withNetworkDelay(async () => {
    const db = await dbPromise;
    return db.get('products', name);
  });
}

/**
 * Pobierz wszystkie produkty
 */
export async function getAllProducts(): Promise<Product[]> {
  return withNetworkDelay(async () => {
    const db = await dbPromise;
    return db.getAll('products');
  });
}

/**
 * Edytuj produkt (put nadpisuje istniejący)
 */
export async function updateProduct(product: Product): Promise<void> {
  return withNetworkDelay(async () => {
    const db = await dbPromise;
    await db.put('products', product);
  });
}
