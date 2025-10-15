import useTranslations from 'commons/hooks/useTranslations';
import { FileNameWithExtension } from 'commons/share_app/components/FileNameWithExtension';
import { getAttachmentType } from 'commons/share_app/components/ReadMail/Attachments/utils';
import { Attachment } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, ReactNode } from 'commons/utils/react';

import Size from 'components/Size';
import { getAttachmentContentType } from 'utils/attachments';

import {
  AttachmentFileNameStyled,
  AttachmentSizeStyled,
  SingleAttachmentDataStyled,
  SingleAttachmentIcon,
  SingleAttachmentStyled,
} from './styles';

interface Props {
  attachment: Attachment;
  children?: ReactNode;
  isDisabled?: boolean;
  onPreviewOpen?: () => void;
}

const AttachmentTile: FC<Props> = ({
  attachment,
  children,
  isDisabled,
  onPreviewOpen,
}) => {
  const t = useTranslations();
  const attachmentType = getAttachmentContentType(attachment);

  return (
    <SingleAttachmentStyled role="group">
      <SingleAttachmentDataStyled
        $isDisabled={isDisabled}
        onClick={onPreviewOpen}
        title={t('ctaAttachmentPreview', {
          name: attachment.filename,
        })}
        type="button"
      >
        <SingleAttachmentIcon $image={getAttachmentType(attachmentType)} />
        <AttachmentFileNameStyled>
          <FileNameWithExtension name={attachment.filename} />
        </AttachmentFileNameStyled>
        <AttachmentSizeStyled>
          {attachment.size ? <Size bytes={attachment.size} /> : null}
        </AttachmentSizeStyled>
      </SingleAttachmentDataStyled>
      {children}
    </SingleAttachmentStyled>
  );
};

export default memo(AttachmentTile);
