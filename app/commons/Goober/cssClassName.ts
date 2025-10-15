// @ts-nocheck todo
import { compile } from './core/compile';
import { getSheet } from './core/get-sheet';
import { hash } from './core/hash';
import css from './css';

/**
 * css entry
 * @param {String|Object|Function} val
 */
export default function cssClassName(...args) {
  const ctx = this || {};

  return hash(
    compile(css(...args), ctx.p),
    getSheet(),
    ctx.g,
    ctx.prepend,
    ctx.prevGClassName,
  );
}
