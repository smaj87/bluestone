import useTranslations from 'commons/hooks/useTranslations';
import { memo } from 'commons/utils/react';

import { MailsListCardAdLabelStyled } from '../styles';

export const MailsListCardAdLabel = () => {
  const t = useTranslations();
  return <MailsListCardAdLabelStyled>{t('ad')}</MailsListCardAdLabelStyled>;
};

MailsListCardAdLabel.displayName = 'MailsListCardAdLabel';

export default memo(MailsListCardAdLabel);
