import {
  NavbarContentLeftStyled,
  NavbarContentRightStyled,
} from 'commons/Navbar/styles';
import ButtonBack from 'commons/share_app/components/Buttons/ButtonBack';
import { FC, memo } from 'commons/utils/react';

const Back: FC = () => (
  <>
    <NavbarContentLeftStyled role="group">
      <ButtonBack color="navbar" cypressId="BUTTON-BACK" />
    </NavbarContentLeftStyled>
    <NavbarContentRightStyled role="group" />
  </>
);

export default memo(Back);
