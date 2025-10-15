import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { openModal } from 'commons/Modal/actions';
import { READ_MAIL_REMOVE_MODAL_ID } from 'commons/share_app/components/Modals/constants';
import { moveMails } from 'commons/share_app/containers/Mails/actions';
import {
  getMail,
  getMailField,
  getMidByType,
} from 'commons/share_app/containers/ReadMail/selectors';
import { ButtonToolbar } from 'commons/Toolbar/styles';
import { close } from 'commons/ToolbarSubmenu/actions';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import { goBack } from 'containers/App/actions';
import {
  FOLDER_SPAM_KEY,
  FOLDER_TRASH_KEY,
} from 'containers/Folders/constants';
import { getFidByKey } from 'containers/Folders/selectors';
import { READ_MAIL_URL } from 'utils/constants';

const ButtonTrash: FC = () => {
  const t = useTranslations();

  const isMobile = useSelector(isMobileSelector);
  const fid = useSelector(getMailField, 'fid');
  const isFetched = useSelector(getMailField, 'isFetched');
  const trashFid = useSelector(getFidByKey, FOLDER_TRASH_KEY);

  const isDisabled = !isFetched || !trashFid;

  const onClick = useCallback(() => {
    const spamFid = getStateValueBySelector(getFidByKey, FOLDER_SPAM_KEY);

    dispatch(close());

    if (fid === trashFid || fid === spamFid) {
      dispatch(openModal(READ_MAIL_REMOVE_MODAL_ID));
    } else {
      const mail = getStateValueBySelector(getMail);
      const prevMid = getStateValueBySelector(getMidByType, 'prev');

      dispatch(moveMails([mail], trashFid));

      if (prevMid > 0) {
        historyPush(`/${READ_MAIL_URL}/_mid/${prevMid}`);
      } else {
        dispatch(goBack());
      }

      dispatch(
        eventsApiSendAction({
          event_category: 'readmail',
          event_action: 'message_deleted',
          event_details: {
            place: 'readmail',
          },
        }),
      );
    }
  }, [fid, trashFid]);

  return (
    <ButtonToolbar
      color={isMobile ? 'toolbarSubmenu' : 'secondary'}
      cypressId="BUTTON-DELETE"
      icon="trash"
      isDisabled={isDisabled}
      isMobile={isMobile}
      label={t('ctaDelete')}
      onClick={onClick}
      size="md"
      title={t('ctaDelete')}
    />
  );
};

export default memo(ButtonTrash);
