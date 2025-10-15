import useDisplayContainer from 'commons/hooks/useDisplayContainer';
import useHighlightItem from 'commons/hooks/useHighlightItem';
import { ATTACHMENT_ITEM_ID_PREFIX } from 'commons/share_app/components/AttachmentItem/constants';
import { ATTACHMENTS_CONTAINER_ID } from 'commons/share_app/containers/Attachments/constants';
import { useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setLastShownId } from './actions';
import { getLastShownId } from './selectors';

const useHighlightAttachmentItem = (isShow = false) => {
  const id = useSelector(getLastShownId);

  useDisplayContainer(ATTACHMENTS_CONTAINER_ID, isShow, !id);
  useHighlightItem(id ? `${ATTACHMENT_ITEM_ID_PREFIX}_${id}` : '', isShow);

  useEffect(() => {
    if (isShow) {
      // remove lastId after highlight
      dispatch(setLastShownId(''));
    }
  }, [isShow]);

  return null;
};

export default useHighlightAttachmentItem;
