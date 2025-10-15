import useDisplayContainer from 'commons/hooks/useDisplayContainer';
import useHighlightItem from 'commons/hooks/useHighlightItem';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { MAIL_ITEM_ID_PREFIX } from 'commons/share_app/components/MailItem/constants';
import { MAILS_CONTAINER_ID } from 'commons/share_app/containers/Mails/constants';
import { useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setLastShownId } from './actions';
import { getLastShownId } from './selectors';

const useHighlightMailItem = (isShow = false) => {
  const id = useSelector(getLastShownId);
  const isMobile = useSelector(isMobileSelector);

  useDisplayContainer(MAILS_CONTAINER_ID, isShow, !id || !isMobile);
  useHighlightItem(id ? `${MAIL_ITEM_ID_PREFIX}_${id}` : '', isShow);

  useEffect(() => {
    if (isShow) {
      // remove lastId after highlight
      dispatch(setLastShownId(0));
    }
  }, [isShow]);

  return null;
};

export default useHighlightMailItem;
