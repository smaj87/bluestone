import { zeroGifSend } from 'commons/utils/ads';
import { FC, memo, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch, injectReducer } from 'commons/utils/store';

import { isGetData as isGetDataSelector } from '../../selectors';
import { getTemplateAdWithCache } from '../selectors';
import { fetchProducts } from './actions';
import { KEY } from './constants';
import reducer from './reducer';
import {
  getZeroGifUrl,
  isFetched as isFetchedSelector,
  isFetching as isFetchingSelector,
} from './selectors';

const Hooks: FC = () => {
  const isGetData = useSelector(isGetDataSelector);
  const templateAd = useSelector(getTemplateAdWithCache);

  useEffect(() => {
    injectReducer(KEY, reducer);

    const isFetching = getStateValueBySelector(isFetchingSelector);
    const isFetched = getStateValueBySelector(isFetchedSelector);

    if (!isFetching && !isFetched && isGetData && templateAd) {
      dispatch(fetchProducts());
    }
  }, [isGetData, templateAd]);

  useEffect(() => {
    const url = getStateValueBySelector(getZeroGifUrl);

    if (url) {
      zeroGifSend(url);
    }
  }, []);

  return null;
};

export default memo(Hooks);
