import useTranslations from 'commons/hooks/useTranslations';
import Infobar from 'commons/Infobar';
import { isFraud as isFraudSelector } from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

const FraudInfobar: FC = () => {
  const t = useTranslations();
  const isFraud = useSelector(isFraudSelector);

  const onClick = useCallback(() => {
    window.open(`${process.env.SUSPICIOUS_MESSAGE_HELP_URL}`, '_blank');
  }, []);

  return isFraud ? (
    <Infobar isOpen type="error">
      <Infobar.Icon $image="error" />
      <Infobar.Content>
        <Infobar.Label>{t('ReadMail/Alerts/fraudDescripion')}</Infobar.Label>
        <Infobar.Actions>
          <Infobar.ActionItem>
            <Infobar.Button label={t('ctaLearnMore')} onClick={onClick} />
          </Infobar.ActionItem>
        </Infobar.Actions>
      </Infobar.Content>
    </Infobar>
  ) : null;
};

export default memo(FraudInfobar);
