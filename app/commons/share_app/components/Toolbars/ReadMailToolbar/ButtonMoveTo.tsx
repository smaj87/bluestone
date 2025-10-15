import { CtaIcon } from 'commons/CallToAction/styles';
import { open } from 'commons/Dropdown/actions';
import { GroupButton } from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { getIsMobile } from 'commons/hooks/useUserConfig/utils';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { open as openSubmenu } from 'commons/ToolbarSubmenu/actions';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { READ_MAIL_MOVE_TO_ID } from 'components/Dropdowns/constants';
import { DROPDOWN_POPUP_ID } from 'components/Dropdowns/DropdownDetailMore/constants';
import {
  DROPDOWN_POPUP_ID as DROPDOWN_LIST_MOVE_TO_POPUP_ID,
  DROPDOWN_TARGET_ID as DROPDOWN_LIST_MOVE_TO_TARGET_ID,
} from 'components/Dropdowns/DropdownListMoveTo/constants';
import { FOLDER_TRASH_KEY } from 'containers/Folders/constants';
import { getFidByKey } from 'containers/Folders/selectors';

import { READ_MAIL_DROPDOWN_MOVE_TO_PREFIX as PREFIX } from './constants';

const ButtonMoveTo: FC = () => {
  const t = useTranslations();

  const isFetched = useSelector(getMailField, 'isFetched');
  const trashFid = useSelector(getFidByKey, FOLDER_TRASH_KEY);

  const onClick = useCallback(() => {
    if (getIsMobile()) {
      dispatch(openSubmenu(READ_MAIL_MOVE_TO_ID));
    } else {
      dispatch(
        open(`${PREFIX}_${DROPDOWN_LIST_MOVE_TO_POPUP_ID}`, {
          targetId: `${PREFIX}_${DROPDOWN_LIST_MOVE_TO_TARGET_ID}`,
          parentId: DROPDOWN_POPUP_ID,
          params: {
            menuSize: 'lg',
          },
        }),
      );
    }
  }, []);

  return (
    <GroupButton
      $align="left"
      color="secondary"
      cypressId="BUTTON-MOVE-TO"
      icon="folderMove"
      id={`${PREFIX}_${DROPDOWN_LIST_MOVE_TO_TARGET_ID}`}
      isDisabled={!isFetched || !trashFid}
      label={t('ctaMoveTo')}
      onClick={onClick}
      size="md"
    >
      <CtaIcon $image="chevronRight" $size="md" />
    </GroupButton>
  );
};

export default memo(ButtonMoveTo);
