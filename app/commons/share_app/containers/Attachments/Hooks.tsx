import useListItemSwipe from 'commons/hooks/useListItemSwipe';
import { openModal } from 'commons/Modal/actions';
import SwipeLeft from 'commons/share_app/components/AttachmentItem/Swipe/SwipeLeft';
import SwipeRight from 'commons/share_app/components/AttachmentItem/Swipe/SwipeRight';
import { LIST_ITEM_SWIPE_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import { AttachmentsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { toggleChecked } from 'commons/share_app/containers/Attachments/actions';
import { FC, memo, useContext } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { ATTACHMENTS_PREVIEW_MODAL_ID } from 'components/Modals/AttachmentsPreviewModal/constants';

import { ATTACHMENTS_CONTAINER_ID } from './constants';
import { getAttachmentById, getAttachments } from './selectors';
import useFetchAttachments from './useFetchAttachments';
import useHighlightAttachmentItem from './useHighlightAttachmentItem';

const Hooks: FC = () => {
  const isShow = useContext(AttachmentsRouterIsShowContext);

  useHighlightAttachmentItem(isShow);
  useFetchAttachments();

  useListItemSwipe(
    isShow,
    ATTACHMENTS_CONTAINER_ID,
    LIST_ITEM_SWIPE_CLASS,
    SwipeLeft,
    SwipeRight,
    (params) => {
      dispatch(
        openModal(ATTACHMENTS_PREVIEW_MODAL_ID, {
          attachments: Object.values(getStateValueBySelector(getAttachments)),
          startSlide:
            getStateValueBySelector(getAttachmentById, params.id)?.index || 0,
        }),
      );
    },
    (params) => {
      dispatch(toggleChecked(params.id));
    },
  );

  return null;
};

export default memo(Hooks);
