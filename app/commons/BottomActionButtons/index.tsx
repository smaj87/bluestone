import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { IconImage } from 'commons/Icon/iconImage';
import {
  BottomNavActionsStyled,
  BottomNavigationStyled,
} from 'commons/share_app/components/BottomNavigation/styles';
import { memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import ButtonAdd from './ButtonAction';
import ButtonGoTop from './ButtonGoTop';

type Props = {
  icon?: IconImage;
  isBottomNav?: boolean;
  label?: string;
  onClick?: () => void;
};

const BottomActionButtons = ({ icon, isBottomNav, label, onClick }: Props) => {
  const isMobile = useSelector(isMobileSelector);

  return (
    <BottomNavigationStyled $isBottomNav={isBottomNav}>
      <BottomNavActionsStyled>
        <ButtonGoTop />
        {!!onClick && isMobile && (
          <ButtonAdd icon={icon} label={label} onClick={onClick} />
        )}
      </BottomNavActionsStyled>
    </BottomNavigationStyled>
  );
};

export default memo(BottomActionButtons);
