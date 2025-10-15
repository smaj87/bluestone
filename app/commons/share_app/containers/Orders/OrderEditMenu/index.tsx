import Dropdown from 'commons/Dropdown';
import MobileLoader from 'commons/MobileLoader';
import { close as closeSubmenu } from 'commons/ToolbarSubmenu/actions';
import { isOpenBySubmenuId } from 'commons/ToolbarSubmenu/selectors';
import Submenu from 'commons/ToolbarSubmenu/Submenu';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID, ORDER_EDIT_SUBMENU_ID } from './constants';
import Content from './Content';

const OrderEditMenu: FC = () => {
  const isOpenSubmenu = useSelector(isOpenBySubmenuId, ORDER_EDIT_SUBMENU_ID);

  const hideSubmenu = useCallback(() => {
    dispatch(closeSubmenu());
  }, []);

  return (
    <>
      <MobileLoader
        desktop={
          <Dropdown id={DROPDOWN_POPUP_ID}>
            <Content />
          </Dropdown>
        }
        mobile={
          <>
            {isOpenSubmenu ? (
              <Submenu content={<Content />} hide={hideSubmenu} />
            ) : null}
          </>
        }
      />
    </>
  );
};

export default memo(OrderEditMenu);
