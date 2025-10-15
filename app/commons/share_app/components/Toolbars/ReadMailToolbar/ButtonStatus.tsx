import { closeDropdown } from 'commons/Dropdown/actions';
import { GroupButton } from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { toggleFlag } from 'commons/share_app/containers/Mails/actions';
import { MAIL_FLAG_SEEN } from 'commons/share_app/containers/Mails/constants';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import { close } from 'commons/ToolbarSubmenu/actions';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID } from 'components/Dropdowns/DropdownDetailMore/constants';

const ButtonStatus: FC = () => {
  const t = useTranslations();

  const isFetched = useSelector(getMailField, 'isFetched');
  const flags = useSelector(getMailField, 'flags') as ReadMailParsed['flags'];
  const isSeen = checkFlag(flags, MAIL_FLAG_SEEN);

  const onClick = useCallback((event) => {
    event.stopPropagation();
    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));

    const mid = getStateValueBySelector(getMailField, 'mid') as number;
    dispatch(toggleFlag(MAIL_FLAG_SEEN, [mid]));
  }, []);

  return (
    <GroupButton
      $align="left"
      color="secondary"
      cypressId="BUTTON-CHANGE-MAIL-STATUS"
      icon={!isSeen ? 'emailRead' : 'emailUnread'}
      isDisabled={!isFetched}
      label={
        !isSeen
          ? t('ReadMail/ctaMarkAsRead')
          : t('ReadMailToolbar/ctaMarkAsUnread')
      }
      onClick={onClick}
      size="md"
    />
  );
};

export default memo(ButtonStatus);
