const newRule =
  /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
const ruleClean = /\/\*[^]*?\*\/|  +/g;
const ruleNewline = /\n+/g;
const empty = ' ';

/**
 * Convert a css style string into a object
 * @param {String} val
 * @returns {Object}
 */
export const astish = (val) => {
  const tree = [{}];
  let block = newRule.exec(val.replace(ruleClean, ''));

  while (block) {
    let left;

    // Remove the current entry
    if (block[4]) {
      tree.shift();
    } else if (block[3]) {
      left = block[3].replace(ruleNewline, empty).trim();
      tree.unshift((tree[0][left] = tree[0][left] || {}));
    } else {
      tree[0][block[1]] = block[2].replace(ruleNewline, empty).trim();
    }

    block = newRule.exec(val.replace(ruleClean, ''));
  }

  return tree[0];
};
