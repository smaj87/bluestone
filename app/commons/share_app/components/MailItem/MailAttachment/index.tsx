import Badge from 'commons/Badge';
import useTranslations from 'commons/hooks/useTranslations';
import { isMailAttachments as isMailAttachmentsSelector } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

interface Props {
  id: number;
}

const MailAttachment: FC<Props> = ({ id }) => {
  const t = useTranslations();
  const isMailAttachment = useSelector(isMailAttachmentsSelector, id);

  return isMailAttachment ? (
    <Badge
      color="primary"
      icon="paperclip"
      shape="square"
      size="sm"
      title={t('labelAttachment')}
    />
  ) : null;
};

export default memo(MailAttachment);
