import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { MAIL_FLAG_ATTACHMENTS } from 'commons/share_app/containers/Mails/constants';
import { ATTACHMENTS_CONTAINER_ID } from 'commons/share_app/containers/ReadMail/constants';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { scrollIntoView } from 'commons/utils/scroll';
import { dispatch } from 'commons/utils/store';

const ButtonAttachments: FC = () => {
  const t = useTranslations();

  const flags = useSelector(getMailField, 'flags') as ReadMailParsed['flags'];
  const attachments = useSelector(
    getMailField,
    'attachments',
  ) as ReadMailParsed['attachments'];

  const onClick = useCallback(() => {
    scrollIntoView(document.getElementById(ATTACHMENTS_CONTAINER_ID));

    dispatch(
      eventsApiSendAction({
        event_category: 'quick_events',
        event_action: 'quick_events',
        event_details: {
          event_name: 'attachments_icon_click',
        },
      }),
    );
  }, []);

  return checkFlag(flags, MAIL_FLAG_ATTACHMENTS) || attachments.length > 0 ? (
    <Button
      color="secondary"
      cypressId="BUTTON-ATTACHMENTS"
      icon="paperclip"
      onClick={onClick}
      shape="square"
      size="sm"
      title={t('ReadMail/ctaGoToAttachments')}
    />
  ) : null;
};

export default memo(ButtonAttachments);
