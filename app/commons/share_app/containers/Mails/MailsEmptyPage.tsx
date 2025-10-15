import EmptyPage from 'commons/EmptyPage';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import CustomFolderAddRule from './CustomFolderAddRule';

const MailsEmptyPage: FC = () => {
  const t = useTranslations();

  // TODO - uzupełnienie ikony i tekstu na podstawie otwartego folderu (społeczności, oferty itp)
  return (
    <EmptyPage icon="folder" title={t('emptyFolderTitle')}>
      <CustomFolderAddRule />
    </EmptyPage>
  );
};

export default memo(MailsEmptyPage);
