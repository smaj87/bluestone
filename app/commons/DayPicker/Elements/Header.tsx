import type { FC } from 'commons/utils/react';

import HeaderActions from './HeaderActions';
import HeaderInfo from './HeaderInfo';
import { HeaderStyled } from './styles';

const Header: FC = () => (
  <HeaderStyled>
    <HeaderInfo />
    <HeaderActions />
  </HeaderStyled>
);

export default Header;
