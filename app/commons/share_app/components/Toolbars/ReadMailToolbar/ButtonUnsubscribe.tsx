import { closeDropdown } from 'commons/Dropdown/actions';
import { GroupButton } from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { MAIL_FLAG_UNSUBHEADER } from 'commons/share_app/containers/Mails/constants';
import { unsubscribeNewsletter } from 'commons/share_app/containers/Newsletters/actions';
import { isUnsubscribingByMid } from 'commons/share_app/containers/Newsletters/selectors';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import { close } from 'commons/ToolbarSubmenu/actions';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID } from 'components/Dropdowns/DropdownDetailMore/constants';

const ButtonUnsubscribe: FC = () => {
  const t = useTranslations();

  const isFetched = useSelector(getMailField, 'isFetched');
  const midProp = useSelector(getMailField, 'mid') as ReadMailParsed['mid'];
  const isUnsubscribing = useSelector(isUnsubscribingByMid, midProp);
  const flags = useSelector(getMailField, 'flags') as ReadMailParsed['flags'];

  const onClick = useCallback((event) => {
    event.stopPropagation();
    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));

    const mid = getStateValueBySelector(
      getMailField,
      'mid',
    ) as ReadMailParsed['mid'];

    const from = getStateValueBySelector(
      getMailField,
      'from',
    ) as ReadMailParsed['from'];

    dispatch(unsubscribeNewsletter(mid, from?.email));

    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'unsubscribe_clicked',
        mid,
      }),
    );
  }, []);

  return checkFlag(flags, MAIL_FLAG_UNSUBHEADER) ? (
    <GroupButton
      $align="left"
      color="secondary"
      cypressId="BUTTON-UNSUBSCRIBE"
      icon="emailUnsubscribe"
      isDisabled={!isFetched || isUnsubscribing}
      isFetching={isUnsubscribing}
      label={t('ReadMailToolbar/ctaUnsubscribe')}
      onClick={onClick}
      size="md"
    />
  ) : null;
};

export default memo(ButtonUnsubscribe);
