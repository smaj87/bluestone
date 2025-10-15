import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { openSidebar } from 'commons/Sidebar/actions';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import ButtonMenu from '../ButtonMenu';
import { isOpen as isOpenSelector } from '../selector';
import { SidebarOpenStyled } from './styles';

const SidebarOpen: FC = () => {
  const isOpen = useSelector(isOpenSelector);

  const onSidebarOpen = useCallback(() => {
    dispatch(openSidebar());
  }, []);

  return (
    <SidebarOpenStyled>
      {!isOpen ? (
        <NavTreeItem onEnter={onSidebarOpen}>
          <ButtonMenu onClick={onSidebarOpen} />
        </NavTreeItem>
      ) : null}
    </SidebarOpenStyled>
  );
};

export default memo(SidebarOpen);
