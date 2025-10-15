export function getUniqueId(prefix = '', postfix = '') {
  return `${prefix}_${new Date().valueOf()}_${Math.random()}_${Math.random()}_${postfix}`;
}
