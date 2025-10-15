import useTranslations from 'commons/hooks/useTranslations';
import {
  getAttachmentsSize,
  getMailField,
} from 'commons/share_app/containers/ReadMail/selectors';
import { AttachmentReadMail } from 'commons/share_app/containers/ReadMail/types';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { convert } from 'components/Size/utils';
import { getDownloadUrl } from 'utils/images';

import {
  AttachmentsActionItemStyled,
  AttachmentsActionsListStyled,
  ButtonDownload,
} from './styles';

interface Props {
  counter: number;
}

const AttachmentsActions: FC<Props> = ({ counter }) => {
  const t = useTranslations();
  const size = useSelector(getAttachmentsSize);

  const downloadAllAttachments = useCallback(() => {
    const attachments = getStateValueBySelector(
      getMailField,
      'attachments',
    ) as AttachmentReadMail[];

    window.location.href = getDownloadUrl(attachments);

    dispatch(
      eventsApiSendAction({
        event_category: 'quick_events',
        event_action: 'quick_events',
        event_details: {
          event_name: 'attachments_download_all',
        },
      }),
    );
  }, []);

  return counter > 1 ? (
    <AttachmentsActionsListStyled>
      <AttachmentsActionItemStyled>
        {t('attachmentsCounter', { value: counter })}
      </AttachmentsActionItemStyled>
      <AttachmentsActionItemStyled>
        <ButtonDownload
          label={t('ctaDownloadAll', { value: convert(size) })}
          onClick={downloadAllAttachments}
        />
      </AttachmentsActionItemStyled>
    </AttachmentsActionsListStyled>
  ) : null;
};

export default memo(AttachmentsActions);
