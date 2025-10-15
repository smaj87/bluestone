import { astish } from './astish';
import { parse } from './parse';
import { toHash } from './to-hash';
import { update } from './update';

/**
 * In-memory cache.
 */
const cache = {};

const getParsed = (compiled, className = '') =>
  parse(astish(compiled), className);

/**
 * Generates the needed className
 * @param {String|Object} compiled
 * @param {Object} sheet StyleSheet target
 * @param {Object} global Global flag
 * @param {Boolean} prepend prepend or not
 * @param {String} prevGClassName
 * @returns {String}
 */
export const hash = (compiled, sheet, global, prepend, prevGClassName = '') => {
  let className = '';

  if (!className) {
    className = cache[compiled] || (cache[compiled] = toHash(compiled));
  }

  if (!cache[className]) {
    cache[className] = getParsed(compiled, global ? '' : `.${className}`);
  }

  // add or update
  update(cache[className], sheet, prepend, prevGClassName);

  // return hash
  return className;
};
