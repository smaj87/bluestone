import Badge from 'commons/Badge';
import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import { openModal } from 'commons/Modal/actions';
import {
  ListItemActionsItemStyled,
  ListItemActionsStyled,
} from 'commons/share_app/components/ListElements/ListItemActions/styles';
import { MAIL_ITEM_VIEWS } from 'commons/share_app/components/MailItem/constants';
import ButtonUnsubscribe from 'commons/share_app/components/MailItem/MailActions/ButtonUnsubscribe';
import ScreenReaderLabel from 'commons/share_app/components/MailItem/MailActions/ScreenReaderLabel';
import { scheduleDate } from 'commons/share_app/components/MailItem/MailSnippet/utils';
import {
  cancelSendMail,
  moveMails,
  setLastShownId,
} from 'commons/share_app/containers/Mails/actions';
import { getMailById } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, RefObject, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import DropdownMailItemMore from 'components/Dropdowns/DropdownMailItemMore';
import { REMOVE_MAILS_MODAL_ID } from 'components/Modals/RemoveMailsModal/constants';
import { getMailListView } from 'containers/App/selectors';
import {
  FOLDER_DRAFTS_KEY,
  FOLDER_SPAM_KEY,
  FOLDER_TRASH_KEY,
} from 'containers/Folders/constants';
import { getFidByKey, isFolderByKey } from 'containers/Folders/selectors';
import {
  NEW_MAIL_FORWARD_URL_NAME,
  NEW_MAIL_REPLAY_URL_NAME,
  NEW_MAIL_URL_NAME,
} from 'containers/NewMail/constants';

interface Props {
  id: number;
  prefix?: string;
  forRef?: RefObject<HTMLDivElement>;
}

const Content: FC<Props> = ({ forRef, id, prefix = '' }) => {
  const t = useTranslations();

  const isMobile = useSelector(isMobileSelector);
  const isDrafts = useSelector(isFolderByKey, FOLDER_DRAFTS_KEY);
  const mail = useSelector(getMailById, id);
  const view = useSelector(getMailListView);

  const sendDate = mail?.schema_org?.delayedSend?.delayDate;
  const isScheduledDraft =
    isDrafts && !isMobile && sendDate && view === MAIL_ITEM_VIEWS.TILE;

  const onMailForward = useCallback(() => {
    dispatch(setLastShownId(id));
    historyPush(
      `/${NEW_MAIL_URL_NAME}/_type/${NEW_MAIL_FORWARD_URL_NAME}/_mid/${id}`,
    );
  }, [id]);

  const onMailReplyAll = useCallback(() => {
    dispatch(setLastShownId(id));
    historyPush(
      `/${NEW_MAIL_URL_NAME}/_type/${NEW_MAIL_REPLAY_URL_NAME}/_mid/${id}`,
    );
  }, [id]);

  const onMailRemove = useCallback(async () => {
    const trashFid = getStateValueBySelector(getFidByKey, FOLDER_TRASH_KEY);
    const spamFid = getStateValueBySelector(getFidByKey, FOLDER_SPAM_KEY);

    if (trashFid >= 0 && (mail.fid === trashFid || mail.fid === spamFid)) {
      dispatch(
        openModal(REMOVE_MAILS_MODAL_ID, {
          srcFid: mail.fid === spamFid ? spamFid : trashFid,
          mids: [id],
        }),
      );
    } else if (trashFid >= 0) {
      let isCanceled = true;

      if (isDrafts) {
        isCanceled = await onCancelSend();
      }

      if (isCanceled) {
        dispatch(moveMails([mail], trashFid));
      }
    }
  }, [mail, isDrafts]);

  const onCancelSend = useCallback(
    async () => dispatch(cancelSendMail([mail])),
    [mail, isDrafts],
  );

  return mail ? (
    <ListItemActionsStyled ref={forRef} role="list">
      {!isDrafts ? (
        <>
          <ListItemActionsItemStyled role="listitem">
            <Button
              color="secondary"
              icon="answer"
              isMobile
              isStretch
              label={isMobile ? t('ctaReply') : ''}
              onClickCapture={onMailReplyAll}
              shape={isMobile ? undefined : 'square'}
              size={isMobile ? 'md' : 'lg'}
              title={isMobile ? '' : t('ctaReply')}
            >
              <ScreenReaderLabel label={t('ctaReply')} />
            </Button>
          </ListItemActionsItemStyled>
          <ListItemActionsItemStyled role="listitem">
            <Button
              color="secondary"
              icon="forward"
              isMobile
              isStretch
              label={isMobile ? t('ctaForward') : ''}
              onClickCapture={onMailForward}
              shape={isMobile ? undefined : 'square'}
              size={isMobile ? 'md' : 'lg'}
              title={isMobile ? '' : t('ctaForward')}
            >
              <ScreenReaderLabel label={t('ctaForward')} />
            </Button>
          </ListItemActionsItemStyled>
        </>
      ) : null}
      {isDrafts && sendDate ? (
        <ListItemActionsItemStyled role="listitem">
          <Button
            color="secondary"
            icon="cancelSchedule"
            isDisabled={mail.isCancelingSend}
            isFetching={mail.isCancelingSend}
            isMobile
            isStretch
            label={isMobile ? t('ctaCancelSchedule') : ''}
            onClickCapture={onCancelSend}
            shape={isMobile ? undefined : 'square'}
            size={isMobile ? 'md' : 'lg'}
            title={isMobile ? '' : t('ctaCancelSchedule')}
          >
            <ScreenReaderLabel label={t('ctaCancelSchedule')} />
          </Button>
        </ListItemActionsItemStyled>
      ) : null}
      <ListItemActionsItemStyled role="listitem">
        <Button
          color="secondary"
          icon="trash"
          isDisabled={mail.isCancelingSend}
          isFetching={mail.isCancelingSend}
          isMobile
          isStretch
          label={isMobile ? t('ctaDelete') : ''}
          onClickCapture={onMailRemove}
          shape={isMobile ? undefined : 'square'}
          size={isMobile ? 'md' : 'lg'}
          title={isMobile ? '' : t('ctaDelete')}
        >
          <ScreenReaderLabel label={t('ctaDelete')} />
        </Button>
      </ListItemActionsItemStyled>
      {!isDrafts ? (
        <>
          <ListItemActionsItemStyled role="listitem">
            <DropdownMailItemMore id={id} prefix={prefix} />
          </ListItemActionsItemStyled>
          <MobileLoader desktop={<ButtonUnsubscribe id={id} />} />
        </>
      ) : null}
      {isScheduledDraft ? (
        <Badge
          color="primary"
          icon="sendSchedule"
          isStretch
          label={scheduleDate(sendDate)}
          size="md"
        />
      ) : null}
    </ListItemActionsStyled>
  ) : null;
};

export default memo(Content);
