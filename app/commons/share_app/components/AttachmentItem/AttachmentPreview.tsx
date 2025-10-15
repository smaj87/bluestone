import Icon from 'commons/Icon';
import { AttachmentPreviewStyled } from 'commons/share_app/components/AttachmentItem/styles';
import { getAttachmentType } from 'commons/share_app/components/ReadMail/Attachments/utils';
import { Attachment } from 'commons/share_app/containers/Attachments/types';
import { FC, memo } from 'commons/utils/react';

import { getAttachmentContentType } from 'utils/attachments';

interface Props {
  attachment: Attachment;
}

const AttachmentPreview: FC<Props> = ({ attachment }) => {
  const attachmentType = getAttachmentContentType(attachment);

  return (
    <AttachmentPreviewStyled>
      <Icon $image={getAttachmentType(attachmentType)} />
    </AttachmentPreviewStyled>
  );
};

export default memo(AttachmentPreview);
