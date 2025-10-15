import useDisplayContainer from 'commons/hooks/useDisplayContainer';
import useHighlightItem from 'commons/hooks/useHighlightItem';
import { useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setLastShownId } from './actions';
import {
  NEWSLETTER_ITEM_ID_PREFIX,
  NEWSLETTERS_LIST_CONTAINER_ID,
} from './constants';
import { getLastShownId } from './selectors';

const useHighlightNewsletterItem = (isShow = false) => {
  const id = useSelector(getLastShownId);

  useDisplayContainer(NEWSLETTERS_LIST_CONTAINER_ID, isShow, id < 0);
  useHighlightItem(id ? `${NEWSLETTER_ITEM_ID_PREFIX}_${id}` : '', isShow);

  useEffect(() => {
    if (isShow) {
      // remove lastId after highlight
      dispatch(setLastShownId(-1));
    }
  }, [isShow]);

  return null;
};

export default useHighlightNewsletterItem;
