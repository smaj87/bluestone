export const getFormattedPrice = (price?: number, currency?: string) => {
  if (!price) {
    return '';
  }

  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: currency || 'PLN',
  }).format(price);
};
