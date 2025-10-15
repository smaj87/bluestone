import useTranslations from 'commons/hooks/useTranslations';
import { ListItemActionsItemStyled } from 'commons/share_app/components/ListElements/ListItemActions/styles';
import { ButtonUnsubscribeStyled } from 'commons/share_app/components/MailItem/MailActions/styles';
import {
  getMailById,
  isMailUnsubscribe,
} from 'commons/share_app/containers/Mails/selectors';
import { unsubscribeNewsletter } from 'commons/share_app/containers/Newsletters/actions';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import {
  FOLDER_DRAFTS_KEY,
  FOLDER_SENT_KEY,
} from 'containers/Folders/constants';
import { isFolderByKey } from 'containers/Folders/selectors';

interface Props {
  id: number;
}

const ButtonUnsubscribe: FC<Props> = ({ id }) => {
  const t = useTranslations();
  const isUnsubscribe = useSelector(isMailUnsubscribe, id);

  const onUnsubscribe = useCallback(() => {
    const mail = getStateValueBySelector(getMailById, id);
    const isDraft = getStateValueBySelector(isFolderByKey, FOLDER_DRAFTS_KEY);
    const isSent = getStateValueBySelector(isFolderByKey, FOLDER_SENT_KEY);

    const email = isDraft || isSent ? mail.to.email : mail.from.email;
    dispatch(unsubscribeNewsletter(id, email));

    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'unsubscribe_clicked',
        mid: id,
      }),
    );
  }, [id]);

  return isUnsubscribe ? (
    <ListItemActionsItemStyled role="listitem">
      <ButtonUnsubscribeStyled
        color="secondary"
        isStretch
        label={t('newslettersUnsubscribeTitle')}
        onClickCapture={onUnsubscribe}
        size="md"
        title={t('components/Lists/MailList/ctaUnsubscribeTitle')}
      />
    </ListItemActionsItemStyled>
  ) : null;
};

export default memo(ButtonUnsubscribe);
