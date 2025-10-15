import { useContext } from 'commons/utils/react';

import { compile } from './core/compile';
import { getSheet } from './core/get-sheet';
import { remove } from './core/update';
import css from './css';
import { Context } from './GlobalProvider';
import styled from './styled';

const prevCompiled = {};

/**
 * Creates the global styles component to be used as part of your tree.
 * @returns {Function}
 */
export default function createGlobalStyle(id) {
  return function wrapper(...args) {
    // eslint-disable-next-line prefer-spread
    const fn = styled.call({ g: 1 }, 'div').apply(null, args);

    if (prevCompiled[id]) {
      remove(prevCompiled[id], getSheet());
    }

    /**
     * This is the actual component that gets rendered.
     */
    return function GlobalStyles(props) {
      const globalProps = useContext(Context);
      prevCompiled[id] = compile(css(...args), globalProps);

      // Call the above styled.
      fn.render(props);

      // Returns a hole.
      return null;
    };
  };
}
