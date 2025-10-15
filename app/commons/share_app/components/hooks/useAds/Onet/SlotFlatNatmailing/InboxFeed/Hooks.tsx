import { FC, memo, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch, injectReducer } from 'commons/utils/store';

import { getTemplateAd, isGetData as isGetDataSelector } from '../selectors';
import { fetchProducts } from './actions';
import { KEY } from './constants';
import reducer from './reducer';
import { isFetching as isFetchingSelector } from './selectors';

const Hooks: FC = () => {
  const isGetData = useSelector(isGetDataSelector);
  const templateAd = useSelector(getTemplateAd);

  useEffect(() => {
    injectReducer(KEY, reducer);

    const isFetching = getStateValueBySelector(isFetchingSelector);

    if (!isFetching && isGetData && templateAd) {
      dispatch(fetchProducts());
    }
  }, [isGetData, templateAd]);

  return null;
};

export default memo(Hooks);
