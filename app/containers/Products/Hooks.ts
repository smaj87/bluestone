import { useEffect } from 'utils/react';
import { dispatch } from 'utils/store';

import { fetchProducts } from './actions';

const Hooks = () => {
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return null;
};

export default Hooks;
