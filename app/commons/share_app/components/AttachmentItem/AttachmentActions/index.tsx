import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import {
  ListItemActionsItemStyled,
  ListItemActionsStyled,
} from 'commons/share_app/components/ListElements/ListItemActions/styles';
import {
  downloadAttachments,
  forwardAttachments,
  setLastShownId,
} from 'commons/share_app/containers/Attachments/actions';
import { getAttachmentById } from 'commons/share_app/containers/Attachments/selectors';
import { eventsApiSendAction } from 'commons/utils/ads';
import history from 'commons/utils/history';
import { FC, memo, useCallback, useEffect, useRef } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import DropdownAttachmentItemMore from 'components/Dropdowns/DropdownAttachmentItemMore';
import { READ_MAIL_URL } from 'utils/constants';

interface Props {
  id: string;
  prefix?: string;
}

const AttachmentActions: FC<Props> = ({ id, prefix = '' }) => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stopPropagation = (e: Event) => {
      e.stopPropagation();
    };

    containerRef.current?.addEventListener?.('click', stopPropagation);
    // no unmount because whole element is destroy in DOM
  }, []);

  const onGoToMail = useCallback(() => {
    const { mid } = getStateValueBySelector(getAttachmentById, id);

    history.push(`/${READ_MAIL_URL}/_mid/${mid}`);
    dispatch(setLastShownId(id));
  }, [id]);

  const onAttachmentsDownload = useCallback(() => {
    dispatch(
      downloadAttachments([getStateValueBySelector(getAttachmentById, id)]),
    );

    dispatch(
      eventsApiSendAction({
        event_category: 'attachments',
        event_action: 'download',
      }),
    );
  }, [id]);

  const onAttachmentsForward = useCallback(() => {
    dispatch(
      forwardAttachments([getStateValueBySelector(getAttachmentById, id)]),
    );

    dispatch(setLastShownId(id));

    dispatch(
      eventsApiSendAction({
        event_category: 'attachments',
        event_action: 'forward',
      }),
    );
  }, [id]);

  return (
    <ListItemActionsStyled ref={containerRef} role="list">
      <ListItemActionsItemStyled role="listitem">
        <Button
          color="secondary"
          icon="arrowRight"
          isMobile
          isStretch
          label={isMobile ? t('ctaGoToMailShort') : ''}
          onClickCapture={onGoToMail}
          shape={isMobile ? undefined : 'square'}
          size={isMobile ? 'md' : 'lg'}
          title={t('ctaGoToMail')}
        />
      </ListItemActionsItemStyled>
      <ListItemActionsItemStyled role="listitem">
        <Button
          color="secondary"
          icon="download"
          isMobile
          isStretch
          label={isMobile ? t('ctaDownload') : ''}
          onClickCapture={onAttachmentsDownload}
          shape={isMobile ? undefined : 'square'}
          size={isMobile ? 'md' : 'lg'}
          title={t('ctaDownloadAttachment')}
        />
      </ListItemActionsItemStyled>
      <ListItemActionsItemStyled role="listitem">
        <Button
          color="secondary"
          icon="forward"
          isMobile
          isStretch
          label={isMobile ? t('ctaForward') : ''}
          onClickCapture={onAttachmentsForward}
          shape={isMobile ? undefined : 'square'}
          size={isMobile ? 'md' : 'lg'}
          title={t('ctaForward')}
        />
      </ListItemActionsItemStyled>
      <ListItemActionsItemStyled role="listitem">
        <DropdownAttachmentItemMore id={id} prefix={prefix} />
      </ListItemActionsItemStyled>
    </ListItemActionsStyled>
  );
};

export default memo(AttachmentActions);
