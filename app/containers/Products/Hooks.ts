import { isFetched, isFetching } from 'containers/Products/selectors';
import { useEffect } from 'utils/react';
import { getStateValueBySelector } from 'utils/react-redux';
import { dispatch } from 'utils/store';

import { fetchProducts } from './actions';

const Hooks = () => {
  useEffect(() => {
    if (
      !getStateValueBySelector(isFetching) &&
      !getStateValueBySelector(isFetched)
    ) {
      dispatch(fetchProducts());
    }
  }, []);

  return null;
};

export default Hooks;
