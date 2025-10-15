import useTranslations from 'commons/hooks/useTranslations';
import Icon from 'commons/Icon';
import { FC, memo } from 'commons/utils/react';

import { MailsListCardDateStyled } from '../styles';

interface MailsListCardDateProps {
  date: string;
}

export const MailsListCardDate: FC<MailsListCardDateProps> = ({ date }) => {
  const t = useTranslations();

  return (
    <MailsListCardDateStyled>
      <Icon $image="timer" />
      {t('validUntil', { date })}
    </MailsListCardDateStyled>
  );
};
MailsListCardDate.displayName = 'MailsListCardDate';

export default memo(MailsListCardDate);
