import useTranslations from 'commons/hooks/useTranslations';
import {
  AttachmentsTilesItemStyled,
  AttachmentsTilesStyled,
} from 'commons/share_app/components/AttachmentsTiles/styles';
import { ATTACHMENTS_CONTAINER_ID } from 'commons/share_app/containers/ReadMail/constants';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { AttachmentReadMail } from 'commons/share_app/containers/ReadMail/types';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Attachment from './Attachment';
import AttachmentsActions from './AttachmentsActions';
import { AttachmentsStyled } from './styles';

const Attachments: FC = () => {
  const t = useTranslations();
  let attachmentIndex = 0;

  const attachments = useSelector(
    getMailField,
    'attachments',
  ) as AttachmentReadMail[];

  return attachments.length ? (
    <AttachmentsStyled id={ATTACHMENTS_CONTAINER_ID}>
      <h3 className={VISUALLY_HIDDEN_CLASS}>{t('attachmentsTitle')}</h3>
      <AttachmentsActions counter={attachments.length} />
      <AttachmentsTilesStyled>
        {attachments.map((attachment) => (
          <AttachmentsTilesItemStyled key={attachment.id}>
            <Attachment
              attachment={attachment}
              attachmentIndex={attachmentIndex++}
            />
          </AttachmentsTilesItemStyled>
        ))}
      </AttachmentsTilesStyled>
    </AttachmentsStyled>
  ) : null;
};

export default memo(Attachments);
