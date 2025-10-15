import useTranslations from 'commons/hooks/useTranslations';
import {
  ReadMailToNamesStyled,
  ReadMailToStyled,
} from 'commons/share_app/components/ReadMail/ReadMailHeader/styles';
import { FC, memo } from 'commons/utils/react';

const InboxTo: FC = () => {
  const t = useTranslations();

  return (
    <ReadMailToStyled data-cypress="INBOX-DETAIL-RECEIVER">
      <ReadMailToNamesStyled>
        {t('to')} {t('ReadMail/labelToMe')}
      </ReadMailToNamesStyled>
    </ReadMailToStyled>
  );
};

export default memo(InboxTo);
