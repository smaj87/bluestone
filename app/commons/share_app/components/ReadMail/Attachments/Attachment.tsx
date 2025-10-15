import useTranslations from 'commons/hooks/useTranslations';
import { openModal } from 'commons/Modal/actions';
import AttachmentTile from 'commons/share_app/components/AttachmentsTiles/AttachmentTile';
import { LinkAttachment } from 'commons/share_app/components/AttachmentsTiles/AttachmentTile/styles';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { AttachmentReadMail } from 'commons/share_app/containers/ReadMail/types';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { ATTACHMENTS_PREVIEW_MODAL_ID } from 'components/Modals/AttachmentsPreviewModal/constants';
import { getDownloadUrl } from 'utils/images';

interface Props {
  attachment: AttachmentReadMail;
  attachmentIndex: number;
}

const Attachment: FC<Props> = ({ attachment, attachmentIndex }) => {
  const t = useTranslations();

  const onDownloadAttachment = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'quick_events',
        event_action: 'quick_events',
        event_details: {
          event_name: 'attachments_download_object_icon',
        },
      }),
    );
  }, []);

  const openPreviewOpen = useCallback(() => {
    dispatch(
      openModal(ATTACHMENTS_PREVIEW_MODAL_ID, {
        attachments: getStateValueBySelector(getMailField, 'attachments'),
        startSlide: attachmentIndex,
      }),
    );
  }, [attachmentIndex]);

  return (
    <AttachmentTile attachment={attachment} onPreviewOpen={openPreviewOpen}>
      <LinkAttachment
        color="secondary"
        download
        href={getDownloadUrl([attachment])}
        icon="download"
        onClick={onDownloadAttachment}
        size="sm"
        target="_blank"
        title={t('ctaAttachmentDownload', {
          name: attachment.filename,
        })}
      />
    </AttachmentTile>
  );
};

export default memo(Attachment);
