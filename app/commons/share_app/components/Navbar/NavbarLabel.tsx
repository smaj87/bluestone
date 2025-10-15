import { NavbarLabelStyled } from 'commons/Navbar/styles';
import { FC, memo } from 'commons/utils/react';

export interface NavbarLabelProps {
  label?: string;
}

const NavbarLabel: FC<NavbarLabelProps> = ({ label }) =>
  label ? (
    <NavbarLabelStyled data-cypress="NAVBAR-LABEL">{label}</NavbarLabelStyled>
  ) : null;

export default memo(NavbarLabel);
