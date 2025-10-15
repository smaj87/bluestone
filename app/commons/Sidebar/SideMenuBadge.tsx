import { FC, memo } from 'commons/utils/react';

import { SideMenuBadgeLabelStyled, SideMenuBadgeStyled } from './styles';

interface SideMenuBadgeProps {
  label?: string;
}

const SideMenuBadge: FC<SideMenuBadgeProps> = ({ label }) => (
  <SideMenuBadgeStyled aria-hidden>
    <SideMenuBadgeLabelStyled>{label}</SideMenuBadgeLabelStyled>
  </SideMenuBadgeStyled>
);

export default memo(SideMenuBadge);
