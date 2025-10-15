import useTranslations from 'commons/hooks/useTranslations';
import Infobar from 'commons/Infobar';
import { SECURITY_TYPE_ERROR } from 'commons/share_app/containers/ReadMail/constants';
import { isSecurity } from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

const SecurityErrorInfobar: FC = () => {
  const t = useTranslations();
  const isSecurityError = useSelector(isSecurity, SECURITY_TYPE_ERROR);

  const onClick = useCallback(() => {
    window.open(`${process.env.SECURITY_HELP_URL}`, '_blank');
  }, []);

  return isSecurityError ? (
    <Infobar isOpen type="error">
      <Infobar.Icon $image="error" />
      <Infobar.Content>
        <Infobar.Label>
          {t('ReadMail/Alerts/securityErrorDescription')}
        </Infobar.Label>
        <Infobar.Actions>
          <Infobar.ActionItem>
            <Infobar.Button label={t('ctaLearnMore')} onClick={onClick} />
          </Infobar.ActionItem>
        </Infobar.Actions>
      </Infobar.Content>
    </Infobar>
  ) : null;
};

export default memo(SecurityErrorInfobar);
