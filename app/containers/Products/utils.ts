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
