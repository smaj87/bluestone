import useTranslations from 'commons/hooks/useTranslations';
import { getMainAccount } from 'commons/hooks/useUserConfig/selectors';
import { SECURITY_TYPE_ERROR } from 'commons/share_app/containers/ReadMail/constants';
import {
  getMailField,
  isFraud as isFraudSelector,
  isSecurity,
} from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import TrustedSenderSign from '../TrustedSenderSign';
import {
  ReadMailFromBasicStyled,
  ReadMailFromEmailStyled,
  ReadMailFromNameStyled,
  ReadMailFromStyled,
} from './styles';

const ReadMailFrom: FC = () => {
  const t = useTranslations();

  const mainAccount = useSelector(getMainAccount);
  const isFraud = useSelector(isFraudSelector);
  const isSecurityError: boolean = useSelector(isSecurity, SECURITY_TYPE_ERROR);
  const from = useSelector(getMailField, 'from') as ReadMailParsed['from'];

  const envFrom = useSelector(
    getMailField,
    'env_from',
  ) as ReadMailParsed['env_from'];

  const [fromDomain, envDomain] = useMemo(
    () => [from?.email?.split('@')?.[1] || '', envFrom?.split('@')?.[1] || ''],
    [from?.email, envFrom],
  );

  return (
    <ReadMailFromStyled>
      <ReadMailFromBasicStyled>
        <ReadMailFromNameStyled data-cypress="SENDER-NAME">
          {from?.name || from?.email || ''}
        </ReadMailFromNameStyled>
        <TrustedSenderSign />
      </ReadMailFromBasicStyled>
      {from?.name ? (
        <ReadMailFromEmailStyled data-cypress="SENDER-EMAIL">
          {from?.email}
        </ReadMailFromEmailStyled>
      ) : null}
      {(isFraud || isSecurityError) &&
      envDomain &&
      envDomain !== fromDomain &&
      envFrom !== mainAccount ? (
        <ReadMailFromEmailStyled>
          {t('labelSendBy', { value: envDomain })}
        </ReadMailFromEmailStyled>
      ) : null}
    </ReadMailFromStyled>
  );
};

export default memo(ReadMailFrom);
