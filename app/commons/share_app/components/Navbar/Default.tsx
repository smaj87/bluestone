import ChangeMode from 'commons/ChangeMode';
import LogoutLink from 'commons/Links/LogoutLink';
import MobileLoader from 'commons/MobileLoader';
import {
  NavbarContentLeftStyled,
  NavbarContentRightStyled,
} from 'commons/Navbar/styles';
import AdsFree from 'commons/SelfPromoAction/AdsFree';
import PaidPlanEnd from 'commons/SelfPromoAction/PaidPlanEnd';
import LogoNavigation from 'commons/share_app/components/LogoNavigation';
import NotificationBell from 'commons/share_app/components/NotificationBell';
import Search from 'commons/share_app/components/Search';
import { isOpen } from 'commons/share_app/components/Search/selectors';
import { APP_SETTINGS_SIDE_PANEL_ID } from 'commons/share_app/components/SidePanels/constants';
import SidebarOpen from 'commons/Sidebar/SidebarOpen';
import UserAvatar from 'commons/UserAvatar';
import UserMenu from 'commons/UserMenu';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getNavbarLabel } from 'containers/App/selectorsNavbar';

import NavbarLabel from './NavbarLabel';

const props = {};

const Default: FC = () => {
  const label = useSelector(getNavbarLabel, props);
  const isSearchOpen = useSelector(isOpen);

  return (
    <>
      <NavbarContentLeftStyled role="group">
        {!isSearchOpen && <SidebarOpen />}
        <LogoNavigation />
        <MobileLoader
          mobile={
            <NavbarLabel
              label={Array.isArray(label) ? label.join(' ') : label}
            />
          }
        />
        <MobileLoader desktop={<Search />} />
      </NavbarContentLeftStyled>
      <NavbarContentRightStyled role="group">
        <MobileLoader desktop={<AdsFree />} />
        <MobileLoader desktop={<PaidPlanEnd />} />
        <ChangeMode />
        <MobileLoader mobile={<Search />} />
        <NotificationBell />
        <MobileLoader desktop={<UserAvatar />} />
        <UserMenu
          clientId={process.env.CLIENT_ID || ''}
          panelId={APP_SETTINGS_SIDE_PANEL_ID}
        />
        <LogoutLink
          logoutUrl={`${process.env.LOGOUT_URL}${process.env.CLIENT_ID}`}
        />
      </NavbarContentRightStyled>
    </>
  );
};

export default memo(Default);
