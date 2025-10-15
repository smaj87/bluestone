import Dropdown from 'commons/Dropdown';
import { closeDropdown } from 'commons/Dropdown/actions';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { close } from 'commons/ToolbarSubmenu/actions';
import { isOpenBySubmenuId } from 'commons/ToolbarSubmenu/selectors';
import Submenu from 'commons/ToolbarSubmenu/Submenu';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID, DROPDOWN_TARGET_ID } from './constants';
import Content from './Content';

const LanguageContextMenu: FC = () => {
  const isMobile = useSelector(isMobileSelector);
  const isSubmenuOpen = useSelector(isOpenBySubmenuId, DROPDOWN_POPUP_ID);

  const hideContextMenu = useCallback(() => {
    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));
  }, []);

  if (!isMobile) {
    return (
      <Dropdown
        ariaLabelledBy={`${DROPDOWN_TARGET_ID}-sidepanel`}
        id={DROPDOWN_POPUP_ID}
        placement="bottom-end"
      >
        <Content />
      </Dropdown>
    );
  }

  if (isSubmenuOpen && isMobile) {
    return (
      <Submenu
        ariaLabelledBy={`${DROPDOWN_TARGET_ID}-sidebar ${DROPDOWN_TARGET_ID}-sidepanel`}
        content={<Content />}
        hide={hideContextMenu}
      />
    );
  }

  return null;
};

export default memo(LanguageContextMenu);
