import { getProduct } from 'db/services';
import { Product } from 'db/types';

import { Group, VirtualizationResult } from './types';

export const getProductsForVirtualization = (
  products: Product[],
  groupCount: number,
  itemHeight: number,
): VirtualizationResult => {
  const productsMap: { [name: string]: Product } = {};
  const groups: Group[] = [];

  let currentGroup: Group = {
    id: 1,
    items: [],
    height: 0,
  };

  products.forEach((product, index) => {
    productsMap[product.name] = product;
    currentGroup.items.push(product.name);
    currentGroup.height += itemHeight;

    if ((index + 1) % groupCount === 0 || index === products.length - 1) {
      groups.push(currentGroup);
      currentGroup = {
        id: currentGroup.id + 1,
        items: [],
        height: 0,
      };
    }
  });

  return { products: productsMap, groups };
};

/**
 * Generuje unikalny name dla nowego produktu
 * Format: b00 + losowy ciąg 8-15 znaków (0-9 i a-z)
 * Przykład: b0006se5bq
 */
export const generateUniqueName = async (): Promise<string> => {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
  const minLength = 8;
  const maxLength = 15;

  const generateRandomString = (length: number): string => {
    let result = '';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }

    return result;
  };

  // Generuj losową długość między 8 a 15
  const randomLength =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  let name = `b00${generateRandomString(randomLength)}`;

  // Sprawdzaj czy name już istnieje w bazie
  let existingProduct;

  do {
    // eslint-disable-next-line no-await-in-loop
    existingProduct = await getProduct(name);

    if (existingProduct) {
      const newRandomLength =
        Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
      name = `b00${generateRandomString(newRandomLength)}`;
    }
  } while (existingProduct);

  return name;
};
