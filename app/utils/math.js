/**
 * @name: percentChange
 * @description: calculates change of percentages between two numbers
 */
export const percentChange = (a, b) => {
  let result;
  let percent;

  if (Number.isNaN(a) || Number.isNaN(b)) {
    result = false;
  } else {
    if (b !== 0) {
      if (a !== 0) {
        percent = ((b - a) / a) * 100;
      } else {
        percent = b * 100;
      }
    } else {
      percent = -a * 100;
    }
    result = Math.floor(percent);
  }

  return result;
};
