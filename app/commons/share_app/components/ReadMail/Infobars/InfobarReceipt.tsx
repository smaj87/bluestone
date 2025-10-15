import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import Infobar from 'commons/Infobar';
import { InfobarStyled } from 'commons/Infobar/styles';
import { MAIL_FLAG_READ_RECEIPT } from 'commons/share_app/containers/Mails/constants';
import { sendReadConfirmation } from 'commons/share_app/containers/ReadMail/actions';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

const InfobarReceipt: FC = () => {
  const t = useTranslations();
  const flags = useSelector(getMailField, 'flags') as ReadMailParsed['flags'];

  const onSendReadReceipt = useCallback(() => {
    dispatch(sendReadConfirmation());
  }, []);

  const onCancelReadReceipt = useCallback(() => {
    dispatch(sendReadConfirmation(true));
  }, []);

  return checkFlag(flags, MAIL_FLAG_READ_RECEIPT) ? (
    <InfobarStyled>
      <Infobar.Icon $image="info" />
      <Infobar.Content>
        <Infobar.Label>{t('ReadMail/labelAskForConfirmation')}</Infobar.Label>
        <Infobar.Actions>
          <Infobar.ActionItem>
            <Button
              color="infobar"
              label={t('ReadMail/ctaSendReadConfirmation')}
              onClick={onSendReadReceipt}
              size="sm"
            />
          </Infobar.ActionItem>
          <Infobar.ActionItem>
            <Button
              color="infobar"
              label={t('ctaCancel')}
              onClick={onCancelReadReceipt}
              size="sm"
            />
          </Infobar.ActionItem>
        </Infobar.Actions>
      </Infobar.Content>
    </InfobarStyled>
  ) : null;
};

export default memo(InfobarReceipt);
