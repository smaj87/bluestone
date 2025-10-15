import { getAttachmentById } from 'commons/share_app/containers/Attachments/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import AttachmentDate from './AttachmentDate';
import AttachmentFileName from './AttachmentFileName';
import AttachmentFrom from './AttachmentFrom';
import AttachmentPreview from './AttachmentPreview';
import AttachmentSize from './AttachmentSize';
import AttachmentSubject from './AttachmentSubject';
import { AttachmentDataStyled } from './styles';

interface Props {
  id: string;
}

const AttachmentData: FC<Props> = ({ id }) => {
  const attachment = useSelector(getAttachmentById, id);

  return (
    <AttachmentDataStyled>
      <AttachmentPreview attachment={attachment} />
      <AttachmentFileName fileName={attachment.filename} />
      <AttachmentSize size={attachment.size} />
      <AttachmentFrom from={attachment.from.name || attachment.from.email} />
      <AttachmentSubject subject={attachment.subject} />
      <AttachmentDate date={attachment.sentDate} />
    </AttachmentDataStyled>
  );
};

export default memo(AttachmentData);
