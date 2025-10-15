import { IconImage } from 'commons/Icon/iconImage';
import MobileLoader from 'commons/MobileLoader';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import {
  SIDEMENU_LINK_CLASS,
  SIDEMENU_LINK_LABEL_CLASS,
} from 'commons/Sidebar/constants';
import { isOpen as isOpenSelector } from 'commons/Sidebar/selector';
import SideMenuCounter from 'commons/Sidebar/SideMenuCounter';
import { FC, memo, ReactNode, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';

import SideMenuBadge from './SideMenuBadge';
import {
  SideMenuIconStyled,
  SideMenuItemContentStyled,
  SideMenuItemStyled,
  SideMenuLabelStyled,
  SideMenuLinkStyled,
} from './styles';

interface SideMenuItemProps {
  href: string;
  icon?: IconImage;
  label?: string;
  isActive?: boolean;
  isLast?: boolean;
  isBadge?: boolean;
  counter?: number;
  children?: ReactNode;
  onClick?: () => void;
}

const SideMenuItem: FC<SideMenuItemProps> = ({
  children,
  counter,
  href,
  icon,
  isActive,
  isBadge,
  isLast,
  label,
  onClick,
}) => {
  const isOpen = useSelector(isOpenSelector);

  const onEnter = useCallback(() => {
    if (href) {
      historyPush(href);
    }

    if (onClick) {
      onClick();
    }
  }, [href]);

  return (
    <SideMenuItemStyled $isLast={isLast}>
      <SideMenuItemContentStyled>
        <NavTreeItem isDisabled={isActive} isShow={isOpen} onEnter={onEnter}>
          <SideMenuLinkStyled
            $isActive={isActive}
            aria-label={label}
            className={SIDEMENU_LINK_CLASS}
            href={href}
            onClick={onClick}
            title={label}
          >
            {icon && <SideMenuIconStyled $image={icon} aria-hidden="true" />}
            <MobileLoader
              desktop={
                <SideMenuLabelStyled
                  aria-hidden="true"
                  className={SIDEMENU_LINK_LABEL_CLASS}
                >
                  {label}
                </SideMenuLabelStyled>
              }
            />
            {isBadge && <SideMenuBadge label={label} />}
          </SideMenuLinkStyled>
          {counter && isOpen ? <SideMenuCounter counter={counter} /> : null}
        </NavTreeItem>
      </SideMenuItemContentStyled>
      {children}
    </SideMenuItemStyled>
  );
};

export default memo(SideMenuItem);
