import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { isOpen as isOpenSelector } from 'commons/Sidebar/selector';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { hideSidebar } from './actions';
import ButtonMenu from './ButtonMenu';
import { SideMenuItemStyled } from './styles';

const SideMenuItemClose: FC = () => {
  const isOpen = useSelector(isOpenSelector);

  const onSidebarClose = useCallback(() => {
    dispatch(hideSidebar());
  }, []);

  return (
    <SideMenuItemStyled>
      <NavTreeItem isShow={isOpen} onEnter={onSidebarClose}>
        <ButtonMenu onClick={onSidebarClose} />
      </NavTreeItem>
    </SideMenuItemStyled>
  );
};

export default memo(SideMenuItemClose);
