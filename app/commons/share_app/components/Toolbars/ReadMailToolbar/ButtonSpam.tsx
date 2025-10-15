import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { moveMails } from 'commons/share_app/containers/Mails/actions';
import {
  DST_FID_INBOX_KEY,
  DST_FID_SPAM_KEY,
  MAIL_FLAG_UNSUBHEADER,
} from 'commons/share_app/containers/Mails/constants';
import {
  getMail,
  getMailField,
  getMidByType,
} from 'commons/share_app/containers/ReadMail/selectors';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import { ButtonToolbar } from 'commons/Toolbar/styles';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import { goBack } from 'containers/App/actions';
import { FOLDER_SPAM_KEY } from 'containers/Folders/constants';
import { getFidByKey } from 'containers/Folders/selectors';
import { READ_MAIL_URL } from 'utils/constants';

const ButtonSpam: FC = () => {
  const t = useTranslations();

  const isMobile = useSelector(isMobileSelector);
  const spamFid = useSelector(getFidByKey, FOLDER_SPAM_KEY);
  const fid = useSelector(getMailField, 'fid');
  const isMailing = useSelector(getMailField, 'isMailing');
  const isFetched = useSelector(getMailField, 'isFetched');

  const isSpam = spamFid === fid;
  const isDisabled = (isMailing && !isSpam) || !isFetched;

  const onClick = useCallback(() => {
    const mail = getStateValueBySelector(getMail);
    const prevMid = getStateValueBySelector(getMidByType, 'prev');
    const dstFid = !isSpam ? DST_FID_SPAM_KEY : DST_FID_INBOX_KEY;

    dispatch(moveMails([mail], dstFid));

    if (prevMid > 0) {
      historyPush(`/${READ_MAIL_URL}/_mid/${prevMid}`);
    } else {
      dispatch(goBack());
    }

    if (checkFlag(mail.flags, MAIL_FLAG_UNSUBHEADER) && !isSpam) {
      dispatch(
        eventsApiSendAction({
          event_category: 'messaging',
          event_action: 'message_marked_as_spam',
          mid: mail.mid,
          event_details: {
            message_type: 'newsletter',
            sender: mail.from.email?.split('@')?.[1] || '',
          },
        }),
      );
    }

    dispatch(
      eventsApiSendAction({
        event_category: 'readmail',
        event_action: `readmail_spam_click_${
          isMailing ? 'onet_mailing' : 'other'
        }`,
        event_details: {
          eventLabel: isSpam ? t('ctaNoSpam') : t('ctaSpam'),
        },
      }),
    );
  }, [isMailing, isSpam]);

  return (
    <ButtonToolbar
      color={isMobile ? 'toolbarSubmenu' : 'secondary'}
      cypressId="BUTTON-SPAM"
      icon={isSpam ? 'noSpam' : 'spam'}
      isDisabled={isDisabled}
      isMobile
      label={isSpam ? t('ctaNoSpam') : t('ctaSpam')}
      onClick={onClick}
      size="md"
      title={isSpam ? t('ctaMarkAsNotSpam') : t('ctaMarkAsSpam')}
    />
  );
};

export default memo(ButtonSpam);
