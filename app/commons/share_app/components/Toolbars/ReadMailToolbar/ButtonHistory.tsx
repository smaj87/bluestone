import { closeDropdown } from 'commons/Dropdown/actions';
import { GroupButton } from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import {
  MAIL_FLAG_BIMI,
  MAIL_FLAG_UNSUBHEADER,
} from 'commons/share_app/containers/Mails/constants';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import { close } from 'commons/ToolbarSubmenu/actions';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID } from 'components/Dropdowns/DropdownDetailMore/constants';
import { getHistoryUrl } from 'utils/route';

const ButtonHistory: FC = () => {
  const t = useTranslations();

  const isFetched = useSelector(getMailField, 'isFetched');

  const onClick = useCallback(() => {
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

    const flags = getStateValueBySelector(
      getMailField,
      'flags',
    ) as ReadMailParsed['flags'];

    const avatar = getStateValueBySelector(
      getMailField,
      'avatar',
    ) as ReadMailParsed['avatar'];

    historyPush(
      getHistoryUrl([
        {
          ...from,
          mid,
          avatar,
          isBimi: checkFlag(flags, MAIL_FLAG_BIMI),
          isUnsubscribe: checkFlag(flags, MAIL_FLAG_UNSUBHEADER),
        },
      ]),
    );
  }, []);

  return (
    <GroupButton
      $align="left"
      color="secondary"
      cypressId="BUTTON-SHOW-HISTORY"
      icon="clock"
      isDisabled={!isFetched}
      label={t('ctaShowHistory')}
      onClick={onClick}
      size="md"
    />
  );
};

export default memo(ButtonHistory);
