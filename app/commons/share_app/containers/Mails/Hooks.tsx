import useListItemSwipe from 'commons/hooks/useListItemSwipe';
import { open } from 'commons/Modal/actions';
import { LIST_ITEM_SWIPE_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import SwipeLeft from 'commons/share_app/components/MailItem/Swipe/SwipeLeft';
import SwipeRight from 'commons/share_app/components/MailItem/Swipe/SwipeRight';
import { MailsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import { EDIT_SCHEDULE_MAIL_MODAL_ID } from 'components/Modals/EditScheduleMailModal/constants';
import { FOLDER_DRAFTS_KEY } from 'containers/Folders/constants';
import { isFolderByKey } from 'containers/Folders/selectors';
import { NEW_MAIL_URL_NAME } from 'containers/NewMail/constants';
import { READ_MAIL_URL } from 'utils/constants';

import { setLastShownId, toggleChecked } from './actions';
import { MAILS_CONTAINER_ID } from './constants';
import { isMailScheduledSend } from './selectors';
import useFetchMails from './useFetchMails';
import useHighlightMailItem from './useHighlightMailItem';
import useViewRecalculate from './useViewRecalculate';

const Hooks: FC = () => {
  const isShow = useContext(MailsRouterIsShowContext);

  useHighlightMailItem(isShow);
  useFetchMails();
  useViewRecalculate();

  useListItemSwipe(
    isShow,
    MAILS_CONTAINER_ID,
    LIST_ITEM_SWIPE_CLASS,
    SwipeLeft,
    SwipeRight,
    (params) => {
      const mid = Number.parseInt(params.id, 10);
      const isDrafts = getStateValueBySelector(
        isFolderByKey,
        FOLDER_DRAFTS_KEY,
      );
      const isDelayedSend = getStateValueBySelector(isMailScheduledSend, mid);

      if (isDrafts && isDelayedSend) {
        dispatch(open(EDIT_SCHEDULE_MAIL_MODAL_ID, { mid }));
      } else {
        dispatch(setLastShownId(mid));

        historyPush(
          `/${isDrafts ? NEW_MAIL_URL_NAME : READ_MAIL_URL}/_mid/${mid}`,
        );
      }
    },
    (params) => {
      dispatch(toggleChecked(Number.parseInt(params.id, 10)));
    },
  );

  return null;
};

export default memo(Hooks);
