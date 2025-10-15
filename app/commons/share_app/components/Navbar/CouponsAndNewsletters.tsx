import ChangeMode from 'commons/ChangeMode';
import LanguageWidget from 'commons/LanguageWidget';
import LogoutLink from 'commons/Links/LogoutLink';
import MobileLoader from 'commons/MobileLoader';
import {
  NavbarContentLeftStyled,
  NavbarContentRightStyled,
} from 'commons/Navbar/styles';
import LogoNavigation from 'commons/share_app/components/LogoNavigation';
import NotificationBell from 'commons/share_app/components/NotificationBell';
import { APP_SETTINGS_SIDE_PANEL_ID } from 'commons/share_app/components/SidePanels/constants';
import SidebarOpen from 'commons/Sidebar/SidebarOpen';
import UserAvatar from 'commons/UserAvatar';
import UserMenu from 'commons/UserMenu';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getNavbarLabel } from 'containers/App/selectorsNavbar';

import NavbarLabel from './NavbarLabel';

const props = {};

const CouponsAndNewsletters: FC = () => {
  const label = useSelector(getNavbarLabel, props);

  return (
    <>
      <NavbarContentLeftStyled role="group">
        <SidebarOpen />
        <LogoNavigation />
        <MobileLoader
          mobile={
            <NavbarLabel
              label={Array.isArray(label) ? label.join(' ') : label}
            />
          }
        />
      </NavbarContentLeftStyled>
      <NavbarContentRightStyled role="group">
        <MobileLoader desktop={<LanguageWidget />} />
        <ChangeMode />
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

export default memo(CouponsAndNewsletters);
