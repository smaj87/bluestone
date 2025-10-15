import ButtonGoTop from 'commons/BottomActionButtons/ButtonGoTop';
import Offline from 'commons/Offline';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import ButtonNewMailMobile from './ButtonNewMailMobile';
import { isBottomNav as isBottomNavSelector } from './selectors';
import { BottomNavActionsStyled, BottomNavigationStyled } from './styles';

const BottomNavigation: FC = () => (
  <BottomNavigationStyled $isBottomNav={useSelector(isBottomNavSelector)}>
    <BottomNavActionsStyled>
      <ButtonGoTop />
      <ButtonNewMailMobile />
    </BottomNavActionsStyled>
    <Offline />
  </BottomNavigationStyled>
);

export default memo(BottomNavigation);
