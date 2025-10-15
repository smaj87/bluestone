import EmptyPage from 'commons/EmptyPage';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

const AttachmentsEmptyPage: FC = () => {
  const t = useTranslations();

  return <EmptyPage icon="attach" title={t('attachmentsEmptyPageTitle')} />;
};

export default memo(AttachmentsEmptyPage);
