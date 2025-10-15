export const hashCode = (str: string) => {
  const s = str.replace(/\s+/gi, '');
  const len = s.length;
  let hash = 0;
  let i = 0;

  while (i < len) {
    // eslint-disable-next-line no-bitwise,no-plusplus
    hash = ((hash << 5) - hash + s.charCodeAt(i++)) << 0;
  }

  return hash + 2147483648;
};
