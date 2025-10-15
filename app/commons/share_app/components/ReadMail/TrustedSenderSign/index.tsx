import { MAIL_FLAG_TRUSTEDSENDER } from 'commons/share_app/containers/Mails/constants';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { TrustedSenderSignStyled } from '../ReadMailHeader/styles';

const TrustedSenderSign: FC = () => {
  const flags = useSelector(getMailField, 'flags') as ReadMailParsed['flags'];

  return checkFlag(flags, MAIL_FLAG_TRUSTEDSENDER) ? (
    <TrustedSenderSignStyled $image="shield" />
  ) : null;
};

export default memo(TrustedSenderSign);
