// import { parse } from './parse';

// const processFunction = (func, data) => {
//   let result = '';
//
//   // 1. Call it with `data`
//   const res = func(data);
//   // console.log(func, data);
//   // console.log(res);
//   // console.log('- - - - - - - - - - - - - - -');
//   // 2. Grab the className
//   const className = res?.props?.className || '';
//   // 3. If there's none, see if this is basically a
//   // previously styled className by checking the prefix
//   const end = className || (/^go/.test(res) && res);
//
//   if (end) {
//     // If the `end` is defined means it's a className
//     result = `.${end}`;
//   } else if (res && typeof res === 'object') {
//     // If `res` it's an object, we're either dealing with a vnode
//     // or an object returned from a function interpolation
//     // result = res.props ? '' : parse(res, '');
//   } else {
//     // Regular value returned. Can be falsy as well.
//     // Here we check if this is strictly a boolean with false value
//     // define it as `''` to be picked up as empty, otherwise use
//     // res value
//     result = res === false ? '' : res;
//   }
//
//   return result;
// };

export const process = (cssData, componentProps) => {
  let result = '';

  if (cssData?.call) {
    const res = cssData(componentProps) || '';

    if (res?.props?.className) {
      result += `.${res.props.className.split(' ').join(' .')}`;
    } else {
      result += process(res, componentProps);
    }
  } else if (Array.isArray(cssData)) {
    cssData.forEach((d) => {
      result += process(d, componentProps);
    });
  } else {
    result += cssData || '';
  }

  return result;
};

/**
 * Can parse a compiled string, from a tagged template
 * @param {Array} cssStrings
 * @param {Object} [props]
 */
export const compile = (cssStrings, componentProps = {}) =>
  cssStrings
    .reduce((out, next) => `${out}${process(next, componentProps)}`, '')
    .trim();
