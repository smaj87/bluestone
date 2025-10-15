import useTranslations from 'commons/hooks/useTranslations';
import { NewsletterButtonStyled } from 'commons/share_app/containers/Newsletters/NewsletterItem/styles';
import { FC, memo, useCallback } from 'commons/utils/react';
import { historyPush } from 'commons/utils/route';
import { encrypt } from 'commons/utils/simpleCrypt';

import {
  NEW_MAIL_TO_URL_NAME,
  NEW_MAIL_URL_NAME,
} from 'containers/NewMail/constants';

interface Props {
  name: string;
  email: string;
}

const NewMailButton: FC<Props> = ({ email, name }) => {
  const t = useTranslations();

  const goToNewMail = useCallback(() => {
    const encryptedEmails = encrypt(
      '',
      JSON.stringify([{ name: name || '', email: email || '' }]),
    );

    historyPush(
      `/${NEW_MAIL_URL_NAME}/_subtype/${NEW_MAIL_TO_URL_NAME}/_encryptedEmails/${encryptedEmails}`,
    );
  }, [email, name]);

  return (
    <NewsletterButtonStyled
      color="primary"
      label={t('ctaNewMail')}
      onClick={goToNewMail}
      size="sm"
    />
  );
};

NewMailButton.displayName = 'NewMailButton';

export default memo(NewMailButton);
