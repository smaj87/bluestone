import {
  NavbarContentLeftStyled,
  NavbarContentRightStyled,
} from 'commons/Navbar/styles';
import ButtonBack from 'commons/share_app/components/Buttons/ButtonBack';
import Pagination from 'commons/share_app/components/Toolbars/ReadMailToolbar/Pagination';
import { memo } from 'commons/utils/react';

const ReadMail = () => (
  <>
    <NavbarContentLeftStyled role="group">
      <ButtonBack color="navbar" cypressId="BUTTON-BACK" />
    </NavbarContentLeftStyled>
    <NavbarContentRightStyled role="group">
      <Pagination />
    </NavbarContentRightStyled>
  </>
);

ReadMail.displayName = 'ReadMail';

export default memo(ReadMail);
